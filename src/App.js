import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Todo from "./Todo";

class App extends Component {
  render() {
    return (
      <Router>
          <Route exact path="/" component={Home}/>
          <Route path="/:todo_id" component={Todo}/> 
      </Router>
    )
  }
}

export default App;
