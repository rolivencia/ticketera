// Drizzle
import { boolean, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

// Schemas
import { user } from './user';

export const seller = pgTable('seller', {
	id: serial('id').primaryKey(),
	description: text('description'),
	organization: text('organization'),
	phone: text('phone'),
	idUser: serial('id_user').references(() => user.id),
	createdAt: timestamp('created_at'),
	updatedAt: timestamp('updated_at'),
	enabled: boolean('enabled'),
	deleted: boolean('deleted'),
});
