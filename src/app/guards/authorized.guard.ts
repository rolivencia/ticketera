import { Observable, of, switchMap } from 'rxjs';
import { Router, UrlTree } from '@angular/router';
import { inject, PLATFORM_ID } from '@angular/core';
import { ROUTE_TREE } from '../app.routes';
import { AuthService } from '@auth0/auth0-angular';
import { isPlatformBrowser } from '@angular/common';
import { UserService } from '../providers/user.service';

export function authorizedGuard(): Observable<boolean | UrlTree> {
	const platformId = inject(PLATFORM_ID);
	if (!isPlatformBrowser(platformId)) {
		return of(false);
	}

	const userService = inject(UserService);
	const router = inject(Router);
	const appRouteTree = ROUTE_TREE;
	const auth0Service = inject(AuthService);

	return auth0Service.user$.pipe(
		switchMap((user) => {
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			return userService.getByEmail(user!.email!);
		}),
		switchMap((user) => {
			if (user.enabled) {
				return of(true);
			} else {
				return of(router.createUrlTree([appRouteTree.UNAUTHORIZED]));
			}
		}),
	);
}
