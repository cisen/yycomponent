import React from 'react';
import { Icon as _Icon } from 'antd';

class Icon extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (<_Icon {...this.props}/>);
  }
}

export default Icon
