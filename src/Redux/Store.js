import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "../Redux/UserSlice";
import courseReducer from "../Redux/CourseSlice";

const store=configureStore({
    reducer:{
        user:userReducer,
        courses:courseReducer,
    }
})
export default store;

