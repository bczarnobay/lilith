import { BaseRepository } from './BaseRepository'
import { User, IUserDocument } from '../models/schemas/User'
import { IUser } from '../models/interfaces/user'


class UserRepository extends BaseRepository<IUserDocument, IUser>{
  constructor(){
    super(User)
  }
}

export default new UserRepository()