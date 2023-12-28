
type _ApiResponse = {
	code: number;
	message: string;
	data?: any;
};

export class ApiResponse {
	set: any;
	constructor(set: any) {
		this.set = set;
	}

	success({ code = 200, message = 'Success', data = null }: _ApiResponse) {
		this.set.status = code;
		return {
			code,
			message,
			data,
		};
	}

	error({
					code = 200,
					message = 'Something Went wrong, please try again later',
					data = null,
				}: _ApiResponse) {
		this.set.status = code;
		return {
			code,
			message,
			data,
		};
	}
}