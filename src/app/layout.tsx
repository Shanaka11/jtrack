import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Appbar from '@/components/common/Appbar';
import { Toaster } from '@/components/ui/sonner';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Job Tracker',
	description: 'Keep Track of your job applications',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased grid grid-rows-[48px_1fr] h-dvh bg-slate-50`}
			>
				<Appbar />
				<main className='h-full'>{children}</main>
				<Toaster richColors />
			</body>
		</html>
	);
}
