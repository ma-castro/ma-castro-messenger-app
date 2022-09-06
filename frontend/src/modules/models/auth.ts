import { User } from './user';

export interface InitialState {
  message?: string;
  user: User | null;
}

export interface AuthPostResponse {
  message: string;
  user: User | null;
}

export interface AuthGetResponse {
  user: User | null;
}
