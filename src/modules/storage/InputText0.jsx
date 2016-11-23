import React from 'react';

const propTypes = {
  labelName   : React.PropTypes.string,
  labelWidth  : React.PropTypes.string,
  name        : React.PropTypes.string,
  value       : React.PropTypes.string,
  placeholder : React.PropTypes.string,
  minLength   : React.PropTypes.string,
  maxLength   : React.PropTypes.string,
  reg         : React.PropTypes.string,
  disabled    : React.PropTypes.bool,
  readOnly    : React.PropTypes.bool,
  className   : React.PropTypes.string,
  inputWidth  : React.PropTypes.string,
  onChange    : React.PropTypes.func,
};
const defaultProps = {

  labelName   : undefined,
  labelWidth  : undefined,
  name        : undefined,
  value       : '',
  placeholder : undefined,
  minLength   : undefined,
  maxLength   : undefined,
  reg         : undefined,
  disabled    : false,
  readOnly    : false,
  className   : '',
  inputWidth  : undefined,
  onChange    : undefined,
};

class InputText extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      value : this.props.value
    };
    this.Render = {
      component : true
    };
  }

  componentWillMount(){};

  componentDidMount(){};

  componentWillReceiveProps(nextProps){
    if(nextProps.name==="value"){
      console.log('2-check : ', nextProps.value, this.state.value);
    }
    if(nextProps.value !== this.state.value || nextProps.disabled !== this.props.disabled || nextProps.readOnly !== this.props.readOnly){
      this.setState({
        value : nextProps.value
      });
    }
    else{
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

  componentWillUnmount(){
    this.state = {};
  };

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
      this.refs.InputText.focus();
    }
  };

  /*----
    값 검사
  ----*/
  /*-- 실시간 체크 --*/
  checkValueLive(event){
    console.log('1-check : ',event.target.name, event.target.value);
    if(this.handleLockCheck()){
      let value = this.state.value;

      // 정규식 처리
      if(this.props.reg){
        let regStorage = {
          KR  : /([^가-힣ㄱ-ㅎㅏ-ㅣ\x20])/i,
          EN  : /[^a-zA-Z]/g,
          NUM : /[^0-9]/g
        };

        if(Object.keys(regStorage).indexOf(this.props.reg) !== -1){
          if(!regStorage[this.props.reg].test(event.target.value)){
            value = event.target.value;
          }
        }
      }
      else{
        value = event.target.value;
      }

      // 부모 컴포넌트에 이벤트 전달
      if(this.props.onChange){
        this.props.onChange(this.props.name, value, event);
      }

      // 렌더링
      this.setState({
        value : value
      });
    }
  }
  /*-- 포커스 out --*/
  checkValueBlur(event){
    if(this.handleLockCheck()){
      if(event.target.value.length < Number(this.props.minLength)){
        console.log('error');
      }
    }
  }

  render(){
    if(this.props.name === "test"){
      console.log(this);
    }
    let labelStyle = {
      width : this.props.labelWidth
    };
    let inputStyle = {
      width : this.props.inputWidth
    };
    return(
      <div className={'template-Form-Module' + this.props.className}>
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
        <input
          type="text"
          ref="InputText"
          className={'default text ' + (this.props.disabled ? 'disabled' : '')}
          name={this.props.name}
          placeholder={this.props.placeholder}
          maxLength={this.props.maxLength}
          value={this.state.value}
          disabled={this.props.disabled}
          readOnly={this.props.readOnly}
          onChange={this.checkValueLive.bind(this)}
          onBlur={this.checkValueBlur.bind(this)}
          style={this.props.inputWidth ? inputStyle : null}
        />

      </div>
    );
  }
};

InputText.propTypes = propTypes;
InputText.defaultProps = defaultProps;

export default InputText;
