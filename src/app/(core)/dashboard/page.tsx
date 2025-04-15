import ActionArea from '@/components/common/ActionArea';
import PageHeader from '@/components/common/PageHeader';
import { getUserJobApplicationsAction } from '@/features/jobs/actions/jobApplication/getUserJobApplicationsAction';
import JobApplicationList from '@/features/jobs/components/jobApplication/list/JobApplicationList';
import React from 'react';

const breadCrumbs = [{ label: 'Applications', active: true }];

const page = async ({
	searchParams,
}: {
	searchParams: Promise<{ filter?: string }>;
}) => {
	const filterString = (await searchParams).filter;
	const jobApplicationsResponse = await getUserJobApplicationsAction(
		filterString
	);

	if (jobApplicationsResponse.status === 'error')
		throw new Error(jobApplicationsResponse.message);

	return (
		<div className='flex flex-col min-h-[calc(100dvh-48px)]'>
			{/* Header */}
			<PageHeader title='Applications' breadCrumbs={breadCrumbs} />
			{/* Table */}
			<ActionArea>
				<JobApplicationList
					jobApplications={jobApplicationsResponse.data.applications}
					jibApplicationSummary={jobApplicationsResponse.data.summary}
					filterString={filterString || ''}
				/>
			</ActionArea>
		</div>
	);
};

export default page;
