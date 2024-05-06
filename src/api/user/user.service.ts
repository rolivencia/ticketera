import * as schemas from '../schemas/user';
import * as schemasS from '../schemas/seller'
import { pgClient } from '../_helpers/postgres-connector'
import { drizzle } from 'drizzle-orm/postgres-js';
import { eq } from 'drizzle-orm'

const db = drizzle(pgClient, { schema: { ...schemas } });

export async function getById(id: number) {
    return db.query.user.findFirst({ where: eq(schemas.user.id, id) })
}

export async function create({ firstName, lastName, userName, email }: any) {
    const newUser = {
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        email: email,
        createdAt: new Date(),
        updatedAt: new Date(),
        enabled: false,
        deleted: false
    };

    await db.insert(schemas.user).values(newUser);
/*    const res = await db.insert(schemas.user).values(newUser).returning(schemas.user.id);

    if (res.length === 0) {
        throw new Error('No se pudo crear el usuario');
    }
    const newUserId = res[0].id;
    const createdUser = await db.query.user.findFirst({
        where: eq(schemas.user.id, newUserId),
    });

    return createdUser;*/
}

export async function createUserAndSeller({ firstName, lastName, userName, email, phone }: any) {
    const newUser = {
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        email: email,
        createdAt: new Date(),
        updatedAt: new Date(),
        enabled: false,
        deleted: false
    };

    const newSeller = {
        phone: phone,
        idUser: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        enabled: false,
        deleted: false
    };
    
    const result = await db.transaction(async (trx) => {
        const userInsertResult = await trx.insert(schemas.user).values(newUser).returning();
        if(userInsertResult.length === 0){throw new Error('user cannot be created')}
        newSeller.idUser = userInsertResult[0].id;
        await trx.insert(schemasS.seller).values(newSeller);
    })
}
