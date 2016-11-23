import React from 'react';

const propTypes = {
  className   : React.PropTypes.string,
  labelName   : React.PropTypes.string,
  labelWidth  : React.PropTypes.string,
  inputWidth  : React.PropTypes.string,
  name        : React.PropTypes.string,
  value       : React.PropTypes.string,
  placeholder : React.PropTypes.string,
  disabled    : React.PropTypes.bool,
  readOnly    : React.PropTypes.bool,
  reg         : React.PropTypes.string,
  maxLength   : React.PropTypes.string,
  minLength   : React.PropTypes.string,
};
const defaultProps = {
  className   : '',
  labelName   : undefined,
  labelWidth  : undefined,
  inputWidth  : undefined,
  name        : 'form-text',
  value       : '',
  placeholder : '',
  disabled    : false,
  readOnly    : false,
  reg         : '',
  maxLength   : undefined,
  minLength   : undefined,
};

class FormText extends React.Component{
  constructor(props){
    super(props);

    this.valueCheck = [
      'className',
      'labelName',
      'labelWidth',
      'inputWidth',
      'name',
      'value',
      'placeholder',
      'disabled',
      'readOnly',
      'reg',
      'maxLength',
      'minLength'
    ];
    this.state = {
      value   : this.props.value,
      warning : false,
    };
    this.Render = {
      component : false
    };
  }

  componentWillMount(){};

  componentDidMount(){};

  componentWillReceiveProps(nextProps){
    let flag = false;

    for(let key of this.valueCheck){
      if(key === 'value'){
        if(nextProps.value !== this.state.value){
          this.setState({
            value : nextProps.value
          });
          flag = true;
          break;
        }
      }
      else{
        if(nextProps[key] !== this.props[key]){
          flag = true;
          break;
        }
      }
    }
    if(flag){
      this.Render['component'] = true;
    };
  };

  shouldComponentUpdate(nextProps, nextState){
    return this.Render['component'];
  };

  componentWillUpdate(){};

  componentDidUpdate(){
    this.Render = {
      component : false
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
      this.refs.FormText.focus();
    }
  };

  /*----
    값 검사
  ----*/
  /*-- 실시간 체크 --*/
  handleCheckValueLive(event){
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

      // 문자열 길이 확인 (최대값 체크)
      let maxLength = Number(this.props.maxLength);
      if(maxLength){
        if(maxLength < value.length){
          return false;
        }
      }

      // 부모 컴포넌트에 이벤트 전달
      if(this.props.onChange){
        this.props.onChange(this.props.name, value, event);
      }

      // 렌더링
      this.Render['component'] = true;
      this.setState({
        value : value
      });
    }
  }

  /*----
    포커스 Out
  ----*/
  handleCheckValueBlur(event){
    let minLength = Number(this.props.minLength);
    let warning = false;

    // 문자열 길이 확인 (최소값 체크)
    if(minLength){
      if(minLength > this.state.value.length){
        warning = true;
      }
    }

    // 부모 컴포넌트에 이벤트 전달
    if(this.props.onBlur){
      this.props.onBlur(this.props.name, this.state.value, event);
    }

    if(warning !== this.state.warning){
      // 렌더링
      this.Render['component'] = true;
      this.setState({
        warning : warning
      });
    }
  }

  render(){
    let inputStyle = {
      width : this.props.inputWidth
    };
    let labelStyle = {
      width : this.props.labelWidth
    };
    return(
      <div className={'Module-Form' + this.props.className}>
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
          ref="FormText"
          className={'default text ' + (this.props.disabled ? 'disabled ' : '') + (this.state.warning ? 'warning ' : '')}
          style={this.props.inputWidth ? inputStyle : null}
          name={this.props.name}
          value={this.state.value}
          placeholder={this.props.placeholder}
          disabled={this.props.disabled}
          readOnly={this.props.readOnly}
          onBlur={this.handleCheckValueBlur.bind(this)}
          onChange={this.handleCheckValueLive.bind(this)}
        />
      </div>
    );
  }
};

FormText.propTypes = propTypes;
FormText.defaultProps = defaultProps;

export default FormText;
