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
  `,
  styleUrl: './ticket-redeem.component.scss'
})
export class TicketRedeemComponent {

onScanSuccess($event: string) {
  console.log($event);
}


}
