import PageHeader from '@/components/common/PageHeader';
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
			<p>Selected stuff</p>
		</div>
	);
};

export default page;
