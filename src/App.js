import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import About from './Components/About'
import Comments from './Components/Comments'
import Work from './Components/Work'
import './App.css';

function App() {
  return (
      <BrowserRouter>
      <div className="App">
      <div className="navigation">
          <div className="navigation-sub">
            <Link to="/" className="item">Work</Link>
            <Link to="/comments" className="item">Comments</Link>
            <Link to="/about" className="item">About</Link>
          </div>
        </div>
        <Route exact path="/" component={Work} />
        <Route path="/comments" component={Comments} />
        <Route path="/about" component={About} />
      </div>
    </BrowserRouter>
  );
}

export default App;
