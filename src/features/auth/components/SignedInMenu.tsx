import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { User } from 'next-auth';
import React from 'react';
import SignOutButtonServer from './SignOutButtonServer';

type SignedInMenuProps = {
	user: User;
};

const SignedInMenu = ({ user }: SignedInMenuProps) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<Avatar className='cursor-pointer'>
					<AvatarImage src={user.image ?? undefined} />
					<AvatarFallback>{user.name?.slice(0, 2) ?? 'US'}</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>{user.name ?? 'User'}</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<SignOutButtonServer />
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default SignedInMenu;
