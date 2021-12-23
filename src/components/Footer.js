import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { NavLink } from "react-router-dom";
import "../assets/styles/Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <FontAwesomeIcon icon={faCopyright} />
      2021 Domus Design Inc. All Rights Reserved. |{" "}
      <NavLink
        to="/contact"
        style={{ textDecoration: "none", color: "#f60703" }}
      >
        Contact Us
      </NavLink>
    </div>
  );
}

export default Footer;
