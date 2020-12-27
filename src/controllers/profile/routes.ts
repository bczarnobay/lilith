import { Router } from 'express'
import ProfileController from './controller'

const routes = Router()

routes.get('/', ProfileController.index)
routes.post('/preferences', ProfileController.update)
routes.delete('/preferences', ProfileController.delete)

export default routes