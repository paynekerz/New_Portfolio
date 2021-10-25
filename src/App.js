import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import AboutMe from "../src/pages/AboutMe";
import Portfolio from "../src/pages/Portfolio";
import Resume from "../src/pages/Resume";
import Footer from "../src/components/Footer";
import "./styles/App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Route exact path="/">
          <AboutMe />
        </Route>
        <Route exact path="/Portfolio">
          <Portfolio />
        </Route>
        <Route
          path="/Resume"
          component={() => {
            window.location.href = "https://docs.google.com/document/d/1BZ0vLxMGqkUt8_-1zJAdqAecaTq3Kqcy-85jnPSk6uI/edit?usp=sharing";
            return null;
          }}
        />
        <Footer />
      </Router>
    </>
  );
}

export default App;
