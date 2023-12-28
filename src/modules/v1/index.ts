import { Elysia } from 'elysia';
import { AUTH_SERVER } from './auth';

export const V1 = new Elysia({ prefix: '/v1' })
	.use(AUTH_SERVER);