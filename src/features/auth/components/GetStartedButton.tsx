import React from 'react';
import SignInButonServer from './SignInButtonServer';
import { auth } from '../auth';
import Link from 'next/link';

type GetStartedButtonProps = {
	children: React.ReactNode;
};

const GetStartedButton = async ({ children }: GetStartedButtonProps) => {
	const session = await auth();

	if (session?.user) {
		return <Link href='/dashboard'>{children}</Link>;
	}
	return <SignInButonServer>{children}</SignInButonServer>;
};

export default GetStartedButton;
