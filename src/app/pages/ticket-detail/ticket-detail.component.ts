import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ticket } from '../../interfaces/ticket.model';
import { TicketService } from 'src/app/providers/ticket.service';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
	selector: 'ticketera-ticket-detail',
	standalone: true,
	imports: [CommonModule],
	template: `
		<div class="m-5 grid rounded bg-white p-5 text-center drop-shadow">
			<div class="flex justify-between">
				<p class="font-bold text-xl">GUALICHO FEST</p>
				<span class="whitespace-nowrap rounded-full bg-gray-100 px-2.5 py-0.5 text-sm text-gray-700">
					Entrada #{{ ticket?.id }}
				</span>
			</div>
			<div class="grid grid-cols-2 mt-5">
				<div class="text-left">18/05/2024 <br> 23:59</div>
				<div class="text-right"><span class="font-bold">Casa Grande</span><br>Belgrano 3298, Santa Fe</div>
			</div>
			<img class="w-[250px] mx-auto" src="https://qrcg-free-editor.qr-code-generator.com/main/assets/images/websiteQRCode_noFrame.png" alt="">
			<p class="text-2xl font-bold">{{ ticket?.lastName?.toUpperCase() }}, {{ ticket?.firstName }}</p>
			<p class="text-2xl font-bold">{{ ticket?.dni }}</p>
			<button class="flex w-full mt-5 bg-success hover:bg-success-dark text-white font-bold py-2 px-4 rounded drop-shadow justify-center">
				<img class="h-5 mr-1" src="/assets/img/icons/whatsapp-white.svg" alt="" />
				<span>ENVIAR POR WHATSAPP</span>
			</button>
		</div>
	`,
	styleUrl: './ticket-detail.component.scss',
})
export class TicketDetailComponent{
	ticket: Ticket | undefined;

	constructor(private ticketService: TicketService, private route: ActivatedRoute){
		
		this.route.paramMap.pipe(takeUntilDestroyed()).subscribe((params) => {
			//const id = params.get('id');
			//if(id){
				this.ticketService.getTicketByID(3).subscribe((ticket) => {
					this.ticket=ticket;
				})
			//}
		}
	)}

}