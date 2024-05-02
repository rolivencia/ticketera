import UserController from './user/user.controller'

export interface ApiRoute {
    path: string;
    controller: never;
}

export default [
    { path: '/user', controller: UserController }
] as ApiRoute[];
