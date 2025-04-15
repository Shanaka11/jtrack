import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [Google],
	callbacks: {
		async signIn({ user, account }) {
			if (account?.providerAccountId) user.id = account.providerAccountId;
			return true;
		},
		jwt({ token, account }) {
			if (account) {
				token.id = account.providerAccountId;
			}
			return token;
		},
		session({ session, token }) {
			session.user.id = token.id as string;
			return session;
		},
	},
});
