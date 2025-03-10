'use server';

import { getCurrentUserServer } from '@/features/auth/getCurrentUserServer';
import { getJobApplicationByIdUseCase } from '../../useCases/jobApplication/public/CRUD';
import { JobApplicationDto } from '../../models/jobApplication';

export const getUserJobApplicationByIdAction = async (
	id: JobApplicationDto['id']
) => {
	const userId = await getCurrentUserServer();
	return await getJobApplicationByIdUseCase(id, userId);
};
