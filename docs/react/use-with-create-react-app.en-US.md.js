webpackJsonp([102,219],{1263:function(n,e){n.exports={content:["article",{},["h2","Install and Initialization"],["p","We need to install ",["code","create-react-app"]," first, you may need install ",["a",{title:null,href:"https://github.com/yarnpkg/yarn/"},"yarn"]," too."],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> <span class="token function">install</span> -g create-react-app yarn'},["code","$ npm install -g create-react-app yarn"]],["p","Create a new project named ",["code","antd-demo"],"."],["pre",{lang:"bash",highlighted:"$ create-react-app antd-demo"},["code","$ create-react-app antd-demo"]],["p","The tool will create and initialize environment and dependencies automaticly,\nplease try config your proxy setting or use other npm registry if any network errors happen during it."],["p","Then we go inside ",["code","antd-demo"]," and start it."],["pre",{lang:"bash",highlighted:'$ <span class="token function">cd</span> antd-demo\n$ yarn start'},["code","$ cd antd-demo\n$ yarn start"]],["p","Open browser at ",["a",{title:null,href:"http://localhost:3000/"},"http://localhost:3000/"],', it renders a header saying "Welcome to React" on the page.'],["h2","Import antd"],["p","It is the default directory structure below."],["pre",{lang:null,highlighted:'\u251c\u2500\u2500 README<span class="token punctuation">.</span>md\n\u251c\u2500\u2500 package<span class="token punctuation">.</span>json\n\u251c\u2500\u2500 public\n\u2502   \u251c\u2500\u2500 favicon<span class="token punctuation">.</span>ico\n\u2502   \u2514\u2500\u2500 index<span class="token punctuation">.</span>html\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 App<span class="token punctuation">.</span>css\n\u2502   \u251c\u2500\u2500 App<span class="token punctuation">.</span>js\n\u2502   \u251c\u2500\u2500 App<span class="token punctuation">.</span>test<span class="token punctuation">.</span>js\n\u2502   \u251c\u2500\u2500 index<span class="token punctuation">.</span>css\n\u2502   \u251c\u2500\u2500 index<span class="token punctuation">.</span>js\n\u2502   \u2514\u2500\u2500 logo<span class="token punctuation">.</span>svg\n\u2514\u2500\u2500 yarn<span class="token punctuation">.</span>lock'},["code","\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 public\n\u2502\xa0\xa0 \u251c\u2500\u2500 favicon.ico\n\u2502\xa0\xa0 \u2514\u2500\u2500 index.html\n\u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u251c\u2500\u2500 App.css\n\u2502\xa0\xa0 \u251c\u2500\u2500 App.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 App.test.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 index.css\n\u2502\xa0\xa0 \u251c\u2500\u2500 index.js\n\u2502\xa0\xa0 \u2514\u2500\u2500 logo.svg\n\u2514\u2500\u2500 yarn.lock"]],["p","Now we install ",["code","antd"]," from yarn or npm."],["pre",{lang:"bash",highlighted:"$ yarn add antd"},["code","$ yarn add antd"]],["p","Modify ",["code","src/App.js"],", import Button component from ",["code","antd"],"."],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">\'antd/lib/button\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">\'./App.css\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>App<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>'},["code","import React, { Component } from 'react';\nimport Button from 'antd/lib/button';\nimport './App.css';\n\nclass App extends Component {\n  render() {\n    return (\n      <div className=\"App\">\n        <Button type=\"primary\">Button</Button>\n      </div>\n    );\n  }\n}\n\nexport default App;"]],["p","Add ",["code","antd/dist/antd.css"]," at the top of ",["code","src/App.css"],"."],["pre",{lang:"css",highlighted:'<span class="token atrule"><span class="token rule">@import</span> <span class="token string">\'~antd/dist/antd.css\'</span><span class="token punctuation">;</span></span>\n\n<span class="token selector"><span class="token class">.App</span> </span><span class="token punctuation">{</span>\n  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token number">...</span>'},["code","@import '~antd/dist/antd.css';\n\n.App {\n  text-align: center;\n}\n\n..."]],["p","Ok, you now see a blue primary button displaying in page now, next you can choose any components of ",["code","antd"]," to develop your application. Visit other workflow of ",["code","create-react-app"]," at its ",["a",{title:null,href:"https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md"},"User Guide "],"."],["h2","Advanced Guides"],["p","We are successfully running antd components now. But in the real world, there are still lots of problems about antd-demo.\nFor instance, we actually import all styles of components in the project which maybe a network perfermance issue."],["p","Sometimes it could be necessary to customize the default webpack config. We can achieve that by using ",["code","eject"]," script command."],["pre",{lang:"bash",highlighted:'$ yarn run <span class="token function">eject</span>'},["code","$ yarn run eject"]],["h3","Use babel-plugin-import"],["p",["a",{title:null,href:"https://github.com/ant-design/babel-plugin-import"},"babel-plugin-import"]," is a babel plugin for importing components on demand (",["a",{title:null,href:"/docs/react/getting-started#Import-on-Demand"},"principle"],"). After eject all config files to antd-demo, we allowed to install it and modify ",["code","config/webpack.config.dev.js"]," now."],["pre",{lang:"bash",highlighted:"$ yarn add babel-plugin-import --dev"},["code","$ yarn add babel-plugin-import --dev"]],["pre",{lang:"diff",highlighted:"// Process JS with Babel.\n{\n  test: /\\.(js|jsx)$/,\n  include: paths.appSrc,\n  loader: require.resolve('babel-loader'),\n  options: {\n<span class=\"token inserted\">+   plugins: [</span>\n<span class=\"token inserted\">+     ['import', { libraryName: 'antd', style: 'css' }],</span>\n<span class=\"token inserted\">+   ],</span>\n    // This is a feature of `babel-loader` for webpack (not Babel itself).\n    // It enables caching results in ./node_modules/.cache/babel-loader/\n    // directory for faster rebuilds.\n    cacheDirectory: true\n  }\n},"},["code","// Process JS with Babel.\n{\n  test: /\\.(js|jsx)$/,\n  include: paths.appSrc,\n  loader: require.resolve('babel-loader'),\n  options: {\n+   plugins: [\n+     ['import', { libraryName: 'antd', style: 'css' }],\n+   ],\n    // This is a feature of `babel-loader` for webpack (not Babel itself).\n    // It enables caching results in ./node_modules/.cache/babel-loader/\n    // directory for faster rebuilds.\n    cacheDirectory: true\n  }\n},"]],["blockquote",["p","Note: because there is no ",["code",".babelrc"]," file after config eject, so we have to put the babel option into ",["code","webpack.config.js"]," or ",["code","babel"]," field of ",["code","package.json"],"."]],["p","Remove the ",["code","@import '~antd/dist/antd.css';"]," statement added before because ",["code","babel-plugin-import"]," will import styles and import components like below:"],["pre",{lang:"diff",highlighted:"  // scr/App.js\n  import React, { Component } from 'react';\n<span class=\"token deleted\">- import Button from 'antd/lib/button';</span>\n<span class=\"token inserted\">+ import { Button } from 'antd';</span>\n  import './App.css';\n\n  class App extends Component {\n    render() {\n      return (\n        &lt;div className=\"App\">\n          &lt;Button type=\"primary\">Button&lt;/Button>\n        &lt;/div>\n      );\n    }\n  }\n\n  export default App;"},["code","  // scr/App.js\n  import React, { Component } from 'react';\n- import Button from 'antd/lib/button';\n+ import { Button } from 'antd';\n  import './App.css';\n\n  class App extends Component {\n    render() {\n      return (\n        <div className=\"App\">\n          <Button type=\"primary\">Button</Button>\n        </div>\n      );\n    }\n  }\n\n  export default App;"]],["p","Then reboot ",["code","yarn start"]," and visit demo page, you should not find any ",["a",{title:null,href:"https://zos.alipayobjects.com/rmsportal/vgcHJRVZFmPjAawwVoXK.png"},"warning message"]," in console which prove the ",["code","import on demand"]," config is working now. You will find more info about it in ",["a",{title:null,href:"/docs/react/getting-started#Import-on-Demand"},"this guide"],"."],["h3","Customize Theme"],["p","According to ",["a",{title:null,href:"/docs/react/customize-theme"},"Customize Theme documentation"],", we need ",["code","less"]," variables modify ability of ",["a",{title:null,href:"https://github.com/webpack/less-loader"},"less-loader"],", so we add it."],["pre",{lang:"bash",highlighted:'$ yarn add <span class="token function">less</span> less-loader --dev'},["code","$ yarn add less less-loader --dev"]],["pre",{lang:"diff",highlighted:'  {\n    exclude: [\n      /\\.html$/,\n      /\\.(js|jsx)$/,\n      /\\.css$/,\n<span class="token inserted">+     /\\.less$/,</span>\n      /\\.json$/,\n      /\\.bmp$/,\n      /\\.gif$/,\n      /\\.jpe?g$/,\n      /\\.png$/,\n    ],\n    loader: require.resolve(\'file-loader\'),\n    options: {\n      name: \'static/media/[name].[hash:8].[ext]\',\n    },\n  }\n\n...\n\n  // Process JS with Babel.\n  {\n    test: /\\.(js|jsx)$/,\n    include: paths.appSrc,\n    loader: \'babel\',\n    options: {\n      plugins: [\n<span class="token deleted">-       [\'import\', [{ libraryName: \'antd\', style: \'css\' }]],</span>\n<span class="token inserted">+       [\'import\', [{ libraryName: \'antd\', style: true }]],  // import less</span>\n      ],\n   },\n\n...\n\n<span class="token inserted">+  // Parse less files and modify variables</span>\n<span class="token inserted">+  {</span>\n<span class="token inserted">+    test: /\\.less$/,</span>\n<span class="token inserted">+    use: [</span>\n<span class="token inserted">+      require.resolve(\'style-loader\'),</span>\n<span class="token inserted">+      require.resolve(\'css-loader\'),</span>\n<span class="token inserted">+      {</span>\n<span class="token inserted">+        loader: require.resolve(\'postcss-loader\'),</span>\n<span class="token inserted">+        options: {</span>\n<span class="token inserted">+          ident: \'postcss\', // https://webpack.js.org/guides/migrating/#complex-options</span>\n<span class="token inserted">+          plugins: () => [</span>\n<span class="token inserted">+            require(\'postcss-flexbugs-fixes\'),</span>\n<span class="token inserted">+            autoprefixer({</span>\n<span class="token inserted">+              browsers: [</span>\n<span class="token inserted">+                \'>1%\',</span>\n<span class="token inserted">+                \'last 4 versions\',</span>\n<span class="token inserted">+                \'Firefox ESR\',</span>\n<span class="token inserted">+                \'not ie &lt; 9\', // React doesn\'t support IE8 anyway</span>\n<span class="token inserted">+              ],</span>\n<span class="token inserted">+              flexbox: \'no-2009\',</span>\n<span class="token inserted">+            }),</span>\n<span class="token inserted">+          ],</span>\n<span class="token inserted">+        },</span>\n<span class="token inserted">+      },</span>\n<span class="token inserted">+      {</span>\n<span class="token inserted">+        loader: require.resolve(\'less-loader\'),</span>\n<span class="token inserted">+        options: {</span>\n<span class="token inserted">+          modifyVars: { "@primary-color": "#1DA57A" },</span>\n<span class="token inserted">+        },</span>\n<span class="token inserted">+      },</span>\n<span class="token inserted">+    ],</span>\n<span class="token inserted">+  },</span>\n],'},["code","  {\n    exclude: [\n      /\\.html$/,\n      /\\.(js|jsx)$/,\n      /\\.css$/,\n+     /\\.less$/,\n      /\\.json$/,\n      /\\.bmp$/,\n      /\\.gif$/,\n      /\\.jpe?g$/,\n      /\\.png$/,\n    ],\n    loader: require.resolve('file-loader'),\n    options: {\n      name: 'static/media/[name].[hash:8].[ext]',\n    },\n  }\n\n...\n\n  // Process JS with Babel.\n  {\n    test: /\\.(js|jsx)$/,\n    include: paths.appSrc,\n    loader: 'babel',\n    options: {\n      plugins: [\n-       ['import', [{ libraryName: 'antd', style: 'css' }]],\n+       ['import', [{ libraryName: 'antd', style: true }]],  // import less\n      ],\n   },\n\n...\n\n+  // Parse less files and modify variables\n+  {\n+    test: /\\.less$/,\n+    use: [\n+      require.resolve('style-loader'),\n+      require.resolve('css-loader'),\n+      {\n+        loader: require.resolve('postcss-loader'),\n+        options: {\n+          ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options\n+          plugins: () => [\n+            require('postcss-flexbugs-fixes'),\n+            autoprefixer({\n+              browsers: [\n+                '>1%',\n+                'last 4 versions',\n+                'Firefox ESR',\n+                'not ie < 9', // React doesn't support IE8 anyway\n+              ],\n+              flexbox: 'no-2009',\n+            }),\n+          ],\n+        },\n+      },\n+      {\n+        loader: require.resolve('less-loader'),\n+        options: {\n+          modifyVars: { \"@primary-color\": \"#1DA57A\" },\n+        },\n+      },\n+    ],\n+  },\n],"]],["p","We use ",["code","modifyVars"]," option of ",["a",{title:null,href:"https://github.com/webpack/less-loader#less-options"},"less-loader"]," here, you can see a green button rendered on the page after reboot start server."],["blockquote",["p","Note, we only modified ",["code","webpack.config.dev.js"]," now, if you wish this config working on production environment, you need to update ",["code","webpack.config.prod.js"]," as well."]],["h2","Source code and other boilerplates"],["p","Finally, we use antd with create-react-app successfully, you can learn these practice for your own webpack workflow too, and find more webpack config in the ",["a",{title:null,href:"https://github.com/ant-tool/atool-build/blob/master/src/getWebpackCommonConfig.js"},"atool-build"],". (For instance, add ",["a",{title:null,href:"https://github.com/ant-tool/atool-build/blob/e4bd2959689b6a95cb5c1c854a5db8c98676bdb3/src/getWebpackCommonConfig.js#L90"},"moment noParse"]," to avoid loading all language files)"],["p","There are a lot of great boilerplates like create-react-app in React community. There are some source code samples of importing antd in them if you encounter some problems."],["ul",["li",["p",["a",{title:null,href:"https://github.com/ant-design/create-react-app-antd"},"create-react-app-antd"]]],["li",["p",["a",{title:null,href:"https://github.com/ant-design/react-boilerplate"},"react-boilerplate/react-boilerplate"]]],["li",["p",["a",{title:null,href:"https://github.com/ant-design/react-starter-kit"},"kriasoft/react-starter-kit"]]]]],meta:{order:4,title:"Use in create-react-app",filename:"docs/react/use-with-create-react-app.en-US.md"},description:["section",["p",["a",{title:null,href:"https://github.com/facebookincubator/create-react-app"},"create-react-app"]," is one of best React application development tool, we are going to use ",["code","antd"]," within it and modify the webpack config for some customized needs."]],toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Install-and-Initialization",title:"Install and Initialization"},"Install and Initialization"]],["li",["a",{className:"bisheng-toc-h2",href:"#Import-antd",title:"Import antd"},"Import antd"]],["li",["a",{className:"bisheng-toc-h2",href:"#Advanced-Guides",title:"Advanced Guides"},"Advanced Guides"]],["li",["a",{className:"bisheng-toc-h2",href:"#Source-code-and-other-boilerplates",title:"Source code and other boilerplates"},"Source code and other boilerplates"]]]}}});