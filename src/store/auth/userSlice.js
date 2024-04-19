import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  fullName: "",
  userSlice: "",
  role: "userp",
};

export const userSlice = createSlice({
  name: "auth/user",
  initialState,
  reducers: {},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
