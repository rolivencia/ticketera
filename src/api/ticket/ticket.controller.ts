import { NextFunction, Request, Response, Router } from 'express'
import * as ticketService from './ticket.service'

const router = Router()

router.get('/:id', getById)

export default router

function getById(req: Request, res: Response, next: NextFunction) {
    const idTicket = parseInt(req.params['id'])
    ticketService.getById(idTicket)
        .then((ticket => res.status(200).json(ticket)))
        .catch((err) => next(err))
}