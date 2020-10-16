import React, { Component } from 'react';
import {Route,BrowserRouter as Router} from "react-router-dom";
import '../App.css';
import Navbar from './Screen/Navbar'
import Landing from './Screen/Header'
import About from'./Screen/About';
import Register from "./Screen/Register";
import Login from "./Screen/Login";

class App extends Component {
  render() {
  return (
     <Router>
     <div className="App">
     <Navbar />
     <Route exact path="/" component={Landing} />
          <div className="container">
            <Route path="/about" component={About}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;

