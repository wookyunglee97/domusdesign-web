import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { COMMERCIAL_WORKS, RESIDENTIAL_WORKS } from "./shared/constants";
import Home from "./containers/Home";
import Footer from "./components/Footer";
import Gallery from "./containers/Gallery";
import About from "./containers/About";
import Contact from "./containers/Contact";

function App() {
  React.useEffect(() => {
    document.title = "Domus Design Inc. | NYC General Contractor";
  }, []);
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" end element={<Home />} />
          <Route path="/about" end element={<About />} />
          <Route
            path="/commercial"
            end
            element={
              <Gallery
                pageName="Projects / Commercial"
                sections={COMMERCIAL_WORKS}
              />
            }
          />
          <Route
            path="/residential"
            end
            element={
              <Gallery
                pageName="Projects / Residential"
                sections={RESIDENTIAL_WORKS}
              />
            }
          />
          <Route path="/contact" end element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
