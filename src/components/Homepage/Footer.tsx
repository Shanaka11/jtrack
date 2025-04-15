import React from 'react';
import { Button } from '../ui/button';
import GetStartedButton from '@/features/auth/components/GetStartedButton';

const Footer = () => {
	return (
		<section className='min-h-dvh grid place-items-center snap-center bg-gradient-to-r from-sky-600 to-cyan-300 px-4'>
			<div className='container px-4 md:px-6 text-center'>
				<div className='mx-auto max-w-3xl space-y-4'>
					<h2 className='text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl'>
						Ready to Streamline Your Job Search?
					</h2>
					<p className='text-white/90 md:text-xl/relaxed'>
						Join thousands of job seekers who are organizing their applications,
						tracking their progress, and landing their dream jobs.
					</p>
					<div className='mx-auto flex flex-col gap-2 min-[400px]:flex-row justify-center pt-4'>
						<GetStartedButton>
							<Button className='bg-white text-sky-600 hover:bg-white/90'>
								Get Started for Free
							</Button>
						</GetStartedButton>
						<Button
							variant='outline'
							className='text-white border-white bg-transparent hover:bg-white hover:text-sky-600'
						>
							View Demo
						</Button>
					</div>
					<div className='flex items-center justify-center space-x-4 text-sm text-white/80 pt-4'>
						<div className='flex space-x-1 items-center'>
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
								className='h-5 w-5'
							>
								<path d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z' />
								<path d='m9 12 2 2 4-4' />
							</svg>
							<span>No credit card required</span>
						</div>
						<div className='flex space-x-1 items-center'>
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
								className='h-5 w-5'
							>
								<path d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z' />
								<path d='m9 12 2 2 4-4' />
							</svg>
							<span>Cancel anytime</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;
