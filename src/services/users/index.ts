import { api } from "../api";
import { ILogin, ILoginRes, IProfile, IRegister, IVerifyLogin } from "./type";

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    //User login endpoint
    login: build.mutation<ILoginRes, ILogin>({
      query: (body) => ({
        url: `/auth/authenticate`,
        method: "POST",
        body,
      }),
    }),

    requestOtp: build.mutation<void, { phoneNumber: ILogin["phoneNumber"] }>({
      query: (body) => ({
        url: `/auth/request-otp`,
        method: "POST",
        body,
      }),
    }),

    register: build.mutation<ILoginRes, IRegister>({
      query: (body) => ({
        url: `/auth/register`,
        method: "POST",
        body,
      }),
    }),

    verifyOtp: build.mutation<ILoginRes, IVerifyLogin>({
      query: (body) => ({
        url: `/auth/verify-otp`,
        method: "POST",
        body,
      }),
    }),

    getResearcherUser: build.query<IProfile, void>({
      query: () => `/ResearcherUser/Get`,
    }),

    updateResearcherUser: build.mutation<void, IProfile>({
      query: (body) => ({
        url: "/ResearcherUser/Update",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useRequestOtpMutation,
  useVerifyOtpMutation,
  useGetResearcherUserQuery,
  useLazyGetResearcherUserQuery,
  useUpdateResearcherUserMutation,
} = authApi;
