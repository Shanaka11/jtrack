'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

type SearchByCompanyProps = {
	searchString: string;
};

const SearchByCompany = ({ searchString }: SearchByCompanyProps) => {
	const [currSearchString, setCurrSearchString] =
		useState<string>(searchString);

	const router = useRouter();

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (currSearchString === '') {
			router.push('/dashboard');
			return;
		}
		router.push(`/dashboard?filter=ilike(company,%${currSearchString}%)`);
	};

	return (
		<form className='flex items-center gap-2' onSubmit={handleSubmit}>
			<Input
				placeholder='Company...'
				title='Search'
				value={currSearchString}
				onChange={(event) => setCurrSearchString(event.currentTarget.value)}
			/>
			<Button size='icon' type='submit'>
				<Search />
			</Button>
		</form>
	);
};

export default SearchByCompany;
