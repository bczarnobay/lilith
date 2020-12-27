import { Request, response, Response } from 'express'
import ProfileService from 'src/services/ProfileService'

class ProfileController {
  public async index(req: Request, res: Response): Promise<Response>{
    const { username } = res.locals.jwtDecoded

    return res.json(await ProfileService.getProfile(username))
  }
}

export default new ProfileController()