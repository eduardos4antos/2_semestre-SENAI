import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'

function Exercicio713() {
    const[limiteInferior, setLimiteInferior] = useState('');
    const[limiteSuperior, setLimiteSuperior] = useState('');
    const[numerosPares, setNumerosPares] = useState([]);
    const[mostrarResultado, setMostrarResultado] = useState(false)

    function calcularPares() {
        const inferior = parseInt(limiteInferior)
        const superior = parseInt(limiteSuperior)
        const pares = []

        if(!isNaN(inferior) && !isNaN(superior) && inferior < superior) {
            for (let i = inferior + 1; i < superior; i++) {
                if (i % 2 === 0) {
                    pares.push(i);
                }
            }
            setNumerosPares(pares);

        }else{
            setNumerosPares([])
            alert('por favor, insira limites validos, sendo inferior menor que superior ')
        }
        setMostrarResultado(true)
    }

    return (
        <div>
            <Navbar />
            <h1>Números Pares Entre Dois Limites</h1>
            <input 
                type='number' 
                value={limiteInferior} 
                onChange={(event) => setLimiteInferior(event.target.value)} 
                placeholder="Limite Inferior" 
            />
            <input 
                type='number' 
                value={limiteSuperior} 
                onChange={(event) => setLimiteSuperior(event.target.value)} 
                placeholder="Limite Superior" 
            />
            <button onClick={calcularPares} disabled={limiteInferior === '' || limiteSuperior === ''}>Calcular Pares</button>

            {mostrarResultado && 
                <div>
                    <p>Números Pares: {numerosPares.length > 0 ? numerosPares.join(', ') : 'Nenhum número par encontrado'}</p>
                </div>
            }
        </div>
    );
}

export default Exercicio713
