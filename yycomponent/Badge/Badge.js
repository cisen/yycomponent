import React from 'react';
import { Component, PropTypes } from 'react';
import { Badge as _Badge} from 'antd';

class Badge extends React.Component{
  constructor(props){
    super(props);
  }
  static defaultProps = {
    prefixCls: 'ant-badge',
    count: null,
    showZero: false,
    dot: false,
    overflowCount: 99,
  }
  static propTypes = {
    count: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    showZero: PropTypes.bool,
    dot: PropTypes.bool,
    overflowCount: PropTypes.number,
  };
  render(){
    return (<_Badge {...this.props}/>);
  }
}

export default Badge
