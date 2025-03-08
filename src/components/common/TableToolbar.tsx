import React from 'react';
import { Button } from '../ui/button';
import FTooltip from './FTooltip';
import { Edit, Plus, RefreshCcw, Trash2 } from 'lucide-react';
import Link from 'next/link';

type TableToolbarProps = {
	handleDelete?: () => void;
	disableDelete?: boolean;
	handleEdit?: () => void;
	disableEdit?: boolean;
	handleRefresh?: () => void;
	disableRefresh?: boolean;
};

const TableToolbar = ({
	handleDelete,
	disableDelete,
	handleEdit,
	disableEdit,
	handleRefresh,
	disableRefresh,
}: TableToolbarProps) => {
	if (
		handleDelete === undefined &&
		handleEdit === undefined &&
		handleRefresh === undefined
	)
		return null;

	return (
		<div className='flex gap-1'>
			<FTooltip text='Insert'>
				<Link href='/application/new'>
					<Button size='icon' className='cursor-pointer'>
						<Plus />
					</Button>
				</Link>
			</FTooltip>
			{handleEdit && (
				<FTooltip text='Edit'>
					<Button size='icon' disabled={disableEdit}>
						<Edit />
					</Button>
				</FTooltip>
			)}
			{handleDelete && (
				<FTooltip text='Delete'>
					<Button size='icon' disabled={disableDelete}>
						<Trash2 />
					</Button>
				</FTooltip>
			)}
			{handleRefresh && (
				<FTooltip text='Refresh'>
					<Button size='icon' disabled={disableRefresh}>
						<RefreshCcw />
					</Button>
				</FTooltip>
			)}
		</div>
	);
};

export default TableToolbar;
