import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular'

@Component({
  selector: 'ticketera-logout-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
        (click)="onLogoutButtonClicked()"
        class="bg-danger hover:bg-danger-dark flex rounded px-4 py-2 font-bold text-white"
    >
      <span class="">CERRAR SESIÓN</span> <img class="ml-1 h-5" src="/assets/img/icons/logout.svg" alt="" />
    </button>
  `,
})
export class LogoutButtonComponent {
  auth0Service = inject(AuthService);
  onLogoutButtonClicked() {
    this.auth0Service.logout();
  }
}
