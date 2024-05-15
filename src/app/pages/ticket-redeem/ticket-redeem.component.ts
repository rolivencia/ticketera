import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZXingScannerComponent, ZXingScannerModule  } from '@zxing/ngx-scanner';

import { FormsModule } from "@angular/forms";


@Component({
  selector: 'ticketera-ticket-redeem',
  standalone: true,
  imports: [CommonModule, ZXingScannerModule, FormsModule],
  template: `
      <zxing-scanner (scanSuccess)="onScanSuccess($event)">
      </zxing-scanner>
      @if(uuid) {
        <h1>UUID: {{ uuid }}</h1>
      }
  `,
  styleUrl: './ticket-redeem.component.scss'
})
export class TicketRedeemComponent {

  uuid: string = '';

onScanSuccess($event: string) {
  console.log($event);
  alert($event);
  this.uuid = $event;
}


}
