import { JobApplicationDto } from '@/features/jobs/models/jobApplication';
import { updateJobApplicationUseCase_ } from '../private/CRUD';
import { sendErrorResponse, sendSuccessResponse } from '@/lib/response';
import { db } from '@/features/db/drizzle';

export const toggleJobApplicationFavoriteUserCase = async (
	jobApplication: JobApplicationDto,
	isFavorite: boolean,
	userId: JobApplicationDto['user'] | null
) => {
	try {
		jobApplication.favorite = isFavorite;
		const data = await updateJobApplicationUseCase_(jobApplication, userId, db);
		return sendSuccessResponse<JobApplicationDto>(data[0]);
	} catch (e: unknown) {
		if (e instanceof Error) {
			return sendErrorResponse<JobApplicationDto>(e.message);
		}
		return sendErrorResponse<JobApplicationDto>('An error occurred');
	}
};
