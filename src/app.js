import React from 'react';
import './app.css';
import Primario from './components/primario';
import Background from './components/background'

function App() {
    const categoria = ['Primeiro', 'Segundo', 'Terceiro'];
    const subcategorias = [
        [
            {
                name : 'Primeiro.primeiro',
                url : 'Primeiro.primeiro'
            },
            {
                name : 'Primeiro.segundo',
                url : 'Primeiro.segundo'
            }
        ],
        [
            {
                name : 'Segundo.primeiro',
                url : 'Segundo.primeiro'
            },
            {
                name : 'Segundo.segundo',
                url : 'Segundo.segundo'
            }
        ],
        [
            {
                name : 'Terceiro.primeiro',
                url : 'Terceiro.primeiro'
            },
            {
                name : 'Terceiro.segundo',
                url : 'Terceiro.segundo'
            }
        ]
    ];

    return(
        <div className='Wrapper'>
            {/**<div className='items'>
                <div className='items-head'>
                    <p>Linktree Dashboard</p>
                    <hr/>
                </div>
                {categoria.map( (x, y) => {
                    return <Primario Cat={x} Sub={subcategorias[y]} key={x} />;
                })}
            </div>**/}
            <Background />

        </div>
    );
}

export default App;