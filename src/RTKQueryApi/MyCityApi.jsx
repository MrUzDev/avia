import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getMyCityApi = createApi({
  reducerPath: "getMyCityPath",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ipapi.co",
  }),

  endpoints: (builder) => ({

    getMyCity: builder.query({
      query: () => "/json"
    }),

  }),
});

export const {useGetMyCityQuery} = getMyCityApi;
