import { Request, Response } from 'express'
import { IUser } from 'src/models/interfaces/user'
import UserService from 'src/services/UserService'

class UserController {
  public async register(req: Request, res: Response) : Promise<Response> {
    const { email, firstName, lastName, password, username } = req.body
    
    if(!email || !firstName || !username || !password) {
      return res.status(400).send({ message: 'Information missing'})
    }

    const user: IUser = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      username: username,
      password: password
    }

    const result = await UserService.createUser(user)

    if(result.isSuccess){
      return res.json(result.getValue())
    } else {
      return res.status(400).send({message: result.error})
    }    
  }

  public async authenticate(req: Request, res: Response): Promise<Response> {
    const { username, password } = req.body

    if(!username || !password) {
      return res.status(400).send({ message: 'Information missing'})
    }

    const result = await UserService.authenticateUser(username, password)

    if(result.isSuccess){
      return res.json(result.getValue())
    } else {
      return res.status(400).send({message: result.error})
    }
  }
}

export default new UserController()