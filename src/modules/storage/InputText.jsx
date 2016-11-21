import React from 'react';

const propTypes = {
  name        : React.PropTypes.string,
  labelName   : React.PropTypes.string,
  value       : React.PropTypes.string,
  placeholder : React.PropTypes.string,
  minLength   : React.PropTypes.string,
  maxLength   : React.PropTypes.string,
  reg         : React.PropTypes.string,
  disabled    : React.PropTypes.bool,
  readOnly    : React.PropTypes.bool,
  onChange    : React.PropTypes.func,
};
const defaultProps = {
  name        : undefined,
  labelName   : undefined,
  value       : undefined,
  placeholder : undefined,
  minLength   : undefined,
  maxLength   : undefined,
  reg         : undefined,
  disabled    : false,
  readOnly    : false,
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
    if(nextProps.value === this.props.value){
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
      this.refs.InputText.focus();
    }
  };

  /*----
    값 검사
  ----*/
  /*-- 실시간 체크 --*/
  checkValueLive(event){
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
        this.props.onChange(event);
      }

      // 렌더링
      this.setState({
        value : value
      });
    }
  }
  /*-- 포커스 아웃시 --*/
  checkValueBlur(event){
    if(this.handleLockCheck()){
      if(event.target.value.length < Number(this.props.minLength)){
        console.log('error');
      }
    }
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
        <input
          type="text"
          ref="InputText"
          className={'template-Form-Input template-Form-Input-Text ' + (this.props.disabled ? 'template-Form-disabled' : '')}
          name={this.props.name}
          placeholder={this.props.placeholder}
          maxLength={this.props.maxLength}
          value={this.state.value}
          disabled={this.props.disabled}
          readOnly={this.props.readOnly}
          onChange={this.checkValueLive.bind(this)}
          onBlur={this.checkValueBlur.bind(this)}
        />

      </div>
    );
  }
};

InputText.propTypes = propTypes;
InputText.defaultProps = defaultProps;

export default InputText;
