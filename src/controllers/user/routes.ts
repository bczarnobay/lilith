import { Router } from 'express'
import UserController from './controller'

const routes = Router()

routes.post('/register', UserController.register)
routes.post('/authenticate', UserController.authenticate)

export default routes