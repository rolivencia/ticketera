import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
	standalone: true,
	selector: 'ticketera-root',
	template: `
		<ticketera-header></ticketera-header>
		<div class="mx-5 max-w-screen-lg px-4 py-4 sm:px-6 sm:py-8 md:max-w-screen-lg lg:px-8">
			<router-outlet />
		</div>
	`,
	imports: [CommonModule, RouterModule, HeaderComponent],
})
export class AppComponent {}
