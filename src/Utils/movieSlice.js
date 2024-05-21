import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name:"movie",
    initialState : {
        nowPlayingMovies : null,
        popularMovies : null,
        topRatedMovies : null,
        upComingMovies : null,
        trailerVideo : null
    },
    reducers :{
        addNowPlayingMovies : (state , actions)=>{
            state.nowPlayingMovies = actions.payload

        },
        addTrailerVideo : (state , actions)=>{
            state.trailerVideo = actions.payload

        },
        addPopularMovies : (state , actions)=>{
            state.popularMovies = actions.payload

        },
        addTopRatedMovies : (state , actions)=>{
            state.topRatedMovies = actions.payload
        },
        addUpComingMovies : (state , actions)=>{
            state.upComingMovies = actions.payload
        }
    }
})

export const {addNowPlayingMovies , addTrailerVideo ,addPopularMovies , addTopRatedMovies , addUpComingMovies} = movieSlice.actions;
export default movieSlice.reducer;