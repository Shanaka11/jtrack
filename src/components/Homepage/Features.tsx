import React from 'react';

const features = [
	{
		title: 'Application Tracking',
		description:
			'Keep track of all your job applications in one place, complete with links to job descriptions and company information.',
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
				className='h-6 w-6 text-sky-600'
			>
				<rect width='18' height='18' x='3' y='3' rx='2' />
				<path d='M7 7h10' />
				<path d='M7 12h10' />
				<path d='M7 17h10' />
			</svg>
		),
	},
	{
		title: 'Status Management',
		description:
			'Easily update the status of your applications as they progress through different stages of the hiring process.',
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
				className='h-6 w-6 text-sky-600'
			>
				<circle cx='18' cy='18' r='3' />
				<circle cx='6' cy='6' r='3' />
				<path d='M13 6h3a2 2 0 0 1 2 2v7' />
				<path d='M11 18H8a2 2 0 0 1-2-2V9' />
			</svg>
		),
	},
	{
		title: 'Application History',
		description:
			'View a comprehensive history of each application, including status changes, updates, and custom events.',
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
				className='h-6 w-6 text-sky-600'
			>
				<path d='M12 8v4l3 3' />
				<circle cx='12' cy='12' r='10' />
			</svg>
		),
	},
	{
		title: 'Event Timeline',
		description:
			'Track important events like interviews, follow-ups, and offer negotiations with a visual timeline for each application.',
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
				className='h-6 w-6 text-sky-600'
			>
				<path d='M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3' />
				<path d='M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3' />
				<path d='M4 12H2' />
				<path d='M10 12H8' />
				<path d='M16 12h-2' />
				<path d='M22 12h-2' />
			</svg>
		),
	},
	{
		title: 'Analytics & Insights',
		description:
			'Get insights into your job search process with analytics on application success rates, response times, and more.',
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
				className='h-6 w-6 text-sky-600'
			>
				<path d='M3 3v18h18' />
				<path d='M18 9l-2-2' />
				<path d='M8 17l-2-2' />
				<path d='m13 12-2-2-3 3' />
				<path d='M18 12h3v3' />
			</svg>
		),
	},
];

const Features = () => {
	return (
		<section className='min-h-[calc(100dvh-48px)] grid place-items-center snap-center px-4 py-20'>
			<div className='container px-4 md:px-6'>
				<div className='flex flex-col items-center justify-center space-y-4 text-center'>
					<div className='space-y-2'>
						<div className='inline-block rounded-lg bg-sky-100 px-3 py-1 text-sm text-sky-600'>
							Features
						</div>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
							Everything You Need to Manage Your Job Search
						</h2>
						<p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed'>
							Our comprehensive platform gives you all the tools you need to
							organize, track, and optimize your job search process.
						</p>
					</div>
				</div>
				<div className='mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12'>
					{features.map((feature, index) => (
						<div
							key={index}
							className='flex flex-col space-y-2 bg-white p-6 rounded-lg border shadow-sm'
						>
							<div className='p-2 bg-sky-50 w-fit rounded-lg'>
								{feature.icon}
							</div>
							<h3 className='text-xl font-bold'>{feature.title}</h3>
							<p className='text-muted-foreground'>{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;
