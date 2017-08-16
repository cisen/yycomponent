import React from 'react';
import { Transfer as _Transfer } from 'antd';

class Transfer extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (<_Transfer {...this.props}/>);
  }
}

export default Transfer
