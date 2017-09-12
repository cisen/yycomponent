import React from 'react';
import { Dropdown as _Dropdown, } from 'antd';

class Dropdown extends React.Component{
  constructor(props){
    super(props);
  }
  static defaultProps={
    trigger:[document.body.ontouchstart===undefined?'hover':'click']
  }
  render() {
    return (<_Dropdown {...this.props}/>);
  }
}

export default Dropdown
