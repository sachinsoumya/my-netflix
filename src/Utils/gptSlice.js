import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearch: false,
    gptMovies: null,
    gptMoviesList: null,
  },

  reducers: {
    addGptSearch: (state, action) => {
      state.gptSearch = !state.gptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { moviesName, gptmovieResults } = action.payload;
      state.gptMovies = moviesName;
      state.gptMoviesList = gptmovieResults;
    },
  },
});

export const { addGptSearch, addGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;
