import React from 'react';
import { Collapse } from 'antd';

class Panel extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (<Collapse.Panel {...this.props}/>);
  }
}

export default Panel
