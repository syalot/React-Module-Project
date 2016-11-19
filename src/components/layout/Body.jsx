import React from 'react';
import { BrowserRouter as Router, Link, Match, Miss } from 'react-router';

import Main from './Main';
import RouterTest from '../routerTest/RouterTest';

class Body extends React.Component{
  render(){
    return(
      <div id="Body">
        <Router>
          <div>
            <ul>
              <li><Link to="/">main</Link></li>
              <li><Link to="/routerTest">routerTest</Link></li>
            </ul>
            <hr/>
            <Match exactly pattern='/' component={Main}/>
            <Match pattern='/routerTest' component={RouterTest}/>
          </div>
        </Router>
      </div>
    );
  }
};

export default Body;
