import { createSlice } from '@reduxjs/toolkit';
import{v4 as uuidv4 } from 'uuid'

export const courseSlice=createSlice({
    name:"course",
    initialState:{
        course:[
            {
                id:uuidv4(),
                name:"Environmental Science",
                description:"Know about our environment",
                courseCode:"21MC305",
            },
            {
                id:uuidv4(),
                name:"Environmental Science",
                description:"Know about our environment",
                courseCode:"21MC305",
            }
        ]
    },
    reducers:{
        setCourses:(state,action)=>{
            state.course.push(action.payload);
        }
    }
})
export const{ setCourses }=courseSlice.actions;
export const selectCourses = (state) => state.course.course;

export default courseSlice.reducer;