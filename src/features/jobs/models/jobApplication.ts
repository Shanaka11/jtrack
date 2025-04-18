import {
	boolean,
	integer,
	pgTable,
	text,
	timestamp,
	varchar,
} from 'drizzle-orm/pg-core';
import { z } from 'zod';
import { jobApplicationStatusArray } from '../statemachines/jobApplicationStatusStateMachine';

export const jobApplicationTable = pgTable('job_application', {
	id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
	jobTitle: varchar('job_title', { length: 30 }).notNull(),
	company: varchar('company', { length: 50 }).notNull(),
	user: varchar('user_id', { length: 40 }).notNull(),
	status: varchar('status', {
		length: 20,
		enum: jobApplicationStatusArray,
	}).notNull(),
	link: text('link'),
	dateApplied: timestamp('date_applied').notNull().defaultNow(),
	favorite: boolean('favorite').notNull().default(false),
	createdAt: timestamp('created_at').notNull().defaultNow(),
	updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const jobApplicationFormSchema = z.object({
	jobTitle: z
		.string({ required_error: 'Job title cannot be empty' })
		.max(30, { message: 'Job title cannot have more than 30 characters' })
		.min(1, { message: 'Job title cannot be empty' }),
	company: z
		.string({ required_error: 'Company cannot be empty' })
		.max(50, { message: 'Company cannot have more than 50 characters' })
		.min(1, { message: 'Company name cannot be empty' }),
	link: z.union([
		z.literal(''),
		z.string().trim().url({ message: 'Please enter a valid url' }),
	]),
	dateApplied: z.date({ required_error: 'Date applied cannot be empty' }),
});

export type JobApplicationFormSchema = z.infer<typeof jobApplicationFormSchema>;
export type InsertJobApplicationDto = typeof jobApplicationTable.$inferInsert;
export type JobApplicationDto = typeof jobApplicationTable.$inferSelect;
