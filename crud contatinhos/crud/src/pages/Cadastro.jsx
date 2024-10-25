import React from 'react'
import { useState, useContext } from 'react'
import Navbar from '../components/Navbar'
import { GlobalContext } from '../contexts/GlobalContext'
import './cadastro.css'

function Cadastro() {
    const{contatinho, setContatinho, contatinhos, setContatinhos} = useContext(GlobalContext)
    const[inputNome, setInputNome] = useState('')
    function cadastrarContatinho() {
        setContatinhos([...contatinhos, inputNome])
        console.log(contatinhos)
    }
  return (
    <div>
        <Navbar />
      <h1>cadastre seu contatinho</h1>
      <div className="input-container">
        <label htmlFor="">nome</label>
        <input type="text" 
            value={inputNome}
            onChange={(event) => setInputNome(event.target.value)}
        />
      </div>
      {contatinho}
      <button onClick={cadastrarContatinho}>cadastrar contatinho</button>
      <div className="contatinhos">
        {contatinhos.map( (c, index) => (
            <div className='card-contatinho' key={index}>
                <p>{c}</p>
            </div>
        ) )}
      </div>
    </div>
  )
}

export default Cadastro
