webpackJsonp([42,213],{239:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var l=o(4),a=r(l),n=o(6),i=r(n),s=o(5),c=r(s),p=o(1),d=r(p),u=o(74),f=r(u),h=o(3),m=function(e){function t(){var o,r,l;(0,a["default"])(this,t);for(var n=arguments.length,s=Array(n),c=0;c<n;c++)s[c]=arguments[c];return o=r=(0,i["default"])(this,e.call.apply(e,[this].concat(s))),r.onCopied=function(){var e=r.props.color;h.message.success("Copied: "+e)},l=o,(0,i["default"])(r,l)}return(0,c["default"])(t,e),t.prototype.getTextStyle=function(){var e=this.props,t=e.color,o=e.index;return{background:t,color:o>5?"#fff":"unset",fontWeight:6===o?"bold":"normal"}},t.prototype.render=function(){var e=this.props,t=e.color,o=e.index;return d["default"].createElement(f["default"],{text:t,onCopy:this.onCopied,title:"click to copy color"},d["default"].createElement("div",{className:"main-color-item",style:this.getTextStyle()},"color-",o,d["default"].createElement("span",{className:"main-color-value"},t)))},t}(p.Component);t["default"]=m,e.exports=t["default"]},240:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var l=o(4),a=r(l),n=o(6),i=r(n),s=o(5),c=r(s),p=o(1),d=r(p),u=o(259),f=r(u),h=o(355),m=o(231),g=r(m),v=o(239),y=r(v),C=g["default"].apply(null,[.26,.09,.37,.18]),b=.5,x=-26,k=.55,E=10,N=function(e){function t(o){(0,a["default"])(this,t);var r=(0,i["default"])(this,e.call(this));return r.handleClick=function(){r.setState({displayColorPicker:!r.state.displayColorPicker})},r.handleClose=function(){r.setState({displayColorPicker:!1})},r.handleChange=function(e){r.setState({color:e.hex}),r.props.onChange(e.hex)},r.state={displayColorPicker:!1,color:o.color},r}return(0,c["default"])(t,e),t.prototype.componentWillReceiveProps=function(e){this.setState({color:e.color})},t.prototype.render=function(){var e={color:{width:"120px",height:"24px",borderRadius:"2px",background:this.state.color},swatch:{padding:"5px",background:"#fff",borderRadius:"1px",boxShadow:"0 0 0 1px rgba(0,0,0,.1)",display:"inline-block",cursor:"pointer"},popover:{position:"absolute",zIndex:"2"},cover:{position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"},wrapper:{position:"inherit",zIndex:"100"}};return d["default"].createElement("div",null,d["default"].createElement("div",{style:e.swatch,onClick:this.handleClick},d["default"].createElement("div",{style:e.color})),this.state.displayColorPicker?d["default"].createElement("div",{style:e.popover},d["default"].createElement("div",{style:e.cover,onClick:this.handleClose}),d["default"].createElement("div",{style:e.wrapper},d["default"].createElement(h.ChromePicker,{color:this.state.color,onChange:this.handleChange}))):null)},t}(d["default"].Component),w=function(e){function t(){var o,r,l;(0,a["default"])(this,t);for(var n=arguments.length,s=Array(n),c=0;c<n;c++)s[c]=arguments[c];return o=r=(0,i["default"])(this,e.call.apply(e,[this].concat(s))),r.state={primaryColor:"#108ee9"},r.handleChangeColor=function(e){var t=e.target?e.target.value:e;r.setState({primaryColor:t})},l=o,(0,i["default"])(r,l)}return(0,c["default"])(t,e),t.prototype.getShadeColor=function(){var e=(0,f["default"])(this.state.primaryColor),t=void 0,o=void 0;return e.red()>e.blue()?(t=x,o=b):(t=E,o=k),e.darken(o).rotate(t).hexString()},t.prototype.renderColorPatterns=function(){for(var e=[],t=5,o=4,r=(0,f["default"])("#fff"),l=(0,f["default"])(this.state.primaryColor),a=(0,f["default"])(this.getShadeColor()),n=1,i=C(.1*(t+1)),s=1;s<=t;s+=1){var c=l.clone().mix(r,C(.1*s)/i).hexString();e.push(d["default"].createElement(y["default"],{color:c,index:n,key:"tint-"+s})),n+=1}for(var p=t+1;p<=t+o+1;p+=1){var u=l.clone().mix(a,1-(C(.1*p)-i)/(1-i)).hexString();e.push(d["default"].createElement(y["default"],{color:u,index:n,key:"shade-"+p})),n+=1}return e},t.prototype.render=function(){return d["default"].createElement("div",{className:"color-palette"},d["default"].createElement("div",{className:"color-palette-pick"},"\u9009\u62e9\u81ea\u5b9a\u4e49\u4e3b\u8272",d["default"].createElement("div",{className:"color-palette-picker"},d["default"].createElement("span",{style:{display:"inline-block"}},d["default"].createElement(N,{color:this.state.primaryColor,onChange:this.handleChangeColor})),d["default"].createElement("div",{className:"color-palette-picker-value"},this.state.primaryColor))),d["default"].createElement("div",{className:"main-color"},this.renderColorPatterns()))},t}(p.Component);t["default"]=w,e.exports=t["default"]},241:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=o(4),a=r(l),n=o(6),i=r(n),s=o(5),c=r(s),p=o(1),d=r(p),u=o(74),f=r(u),h=o(3),m=function(e){var t=e.match(/\d+/g),o=parseInt(t[0],10).toString(16),r=parseInt(t[1],10).toString(16),l=parseInt(t[2],10).toString(16);return o=1===o.length?"0"+o:o,r=1===r.length?"0"+r:r,l=1===l.length?"0"+l:l,"#"+o+r+l},g=function(e){function t(){return(0,a["default"])(this,t),(0,i["default"])(this,e.apply(this,arguments))}return(0,c["default"])(t,e),t.prototype.componentDidMount=function(){var e=this;this.hexColors={},Object.keys(this.colorNodes).forEach(function(t){e.hexColors[t]=m(getComputedStyle(e.colorNodes[t])["background-color"])}),this.forceUpdate()},t.prototype.render=function(){var e=this;this.colorNodes=this.colorNodes||{};for(var t=this.props.color,o=t.name,r=t.description,l=[],a=function(t){var r=o+"-"+t;l.push(d["default"].createElement(f["default"],{text:e.hexColors?e.hexColors[r]:"",onCopy:function(){return h.message.success("@"+r+" copied: "+e.hexColors[r])},key:r},d["default"].createElement("div",{key:t,ref:function(r){e.colorNodes[o+"-"+t]=r},className:"main-color-item palatte-"+o+"-"+t,style:{color:t>5?"#fff":"unset",fontWeight:6===t?"bold":"normal"},title:"click to copy color"},r,e.hexColors?d["default"].createElement("span",{className:"main-color-value"},e.hexColors[r]):null)))},n=1;n<=10;n+=1)a(n);return d["default"].createElement("div",{className:"color-palette"},d["default"].createElement("div",{className:"color-title"},o,d["default"].createElement("span",{className:"color-description"},r)),d["default"].createElement("div",{className:"main-color"},l))},t}(p.Component),v=function(){var e=[{name:"red",description:"\u70ed\u60c5\u3001\u8b66\u793a"},{name:"green",description:"\u6210\u529f\u3001\u901a\u8fc7\u3001\u5b89\u5168"},{name:"blue",description:"\u4e13\u4e1a\u3001\u79d1\u6280"},{name:"pink",description:"\u5178\u96c5\u3001\u660e\u5feb\u3001\u5973\u6027"},{name:"orange",description:"\u9192\u76ee\u3001\u6e29\u6696"},{name:"purple",description:"\u9ad8\u96c5\u3001\u6d6a\u6f2b"},{name:"yellow",description:"\u6d3b\u529b\u3001\u63d0\u793a"},{name:"cyan",description:"\u6e05\u65b0\u3001\u51b7\u9759\u3001\u7ed3\u6784\u5316"},{name:"grey",description:"\u5e73\u7a33\u3001\u4e2d\u6027"}];return d["default"].createElement("div",null,e.map(function(e){return d["default"].createElement(g,{key:e.name,color:e})}))};t["default"]=v,e.exports=t["default"]},1144:function(e,t,o){e.exports={content:["article",{},["h2","\u8272\u677f"],["p","Ant Design PC \u7aef\u7684\u8272\u677f\u7531 10 \u4e2a\u7531\u6d45\u81f3\u6df1\u7684\u8272\u5f69\u5355\u5143\u683c\u7ec4\u6210\uff0c\u6211\u4eec\u4e3a\u90e8\u5206\u8272\u5f69\u683c\u5b9a\u4e49\u4e86\u9ed8\u8ba4\u4f7f\u7528\u573a\u666f\uff0c\u7528\u6237\u5728\u8fdb\u884c\u8272\u5f69\u914d\u8272\u65f6\u53ea\u9700\u6839\u636e\u5173\u952e\u8bcd\u9009\u62e9\u4e00\u6761\u8272\u677f\u5373\u53ef\u5f97\u5230\u4e00\u5957\u5b8c\u6574\u7684\u7cfb\u7edf\u914d\u8272\u65b9\u6848\u3002\u5728\u7406\u8bba\u4e0a\uff0c\u5728 UI \u8bbe\u8ba1\u4e2d\u7684\u8272\u5f69\u90fd\u5e94\u53d6\u81ea\u8fd9\u4efd\u8272\u677f\u3002"],["p","\u7ecf\u8fc7\u8bbe\u8ba1\u5e08\u548c\u7a0b\u5e8f\u5458\u7684\u7cbe\u5fc3\u8c03\u6559\uff0c\u7ed3\u5408\u4e86\u8272\u5f69\u52a0\u767d\u3001\u52a0\u9ed1\u3001\u52a0\u6df1\uff0c\u8d1d\u585e\u5c14\u66f2\u7ebf\uff0c\u4ee5\u53ca\u9488\u5bf9\u51b7\u6696\u8272\u7684\u4e0d\u540c\u65cb\u8f6c\u89d2\u5ea6\uff0c\u5f97\u51fa\u4e00\u5957",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/734beb84ffc3f0469fbae1566aa8450f966cb261/components/style/color/colorPalette.less"},"\u8272\u677f\u751f\u6210\u7b97\u6cd5"],"\uff08\u7528\u4ee5\u53d6\u4ee3\u6211\u4eec\u539f\u6765\u7684 tint/shade \u8272\u5f69\u7cfb\u7edf\uff09\u3002\u4f7f\u7528\u8005\u53ea\u9700\u6307\u5b9a\u4e3b\u8272\uff0c\u4fbf\u53ef\u5bfc\u51fa\u4e00\u6761\u5b8c\u6574\u7684\u6e10\u53d8\u8272\u677f\u3002"],["p","Ant Design \u7684\u8272\u677f\u7531 8 \u79cd\u57fa\u672c\u8272\u5f69\u7ec4\u6210\uff0c\u6bcf\u79cd\u57fa\u672c\u8272\uff08\u7b2c 6 \u683c\uff09\u53c8\u6309\u4e0a\u8ff0\u7b97\u6cd5\u884d\u751f\u51fa 10 \u79cd\u6e10\u53d8\u8272\u3002"],["blockquote",["p","\u6ce8\uff1a\u5728\u7531\u6d45\u81f3\u6df1\u7684\u8272\u677f\u91cc\uff0c\u7b2c 6 \u683c\u8272\u5f69\u5355\u5143\u683c\u666e\u904d\u6ee1\u8db3 ",["a",{title:null,href:"http://leaverou.github.io/contrast-ratio/"},"WCAG 2.0"]," \u7684 4.5:1 \u6700\u5c0f\u5bf9\u6bd4\u5ea6\uff08AA \u7ea7\uff09\uff0c\u6211\u4eec\u5c06\u5176\u5b9a\u4e49\u4e3a\u8272\u677f\u7684\u9ed8\u8ba4\u54c1\u724c\u8272\u3002"]],function(){function e(e){return e&&e.__esModule?e:{"default":e}}var t=o(1),r=(o(2),o(241)),l=e(r);return t.createElement(l["default"],null)},["p","\u4e3a\u4e86\u8003\u8651\u6587\u672c\u5728\u4e0d\u540c\u989c\u8272\u80cc\u666f\u4e0b\u7684\u5448\u73b0\uff0c\u6211\u4eec\u9009\u62e9\u4e86\u300eWhite #FFFFFF\u300f\u548c\u300eBlack #000000\u300f\u5e76\u914d\u4ee5\u900f\u660e\u5ea6\u6765\u533a\u5206\u6587\u672c\u7684\u7b49\u7ea7\u5c42\u6b21\u3002\u8be6\u60c5\u8bf7\u67e5\u770b ",["a",{title:null,href:"/docs/spec/font#\u5b57\u4f53\u989c\u8272"},"\u5b57\u4f53\u989c\u8272"],"\u3002"],["h3","\u8272\u677f\u751f\u6210\u5de5\u5177"],["p","\u5982\u679c\u4e0a\u9762\u7684\u8272\u677f\u4e0d\u80fd\u6ee1\u8db3\u4f60\u7684\u9700\u6c42\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9\u4e00\u4e2a\u4e3b\u8272\uff0cAnt Design \u7684\u8272\u5f69\u751f\u6210\u7b97\u6cd5\u4f1a\u4e3a\u4f60\u751f\u6210\u5b8c\u6574\u7684\u8272\u677f\u3002"],function(){function e(e){return e&&e.__esModule?e:{"default":e}}var t=o(1),r=(o(2),o(240)),l=e(r);return t.createElement(l["default"],null)},["hr"],["h2","\u8272\u5f69\u5e94\u7528"],["h3","\u54c1\u724c\u8272\u7684\u5e94\u7528"],["p",["img",{"class":"preview-img no-padding",align:"right",src:"https://zos.alipayobjects.com/rmsportal/lVKfKMuLmaTlnTDitPEJ.png",alt:"Ant Design \u54c1\u724c\u8272\u5e38\u7528\u8272\u503c"}]],["p","\u54c1\u724c\u8272\u662f\u4f53\u73b0\u4ea7\u54c1\u7279\u6027\u548c\u4f20\u64ad\u7406\u5ff5\u6700\u76f4\u89c2\u7684\u89c6\u89c9\u5143\u7d20\u4e4b\u4e00\u3002\u5728\u8272\u5f69\u9009\u53d6\u65f6\uff0c\u9700\u5148\u4e86\u89e3\u54c1\u724c\u8272\u5728\u754c\u9762\u4e2d\u7684\u4f7f\u7528\u573a\u666f\u53ca\u9009\u8272\u8303\u56f4\u3002\u4ee5 Ant Design \u7f51\u9875\u7ec4\u4ef6\u7684\u9ed8\u8ba4\u6837\u5f0f\u4e3a\u4f8b\uff0c\u54c1\u724c\u8272\u4e3b\u8981\u4f53\u73b0\u5728\u5173\u952e\u884c\u52a8\u70b9\u53ca\u64cd\u4f5c\u72b6\u6001\u3001\u91cd\u8981\u4fe1\u606f\u9ad8\u4eae\u7b49\u573a\u666f\u3002"],["blockquote",["p","\u6ce8\uff1a\u56fe\u5f62\u63d2\u753b\u548c logo \u53ef\u4ee5\u4e0d\u5fc5\u9075\u5faa\u8272\u677f\uff0c\u4f46\u9700\u4fdd\u6301\u76f8\u8fd1\u7684\u8272\u7cfb\u3002"]],["h3","\u4e2d\u6027\u8272\u7684\u5e94\u7528"],["p",["img",{"class":"preview-img no-padding",align:"right",src:"https://zos.alipayobjects.com/rmsportal/AmXwsVOWrLxDfwLNlyvL.png",alt:"Ant Design \u4e2d\u6027\u8272\u5e38\u7528\u8272\u503c"}]],["p","\u7070\u8272\u4f5c\u4e3a\u4e2d\u6027\u8272\u5728 Ant Design \u7684\u7f51\u9875\u8bbe\u8ba1\u4e2d\u88ab\u5927\u91cf\u4f7f\u7528\u5230\uff0c\u5b83\u7684\u4f7f\u7528\u6709\u5229\u4e8e\u5173\u952e\u5185\u5bb9\u7684\u886c\u6258\u548c\u529f\u80fd\u7684\u5f15\u5bfc\u3002\u8fd9\u7c7b\u8272\u5f69\u4e3b\u8981\u4f53\u73b0\u5728\u5bfc\u822a\u6846\u67b6\u3001\u80cc\u666f\u5e95\u8272\u3001\u63cf\u8fb9\u3001\u6216\u6b21\u7ea7\u64cd\u4f5c\u7b49\u7b49\u3002"],["h3","\u529f\u80fd\u8272\u7684\u5e94\u7528"],["p",["img",{"class":"preview-img no-padding",align:"right",src:"https://zos.alipayobjects.com/rmsportal/mewwdThVwyTQzpZQtYXw.png",alt:"Ant Design \u529f\u80fd\u8272\u5361"}]],["p","UI \u8bbe\u8ba1\u4e2d\uff0c\u6bd4\u8f83\u7a33\u5b9a\u7684\u8272\u5f69\u9664\u4e86\u4e2d\u6027\u8272\u5916\u8fd8\u6709\u5177\u5907\u7279\u5b9a\u542b\u4e49\u7684\u529f\u80fd\u8272\uff0c\u8fd9\u7c7b\u8272\u5f69\u8d77\u5230\u4f20\u9012\u529f\u80fd\u4fe1\u606f\u3001\u4ee3\u8868\u67d0\u79cd\u72b6\u6001\u7b49\u4f5c\u7528\u3002\u4e3b\u8981\u5e94\u7528\u4e8e\u6d88\u606f\u901a\u77e5\u3001\u53cd\u9988\u63d0\u9192\u3001\u8868\u5355\u6821\u9a8c\u8fd9\u7c7b\u573a\u666f\u4e2d\u7684\u6210\u529f\u3001\u51fa\u9519\u3001\u5931\u8d25\u3001\u63d0\u9192\u3001\u94fe\u63a5\u7b49\u72b6\u6001\u3002"],["h3","\u89c6\u89c9\u5c42\u6b21"],["p",["img",{"class":"preview-img no-padding good",align:"right",src:"https://zos.alipayobjects.com/rmsportal/ADUfVlZwjziJRUQSMbMt.png",alt:"\u6b63\u786e\u793a\u4f8b",description:"\u901a\u8fc7\u54c1\u724c\u8272\u5f15\u5bfc\u7528\u6237\u7684\u89c6\u7ebf\u8def\u5f84"}]],["p","\u5c06\u54c1\u724c\u8272\u8d4b\u4e88\u5728\u91cd\u8981\u4fe1\u606f\u6216\u5173\u952e\u4e3b\u52a8\u70b9\u4e0a\uff0c\u5e76\u886c\u4ee5\u5927\u9762\u79ef\u7684\u4e2d\u6027\u8272\uff0c\u53ef\u4ee5\u8ba9\u7528\u6237\u66f4\u805a\u7126\u5230\u4efb\u52a1\u672c\u8eab\uff0c\u4ece\u800c\u63d0\u9ad8\u4efb\u52a1\u7684\u6267\u884c\u6548\u7387\u3002"],["p",["br"]],["p",["img",{"class":"preview-img no-padding bad",align:"right",src:"https://zos.alipayobjects.com/rmsportal/RmSDSeAAYphuiDFszIMa.png",alt:"\u9519\u8bef\u793a\u4f8b",description:"\u64cd\u4f5c\u754c\u9762\u4f7f\u7528\u7684\u8272\u5f69\u5e94\u5c3d\u91cf\u907f\u514d\u9762\u79ef\u8fc7\u5927\u6216\u79cd\u7c7b\u8fc7\u591a\u800c\u9020\u6210\u7528\u6237\u89c6\u89c9\u75b2\u52b3"}]],["blockquote",["p","\u6ce8\uff1a\u754c\u9762\u7528\u8272\u5efa\u8bae\u4e0d\u8d85\u8fc7\u4e09\u79cd\uff08\u6570\u636e\u56fe\u8868\u548c\u56fe\u5f62\u7c7b\u63d2\u753b\u9664\u5916\uff09\u3002"]],["h3","\u8272\u5f69\u7684\u6613\u8bc6\u522b\u6027"],["p",["img",{"class":"preview-img no-padding good",align:"right",src:"https://zos.alipayobjects.com/rmsportal/jeyvhMIQgoPUotNerRGy.png",alt:"\u6b63\u786e\u793a\u4f8b"}],"\n",["img",{"class":"preview-img no-padding bad",align:"right",src:"https://zos.alipayobjects.com/rmsportal/ppdlrVnFCsYVicjDrnzi.png",alt:"\u9519\u8bef\u793a\u4f8b",description:"\u5f53\u5bf9\u6bd4\u5ea6\u6570\u503c\u4f4e\u4e8e 3:1 \u65f6\uff0c\u5f31\u89c6\u7528\u6237\u5c06\u5f88\u96be\u8bc6\u522b"}]],["p","Ant Design \u7684\u8272\u677f\u989c\u8272\u9075\u5b88 WCAG 2.0 \u7684\u6807\u51c6\uff0c\u64cd\u4f5c\u7c7b\u7684\u8272\u5f69\u642d\u914d\u90fd\u5e94\u6ee1\u8db3\u989c\u8272\u5bf9\u6bd4\u503c 3:1 \u7684\u6700\u4f4e\u6807\u51c6\u3002"],["ul",["li",["p",["a",{title:null,href:"http://leaverou.github.io/contrast-ratio/#%23454545-on-%23fff"},"\u8272\u5f69\u5bf9\u6bd4\u503c\u6821\u9a8c\u5de5\u5177"]]]]],meta:{order:3,title:"\u8272\u5f69",filename:"docs/spec/colors.zh-CN.md"},description:["section",["p","\u8bbe\u8ba1\u4e2d\u5bf9\u8272\u5f69\u7684\u8fd0\u7528\u4e0d\u4ec5\u5e94\u8003\u8651\u54c1\u724c\u7684\u8bc6\u522b\u6027\uff0c\u8fd8\u9700\u8fbe\u5230\u4fe1\u606f\u4f20\u9012\u3001\u64cd\u4f5c\u6307\u5f15\u3001\u4ea4\u4e92\u53cd\u9988\uff0c\u6216\u662f\u5f3a\u5316\u548c\u51f8\u663e\u67d0\u4e00\u4e2a\u5143\u7d20\u7684\u76ee\u7684\u3002\u57fa\u4e8e\u64cd\u4f5c\u7cfb\u7edf\u66f4\u6ce8\u91cd\u9ad8\u6548\u3001\u6e05\u6670\u7b49\u7279\u70b9\uff0cAnt Design \u7684\u7528\u8272\u4e0a\u66f4\u504f\u5411\u7b80\u6d01\u5b9e\u7528\u4e00\u4e9b\u3002\u5728\u9009\u62e9\u8272\u5f69\u65f6\u6709\u4ee5\u4e0b\u4e09\u4e2a\u6ce8\u610f\u70b9\uff1a"],["ul",["li",["p","\u8272\u5f69\u5e94\u4e0e\u4ea7\u54c1\u5b9a\u4f4d\u76f8\u5339\u914d\uff0c\u4e14\u7b26\u5408\u7528\u6237\u5fc3\u7406\u8ba4\u77e5\uff1b"]],["li",["p","\u89c6\u89c9\u5c42\u6b21\u5e94\u6e05\u6670\u5206\u660e\uff0c\u4e3a\u91cd\u8981\u884c\u52a8\u70b9\u6216\u5173\u952e\u4fe1\u606f\u5b9a\u4e49\u4e00\u4e2a\u4e3b\u8272\uff0c\u5e76\u5efa\u7acb\u89c6\u89c9\u8fde\u7eed\u6027\uff1b"]],["li",["p","\u9075\u5b88 WCAG 2.0 \u7684 \u6807\u51c6\uff0c\u4fdd\u8bc1\u8db3\u591f\u7684\u5bf9\u6bd4\u5ea6\uff0c\u8ba9\u8272\u5f69\u66f4\u5bb9\u6613\u88ab\u89c6\u969c\u788d\uff08\u8272\u76f2\uff09\u7528\u6237\u8bc6\u522b\u3002"]]]],toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u8272\u677f",title:"\u8272\u677f"},"\u8272\u677f"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u8272\u5f69\u5e94\u7528",title:"\u8272\u5f69\u5e94\u7528"},"\u8272\u5f69\u5e94\u7528"]]]}}});