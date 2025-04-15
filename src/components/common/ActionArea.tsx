import React from 'react';

const ActionArea = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='my-4 grid justify-center bg-white p-4 h-full items-start grow border-t-4 border-cyan-600 rounded-t'>
			{children}
		</div>
	);
};

export default ActionArea;
