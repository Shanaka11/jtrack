import { auth } from '@/features/auth/auth';
import SignedInMenu from '@/features/auth/components/SignedInMenu';
import SignInButonServer from '@/features/auth/components/SignInButtonServer';
import Link from 'next/link';
import React from 'react';

const Appbar = async () => {
	const session = await auth();

	return (
		<nav className='h-12 px-4 flex items-center justify-between'>
			<Link href='/' className='text-slate-700 font-bold'>
				<span className='text-xl'>J</span>Track
			</Link>
			{session?.user ? (
				<SignedInMenu user={session.user} />
			) : (
				<SignInButonServer />
			)}
		</nav>
	);
};

export default Appbar;
