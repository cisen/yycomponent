import React from 'react';
import { Layout as _Layout } from 'antd';

class Layout extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (<_Layout {...this.props}/>);
  }
}

export default Layout
