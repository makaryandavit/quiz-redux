import React from 'react'

export const GameEnd = ({correct,questionsLength}) => {
  return (
    <div className='end'>
        <h1>You have scored {correct}/{questionsLength}</h1>
        <button>
            <a href="/">Start Again</a>
        </button>
    </div>
  )
}
