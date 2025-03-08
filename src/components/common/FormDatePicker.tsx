import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { CalendarIcon } from 'lucide-react';
import { FormControl } from '../ui/form';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { Calendar } from '../ui/calendar';
import { format } from 'date-fns';

type FormDatePickerProps = {
	value: Date;
	onChange: (date: Date | undefined) => void;
};

const FormDatePicker = ({ value, onChange }: FormDatePickerProps) => {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<FormControl>
					<Button
						variant={'outline'}
						className={cn(
							'w-[240px] pl-3 text-left font-normal',
							!value && 'text-muted-foreground'
						)}
					>
						{value ? format(value, 'PPP') : <span>Pick a date</span>}
						<CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
					</Button>
				</FormControl>
			</PopoverTrigger>
			<PopoverContent className='w-auto p-0' align='start'>
				<Calendar
					mode='single'
					selected={value}
					onSelect={onChange}
					initialFocus
				/>
			</PopoverContent>
		</Popover>
	);
};

export default FormDatePicker;
