import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./userSlice/authSlice"; // Import authReducer correctly
import { apiSlice } from "./userSlice/apiSlice"; // Ensure apiSlice is imported

export const store = configureStore({
  reducer: {
    auth: authReducer, // Include auth reducer
    [apiSlice.reducerPath]: apiSlice.reducer, // Include the apiSlice reducer dynamically
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware), // Add apiSlice middleware
  devTools: true,
});
