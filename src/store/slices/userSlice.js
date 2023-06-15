// create a user slice
import { createSlice } from "@reduxjs/toolkit";
import usersArray from "../../dummy.json";

const initialState = {
  data: usersArray,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const users = (state) => state.users.data;

export default userSlice.reducer;
