import React from 'react'
import logo from '../../assets/logo.png'
import './NavBar.css'

const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark">
      <div class="container-fluid">
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
      <ul class="navbar-nav content">
        <li class="nav-item m-2">
          <a class="nav-link active" aria-current="page" href="#" style={{color:"white"}}>Home</a>
        </li>
        <li class="nav- m-2">
          <a class="nav-link active" aria-current="page" href="#" style={{color:"white"}}>Home</a>
        </li>
        <li class="nav-item m-2">
          <a class="nav-link active" aria-current="page" href="#" style={{color:"white"}}>Home</a>
        </li>
        <li class="nav-item m-2">
          <a class="nav-link active" aria-current="page" href="#" style={{color:"white"}}>Home</a>
        </li>
        <li class="nav-item m-2">
          <a class="nav-link" href="#" style={{color:"white"}}>Link</a>
        </li>
        
      </ul>
      </div>
        </div>



</nav>
    </div>
  )
}

export default NavBar
