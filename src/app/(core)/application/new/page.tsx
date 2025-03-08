import PageHeader from '@/components/common/PageHeader';
import NewJobApplicationForm from '@/features/jobs/components/jobApplication/NewJobApplicationForm';
import React from 'react';

const breadCrumbs = [
	{ label: 'Dashboard', href: '/dashboard' },
	{ label: 'Application', href: '/applications' },
	{ label: 'New Applications', active: true },
];

const page = () => {
	return (
		<div className='flex flex-col'>
			{/* Header */}
			<PageHeader title='New Application' breadCrumbs={breadCrumbs} />
			<div className='mt-4 grid place-items-center md:place-items-start'>
				<NewJobApplicationForm />
			</div>
		</div>
	);
};

export default page;
