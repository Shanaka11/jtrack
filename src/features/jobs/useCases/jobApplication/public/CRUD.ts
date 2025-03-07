import { db } from '@/features/db/drizzle';
import { createJobApplicationUseCase_ } from '../private/CRUD';
import { InsertJobApplicationDto } from '@/features/jobs/models/jobApplication';

export const createJobApplicationUseCase = async (
	jobApplication: InsertJobApplicationDto
) => {
	try {
		return await db.transaction(async (tx) => {
			return createJobApplicationUseCase_(jobApplication, tx);
		});
	} catch (e: unknown) {
		if (e instanceof Error) {
			return { error: e.message };
		}
		return { error: 'An error occurred' };
	}
};
