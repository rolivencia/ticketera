import { inject } from '@angular/core';
import { UrlTree } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';

export function authGuard(): Observable<boolean | UrlTree> {
	const auth0Service = inject(AuthService);

	return auth0Service.user$.pipe(
		switchMap((user) => {
			if (!!user) {
				return of(true);
			} else {
				auth0Service.loginWithRedirect();
				return of(false);
			}
		}),
	);
}
