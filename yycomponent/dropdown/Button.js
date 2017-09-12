import React from 'react';
import { Dropdown } from 'antd';

class Button extends React.Component{
  constructor(props){
    super(props);
  }
  static defaultProps={
    trigger:[document.body.ontouchstart===undefined?'hover':'click']
  }
  render() {
    return (<Dropdown.Button {...this.props}/>);
  }
}

export default Button
