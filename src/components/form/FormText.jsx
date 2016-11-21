import React from 'react';
import ModuleList from '../../modules/ModuleList.js';

class FormText extends React.Component{
  render(){
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
          <ModuleList.InputText/>
        </div>
      </div>
    );
  }
};

export default FormText;
