import React from 'react';
import { BackTop as _BackTop } from 'antd';

class BackTop extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (<_BackTop {...this.props}/>);
  }
}

export default BackTop
