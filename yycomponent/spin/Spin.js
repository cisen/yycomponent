import React from 'react';
import { Spin as _Spin } from 'antd';

class Spin extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (<_Spin {...this.props}/>);
  }
}

export default Spin
