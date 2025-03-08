'use server';

import { getCurrentUserServer } from '@/features/auth/getCurrentUserServer';
import { JobApplicationFormSchema } from '../../models/jobApplication';
import { createJobApplicationUseCase } from '../../useCases/jobApplication/public/CRUD';

export const createJobApplicationAction = async (
	jobApplication: JobApplicationFormSchema
) => {
	const userId = await getCurrentUserServer();
	return await createJobApplicationUseCase(jobApplication, userId);
};
