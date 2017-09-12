import React from 'react';
import { Popover as _Popover } from 'antd';

class Popover extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (<_Popover {...this.props}/>);
  }
}

export default Popover
