import { Request, Response } from 'express'

class CurrencyController {
  public async index(req: Request, res: Response): Promise<Response> {
    const { username } = res.locals.jwtDecoded
    
    return res.json({username: username})
  }
}

export default new CurrencyController()