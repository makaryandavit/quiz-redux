import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    {
        title:'React is ...?',
        answers:['framework','language','library'],
        correct: 2,
    },
    {
        title:'Redux is ...?',
        answers:['a library for animation','a state management library','language'],
        correct: 1,
    },
    {
        title:'HTML is ... language?',
        answers:['cascading','programming','markup'],
        correct: 2,
    },
    {
        title:'Which company developed React',
        answers:['Facebook','Google','Microsoft'],
        correct: 0,
    },
    {
        title:'CSS is ... language?',
        answers:['programming','cascading','markup'],
        correct: 1,
    }
]

export const selectValue = (state) => state.quiz;

const quizSlice = createSlice({
    name:'quiz',
    initialState,
    reducers:{

    }
})

export default quizSlice.reducer;