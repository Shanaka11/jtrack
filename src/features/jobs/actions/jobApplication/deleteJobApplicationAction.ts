'use server';

import { getCurrentUserServer } from '@/features/auth/getCurrentUserServer';
import { JobApplicationDto } from '../../models/jobApplication';
import { deleteJobApplicationUseCase } from '../../useCases/jobApplication/public/CRUD';

export const deleteJobApplicationAction = async (
	jobApplication: JobApplicationDto
) => {
	const userId = await getCurrentUserServer();
	console.log('userId', jobApplication);
	return await deleteJobApplicationUseCase(jobApplication, userId);
};
