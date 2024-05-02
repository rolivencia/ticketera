export interface EnvironmentConfig {
	production: boolean;
	database: {
		connectionString: string;
	};
}

export const environment: EnvironmentConfig = {
	production: true,
	database: {
		connectionString: process.env['PG_CONNECTION_STRING'] as string,
	},
};
