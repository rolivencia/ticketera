import { NextFunction, Request, Response, Router } from 'express'
import * as ticketService from './ticket.service'

const router = Router()

router.post('/', create)
router.get('/:id', getById)
router.get('/getByQRString/:string', getByQRString)
router.get('/', getAll)

export default router

function getById(req: Request, res: Response, next: NextFunction) {
    const idTicket = parseInt(req.params['id'])
    ticketService.getById(idTicket)
        .then((ticket => res.status(200).json(ticket)))
        .catch((err) => next(err))
}

function getByQRString(req: Request, res: Response, next: NextFunction) {
    const qrString = req.params['qrString'];
    ticketService.getByQRString(qrString)
        .then((ticket => res.status(200).json(ticket)))
        .catch((err) => next(err))
}

function getAll(req: Request, res: Response, next: NextFunction) {
    ticketService.getAll()
        .then((tickets) => res.status(200).json(tickets))
        .catch((err) => next(err))
}

function create(req: Request, res: Response, next: NextFunction) {
    const ticketCreateData = req.body;
    ticketService.create(ticketCreateData)
        .then(() => res.status(201).send('Ticket created succesfully'))
        .catch((err) => next(err));
}
