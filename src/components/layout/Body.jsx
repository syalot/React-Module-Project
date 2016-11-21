import React from 'react';
import { Match } from 'react-router';

import Main from './Main';
import FormRouter from '../form/FormRouter';

class Body extends React.Component{
  render(){
    return(
      <div id="Body">
        <div className="center">
          <Match exactly pattern='/' component={Main}/>
          <Match pattern='/main' component={Main}/>
          <Match pattern='/form' component={FormRouter}/>
        </div>
      </div>
    );
  }
};

export default Body;
