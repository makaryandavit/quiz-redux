import React, { useState } from 'react'

export const Quiz1 = ({question,nextStep,range}) => {
    const letters = question.letters;

  return (
    <div className='container'>
        <div className='question'>
            <img className='harc' src={question.title} alt="" />
        </div>
        <div className='answers'>
            <ul className='linkUl'>
                {
                    question.answers.map((item,index) => (
                        <li className={question.hamar == 4 ? 'link hatuk' : 'link'} onClick={(tag) => {
                            nextStep(tag.target,index,question.correct);
                        }} key={index}>
                            <div className={question.hamar == 4 ? 'div hatukDiv' : 'div'}>
                            <img className='letter' src={letters[index]}/>
                            
                            {item}
                            </div>
                            
                            </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}
