import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import AboutMe from "../src/pages/AboutMe";
import Portfolio from "../src/pages/Portfolio";
import ContactMe from "../src/pages/ContactMe";
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
      <Route exact path="/ContactMe">
        <ContactMe />
      </Route>
      <Route exact path="/Resume">
        <Resume />
      </Route>
      <Footer />
    </Router>
    </>
  );
}

export default App;
