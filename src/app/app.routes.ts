import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

const ROUTE_TREE = {
	DASHBOARD: 'dashboard',
	TICKET_ADD: 'ticket-add',
	TICKET_DETAIL: 'ticket-detail',
};

export const appRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: ROUTE_TREE.DASHBOARD,
				loadComponent: () => import('./pages/dashboard/dashboard.component').then((m) => m.DashboardComponent),
			},
			{
				path: ROUTE_TREE.TICKET_ADD,
				loadComponent: () => import('./pages/ticket-add/ticket-add.component').then((m) => m.TicketAddComponent),
			},
			// TODO: Eliminar la ruta generica
			{
				path: ROUTE_TREE.TICKET_DETAIL,
				loadComponent: () =>
					import('./pages/ticket-detail/ticket-detail.component').then((m) => m.TicketDetailComponent),
			},
			{
				path: `${ROUTE_TREE.TICKET_DETAIL}/:id`,
				loadComponent: () =>
					import('./pages/ticket-detail/ticket-detail.component').then((m) => m.TicketDetailComponent),
			},
			{
				path: '',
				redirectTo: ROUTE_TREE.DASHBOARD,
				pathMatch: 'full',
			},
		],
		canActivate: [authGuard],
	},
	{
		path: '**',
		redirectTo: ROUTE_TREE.DASHBOARD,
		pathMatch: 'full',
	},
];
