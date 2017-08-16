import React from 'react';
import { Timeline as _Timeline } from 'antd';

class Timeline extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (<_Timeline {...this.props}/>);
  }
}

export default Timeline
