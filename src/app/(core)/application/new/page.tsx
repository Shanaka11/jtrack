import { Card, CardContent } from '@/components/ui/card';
import NewJobApplicationForm from '@/features/jobs/components/jobApplication/NewJobApplicationForm';
import React from 'react';

const page = () => {
	return (
		<Card>
			<CardContent>
				<NewJobApplicationForm redirectOnSuccess={true} />
			</CardContent>
		</Card>
	);
};

export default page;
