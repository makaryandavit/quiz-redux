import { useState } from 'react';
import './App.css';
import { Quiz } from './quiz/Quiz';

function App() {
  const [bool, setBool] = useState(false);
  const [inp1, setInp1] = useState('')
  const [hexinak, setHexinak] = useState(false)
  const [help, setHelp] = useState(false)
  const [xorhurd, setXorhurd] = useState(false)
  const [quiz, setQuiz] = useState(false)
  const [global, setGlobal] = useState(false)

  

  return (
    <>
    <main className={bool ? 'none' : 'block'}>
      <div className='gic1'>
        <div className='molorak'></div>
        <div className='gic2'>
          <div className='molorak2'></div>
        </div>
      </div>
      <div className={bool ? 'registration none' : 'registration block'}>
        <form onSubmit={(e) => {
          e.preventDefault()
        }}>
          <div className='title-1'>
            <p>Անցում կատարել դեպի էջ</p>
          </div>
          <div className='inp1'>
            <input type="text" className='email' placeholder='Անուն' required onChange={(e) => {
              setInp1(e.target.value)
            }} />
          </div>
          <div className='inp2'>
          <input type="password" className='email' placeholder='Գաղտնաբառ' required />
          </div>
          <div className='btns'>
          <button className='sign'>Cancel</button>
          <button onClick={(e) => {
            if(inp1.length >= 5){
              e.preventDefault()
              setGlobal(true);
            }else{
              alert('Դուք սխալ եք մուտքագրել Ձեր անունը, այն պետք է լինի 5 սիմվոլից ավել')
            }
          }} className='sign'>Մուտք Գործել</button>
          </div>
          
          <div className='settings'>
            <p>Reset Your Password</p>
            <p>Already have an account?</p>
          </div>
        </form>
      </div>
    </main>

    <div className={global ? 'global' : 'none'} >
    <header>
        <ul className='headerUl'>
            <li className='headerLink' onClick={() => {
              setQuiz(true)
              setHexinak(false)
              setHelp(false)
              setXorhurd(false)
              setBool(true)
              setGlobal(false)
            }}>Quiz</li>
            <li className='headerLink' onClick={() => {
              setHexinak(false)
              setHelp(false)
              setXorhurd(true)
            }}>Օրվա Խորհուրդներ</li>
            <li className='headerLink' onClick={() => {
              setHexinak(false)
              setHelp(true)
              setXorhurd(false)
            }}>Օգնության Պատուհան</li>
            <li className='headerLink' onClick={() => {
                setHexinak(true)
                setHelp(false)
                setXorhurd(false)
            }}>Հեղինակ</li>
            <li className='headerLink' onClick={() => {
              window.location.reload()
            }}>Ելք</li>
        </ul>
    </header>
    <div className='gic1'>
        <div className='sun'></div>
        <div className='molorak mol1'></div>
        <div className='gic2'>
          <div className='molorak2 mol2'></div>
        </div>
      </div>
    </div>
    <div className={hexinak ? "about" : 'none'}>
      <h1>Հեղինակի Մասին</h1>
      <p>
        Մակարյան Դավիթ Կոլյայի <br/> <br/>
        Ուսումնական Հաստատություն՝ Երևանի Ինֆորմատիկայի Պետական Քոլեջ <br/> <br/>
        Կուրսային աշխատանքի անվանում ՝ Quiz Ծրագրավորման աշխարհից
      </p>
      <button className='ok' onClick={() => {
        setHexinak(false)
        setHelp(false)
        setXorhurd(false)
      }}>OK</button>
    </div>

    <div className={help ? "help" : 'none'}>
      <h1>Օգնության Պատուհան</h1>
      <p>
        Ես կօգնեմ քեզ հեշտությամբ օգտվել իմ Mini-Project -ից։
      </p>

        <ol type='1'>
          <li>Եթե դու ցանկանում ես դուրս գալ և ամեն ինչ սկսել նորից, ապա սեղմիր Ելք կոճակի վրա</li>
          <li>Եթե դու ցանկանում ես ծանոթանալ իմ հետ, այսինքն հեղինակի, ապա սեղմիր Հեղինակ կոճակի վրա</li>
          <li>Եթե դու ցանկանում ես իմանալ, թե ինչպես օգտվել այս պրոյեկտից, ապա դու ճիշտ հասցեով ես եկել</li>
          <li>Եթե դու ցանկանում ես ստանալ խորհուրդներ ՝ Quiz -ի հետ կապված, ապա սեղմիր Օրվա Խորհուրդ կոճակի վրա</li>
          <li>Եթե դու ցանկանում ես անցնել Quiz -ին, ապա սեղմիր Quiz կոճակի վրա</li>
        </ol>
        <button className='ok' onClick={() => {
        setHexinak(false)
        setHelp(false)
        setXorhurd(false)
      }}>OK</button>

    </div>
    <div className={xorhurd ? "day" : 'none'}>
      <h1>Օրվա Խորհուրդ</h1>
      <p>
        Իմ լավ բարեկամ, հետևիր իմ խորհուրդներին, որպեսզի կարողանաս շատ լավ արդյունքներ գրանցել Quiz -ում
      </p>

        <ol type='1'>
          <li>Quiz -ին անցնելուց առաջ նախ կարող ես կրկնել գիտելիքներդ</li>
          <li>Հարցերին պատասխանելուց առաջ եղիր շատ ուշադիր</li>
          <li>Դու ունես շատ ժամանակ, և կարող ես շատ երկար մտածել հարցի շուրջ</li>
          <li>Կարող ես նաև գրի առնել այն հարցերը, որոնք այդքան էլ լավ չես հիշում կամ վստահ չես պատասախանիդ ճշտության վրա</li>
          <li>Դե ինչ, արդեն կարող ես անցնել Quiz -ին և ստուգել գիտելիքներդ, ՀԱՋՈՂՈՒԹՅՈՒՆՆ</li>
        </ol>
        <button className='ok' onClick={() => {
        setHexinak(false)
        setHelp(false)
        setXorhurd(false)
      }}>OK</button>

    </div>
    {
      quiz ? <Quiz /> : ''
    }
    </>
    
  );
}

export default App;
