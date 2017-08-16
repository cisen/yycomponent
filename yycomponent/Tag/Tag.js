import React from 'react';
import { Tag as _Tag } from 'antd';

class Tag extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (<_Tag {...this.props}/>);
  }
}

export default Tag
