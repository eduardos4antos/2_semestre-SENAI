import React from 'react'
import { useState } from 'react'
import './Validador.css'

function Validador() {
  const[Resultado, setResultado] = useState()
  function ValidarNumero(){
    let Numero = Number(prompt('digite um numero: '))
    
    if(Numero > 0 && Numero % 2 == 0 ){
      setResultado('o numero é positivo e par')

    }else{
      setResultado('o numero não é positivo e nem par')
    }
    
    
  }

  return (
    <div className='validador-container'>
      <h2>valide seu numero</h2>
      <button onClick={ValidarNumero}>validar</button>

      <div>
        {Resultado}
      </div>
    
      
    </div>
  )
}

export default Validador
