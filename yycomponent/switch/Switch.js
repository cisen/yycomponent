import React from 'react';
import { Switch as _Switch } from 'antd';

class Switch extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (<_Switch {...this.props}/>);
  }
}

export default Switch
