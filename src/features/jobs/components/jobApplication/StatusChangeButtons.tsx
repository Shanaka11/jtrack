'use client';
import React, { useState } from 'react';
import {
	availableEventsForStatus,
	encodeJobApplicationEvent,
} from '../../statemachines/jobApplicationStatusStateMachine';
import { Button } from '@/components/ui/button';
import {
	FileX,
	Handshake,
	Headset,
	MailCheck,
	OctagonX,
	ScrollText,
	StickyNoteIcon,
} from 'lucide-react';
import FTooltip from '@/components/common/FTooltip';
import { updateJobApplicationStatusAction } from '../../actions/jobApplication/updateJobApplicationStatusAction';
import { JobApplicationDto } from '../../models/jobApplication';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'motion/react';

type StatusChangeButtonsServerProps = {
	jobApplication: JobApplicationDto;
};

const getTooltipText = (event: string, next: boolean = true) => {
	if (event === 'Screening') {
		return next ? 'Got a screening call' : 'Return to screening state';
	}
	if (event === 'Interview Called') {
		return next ? 'Invited to further interviews' : 'Return to interview state';
	}

	if (event === 'Got Offer') {
		return next ? 'Got an offer from the company' : 'Return to got offer state';
	}

	if (event === 'New Application') {
		return next ? 'Applied for new job' : 'Return to new application state';
	}

	if (event === 'Rejected') {
		return 'Application was rejected';
	}

	if (event === 'Accepted') {
		return 'Offer accepted';
	}

	if (event === 'Reject Offer') {
		return 'Reject offer';
	}
	return '';
};

const ChangeStatusIcon = ({ event }: { event: string }) => {
	if (event === 'Screening') {
		return <MailCheck />;
	}
	if (event === 'Interview Called') {
		return <Headset />;
	}

	if (event === 'Got Offer') {
		return <StickyNoteIcon />;
	}

	if (event === 'New Application') {
		return <ScrollText />;
	}

	if (event === 'Rejected') {
		return <FileX />;
	}

	if (event === 'Accepted') {
		return <Handshake />;
	}

	if (event === 'Reject Offer') {
		return <OctagonX />;
	}
	return null;
};

const StatusChangeButtons = ({
	jobApplication,
}: StatusChangeButtonsServerProps) => {
	const { next, previous } = availableEventsForStatus(jobApplication.status);
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const handleStatusChange = async (event: string, next: boolean) => {
		try {
			setIsLoading(true);
			const cleanedEvent = encodeJobApplicationEvent(event);
			const response = await updateJobApplicationStatusAction(
				jobApplication,
				cleanedEvent,
				next
			);
			if (response.status === 'error') {
				toast.error(response.message);
				return;
			}
			// refresh the page
			router.refresh();
		} catch (e: unknown) {
			if (e instanceof Error) {
				toast.error(e.message);
				return;
			}
			toast.error('An error occurred');
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<AnimatePresence>
			<div className='flex gap-2' key='Prev'>
				{Object.keys(previous).map((item) => {
					// if(item === 'New Application'){
					return (
						<FTooltip key={`Prev-${item}`} text={getTooltipText(item, false)}>
							<motion.div
								initial={{ opacity: 0, scale: 0 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0 }}
								key={`Prev-${item}`}
							>
								<Button
									size='icon'
									className='cursor-pointer'
									onClick={() => handleStatusChange(item, false)}
									disabled={isLoading}
								>
									<ChangeStatusIcon event={item} />
								</Button>
							</motion.div>
						</FTooltip>
					);
				})}
			</div>
			<div className='flex gap-2' key='Next'>
				{Object.keys(next).map((item) => {
					return (
						<FTooltip key={`Next-${item}`} text={getTooltipText(item, true)}>
							<Button
								size='icon'
								className='cursor-pointer'
								disabled={isLoading}
								onClick={() => handleStatusChange(item, true)}
								key={`Next-${item}`}
							>
								<ChangeStatusIcon event={item} />
							</Button>
						</FTooltip>
					);
				})}
			</div>
		</AnimatePresence>
	);
};

export default StatusChangeButtons;
