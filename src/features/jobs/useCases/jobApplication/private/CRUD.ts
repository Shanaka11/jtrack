import {
	InsertJobApplicationDto,
	JobApplicationDto,
	jobApplicationFormSchema,
	JobApplicationFormSchema,
} from '@/features/jobs/models/jobApplication';
import {
	createJobApplicationService,
	getJobApplicationsService,
	updateJobApplicationService,
} from '@/features/jobs/services/jobApplication/CRUD';
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';

export const createJobApplicationUseCase_ = async (
	jobApplication: JobApplicationFormSchema,
	userId: string | null,
	connection: PostgresJsDatabase<Record<string, never>>
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

export const getJobApplicationUseCase_ = async (
	connection: PostgresJsDatabase<Record<string, never>>,
	userId: string,
	filterString?: string
) => {
	if (filterString) {
		return await getJobApplicationsService(
			connection,
			`and(eq(user,${userId}),${filterString})`
		);
	}
	return await getJobApplicationsService(connection, `eq(user,${userId})`);
};

export const getJobApplicationByIdUseCase_ = async (
	id: JobApplicationDto['id'],
	userId: JobApplicationDto['user'] | null,
	connection: PostgresJsDatabase<Record<string, never>>
) => {
	if (userId === null) throw new Error('User not found');
	return getJobApplicationsService(
		connection,
		`and(eq(user,${userId}),eq(id,${id}))`
	);
};

export const updateJobApplicationUseCase_ = async (
	jobApplication: JobApplicationDto,
	userId: string | null,
	connection: PostgresJsDatabase<Record<string, never>>
) => {
	// Check if the user is correct
	if (jobApplication.user !== userId)
		throw new Error('The user does not own this record, cannot update.');
	// Check if edited in someware else
	const oldrec = await getJobApplicationByIdUseCase_(
		jobApplication.id,
		userId,
		connection
	);
	if (oldrec[0].updatedAt.getTime !== jobApplication.updatedAt.getTime) {
		throw new Error('Record is updated by someone else');
	}
	// Update the updatedAt field
	jobApplication.updatedAt = new Date();
	return await updateJobApplicationService(jobApplication, connection);
};
