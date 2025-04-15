'use client';
import { JobApplicationDto } from '@/features/jobs/models/jobApplication';
import React, { useEffect, useState } from 'react';
import {
	JobApplicationBackgroundColorSelector,
	JobApplicationTextColorSelector,
} from '../utils/JobApplicationColorSelector';
import { format } from 'date-fns';
import Link from 'next/link';
import {
	JobApplicationStatus,
	jobApplicationStatusArray,
} from '@/features/jobs/statemachines/jobApplicationStatusStateMachine';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

type JobApplicationListProps = {
	jobApplications: JobApplicationDto[];
	jibApplicationSummary: Map<JobApplicationStatus, number>;
	filterString: string;
};

const JobApplicationList = ({
	jobApplications,
	jibApplicationSummary,
	filterString,
}: JobApplicationListProps) => {
	const [activeFilters, setActiveFilters] = useState<Set<JobApplicationStatus>>(
		new Set()
	);

	const router = useRouter();

	useEffect(() => {
		console.log('filterString ef', filterString);
		decodeFilterString(filterString);
	}, [filterString]);

	const decodeFilterString = (filterString: string) => {
		if (filterString === '') {
			setActiveFilters(new Set());
			return;
		}
		// Because of technical difficuties we will only allow one filter
		// if (filterString[0] === 'o') {
		// 	// This has multiple filter
		// 	const filterArray = [
		// 		...filterString.matchAll(/eq\(status,([^)]+)\)/g),
		// 	].map((m) => m[1]);

		// 	setActiveFilters(new Set(filterArray as JobApplicationStatus[]));
		// } else {
		// This has a single filter
		const filterArray = filterString.split(',');
		const status = filterArray[1].split(')')[0];
		setActiveFilters(new Set([status as JobApplicationStatus]));
		// }
	};

	const handleFilterItemOnClick = (selectedStatus: JobApplicationStatus) => {
		// Because of technical difficuties we will only allow one filter
		if (activeFilters.has(selectedStatus)) {
			router.push('/dashboard');
			return;
			// Then remove this item and generate the url
			// 	const newfilterArray: string[] = [];
			// 	activeFilters.forEach((item) => {
			// 		if (item !== selectedStatus) {
			// 			newfilterArray.push(`eq(status,${item})`);
			// 		}
			// 	});
			// 	// generate the url with the selected item and the active filters
			// 	if (newfilterArray.length === 0) {
			// 		router.push('/dashboard');
			// 		return;
			// 	}
			// 	if (newfilterArray.length > 1) {
			// 		router.push(`/dashboard?filter=or(${newfilterArray.join(',')})`);
			// 	} else {
			// 		router.push(`/dashboard?filter=${newfilterArray[0]}`);
			// 	}
		} else {
			// const newfilterArray: string[] = [];
			// activeFilters.forEach((item) =>
			// 	newfilterArray.push(`eq(status,${item})`)
			// );
			// newfilterArray.push(`eq(status,${selectedStatus})`);
			// generate the url with the selected item and the active filters
			// if (newfilterArray.length > 1) {
			// 	router.push(`/dashboard?filter=or(${newfilterArray.join(',')})`);
			// } else {
			// router.push(`/dashboard?filter=${newfilterArray[0]}`);
			// }
			router.push(`/dashboard?filter=eq(status,${selectedStatus})`);
		}
	};

	return (
		<div>
			<div className='flex items-center gap-2 justify-center mb-4 flex-wrap'>
				{jobApplicationStatusArray.map((status) => (
					<div
						key={status}
						className={cn(
							`rounded-md ${JobApplicationBackgroundColorSelector(
								status
							)} px-2.5 py-1.5 text-xs font-medium ${JobApplicationTextColorSelector(
								status
							)} cursor-pointer`,
							activeFilters.has(status) && 'bg-primary text-white'
						)}
						onClick={() => handleFilterItemOnClick(status)}
					>
						{`${status} (${jibApplicationSummary.get(status) ?? 0})`}
					</div>
				))}
			</div>
			<ul className='grid grid-cols-2 gap-4'>
				{jobApplications.map((application) => (
					<li
						key={application.id}
						className='grid grid-cols-[auto_1fr_auto] items-center gap-4 p-4 rounded-lg border hover:bg-slate-50 dark:border-gray-800 dark:hover:bg-gray-800/50 transition-colors cursor-pointer group'
					>
						<div
							className={`h-12 w-12 rounded-md ${JobApplicationBackgroundColorSelector(
								application.status
							)} flex items-center justify-center`}
						>
							<span
								className={`${JobApplicationTextColorSelector(
									application.status
								)} font-medium`}
							>
								{application.company.substring(0, 2)}
							</span>
						</div>
						<div>
							<Link
								href={`/application/${application.id}`}
								target='_blank'
								rel='noopener noreferrer'
							>
								<h4 className='font-medium hover:underline'>
									{application.jobTitle}
								</h4>
							</Link>
							<p className='text-xs text-muted-foreground'>
								{application.company} • Applied on{' '}
								{format(application.dateApplied, 'PPP')}
							</p>
						</div>
						<div
							className={`rounded-md ${JobApplicationBackgroundColorSelector(
								application.status
							)} px-2.5 py-1.5 text-xs font-medium ${JobApplicationTextColorSelector(
								application.status
							)}`}
						>
							{application.status}
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default JobApplicationList;
