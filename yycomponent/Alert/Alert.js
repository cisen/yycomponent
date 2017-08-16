import React from 'react';
import { Alert as _Alert} from 'antd';

class Alert extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (<_Alert {...this.props}/>);
  }
}

export default Alert
