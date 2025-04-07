import { createSlice } from "@reduxjs/toolkit";
import { getAllPosts } from "../../action/postAction";

const initialState = {
     posts : [],
     isError : false,
     postFetched : false , 
     isLoading : false , 
     loggedIn : false , 
     message : "",
     comments : [],
     postId: "",
}

const postSlice = createSlice ({
    name:"post", 
    initialState ,
    reducers:{
        reset:()=>initialState,
        resetPostId : (state)=>{
            state.postId = ""
        },
    },
    extraReducers :(builder)=>{
        builder 
        .addCase(getAllPosts.pending , (state)=>{
            state.isLoading = true, 
            state.message = "Fetching all the posts..."
        })
        .addCase(getAllPosts.fulfilled , (state , action)=>{
            state.isLoading = false;
            state.isError = false , 
            state.postFetched = true , 
            console.log(action.payload.posts)
            state.posts = action.payload.posts
            // state.posts = action.payload.posts.reverse() # reverse nhi chl rha h 
            console.log('HERE' , state.posts)
        })
        .addCase(getAllPosts.rejected , (state , action)=>{
            state.isLoading = false;
            state.isError = true , 
            state.message = action.payload
        })
    }
})

export default postSlice.reducer;