import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'ticketera-ticket-add',
	standalone: true,
	imports: [CommonModule],
	template: `
		<div class="m-5 grid rounded bg-white p-5 drop-shadow">
			<p class="text-xl font-bold">Nueva Entrada</p>

			<form class="w-full max-w-lg mx-auto mt-5">
				<div class="-mx-3 mb-3 flex flex-wrap">
					<div class="mb-6 w-full px-3 md:mb-0 md:w-1/2">
						<label class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700" for="grid-first-name">
							Nombre
						</label>
						<input
							class="border border-red-500 mb-3 block w-full appearance-none rounded bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
							id="grid-first-name"
							type="text"
							placeholder="Carlos"
						/>
					</div>
					<div class="w-full px-3 md:w-1/2">
						<label class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700" for="grid-last-name">
							Apellido
						</label>
						<input
							class="border block w-full appearance-none rounded border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
							id="grid-last-name"
							type="text"
							placeholder="Perez"
						/>
					</div>
				</div>
				<div class="-mx-3 mb-3 flex flex-wrap">
					<div class="w-full px-3">
						<label class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700" for="grid-id">
							DNI
						</label>
						<input
							class="border mb-3 block w-full appearance-none rounded border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
							id="grid-id"
							type="text"
							placeholder="12345678"
						/>
						<p class="text-xs italic text-gray-600">Sin puntos ni guiones</p>
					</div>
				</div>
				<div class="-mx-3 mb-3 flex flex-wrap">
					<div class="w-full px-3">
						<label class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700" for="grid-phone">
							Teléfono
						</label>
						<input
							class="border mb-3 block w-full appearance-none rounded border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
							id="grid-phone"
							type="text"
							placeholder="3404516946"
						/>
						<p class="text-xs italic text-gray-600">Sin 0 ni 15, sin espacios</p>
					</div>
				</div>
			</form>

			<button
				class="mt-5 flex w-full justify-center rounded bg-success px-4 py-2 font-bold text-white drop-shadow hover:bg-success-dark"
			>
				<img class="mr-1 h-5" src="/assets/img/icons/add.svg" alt="" />
				<span>GENERAR ENTRADA</span>
			</button>
		</div>
	`,
	styleUrl: './ticket-add.component.scss',
})
export class TicketAddComponent {}
