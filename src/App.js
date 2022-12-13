import React from 'react';
import Catalogo from './components/Catalogo';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Inicio from './components/Inicio';
import Footer from './components/Footer';
import {BrowserRouter as Router, Switch , Route, link} from 'react-router-dom'



var titulo = "Comida Venezuelana";

class Produto{
    constructor (nome, precio,img ){
    this.nome = nome;
    this.precio = precio;
    this.img = img;
    
}
}
        var p1 = new Produto("Arepa de Carne Desmechada", 45,  "../assets/img/carne desmechada.jpg");
        var p2 = new Produto("Arepa de Abacate e Frango", 40, "../assets/img/aguacate y pollo.jpg");
        var p3 = new Produto("Arepa de Feijão", 40, "../assets/img/domino.jpg");
        var p4 = new Produto("Arepa de Presunto e Queijo", 25, "../assets/img/jamon y queso.jpg");
        var p5 = new Produto("Arepa de Frango", 30, "../assets/img/pollo.jpg");
        var p6 = new Produto("Arepa de Queijo ", 20, "../assets/img/queso.jpg");
        var p7 = new Produto("Arepa de Rainha Pepiada", 45, "../assets/img/reina pepiada.jpg");
        var p8 = new Produto("Arepa de Ovo Misturado", 35, "../assets/img/perico.jpg");

        var produtos = [p1, p2, p3, p4, p5, p6, p7, p8];

  function App(){
  return(
    <div classname= "container">
    <Header titulo={titulo}/>
    <Navbar/>
    <Inicio/>
    <Catalogo produtos={produtos}/>
    <Footer/>
    </div>
  );
  }


        export default App





















/*import React from 'react'
import Navbar from './components/Navbar'
import Inicio from './components/Inicio'
import Header from './components/Header'
import {BrowserRouter as Router, Switch , Route, link} from 'react-router-dom'
import Produto from './components/Produto'
import "./Styles.css"
//import '../assets/imag'



function App() {
  return (
    <div>
    <Router>
      <Navbar/>
      <Header titulo="Comida Venezuelana"/> 
      <Inicio/>
      <Produto/>
     
    </Router>
    </div>
  )
}

export default App
*/