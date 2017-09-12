import React from 'react';
import Select from './Select'

Select.renderOption=(data, object = {value: 'value', label: 'label'})=>{//eslint-disable-line
  return data && data.map && data.map((item, key)=> {
    return (<Select.Option key={key} value={item[object.value]?item[object.value].toString():''}>{item[object.label]}</Select.Option>);
  });
};

export default Select
