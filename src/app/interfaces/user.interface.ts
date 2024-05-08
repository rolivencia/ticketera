import { Audit } from './audit.interface'

export interface User extends Audit {
    id: number;
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
}
