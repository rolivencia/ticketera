import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'ticketera-ticket-detail',
	standalone: true,
	imports: [CommonModule],
	template: `
		<div class="m-5 grid rounded bg-white p-5 text-center drop-shadow">
			<div class="flex justify-between">
				<p class="font-bold text-xl">GUALICHO FEST</p>
				<span class="whitespace-nowrap rounded-full bg-gray-100 px-2.5 py-0.5 text-sm text-gray-700">
					Entrada #1
				</span>
			</div>
			<div class="grid grid-cols-2 mt-5">
				<div class="text-left">18/05/2024 <br> 23:59</div>
				<div class="text-right"><span class="font-bold">Casa Grande</span><br>Belgrano 3298, Santa Fe</div>
			</div>
			<img class="qr mx-auto" src="https://qrcg-free-editor.qr-code-generator.com/main/assets/images/websiteQRCode_noFrame.png" alt="">
			<p class="text-2xl font-bold">TSCHOPP, Juan Blas</p>
			<p class="text-2xl font-bold">42530052</p>
			<button class="flex w-full mt-5 bg-success hover:bg-success-dark text-white font-bold py-2 px-4 rounded drop-shadow justify-center">
				<img class="h-5 mr-1" src="/assets/img/icons/whatsapp-white.svg" alt="" />
				<span>ENVIAR POR WHATSAPP</span>
			</button>
		</div>
	`,
	styleUrl: './ticket-detail.component.scss',
})
export class TicketDetailComponent {}
