import { Elysia } from 'elysia';

import { V1 } from './v1';

export const API = new Elysia({ prefix: '/api' }).use(V1);