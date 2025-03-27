import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authApi } from "../../services/users";
import {
  getLocalStorage,
  localStorageNames,
  setLocalStorage,
} from "../../utils/storageUtils";

interface IProps {
  token: string;
}

const initialState: IProps = {
  token: getLocalStorage(localStorageNames.token) ?? "",
};

const userSlice = createSlice({
  name: "user-slice",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ token: string }>) => {
      state.token = action.payload.token;
      setLocalStorage(localStorageNames.token, action.payload.token);
    },
    logout: (state) => {
      state.token = "";
      localStorage.removeItem(localStorageNames.token);
    },
  },
  extraReducers: (builder) =>
    builder
      .addMatcher(
        authApi.endpoints.register.matchFulfilled,
        (state, { payload }) => {
          if (payload.accessToken) {
            userSlice.caseReducers.login(state, {
              payload: { token: payload.accessToken },
              type: "auth/register",
            });
          }
        }
      )
      .addMatcher(
        authApi.endpoints.login.matchFulfilled,
        (state, { payload }) => {
          if (payload.accessToken) {
            userSlice.caseReducers.login(state, {
              payload: { token: payload.accessToken },
              type: "auth/login",
            });
          }
        }
      )
      .addMatcher(
        authApi.endpoints.verifyOtp.matchFulfilled,
        (state, { payload }) => {
          if (payload.accessToken) {
            userSlice.caseReducers.login(state, {
              payload: { token: payload.accessToken },
              type: "auth/verify",
            });
          }
        }
      ),
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
