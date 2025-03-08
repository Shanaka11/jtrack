import { db } from '@/features/db/drizzle';
import { createJobApplicationUseCase_ } from '../private/CRUD';
import {
	JobApplicationDto,
	JobApplicationFormSchema,
} from '@/features/jobs/models/jobApplication';
import { sendErrorResponse, sendSuccessResponse } from '@/lib/response';

export const createJobApplicationUseCase = async (
	jobApplication: JobApplicationFormSchema,
	userId: string | null
) => {
	try {
		const createdApplication = await db.transaction(async (tx) => {
			return createJobApplicationUseCase_(jobApplication, userId, tx);
		});

		return sendSuccessResponse<JobApplicationDto>(createdApplication[0]);
	} catch (e: unknown) {
		if (e instanceof Error) {
			return sendErrorResponse<JobApplicationDto>(e.message);
		}
		return sendErrorResponse<JobApplicationDto>('An error occurred');
	}
};
