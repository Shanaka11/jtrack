import React from 'react';
import { signOut } from '../auth';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';

const SignOutButtonServer = async () => {
	return (
		<form
			action={async () => {
				'use server';
				await signOut({ redirectTo: '/' });
			}}
		>
			<Button type='submit' variant='ghost' className='w-full cursor-pointer'>
				<LogOut />
				Sign Out
			</Button>
		</form>
	);
};

export default SignOutButtonServer;
