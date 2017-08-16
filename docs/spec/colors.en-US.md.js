webpackJsonp([45,219],{243:function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=o(4),r=a(n),l=o(6),i=a(l),s=o(5),c=a(s),d=o(1),u=a(d),p=o(74),h=a(p),f=o(2),m=function(e){function t(){var o,a,n;(0,r["default"])(this,t);for(var l=arguments.length,s=Array(l),c=0;c<l;c++)s[c]=arguments[c];return o=a=(0,i["default"])(this,e.call.apply(e,[this].concat(s))),a.onCopied=function(){var e=a.props.color;f.message.success("Copied: "+e)},n=o,(0,i["default"])(a,n)}return(0,c["default"])(t,e),t.prototype.getTextStyle=function(){var e=this.props,t=e.color,o=e.index;return{background:t,color:o>5?"#fff":"unset",fontWeight:6===o?"bold":"normal"}},t.prototype.render=function(){var e=this.props,t=e.color,o=e.index;return u["default"].createElement(h["default"],{text:t,onCopy:this.onCopied,title:"click to copy color"},u["default"].createElement("div",{className:"main-color-item",style:this.getTextStyle()},"color-",o,u["default"].createElement("span",{className:"main-color-value"},t)))},t}(d.Component);t["default"]=m,e.exports=t["default"]},244:function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=o(4),r=a(n),l=o(6),i=a(l),s=o(5),c=a(s),d=o(1),u=a(d),p=o(390),h=a(p),f=o(487),m=o(235),g=a(m),y=o(243),v=a(y),b=g["default"].apply(null,[.26,.09,.37,.18]),C=.5,w=-26,x=.55,k=10,E=function(e){function t(o){(0,r["default"])(this,t);var a=(0,i["default"])(this,e.call(this));return a.handleClick=function(){a.setState({displayColorPicker:!a.state.displayColorPicker})},a.handleClose=function(){a.setState({displayColorPicker:!1})},a.handleChange=function(e){a.setState({color:e.hex}),a.props.onChange(e.hex)},a.state={displayColorPicker:!1,color:o.color},a}return(0,c["default"])(t,e),t.prototype.componentWillReceiveProps=function(e){this.setState({color:e.color})},t.prototype.render=function(){var e={color:{width:"120px",height:"24px",borderRadius:"2px",background:this.state.color},swatch:{padding:"5px",background:"#fff",borderRadius:"1px",boxShadow:"0 0 0 1px rgba(0,0,0,.1)",display:"inline-block",cursor:"pointer"},popover:{position:"absolute",zIndex:"2"},cover:{position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"},wrapper:{position:"inherit",zIndex:"100"}};return u["default"].createElement("div",null,u["default"].createElement("div",{style:e.swatch,onClick:this.handleClick},u["default"].createElement("div",{style:e.color})),this.state.displayColorPicker?u["default"].createElement("div",{style:e.popover},u["default"].createElement("div",{style:e.cover,onClick:this.handleClose}),u["default"].createElement("div",{style:e.wrapper},u["default"].createElement(f.ChromePicker,{color:this.state.color,onChange:this.handleChange}))):null)},t}(u["default"].Component),N=function(e){function t(){var o,a,n;(0,r["default"])(this,t);for(var l=arguments.length,s=Array(l),c=0;c<l;c++)s[c]=arguments[c];return o=a=(0,i["default"])(this,e.call.apply(e,[this].concat(s))),a.state={primaryColor:"#108ee9"},a.handleChangeColor=function(e){var t=e.target?e.target.value:e;a.setState({primaryColor:t})},n=o,(0,i["default"])(a,n)}return(0,c["default"])(t,e),t.prototype.getShadeColor=function(){var e=(0,h["default"])(this.state.primaryColor),t=void 0,o=void 0;return e.red()>e.blue()?(t=w,o=C):(t=k,o=x),e.darken(o).rotate(t).hexString()},t.prototype.renderColorPatterns=function(){for(var e=[],t=5,o=4,a=(0,h["default"])("#fff"),n=(0,h["default"])(this.state.primaryColor),r=(0,h["default"])(this.getShadeColor()),l=1,i=b(.1*(t+1)),s=1;s<=t;s+=1){var c=n.clone().mix(a,b(.1*s)/i).hexString();e.push(u["default"].createElement(v["default"],{color:c,index:l,key:"tint-"+s})),l+=1}for(var d=t+1;d<=t+o+1;d+=1){var p=n.clone().mix(r,1-(b(.1*d)-i)/(1-i)).hexString();e.push(u["default"].createElement(v["default"],{color:p,index:l,key:"shade-"+d})),l+=1}return e},t.prototype.render=function(){return u["default"].createElement("div",{className:"color-palette"},u["default"].createElement("div",{className:"color-palette-pick"},"\u9009\u62e9\u81ea\u5b9a\u4e49\u4e3b\u8272",u["default"].createElement("div",{className:"color-palette-picker"},u["default"].createElement("span",{style:{display:"inline-block"}},u["default"].createElement(E,{color:this.state.primaryColor,onChange:this.handleChangeColor})),u["default"].createElement("div",{className:"color-palette-picker-value"},this.state.primaryColor))),u["default"].createElement("div",{className:"main-color"},this.renderColorPatterns()))},t}(d.Component);t["default"]=N,e.exports=t["default"]},245:function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(4),r=a(n),l=o(6),i=a(l),s=o(5),c=a(s),d=o(1),u=a(d),p=o(74),h=a(p),f=o(2),m=function(e){var t=e.match(/\d+/g),o=parseInt(t[0],10).toString(16),a=parseInt(t[1],10).toString(16),n=parseInt(t[2],10).toString(16);return o=1===o.length?"0"+o:o,a=1===a.length?"0"+a:a,n=1===n.length?"0"+n:n,"#"+o+a+n},g=function(e){function t(){return(0,r["default"])(this,t),(0,i["default"])(this,e.apply(this,arguments))}return(0,c["default"])(t,e),t.prototype.componentDidMount=function(){var e=this;this.hexColors={},Object.keys(this.colorNodes).forEach(function(t){e.hexColors[t]=m(getComputedStyle(e.colorNodes[t])["background-color"])}),this.forceUpdate()},t.prototype.render=function(){var e=this;this.colorNodes=this.colorNodes||{};for(var t=this.props.color,o=t.name,a=t.description,n=[],r=function(t){var a=o+"-"+t;n.push(u["default"].createElement(h["default"],{text:e.hexColors?e.hexColors[a]:"",onCopy:function(){return f.message.success("@"+a+" copied: "+e.hexColors[a])},key:a},u["default"].createElement("div",{key:t,ref:function(a){e.colorNodes[o+"-"+t]=a},className:"main-color-item palatte-"+o+"-"+t,style:{color:t>5?"#fff":"unset",fontWeight:6===t?"bold":"normal"},title:"click to copy color"},a,e.hexColors?u["default"].createElement("span",{className:"main-color-value"},e.hexColors[a]):null)))},l=1;l<=10;l+=1)r(l);return u["default"].createElement("div",{className:"color-palette"},u["default"].createElement("div",{className:"color-title"},o,u["default"].createElement("span",{className:"color-description"},a)),u["default"].createElement("div",{className:"main-color"},n))},t}(d.Component),y=function(){var e=[{name:"red",description:"\u70ed\u60c5\u3001\u8b66\u793a"},{name:"green",description:"\u6210\u529f\u3001\u901a\u8fc7\u3001\u5b89\u5168"},{name:"blue",description:"\u4e13\u4e1a\u3001\u79d1\u6280"},{name:"pink",description:"\u5178\u96c5\u3001\u660e\u5feb\u3001\u5973\u6027"},{name:"orange",description:"\u9192\u76ee\u3001\u6e29\u6696"},{name:"purple",description:"\u9ad8\u96c5\u3001\u6d6a\u6f2b"},{name:"yellow",description:"\u6d3b\u529b\u3001\u63d0\u793a"},{name:"cyan",description:"\u6e05\u65b0\u3001\u51b7\u9759\u3001\u7ed3\u6784\u5316"},{name:"grey",description:"\u5e73\u7a33\u3001\u4e2d\u6027"}];return u["default"].createElement("div",null,e.map(function(e){return u["default"].createElement(g,{key:e.name,color:e})}))};t["default"]=y,e.exports=t["default"]},1274:function(e,t,o){e.exports={content:["article",{},["h2","Color Palettes"],["p","Ant Design's color palettes consist of 10 shallow-to-deep color swatches, and default palettes are defined for certain hues. Users can select a swatch from the color scheme using keywords. In theory, all colors used in the design should be taken from a color palette."],["p","After careful tuning by designers and programmers, our ",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/734beb84ffc3f0469fbae1566aa8450f966cb261/components/style/color/colorPalette.less"},"palette generation algorithm"]," uses a combination of color plus Bezier curves and different rotation angles for cold and warm colors to generate new palettes (replacing our original tint / shade color system). This algorithm can be used to generate new palettes based on an input color that you specify."],["p","Ant Design's default theme consists of eight basic colors, each of which is derived from the above algorithm."],["blockquote",["p","Note: In these shallow-to-deep palettes, the 6th color cell ",["a",{title:null,href:"https://leaverou.github.io/contrast-ratio/"},"generally satisfies WCAG 2.0"],"'s 4.5:1 minimum contrast ratio (AA level), and is used as the default for the palette."]],function(){function e(e){return e&&e.__esModule?e:{"default":e}}var t=o(1),a=(o(3),o(245)),n=e(a);return t.createElement(n["default"],null)},["p","In order to provide contrast against different background shades, we chose ",["code","White #FFFFFF"]," and ",["code","Black #000000"]," with varying transparency to distinguish foreground text. For details, please see ",["a",{title:null,href:"/docs/spec/font#font-color"},"font color"],"."],["h3","Palette Generation Tool"],["p","If the above palettes do not meet your needs, you can choose a main color below, and Ant Design's color generation algorithm will generate a palette for you."],function(){function e(e){return e&&e.__esModule?e:{"default":e}}var t=o(1),a=(o(3),o(244)),n=e(a);return t.createElement(n["default"],null)},["hr"],["h2","Color application"],["h3","Brand color application"],["p",["img",{"class":"preview-img no-padding",align:"right",src:"https://zos.alipayobjects.com/rmsportal/lVKfKMuLmaTlnTDitPEJ.png",alt:"Ant Design's commonly used brand color values"}]],["p","The brand color is one of the most intuitive visual elements used that is used to embody product characteristics and communicate ideas. When selecting colors, it is important to understand how the brand color is used in the user interface. Taking the default styles of an Ant Design web component as an example, the brand color is mainly reflected in key actions and when highlighting important information."],["blockquote",["p","Note: Images and logos can not automatically adhere to the color palette, but should be compatible."]],["h3","Neutral color application"],["p",["img",{"class":"preview-img no-padding",align:"right",src:"https://zos.alipayobjects.com/rmsportal/AmXwsVOWrLxDfwLNlyvL.png",alt:"Ant Design's neutral color values"}]],["p","Gray as a neutral color is used extensively in Ant Design's web design, and its use facilitates the targeting and functional guidance of key content. This color is mainly seen in the navigation frame, backgrounds, secondary operations, and so on."],["h3","Functional color application"],["p",["img",{"class":"preview-img no-padding",align:"right",src:"https://zos.alipayobjects.com/rmsportal/mewwdThVwyTQzpZQtYXw.png",alt:"Ant Design's functional color card"}]],["p","Functional colors are colors that are used to convey state. These are mainly used in notifications, form validations, status messages, etc. Green indicates success, yellow indicates alerts / warnings, red indicates errors, gray indicates skipped / disabled."],["h3","Visual hierarchy"],["p",["img",{"class":"preview-img no-padding good",align:"right",src:"https://zos.alipayobjects.com/rmsportal/ADUfVlZwjziJRUQSMbMt.png",alt:"Good example",description:"Guide the user's line of sight through brand color"}]],["p","Use the brand color to convey important information or to highlight important actions while surrounding it with large areas of neutral color. This allows users to focus more on the task itself, improving efficiency."],["p",["br"]],["p",["img",{"class":"preview-img no-padding bad",align:"right",src:"https://zos.alipayobjects.com/rmsportal/RmSDSeAAYphuiDFszIMa.png",alt:"Bad example",description:"Avoid using too many colors or colors in large areas"}]],["blockquote",["p","Note: We suggest using no more than three colors in the user interface (except for within data charts and graphic illustrations)"]],["h3","Color contrast"],["p",["img",{"class":"preview-img no-padding good",align:"right",src:"https://zos.alipayobjects.com/rmsportal/jeyvhMIQgoPUotNerRGy.png",alt:"Good example"}],"\n",["img",{"class":"preview-img no-padding bad",align:"right",src:"https://zos.alipayobjects.com/rmsportal/ppdlrVnFCsYVicjDrnzi.png",alt:"Bad example",description:"When the contrast is less than 3:1, it becomes difficult to read"}]],["p","Ant Design's color palette conforms to the WCAG 2.0 standard. The foreground and background colors should always meet the minimum standard of a 3:1 contrast ratio."],["ul",["li",["p",["a",{title:null,href:"https://leaverou.github.io/contrast-ratio/#%23454545-on-%23fff"},"Contrast ratio tool"]]]]],meta:{order:3,title:"Colors",filename:"docs/spec/colors.en-US.md"},description:["section",["p","Not only is color an effective way to create brand recognition, but it also plays an important role in conveying information, providing interactive feedback, and bringing attention to a particular element. Ant Design makes using color simple and practical through an emphasis on efficiency, clarity, and user experience. Please note the following three points when choosing colors:"],["ul",["li",["p","Color usage and positioning should respect cognitive psychology (stay user-focused)"]],["li",["p","Visual hierarchy should be clear-cut, and color should establish visual continuity"]],["li",["p","Color usage should be in compliance with the ",["a",{title:"Web Content Accessibility Guidelines",href:"https://www.w3.org/WAI/WCAG20/glance/"},"WCAG 2.0 standards"]," by using sufficient contrast to ensure accessibility"]]]],toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Color-Palettes",title:"Color Palettes"},"Color Palettes"]],["li",["a",{className:"bisheng-toc-h2",href:"#Color-application",title:"Color application"},"Color application"]]]}}});