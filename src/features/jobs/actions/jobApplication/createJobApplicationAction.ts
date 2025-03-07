'use server';

import { InsertJobApplicationDto } from '../../models/jobApplication';
import { createJobApplicationUseCase } from '../../useCases/jobApplication/public/CRUD';

export const createJobApplicationAction = async (
	jobApplication: InsertJobApplicationDto
) => {
	return await createJobApplicationUseCase(jobApplication);
};
