import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:import.meta.env.VITE_DOG_API
}

const baseUrlSlice = createSlice({
    name:'baseUrl',
    initialState,
    reducers:{
        setBaseUrl(state,action){
            state.value = action.payload
        }
    }
})


export const {setBaseUrl} = baseUrlSlice.actions
export default baseUrlSlice.reducer