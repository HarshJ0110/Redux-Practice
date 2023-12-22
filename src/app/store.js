import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todoSLice'
 
export const store = configureStore({
    reducer: {
        todos : todoReducer
    }
})