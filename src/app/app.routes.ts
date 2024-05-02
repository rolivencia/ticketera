import { Routes } from '@angular/router';

const ROUTE_TREE = {
    DASHBOARD: 'dashboard',
    TICKET_ADD: 'ticket-add',
    TICKET_DETAIL: 'ticket-detail',
}

export const appRoutes: Routes = [
    {
        path: ROUTE_TREE.DASHBOARD,
        loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent)
    },
    {
        path: ROUTE_TREE.TICKET_ADD,
        loadComponent: () => import('./pages/ticket-add/ticket-add.component').then(m => m.TicketAddComponent)
    },
    {
        path: `${ROUTE_TREE.TICKET_DETAIL}/:id`,
        loadComponent: () => import('./pages/ticket-detail/ticket-detail.component').then(m => m.TicketDetailComponent)
    },
    {
        path: '',
        redirectTo: ROUTE_TREE.DASHBOARD,
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: ROUTE_TREE.DASHBOARD,
        pathMatch: 'full'
    }
];
