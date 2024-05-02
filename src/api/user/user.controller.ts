import { NextFunction, Request, Response, Router } from 'express'
import * as userService from './user.service'

const router = Router()

router.get('/:id', getById)

export default router

function getById(req: Request, res: Response, next: NextFunction) {
    const idUser = parseInt(req.params['id'])
    userService.getById(idUser)
        .then((user => res.status(200).json(user)))
        .catch((err) => next(err))
}
