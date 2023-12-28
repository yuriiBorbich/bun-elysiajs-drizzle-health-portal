import loggerPkg from 'pino';

export const logger = loggerPkg({
	transport: {
		target: 'pino-pretty'
	},
});