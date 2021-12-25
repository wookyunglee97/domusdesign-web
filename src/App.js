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
          <Route path="/domusdesign-web" end element={<Home />} />
          <Route path="/domusdesign-web/about" end element={<About />} />
          <Route
            path="/domusdesign-web/commercial"
            end
            element={
              <Gallery
                pageName="Projects / Commercial"
                sections={COMMERCIAL_WORKS}
              />
            }
          />
          <Route
            path="/domusdesign-web/residential"
            end
            element={
              <Gallery
                pageName="Projects / Residential"
                sections={RESIDENTIAL_WORKS}
              />
            }
          />
          <Route path="/domusdesign-web/contact" end element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
