import { z } from 'zod';

export const jobApplicationStatusArray = [
	'Submitted',
	'Screening Done',
	'Interviewing',
	'Offer Made',
	'Offer Accepted',
	'Offer Rejected',
	'Application Rejected',
] as const;

export const JobApplicationStatusEventsArray = [
	'New Application',
	'Screening',
	'Interview Called',
	'Got Offer',
	'Rejected',
	'Accepted',
	'Reject Offer',
] as const;

export type JobApplicationStatus = (typeof jobApplicationStatusArray)[number];

export type JobApplicationStatusEvents =
	(typeof JobApplicationStatusEventsArray)[number];

type JobApplicationStatusTransitions = {
	[status in JobApplicationStatus]?: {
		next: {
			[event in JobApplicationStatusEvents]?: JobApplicationStatus;
		};
		previous: {
			[event in JobApplicationStatusEvents]?: JobApplicationStatus;
		};
	};
};

const jobApplicationStatusStateMachine: JobApplicationStatusTransitions = {
	Submitted: {
		next: {
			Screening: 'Screening Done',
			'Interview Called': 'Interviewing',
		},
		previous: {},
	},
	'Screening Done': {
		next: {
			'Interview Called': 'Interviewing',
			'Got Offer': 'Offer Made',
		},
		previous: {
			'New Application': 'Submitted',
		},
	},
	Interviewing: {
		next: {
			Rejected: 'Application Rejected',
			'Got Offer': 'Offer Made',
		},
		previous: {
			Screening: 'Screening Done',
			'New Application': 'Submitted',
		},
	},
	'Offer Made': {
		next: {
			Accepted: 'Offer Accepted',
			'Reject Offer': 'Offer Rejected',
		},
		previous: {
			Screening: 'Screening Done',
			'Interview Called': 'Interviewing',
		},
	},
	'Application Rejected': {
		next: {},
		previous: {
			'Interview Called': 'Interviewing',
			Screening: 'Screening Done',
		},
	},
	'Offer Rejected': {
		next: {},
		previous: {
			'Got Offer': 'Offer Made',
		},
	},
	'Offer Accepted': {
		next: {},
		previous: {
			'Got Offer': 'Offer Made',
		},
	},
} as const;

export const decodeJobApplicationStatus = (
	currentStatus: JobApplicationStatus | null,
	event: JobApplicationStatusEvents,
	next: boolean
): JobApplicationStatus => {
	if (currentStatus === null && event === 'New Application') return 'Submitted';
	if (currentStatus === null) throw new Error('Invalid status transition');

	const newStatusEvents = jobApplicationStatusStateMachine[currentStatus];

	if (newStatusEvents === undefined)
		throw new Error('Invalid status transition');

	if (next) {
		const newStatus = newStatusEvents.next[event];
		if (newStatus === undefined) throw new Error('Invalid status transition');
		return newStatus;
	}
	const newStatus = newStatusEvents.previous[event];
	if (newStatus === undefined) throw new Error('Invalid status transition');
	return newStatus;
};

export const availableEventsForStatus = (
	currentStatus: JobApplicationStatus
) => {
	const newStatusEvents = jobApplicationStatusStateMachine[currentStatus];

	if (newStatusEvents === undefined)
		throw new Error('Invalid status transition');

	return newStatusEvents;
};

const jobApplicationStatusEventSchema = z.enum(JobApplicationStatusEventsArray);
// This will return the parsed value if a valid status is passde, else it will throw an error
export const encodeJobApplicationEvent = (status: string) => {
	return jobApplicationStatusEventSchema.parse(status);
};
