'use client';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';
import React from 'react';
import NewJobApplicationForm from './NewJobApplicationForm';
import { JobApplicationDto } from '../../models/jobApplication';

type JobApplicationDialogProps = {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	jobApplication?: JobApplicationDto;
	redirectOnSuccess?: boolean;
};

const JobApplicationDialog = ({
	open,
	onOpenChange,
	jobApplication,
	redirectOnSuccess,
}: JobApplicationDialogProps) => {
	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent aria-description='Create / Update a new job application'>
				<DialogHeader>
					<DialogTitle>{`${
						jobApplication === undefined ? 'Create New' : 'Update'
					} Application`}</DialogTitle>
				</DialogHeader>
				<div className='mt-3'>
					<NewJobApplicationForm
						jobApplication={jobApplication}
						handleSuccess={() => onOpenChange(false)}
						redirectOnSuccess={redirectOnSuccess}
					/>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default JobApplicationDialog;
