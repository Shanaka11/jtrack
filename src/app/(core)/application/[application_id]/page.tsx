import ActionArea from '@/components/common/ActionArea';
import PageHeader from '@/components/common/PageHeader';
import StateProgress from '@/features/jobs/components/jobApplication/StatusProgress';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { getUserJobApplicationByIdAction } from '@/features/jobs/actions/jobApplication/getUserJobApplicationByIdAction';
import { format } from 'date-fns';
import React from 'react';
import StatusChangeButtonsServer from '@/features/jobs/components/jobApplication/StatusChangeButtons';
import FavoriteButton from '@/features/jobs/components/jobApplication/FavoriteButton';
import Link from 'next/link';
import { Edit3Icon, ExternalLink, Trash2 } from 'lucide-react';
import FTooltip from '@/components/common/FTooltip';

const breadCrumbs = [
	{ label: 'Dashboard', href: '/dashboard' },
	{ label: 'Application', href: '/application' },
];

const page = async ({
	params,
}: {
	params: Promise<{ application_id: number }>;
}) => {
	const { application_id } = await params;
	const jobApplicationResponse = await getUserJobApplicationByIdAction(
		application_id
	);

	if (jobApplicationResponse.status === 'error')
		throw new Error(jobApplicationResponse.message);

	return (
		<div className='flex flex-col h-full'>
			{/* Header */}
			<PageHeader
				title={`${jobApplicationResponse.data.jobTitle} - ${jobApplicationResponse.data.company}`}
				breadCrumbs={[
					...breadCrumbs,
					{ label: application_id.toString(), active: true },
				]}
			>
				<div className='flex gap-2 items-center'>
					<FavoriteButton jobApplication={jobApplicationResponse.data} />
					{jobApplicationResponse.data.link && (
						<FTooltip text='View Job Posting'>
							<Link
								href={jobApplicationResponse.data.link}
								target='_blank'
								rel='noreferrer noopenner'
							>
								<ExternalLink
									strokeWidth={1}
									className='hover:scale-120 transition-all duration-300 cursor-pointer'
								/>
							</Link>
						</FTooltip>
					)}
					<FTooltip text='Edit Application'>
						<Edit3Icon
							strokeWidth={1}
							className='hover:scale-120 transition-all duration-300 cursor-pointer stroke-blue-400'
						></Edit3Icon>
					</FTooltip>
					<FTooltip text='Delete Application'>
						<Trash2
							strokeWidth={1}
							className='hover:scale-120 transition-all duration-300 cursor-pointer stroke-red-500'
						/>
					</FTooltip>
				</div>
			</PageHeader>
			<ActionArea>
				<div className='flex flex-col gap-2'>
					<Card className='sm:w-xl md:w-3xl'>
						<CardContent className='flex flex-col gap-2'>
							<StateProgress status={jobApplicationResponse.data.status} />
							<div className='flex gap-2 justify-between'>
								<div className='flex flex-col'>
									<span className='text-sm text-muted-foreground'>
										Last updated on
									</span>
									<span>
										{format(jobApplicationResponse.data.updatedAt, 'PPP')}
									</span>
								</div>
								<div className='flex flex-col'>
									<span className='text-sm text-muted-foreground'>
										Applied on
									</span>
									<span>
										{format(jobApplicationResponse.data.createdAt, 'PPP')}
									</span>
								</div>
							</div>
						</CardContent>
						<CardFooter className='flex justify-between'>
							<StatusChangeButtonsServer
								jobApplication={jobApplicationResponse.data}
							/>
						</CardFooter>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>Events</CardTitle>
						</CardHeader>
						<CardContent></CardContent>
					</Card>
				</div>
			</ActionArea>
		</div>
	);
};

export default page;
