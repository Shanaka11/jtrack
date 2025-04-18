import ActionArea from '@/components/common/ActionArea';
import PageHeader from '@/components/common/PageHeader';
import React from 'react';

const breadCrumbs = [
	{ label: 'Applications', href: '/dashboard' },
	{ label: 'New Applications', active: true },
];

const layout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<div className='flex flex-col h-full min-h-[calc(100dvh-48px)]'>
			{/* Header */}
			<PageHeader title='New Application' breadCrumbs={breadCrumbs} />
			<ActionArea>{children}</ActionArea>
		</div>
	);
};

export default layout;
