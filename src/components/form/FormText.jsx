import React from 'react';
import ModuleList from '../../modules/ModuleList.js';

class FormText extends React.Component{
  render(){
    console.log('render');
    return(
      <div id="FormText">
        <div className="template header">
          <h2>Input - Text</h2>
          <div className="template mainDate">작성일 : 2016년 11월 21일 11시 41분 40초</div>
        </div>
        <div className="template box">
          <div className="template subTitleBox">
            <span className="template subTitle">설명</span>
          </div>
          <span className="template contents">
            &lt;input&gt; 태그에 text 타입입니다.
          </span>
        </div>
        <div className="template box">
          <div className="template subTitleBox">
            <span className="template subTitle">샘플</span>
          </div>
          <ModuleList.InputText
            name="test"
            value="ABC"
            placeholder="입력하세요."
            labelName="기본"
            minLength="1"
            maxLength="5"
            reg="EN"
          />
          <br/>
          <ModuleList.InputText
            labelName="막기"
            disabled={true}
          />
          <br/>
          <ModuleList.InputText
            labelName="읽기"
            readOnly={true}
            value="ABC"
          />

        </div>
      </div>
    );
  }
};

export default FormText;
