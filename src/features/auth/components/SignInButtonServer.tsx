import { Button } from '@/components/ui/button';
import { signIn } from '@/features/auth/auth';

type SignInButonServerProps = {
	children?: React.ReactNode;
};

const SignInButonServer = async ({ children }: SignInButonServerProps) => {
	return (
		<form
			action={async () => {
				'use server';
				await signIn('google', { redirectTo: '/dashboard' });
			}}
		>
			{children ? children : <Button type='submit'>Signin with Google</Button>}
		</form>
	);
};

export default SignInButonServer;
