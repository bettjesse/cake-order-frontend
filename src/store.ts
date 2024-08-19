import { configureStore } from "@reduxjs/toolkit";
import { createApiSlice } from "./slices/apiSlice";
import tokenReducer from "./slices/tokenSlice";

// Fetch the token from a secure storage or context initially
const token: string | null = null; // Adjust this to fetch the token if available
const apiSlice = createApiSlice(token);

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
