import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.isLoggedIn = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginUser } = userSlice.actions;

export default userSlice.reducer;
