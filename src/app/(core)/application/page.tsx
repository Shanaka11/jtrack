import BreadCrumbs from '@/components/common/BreadCrumbs';
import JobApplicationTable from '@/features/jobs/components/jobApplication/table/JobApplicationTable';
import React from 'react';

const breadCrumbs = [
	{ label: 'Dashboard', href: '/dashboard' },
	{ label: 'Applications', active: true },
];

const page = () => {
	return (
		<div className='flex flex-col'>
			<h1 className='font-bold text-xl'>Applications</h1>
			{/* Bread Crumbs */}
			<BreadCrumbs links={breadCrumbs} />
			{/* Table */}
			<JobApplicationTable className='mt-4' />
		</div>
	);
};

export default page;
