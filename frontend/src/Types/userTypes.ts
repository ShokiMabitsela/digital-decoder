// Define the UserInfo type
export type UserInfo = {
  _id: string;
  name: string;
  email: string;
};

// Define AuthState interface
export interface AuthState {
  isAuthenticated: boolean;
  userInfo: UserInfo | null;
}

// Define the structure of the root state
export interface RootState {
  auth: AuthState;
}
