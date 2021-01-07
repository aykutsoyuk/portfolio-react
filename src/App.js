import React from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Work from "./Components/Work";
import "./App.css";
import { ReactComponent as Github } from "./logo/github.svg"
import { ReactComponent as Email } from "./logo/email.svg"
import { ReactComponent as Linkedin } from "./logo/linkedin.svg"
import { ReactComponent as Coding } from "./logo/coding.svg"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="main">
          <div className="header">
            <div className="name">
              <h2>
                Aykut Söyük
              </h2>
              <h3>
                Front-End Developer
              </h3>
            </div>
            <div className="navigation">
              <div className="navigation-sub">
                <NavLink exact to="/" className="item" activeClassName="active">
                  Work
                </NavLink>
                <NavLink to="/about" className="item" activeClassName="active">
                  About
                </NavLink>
                <NavLink to="/contact" className="item" activeClassName="active">
                  Contact
                </NavLink>
              </div>
            </div>
          </div>
          <div className="component">
            <Route exact path="/" component={Work} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </div>
          <div className="footer">
            <div className="links">
            <a className="link" href="https://www.linkedin.com/in/aykut-s%C3%B6y%C3%BCk-b142a1a1/" target="_blank" alt="Linkedin">
              <Linkedin style={{ fill: "#424b54", width: "50px", height: "50px" }} />
            </a>
            <a className="link" href="https://github.com/aykutsoyuk" target="_blank" alt="Github">
              <Github style={{ fill: "#424b54", width: "50px", height: "50px" }} />
            </a>
            <a className="link" href="mailto:aykutsoyuk@gmail.com" target="_blank" alt="Email">
              <Email style={{ fill: "#424b54", width: "50px", height: "50px" }} />
            </a>
            <a className="link" href="https://github.com/aykutsoyuk/portfolio-react" target="_blank" alt="Source Code">
              <Coding style={{ fill: "#424b54", width: "50px", height: "50px" }} />
            </a>
            </div>
            <span style={{ color: "#424b5479" }}>© 2020, Aykut Söyük</span>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
