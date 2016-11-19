import React from 'react';
import { Link, Match, Miss } from 'react-router';

import Home from './Home';
import About from './About';

class RouterTest extends React.Component{
  render(){
    console.log(this);
    return(
      <div id="RouterTest">
        <div>
          <ul>
            <li><Link to={this.props.pathname+'/home'}>Home</Link></li>
            <li><Link to={this.props.pathname+'/about'}>About</Link></li>
          </ul>
          <hr/>
          <Match exactly pattern='/routerTest' component={Home}/>
          <Match pattern={this.props.pathname+'/home'} component={Home}/>
          <Match pattern={this.props.pathname+'/about'} component={About}/>
        </div>
      </div>
    );
  }
};

export default RouterTest;
