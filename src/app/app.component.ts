import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
	standalone: true,
	selector: 'ticketera-root',
	template: `
		¡EXITO!
		<div class="mx-5 my-0 min-h-screen md:m-auto md:max-w-screen-lg">
			<router-outlet />
		</div>
	`,
	imports: [CommonModule, RouterModule],
})
export class AppComponent {
	constructor() {
	}
}
