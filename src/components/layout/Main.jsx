import React from 'react';
import Reflux from 'reflux';

import SiteMenuAction from '../../actionStores/actionStore/SiteMenuAction';
import SiteMenuStore from '../../actionStores/actionStore/SiteMenuStore';

class Main extends React.Component{
  componentWillMount(){
    console.log(SiteMenuAction);
    SiteMenuAction.readMenu();
  }
  componentDidMount(){
    console.log(SiteMenuAction);
    this.unUserTest = SiteMenuStore.listen(this.handleUserTest.bind(this));
  }
  handleUserTest(message){
    console.log(message);
  }
  render(){
    return(
      <div>
        <h2>Main</h2>
      </div>
    );
  }
};

export default Main;
