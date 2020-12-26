import { Router } from 'express'
import CurrencyController from './controller'

const routes = Router()

routes.get('/rates', CurrencyController.index)

export default routes