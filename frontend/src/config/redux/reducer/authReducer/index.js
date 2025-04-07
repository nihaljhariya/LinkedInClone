import  {createSlice} from "@reduxjs/toolkit";
import {  getAllUsers, loginUser , registerUser  } from "@/config/redux/action/authAction";
import { getAboutUser } from '@/config/redux/action/authAction';
const initialState = {
    user: undefined,
    isError:false,
    isSuccess:false,
    isLoading : false,
    loggedIn:false ,
    message:"",
    isTokenThere:false,
    profileFetched:false,
    connections:[],
    connectionRequest:[] , 
    all_users:[],
    all_profiles_fetched: false
}

const authSlice = createSlice({
    name:"auth" , 
    initialState,
    reducers:{
        reset:() =>initialState,
        handleLoginUser : (state)=>{
            state.message="hello"
        },
        emptyMessage : (state)=>{
            state.message=""
        },
        setTokenIsThere : (state)=>{
            state.isTokenThere=true
        },
        setTokenIsNotThere : (state)=>{
            state.isTokenThere=false
        }
    },

    extraReducers : (builder)=>{
        builder.addCase(loginUser.pending , (state)=>{
            state.isLoading = true
            state.message = "Knocking the door..."
        })
        .addCase(loginUser.fulfilled , (state , action)=>{
            state.isLoading = false,
            state.isError = false;
            state.isSuccess = false;
            state.loggedIn = false;
            state.message = "Login is Successfull"
            
        })

        .addCase (loginUser.rejected , (state, action)=>{
            state.isLoading = false;
             state.isError = true;
             state.message = action.payload
        })

        .addCase(registerUser.pending , (state)=>{
            state.isLoading = true;
            state.message = "Registering You";
        })

        .addCase(registerUser.fulfilled , (state , action)=>{
            state.isLoading=false ;
            state.isError = false ;
            state.isSuccess = true;
            state.loggedIn = true;
            state.message={
               message :  "Registration is  SuccessFull , Please Login"
            } 
        })

        .addCase(registerUser.rejected , (state , action)=>{
            state.isLoading = false ;
            state.isError = true;
            state.message = action.payload
        })

       .addCase(getAboutUser.fulfilled, (state,action)=>{
        state.isLoading = false;
        state.isError = false;
        state.profileFetched = true;
        state.loggedIn=true;
        state.user = action.payload.profile;
        })
        .addCase(getAllUsers.fulfilled , (state , action)=>{
            state.isLoading = false ;
            state.isError = false;
            state.all_profiles_fetched= true;
            state.all_users = action.payload.profiles
        })
    }
})


// authState k jitne bhi fn 
// hote h sbhi ko hme Export krna padta h ..
export const {reset , emptyMessage , setTokenIsThere , setTokenIsNotThere} = authSlice.actions;
export default authSlice.reducer;


