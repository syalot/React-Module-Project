import React from 'react';
import { BrowserRouter as Router, Link, Match, Miss } from 'react-router';

import Home from '../routerTest/Home';
import About from '../routerTest/About';

class Body extends React.Component{
  render(){
    return(
      <div id="Body">
        <Router>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
            <hr/>
            <Match exactly pattern='/' component={Home}/>
            <Match exactly pattern='/Home' component={Home}/>
            <Match exactly pattern='/about' component={About}/>
          </div>
        </Router>
      </div>
    );
  }
};

export default Body;
