import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: null,
};
const userSlice = createSlice({
  name: "User",
  initialState: initialState,
  reducers: {
    logIn(state, action) {
      const { email, _id,token } = action.payload;
      console.log({ email, _id });
      state.user = { email, _id,token };
      console.log(state.user, "currentUser");
    },
  },
});
export const { logIn } = userSlice.actions;
export default userSlice.reducer;
