import Features from '@/components/Homepage/Features';
import Footer from '@/components/Homepage/Footer';
import Hero from '@/components/Homepage/Hero';
import HowItWorks from '@/components/Homepage/HowItWorks';

export default function Home() {
	return (
		<div className='snap-y snap-mandatory'>
			<Hero />
			<Features />
			<HowItWorks />
			<Footer />
			<footer className='border-t bg-white py-12 md:py-16'>
				<div className='px-4 md:px-6 w-full'>
					<div className='flex justify-center md:justify-start'>
						<div className='space-y-4'>
							<div className='flex items-center gap-2 font-bold text-xl'>
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
								<span className='text-sky-600'>JobTracker</span>
							</div>
							<p className='max-w-xs text-sm text-muted-foreground'>
								The smarter way to manage your job search and land your dream
								position faster.
							</p>
						</div>
					</div>
					<div className='mt-8 border-t pt-8 text-center text-sm text-muted-foreground'>
						© {new Date().getFullYear()} JobTracker. All rights reserved.
					</div>
				</div>
			</footer>
		</div>
	);
}
