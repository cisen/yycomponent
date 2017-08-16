import React from 'react';
import { Modal as _Modal } from 'antd';

class Modal extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (<_Modal {...this.props}/>);
  }
}

Modal.info = _Modal.info;
Modal.success = _Modal.success;
Modal.error = _Modal.error;
Modal.warning = _Modal.warning;
Modal.confirm = _Modal.confirm;

export default Modal
