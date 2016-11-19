import React from 'react';
import { Link } from 'react-router';

class Side extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      'look' : false,
    }
  }
  handleadd(){
    this.setState({
      'look' : !this.state.look,
    });
  }
  render(){
    return(
      <nav id="Side">
        <div className="bg"></div>
        <ul className="main">
          <li><Link to="/" className="mainLink icon">main</Link></li>
          <li>
            <span className={"mainLink icon " + (this.state.look ? 'checked' : '')} onClick={this.handleadd.bind(this)}>from <icon className="side-icon"/></span>
            <ul className={"sub " + (this.state.look ? 'open' : '')}>
              <li><Link to="/form/text" className="subLink"><icon className="link-icon"/>Text</Link></li>
              <li><Link to="/form/checkbox" className="subLink"><icon className="link-icon"/>CheckBox</Link></li>
              <li><Link to="/form/radio" className="subLink"><icon className="link-icon"/>Radio</Link></li>
            </ul>
          </li>
        </ul>
      </nav>
    );
  }
};

export default Side;
