import { auth } from '@/features/auth/auth';
import SignedInMenu from '@/features/auth/components/SignedInMenu';
import SignInButonServer from '@/features/auth/components/SignInButtonServer';
import Link from 'next/link';
import React from 'react';

const Appbar = async () => {
	const session = await auth();

	//   return (
	//     <header
	//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
	//         isScrolled
	//           ? "bg-white/80 dark:bg-gray-900/90 backdrop-blur-md shadow-sm"
	//           : "bg-transparent"
	//       }`}
	//     >
	//       <div className="container mx-auto px-4 md:px-6">
	//         <div className="flex h-16 items-center justify-between">
	//           <div className="flex items-center">
	//             <a href="/" className="flex items-center gap-2 text-xl font-bold text-foreground">
	//               <svg
	//                 xmlns="http://www.w3.org/2000/svg"
	//                 width="24"
	//                 height="24"
	//                 viewBox="0 0 24 24"
	//                 fill="none"
	//                 stroke="currentColor"
	//                 strokeWidth="2"
	//                 strokeLinecap="round"
	//                 strokeLinejoin="round"
	//                 className="h-6 w-6 text-cyan-600 dark:text-cyan-400"
	//               >
	//                 <rect width="18" height="18" x="3" y="3" rx="2" />
	//                 <path d="M7 7h10" />
	//                 <path d="M7 12h10" />
	//                 <path d="M7 17h10" />
	//               </svg>
	//               JobTrack
	//             </a>
	//           </div>

	//           {/* Desktop navigation */}
	//           <nav className="hidden md:flex items-center gap-6">
	//             <a
	//               href="#features"
	//               className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
	//             >
	//               Features
	//             </a>
	//             <a
	//               href="#how-it-works"
	//               className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
	//             >
	//               How It Works
	//             </a>
	//             <a
	//               href="#pricing"
	//               className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
	//             >
	//               Pricing
	//             </a>

	//             <ThemeToggle />

	//             <div className="flex items-center gap-3">
	//               <Button variant="outline" className="border-cyan-200 dark:border-cyan-800">
	//                 Log In
	//               </Button>
	//               <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
	//                 Sign Up
	//               </Button>
	//             </div>
	//           </nav>

	//           {/* Mobile menu button */}
	//           <div className="flex items-center gap-2 md:hidden">
	//             <ThemeToggle />
	//             <Button
	//               variant="ghost"
	//               size="icon"
	//               className="md:hidden"
	//               onClick={() => setIsMenuOpen(!isMenuOpen)}
	//             >
	//               {isMenuOpen ? (
	//                 <X className="h-6 w-6" />
	//               ) : (
	//                 <Menu className="h-6 w-6" />
	//               )}
	//               <span className="sr-only">Toggle menu</span>
	//             </Button>
	//           </div>
	//         </div>
	//       </div>

	//       {/* Mobile navigation */}
	//       {isMenuOpen && (
	//         <div className="md:hidden border-t dark:border-gray-800">
	//           <div className="container mx-auto px-4 py-4 space-y-3">
	//             <a
	//               href="#features"
	//               className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
	//               onClick={() => setIsMenuOpen(false)}
	//             >
	//               Features
	//             </a>
	//             <a
	//               href="#how-it-works"
	//               className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
	//               onClick={() => setIsMenuOpen(false)}
	//             >
	//               How It Works
	//             </a>
	//             <a
	//               href="#pricing"
	//               className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
	//               onClick={() => setIsMenuOpen(false)}
	//             >
	//               Pricing
	//             </a>
	//             <div className="pt-2 grid grid-cols-2 gap-3">
	//               <Button variant="outline" className="w-full border-cyan-200 dark:border-cyan-800">
	//                 Log In
	//               </Button>
	//               <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
	//                 Sign Up
	//               </Button>
	//             </div>
	//           </div>
	//         </div>
	//       )}
	//     </header>
	//   );

	return (
		<header className='sticky top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-md shadow-sm h-12 px-4 flex items-center justify-between'>
			<Link href='/' className='text-slate-700 font-bold'>
				<span className='text-xl'>J</span>Track
			</Link>
			{session?.user ? (
				<SignedInMenu user={session.user} />
			) : (
				<SignInButonServer />
			)}
		</header>
	);
};

export default Appbar;
