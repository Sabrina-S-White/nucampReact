import { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavITem,
  NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import NucampLogo from '../app/assets/img/logo.png';

const Header = () => {
  return (
    <Navbar dark color="primary" sticky="top" expand="md">
      <NavbarBrand href="/">
        <img src={NucampLogo} alt="nucamp logo" />
      </NavbarBrand>
      <Nav className="ms-auto" navBar>
        <NavItem>
          <NavLink className="nav-link" to="/">

          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/directory">

          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/about">

          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="contact">

          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Header;
