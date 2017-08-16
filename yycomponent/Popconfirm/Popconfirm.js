import React from 'react';
import { Popconfirm as _Popconfirm } from 'antd';

class Popconfirm extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (<_Popconfirm {...this.props}/>);
  }
}

export default Popconfirm
