import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { environment } from './environment';

const connectionString = environment.database.connectionString;

// Disable prefetch as it is not supported for "Transaction" pool mode
export const client = postgres(connectionString, { prepare: false });
export const db = drizzle(client);
