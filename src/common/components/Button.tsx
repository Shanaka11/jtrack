import React, { ButtonHTMLAttributes } from 'react';

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
	return (
		// <button />
		<button
			{...props}
			className='px-4 py-2 cursor cursor-pointer bg-slate-700 text-white flex rounded hover:bg-slate-500 transition-colors duration-300'
		/>
	);
};

export default Button;
