import PageHeader from '@/components/common/PageHeader';
import JobApplicationTable from '@/features/jobs/components/jobApplication/table/JobApplicationTable';
import React from 'react';

const breadCrumbs = [{ label: 'Applications', active: true }];

const page = () => {
	return (
		<div className='flex flex-col min-h-[calc(100dvh-48px)]'>
			{/* Header */}
			<PageHeader title='Applications' breadCrumbs={breadCrumbs} />
			{/* Table */}
			<JobApplicationTable className='mt-4' />
		</div>
	);
};

export default page;
