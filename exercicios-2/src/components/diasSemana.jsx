import React from 'react'
import './diasSemana.css'
import { useState } from 'react'

function diasSemana() {
    const[resultado, setResultado] = useState(0)
    const[diasSemana, setDiasSemana] = useState()

    function processarDiaSemana (){
        switch(diasSemana){
            case '1':
                setResultado('segunda-feira')
                break

            case '2':
                setResultado('terça-feira')
                break

            case '3':
                setResultado('quarta-feira')
                break

            case '4':
                setResultado('quinta-feira')
                break

            case '5':
                setResultado('sexta-feira')
                break

            case '6':
                setResultado('sabado')
                break

            case '7':
                setResultado('domingo')
                break

                default:
                    setResultado('insira de 1 a 7 ')
                    break
        }
    }

  return (
    <div className='diasSemana-container'>
      <h1>descubra qual o dia da semana você está</h1>
      
      <input type="number" className='formulario'
      value= {diasSemana}
      onChange = {(event) => {setDiasSemana(event.target.value)}} />

       <button onClick={processarDiaSemana}>processar</button>
       {resultado}
    </div>

  )
}

export default diasSemana
