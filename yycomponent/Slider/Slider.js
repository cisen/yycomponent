import React from 'react';
import { Slider as _Slider} from 'antd';

class Slider extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (<_Slider {...this.props}/>);
  }
}

export default Slider
