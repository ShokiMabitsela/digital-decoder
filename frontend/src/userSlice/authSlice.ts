import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, UserInfo } from "../Types/userTypes";

// Initial state with proper type inference
const initialState: AuthState = {
  isAuthenticated: false,
  userInfo: localStorage.getItem("userInfo")
    ? (JSON.parse(localStorage.getItem("userInfo") as string) as UserInfo)
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Action for setting credentials with PayloadAction type of UserInfo
    setCredentials: (state, action: PayloadAction<UserInfo>) => {
      state.userInfo = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    // Action for logging out
    logout: (state) => {
      state.userInfo = null;
      state.isAuthenticated = false;
      localStorage.removeItem("userInfo");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
