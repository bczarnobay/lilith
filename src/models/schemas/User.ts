import mongoose, { Mongoose } from 'mongoose'
import { IUser } from '../interfaces/user'

export interface IUserDocument extends mongoose.Document, IUser {}
  type IUserModel = mongoose.Model<IUserDocument>

const UserSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    password: {
      type: String,
      required: true,
      select: false
    }
  }
)

export const User: IUserModel = mongoose.model<IUserDocument, IUserModel>('User', UserSchema)