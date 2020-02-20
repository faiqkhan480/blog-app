import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomePage from "./components/Home";
import Details from "./components/Details";

class App extends Component{
  render() {
    return (
        <Router>
            <Switch>
                <Route exact component={HomePage} path='/' />
                <Route exact component={Details} path='/details' />
                <Route/>
            </Switch>
        </Router>
        // <div className="App">
        //   <HomePage />
        // </div>
    );
  }
}

export default App;
