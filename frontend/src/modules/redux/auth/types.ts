export type AuthUser = {
  id: string;
  firstName: string;
  lastName: string;
  middleName: string;
  email: string;
  avatar: string;
  createdAt: Date;
  updatedAt: Date;
  token: string;
};

export type AuthState = {
  message: string;
  data: AuthUser | null;
};
