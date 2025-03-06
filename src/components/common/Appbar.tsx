import Link from 'next/link';
import React from 'react';

const Appbar = () => {
	return (
		<nav className='h-12 px-4 flex items-center'>
			<Link href='/' className='text-slate-700 font-bold'>
				<span className='text-xl'>J</span>Track
			</Link>
		</nav>
	);
};

export default Appbar;
