import { useState } from "react"
import PainelAdm from "../components/PainelAdm"
import ProdutosParaMaiores from "../components/ProdutosParaMaiores"
import "./render.css"
import Login from "../components/Login"
import UsuarioLogado from "../components/UsuarioLogado"



function Render() {
    const [adm, setAdm] = useState(true)
    const [idade, setIdade] = useState(0)
    const [usuario, setUsuario] = useState(false)
  return (
    <div>
      <h1>renderizações condicionais</h1>
      <div className="render-container">
        <button onClick={() => {setAdm(true)}}>adm</button>
        <button onClick={() => {setAdm(false)}}>corno</button>

        { adm && <PainelAdm /> }
      </div>

      <div className="render-container">
        <button onClick={() => {setIdade(idade-1)}}>-</button>
        {idade}
        <button onClick={() => {setIdade(idade+1)}}>+</button>
        {idade >=18 && <ProdutosParaMaiores />}

      </div>
      <div className="render-container">
        <button onClick={() => {setUsuario(true)}}>logar</button>
        <button onClick={() => {setUsuario(false)}}>sair</button>
        { usuario ? <UsuarioLogado />  : <Login />}


      </div>
    </div>
  )
}

export default Render
