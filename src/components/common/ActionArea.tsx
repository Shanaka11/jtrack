import React from 'react';

const ActionArea = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='my-4 grid justify-center bg-muted p-4 h-full items-start'>
			{children}
		</div>
	);
};

export default ActionArea;
