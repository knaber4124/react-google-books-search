import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Search from "./Search/Search";
import Saved from "./Saved/Saved";


import './App.css';


function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
