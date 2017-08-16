import React from 'react';
import { Upload as _Upload } from 'antd';

class Upload extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (<_Upload {...this.props} ref="upload"/>);
  }
}

export default Upload
