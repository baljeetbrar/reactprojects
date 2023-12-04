import React from 'react';
import { Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const NavbarLink = () => {
  return (
    <Navbar className='main-navbar d-flex '>
      <NavbarBrand className='brand'>Baljeet Brar</NavbarBrand>
      <Nav className='d-flex flex-row text-left navbar-list'>
        <Link to='/' className='nav-list-item'>
          <strong className='nav-name'>Home</strong>
        </Link>
        <Link to='/projects' className='nav-list-item'>
          <strong className='nav-name'>Projects</strong>
        </Link>
        <Link to='/projects' className='nav-list-item'>
          <strong className='nav-name'>Contact</strong>
        </Link>
      </Nav>
    </Navbar>
  );
};

export default NavbarLink;
