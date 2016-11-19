import React from 'react';
import { Link } from 'react-router';

class Side extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      'animation': {
        'from': {
          'key': true,
          'style': {
            'height': '0rem',
            'transitionDuration': '.6s'
          }
        }
      }
    };
  }
  handleOpenSubMenu(key){
    let animation = this.state.animation;

    switch (key) {
      case 'from':
        if(animation.from.key){
          animation.from = {
            'key': false,
            'style':{
              'height': '7.5rem',
              'transitionDuration': '.45s'
            }
          }
        }
        else{
          animation.from = {
            'key': true,
            'style':{
              'height': '0rem',
              'transitionDuration': '.45s'
            }
          }
        }
        break;
    }

    this.setState({
      'animation': animation,
    })
  }
  render(){
    return(
      <nav id="Side">
        <div className="bg"></div>
        <ul className="main">
          <li onClick={this.handleOpenSubMenu.bind(this, 'main')}>
            <Link to="/" className="mainLink icon">main</Link>
          </li>
          <li onClick={this.handleOpenSubMenu.bind(this, 'from')}>
            <span className="mainLink icon">from <icon className="side-icon"/></span>
            <ul className="sub" style={this.state.animation.from.style}>
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
