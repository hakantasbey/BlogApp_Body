import { createSlice } from  "@reduxjs/toolkit";
import { login } from "../thunks/authThunk";


const authSlice = createSlice({
    name: "auth",
    initialState:{
        user:null,
        loading:false,
        error:false,
        token:"",
        image:"",
        city:"",
        _id:"",
        lastName:"",
        firstName:"",
        bio:"",
        city:"",
        username:"",
        password:"",
        email:"",


        
    },
    reducers:{},
    extraReducers:(builder) =>{
        builder
        .addCase(login.pending, (state)=>{ 
            state.loading = true
            state.error = false 
        })
        .addCase(login.fulfilled, (state, {payload})=>{
            state.loading = false
            state.error = false
            state.user=payload?.data.user.username
        })
    }

})

export const {} = authSlice.actions
export default authSlice.reducer