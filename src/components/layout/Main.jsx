import React from 'react';

// ActionStores
// import Reflux from 'reflux';
// import SiteMenuAction from '../../actionStores/local/SiteMenuAction';
// import SiteMenuStore from '../../actionStores/local/SiteMenuStore';
//
// componentWillMount(){
//   SiteMenuAction.readMenu();
// };
//
// componentDidMount(){
//   this.actionStoresListen = SiteMenuStore.listen(this.handleMenuSetting.bind(this));
// };
//
// componentWillUnmount(){
//   this.actionStoresListen();
// };

class Main extends React.Component{
  render(){
    return(
      <div id="Main">
        <div className="template header">
          <h2>Welcome to React-Module-Project</h2>
        </div>
      </div>
    );
  }
};

export default Main;
