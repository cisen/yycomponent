import React from 'react';
import { Tree as _Tree } from 'antd';

class Tree extends React.Component{
  constructor(props){
    super(props);
  }
  static TreeNode = _Tree.TreeNode;
  static defaultProps = {
    prefixCls: 'ant-tree',
    checkable: false,
    showIcon: false,
  };
  render(){
    return (<_Tree {...this.props}/>);
  }
}
Tree.TreeNode = _Tree.TreeNode;
export default Tree
