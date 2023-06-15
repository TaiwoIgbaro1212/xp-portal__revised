// create a user slice
import { createSlice } from "@reduxjs/toolkit";
import users from "../../dummy.json";

const initialState = {
  users: users,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const allUsers = (state) => state.allUsers.users;

export default userSlice.reducer;
