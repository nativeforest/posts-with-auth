import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface userState {
  user: any; //or type user
  isAuth: boolean;
}

const initialState: userState = {
  user: {},
  isAuth:false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state,action: PayloadAction<any>) => {
      state.user = action.payload;
      state.isAuth = true
    },
    resetUser: (state) => {
      state.user = {};
      state.isAuth = false
    },
    
  },
 
});

export const { setUser, resetUser } = userSlice.actions;
export const userSelector = (state: RootState) => state.user.user;

export default userSlice.reducer;