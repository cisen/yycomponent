import React from 'react';
import { message } from 'antd';

// class Message extends React.Component{
//   constructor(props){
//     super(props);
//   }
//   render(){
//     return (<_Message {...this.props}/>);
//   }
// }

const Message = {
  info: message.info,
  success: message.success,
  error:message.error,
  warn:message.warn,
  warning:message.warning,
  loading:message.loading,
  config:message.config,
  destroy:message.destroy
}
export default Message
