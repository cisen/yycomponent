import React from 'react';
import { Input } from 'antd';

class Group extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (<Input.Group {...this.props}/>);
  }
}

export default Group
