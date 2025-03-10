import React from 'react';
import { cn } from '@/lib/utils';
import {
	JobApplicationStatus,
	jobApplicationStatusArray,
} from '../../statemachines/jobApplicationStatusStateMachine';

type StatusProgressProps = {
	status: JobApplicationStatus;
};

const StatusProgress = ({ status }: StatusProgressProps) => {
	const step = jobApplicationStatusArray.indexOf(status);

	return (
		<div className='text-center md:px-5 mb-14'>
			<div className='flex justify-between my-1 w-full relative before:content[""] before:absolute before:bg-muted before:h-1 before:w-full before:top-1/2 before:left-0 before:z-10 before:-translate-y-1/2'>
				<div
					className='bg-primary absolute top-1/2 -translate-y-1/2 h-1 z-10 transition-all duration-800'
					style={{
						width: `${(step * 100) / (jobApplicationStatusArray.length - 1)}%`,
					}}
				></div>
				{jobApplicationStatusArray.map((item, index) => (
					<div
						className={cn(
							'bg-muted-foreground h-3 w-3 rounded-full z-20 relative trnasition-all duration-800',
							index <= step && 'bg-primary'
						)}
						key={item}
					>
						<span
							className={cn(
								'absolute text-xs text-muted-foreground top-6 -translate-x-1/2 hidden sm:block',
								index === step && 'text-primary font-bold'
							)}
						>
							{item}
						</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default StatusProgress;
