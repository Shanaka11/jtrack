import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import {
	InsertJobApplicationDto,
	jobApplicationTable,
} from '../../models/jobApplication';

export const createJobApplicationService = async (
	jobApplication: InsertJobApplicationDto,
	connection: PostgresJsDatabase<Record<string, never>>
) => {
	return await connection
		.insert(jobApplicationTable)
		.values(jobApplication)
		.returning();
};

export const getJobApplicationsService = async (
	connection: PostgresJsDatabase<Record<string, never>>
) => {
	return await connection.select().from(jobApplicationTable);
};
