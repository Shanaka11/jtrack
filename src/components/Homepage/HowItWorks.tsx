import React from 'react';

const steps = [
	{
		title: 'Create your account',
		description:
			'Sign up for free and set up your profile in less than a minute.',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
				className='h-10 w-10 text-sky-600'
			>
				<path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2' />
				<circle cx='12' cy='7' r='4' />
			</svg>
		),
	},
	{
		title: 'Add job applications',
		description:
			'Log the details of each job you apply for, including the job description and company details.',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
				className='h-10 w-10 text-sky-600'
			>
				<path d='M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z' />
				<polyline points='14 2 14 8 20 8' />
				<line x1='12' x2='12' y1='18' y2='12' />
				<line x1='9' x2='15' y1='15' y2='15' />
			</svg>
		),
	},
	{
		title: 'Track application status',
		description:
			'Update the status of your applications as they progress through the hiring process.',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
				className='h-10 w-10 text-sky-600'
			>
				<path d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z' />
				<path d='m9 12 2 2 4-4' />
			</svg>
		),
	},
	{
		title: 'Record important events',
		description:
			'Add custom events like interviews, follow-ups, or offer negotiations to keep track of key milestones.',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
				className='h-10 w-10 text-sky-600'
			>
				<rect width='18' height='18' x='3' y='4' rx='2' ry='2' />
				<line x1='16' x2='16' y1='2' y2='6' />
				<line x1='8' x2='8' y1='2' y2='6' />
				<line x1='3' x2='21' y1='10' y2='10' />
				<path d='M8 14h.01' />
				<path d='M12 14h.01' />
				<path d='M16 14h.01' />
				<path d='M8 18h.01' />
				<path d='M12 18h.01' />
				<path d='M16 18h.01' />
			</svg>
		),
	},
];

const HowItWorks = () => {
	return (
		<section className='min-h-dvh grid place-items-center snap-center px-4 py-20'>
			<div className='container px-4 md:px-6'>
				<div className='flex flex-col items-center justify-center space-y-4 text-center'>
					<div className='space-y-2'>
						<div className='inline-block rounded-lg bg-sky-100 px-3 py-1 text-sm text-sky-600'>
							How It Works
						</div>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
							Simple Steps to Organize Your Job Search
						</h2>
						<p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed'>
							Our intuitive platform makes it easy to get started and stay
							organized throughout your job search process.
						</p>
					</div>
				</div>
				<div className='mx-auto max-w-5xl mt-12'>
					<div className='grid grid-cols-1 gap-8 md:gap-12'>
						{steps.map((step, index) => (
							<div
								key={index}
								className='relative flex flex-col gap-6 md:flex-row'
							>
								<div className='flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-sky-100 md:h-20 md:w-20'>
									{step.icon}
								</div>
								{index < steps.length - 1 && (
									<div className='absolute left-7 top-16 h-28 w-px bg-sky-200 md:left-10 md:top-24 md:h-20 hidden md:block'></div>
								)}
								<div className='flex-1 space-y-2'>
									<h3 className='text-xl font-bold md:text-2xl'>
										{step.title}
									</h3>
									<p className='text-muted-foreground'>{step.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;
