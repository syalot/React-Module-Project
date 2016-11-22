import React from 'react';
import ModuleList from '../../modules/ModuleList.js';

class FormText extends React.Component{
  constructor(props){
    super(props);

    this.ChangeStorage = {
      data : {
        labelWidth  : '50px',
        labelName   : '예제',
        value       : '예제 입니다.',
        placeholder : '예제 입니다.',
        minLength   : '5',
        maxLength   : '10',
        inputWidth  : '150px',
        disabled    : false,
        readOnly    : false
      }
    };
    this.state = {
      data : this.ChangeStorage.data
    };
  };
  handleChangeDataText(name, value){
    console.log(value);
    this.ChangeStorage.data[name] = value;

    this.setState({
      data : this.ChangeStorage.data
    });
  }
  render(){
    console.log('change');
    return(
      <div id="FormText">
        <div className="template-header">
          <h1>Input - Text</h1>
          <div>작성일 : 2016년 11월 21일 11시 41분 40초</div>
        </div>
        <div className="template-box">
          <div className="group">
            <div className="header">
              <h2>설명</h2>
            </div>
            <div className="section">
              <span>
                &lt;input&gt; 태그에 text 타입입니다.
              </span>
            </div>
          </div>
        </div>
        <div className="template-box">
          <div className="group">
            <div className="header">
              <h2>예제</h2>
            </div>
            <div className="section">
              <span>
                여기서 테스트를 할 수 있습니다
              </span>
            </div>
          </div>
          <div className="group">
            <div className="section">
              <div className="setting">
                <ModuleList.InputText
                  name="labelWidth"
                  value={this.ChangeStorage.data['labelWidth']}
                  placeholder="label 가로길이"
                  labelName="labelWidth"
                  labelWidth="70px"
                  inputWidth="100px"
                  onChange={this.handleChangeDataText.bind(this)}
                />
              </div>
              <div className="setting">
                <ModuleList.InputText
                  name="labelName"
                  value={this.ChangeStorage.data['labelName']}
                  placeholder="label 값"
                  labelName="labelName"
                  labelWidth="70px"
                  inputWidth="100px"
                  onChange={this.handleChangeDataText.bind(this)}
                />
              </div>
              <div className="setting">
                <ModuleList.InputText
                  name="value"
                  value={this.ChangeStorage.data['value']}
                  placeholder="기본값"
                  labelName="value"
                  labelWidth="70px"
                  inputWidth="100px"
                  onChange={this.handleChangeDataText.bind(this)}
                />
              </div>
              <div className="setting">
                <ModuleList.InputText
                  name="placeholder"
                  value={this.ChangeStorage.data['placeholder']}
                  placeholder="임시값"
                  labelName="placeholder"
                  labelWidth="70px"
                  inputWidth="100px"
                  onChange={this.handleChangeDataText.bind(this)}
                />
              </div>
              <div className="setting">
                <ModuleList.InputText
                  name="minLength"
                  value={this.ChangeStorage.data['minLength']}
                  placeholder="최소입력수"
                  labelName="minLength"
                  reg="NUM"
                  labelWidth="70px"
                  inputWidth="100px"
                  onChange={this.handleChangeDataText.bind(this)}
                />
              </div>
              <div className="setting">
                <ModuleList.InputText
                  name="maxLength"
                  value={this.ChangeStorage.data['maxLength']}
                  placeholder="최대입력수"
                  labelName="maxLength"
                  reg="NUM"
                  labelWidth="70px"
                  inputWidth="100px"
                  onChange={this.handleChangeDataText.bind(this)}
                />
              </div>
              <div className="setting">
                <ModuleList.InputText
                  name="inputWidth"
                  value={this.ChangeStorage.data['inputWidth']}
                  placeholder="input 가로길이"
                  labelName="inputWidth"
                  labelWidth="70px"
                  inputWidth="100px"
                  onChange={this.handleChangeDataText.bind(this)}
                />
              </div>
              <div className="setting">
                <ModuleList.InputCheckBox
                  name="disabled"
                  checked={true}
                  labelName="disabled"
                  labelWidth="70px"
                  onChange={this.handleChangeDataText.bind(this)}
                />
              </div>
              <div className="setting">
                <ModuleList.InputCheckBox
                  name="readOnly"
                  checked={true}
                  labelName="readOnly"
                  labelWidth="70px"
                  onChange={this.handleChangeDataText.bind(this)}
                />
              </div>
            </div>
          </div>
          <div className="group">
            <div className="section">
              <ModuleList.InputText
                name="test"
                value={this.ChangeStorage.data['value']}
                placeholder={this.ChangeStorage.data['placeholder']}
                labelName={this.ChangeStorage.data['labelName']}
                labelWidth={this.ChangeStorage.data['labelWidth']}
                inputWidth={this.ChangeStorage.data['inputWidth']}
                minLength={this.ChangeStorage.data['minLength']}
                maxLength={this.ChangeStorage.data['maxLength']}
                disabled={this.ChangeStorage.data['disabled']}
                readOnly={this.ChangeStorage.data['readOnly']}
                reg="EN"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default FormText;
