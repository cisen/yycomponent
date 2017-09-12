import React from 'react';
import { Col as _Col } from 'antd';

class Col extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (<_Col {...this.props}/>);
  }
}

export default Col
