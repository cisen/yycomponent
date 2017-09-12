import React from 'react';
import { Progress as _Progress } from 'antd';

class Progress extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (<_Progress {...this.props}/>);
  }
}

export default Progress
