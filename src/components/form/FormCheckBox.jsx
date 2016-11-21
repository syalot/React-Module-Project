import React from 'react';
import ModuleList from '../../modules/ModuleList.js';

class FormCheckbox extends React.Component{
  handleChangeData(name, value, event){
    console.log(name, value);
  }
  render(){
    return(
      <div id="FormCheckbox">
        <div className="template header">
          <h2>Input - CheckBox</h2>
          <div className="template mainDate">작성일 : 2016년 11월 21일 15시 27분 12초</div>
        </div>
        <div className="template box">
          <div className="template subTitleBox">
            <span className="template subTitle">설명</span>
          </div>
          <span className="template contents">
            &lt;input&gt; 태그에 checkbox 타입입니다.
          </span>
        </div>
        <div className="template box">
          <div className="template subTitleBox">
            <span className="template subTitle">샘플</span>
          </div>
          <ModuleList.InputCheckBox
            labelName="기본"
            onChange={this.handleChangeData.bind(this)}
          />
          <br/>
          <ModuleList.InputCheckBox
            labelName="막기"
            disabled={true}
          />
          <br/>
          <ModuleList.InputCheckBox
            labelName="읽기"
            readOnly={true}
          />
        </div>
      </div>
    );
  }
};

export default FormCheckbox;
