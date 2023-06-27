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