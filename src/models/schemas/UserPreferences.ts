import mongoose from 'mongoose'
import { IUserPreferences } from '../interfaces/user-preferences'

export interface IUserPreferencesDocument extends mongoose.Document, IUserPreferences {}
  type IUserPreferencesModel = mongoose.Model<IUserPreferencesDocument>

const UserPreferencesSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true
    },
    preferences: [{
      type: { type: String, enum: ['currency', 'stock'] },
      id: { type: String}
    }]
  }
)

export const UserPreferences: IUserPreferencesModel = mongoose.model<IUserPreferencesDocument, IUserPreferencesModel>('UserPreferences', UserPreferencesSchema)