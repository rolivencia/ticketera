import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'ticketera-dashboard',
	standalone: true,
	imports: [CommonModule],
	template: `<p>dashboard works!</p>`,
	styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
