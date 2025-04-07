
import {clientServer} from "@/config"
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk (
    "user/login" , 
    async(user , thunkApi)=>{
        try{

            const response = await clientServer.post('/login' , {
                email : user.email,
                password : user.password
            });

            if(response.data.token){
                localStorage.setItem("token" , response.data.token);
            }
            else{
                return thunkApi.rejectWithValue({
                    message:"token not provided"
                });
            }
            return thunkApi.fulfillWithValue(response.data.token);

        }catch(err){
            return thunkApi.rejectWithValue(err.response.data);
        }
    }
)

export const registerUser = createAsyncThunk (
    "user/register" , 
    async(user , thunkApi)=>{
        try{

            const  request = await clientServer.post("/register" , {
                username: user.username,
                password: user.password,
                email:user.email,
                name:user.name,
            })

        }catch(err){
            return thunkApi.rejectWithValue(err.response.data);
        }

    }
)

export const getAboutUser = createAsyncThunk (
    "user/getAboutUser"  ,
    async (user , thunkAPI) =>{
        try{
            const response = await clientServer.get("/get_user_and_profile" , {
                params: {token: user.token}
            })
            return thunkAPI.fulfillWithValue(response.data)
        }catch(err){
            return thunkAPI.rejectWithValue(err.response.data);
        }
    }
)

export const getAllUsers = createAsyncThunk(
    "user/getAllUsers" , 
    async(_ , thunkAPI)=>{
        try{
            const response = await clientServer.get("user/get_all_users")
            return thunkAPI.fulfillWithValue(response.data);

        }catch(err){
            return thunkAPI.rejectWithValue(err.respinse.data);
        }
    }
)