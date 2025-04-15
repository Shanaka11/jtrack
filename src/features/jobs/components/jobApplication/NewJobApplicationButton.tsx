'use client';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import React, { useState } from 'react';
import JobApplicationDialog from './JobApplicationDialog';

const NewJobApplicationButton = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Button size={'sm'} onClick={() => setOpen(true)}>
				<Plus className='h-2 w-2' />
				Add New Application
			</Button>
			<JobApplicationDialog
				open={open}
				onOpenChange={setOpen}
				redirectOnSuccess={true}
			/>
		</>
	);
};

export default NewJobApplicationButton;
