import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'

function Numero712() {
    const[inputNumero, setInputNumero] = useState ('')
    const[contagem, setContagem] = useState(0)
    const[mostrarResultado, setMostrarResultado] = useState(false)

    function lerNumero(){
        if(inputNumero > 100 && inputNumero < 200){
            setContagem(contagem + 1)

        }
    }
    function renderizarResultado(){
        setMostrarResultado(true)
    }
  return (
    <div>
        <Navbar />
        <h1>exercicio 712</h1>
        <input type='text' 
            value={inputNumero}
            onChange={(event) => setInputNumero(event.target.value)}
        />
        <button onClick={lerNumero}>ler</button>
        <button onClick={() => setMostrarResultado(true)}>resultado</button>
        
        {mostrarResultado &&
        <div>
            <p> numeros na faixa 100 a 200: {contagem}</p>
        </div>
        }
    </div>
  )
}

export default Numero712