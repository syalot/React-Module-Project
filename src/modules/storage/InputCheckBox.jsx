import React from 'react';

const propTypes = {
  name      : React.PropTypes.string,
  labelName : React.PropTypes.string,
  checked   : React.PropTypes.bool,
  disabled  : React.PropTypes.bool,
  readOnly  : React.PropTypes.bool,
  onChange  : React.PropTypes.func,
};
const defaultProps = {
  name      : undefined,
  labelName : undefined,
  checked   : false,
  disabled  : false,
  readOnly  : false,
  onChange  : undefined,
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
      this.handleChangeFlag();
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
    this.props.onChange(this.props.name, !this.state.checked, event);
  }

  render(){
    return(
      <div className="template-Form-Module">
        {
          this.props.labelName
          ?
            <label
              className="template-Form-Label"
              onClick={this.handleFocusIn.bind(this)}
            >
              {this.props.labelName}
            </label>
          :
            null
        }
        <div className="template-Form-Input-CheckBox-Group">
          <input
            type="checkbox"
            ref="InputCheckBox"
            className="template-Form-Input-CheckBox"
            name={this.props.name}
            checked={this.state.checked}
            disabled={this.props.disabled}
            readOnly={this.props.readOnly}
            onClick={this.handleChangeFlag.bind(this)}
          />
        <span className={'template-Form-Input template-Form-Input-CheckBox-Customizing ' + (this.props.disabled ? 'template-Form-disabled' : '')}></span>
        </div>
      </div>
    );
  }
};

InputCheckBox.propTypes = propTypes;
InputCheckBox.defaultProps = defaultProps;

export default InputCheckBox;
