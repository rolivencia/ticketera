import UserController from './user/user.controller'
import TicketController from './ticket/ticket.controller'
import SellerController from './seller/seller.controller';
export interface ApiRoute {
    path: string;
    controller: never;
}

export default [
    { path: '/user', controller: UserController },
    { path: '/ticket', controller: TicketController },
    { path: '/seller', controller: SellerController }
] as ApiRoute[];
