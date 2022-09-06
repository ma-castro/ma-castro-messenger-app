import { axiosInstance } from '.';
import { AuthGetResponse } from '../models/auth';

export const login = ({ email, password }: { email: string; password: string }) =>
  axiosInstance.post('/api/auth', { email, password });

export const me = () => axiosInstance.get<AuthGetResponse>('/api/auth');
