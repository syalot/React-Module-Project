import React from 'react';
import { Match } from 'react-router';

import Main from './Main';
import FormRouter from '../form/FormRouter';

class Body extends React.Component{
  render(){
    return(
      <div id="Body">
        <Match exactly pattern='/' component={Main}/>
        <Match pattern='/main' component={Main}/>
        <Match pattern='/form' component={FormRouter}/>
      </div>
    );
  }
};

export default Body;
