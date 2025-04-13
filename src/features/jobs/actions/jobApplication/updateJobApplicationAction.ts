'use server';
import { getCurrentUserServer } from '@/features/auth/getCurrentUserServer';
import { JobApplicationDto } from '../../models/jobApplication';
import { updateJobApplicationUseCase } from '../../useCases/jobApplication/public/CRUD';

export const updateJobApplicationAction = async (
	jobApplication: JobApplicationDto
) => {
	const userId = await getCurrentUserServer();
	return await updateJobApplicationUseCase(jobApplication, userId);
};
