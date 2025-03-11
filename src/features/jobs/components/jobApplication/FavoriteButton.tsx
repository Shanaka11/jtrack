'use client';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';
import React, { useState } from 'react';
import { toast } from 'sonner';
import { JobApplicationDto } from '../../models/jobApplication';
import { toggleJobApplicationFavoriteAction } from '../../actions/jobApplication/toggleJobApplicationFavoriteAction';
import FTooltip from '@/components/common/FTooltip';

type FavoriteButtonProps = {
	jobApplication: JobApplicationDto;
};

const FavoriteButton = ({ jobApplication }: FavoriteButtonProps) => {
	const [favorite, setFavorite] = useState(jobApplication.favorite);
	const [isLoading, setIsLoading] = useState(false);

	const handleOnClick = async () => {
		if (isLoading) return;
		try {
			setIsLoading(true);
			const tempFavorite = !favorite;
			setFavorite((prevState) => !prevState);
			const response = await toggleJobApplicationFavoriteAction(
				jobApplication,
				tempFavorite
			);
			if (response.status === 'error') {
				toast.error(response.message);
				return;
			}
			toast.success('Job Application updated');
		} catch (e: unknown) {
			setFavorite((prevState) => !prevState);
			if (e instanceof Error) {
				toast.error(e.message);
				return;
			}
			toast.error('There was an error');
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<FTooltip text='Favorite'>
			<Star
				strokeWidth={1}
				className={cn(
					'stroke-yellow-400 hover:scale-120 transition-all duration-300 cursor-pointer',
					favorite && 'fill-yellow-400'
				)}
				onClick={handleOnClick}
			/>
		</FTooltip>
	);
};

export default FavoriteButton;
