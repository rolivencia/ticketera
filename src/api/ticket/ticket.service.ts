import * as schemas from '../schemas/ticket';
import { pgClient } from '../_helpers/postgres-connector'
import { drizzle } from 'drizzle-orm/postgres-js';
import { eq } from 'drizzle-orm'

const db = drizzle(pgClient, { schema: { ...schemas } });

export async function getById(id: number) {
    return db.query.ticket.findFirst({ where: eq(schemas.ticket.id, id) })
}

export async function getByQRString(qrString: string) {
    return db.query.ticket.findFirst({ where: eq(schemas.ticket.qrString, qrString) })
}

export async function getAll() {
    return db.query.ticket.findMany();
}
export async function create({ cost, firstName, lastName, email, phone, dni, createdBy }: any) {
    const newTicket = {
        cost: cost,
        firstName: firstName,
        lastName: lastName,
        qrString: crypto.randomUUID(),
        email: email,
        phone: phone,
        dni: dni,
        createdAt: new Date(),
        updatedAt: new Date(),
        enabled: false,
        deleted: false,
        createdBy: createdBy
    }

    const res = await db.insert(schemas.ticket).values(newTicket).returning();
    return res;
}