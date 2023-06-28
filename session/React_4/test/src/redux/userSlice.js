<<<<<<< HEAD
import { createSlice } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

const initialState={
    userID:"",
    userName:""
};

export const userSlice= createSlice({
    name:"user",
    initialState,
    //reducer 객체
    reducers:{
        initUser:(state)=>{
            state.userId=initialState.userID;
            state.userName=initialState.userName;
        },
        setUser:(state,action)=>{
            state.userID=action.payload.userID;
            state.userName=action.payload.userName;
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(PURGE,()=> initialState);
    }
});

export const{initUser,setUser}=userSlice.actions;
export default userSlice.reducer;
=======
//userSlice
import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

// 초기값 설정
const initialState = {
  userID: "",
  userName: "",
};

export const userSlice = createSlice({
  name: "user", // slice 이름
  initialState, // 초기값
  // reducer 객체
  reducers: {
    // aciton과 reducer 로직
    initUser: (state) => {
      state.userID = initialState.userID;
      state.userName = initialState.userName;
    },
    setUser: (state, action) => {
      state.userID = action.payload.userID;
      state.userName = action.payload.userName;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const { initUser, setUser } = userSlice.actions;

export default userSlice.reducer;
>>>>>>> 5f203ca49e4bcc0ca53c9ce0ae58fd33448dac41
