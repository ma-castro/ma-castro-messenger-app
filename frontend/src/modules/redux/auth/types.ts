import { IUser } from 'modules/models/user';

// initial state =============
export interface IInitialState {
  userInfo: IUser | null;
  token: string | null;
}

export interface IGenericResponse {
  status: 'success' | 'failed';
  message?: string;
}

// post request ==============
export interface IAuthPostInput {
  email: string;
  password: string;
}

export interface IAuthPostResponse {
  user: IUser | null;
  token: string | null;
}

export type TAuthPostResponse = IAuthPostResponse & IGenericResponse;

// get request ==============
export interface TAuthGetResponse {
  user: IUser | null;
}
