import React from 'react';
import { Component, PropTypes } from 'react';
import { Row as _Row } from 'antd';

class Row extends React.Component{
  constructor(props){
    super(props);
  }
  static defaultProps = {
    gutter: 0,
  }

  static propTypes = {
    type: PropTypes.string,
    align: PropTypes.string,
    justify: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
    gutter: PropTypes.number,
    prefixCls: PropTypes.string,
  }
  render(){
    return (<_Row {...this.props}/>);
  }
}

export default Row
