import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Todo from "./Todo";
import Error from "./Error";

class App extends Component {
  render() {
    return (
      <Router>
          <Route exact path="/" component={Home}/>
          <Route path="/:todo_id" component={Todo}/> 
          <Route path="/error" component={Error}/>
      </Router>
    )
  }
}

export default App;
