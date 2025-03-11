'use server';
import { getCurrentUserServer } from '@/features/auth/getCurrentUserServer';
import { toggleJobApplicationFavoriteUserCase } from '../../useCases/jobApplication/public/toggleJobApplicationFavoriteUseCase';
import { JobApplicationDto } from '../../models/jobApplication';

export const toggleJobApplicationFavoriteAction = async (
	jobApplication: JobApplicationDto,
	isFavorite: boolean
) => {
	const userId = await getCurrentUserServer();
	return await toggleJobApplicationFavoriteUserCase(
		jobApplication,
		isFavorite,
		userId
	);
};
