import React from 'react';

const propTypes = {
  name       : React.PropTypes.string,
  labelName  : React.PropTypes.string,
  checked    : React.PropTypes.bool,
  disabled   : React.PropTypes.bool,
  readOnly   : React.PropTypes.bool,
  labelWidth : React.PropTypes.string,
  onChange   : React.PropTypes.func,
};
const defaultProps = {
  name       : undefined,
  labelName  : undefined,
  checked    : false,
  disabled   : false,
  readOnly   : false,
  labelWidth : undefined,
  onChange   : undefined,
};

class InputCheckBox extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      checked : this.props.checked
    };
    this.Render = {
      component : true
    };
  }

  componentWillMount(){};

  componentDidMount(){};

  componentWillReceiveProps(nextProps){
    if(nextProps.checked === this.props.checked){
      this.Render['component'] = false;
    }
  };

  shouldComponentUpdate(nextProps, nextState){
    return this.Render['component'];
  };

  componentWillUpdate(){};

  componentDidUpdate(){
    this.Render = {
      component : true
    };
  };

  componentWillUnmount(){};

  /*----
    lock 체크
  ----*/
  handleLockCheck(){
    if(!this.props.disabled && !this.props.readOnly){
      return true;
    }
    else{
      return false;
    }
  }

  /*----
    label 클릭시
  ----*/
  handleFocusIn(){
    if(this.handleLockCheck()){
      this.refs.InputCheckBox.focus();
      this.refs.InputCheckBox.click();
    }
  };

  /*----
    checkbox 클릭시
  ----*/
  handleChangeFlag(event){
    // 렌더링
    if(this.handleLockCheck()){
      this.handleChangeEvent(event);
      this.setState({
        checked : !this.state.checked
      });
    }
  }

  /*----
    상위 컴포넌트로 이벤트 전파
  ----*/
  handleChangeEvent(event){
    if(this.props.onChange){
      this.props.onChange(this.props.name, !this.state.checked, event);
    }
  }

  render(){
    let labelStyle = {
      width : this.props.labelWidth
    };
    return(
      <div className="template-Form-Module">
        {
          this.props.labelName
          ?
            <label
              onClick={this.handleFocusIn.bind(this)}
              style={this.props.labelWidth ? labelStyle : null}
            >
              {this.props.labelName}
            </label>
          :
            null
        }
        <div className="checkBox-group">
          <input
            type="checkbox"
            ref="InputCheckBox"
            className="checkBox"
            name={this.props.name}
            defaultChecked={this.state.checked}
            disabled={this.props.disabled}
            readOnly={this.props.readOnly}
            onClick={this.handleChangeFlag.bind(this)}
          />
        <span className={'default customizing ' + (this.props.disabled ? 'disabled' : '')}></span>
        </div>
      </div>
    );
  }
};

InputCheckBox.propTypes = propTypes;
InputCheckBox.defaultProps = defaultProps;

export default InputCheckBox;
