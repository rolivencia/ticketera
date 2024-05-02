export interface Ticket{
    id: number,
    cost: number,
    firstName: string,
    lastName: string,
    qrString: string,
    email: string,
    phone: string,
    dni: string,
    createdBy: number,
    createdAt: string,
    updatedAt: string,
    enabled: boolean,
    deleted: boolean
}