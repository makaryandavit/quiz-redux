import React from 'react'

export const GameEnd = ({correct,questionsLength}) => {
  return (
    <div className='end'>
        {
          correct == questionsLength ? <h1>Դու բոլոր հարցերին ճիշտ ես պատասխանել, Կեցես {correct}/{questionsLength}</h1> : correct > questionsLength / 2 ? <h1>Դու կեսից շատին պատասխանել ես ճիշտ, վատ չէ շարունակիր ինքնակերթվել {correct}/{questionsLength}</h1> : <h1>Դու շատ քիչ հարեցերի ես ճիշտ պատասխանել, բայց չհուսահատվես, շարունակիր քո ինքնակրթությունը {correct}/{questionsLength}</h1>
        }
        <button>
            <a href="/">Սկսել Նորից</a>
        </button>
    </div>
  )
}
