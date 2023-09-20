// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import { LoginApi } from "../RTKQueryApi/LoginApi";
import slice  from '../Slice/LoginSlice'

export const Store = configureStore({
  reducer: {
    loginSlice: slice,
    [LoginApi.reducerPath]: LoginApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(LoginApi.middleware),
});
