import { APP_ID, ApplicationConfig } from '@angular/core';
import {
	provideRouter,
	withEnabledBlockingInitialNavigation,
	withInMemoryScrolling,
	withViewTransitions,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';

// Localización
import { LOCALE_ID } from '@angular/core';
import localeEs from '@angular/common/locales/es-419';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);

export const appConfig: ApplicationConfig = {
	providers: [
		{ provide: APP_ID, useValue: 'serverApp' },
		{ provide: LOCALE_ID, useValue: 'es-419' },
		provideClientHydration(),
		provideRouter(
			appRoutes,
			withEnabledBlockingInitialNavigation(),
			withInMemoryScrolling({ scrollPositionRestoration: 'enabled' }),
			withViewTransitions(),
		),
		provideHttpClient(withFetch()),
	],
};