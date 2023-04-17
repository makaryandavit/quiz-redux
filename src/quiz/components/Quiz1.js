import React from 'react'

export const Quiz1 = ({question,nextStep,range}) => {
  return (
    <div className='container'>
        <div className='range'>
            <div className='range-inp'>
                <div className='line' style={{width: `${range}%`}}></div>
            </div>
        </div>
        <div className='question'>
            <h1>{question.title}</h1>
        </div>
        <div className='answers'>
            <ul>
                {
                    question.answers.map((item,index) => (
                        <li onClick={() => nextStep(index,question.correct)} key={index}>{item}</li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}
