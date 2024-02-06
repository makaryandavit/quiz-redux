import { createSlice } from "@reduxjs/toolkit";

import Letter1 from "../assets/images/letter1.svg"
import Letter2 from "../assets/images/letter2.svg"
import Letter3 from "../assets/images/letter3.svg"
import Letter4 from "../assets/images/letter4.svg"

import Harc1 from "../assets/images/harc1.png"
import Harc2 from "../assets/images/harc2.png"
import Harc3 from "../assets/images/harc3.png"
import Harc4 from "../assets/images/harc4.png"
import Harc5 from "../assets/images/harc5.png"


const initialState = [
    {
        hamar: 1,
        title: Harc1,
        answers:['1996','1966','1989','1990'],
        letters: [Letter1,Letter2,Letter3,Letter4],
        correct: 0,
    },
    {
        hamar: 2,
        title: Harc2,
        answers:['1','2','3','4'],
        letters: [Letter1,Letter2,Letter3,Letter4],
        correct: 1,
    },
    {
        hamar: 3,
        title: Harc3,
        answers:['2009','2007','2019','2010'],
        letters: [Letter1,Letter2,Letter3,Letter4],
        correct: 2,
    },
    {
        hamar: 4,
        title: Harc5,
        answers:['HC Helpdesk','IT Helpdesk','Call HC','HC call center'],
        letters: [Letter1,Letter2,Letter3,Letter4],
        correct: 1,
    },
]

export const selectValue = (state) => state.quiz;

const quizSlice = createSlice({
    name:'quiz',
    initialState,
    reducers:{

    }
})

export default quizSlice.reducer;