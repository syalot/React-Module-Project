import React from 'react';
import { Link } from 'react-router';

class Side extends React.Component{
  constructor(props){
    super(props);

    // 메뉴 오브젝트
    this.menuList = [
      {
        'key'   : 'main',
        'title' : 'Main',
        'subMenu' : [],
      }, {
        'key'   : 'form',
        'title' : 'Form',
        'subMenu' : [
          {
            'key'   : 'text',
            'title' : 'Text',
          }, {
            'key'   : 'checkbox',
            'title' : 'CheckBox',
          },
        ],
      },
    ];
    // 선택된 메뉴를 담는 오브젝트
    this.switch = {};
    this.state = {
      menuList : this.menuList,
      switch   : this.switch,
    };
  };

  componentWillMount(){};

  componentDidMount(){};

  componentWillReceiveProps(nextProps){};

  componentWillUnmount(){
    this.state = {};
  };

  handleClickMenu(key, subKey){
    this.switch = {};

    if(subKey){
      this.switch[key] = true;
      this.switch[key+'-'+subKey] = true;
    }
    else{
      this.switch[key] = true;
    }

    this.setState({
      switch : this.switch,
    });
  };

  handleClickSubMenu(key){
    let menuList = this.menuList;

    for(let row of menuList){
      if(row.key === key){
        let count = row.subMenu.length;

        if(row.open){
          row.open = false;
          row.style = {
            height             : '0rem',
            transitionDuration : .3 + (Math.floor(count / 5) * .1) + 's',
          };
        }
        else{
          row.open = true;
          row.style = {
            height             : (2.5 * count) + 'rem',
            transitionDuration : .3 + (Math.floor(count / 5) * .1) + 's',
          };
        }
      }
    }

    this.setState({
      menuList : this.menuList,
    });
  };

  render(){
    return(
      <nav id="Side">
        <div className="bg"></div>
        <ul className="main">
          {
            this.state.menuList.map((row, i) => {
              return(
                row.subMenu.length
                ?
                  <li key={row.key}>
                    <span
                      className={'mainLink ' + (this.switch[row.key] ? 'checked' : '')}
                      onClick={this.handleClickSubMenu.bind(this, row.key)}
                    >
                      {row.title}<icon className={'side-icon ' + (row.open ? 'on' : '')}/>
                    </span>
                    <ul className="sub" style={row.style}>
                      {
                        row.subMenu.map((subRow) => {
                          return(
                            <li
                              key={subRow.key}
                              onClick={this.handleClickMenu.bind(this, row.key, subRow.key)}
                            >
                              <Link
                                to={'/' + row.key + '/' + subRow.key}
                                className={'subLink ' + (this.switch[row.key+'-'+subRow.key] ? 'checked' : '')}
                              >
                                <icon className="link-icon"/>{subRow.title}
                              </Link>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </li>
                :
                  <li
                    key={row.key}
                    onClick={this.handleClickMenu.bind(this, row.key, '')}
                  >
                    <Link
                      to={'/' + row.key}
                      className={'mainLink ' + (this.switch[row.key] ? 'checked' : '')}
                    >
                      {row.title}
                    </Link>
                  </li>
              )
            })
          }
        </ul>
      </nav>
    );
  };
};

export default Side;
