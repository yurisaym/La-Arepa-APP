import React from 'react'
import Produto from './Produto';


function Catalogo(props) {

    var produtos = [];
    for (let x=0; x<props.produtos.length; x++) {
     produtos.push(<Produto produto={props.produtos[x]} />);
    
     }
    
      return (
  <div className='conteudo'>
      <h2 className="conteudo__cabecalho"> Arepas Venezuelanas</h2>
      <section className="produto__container">
      {produtos}
      </section>
  </div>
    
        
    );
  }
 
  export default Catalogo