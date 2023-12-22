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
    },
    {
        title:'What is not the part of the OOP?',
        answers:['interface','class','encapsualation'],
        correct: 1, 
    },
    {
        title:'What is the purpose of generic?',
        answers:['Memmory Managment','Inheritance','For Optimization','One Time Use Type'],
        correct: 3, 
    },
    {
        title:'What framework du we use for DB connection in C#?',
        answers:['.Net Framework','ENTITY Framework Core','AngularJs'],
        correct: 1, 
    },
    {
        title:'Which one of those is not SQL language?',
        answers:['mySQL','Postgree','Ruby'],
        correct: 2, 
    },
    {
        title:'Does function and procedure are the same in SQL?',
        answers:['YES','NO'],
        correct: 1, 
    },
    {
        title:'Which one of those is not part of C language?',
        answers:['F#','C++','JavaScript','B'],
        correct: 2, 
    },
    {
        title:'What is the purpose of OOP?',
        answers:['Optimization','Style','Pattern'],
        correct: 0, 
    },
    {
        title:'Which one of those is a pattern?',
        answers:['SOLID','OOP','Polymorphism'],
        correct: 0, 
    },
    {
        title:'How does REST(Rest api) opens?',
        answers:['Reqsuest, Eject, Save, Test','Restart, Eject, Start, Text','Random, Ejection, Save, Tendence'],
        correct: 0, 
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