import { defineConfig } from 'drizzle-kit';
export default defineConfig({
	schema: './src/db/schema',
	driver: 'pg',
	dbCredentials: {
		connectionString: process.env.DRIZZLE_DB_URL as string,
	},
	verbose: true,
	strict: true,
	out: './src/migrations'
})