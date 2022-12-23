import React from 'react';
import logo from './logo.png';
import closeIcon from './images/icon-menu-close.svg';
import toggleIcon from './images/icon-menu.svg';
import './Navbar.css';




function Navbar() {
    return (
      <header>
      <div class="logo">
      <img src={logo} alt="logo"/>
    </div>
    <nav class="nav" id="nav-menu">
      
      <i class="header_close" id="close-menu"><img src="" alt="icon"/></i>

      <ul class="nav_list">
         <li class="nav_item"><a class="nav_link" href="#">Home</a></li>
         <li class="nav_item"><a class="nav_link" href="#">New</a></li>
         <li class="nav_item"><a class="nav_link" href="#">Popular</a></li>
         <li class="nav_item"><a class="nav_link" href="#">Trending</a></li>
         <li class="nav_item"><a class="nav_link" href="#">Categories</a></li>
      </ul>
    </nav>
  
   <i class="header_toggle" id="toggle-menu"><img src="" alt="icon"/></i>
      
   </header>
    )
}

export default Navbar;

