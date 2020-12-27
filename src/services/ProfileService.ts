import { IUserProfile } from "src/models/interfaces/user-responses";
import UserPreferencesRepository from "src/repositories/UserPreferencesRepository";

class ProfileService {
  public async getProfile(username: string): Promise<IUserProfile>{
    const response = await UserPreferencesRepository.findOne({username: username})

    const userProfile: IUserProfile = {
      username: response.username,
      preferences: response.preferences
    }
    return response   
  }

  public async setPreferences(username:string, preferences: string[]): Promise<IUserProfile> {
    return null
  }
}

export default new ProfileService()