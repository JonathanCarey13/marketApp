import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/HomePage'

// import About from './components/about/about'
import Farmers from './components/farmers/farmers'
import Forums from './components/forums/forums'
import Resources from './components/resources/resources'
import Markets from './components/markets/markets'
import Foods from './components/foods/foods'

// import Auth from './components/auth/Auth'
 
function App() {
  return (
    <Router>
        <Navbar /> 
        <Switch> 
          <Route path="/" exact component={Home} /> 
          {/* <Route path="/about" exact component={About} />  */}
          <Route path="/farmers" exact component={Farmers} /> 
          <Route path="/forums" exact component={Forums} /> 
          <Route path="/markets" exact component={Markets} /> 
          <Route path="/resources" exact component={Resources} /> 
          <Route path="/foods" exact component={Foods} /> 

        </Switch>

    </Router>
    

      

    
  );
} 

export default App;
