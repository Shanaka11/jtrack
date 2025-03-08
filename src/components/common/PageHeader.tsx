import React from 'react';
import BreadCrumbs, { BreadCrumb } from './BreadCrumbs';

type PageHeaderProps = {
	title: string;
	breadCrumbs: BreadCrumb[];
};

const PageHeader = ({ title, breadCrumbs }: PageHeaderProps) => {
	return (
		<>
			<h1 className='font-bold text-xl'>{title}</h1>
			<BreadCrumbs links={breadCrumbs} />
		</>
	);
};

export default PageHeader;
