'use server';

import { getCurrentUserServer } from '@/features/auth/getCurrentUserServer';
import { getJobApplicationsUseCase } from '../../useCases/jobApplication/public/CRUD';
import { JobApplicationStatus } from '../../statemachines/jobApplicationStatusStateMachine';

export const getUserJobApplicationsAction = async (fitlerString?: string) => {
	const userId = await getCurrentUserServer();
	const response = await getJobApplicationsUseCase(userId, fitlerString);

	if (response.status === 'error') {
		return response;
	}

	const jobApplicationSumary: Map<JobApplicationStatus, number> = new Map();

	response.data.forEach((jobApplication) => {
		const status = jobApplication.status as JobApplicationStatus;
		if (jobApplicationSumary.has(status)) {
			jobApplicationSumary.set(status, jobApplicationSumary.get(status)! + 1);
		} else {
			jobApplicationSumary.set(status, 1);
		}
	});

	return {
		data: {
			applications: response.data,
			summary: jobApplicationSumary,
		},
		status: response.status,
	};
};
