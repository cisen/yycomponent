import React from 'react';
import { Card as _Card } from 'antd';

class Card extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (<_Card {...this.props}/>);
  }
}

export default Card
