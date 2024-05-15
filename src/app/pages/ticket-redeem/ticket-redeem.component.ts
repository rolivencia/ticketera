import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZXingScannerModule  } from '@zxing/ngx-scanner';

import { FormsModule } from "@angular/forms";

@Component({
  selector: 'ticketera-ticket-redeem',
  standalone: true,
  imports: [CommonModule, ZXingScannerModule, FormsModule],
  template: `
    <div
      id="scanner-container"
      class="bg-white"
    >
      <zxing-scanner
        (scanSuccess)="onCodeResult($event)"
      >
      </zxing-scanner>
      <p>	{{result}}</p>
    </div>


  `,
  styleUrl: './ticket-redeem.component.scss'
})
export class TicketRedeemComponent {
  result: string = '';

  onCodeResult(result:string){
    this.result=result
  }
}
