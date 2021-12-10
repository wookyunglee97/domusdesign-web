import React from "react";
import "./App.css";
import Greet from "./components/greet";
import { Navbar, NavbarBrand } from "reactstrap";

function App() {
  return (
    <div className="App">
      <Navbar>
        <div>
          <NavbarBrand>Item#1</NavbarBrand>
        </div>
      </Navbar>
      <Greet />
    </div>
  );
}

export default App;
