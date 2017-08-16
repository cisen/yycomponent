import React from 'react';
import { Anchor as _Anchor} from 'antd';

class Anchor extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (<_Anchor {...this.props}/>);
  }
}

export default Anchor
