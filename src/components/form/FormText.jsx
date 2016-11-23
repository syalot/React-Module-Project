import React from 'react';
import ModuleList from '../../modules/ModuleList.js';

class FormText extends React.Component{
  constructor(props){
    super(props);

    this.ChangeStorage = {
      data : {
        labelName   : '예제',
        labelWidth  : '50px',
        inputWidth  : '150px',
        name        : 'test',
        value       : '',
        placeholder : '',
        disabled    : false,
        readOnly    : false,
        reg         : '',
        maxLength   : '100',
        minLength   : '0',
      }
    };
    this.state = {
      data : this.ChangeStorage.data
    };
  };
  handleChangeDataText(name, value){
    this.ChangeStorage.data[name] = value;

    this.setState({
      data : this.ChangeStorage.data
    });
  };
  handleRender(){
    this.setState({});
  };
  render(){
    console.log('render');
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
              <h2>Props</h2>
            </div>
            <div className="section">
              <span>
                지원하는 메소드들의 설명과 미리보기를 지원함으로 테스트를 해보실 수 있습니다.
              </span>
            </div>
          </div>
          <div className="group">
            <div className="section">
              <div className="setting">
                <ModuleList.FormText
                  labelName="labelName"
                  labelWidth="70px"
                  inputWidth="100px"
                  name="labelName"
                  value={this.ChangeStorage.data['labelName']}
                  placeholder="label 이름"
                  onChange={this.handleChangeDataText.bind(this)}
                />
                <div className="text-group">
                  <span className>&lt;label&gt; 태그에 내용을 정의할수 있습니다.<br/>또한 이 props를 사용시 자동으로 &lt;label&gt; 태그가 생성됩니다. [ 변수형 : String ]</span>
                </div>
              </div>
              <div className="setting">
                <ModuleList.FormText
                  labelName="labelWidth"
                  labelWidth="70px"
                  inputWidth="100px"
                  name="labelWidth"
                  value={this.ChangeStorage.data['labelWidth']}
                  placeholder="label 길이"
                  onChange={this.handleChangeDataText.bind(this)}
                />
                <div className="text-group">
                  <span className>&lt;label&gt; 태그에 가로길이 정의할수 있습니다. [ 변수형 : String ]</span>
                </div>
              </div>
              <div className="setting">
                <ModuleList.FormText
                  labelName="inputWidth"
                  labelWidth="70px"
                  inputWidth="100px"
                  name="inputWidth"
                  value={this.ChangeStorage.data['inputWidth']}
                  placeholder="input 길이"
                  onChange={this.handleChangeDataText.bind(this)}
                />
                <div className="text-group">
                  <span className>&lt;input&gt; 태그에 가로길이 정의할수 있습니다. [ 변수형 : String ]</span>
                </div>
              </div>
              <div className="setting">
                <ModuleList.FormText
                  labelName="value"
                  labelWidth="70px"
                  inputWidth="100px"
                  name="value"
                  value={this.ChangeStorage.data['value']}
                  placeholder="기본값"
                  disabled={this.ChangeStorage.data['disabled']}
                  readOnly={this.ChangeStorage.data['readOnly']}
                  reg={this.ChangeStorage.data['reg']}
                  maxLength={this.ChangeStorage.data['maxLength']}
                  minLength={this.ChangeStorage.data['minLength']}
                  onChange={this.handleChangeDataText.bind(this)}
                />
                <div className="text-group">
                  <span className>&lt;input&gt; 태그에 기본값을 정의할수 있습니다. [ 변수형 : String ]</span>
                </div>
              </div>
              <div className="setting">
                <ModuleList.FormText
                  labelName="placeholder"
                  labelWidth="70px"
                  inputWidth="100px"
                  name="placeholder"
                  value={this.ChangeStorage.data['placeholder']}
                  placeholder="힌트"
                  onChange={this.handleChangeDataText.bind(this)}
                />
                <div className="text-group">
                  <span className>&lt;input&gt; 태그에 힌트를 정의할수 있습니다. [ 변수형 : String ]</span>
                </div>
              </div>
              <div className="setting">
                <ModuleList.FormText
                  labelName="minLength"
                  labelWidth="70px"
                  inputWidth="100px"
                  name="minLength"
                  value={this.ChangeStorage.data['minLength']}
                  placeholder="최소 입력수"
                  onChange={this.handleChangeDataText.bind(this)}
                />
                <div className="text-group">
                  <span className>최소 문자열 수를 정의할수 있습니다. [ 변수형 : String ]</span>
                </div>
              </div>
              <div className="setting">
                <ModuleList.FormText
                  labelName="maxLength"
                  labelWidth="70px"
                  inputWidth="100px"
                  name="maxLength"
                  value={this.ChangeStorage.data['maxLength']}
                  placeholder="최대 입력수"
                  onChange={this.handleChangeDataText.bind(this)}
                />
                <div className="text-group">
                  <span className>최대 문자열 수를 정의할수 있습니다. [ 변수형 : String ]</span>
                </div>
              </div>
              <div className="setting">
                <ModuleList.InputCheckBox
                  labelName="disabled"
                  labelWidth="70px"
                  inputWidth="100px"
                  name="disabled"
                  checked={this.ChangeStorage.data['disabled']}
                  onChange={this.handleChangeDataText.bind(this)}
                />
              </div>
              <div className="setting">
                <ModuleList.InputCheckBox
                  labelName="readOnly"
                  labelWidth="70px"
                  inputWidth="100px"
                  name="readOnly"
                  checked={this.ChangeStorage.data['readOnly']}
                  onChange={this.handleChangeDataText.bind(this)}
                />
              </div>
            </div>
          </div>
          <div className="group">
            <div className="section">
              <ModuleList.FormText
                labelName={this.ChangeStorage.data['labelName']}
                labelWidth={this.ChangeStorage.data['labelWidth']}
                inputWidth={this.ChangeStorage.data['inputWidth']}
                name={this.ChangeStorage.data['name']}
                value={this.ChangeStorage.data['value']}
                placeholder={this.ChangeStorage.data['placeholder']}
                disabled={this.ChangeStorage.data['disabled']}
                readOnly={this.ChangeStorage.data['readOnly']}
                reg={this.ChangeStorage.data['reg']}
                maxLength={this.ChangeStorage.data['maxLength']}
                minLength={this.ChangeStorage.data['minLength']}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default FormText;
