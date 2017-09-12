import React from 'react';
import { Mention } from 'antd';

class Nav extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (<Mention.Nav {...this.props}/>);
  }
}

export default Nav
