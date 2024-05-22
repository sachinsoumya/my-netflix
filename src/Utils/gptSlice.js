import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearch: false,
  },

  reducers: {
    addGptSearch: (state, action) => {
      state.gptSearch = !state.gptSearch;
    },
  },
});

export const { addGptSearch } = gptSlice.actions;
export default gptSlice.reducer;
