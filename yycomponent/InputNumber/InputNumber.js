import React from 'react';
import { InputNumber as _InputNumber } from 'antd';

class InputNumber extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    let className=this.props.className;
    className+=" ant-input-number-handler-hide";
    {/*if(this.props.step<1){
      className+=" ant-input-number-handler-hide";//小于1时去掉上下箭头
    }*/}

    return (<_InputNumber {...this.props} className={className}/>);
  }
}

export default InputNumber;
