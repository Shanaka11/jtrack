import './envConfig.ts';
import { defineConfig } from 'drizzle-kit';

if (process.env.DATABASE_URL === undefined)
	throw new Error('DATABASE_URL is not defined');

export default defineConfig({
	dialect: 'postgresql',
	out: './src/features/db/migrations',
	schema: './src/features/**/models/*.ts',
	dbCredentials: {
		url: process.env.DATABASE_URL as string,
	},
});
