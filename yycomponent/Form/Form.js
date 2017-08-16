import React from 'react';
import { Form as _Form, } from 'antd';

const messages = {
  "default": 'Validation error on field %s',
  required: '%s不能为空',
  "enum": '%s must be one of %s',
  whitespace: '%s不能有空格',
  date: {
    format: '%s date %s is invalid for format %s',
    parse: '%s date could not be parsed, %s is invalid ',
    invalid: '%s date %s is invalid'
  },
  types: {
    string: '%s is not a %s',
    method: '%s is not a %s (function)',
    array: '%s is not an %s',
    object: '%s is not an %s',
    number: '%s不是数字(%s) ',
    date: '%s is not a %s',
    "boolean": '%s is not a %s',
    integer: '%s is not an %s',
    "float": '%s is not a %s',
    regexp: '%s is not a valid %s',
    email: '%s格式不正确',
    url: '%s is not a valid %s',
    hex: '%s is not a valid %s'
  },
  string: {
    len: '%s必须是%s个字符',
    min: '%s不能少于%s个字符',
    max: '%s不能大于%s个字符',
    range: '%s字符长度在%s-%s之间'
  },
  number: {
    len: '%s必须在%s位数',
    min: '%s不能小于%s',
    max: '%s不能大于%s',
    range: '%s必须在%s-%s之间'
  },
  array: {
    len: '%s must be exactly %s in length',
    min: '%s cannot be less than %s in length',
    max: '%s cannot be greater than %s in length',
    range: '%s must be between %s and %s in length'
  },
  pattern: {
    mismatch: '%s值%s不符合%s'
  },
  clone: function clone() {
    var cloned = JSON.parse(JSON.stringify(this));
    cloned.clone = this.clone;
    return cloned;
  }
}

class Form extends React.Component{
  constructor(props){
    super(props);
  }
  static defaultProps={
    trigger:[document.body.ontouchstart===undefined?'hover':'click']
  }
  render() {
    return (<_Form {...this.props}/>);
  }
}
Form.defaultProps = {
    prefixCls: 'ant-form',
    layout: 'horizontal',
    hideRequiredMark: false,
    onSubmit(e) {
        e.preventDefault();
    },
};
/**重写Form create**/
Form._create = _Form.create;
Form.create = (options)=> {
  options = Object.assign({
    withRef: true,
    validateMessages: messages,
    onFieldsChange:(props,fields)=>{
      for(let fieldName in fields){
        let field=fields[fieldName];
        if(field.value&&field.value.trim){
          field.value=field.value.trim();
        }
        let errors=field.errors;
        if(errors){
          errors.forEach((error)=>{
            let label = document.querySelector('form.ant-form label[for="' + error.field + '"]');//eslint-disable-line
            if (label) {
              error.message = error.message.replace(error.field, label.innerText);
              if(/email$/.test(error.message)){
                error.message=error.message.replace(/email$/,'');
              }
            }
          });
        }
      }
    }
    }, options);
  return Form._create(options);
};

Form.mapPropsToFields=(props)=>{
  if(props.fields){
    let fields={};
    for(let name in props.fields){
      fields[name]={value:props.fields[name]};
    }
    return fields;
  }
  return props;
};

export default Form
