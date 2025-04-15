import ActionArea from '@/components/common/ActionArea';
import PageHeader from '@/components/common/PageHeader';
import React from 'react';

const breadCrumbs = [{ label: 'Applications', active: true }];

const page = () => {
	return (
		<div className='flex flex-col min-h-[calc(100dvh-48px)]'>
			{/* Header */}
			<PageHeader title='Applications' breadCrumbs={breadCrumbs} />
			{/* Table */}
			{/* <JobApplicationTable className='mt-4' /> */}
			<ActionArea>
				<h1>Test</h1>
			</ActionArea>
		</div>
	);
};

export default page;
