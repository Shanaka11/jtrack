import { JobApplicationStatus } from '@/features/jobs/statemachines/jobApplicationStatusStateMachine';

export const JobApplicationBackgroundColorSelector = (
	status: JobApplicationStatus
) => {
	switch (status) {
		case 'Submitted':
			return 'bg-cyan-100';
		case 'Screening Done':
			return 'bg-blue-100';
		case 'Interviewing':
			return 'bg-yellow-100';
		case 'Offer Made':
			return 'bg-green-100';
		case 'Application Rejected':
			return 'bg-red-100';
		case 'Offer Rejected':
			return 'bg-red-100';
		case 'Offer Accepted':
			return 'bg-green-100';
		default:
			return '';
	}
};

export const JobApplicationTextColorSelector = (
	status: JobApplicationStatus
) => {
	switch (status) {
		case 'Submitted':
			return 'text-cyan-600';
		case 'Screening Done':
			return 'text-blue-600';
		case 'Interviewing':
			return 'text-yellow-600';
		case 'Offer Made':
			return 'text-green-600';
		case 'Application Rejected':
			return 'text-red-600';
		case 'Offer Rejected':
			return 'text-red-600';
		case 'Offer Accepted':
			return 'text-green-600';
		default:
			return '';
	}
};
