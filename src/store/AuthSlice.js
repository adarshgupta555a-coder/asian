import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    // value: JSON.parse(localStorage.getItem("user"))||null,
    value: null
};



const AuthSlice = createSlice({
    name:"Auth",
    initialState,
    reducers:{
        getSession:(state,action)=>{
            state.value = action.payload;
        }
    }
})

export const AuthAction = AuthSlice.actions;
export default AuthSlice.reducer;