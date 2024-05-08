import { Component, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketService } from 'src/app/providers/ticket.service';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs'
import { QRCodeModule } from 'angularx-qrcode';
import * as htmlToImage from 'html-to-image';

@Component({
	selector: 'ticketera-ticket-view',
	standalone: true,
	imports: [CommonModule, QRCodeModule],
	template: `
  @if(ticket$ | async; as ticket){
	<div #ticket>
		<div class="m-5 grid rounded bg-gualicho-red text-white p-5 text-center drop-shadow">
			<img class="w-[300px] mx-auto" src="/assets/img/logo-gualicho.png" alt="">
			<hr class="my-4">
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
			<qrcode class="mx-auto rounded drop-shadow" [qrdata]="ticket.qrString" [width]="256" [errorCorrectionLevel]="'M'"></qrcode>
			<p class="text-2xl font-bold">{{ ticket?.lastName?.toUpperCase() }}, {{ ticket?.firstName }}</p>
			<p class="text-2xl font-bold">{{ ticket?.dni }}</p>
		</div>
	</div>
	<a href={{ticketLink}}>
		<button (click)="descargarImagen()" class="flex w-full mt-5 bg-danger hover:bg-danger-dark text-white font-bold py-2 px-4 rounded drop-shadow justify-center">
			<span>⏬ DESCARGAR ENTRADA</span>
		</button>
	</a>
  }
  `,
	styleUrl: './ticket-view.component.scss'
})
export class TicketViewComponent {
	private route = inject(ActivatedRoute)
	private ticketService = inject(TicketService)
	ticketLink = '';
	
	ticket$ = this.route.params.pipe(
		takeUntilDestroyed(),
		switchMap(({ uuid }) => this.ticketService.getTicketByUUID(uuid))
	);

	constructor(private el: ElementRef) { }

	descargarImagen() {
		const contenido = this.el.nativeElement.querySelector('#ticket');
		htmlToImage.toPng(contenido)
			.then((dataUrl: string) => {
				const enlace = document.createElement('a');
				enlace.href = dataUrl;
				enlace.download = 'mi_imagen.png';
				enlace.click();
			})
			.catch((error) => {
				console.error('Error al convertir la imagen:', error);
			});
	}

}
