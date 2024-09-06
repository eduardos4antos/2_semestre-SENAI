import React from 'react'
import { useState } from 'react'
import './Salario.css'

function Salario() {
  const[Resultado, setResultado] = useState()
  function LerSalario(){

    let Salario = Number(prompt('digite seu salario: '))
    if(Salario = 0 || salario < 0){
      alert('informação incorreta, coloque numeros validos')
    }

    let emprestimo = Number(prompt('digite o numero do emprestimo:'))
    if(emprestimo = 0 || emprestimo <0){
      alert('informação incorreta, coloques valores validos')
    }

    let prestacao = Number(prompt('digite o numero de prestações'))
    if(prestacao = 0 || prestacao < 0){
      alert('informação incorreta, coloque o numero valido')
    }
    let limite = 30 * salario / 100


    if(prestacao < limite){
      setResultado('seu emprestimo foi concedido')

    }else{
      setResultado('seu emprestimo não foi concedido')
    }


  }

  return (
    <div className='Salario-container'>
      <h2>linha de credito para funcionarios</h2>
      <button onClick={Salario}>processar</button>
      <div>
        resultado: {Resultado}
      </div>
      
    </div>
  )
}

export default Salario
