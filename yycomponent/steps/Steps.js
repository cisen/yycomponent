import React from 'react';
import { Component, PropTypes } from 'react';
import { Steps as _Steps } from 'antd';

class Steps extends React.Component{
  constructor(props){
    super(props);
  }
  static defaultProps = {
    prefixCls: 'ant-steps',
    iconPrefix: 'ant',
    current: 0,
  };

  static propTypes = {
    prefixCls: PropTypes.string,
    iconPrefix: PropTypes.string,
    current: PropTypes.number,
  };
  render(){
    return (<_Steps {...this.props}/>);
  }
}
Steps.Step = _Steps.Step;

export default Steps
