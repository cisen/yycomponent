import React from 'react';
import { Anchor } from 'antd';
const _AnchorLink = Anchor.Link;

class AnchorLink extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (<_AnchorLink {...this.props}/>);
  }
}

export default AnchorLink
