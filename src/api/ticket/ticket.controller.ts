import { NextFunction, Request, Response, Router } from 'express'
import * as ticketService from './ticket.service'

const router = Router()

router.get('/:id', getById)
router.get('/getAll', getAll)

export default router

function getById(req: Request, res: Response, next: NextFunction) {
    const idTicket = parseInt(req.params['id'])
    ticketService.getById(idTicket)
        .then((ticket => res.status(200).json(ticket)))
        .catch((err) => next(err))
}

function getAll(req: Request, res: Response, next: NextFunction) {
    ticketService.getAll()
        .then((tickets) => res.status(200).json(tickets))
        .catch((err) => next(err))
}