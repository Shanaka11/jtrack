import { Card, CardContent } from '@/components/ui/card';
import JobApplicationSkeleton from '@/features/jobs/components/jobApplication/JobApplicationSkeleton';
import React from 'react';

const loading = () => {
	return (
		<Card>
			<CardContent>
				<JobApplicationSkeleton />
			</CardContent>
		</Card>
	);
};

export default loading;
