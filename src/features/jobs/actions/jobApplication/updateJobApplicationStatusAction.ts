'use server';

import { getCurrentUserServer } from '@/features/auth/getCurrentUserServer';
import { updateJobApplicationStatusUseCase } from '../../useCases/jobApplication/public/updateJobApplicationStatus';
import { JobApplicationDto } from '../../models/jobApplication';
import { JobApplicationStatusEvents } from '../../statemachines/jobApplicationStatusStateMachine';

export const updateJobApplicationStatusAction = async (
	jobApplication: JobApplicationDto,
	event: JobApplicationStatusEvents,
	next: boolean
) => {
	const userId = await getCurrentUserServer();
	return await updateJobApplicationStatusUseCase(
		jobApplication,
		userId,
		event,
		next
	);
};
