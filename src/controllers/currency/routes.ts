import { Router } from 'express'
import CurrencyController from './controller'

const routes = Router()

routes.get('/rates', CurrencyController.index)
routes.get('/', CurrencyController.list)

export default routes