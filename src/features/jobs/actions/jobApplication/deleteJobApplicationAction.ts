'use server';

import { getCurrentUserServer } from '@/features/auth/getCurrentUserServer';
import { JobApplicationDto } from '../../models/jobApplication';
import { deleteJobApplicationUseCase } from '../../useCases/jobApplication/public/CRUD';

export const deleteJobApplicationAction = async (
	jobApplication: JobApplicationDto
) => {
	const userId = await getCurrentUserServer();
	return await deleteJobApplicationUseCase(jobApplication, userId);
};
