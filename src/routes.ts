import { Router } from 'express'
import JwtAuthenticate from './middlewares/JwtAuthenticate'
import userRouter from './controllers/user/routes'
import currencyRouter from './controllers/currency/routes'

const routes = Router()

routes.use('/user', userRouter)
routes.use('/currency', JwtAuthenticate.verify, currencyRouter)

export default routes 