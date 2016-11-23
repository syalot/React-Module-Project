import React from 'react';
import { BrowserRouter as Router } from 'react-router';

import Side from './components/layout/Side';
import Body from './components/layout/Body';

class App extends React.Component {
  render(){
    return (
      <div>
        <Router>
          <div id="App">
            {/* 메뉴 */}
            {/* <Side/> */}
            {/* 내용 */}
            <Body/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
