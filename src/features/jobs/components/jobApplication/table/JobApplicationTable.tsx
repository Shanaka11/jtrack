import TableToolbar from '@/components/common/TableToolbar';
import React, { HtmlHTMLAttributes } from 'react';

type JobApplicationTableProps = {
	data?: string[];
};

const JobApplicationTable = ({
	className,
}: JobApplicationTableProps & HtmlHTMLAttributes<HTMLDivElement>) => {
	const handleEditApplication = () => {};
	const handleDeleteApplication = () => {};
	const handleRefreshApplication = () => {};
	return (
		<div className={className}>
			<TableToolbar
				handleEdit={handleEditApplication}
				handleDelete={handleDeleteApplication}
				handleRefresh={handleRefreshApplication}
			/>
		</div>
	);
};

export default JobApplicationTable;
