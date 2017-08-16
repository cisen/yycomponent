import React from 'react';
import { Row as _Row } from 'antd';

class Row extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (<_Row {...this.props}/>);
  }
}

export default Row
