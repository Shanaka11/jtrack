import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React, { Fragment } from 'react';

type BreadCrumbsProps = {
	links: {
		label: string;
		href?: string;
		active?: boolean;
	}[];
};

const BreadCrumbs = ({ links }: BreadCrumbsProps) => {
	return (
		<div className='flex gap-2 items-center'>
			{links.map((link, index) => {
				if (link.href === undefined) {
					return (
						<Fragment key={link.label}>
							<span
								className={cn(
									'text-sm text-muted-foreground',
									link.active && 'text-foreground'
								)}
							>
								{link.label}
							</span>
							{index !== links.length - 1 && <ChevronRight size={16} />}
						</Fragment>
					);
				}
				return (
					<Fragment key={link.href}>
						<Link
							className='text-sm underline text-muted-foreground hover:text-foreground transition-colors'
							href={link.href}
						>
							{link.label}
						</Link>
						{index !== links.length - 1 && <ChevronRight size={16} />}
					</Fragment>
				);
			})}
		</div>
	);
};

export default BreadCrumbs;
