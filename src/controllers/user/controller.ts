import { Request, Response } from 'express'
import { IUser } from 'src/models/interfaces/user'
import UserService from 'src/services/UserService'

class UserController {
  public async register(req: Request, res: Response) : Promise<Response> {
    const { email, firstName, lastName, password, userId } = req.body
    
    if(!email || !firstName || !userId || !password) {
      return res.status(400).send({ message: 'Information missing'})
    }

    const user: IUser = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      userId: userId,
      password: password
    }

    const result = await UserService.createUser(user)

    if(result.isSuccess){
      return res.json(result.getValue())
    } else {
      return res.status(400).send({message: result.error})
    }    
  }
}

export default new UserController()