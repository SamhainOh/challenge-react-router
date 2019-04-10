import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import History from './History';
import './App.css';


class App extends Component {
  render() {
      return (
        <div className="App">
          <BrowserRouter>
          <div>
            <NavLink exact to="/"activeClassName = "selected">Accueil</NavLink>
          </div>
          <div>
            <NavLink to="/Notre-histoire"activeClassName = "selected"> Notre histoire </NavLink>
          </div> 
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/Notre-histoire" component={History} />
            </Switch>
          </BrowserRouter>
        </div>
          
      );
  }
}

export default App;