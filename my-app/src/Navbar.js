import React from 'react';
import logo from './logo.png';
import './App.css';

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg bg-info">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img class="LogoIMG" src={logo} alt="Logo"/></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" id="link-nav" aria-current="page" href="#">Home</a>
              <a class="nav-link" id="link-nav" href="#">About me</a>
              <a class="nav-link" id="link-nav" href="#">Projects</a>
            </div>
          </div>
        </div>
       </nav>
    )
}

export default Navbar;