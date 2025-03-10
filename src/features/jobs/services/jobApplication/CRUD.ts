import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { generateDrizzleFilter } from 'drizzle-query-helper';
import {
	InsertJobApplicationDto,
	JobApplicationDto,
	jobApplicationTable,
} from '../../models/jobApplication';
import { eq } from 'drizzle-orm';

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
	connection: PostgresJsDatabase<Record<string, never>>,
	filterString?: string
) => {
	const query = connection.select().from(jobApplicationTable).$dynamic();

	if (filterString) {
		//@ts-expect-error types not defined
		const filter = generateDrizzleFilter(jobApplicationTable, filterString);
		if (filter !== null && filter !== undefined) {
			//@ts-expect-error types not defined
			query.where(filter);
		}
	}

	return await query;
};

export const updateJobApplicationService = async (
	jobApplication: JobApplicationDto,
	connection: PostgresJsDatabase<Record<string, never>>
) => {
	return await connection
		.update(jobApplicationTable)
		.set({
			company: jobApplication.company,
			dateApplied: jobApplication.dateApplied,
			favorite: jobApplication.favorite,
			jobTitle: jobApplication.jobTitle,
			link: jobApplication.link,
			status: jobApplication.status,
			updatedAt: jobApplication.updatedAt,
		})
		.where(eq(jobApplicationTable.id, jobApplication.id))
		.returning();
};
