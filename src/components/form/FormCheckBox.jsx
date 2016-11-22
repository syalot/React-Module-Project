import React from 'react';
import ModuleList from '../../modules/ModuleList.js';

class FormCheckbox extends React.Component{
  handleChangeData(name, value, event){
    console.log(name, value);
  }
  render(){
    return(
      <div id="FormCheckbox">
        <div className="template-header">
          <h1>Input - CheckBox</h1>
          <div>작성일 : 2016년 11월 21일 15시 27분 12초</div>
        </div>
        <div className="template-box">
          <div className="group">
            <div className="header">
              <h2>설명</h2>
            </div>
            <div className="section">
              <span>
              &lt;input&gt; 태그에 checkbox 타입입니다.
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
              <ModuleList.InputCheckBox
                labelName="기본"
                onChange={this.handleChangeData.bind(this)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default FormCheckbox;
