import { db } from '@/features/db/drizzle';
import {
	InsertJobApplicationDto,
	jobApplicationFormSchema,
	JobApplicationFormSchema,
} from '@/features/jobs/models/jobApplication';
import { createJobApplicationService } from '@/features/jobs/services/jobApplication/CRUD';
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';

export const createJobApplicationUseCase_ = async (
	jobApplication: JobApplicationFormSchema,
	userId: string | null,
	connection: PostgresJsDatabase<Record<string, never>> = db
) => {
	if (userId === null) throw new Error('User not found');
	const clearedJobApplication = jobApplicationFormSchema.parse(jobApplication);
	// Update createdAt and updatedAt fields
	const currDate = new Date();
	const newJobApplication: InsertJobApplicationDto = {
		...clearedJobApplication,
		status: 'Submitted',
		user: userId,
		favorite: false,
		createdAt: currDate,
		updatedAt: currDate,
	};
	return await createJobApplicationService(newJobApplication, connection);
};
