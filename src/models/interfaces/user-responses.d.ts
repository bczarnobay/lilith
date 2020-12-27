export interface IUserRegister {
  username: string,
  email: string,
  firstName: string,
  lastName: string,
  token: string
}

export interface IUserAuthenticate {
  username: string,
  token: string
}

export interface IUserProfile {
  username: string,
  // email: string,
  // firstName: string,
  // lastName: string,
  preferences: { }
}