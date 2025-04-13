'use client';
import React from 'react';
import JobApplicationDialog from './JobApplicationDialog';
import FTooltip from '@/components/common/FTooltip';
import { Edit3Icon } from 'lucide-react';
import { JobApplicationDto } from '../../models/jobApplication';

type EditJobApplicationButtonProps = {
	jobApplication: JobApplicationDto;
};

const EditJobApplicationButton = ({
	jobApplication,
}: EditJobApplicationButtonProps) => {
	const [open, setOpen] = React.useState(false);

	return (
		<>
			<FTooltip text='Edit Application'>
				<Edit3Icon
					strokeWidth={1}
					className='hover:scale-120 transition-all duration-300 cursor-pointer stroke-blue-400'
					onClick={() => setOpen(true)}
				></Edit3Icon>
			</FTooltip>
			<JobApplicationDialog
				open={open}
				onOpenChange={setOpen}
				jobApplication={jobApplication}
			/>
		</>
	);
};

export default EditJobApplicationButton;
