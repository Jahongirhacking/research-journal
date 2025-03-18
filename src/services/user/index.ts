import { baseApi } from "../api";
import { IPhoto, IUser } from "./types";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMe: build.query<IUser, void>({
      query: () => "/auth/get-me",
    }),
    getPhoto: build.query<IPhoto, { pinfl: string }>({
      query: ({ pinfl }) => `/auth/get-photo/${pinfl}`,
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetMeQuery,
  useLazyGetMeQuery,
  useGetPhotoQuery,
  useLazyGetPhotoQuery,
} = userApi;
