import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common'
import { QRCodeModule } from 'angularx-qrcode';
import { TicketService } from 'src/app/providers/ticket.service';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs'

@Component({
	selector: 'ticketera-ticket-detail',
	standalone: true,
	imports: [CommonModule, QRCodeModule],
	template: `
		@if(ticket$ | async; as ticket){
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
				<qrcode class="mx-auto" (qrCodeURL)="onChangeURL($event)" [qrdata]="ticket?.qrString" [width]="256" [errorCorrectionLevel]="'M'"></qrcode>
			  <a [href]="qrCodeDownloadLink" download="qrcode">Download</a>
				<p class="text-2xl font-bold">{{ ticket?.lastName?.toUpperCase() }}, {{ ticket?.firstName }}</p>
				<p class="text-2xl font-bold">{{ ticket?.dni }}</p>
        <!--TODO: acomodar link-->
				<a href="https://api.whatsapp.com/send/?phone=549{{phone}}&text=Tu+entrada+para+%2AGUALICHO+FEST%2A%0A%0ALink%3A+{{qrCodeDownloadLink}}&type=phone_number&app_absent=0" target="_blank">
          <button class="flex w-full mt-5 bg-success hover:bg-success-dark text-white font-bold py-2 px-4 rounded drop-shadow justify-center">
            <img class="h-5 mr-1" src="/assets/img/icons/whatsapp-white.svg" alt="" />
            <span>ENVIAR POR WHATSAPP</span>
          </button>
        </a>
			</div>
	`,
	styleUrl: './ticket-detail.component.scss',
})
export class TicketDetailComponent {
	private route = inject(ActivatedRoute)
	private ticketService = inject(TicketService)

	ticket$ = 		this.route.params.pipe(
		takeUntilDestroyed(),
		switchMap(({ id }) => this.ticketService.getTicketByID(id))
	);
}
