import React from 'react'
import './BoasVindas.css'
/* 
1-	Crie um componente que renderize uma mensagem de boas-vindas. O componente deve receber o nome do usuário como propriedade e exibir a mensagem "Bem-vindo, {nome do usuário}!".
*/
export default (props)=>{
    const nome = props.nome
    return(
        <div className="BoasVindas">
            <h1>Bem-vindo , {nome}</h1>
            <h5>Esta é uma pagina dedicada aos exercícios de REACT</h5>
        </div>
    )
}