import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name:'config',
    initialState:{
        lang:'en'
    },

    reducers : {
        languageSetting : (state , actions)=>{
            state.lang = actions.payload;
        }
    }
})

export const {languageSetting } = configSlice.actions

export default configSlice.reducer;
