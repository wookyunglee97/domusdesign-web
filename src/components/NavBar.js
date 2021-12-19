import React, { useState } from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/LOGO.png";
import "../assets/styles/NavBar.css";

function NavBar() {
  return (
    <div>
      <Nav className="main-nav">
        <div className="nav-logo">
          <NavItem>
            <NavLink to="/" end>
              <img src={logo} alt="domus design" className="home-icon"></img>
            </NavLink>
          </NavItem>
        </div>
        <div className="nav-menu">
          <NavItem>
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about" activeClassName="active">
              About Us
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/residential" activeClassName="active">
              Residential
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/commercial" activeClassName="active">
              Commercial
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </NavItem>
        </div>
      </Nav>
    </div>
  );
}

export default NavBar;
