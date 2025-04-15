'use client';
import AlertOkCancel from '@/components/common/AlertOkCancel';
import FTooltip from '@/components/common/FTooltip';
import { Trash2 } from 'lucide-react';
import React, { useState } from 'react';
import { JobApplicationDto } from '../../models/jobApplication';
import { toast } from 'sonner';
import { deleteJobApplicationAction } from '../../actions/jobApplication/deleteJobApplicationAction';
import { useRouter } from 'next/navigation';

type DeleteJobApplicationButtonProps = {
	jobApplication: JobApplicationDto;
};
const DeleteJobApplicationButton = ({
	jobApplication,
}: DeleteJobApplicationButtonProps) => {
	const [showAlert, setShowAlert] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const handleAlertOk = async () => {
		try {
			setIsLoading(true);
			const response = await deleteJobApplicationAction(jobApplication);
			if (response.status === 'error') {
				toast.error(response.message);
				return;
			}
			toast.success('Job Application deleted');
			// riderect to application
			router.push('/dashboard');
		} catch (e: unknown) {
			if (e instanceof Error) {
				toast.error(e.message);
				return;
			}
			toast.error('There was an error');
		} finally {
			setIsLoading(false);
		}
	};

	const handleOnClick = () => {
		if (isLoading) return;
		setShowAlert(true);
	};

	return (
		<>
			<AlertOkCancel
				open={showAlert}
				handleCancel={() => setShowAlert(false)}
				handleOk={handleAlertOk}
				text={
					'This action will delete your application and all its connected events, Are you sure to continue?'
				}
			/>
			<FTooltip text='Delete Application'>
				<Trash2
					strokeWidth={1}
					className='hover:scale-120 transition-all duration-300 cursor-pointer stroke-red-500'
					onClick={handleOnClick}
				/>
			</FTooltip>
		</>
	);
};

export default DeleteJobApplicationButton;
