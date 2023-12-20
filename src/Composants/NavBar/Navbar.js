import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import logo from '../../Images/Frame 1.png';
import { Link } from 'react-router-dom';

export default function NavBarHome() {
  const [menu, setMenu] = useState(" ");

  return (
    <header data-bs-theme="light">
      <Container className="mx-5">
      <Navbar expand="lg" className="navbar navbar-expand-md navbar-light fixed-top bg-light px-3 m-0">
        
          <a href='/'>
            <Navbar.Brand><img src={logo} alt="icone flèche" /></Navbar.Brand>
          </a>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="navbarCollapse" className="me-auto justify-content-start m-3">
            <Nav>
              <Link to='/womens' className="nav-link active" aria-current="page" onClick={() => { setMenu("womens") }}> Women{menu === "womens" ? <hr /> : <></>}</Link>
              <Link to='/mens' className="nav-link active" aria-current="page" onClick={() => { setMenu("mens") }}>Men {menu === "mens" ? <hr /> : <></>}</Link>
              <Link to='/kids' className="nav-link active" aria-current="page" onClick={() => { setMenu("kids") }}>Kids {menu === "kids" ? <hr /> : <></>}</Link>
            </Nav>
          </Navbar.Collapse>

          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" id='search' />
            <svg className="passive-search-bar__icon" style={{ width: '20px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" id="icon-search"><path strokeWidth="0.5px" d="M27.506 26.942l.107-.132a5.751 5.751 0 1 0-.806.806l.132-.107 3.513 3.51a.4.4 0 0 0 .567 0 .4.4 0 0 0 0-.564zm-4.345 1.169a4.951 4.951 0 1 1 4.952-4.949 4.957 4.957 0 0 1-4.952 4.949z" transform="translate(-17.15 -17.15)"></path></svg>
          </form>

          <Navbar.Collapse id="navbarCollapse" className="ml-auto justify-content-end">
            <div className='d-flex justify-content-start m-3'>
              <Nav.Link href='/LoginSignUp' >
                <span className="icon-container p-0 mx-2 ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="38" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z" />
                  </svg>
                </span>
              </Nav.Link>
              <Link to='/cart' className='text-black nav-link'>
                <span className="icon-container p-0w  cart " >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="38" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                  </svg>
                </span>
              </Link>
            </div>
          </Navbar.Collapse>
          </Navbar>
        </Container>
     
    </header>
  );
}
