/*

Steps for state management : 
#1. Submit action 
#2.Handle action in it's reducer
#3.Register Reducer in Store

Eg : Action = login , Reducer : login failed vgere

*/

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer/authReducer";
import postReducer from "./reducer/postReducer"

export const store = configureStore({
    reducer:{
        auth : authReducer,
        postReducer : postReducer
    }
})