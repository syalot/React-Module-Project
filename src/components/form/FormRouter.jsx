import React from 'react';
import { Match } from 'react-router';

import FormText from './FormText';

class FormRouter extends React.Component{
  render(){
    return(
      <div id="FormRouter">
        <Match pattern='/form/text' component={FormText}/>
      </div>
    );
  }
};

export default FormRouter;
