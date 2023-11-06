import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const AllApi = createApi({
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


    bookingCreate: builder.mutation({
      query: (task) => ({
        url: "/avia/booking-create",
        method: "POST",
        body: task,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access")}`
        }
      }),
    }),

    bookingConfirm: builder.mutation({
      query: (task) => ({
        url: "/avia/booking-confirm",
        method: "POST",
        body: task,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access")}`
        }
      }),
    }),

    paymentConfirm: builder.mutation({
      query: (task) => ({
        url: "/avia/payment-confirm",
        method: "POST",
        body: task,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access")}`
        }
      }),
    }),

    refresh: builder.mutation({
      query: (task) => ({
        url: "/api/v1/token/refresh/",
        method: "POST",
        body: task,
      }),
    }),

    flightInfo: builder.mutation({
      query: (task) => ({
        url: "/avia/get-flight-info",
        method: "POST",
        body: task,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access")}`
        }
      }),
    }),


    registerOne: builder.mutation({
      query: (task) => ({
        url: "/auth/phone-register-one",
        method: "POST",
        body: task,
      }),
    }),

    registerTwo: builder.mutation({
      query: (task) => ({
        url: "/auth/phone-register-two",
        method: "POST",
        body: task,
      }),
    }),

    registerPhone: builder.mutation({
      query: (task) => ({
        url: "/auth/phone-register",
        method: "POST",
        body: task,
      }),
    }),

    loginPhone: builder.mutation({
      query: (task) => ({
        url: "/auth/phone-login",
        method: "POST",
        body: task,
      }),
    }),


  }),
});

export const { useTasksQuery, useRegisterApiMutation, useSearchAirportsMutation, useSearchAirportsToMutation, useGetRecommendationMutation, useBookingCreateMutation, useBookingConfirmMutation, usePaymentConfirmMutation, useRefreshMutation, useFlightInfoMutation, useRegisterOneMutation, useRegisterTwoMutation, useRegisterPhoneMutation, useLoginPhoneMutation } = AllApi;
