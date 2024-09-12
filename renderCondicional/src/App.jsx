import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Home_dois from './pages/Home_dois'
import Home_tres from './pages/Home_tres'
import Render from './pages/Render'

function App() {
      const [pagina, setpagina] = useState(<Home />)

      function mostrarHome(){
        setpagina(<Home />)
      }



  return (
    <>
      <nav>
        <button onClick={mostrarHome}>Home</button>
        <button onClick={() =>{setpagina(<Home_dois />)}}>Home2</button>
        <button onClick={() =>{setpagina(<Home_tres />)}}>Home3</button>
        <button onClick={() =>{setpagina(<Render />)}}>render</button>

      </nav>
      {pagina}
      
    </>
  )
}

export default App
