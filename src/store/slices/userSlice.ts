import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
