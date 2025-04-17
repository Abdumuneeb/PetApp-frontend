// src/redux/ReduxProvider.ts
"use client";
import React from "react";
import { Provider } from "react-redux";
import store from "./store"; // adjust if store is in a different path

interface ReduxProviderProps {
  children: React.ReactNode;
}

const ReduxProvider: React.FC<ReduxProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
