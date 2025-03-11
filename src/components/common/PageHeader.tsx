import React from 'react';
import BreadCrumbs, { BreadCrumb } from './BreadCrumbs';

type PageHeaderProps = {
	title: string;
	breadCrumbs: BreadCrumb[];
	children?: React.ReactNode;
};

const PageHeader = ({ title, breadCrumbs, children }: PageHeaderProps) => {
	return (
		<>
			<div className='flex flex-col md:flex-row md:justify-between gap-1 md:items-center mb-1 md:mb-0'>
				<h1 className='font-bold text-xl overflow-hidden text-ellipsis'>
					{title}
				</h1>
				{children}
			</div>
			<BreadCrumbs links={breadCrumbs} />
		</>
	);
};

export default PageHeader;
