import React from 'react'
import { Link } from 'react-router-dom'



function Navbar() {
      
        return (
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
           <a class="navbar-brand" href="#">Logo</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Inicio<span class="sr-only">(Página atual)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Produto</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pedidos</a>
              </li>
              
            </ul>
          </div>
        </nav>


    )
  }
 
  export default Navbar
  