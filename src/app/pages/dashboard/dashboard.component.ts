import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'ticketera-dashboard',
	standalone: true,
	imports: [CommonModule],
	template: `
		<div class="m-5 grid rounded bg-white p-5 text-center drop-shadow">
			<span class="text-5xl font-bold text-success">4</span>
			<span class="text-m font-bold">ENTRADAS VENDIDAS</span>
		</div>

		<div class="overflow-x-auto">
			<table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
				<thead class="ltr:text-left rtl:text-right">
					<tr>
						<th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">#</th>
						<th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Nombre</th>
						<th class="px-4 py-2"></th>
					</tr>
				</thead>

				<tbody class="divide-y divide-gray-200">
					<tr *ngFor="let ticket of tickets">
						<td class="whitespace-nowrap px-4 py-5 font-medium text-gray-900">#{{ ticket.numero }}</td>
						<td class="whitespace-nowrap px-4 py-5 text-gray-700">{{ ticket.apellido }}, {{ ticket.nombre }}</td>
						<td class="flex justify-between whitespace-nowrap px-4 py-5">
							<img class="h-5" src="/assets/img/icons/qr-code.svg" alt="" />
							<img class="h-5" src="/assets/img/icons/whatsapp.svg" alt="" />
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<button
			class="bg-success hover:bg-success-dark fixed bottom-4 right-4 rounded-full px-4 py-2 font-bold text-white shadow-lg flex"
		><img class="h-5 mr-1" src="/assets/img/icons/add.svg" alt="" /> GENERAR ENTRADA</button>
	`,
	styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
	tickets = [
		{
			numero: 1,
			nombre: 'Juan',
			apellido: 'Pérez',
		},
		{
			numero: 2,
			nombre: 'Ana',
			apellido: 'González',
		},
		{
			numero: 3,
			nombre: 'Carlos',
			apellido: 'Rodríguez',
		},
		{
			numero: 4,
			nombre: 'Sofía',
			apellido: 'Martínez',
		},
		{
			numero: 1,
			nombre: 'Juan',
			apellido: 'Pérez',
		},
		{
			numero: 2,
			nombre: 'Ana',
			apellido: 'González',
		},
		{
			numero: 3,
			nombre: 'Carlos',
			apellido: 'Rodríguez',
		},
		{
			numero: 4,
			nombre: 'Sofía',
			apellido: 'Martínez',
		},
		{
			numero: 1,
			nombre: 'Juan',
			apellido: 'Pérez',
		},
		{
			numero: 2,
			nombre: 'Ana',
			apellido: 'González',
		},
		{
			numero: 3,
			nombre: 'Carlos',
			apellido: 'Rodríguez',
		},
		{
			numero: 4,
			nombre: 'Sofía',
			apellido: 'Martínez',
		},
		{
			numero: 1,
			nombre: 'Juan',
			apellido: 'Pérez',
		},
		{
			numero: 2,
			nombre: 'Ana',
			apellido: 'González',
		},
		{
			numero: 3,
			nombre: 'Carlos',
			apellido: 'Rodríguez',
		},
		{
			numero: 4,
			nombre: 'Sofía',
			apellido: 'Martínez',
		},
	];
}
