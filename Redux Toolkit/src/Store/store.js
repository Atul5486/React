import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './Counter/counterSlice'
import userReducer from './User/userSlice';
const store=configureStore({
    reducer:{
        counter:counterReducer,
        user:userReducer
    }
})
export default store;