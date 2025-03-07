import {
	integer,
	pgTable,
	text,
	timestamp,
	varchar,
} from 'drizzle-orm/pg-core';
import { jobApplicationTable } from './jobApplication';
import { z } from 'zod';

export const applicationEventTable = pgTable('application_event', {
	id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
	applicationId: integer('application_id')
		.notNull()
		.references(() => jobApplicationTable.id),
	event: text('event').notNull(),
	user: varchar('user_id', { length: 40 }).notNull(),
	createdAt: timestamp('created_at').notNull().defaultNow(),
	updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const applicationEventFormSchema = z.object({
	event: z
		.string({ required_error: 'Event cannot be empty' })
		.min(1, { message: 'Event cannot be empty' }),
});

export type InsertApplicationEventDto =
	typeof applicationEventTable.$inferInsert;
export type ApplicationEventDto = typeof applicationEventTable.$inferSelect;
