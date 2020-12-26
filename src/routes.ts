import { Router } from 'express'
import JwtAuthenticate from './middlewares/JwtAuthenticate'
import userRouter from './controllers/user/routes'

const routes = Router()

routes.use('/user', userRouter)

export default routes 