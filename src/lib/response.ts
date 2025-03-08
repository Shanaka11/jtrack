type ErrorResponse = {
	status: 'error';
	message: string;
};

type SuccessResponse<T> = {
	status: 'success';
	data: T;
};

type Response<T> = ErrorResponse | SuccessResponse<T>;

export const sendSuccessResponse = <T>(data: T) => {
	const response: Response<T> = {
		status: 'success',
		data,
	};
	return response;
};

export const sendErrorResponse = <T>(message: string) => {
	const response: Response<T> = {
		status: 'error',
		message,
	};
	return response;
};
