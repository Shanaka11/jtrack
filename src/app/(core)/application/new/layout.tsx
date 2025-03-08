import ActionArea from '@/components/common/ActionArea';
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
			<ActionArea>{children}</ActionArea>
		</div>
	);
};

export default layout;
