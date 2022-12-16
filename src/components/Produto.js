import React from 'react'
import "../assets/Styles.css"


function Produto(props) {
      
      return (
  
        <div className='produto'>
        <img className="produto__img" src={props.produto.img} width="50" height="50"  alt=""/> 
        <p className="produto__nome">{props.produto.nome}</p>
        <p className="produto__precio">R${props.produto.precio}</p>
     
        
       </div>

    )
  }
 
  export default Produto