export interface EnvironmentConfig {
	production: boolean;
	database: {
		connectionString: string;
	};
}

// TODO: Agregar string de conexión a la base de datos
export const environment: EnvironmentConfig = {
	production: true,
	database: {
		connectionString: ''
	},
};
