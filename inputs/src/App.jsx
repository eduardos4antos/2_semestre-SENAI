import { useState } from 'react'
import './App.css'
import Maior from './components/Maior'
import Menor from './components/Menor'

function App() {
  const [inputIdade, setInputIdade] = useState()
  const [maior, setMaior] = useState(false)
  const [menor, setMenor] = useState(false)
  
  function processarIdade(){
    if(inputIdade >= 18){
     setMaior(true)
     setMenor(false)
    }else{
      setMenor(true)
      setMaior(false)
    }
  }
  return (
    <>
    <h1>inputs</h1>
    idade
    <input type="number" className='formularios' 
    value={inputIdade}
    onChange={ (event) => {setInputIdade(event.target.value)} } 
     />
     <button onClick={processarIdade}>processar idade</button>
     { maior && <Maior />}
     { menor && <Menor />}
    </>
  )
}

export default App
