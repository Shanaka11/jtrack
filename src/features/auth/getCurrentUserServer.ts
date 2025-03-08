import { auth } from './auth';

export const getCurrentUserServer = async () => {
	const session = await auth();

	if (!session?.user || !session?.user?.id) return null;

	return session.user.id;
};
