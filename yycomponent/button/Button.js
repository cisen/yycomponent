import React from 'react';
import { Button as _Button } from 'antd';

class Button extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (<_Button {...this.props}/>);
  }
}

export default Button
