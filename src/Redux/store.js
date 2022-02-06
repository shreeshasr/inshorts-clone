import { configureStore } from "@reduxjs/toolkit";
import newsReducer from  './NewsSlice'
export const store = configureStore({
    reducer: {
        newsReducers: newsReducer
    }
})