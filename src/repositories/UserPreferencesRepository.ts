import { BaseRepository } from './BaseRepository'
import { UserPreferences, IUserPreferencesDocument } from '../models/schemas/UserPreferences'
import { IUserPreferences } from '../models/interfaces/user-preferences'


class UserPreferencesRepository extends BaseRepository<IUserPreferencesDocument, IUserPreferences>{
  constructor(){
    super(UserPreferences)
  }
}

export default new UserPreferencesRepository()