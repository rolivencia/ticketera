import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'ticketera-unauthorized',
	standalone: true,
	imports: [CommonModule],
	template: `<h1>¡NAO NAO! ¡USUARIO NO AUTORIZADO! (Comunicate con el staff)</h1>`,
	styles: ``,
})
export class UnauthorizedComponent {}
