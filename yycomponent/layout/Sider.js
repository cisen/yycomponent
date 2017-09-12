import React from 'react';
import { Layout } from 'antd';

class Sider extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (<Layout.Sider {...this.props}/>);
  }
}

export default Sider
