import { Router } from 'express'
import ProfileController from './controller'

const routes = Router()

routes.get('/', ProfileController.index)

export default routes