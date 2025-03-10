import { db } from '@/features/db/drizzle';
import { JobApplicationDto } from '@/features/jobs/models/jobApplication';
import {
	decodeJobApplicationStatus,
	JobApplicationStatusEvents,
} from '@/features/jobs/statemachines/jobApplicationStatusStateMachine';
import { sendErrorResponse, sendSuccessResponse } from '@/lib/response';
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { updateJobApplicationUseCase_ } from '../private/CRUD';

export const updateJobApplicationStatusUseCase = async (
	jobApplication: JobApplicationDto,
	userId: JobApplicationDto['user'] | null,
	event: JobApplicationStatusEvents,
	next: boolean,
	connection: PostgresJsDatabase<Record<string, never>> = db
) => {
	try {
		// Get the correct state from the curr state and the event and send the updated event to the crud update use case
		jobApplication.status = decodeJobApplicationStatus(
			jobApplication.status,
			event,
			next
		);
		const data = await updateJobApplicationUseCase_(
			jobApplication,
			userId,
			connection
		);
		return sendSuccessResponse<JobApplicationDto>(data[0]);
	} catch (e: unknown) {
		if (e instanceof Error) {
			return sendErrorResponse<JobApplicationDto>(e.message);
		}
		return sendErrorResponse<JobApplicationDto>('An error occurred');
	}
};
