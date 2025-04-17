// redux/auth/authThunks.ts

import { createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { clearTokens, setTokens } from "../slice/authslice";
import axiosInstance from "@/services/axiosService";
import { api } from "@/services/api";
import { handleApiErrors } from "@/services/handleApiErrors";

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (dataToSend, { dispatch }) => {
    try {
      const response = await axiosInstance.post<any>(api.signIn, dataToSend);

      const { accessToken, refreshToken } = response.data;
      Cookies.set("accessToken", accessToken);
      Cookies.set("refreshToken", refreshToken);

      dispatch(setTokens({ accessToken, refreshToken }));
      return response.data;
    } catch (error: any) {
      handleApiErrors(error);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, { dispatch }) => {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    dispatch(clearTokens());
  }
);
