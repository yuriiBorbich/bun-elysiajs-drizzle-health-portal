import { Elysia } from "elysia";
import { cors } from '@elysiajs/cors';
import { swagger } from '@elysiajs/swagger';

import { logger } from '~libs/logger';
import { API } from '~modules/index';


const app = new Elysia()
	.use(cors())
	.use(swagger())
	.trace(async ({ handle }) => {
		const { time, end } = await handle
		logger.info(`beforeHandle took ${(await end) - time}`)
	})
	.use(API)
	.onError(({ code, path, headers, request }) => {
		logger.error(`App error ${code}, path - ${path}, method - ${request.method}`);
		if (code === 'NOT_FOUND') return 'Route not found :('
	})
	.listen(process.env.PORT ?? 3000);

logger.info(
	{
		msg: `🦊 App is running at ${app.server?.hostname}:${app.server?.port}`
	}
);

