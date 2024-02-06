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

  function nextStep(tag,item,cor){
    const links = document.querySelectorAll('.div');
      if(item == cor){
        setCorrect(correct + 1)
        tag.style.cssText = 'border: 2px solid green;'
      }else{
        links[cor].style.cssText = 'border: 2px solid green;'
        tag.style.cssText = 'border: 2px solid red;'
      }
    setTimeout(function redOrGreen(){
      setStep(step + 1);
      links[cor].style.cssText = 'border: none;'
      tag.style.cssText = 'border: none;'
    },1000)
    
  }

  

  return (
    step < questions.length ? <Quiz1 question={question} nextStep={nextStep} /> : <GameEnd correct={correct} questionsLength={questions.length} />
  )
}
