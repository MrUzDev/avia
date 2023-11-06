// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import { AllApi } from "../RTKQueryApi/AllApi";
import { getMyCityApi } from "../RTKQueryApi/MyCityApi";
import slice  from '../Slice/AllSlice'

export const Store = configureStore({
  reducer: {
    loginSlice: slice,
    [AllApi.reducerPath]: AllApi.reducer,
    [getMyCityApi.reducerPath]: getMyCityApi.reducer,
  },
    middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(AllApi.middleware).concat(getMyCityApi.middleware),
});
