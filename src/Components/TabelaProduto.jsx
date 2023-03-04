import React from 'react'
import produtos from './produtos'
import './TabelaProduto.css'
/*
2-	Crie uma lista de produtos em JS contendo id, nome e preço. Crie um componente que mostre todos os produtos com suas respectivas colunas.
*/
export default (props)=>{
    function getLinhas(){
        return produtos.map((produto,i)=>{
            return(<tr key={produto.id} 
                className={i%2===0?'Par':'Impar'}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>R$ {produto.preco}</td>
            </tr>)
        })
    }
    return(
        <div>
            <table className='Tabela'>
                <tr><td>Id</td><td>Nome</td><td>Preço</td></tr>
                    {getLinhas()}
            </table>
        </div>
    )
}
