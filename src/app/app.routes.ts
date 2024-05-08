import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const ROUTE_TREE = {
	DASHBOARD: 'dashboard',
	TICKET_ADD: 'ticket-add',
	TICKET_DETAIL: 'ticket-detail',
	TICKET_VIEW: 'ticket-view'
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
		path: `${ROUTE_TREE.TICKET_VIEW}/:uuid`,
		loadComponent: () =>
			import('./pages/ticket-view/ticket-view.component').then((m) => m.TicketViewComponent),
	},
	{
		path: '**',
		redirectTo: ROUTE_TREE.DASHBOARD,
		pathMatch: 'full',
	},
];
