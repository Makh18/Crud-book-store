import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
 name: "auth",
 initialState:{isLoggedIn:false, name:"Mabrouka kh", password:"xxcc9"},
 reducers:{
       LogInOut:(state)=>{
        state.isLoggedIn=!state.isLoggedIn;
       }
 }

})
export const {LogInOut}=authSlice.actions;
export default authSlice.reducer;