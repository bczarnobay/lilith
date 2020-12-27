export interface IUserPreferences {
    // id?: any,
    username: string
    preferences: []
  } type UserPreferences = IUserPreferences

export interface IPreference {
    type: string,
    id: string,
}