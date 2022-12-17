import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
// import { createWrapper } from "next-redux-wrapper";

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});

export default store;
