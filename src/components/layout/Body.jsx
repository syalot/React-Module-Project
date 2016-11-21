import React from 'react';
import { Match } from 'react-router';

import Main from './Main';

class Body extends React.Component{
  render(){
    return(
      <div id="Body">
        <Match exactly pattern='/' component={Main}/>
        <Match exactly pattern='/main' component={Main}/>
      </div>
    );
  }
};

export default Body;
