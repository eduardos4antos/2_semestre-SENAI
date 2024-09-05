
import { useState } from 'react'

function Media() {
    const [resultado, setResultado] = useState()
    function calcularMedia(){
        let nota1 = Number(prompt('digite o 1° numero: '))
        let nota2 = Number(prompt('digite o 2° numero: '))
        let media = (nota1 + nota2)/2
        setResultado(media)

    }
  return (
    <div className='Media-container'>
        <h2>exercicio para calcular media de 2 numeros </h2>
        <button onClick={calcularMedia}>calcular</button>

        <div>
        Media: {resultado}
        </div>
    </div>
  )
}

export default Media
