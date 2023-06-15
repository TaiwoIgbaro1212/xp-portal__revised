import { configureStore } from "@reduxjs/toolkit";
import { rootStore } from "./rootStore";

export const store = configureStore({
  reducer: rootStore
});
