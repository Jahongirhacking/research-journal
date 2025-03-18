// src/services/api.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
import { localStorageNames } from "../utils/storageUtils";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://muhandis.edu.uz/api/v1",
    prepareHeaders: (headers) => {
      const token =
        Cookies.get("token") || localStorage.getItem(localStorageNames.token); // Get token

      if (token) {
        headers.set("Authorization", `Token ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["Applications", "Workplace", "Education"],
  endpoints: () => ({}), // Empty for now; endpoints will be added separately
});
