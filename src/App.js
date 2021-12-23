import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./containers/Home";
import Footer from "./components/Footer";
import Gallery from "./containers/Gallery";
import { COMMERCIAL_WORKS, RESIDENTIAL_WORKS } from "./shared/constants";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" end element={<Home />} />
          <Route
            path="/commercial"
            end
            element={
              <Gallery pageName="Commercial" sections={COMMERCIAL_WORKS} />
            }
          />
          <Route
            path="/residential"
            end
            element={
              <Gallery pageName="Residential" sections={RESIDENTIAL_WORKS} />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
