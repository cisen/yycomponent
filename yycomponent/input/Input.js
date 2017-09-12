import React from 'react';
import { Input as _Input } from 'antd';

class Input extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (<_Input {...this.props}/>);
  }
}

export default Input
