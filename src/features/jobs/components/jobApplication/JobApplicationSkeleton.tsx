import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

const JobApplicationSkeleton = () => {
	return (
		<div className='grid grid-cols-2 gap-2 items-center md:grid-rows-[90px_120px_40px] w-lg'>
			<Skeleton className='w-full h-10 rounded col-span-2 md:col-span-1' />
			<Skeleton className='w-full h-10 rounded col-span-2 md:col-span-1' />
			<Skeleton className='w-full h-10 rounded col-span-2 md:col-span-1' />
			<Skeleton className='w-full h-10 rounded col-span-2 md:col-span-1' />
			<Skeleton className='w-full h-10 rounded col-span-2 md:col-span-1 md:col-start-2' />
		</div>
	);
};

export default JobApplicationSkeleton;
