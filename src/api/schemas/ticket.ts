import { boolean, integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';
import { seller } from './seller';

export const ticket = pgTable('ticket', {
	id: serial('id').primaryKey(),
	cost: integer('cost'),
	firstName: text('first_name'),
	lastName: text('last_name'),
	qrString: text('qr_string'),
	email: text('email'),
	phone: text('phone'),
	dni: text('dni'),
	createdBy: serial('created_by').references(() => seller.id),
	createdAt: timestamp('created_at'),
	updatedAt: timestamp('updated_at'),
	enabled: boolean('enabled'),
	deleted: boolean('deleted'),
});
