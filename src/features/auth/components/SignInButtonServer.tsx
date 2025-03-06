import { Button } from '@/components/ui/button';
import { signIn } from '@/features/auth/auth';

const SignInButonServer = async () => {
	return (
		<form
			action={async () => {
				'use server';
				await signIn('google', { redirectTo: '/dashboard' });
			}}
		>
			<Button type='submit'>Signin with Google</Button>
		</form>
	);
};

export default SignInButonServer;
