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
import { ExternalLink } from 'lucide-react';
import FTooltip from '@/components/common/FTooltip';
import DeleteJobApplicationButton from '@/features/jobs/components/jobApplication/DeleteJobApplicationButton';
import EditJobApplicationButton from '@/features/jobs/components/jobApplication/EditJobApplicationButton';

const breadCrumbs = [{ label: 'Applications', href: '/dashboard' }];

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
		<div className='flex flex-col h-full min-h-[calc(100dvh-48px)]'>
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
					<EditJobApplicationButton
						jobApplication={jobApplicationResponse.data}
					/>
					<DeleteJobApplicationButton
						jobApplication={jobApplicationResponse.data}
					/>
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
										{format(jobApplicationResponse.data.dateApplied, 'PPP')}
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
