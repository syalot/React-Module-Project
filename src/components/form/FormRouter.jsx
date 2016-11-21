import React from 'react';
import { Match } from 'react-router';

import FormText from './FormText';
import FormCheckbox from './FormCheckbox';

class FormRouter extends React.Component{
  render(){
    return(
      <div id="FormRouter">
        <Match pattern='/form/text' component={FormText}/>
        <Match pattern='/form/checkbox' component={FormCheckbox}/>
      </div>
    );
  }
};

export default FormRouter;
