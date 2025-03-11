import { db } from '@/features/db/drizzle';
import {
	createJobApplicationUseCase_,
	deleteJobApplicationUseCase_,
	getJobApplicationByIdUseCase_,
} from '../private/CRUD';
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

export const getJobApplicationByIdUseCase = async (
	id: JobApplicationDto['id'],
	userId: JobApplicationDto['user'] | null
) => {
	try {
		const createdApplication = await getJobApplicationByIdUseCase_(
			id,
			userId,
			db
		);
		return sendSuccessResponse<JobApplicationDto>(createdApplication[0]);
	} catch (e: unknown) {
		if (e instanceof Error) {
			return sendErrorResponse<JobApplicationDto>(e.message);
		}
		return sendErrorResponse<JobApplicationDto>('An error occurred');
	}
};

export const deleteJobApplicationUseCase = async (
	jobApplication: JobApplicationDto,
	userId: JobApplicationDto['user'] | null
) => {
	try {
		const response = await deleteJobApplicationUseCase_(
			jobApplication,
			userId,
			db
		);
		return sendSuccessResponse<JobApplicationDto>(response[0]);
	} catch (e: unknown) {
		if (e instanceof Error) {
			return sendErrorResponse<JobApplicationDto>(e.message);
		}
		return sendErrorResponse<JobApplicationDto>('An error occurred');
	}
};
