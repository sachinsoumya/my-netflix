import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name:"movie",
    initialState : {
        nowPlayingMovies : null,
        trailerVideo : null
    },
    reducers :{
        addNowPlayingMovies : (state , actions)=>{
            state.nowPlayingMovies = actions.payload

        },
        addTrailerVideo : (state , actions)=>{
            state.trailerVideo = actions.payload

        }
    }
})

export const {addNowPlayingMovies , addTrailerVideo} = movieSlice.actions;
export default movieSlice.reducer;