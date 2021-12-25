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
            <div
              style={{
                padding: "5px",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <img
                src={logo}
                alt="domus design logo"
                className="home-icon"
              ></img>
              <span className="home-text">
                <span
                  style={{
                    textAlign: "left",
                    lineHeight: "0.1",
                    paddingTop: "15px",
                  }}
                >
                  domus
                </span>
                <span style={{ color: "#f60703", paddingLeft: "20px" }}>
                  design
                </span>
              </span>
            </div>
          </NavItem>
        </div>
        <div className="nav-menu">
          <NavItem>
            <NavLink to="/domusdesign-web/" activeClassName="active">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/domusdesign-web/about" activeClassName="active">
              About Us
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/domusdesign-web/residential" activeClassName="active">
              Residential
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/domusdesign-web/commercial" activeClassName="active">
              Commercial
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/domusdesign-web/contact" activeClassName="active">
              Contact
            </NavLink>
          </NavItem>
        </div>
      </Nav>
    </div>
  );
}

export default NavBar;
