import PageHeader from '@/components/common/PageHeader';
import React from 'react';

const breadCrumbs = [
	{ label: 'Dashboard', href: '/dashboard' },
	{ label: 'Applications', href: '/application' },
	{ label: 'New Applications', active: true },
];

const layout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<div className='flex flex-col h-full'>
			{/* Header */}
			<PageHeader title='New Application' breadCrumbs={breadCrumbs} />
			<div className='my-4 grid justify-center bg-muted p-4 h-full items-start'>
				{children}
			</div>
		</div>
		// <div>{children}</div>
	);
};

export default layout;
