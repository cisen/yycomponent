import React from 'react';
import { Checkbox } from 'antd';

class Group extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (<Checkbox.Group {...this.props}/>);
  }
}

export default Group
