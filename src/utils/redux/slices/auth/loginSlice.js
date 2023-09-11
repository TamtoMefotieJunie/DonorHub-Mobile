import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../axiosInstance/axiosInstance"


const loginUser = {
    emailMatricle: "",
    password: ""
}

export const logIn = createAsyncThunk(
    "loginSlice/logIn", async (loginUser, thunkAPI) => {
        const url = "/api/auth/login"
        axiosInstance.post(url, loginUser)
        .then(resp => {
            return resp;
        })
        .catch(err => {
            thunkAPI.rejectWithValue(err.response)
        })
    }
)

export const loginSlice = createSlice({
    name: "loginSlice",
    initialState: loginUser,
    reducers: {
        loginRegistration: (state, action) => {
            state = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(logIn.pending)
        .addCase(logIn.fulfilled, (state, action) => {
            console.log("Fulfilled", state)
        })
        .addCase(logIn.rejected, (state, action) => {
            console.log("Rejected", action)
        })
    }
})

export const {loginRegistration} = loginSlice.actions
export default loginSlice.reducer
