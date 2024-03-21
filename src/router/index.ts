import { Router } from 'express'
import userRouter from './userRouter'
import logRouter from './logRouter'
import sessionRouter from './sessionRouter'

const router = Router()

router.use('/user', userRouter)
router.use('/session', sessionRouter)
router.use('/log', logRouter)

export default router
