import React from 'react';
import { Button as _Button } from 'antd';
const _ButtonGroup = _Button.Group;

class ButtonGroup extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (<_ButtonGroup {...this.props}/>);
  }
}

export default ButtonGroup
