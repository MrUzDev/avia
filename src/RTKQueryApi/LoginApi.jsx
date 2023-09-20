import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const LoginApi = createApi({
  reducerPath: "LoginApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://gw.flysells.uz",
  }),

  endpoints: (builder) => ({
    registerApi: builder.mutation({
      query: (task) => ({
        url: "/auth/google-auth",
        method: "POST",
        body: task,
      }),
    }),

    searchAirports: builder.mutation({
      query: (task) => ({
        url: "/avia/airports",
        method: "POST",
        body: task,
      }),
    }),

    searchAirportsTo: builder.mutation({
      query: (task) => ({
        url: "/avia/airports",
        method: "POST",
        body: task,
      }),
    }),

    
    getRecommendation: builder.mutation({
      query: (task) => ({
        url: "/avia/get-recommendations",
        method: "POST",
        body: task,
      }),
    }),

  }),
});

export const { useTasksQuery, useRegisterApiMutation, useSearchAirportsMutation, useSearchAirportsToMutation, useGetRecommendationMutation } = LoginApi;
