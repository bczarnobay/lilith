import { IUser } from "src/models/interfaces/user";
import { IUserDocument } from "src/models/schemas/User";
import UserRepository from "src/repositories/UserRepository";
import { Result } from "./Result";

class UserService {
  public async createUser(user: IUser): Promise<Result<IUserDocument>> {
    
    if(await UserRepository.findOne(user.userId)){
      return Result.fail<IUserDocument>('User Already Exists')
    }

    return Result.ok<IUserDocument>(await UserRepository.create(user))

  }
}

export default new UserService()