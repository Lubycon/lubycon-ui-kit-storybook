(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1258:function(module,exports,__webpack_require__){"use strict";var _clientApi=__webpack_require__(64),_clientLogger=__webpack_require__(42),_configFilename=__webpack_require__(1259);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1259:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"decorators",(function(){return decorators}));var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(32),decorators=(__webpack_require__(1261),__webpack_require__(0),[function(Story){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})}])},1261:function(module,exports,__webpack_require__){},1262:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(425).configure)([__webpack_require__(1263),__webpack_require__(1264)],module,!1)}).call(this,__webpack_require__(131)(module))},1263:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=1263},1264:function(module,exports,__webpack_require__){var map={"./stories/Button.stories.tsx":1271,"./stories/Shadows.stories.tsx":1265,"./stories/Text.stories.tsx":1266};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1264},1265:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var _home_runner_work_lubycon_ui_kit_lubycon_ui_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(73),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(32),classnames__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(0),__webpack_require__(227)),classnames__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__),components_Text__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(93);__webpack_exports__.default={title:"Lubycon UI Kit/Shadows"};var shadows=["0px","2px 드랍다운","3px 버튼, 카드","6px 토스트","8px 탭","24px 모달 팝업"],Default=function Default(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul",{style:{margin:0,padding:0},children:shadows.map((function(shadow,index){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li",{style:{listStyle:"none",marginBottom:30},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_3___default()(["lubycon-shadow--".concat(index)]),style:{display:"flex",alignItems:"flex-end",height:80,borderRadius:8,backgroundColor:"#fcfcfd",padding:34},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(components_Text__WEBPACK_IMPORTED_MODULE_4__.a,{typography:"content2",children:shadow})})},index)}))})};Default.parameters=Object(_home_runner_work_lubycon_ui_kit_lubycon_ui_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"() => {\n  return (\n    <ul style={{ margin: 0, padding: 0 }}>\n      {shadows.map((shadow, index) => (\n        <li key={index} style={{ listStyle: 'none', marginBottom: 30 }}>\n          <div\n            className={clxs([`lubycon-shadow--${index}`])}\n            style={{\n              display: 'flex',\n              alignItems: 'flex-end',\n              height: 80,\n              borderRadius: 8,\n              backgroundColor: '#fcfcfd',\n              padding: 34,\n            }}\n          >\n            <Text typography=\"content2\">{shadow}</Text>\n          </div>\n        </li>\n      ))}\n    </ul>\n  );\n}"}},Default.parameters)},1266:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"FontWeight",(function(){return FontWeight})),__webpack_require__.d(__webpack_exports__,"As",(function(){return As}));var _home_runner_work_lubycon_ui_kit_lubycon_ui_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(73),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(32),components_Text__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(0),__webpack_require__(93)),components_Text_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(170);__webpack_exports__.default={title:"Lubycon UI Kit/Text",component:components_Text__WEBPACK_IMPORTED_MODULE_3__.a};var typographyNames={h1:"머릿말 1",h2:"머릿말 2",h3:"머릿말 3",h4:"머릿말 4",h5:"머릿말 5",h6:"머릿말 6",subtitle:"부제",content:"본문 1",content2:"본문 2",caption:"캡션"},fontWeightNames={light:"노토 산스 KR Light",regular:"노토 산스 KR Regular",bold:"노토 산스 KR Bold",black:"노토 산스 KR Black"},Default=function Default(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul",{children:components_Text_types__WEBPACK_IMPORTED_MODULE_4__.c.map((function(typography){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li",{style:{listStyle:"none"},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(components_Text__WEBPACK_IMPORTED_MODULE_3__.a,{typography:typography,children:typographyNames[typography]})},typography)}))})},FontWeight=function FontWeight(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul",{children:components_Text_types__WEBPACK_IMPORTED_MODULE_4__.b.map((function(fontWeight){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li",{style:{listStyle:"none"},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(components_Text__WEBPACK_IMPORTED_MODULE_3__.a,{fontWeight:fontWeight,children:fontWeightNames[fontWeight]})},fontWeight)}))})},As=function As(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{style:{listStyle:"none"},children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(components_Text__WEBPACK_IMPORTED_MODULE_3__.a,{as:"a",href:"https://github.com",target:"blank",children:"앵커 태그를 사용해보자"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(components_Text__WEBPACK_IMPORTED_MODULE_3__.a,{as:"h1",children:"h1으로 렌더해도 기본적으로는 Typography: content가 적용됩니다"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(components_Text__WEBPACK_IMPORTED_MODULE_3__.a,{as:"button",children:"버튼도 가능하기는 함"})]})})};Default.parameters=Object(_home_runner_work_lubycon_ui_kit_lubycon_ui_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"() => {\n  return (\n    <ul>\n      {typographys.map((typography) => (\n        <li style={{ listStyle: 'none' }} key={typography}>\n          <Text typography={typography}>{typographyNames[typography]}</Text>\n        </li>\n      ))}\n    </ul>\n  );\n}"}},Default.parameters),FontWeight.parameters=Object(_home_runner_work_lubycon_ui_kit_lubycon_ui_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"() => {\n  return (\n    <ul>\n      {fontWeights.map((fontWeight) => (\n        <li style={{ listStyle: 'none' }} key={fontWeight}>\n          <Text fontWeight={fontWeight}>{fontWeightNames[fontWeight]}</Text>\n        </li>\n      ))}\n    </ul>\n  );\n}"}},FontWeight.parameters),As.parameters=Object(_home_runner_work_lubycon_ui_kit_lubycon_ui_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:'() => {\n  return (\n    <ul>\n      <li style={{ listStyle: \'none\' }}>\n        <Text as="a" href="https://github.com" target="blank">\n          앵커 태그를 사용해보자\n        </Text>\n        <Text as="h1">h1으로 렌더해도 기본적으로는 Typography: content가 적용됩니다</Text>\n        <Text as="button">버튼도 가능하기는 함</Text>\n      </li>\n    </ul>\n  );\n}'}},As.parameters)},1271:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Button_stories_Default}));var objectSpread2=__webpack_require__(73),jsx_runtime=__webpack_require__(32);__webpack_require__(0);function Button(props){return Object(jsx_runtime.jsx)("button",Object(objectSpread2.a)({className:"button"},props))}try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Lubycon UI Kit/Button",component:Button};var Button_stories_Default=function Default(){return Object(jsx_runtime.jsx)(Button,{children:"기본 버튼"})};Button_stories_Default.parameters=Object(objectSpread2.a)({storySource:{source:"() => <Button>기본 버튼</Button>"}},Button_stories_Default.parameters)},170:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"c",(function(){return typographys})),__webpack_require__.d(__webpack_exports__,"b",(function(){return fontWeights})),__webpack_require__.d(__webpack_exports__,"a",(function(){return DEFAULT_ELEMENT}));var typographys=["h1","h2","h3","h4","h5","h6","subtitle","content","content2","caption"],fontWeights=["light","regular","bold","black"],DEFAULT_ELEMENT="span"},546:function(module,exports,__webpack_require__){__webpack_require__(547),__webpack_require__(829),__webpack_require__(830),__webpack_require__(986),__webpack_require__(1205),__webpack_require__(1237),__webpack_require__(1249),__webpack_require__(1251),__webpack_require__(1256),__webpack_require__(1258),module.exports=__webpack_require__(1262)},622:function(module,exports){},830:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(425)},93:function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_runner_work_lubycon_ui_kit_lubycon_ui_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(73),_home_runner_work_lubycon_ui_kit_lubycon_ui_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(169),_home_runner_work_lubycon_ui_kit_lubycon_ui_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(543),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(32),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(170),classnames__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(227),classnames__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__),Text=function Text(_ref,ref){var _clxs,_ref$typography=_ref.typography,typography=void 0===_ref$typography?"content":_ref$typography,_ref$fontWeight=_ref.fontWeight,fontWeight=void 0===_ref$fontWeight?"regular":_ref$fontWeight,as=_ref.as,props=Object(_home_runner_work_lubycon_ui_kit_lubycon_ui_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.a)(_ref,["typography","fontWeight","as"]),Component=null!=as?as:_types__WEBPACK_IMPORTED_MODULE_5__.a;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Component,Object(_home_runner_work_lubycon_ui_kit_lubycon_ui_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({ref:ref,className:classnames__WEBPACK_IMPORTED_MODULE_6___default()("lubycon-text",(_clxs={},Object(_home_runner_work_lubycon_ui_kit_lubycon_ui_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.a)(_clxs,"lubycon-typography--".concat(typography),null!=typography),Object(_home_runner_work_lubycon_ui_kit_lubycon_ui_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.a)(_clxs,"lubycon-text--font-weight--".concat(fontWeight),null!=fontWeight),_clxs))},props))};__webpack_exports__.a=Object(react__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(Text)}},[[546,1,2]]]);
//# sourceMappingURL=main.04765c1ef629e903d389.bundle.js.map