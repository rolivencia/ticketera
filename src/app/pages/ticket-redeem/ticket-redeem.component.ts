import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZXingScannerModule  } from '@zxing/ngx-scanner';

import { FormsModule } from "@angular/forms";
import {TicketService} from "../../providers/ticket.service";
import {Ticket} from "../../interfaces/ticket.model";


@Component({
  selector: 'ticketera-ticket-redeem',
  standalone: true,
  imports: [CommonModule, ZXingScannerModule, FormsModule],
  template: `

    @if(isLoading){
      <img class="justify-center items-center" src="/assets/img/spinner.gif" alt=""/>
    }

    @if(!isLoading) {
      @if(!ticket){
        <div>
          <zxing-scanner (scanSuccess)="onScanSuccess($event)">
          </zxing-scanner>
        </div>
      }

      @if(ticket) {
        <!-- Información del ticket vendido-->
        <h1>{{ ticket | json }}</h1>
        <button (click)="redeem(ticket)"
                class="mt-5 flex w-full justify-center rounded bg-primary px-4 py-2 font-bold text-white drop-shadow hover:bg-success-dark"
        >Redimir ticket</button>
        <button (click)="ticket = undefined"
                class="mt-5 flex w-full justify-center rounded bg-primary-dark px-4 py-2 font-bold text-white drop-shadow hover:bg-success-dark"
        >Escanear de nuevo</button>
      }
    }
  `,
  styleUrl: './ticket-redeem.component.scss'
})
export class TicketRedeemComponent {

  isLoading = false;
  ticket: Ticket | undefined;
  ticketService = inject(TicketService);

  onScanSuccess(uuid: string) {
    this.isLoading = true;
    this.ticketService.getTicketByUUID(uuid).subscribe((result) => {
      this.isLoading = false;
      this.ticket = result;
    })
  }

  redeem(ticket: Ticket){
    throw new Error('Método no implementado!')
  }

}
