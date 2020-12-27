import { Request, response, Response } from 'express'
import ProfileService from 'src/services/ProfileService'

class ProfileController {
  public async index(req: Request, res: Response): Promise<Response>{
    const { username } = res.locals.jwtDecoded
    return res.json(await ProfileService.getProfile(username))
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { username } = res.locals.jwtDecoded
    const { preferences, type } = req.body

    return res.json(await ProfileService.includePreferences(username, preferences, type))
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { username } = res.locals.jwtDecoded
    const { preferences, type } = req.body

    return res.json(await ProfileService.removePreferences(username, preferences))
  }
}

export default new ProfileController()