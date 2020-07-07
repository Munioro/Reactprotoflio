import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Bio from './pages/bio';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import "./App.css";



function App() {
  return (
      <Router>
        <Switch>
          <Route exact path={["/", "/bio"]} onFailureRedirectToPath="/">
            <Bio />
          </Route>
          <Route exact path="/portolfio" onFailureRedirectToPath="/">
            <Portfolio />
          </Route>
          <Route exact path="/contact">
           <Contact />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
