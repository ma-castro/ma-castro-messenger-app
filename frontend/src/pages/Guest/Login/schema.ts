import { object, string, TypeOf } from 'zod';

export const LoginSchema = object({
  email: string().min(1, 'Email address is required').email(),
  password: string().min(1, 'Password  is required'),
}).required();

export type TLoginInput = TypeOf<typeof LoginSchema>;
