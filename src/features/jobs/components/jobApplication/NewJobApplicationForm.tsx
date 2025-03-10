'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
	JobApplicationFormSchema,
	jobApplicationFormSchema,
} from '../../models/jobApplication';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { createJobApplicationAction } from '../../actions/jobApplication/createJobApplicationAction';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import FormDatePicker from '@/components/common/FormDatePicker';

type NewJobApplicationFormProps = {
	redirectOnSuccess?: boolean;
	handleSuccess?: () => void;
};

const NewJobApplicationForm = ({
	redirectOnSuccess,
	handleSuccess,
}: NewJobApplicationFormProps) => {
	const form = useForm<JobApplicationFormSchema>({
		resolver: zodResolver(jobApplicationFormSchema),
		defaultValues: {
			company: '',
			jobTitle: '',
			link: '',
			dateApplied: new Date(),
		},
	});

	const router = useRouter();

	const [isLoading, setIsLoading] = useState(false);

	const onSubmit = async (values: JobApplicationFormSchema) => {
		try {
			setIsLoading(true);
			const createdJobAplicationRespone = await createJobApplicationAction(
				values
			);

			if (createdJobAplicationRespone.status === 'error') {
				toast.error(createdJobAplicationRespone.message);
				return;
			}
			// form.reset();
			toast.success('Job application created successfully');
			if (redirectOnSuccess) {
				router.push(`/application/${createdJobAplicationRespone.data.id}`);
			}
			if (handleSuccess) {
				handleSuccess();
			}
		} catch (e: unknown) {
			if (e instanceof Error) {
				console.error(e.message);
			}
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='grid grid-cols-2 gap-2 items-baseline md:grid-rows-[90px_120px_40px] w-lg'
			>
				<FormField
					control={form.control}
					name='jobTitle'
					render={({ field }) => (
						<FormItem className='col-span-2 md:col-span-1'>
							<FormLabel>Job Title</FormLabel>
							<FormControl>
								<Input placeholder='Job Title' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='company'
					render={({ field }) => (
						<FormItem className='col-span-2 md:col-span-1'>
							<FormLabel>Company</FormLabel>
							<FormControl>
								<Input placeholder='Company' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='dateApplied'
					render={({ field }) => (
						<FormItem className='flex flex-col col-span-2 md:col-span-1'>
							<FormLabel>Date of birth</FormLabel>
							<FormDatePicker value={field.value} onChange={field.onChange} />
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='link'
					render={({ field }) => (
						<FormItem className='col-span-2 md:col-span-1'>
							<FormLabel>Link</FormLabel>
							<FormControl>
								<Input placeholder='https://' {...field} />
							</FormControl>
							<FormDescription>
								Add a link to the job application.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button
					type='submit'
					className='col-span-2 md:col-span-1 md:col-start-2'
					disabled={isLoading}
				>
					{isLoading && <Loader2 className='animate-spin' />}
					Submit
				</Button>
			</form>
		</Form>
	);
};

export default NewJobApplicationForm;
