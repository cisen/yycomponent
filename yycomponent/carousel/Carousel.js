import React from 'react';
import { Carousel as _Carousel } from 'antd';

class Carousel extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (<_Carousel ref="carousel" {...this.props}/>);
  }
}

export default Carousel
