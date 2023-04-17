import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectValue } from './quizSlice'
import { Quiz1 } from './components/Quiz1';
import { GameEnd } from './components/GameEnd';

export const Quiz = () => {
  const questions = useSelector(selectValue);
  const [step,setStep] = useState(0);
  const question = questions[step];
  const [correct,setCorrect] = useState(0);

  function nextStep(item,cor){
    setStep(step + 1);
    if(item == cor){
        setCorrect(correct + 1)
    }
  }

  const range = Math.round(step / questions.length * 100);

  return (
    step < questions.length ? <Quiz1 question={question} range={range} nextStep={nextStep} /> : <GameEnd correct={correct} questionsLength={questions.length} />
  )
}
