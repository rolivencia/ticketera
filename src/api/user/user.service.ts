import * as schemas from '../schemas/user';
import { pgClient } from '../_helpers/postgres-connector'
import { drizzle } from 'drizzle-orm/postgres-js';
import { eq } from 'drizzle-orm'

const db = drizzle(pgClient, { schema: { ...schemas } });

export async function getById(id: number) {
    return db.query.user.findFirst({ where: eq(schemas.user.id, id) })
}
/*
export async function create(user: any) {
    const newUser: typeof user = {
        firstName: user.firstName,
        lastName: user.lastName,
        userName: user.userName,
        email: user.email,
        createdAt: new Date(),
        updatedAt: new Date(),
        enabled: false,
        deleted: false
    };

    await db.insert.user(newUser);
}
*/