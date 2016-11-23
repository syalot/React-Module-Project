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
        <div className="template-box">
          <h2 className="headerTitle">FormText<span>(Input Type Text)</span></h2>
          <div>
            <span className="headerTextLine">작성일 : 2016년 11월 20일 12시 30분 00초</span>
            <span className="headerTextLine">조회수 : 0</span>
          </div>
        </div>
        <div className="template-box">
          <div className="group">
            <h3 className="sectionTitle">설명</h3>
            <div>
              <span className="sectionTextLine">테스트중</span>
            </div>
          </div>
          <div className="group">
            <h3 className="sectionTitle">설명</h3>
            <div>
              <span className="sectionTextLine">테스트중</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Main;
