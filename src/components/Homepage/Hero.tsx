import React from 'react';
import { Button } from '../ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import GetStartedButton from '@/features/auth/components/GetStartedButton';

const Hero = () => {
	return (
		<section className='min-h-[calc(100dvh-48px)] grid place-items-center snap-center px-4 py-20'>
			<div className='container px-4 md:px-6'>
				<div className='grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12'>
					<div className='flex flex-col justify-center space-y-6'>
						<div className='space-y-4'>
							<h1 className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none'>
								Organize Your <span className='gradient-text'>Job Search</span>{' '}
								<br className='hidden sm:inline' />
								with Confidence
							</h1>
							<p className='max-w-[600px] text-muted-foreground md:text-xl'>
								Track applications, manage interviews, and never miss an
								opportunity with our all-in-one job tracking dashboard.
							</p>
						</div>

						<div className='flex flex-col gap-3 min-[400px]:flex-row'>
							<GetStartedButton>
								<Button
									className='bg-cyan-600 hover:bg-cyan-700 text-white gap-2 h-12 px-6 text-base'
									type='submit'
								>
									Get Started Free
									<ArrowRight className='h-4 w-4' />
								</Button>
							</GetStartedButton>
							<Button
								variant='outline'
								className='h-12 px-6 text-base border-cyan-200 dark:border-cyan-800'
							>
								Watch Demo
							</Button>
						</div>

						<div className='flex flex-col sm:flex-row sm:items-center gap-4 text-sm'>
							<div className='flex items-center gap-2'>
								<CheckCircle2 className='h-5 w-5 text-cyan-600 dark:text-cyan-400' />
								<span>Free for personal use</span>
							</div>
							<div className='flex items-center gap-2'>
								<CheckCircle2 className='h-5 w-5 text-cyan-600 dark:text-cyan-400' />
								<span>No credit card required</span>
							</div>
							<div className='flex items-center gap-2'>
								<CheckCircle2 className='h-5 w-5 text-cyan-600 dark:text-cyan-400' />
								<span>Unlimited applications</span>
							</div>
						</div>
					</div>
					<div className='flex items-center justify-center'>
						<div className='relative w-full max-w-[540px]'>
							{/* Decorative elements */}
							<div className='absolute -top-6 -left-6 w-20 h-20 rounded-lg bg-teal-100/60 dark:bg-teal-900/20 -z-10 animate-float'></div>
							<div className='absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-cyan-100/60 dark:bg-cyan-900/20 -z-10 animate-float'></div>

							{/* Main card */}
							<div className='relative overflow-hidden rounded-xl border bg-white shadow-xl shadow-cyan/20 dark:bg-gray-900 dark:border-gray-800 dark:shadow-none'>
								<div className='absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-500 to-teal-500'></div>
								<div className='p-5'>
									{/* Header */}
									<div className='flex items-center justify-between border-b pb-4 dark:border-gray-800'>
										<div className='flex items-center space-x-3'>
											<div className='h-10 w-10 rounded-full bg-gradient-to-br from-cyan-100 to-cyan-200 dark:from-cyan-900 dark:to-cyan-800 flex items-center justify-center'>
												<svg
													xmlns='http:www.w3.org/2000/svg'
													width='24'
													height='24'
													viewBox='0 0 24 24'
													fill='none'
													stroke='currentColor'
													strokeWidth='2'
													strokeLinecap='round'
													strokeLinejoin='round'
													className='h-5 w-5 text-cyan-600 dark:text-cyan-400'
												>
													<rect width='18' height='18' x='3' y='3' rx='2' />
													<path d='M7 7h10' />
													<path d='M7 12h10' />
													<path d='M7 17h10' />
												</svg>
											</div>
											<div>
												<h3 className='font-semibold text-lg'>
													My Job Applications
												</h3>
												<p className='text-xs text-muted-foreground'>
													Updated just now
												</p>
											</div>
										</div>
										<div className='flex items-center space-x-2'>
											<div className='rounded-md bg-cyan-100 dark:bg-cyan-900/50 px-2.5 py-1.5 text-xs font-medium text-cyan-800 dark:text-cyan-300'>
												14 Active
											</div>
											<div className='rounded-md bg-green-100 dark:bg-green-900/50 px-2.5 py-1.5 text-xs font-medium text-green-800 dark:text-green-300'>
												5 Interviews
											</div>
										</div>
									</div>

									{/* Application list */}
									<div className='mt-4 space-y-3 overflow-hidden'>
										{[
											{
												role: 'Senior Frontend Developer',
												company: 'TechCorp',
												date: 'May 12, 2023',
												status: 'Interview',
												color: 'green',
												priority: 'High',
											},
											{
												role: 'UX Designer',
												company: 'DesignHub',
												date: 'May 10, 2023',
												status: 'Applied',
												color: 'cyan',
												priority: 'Medium',
											},
											{
												role: 'Full Stack Engineer',
												company: 'StartupX',
												date: 'May 8, 2023',
												status: 'Offer',
												color: 'teal',
												priority: 'High',
											},
											{
												role: 'Product Manager',
												company: 'GlobalTech',
												date: 'May 5, 2023',
												status: 'Rejected',
												color: 'red',
												priority: 'Low',
											},
										].map((job, i) => (
											<div
												key={i}
												className='flex items-center justify-between rounded-lg border p-3.5 hover:bg-slate-50 dark:border-gray-800 dark:hover:bg-gray-800/50 transition-colors cursor-pointer group'
											>
												<div className='flex items-center space-x-3'>
													<div
														className={`h-12 w-12 rounded-md bg-${
															job.color === 'cyan' ? 'cyan' : job.color
														}-100 dark:bg-${
															job.color === 'cyan' ? 'cyan' : job.color
														}-900/30 flex items-center justify-center`}
													>
														<span
															className={`text-${
																job.color === 'cyan' ? 'cyan' : job.color
															}-600 dark:text-${
																job.color === 'cyan' ? 'cyan' : job.color
															}-400 font-medium`}
														>
															{job.company.substring(0, 2)}
														</span>
													</div>
													<div>
														<div className='flex items-center gap-2'>
															<h4 className='font-medium'>{job.role}</h4>
															<span
																className={`text-xs px-1.5 py-0.5 rounded-full bg-${
																	job.priority === 'High'
																		? 'amber'
																		: job.priority === 'Medium'
																		? 'cyan'
																		: 'gray'
																}-50 dark:bg-${
																	job.priority === 'High'
																		? 'amber'
																		: job.priority === 'Medium'
																		? 'cyan'
																		: 'gray'
																}-900/30 text-${
																	job.priority === 'High'
																		? 'amber'
																		: job.priority === 'Medium'
																		? 'cyan'
																		: 'gray'
																}-600 dark:text-${
																	job.priority === 'High'
																		? 'amber'
																		: job.priority === 'Medium'
																		? 'cyan'
																		: 'gray'
																}-400`}
															>
																{job.priority}
															</span>
														</div>
														<p className='text-xs text-muted-foreground'>
															{job.company} • Applied on {job.date}
														</p>
													</div>
												</div>
												<div className='flex items-center gap-2'>
													<div
														className={`rounded-md bg-${
															job.color === 'cyan' ? 'cyan' : job.color
														}-100 dark:bg-${
															job.color === 'cyan' ? 'cyan' : job.color
														}-900/30 px-2.5 py-1.5 text-xs font-medium text-${
															job.color === 'cyan' ? 'cyan' : job.color
														}-600 dark:text-${
															job.color === 'cyan' ? 'cyan' : job.color
														}-400`}
													>
														{job.status}
													</div>
													<div className='h-8 w-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity'>
														<ArrowRight className='h-4 w-4 text-muted-foreground' />
													</div>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Hero;
