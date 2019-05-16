import React,  { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faLayerGroup, faMapMarkerAlt, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './views/home';
import Resume from './views/resume';
import Portfolio from './views/portfolio';
library.add(faDatabase);
library.add(faLayerGroup);
library.add(faMapMarkerAlt);
library.add(faLaptopCode);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Switch>
            <Route exact path='/' render={() => <Home />} />
            <Route exact path='/home' render={() => <Home />} />
            <Route exact path='/resume' render={() => <Resume />} />
            <Route exact path='/portfolio' render={() => <Portfolio />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
