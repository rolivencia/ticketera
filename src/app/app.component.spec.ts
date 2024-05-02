import { AppComponent } from './app.component';
import { render, RenderResult } from '@testing-library/angular';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
	let component: RenderResult<AppComponent, AppComponent>;

	beforeEach(async () => {
		component = await render(AppComponent, {
			componentImports: [CommonModule, RouterTestingModule],
		});
	});

	it('should create the app', () => {
		expect(component).toBeTruthy();
	});
});
