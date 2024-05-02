import * as schemas from '../schemas/ticket';
import { pgClient } from '../_helpers/postgres-connector'
import { drizzle } from 'drizzle-orm/postgres-js';
import { eq } from 'drizzle-orm'

const db = drizzle(pgClient, { schema: { ...schemas } });

export async function getById(id: number) {
    return db.query.ticket.findFirst({ where: eq(schemas.ticket.id, id) })
}