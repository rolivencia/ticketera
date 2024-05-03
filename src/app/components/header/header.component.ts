import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'ticketera-header',
	standalone: true,
	imports: [CommonModule],
	template: `
		<header class="bg-primary-dark">
			<div class="mx-5 md:max-w-screen-lg max-w-screen-lg px-4 py-4 sm:px-6 sm:py-8 lg:px-8">
				<h1 class="text-white font-bold text-2xl">GUALICHO TICKETS</h1>
			</div>
		</header>
		<div class="bg-primary text-white">
			<div class="mx-5 md:max-w-screen-lg max-w-screen-lg px-4 py-2 sm:px-6 sm:py-4 lg:px-8 grid grid-cols-2 content-center">
				<div class="text-xl content-center">Hola, Lautaro!</div>
				<div class="flex justify-end">
					<button class="bg-danger hover:bg-danger-dark text-white font-bold py-2 px-4 rounded flex">
						<span class="">CERRAR SESIÓN</span> <img class="h-5 ml-1" src="/assets/img/icons/logout.svg" alt="">
					</button>
				</div>
			</div>
		</div>
	`,
	styles: ``,
})
export class HeaderComponent {}
