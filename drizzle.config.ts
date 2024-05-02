import type { Config } from 'drizzle-kit';
import { environment } from './src/api/_helpers/environment'

export default {
    schema: './src/api/schemas/*.ts',
    out: './drizzle',
    driver: 'pg',
    dbCredentials: {
        connectionString: environment.database.connectionString
    }
} satisfies Config;
