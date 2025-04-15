'use client';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
	JobApplicationDto,
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
import { updateJobApplicationAction } from '../../actions/jobApplication/updateJobApplicationAction';

type NewJobApplicationFormProps = {
	redirectOnSuccess?: boolean;
	handleSuccess?: () => void;
	jobApplication?: JobApplicationDto;
};

const NewJobApplicationForm = ({
	redirectOnSuccess,
	handleSuccess,
	jobApplication,
}: NewJobApplicationFormProps) => {
	const form = useForm<JobApplicationFormSchema>({
		resolver: zodResolver(jobApplicationFormSchema),
		defaultValues: {
			company: jobApplication?.company || '',
			jobTitle: jobApplication?.jobTitle || '',
			link: jobApplication?.link || '',
			dateApplied: jobApplication?.dateApplied
				? new Date(jobApplication.dateApplied)
				: new Date(),
		},
	});

	const router = useRouter();

	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (jobApplication) {
			form.reset({
				company: jobApplication.company || '',
				jobTitle: jobApplication.jobTitle || '',
				link: jobApplication.link || '',
				dateApplied: jobApplication.dateApplied
					? new Date(jobApplication.dateApplied)
					: new Date(),
			});
		}
	}, [jobApplication, form]);

	const createJobApplication = async (values: JobApplicationFormSchema) => {
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
	};

	const updateJpobApplication = async (value: JobApplicationFormSchema) => {
		if (jobApplication === undefined) return;

		const updatedJobApplicationResponse = await updateJobApplicationAction({
			...jobApplication,
			...value,
		});
		if (updatedJobApplicationResponse.status === 'error') {
			toast.error(updatedJobApplicationResponse.message);
			return;
		}
		toast.success('Job application updated successfully');
		router.refresh();
	};

	const onSubmit = async (values: JobApplicationFormSchema) => {
		try {
			setIsLoading(true);
			if (jobApplication === undefined) {
				await createJobApplication(values);
			} else {
				await updateJpobApplication(values);
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
				className='grid grid-cols-2 gap-x-2 items-baseline gap-y-6'
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
						<FormItem className='flex flex-col col-span-2'>
							<FormLabel>Date Applied</FormLabel>
							<FormDatePicker value={field.value} onChange={field.onChange} />
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='link'
					render={({ field }) => (
						<FormItem className='col-span-2'>
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
