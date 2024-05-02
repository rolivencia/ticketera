import { boolean, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core/index';

export const user = pgTable('user', {
	id: serial('id').primaryKey(),
	firstName: text('first_name'),
	lastName: text('last_name'),
	userName: text('user_name'),
	email: text('email'),
	createdAt: timestamp('created_at'),
	updatedAt: timestamp('updated_at'),
	enabled: boolean('enabled'),
	deleted: boolean('deleted'),
});
