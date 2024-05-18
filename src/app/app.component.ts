import { Component, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { filter, Observable, switchMap } from 'rxjs';
import { AuthService, User as Auth0User } from '@auth0/auth0-angular';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AuthenticationService } from './providers/authentication.service';

// Interfaces
import { User } from './interfaces/user.interface';

@Component({
	standalone: true,
	selector: 'ticketera-root',
	template: `
		@if (user$ | async; as user) {
			<ticketera-header [user]="user" />
		}
		<div class="md:mx-5 max-w-screen-lg md:px-4 py-4 sm:py-8 md:max-w-screen-lg lg:px-8">
			<router-outlet />
		</div>
	`,
	imports: [CommonModule, RouterModule, HeaderComponent],
})
export class AppComponent {
	user$: Observable<User> | undefined;
	private platformId = inject(PLATFORM_ID);

	constructor() {
		if (isPlatformBrowser(this.platformId)) {
			const auth0Service = inject(AuthService);
			const authenticationService = inject(AuthenticationService);
			this.user$ = auth0Service.user$.pipe(
				takeUntilDestroyed(),
				filter((auth0User) => !!auth0User),
				switchMap((auth0User) => authenticationService.findOrCreate(auth0User as Auth0User)),
			);
		}
	}
}
