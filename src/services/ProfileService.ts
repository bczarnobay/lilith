import { IPreference } from "src/models/interfaces/user-preferences";
import { IUserProfile } from "src/models/interfaces/user-responses";
import UserPreferencesRepository from "src/repositories/UserPreferencesRepository";

class ProfileService {
  public async getProfile(username: string): Promise<IUserProfile>{
    const response = await UserPreferencesRepository.findOne({username: username})

    const userProfile: IUserProfile = {
      username: response.username,
      preferences: response.preferences
    }
    return userProfile   
  }

  public async includePreferences(username:string, newPreferences: string[], type: string): Promise<IUserProfile> {
    const preferences = newPreferences.map((preference: string) : IPreference => {
      return {
        type: type,
        id: preference
      }
    })

    const preferencesUpdated = await UserPreferencesRepository.findOneAndUpdate(
      { username: username },
      {
        $set:
        { preferences: preferences }
      },
      {
        new: true,
        upsert: true
      }
    )

    return preferencesUpdated
  }

  public async removePreferences(username:string, deletedPreferences: string[]): Promise<IUserProfile> {
    const userProfile = await UserPreferencesRepository.findOne({ username: username })
    
    let updatedPreferences = userProfile.preferences.filter((preference: IPreference) =>{
      return !deletedPreferences.includes(preference.id)
    })

    const response = await UserPreferencesRepository.findOneAndUpdate(
      { username: username },
      {
        $set:
        { preferences: updatedPreferences }
      },
      {
        new: true
      }
    )
    return response
  }

}

export default new ProfileService()