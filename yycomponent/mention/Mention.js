import React from 'react';
import { Mention as _Mention} from 'antd';

class Mention extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (<_Mention {...this.props}/>);
  }
}

Mention.toString = _Mention.toString;
Mention.toEditorState = _Mention.toEditorState;
Mention.getMentions = _Mention.getMentions;
Mention.defaultProps = {
    prefixCls: 'ant-mention',
    notFoundContent: '无匹配结果，轻敲空格完成输入',
    loading: false,
    multiLines: false,
};

export default Mention
