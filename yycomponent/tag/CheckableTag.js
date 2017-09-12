import React from 'react';
import { Tag } from 'antd';

class CheckableTag extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (<Tag.CheckableTag {...this.props}/>);
  }
}

export default CheckableTag
