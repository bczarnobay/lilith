export interface IUser {
  // id?: any,
  username: string
  email: string,
  firstName: string,
  lastName: string,
  createdAt?: Date
  password: any
} type User = IUser