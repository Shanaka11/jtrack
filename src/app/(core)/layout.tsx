export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <div className='px-4 py-2'>{children}</div>;
}
