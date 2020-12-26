import { IUser } from "src/models/interfaces/user";
import { IUserDocument } from "src/models/schemas/User";
import UserRepository from "src/repositories/UserRepository";
import { Result } from "./Result";
import bcrypt from 'bcryptjs'

class UserService {
  public async createUser(user: IUser): Promise<Result<IUserDocument>> {
    const userAlreadyInUse = await UserRepository.findOne(
        { $or: [{userId: user.userId}, { email: user.email}]}
    )
    
    if(userAlreadyInUse){
      return Result.fail<IUserDocument>('Username or email already in use')
    }
    
    user.password = await this._hashPassword(user.password)
    return Result.ok<IUserDocument>(await UserRepository.create(user))
  }

  private async _hashPassword(password: string): Promise<any>{
    return await bcrypt.hash(password, 10)
  }
}

export default new UserService()