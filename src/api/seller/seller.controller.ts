import { NextFunction, Request, Response, Router } from 'express'
import * as sellerService from './seller.service'

const router = Router()

router.get('/:id', getById)

export default router

function getById(req: Request, res: Response, next: NextFunction) {
    const idSeller = parseInt(req.params['id'])
    sellerService.getById(idSeller)
        .then((seller => res.status(200).json(seller)))
        .catch((err) => next(err));
}