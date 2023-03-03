import React from 'react'
import './Card.css'
/* 
10-	Crie um componente Card para colocar todos os outros componentes desenvolvidos.
*/
export default (props) => {
    /*
    Recebendo via propriedades as cores

    */
    const cardStyle = {
        backgroundColor: props.cor || '#f00',
        borderColor: props.cor || '#f00'
    }
    return (
        <div className='Card' style={cardStyle}>
            <div className='Title' >{props.titulo}</div>
            <div className='Content'>
                {props.children}
            </div>
        </div>
    )
}