import { db } from '@/features/db/drizzle';
import { InsertJobApplicationDto } from '@/features/jobs/models/jobApplication';
import { createJobApplicationService } from '@/features/jobs/services/jobApplication/CRUD';
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';

export const createJobApplicationUseCase_ = async (
	jobApplication: InsertJobApplicationDto,
	connection: PostgresJsDatabase<Record<string, never>> = db
) => {
	// Update createdAt and updatedAt fields
	const currDate = new Date();
	jobApplication.createdAt = currDate;
	jobApplication.updatedAt = currDate;
	return await createJobApplicationService(jobApplication, connection);
};
