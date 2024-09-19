import React from 'react'

function RelatorioEmprestimo(props) {
  return (
    <div>
      <p>Relatório do resultado da simulação:</p>
      <p>Resultado: {props.infos.situacao}</p>
      <p>Valor do empréstimo: R${props.infos.emprestimo}</p>
      <p>Número de prestações: {props.infos.prestacoes}</p>
      <p>Valor de cada prestação: R${props.infos.prestacao}</p>
      <p>Valor limite da prestação: R${props.infos.maxPrestacao}</p>
    </div>
  )
}

export default RelatorioEmprestimo
