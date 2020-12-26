import { IUser } from "src/models/interfaces/user";
import { IUserDocument } from "src/models/schemas/User";
import UserRepository from "src/repositories/UserRepository";
import { Result } from "./Result";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import config from 'config'
import { IUserAuthenticate, IUserRegister } from "src/models/interfaces/user-responses";

class UserService {
 
  public async createUser(user: IUser): Promise<Result<IUserRegister>> {
    const userAlreadyInUse = await UserRepository.findOne(
        { $or: [{username: user.username}, { email: user.email}]}
    )
    
    if(userAlreadyInUse){
      return Result.fail<IUserRegister>('Username or email already in use')
    }
    
    user.password = await this._hashPassword(user.password)

    const createdUser = await UserRepository.create(user)
    const token = this._generateToken(createdUser.username)

    const response: IUserRegister = {
      username: createdUser.username,
      email: createdUser.email,
      firstName: createdUser.firstName,
      lastName: createdUser.lastName,
      token: token
    }
    return Result.ok<IUserRegister>(response)
  }

  public async authenticateUser(username: string, password: string): Promise<Result<IUserAuthenticate>> {
    const user = await UserRepository.findOneToAuthenticate({username: username})

    if(!user){
      return Result.fail<IUserAuthenticate>('User not found')
    }

    const matchPassword = await bcrypt.compare(password, user.password)

    if(!matchPassword){
      return Result.fail<IUserAuthenticate>('Incorrect password')
    }

    const token = this._generateToken(username)
    const response: IUserAuthenticate = {
      username: username,
      token: token
    }

    return Result.ok<IUserAuthenticate>(response)
  }

  private async _hashPassword(password: string): Promise<string>{
    return await bcrypt.hash(password, 10)
  }

  private _generateToken(username: string): string {
    const { secret } = config.get('jwt')
    return jwt.sign({ username: username }, secret , {
             subject: username,
             expiresIn: '1d'
           })
  }
}

export default new UserService()