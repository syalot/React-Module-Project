import React from 'react';
import { Match } from 'react-router';

import Main from './Main';

class Body extends React.Component{
  render(){
    return(
      <div id="Body">
        <Match exactly pattern='/' component={Main}/>
        <Match exactly pattern='/main' component={Main}/>
        <Match exactly pattern='/b' component={Main}/>
        <Match exactly pattern='/c' component={Main}/>
        <Match exactly pattern='/d' component={Main}/>
        <Match exactly pattern='/e' component={Main}/>
        <Match exactly pattern='/f' component={Main}/>
        <Match exactly pattern='/g' component={Main}/>
        <Match exactly pattern='/h' component={Main}/>
        <Match exactly pattern='/i' component={Main}/>
      </div>
    );
  }
};

export default Body;
