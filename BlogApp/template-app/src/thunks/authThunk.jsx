import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
    'login'
    async({values, navigate}, {rejectWithValue})=>{
        try {
            const res = await axios.post(
                `${process.env.REACT_APP_BASE_URL}auth/login`, values
            )
            navigate("/blogs")
            return  res
        } catch (error) {
             return rejectWithValue("Login Error!")
        }
    }
)
