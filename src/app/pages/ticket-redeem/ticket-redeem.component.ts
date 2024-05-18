import {Component, inject} from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ZXingScannerModule  } from '@zxing/ngx-scanner';

import { FormsModule } from "@angular/forms";
import {TicketService} from "../../providers/ticket.service";
import {Ticket} from "../../interfaces/ticket.model";
import { first } from 'rxjs';


@Component({
  selector: 'ticketera-ticket-redeem',
  standalone: true,
  imports: [CommonModule, ZXingScannerModule, FormsModule, DatePipe],
  template: `

    @if(error) {
      <div role="alert" class="rounded border-s-4 border-red-500 bg-red-50 p-4">
        <div class="flex items-center gap-2 text-red-800">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
            <path
              fill-rule="evenodd"
              d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
              clip-rule="evenodd"
            />
          </svg>

          <strong class="block font-medium"> Error al canjear ticket </strong>
        </div>

        <p class="mt-2 text-sm text-red-700">
          {{ error }}
        </p>
      </div>
    }

    @if(reedemedTicket) {
      <div role="alert" class="rounded border-s-4 border-green-500 bg-green-50 p-4">
        <div class="flex items-center gap-2 text-green-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <strong class="block font-medium"> Entrada canjeada correctamente </strong>
        </div>

        <p class="mt-2 text-sm text-red-700">
          {{ reedemedTicket.firstName }} {{ reedemedTicket.lastName }} entró a la fiesta!
        </p>
      </div>
    }

    @if(isLoading){
      <img class="justify-center items-center" src="/assets/img/spinner.gif" alt=""/>
    }

    @if(!isLoading) {
      @if(!ticket){
        <div>
          <zxing-scanner
          class="mx-auto"
          [(device)]="selectedDevice"
          (camerasFound)="onCamerasFound($event)"
          (scanSuccess)="onScanSuccess($event)">
          </zxing-scanner>
        </div>

        <div class="mt-5">
          <label for="HeadlineAct" class="block text-sm font-medium text-gray-900"> Seleccionar cámara </label>

          <select
              name="HeadlineAct"
              id="HeadlineAct"
              class="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
              (change)="onSelectedDeviceChanged($event.target)"
          >
            @for(device of availableDevices; track $index){
              <option
                  [value]="device.deviceId"
                  [selected]="selectedDevice && device.deviceId === selectedDevice.deviceId"
              >{{ device.label }}</option>
            }
          </select>
        </div>
      }

      @if(ticket) {
        <!-- Información del ticket vendido-->
        <div 
          class="m-5 grid rounded text-white p-5 text-center drop-shadow"
          [ngClass]="ticket.enabled?'bg-danger':'bg-success'"
        >
          <div class="flex justify-between">
            <p class="font-bold text-xl">GUALICHO FEST</p>
            <span class="whitespace-nowrap rounded-full bg-gray-100 px-2.5 py-0.5 text-sm text-gray-700">
              Entrada #{{ ticket.id }}
            </span>
          </div>
          <p class="text-2xl font-bold">{{ ticket.lastName.toUpperCase() }}, {{ ticket.firstName }}</p>
          <p class="text-2xl font-bold">{{ ticket.dni }}</p>
          <p>Vendido el: {{ticket.createdAt | date:"dd/MM/yyyy, hh:mm a"}}</p>
        </div>
        @if (!ticket.enabled) {
          <button (click)="redeem(ticket)"
                  class="mt-5 flex w-full justify-center rounded bg-primary px-4 py-2 font-bold text-white drop-shadow hover:bg-success-dark"
          >Redimir ticket</button>
        }
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
  error: string | undefined;
  reedemedTicket: Ticket | undefined;

  availableDevices: MediaDeviceInfo[] = []
  selectedDevice: MediaDeviceInfo | undefined;

  onScanSuccess(uuid: string) {
    this.reedemedTicket = undefined;
    this.isLoading = true;
    this.ticketService.getTicketByUUID(uuid).subscribe((result) => {
      this.isLoading = false;
      this.ticket = result;
    })
  }

  onCamerasFound($event: MediaDeviceInfo[]){
    this.availableDevices = $event;
    this.selectedDevice = this.availableDevices[0];
  }

  onSelectedDeviceChanged($event: any){
    const deviceId = $event.value;
    this.selectedDevice = this.availableDevices.filter(device => device.deviceId === deviceId)[0];
  }

  redeem(ticket: Ticket){
    this.ticketService.redeemTicket(ticket).pipe(first()).subscribe({
      next: (response) => {
        this.ticket = undefined;
        this.reedemedTicket = response;
      },
      error: (error) => {
        console.error('Error al crear el ticket', error);
        this.error = error;
      }
    })
  }



}
