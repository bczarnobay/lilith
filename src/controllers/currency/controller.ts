import { Request, Response } from 'express'
import CurrencyService from 'src/services/CurrencyService'

class CurrencyController {
  public async index(req: Request, res: Response): Promise<Response> {
    const { username } = res.locals.jwtDecoded
    
    return res.json({username: username})
  }

  public async list(req: Request, res: Response): Promise<Response> {
    return res.json(await CurrencyService.getAvailableCurrencies())
  }
}

export default new CurrencyController()