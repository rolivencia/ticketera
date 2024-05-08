import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'ticketera-header',
	standalone: true,
	imports: [CommonModule, RouterModule],
	template: `
		<a [routerLink]="['']" >
			<header class="bg-primary-dark">
				<div class="mx-5 max-w-screen-lg px-4 py-4 sm:px-6 sm:py-8 md:max-w-screen-lg lg:px-8">
					<h1 class="text-2xl font-bold text-white">GUALICHO TICKETS</h1>
				</div>
			</header>
		</a>
		<div class="bg-primary text-white">
			<div
				class="mx-5 grid max-w-screen-lg grid-cols-2 content-center px-4 py-2 sm:px-6 sm:py-4 md:max-w-screen-lg lg:px-8"
			>
				<div class="content-center text-xl">Hola, Lautaro!</div>
				<div class="flex justify-end">
					<button
						(click)="onLogoutButtonClicked()"
						class="bg-danger hover:bg-danger-dark flex rounded px-4 py-2 font-bold text-white"
					>
						<span class="">CERRAR SESIÓN</span> <img class="ml-1 h-5" src="/assets/img/icons/logout.svg" alt="" />
					</button>
				</div>
			</div>
		</div>
	`,
	styles: ``,
})
export class HeaderComponent {
	auth0Service = inject(AuthService);
	onLogoutButtonClicked() {
		this.auth0Service.logout();
	}
}
