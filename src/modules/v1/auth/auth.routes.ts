import { login, signup } from './auth.controller';
import {
	LoginValidationSchema,
	SignUpValidationSchema,
} from './auth.validator';
import { Elysia } from 'elysia';

export const AUTH_SERVER = new Elysia().group('/auth', (app) => {
	app.post('/login', login, {
		body: LoginValidationSchema,
	});
	app.post('/signup', signup, {
		body: SignUpValidationSchema,
	});
	return app;
});