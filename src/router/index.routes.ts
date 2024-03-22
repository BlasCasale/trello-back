import { Router } from 'express'
import userRouter from './userRouter.routes'
import logRouter from './logRouter.routes'
import sessionRouter from './sessionRouter.routes'

const router = Router()

router.use('/user', userRouter)
router.use('/session', sessionRouter)
router.use('/log', logRouter)

export default router
