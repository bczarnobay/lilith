import { BaseRepository } from './BaseRepository'
import { User, IUserDocument } from '../models/schemas/User'
import { IUser } from '../models/interfaces/user'


class UserRepository extends BaseRepository<IUserDocument, IUser>{
  constructor(){
    super(User)
  }

  public async findOneToAuthenticate(where: any): Promise<IUserDocument> {
    return this._model.findOne(where).select('+password')
  }
}

export default new UserRepository()