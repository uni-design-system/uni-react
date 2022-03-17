(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1004:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ColorControl",(function(){return Color_ColorControl}));__webpack_require__(22),__webpack_require__(3),__webpack_require__(10),__webpack_require__(6),__webpack_require__(14),__webpack_require__(9),__webpack_require__(8),__webpack_require__(11),__webpack_require__(18),__webpack_require__(21),__webpack_require__(16),__webpack_require__(74),__webpack_require__(41),__webpack_require__(31),__webpack_require__(25),__webpack_require__(107),__webpack_require__(83),__webpack_require__(136),__webpack_require__(62),__webpack_require__(17),__webpack_require__(36),__webpack_require__(15);var react=__webpack_require__(0),react_default=__webpack_require__.n(react);function index_module_u(){return(index_module_u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function index_module_c(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r.indexOf(t=a[n])>=0||(o[t]=e[t]);return o}function index_module_i(e){var t=Object(react.useRef)(e),n=Object(react.useRef)((function(e){t.current&&t.current(e)}));return t.current=e,n.current}var index_module_s=function(e,r,t){return void 0===r&&(r=0),void 0===t&&(t=1),e>t?t:e<r?r:e},index_module_f=function(e){return"touches"in e},index_module_v=function(e){return e&&e.ownerDocument.defaultView||self},index_module_d=function(e,r,t){var n=e.getBoundingClientRect(),o=index_module_f(r)?function(e,r){for(var t=0;t<e.length;t++)if(e[t].identifier===r)return e[t];return e[0]}(r.touches,t):r;return{left:index_module_s((o.pageX-(n.left+index_module_v(e).pageXOffset))/n.width),top:index_module_s((o.pageY-(n.top+index_module_v(e).pageYOffset))/n.height)}},index_module_h=function(e){!index_module_f(e)&&e.preventDefault()},index_module_m=react_default.a.memo((function(o){var a=o.onMove,l=o.onKey,s=index_module_c(o,["onMove","onKey"]),m=Object(react.useRef)(null),g=index_module_i(a),p=index_module_i(l),b=Object(react.useRef)(null),_=Object(react.useRef)(!1),x=Object(react.useMemo)((function(){var e=function(e){index_module_h(e),(index_module_f(e)?e.touches.length>0:e.buttons>0)&&m.current?g(index_module_d(m.current,e,b.current)):t(!1)},r=function(){return t(!1)};function t(t){var n=_.current,o=index_module_v(m.current),a=t?o.addEventListener:o.removeEventListener;a(n?"touchmove":"mousemove",e),a(n?"touchend":"mouseup",r)}return[function(e){var r=e.nativeEvent,n=m.current;if(n&&(index_module_h(r),!function(e,r){return r&&!index_module_f(e)}(r,_.current)&&n)){if(index_module_f(r)){_.current=!0;var o=r.changedTouches||[];o.length&&(b.current=o[0].identifier)}n.focus(),g(index_module_d(n,r,b.current)),t(!0)}},function(e){var r=e.which||e.keyCode;r<37||r>40||(e.preventDefault(),p({left:39===r?.05:37===r?-.05:0,top:40===r?.05:38===r?-.05:0}))},t]}),[p,g]),C=x[0],E=x[1],H=x[2];return Object(react.useEffect)((function(){return H}),[H]),react_default.a.createElement("div",index_module_u({},s,{onTouchStart:C,onMouseDown:C,className:"react-colorful__interactive",ref:m,onKeyDown:E,tabIndex:0,role:"slider"}))})),index_module_g=function(e){return e.filter(Boolean).join(" ")},index_module_p=function(r){var t=r.color,n=r.left,o=r.top,a=void 0===o?.5:o,l=index_module_g(["react-colorful__pointer",r.className]);return react_default.a.createElement("div",{className:l,style:{top:100*a+"%",left:100*n+"%"}},react_default.a.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:t}}))},index_module_b=function(e,r,t){return void 0===r&&(r=0),void 0===t&&(t=Math.pow(10,r)),Math.round(t*e)/t},index_module_={grad:.9,turn:360,rad:360/(2*Math.PI)},index_module_x=function(e){return"#"===e[0]&&(e=e.substr(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:1}:{r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16),a:1}},index_module_C=function(e,r){return void 0===r&&(r="deg"),Number(e)*(index_module_[r]||1)},index_module_E=function(e){var r=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return r?M({h:index_module_C(r[1],r[2]),s:Number(r[3]),l:Number(r[4]),a:void 0===r[5]?1:Number(r[5])/(r[6]?100:1)}):{h:0,s:0,v:0,a:1}},M=function(e){var r=e.s,t=e.l;return{h:e.h,s:(r*=(t<50?t:100-t)/100)>0?2*r/(t+r)*100:0,v:t+r,a:e.a}},N=function(e){var r=e.s,t=e.v,n=e.a,o=(200-r)*t/100;return{h:index_module_b(e.h),s:index_module_b(o>0&&o<200?r*t/100/(o<=100?o:200-o)*100:0),l:index_module_b(o/2),a:index_module_b(n,2)}},w=function(e){var r=N(e);return"hsl("+r.h+", "+r.s+"%, "+r.l+"%)"},y=function(e){var r=N(e);return"hsla("+r.h+", "+r.s+"%, "+r.l+"%, "+r.a+")"},q=function(e){var r=e.h,t=e.s,n=e.v,o=e.a;r=r/360*6,t/=100,n/=100;var a=Math.floor(r),l=n*(1-t),u=n*(1-(r-a)*t),c=n*(1-(1-r+a)*t),i=a%6;return{r:index_module_b(255*[n,u,l,l,c,n][i]),g:index_module_b(255*[c,n,n,u,l,l][i]),b:index_module_b(255*[l,l,c,n,n,u][i]),a:index_module_b(o,2)}},I=function(e){var r=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return r?B({r:Number(r[1])/(r[2]?100/255:1),g:Number(r[3])/(r[4]?100/255:1),b:Number(r[5])/(r[6]?100/255:1),a:void 0===r[7]?1:Number(r[7])/(r[8]?100:1)}):{h:0,s:0,v:0,a:1}},z=function(e){var r=e.toString(16);return r.length<2?"0"+r:r},B=function(e){var r=e.r,t=e.g,n=e.b,o=e.a,a=Math.max(r,t,n),l=a-Math.min(r,t,n),u=l?a===r?(t-n)/l:a===t?2+(n-r)/l:4+(r-t)/l:0;return{h:index_module_b(60*(u<0?u+6:u)),s:index_module_b(a?l/a*100:0),v:index_module_b(a/255*100),a:o}},K=react_default.a.memo((function(r){var t=r.hue,n=r.onChange,o=index_module_g(["react-colorful__hue",r.className]);return react_default.a.createElement("div",{className:o},react_default.a.createElement(index_module_m,{onMove:function(e){n({h:360*e.left})},onKey:function(e){n({h:index_module_s(t+360*e.left,0,360)})},"aria-label":"Hue","aria-valuetext":index_module_b(t)},react_default.a.createElement(index_module_p,{className:"react-colorful__hue-pointer",left:t/360,color:w({h:t,s:100,v:100,a:1})})))})),L=react_default.a.memo((function(r){var t=r.hsva,n=r.onChange,o={backgroundColor:w({h:t.h,s:100,v:100,a:1})};return react_default.a.createElement("div",{className:"react-colorful__saturation",style:o},react_default.a.createElement(index_module_m,{onMove:function(e){n({s:100*e.left,v:100-100*e.top})},onKey:function(e){n({s:index_module_s(t.s+100*e.left,0,100),v:index_module_s(t.v-100*e.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+index_module_b(t.s)+"%, Brightness "+index_module_b(t.v)+"%"},react_default.a.createElement(index_module_p,{className:"react-colorful__saturation-pointer",top:1-t.v/100,left:t.s/100,color:w(t)})))})),A=function(e,r){if(e===r)return!0;for(var t in e)if(e[t]!==r[t])return!1;return!0},S=function(e,r){return e.replace(/\s/g,"")===r.replace(/\s/g,"")};function T(e,t,l){var u=index_module_i(l),c=Object(react.useState)((function(){return e.toHsva(t)})),s=c[0],f=c[1],v=Object(react.useRef)({color:t,hsva:s});Object(react.useEffect)((function(){if(!e.equal(t,v.current.color)){var r=e.toHsva(t);v.current={hsva:r,color:t},f(r)}}),[t,e]),Object(react.useEffect)((function(){var r;A(s,v.current.hsva)||e.equal(r=e.fromHsva(s),v.current.color)||(v.current={hsva:s,color:r},u(r))}),[s,e,u]);var d=Object(react.useCallback)((function(e){f((function(r){return Object.assign({},r,e)}))}),[]);return[s,d]}var F,_ColorPicker,_fallbackColor,P="undefined"!=typeof window?react.useLayoutEffect:react.useEffect,R=new Map,V=function(e){P((function(){var r=e.current?e.current.ownerDocument:document;if(void 0!==r&&!R.has(r)){var t=r.createElement("style");t.innerHTML='.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}',R.set(r,t);var n=F||__webpack_require__.nc;n&&t.setAttribute("nonce",n),r.head.appendChild(t)}}),[])},$=function(t){var n=t.className,o=t.colorModel,a=t.color,l=void 0===a?o.defaultColor:a,i=t.onChange,s=index_module_c(t,["className","colorModel","color","onChange"]),f=Object(react.useRef)(null);V(f);var v=T(o,l,i),d=v[0],h=v[1],m=index_module_g(["react-colorful",n]);return react_default.a.createElement("div",index_module_u({},s,{ref:f,className:m}),react_default.a.createElement(L,{hsva:d,onChange:h}),react_default.a.createElement(K,{hue:d.h,onChange:h,className:"react-colorful__last-control"}))},G={defaultColor:"000",toHsva:function(e){return B(index_module_x(e))},fromHsva:function(e){return t=(r=q(e)).g,n=r.b,"#"+z(r.r)+z(t)+z(n);var r,t,n},equal:function(e,r){return e.toLowerCase()===r.toLowerCase()||A(index_module_x(e),index_module_x(r))}},Q=function(r){var t=r.className,n=r.hsva,o=r.onChange,a={backgroundImage:"linear-gradient(90deg, "+y(Object.assign({},n,{a:0}))+", "+y(Object.assign({},n,{a:1}))+")"},l=index_module_g(["react-colorful__alpha",t]);return react_default.a.createElement("div",{className:l},react_default.a.createElement("div",{className:"react-colorful__alpha-gradient",style:a}),react_default.a.createElement(index_module_m,{onMove:function(e){o({a:e.left})},onKey:function(e){o({a:index_module_s(n.a+e.left)})},"aria-label":"Alpha","aria-valuetext":index_module_b(100*n.a)+"%"},react_default.a.createElement(index_module_p,{className:"react-colorful__alpha-pointer",left:n.a,color:y(n)})))},U=function(t){var n=t.className,o=t.colorModel,a=t.color,l=void 0===a?o.defaultColor:a,i=t.onChange,s=index_module_c(t,["className","colorModel","color","onChange"]),f=Object(react.useRef)(null);V(f);var v=T(o,l,i),d=v[0],h=v[1],m=index_module_g(["react-colorful",n]);return react_default.a.createElement("div",index_module_u({},s,{ref:f,className:m}),react_default.a.createElement(L,{hsva:d,onChange:h}),react_default.a.createElement(K,{hue:d.h,onChange:h}),react_default.a.createElement(Q,{hsva:d,onChange:h,className:"react-colorful__last-control"}))},ee={defaultColor:"hsla(0, 0%, 0%, 1)",toHsva:index_module_E,fromHsva:y,equal:S},ge={defaultColor:"rgba(0, 0, 0, 1)",toHsva:I,fromHsva:function(e){var r=q(e);return"rgba("+r.r+", "+r.g+", "+r.b+", "+r.a+")"},equal:S},color_convert=__webpack_require__(527),color_convert_default=__webpack_require__.n(color_convert),throttle=__webpack_require__(458),throttle_default=__webpack_require__.n(throttle),esm=__webpack_require__(2),TooltipNote=__webpack_require__(1e3),lazy_WithTooltip=__webpack_require__(455),esm_form=__webpack_require__(66),icon=__webpack_require__(69),helpers=__webpack_require__(40);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Wrapper=esm.styled.div({position:"relative",maxWidth:250}),PickerTooltip=Object(esm.styled)(lazy_WithTooltip.a)({position:"absolute",zIndex:1,top:4,left:4}),TooltipContent=esm.styled.div({width:200,margin:5,".react-colorful__saturation":{borderRadius:"4px 4px 0 0"},".react-colorful__hue":{boxShadow:"inset 0 0 0 1px rgb(0 0 0 / 5%)"},".react-colorful__last-control":{borderRadius:"0 0 4px 4px"}}),Note=Object(esm.styled)(TooltipNote.a)((function(_ref){return{fontFamily:_ref.theme.typography.fonts.base}})),Swatches=esm.styled.div({display:"grid",gridTemplateColumns:"repeat(9, 16px)",gap:6,padding:3,marginTop:5,width:200}),SwatchColor=esm.styled.div((function(_ref2){var theme=_ref2.theme;return{width:16,height:16,boxShadow:_ref2.active?"".concat(theme.appBorderColor," 0 0 0 1px inset, ").concat(theme.color.mediumdark,"50 0 0 0 4px"):"".concat(theme.appBorderColor," 0 0 0 1px inset"),borderRadius:theme.appBorderRadius}})),Color_Swatch=function Swatch(_ref3){var value=_ref3.value,active=_ref3.active,onClick=_ref3.onClick,style=_ref3.style,props=_objectWithoutProperties(_ref3,["value","active","onClick","style"]),backgroundImage="linear-gradient(".concat(value,", ").concat(value,"), ").concat('url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')',", linear-gradient(#fff, #fff)");return react_default.a.createElement(SwatchColor,_extends({},props,{active:active,onClick:onClick,style:Object.assign({},style,{backgroundImage:backgroundImage})}))};Color_Swatch.displayName="Swatch";var ColorSpace,Input=Object(esm.styled)(esm_form.a.Input)((function(_ref4){return{width:"100%",paddingLeft:30,paddingRight:30,boxSizing:"border-box",fontFamily:_ref4.theme.typography.fonts.base}})),ToggleIcon=Object(esm.styled)(icon.a)((function(_ref5){return{position:"absolute",zIndex:1,top:6,right:7,width:20,height:20,padding:4,boxSizing:"border-box",cursor:"pointer",color:_ref5.theme.input.color}}));!function(ColorSpace){ColorSpace.RGB="rgb",ColorSpace.HSL="hsl",ColorSpace.HEX="hex"}(ColorSpace||(ColorSpace={}));var COLOR_SPACES=Object.values(ColorSpace),COLOR_REGEXP=/\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,RGB_REGEXP=/^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,HSL_REGEXP=/^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,HEX_REGEXP=/^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,SHORTHEX_REGEXP=/^\s*#?([0-9a-f]{3})\s*$/i,ColorPicker=(_defineProperty(_ColorPicker={},ColorSpace.HEX,(function(r){return react_default.a.createElement($,index_module_u({},r,{colorModel:G}))})),_defineProperty(_ColorPicker,ColorSpace.RGB,(function(r){return react_default.a.createElement(U,index_module_u({},r,{colorModel:ge}))})),_defineProperty(_ColorPicker,ColorSpace.HSL,(function(r){return react_default.a.createElement(U,index_module_u({},r,{colorModel:ee}))})),_ColorPicker),fallbackColor=(_defineProperty(_fallbackColor={},ColorSpace.HEX,"transparent"),_defineProperty(_fallbackColor,ColorSpace.RGB,"rgba(0, 0, 0, 0)"),_defineProperty(_fallbackColor,ColorSpace.HSL,"hsla(0, 0%, 0%, 0)"),_fallbackColor),stringToArgs=function stringToArgs(value){var match=null==value?void 0:value.match(COLOR_REGEXP);if(!match)return[0,0,0,1];var _match=_slicedToArray(match,5),x=_match[1],y=_match[2],z=_match[3],_match$=_match[4];return[x,y,z,void 0===_match$?1:_match$].map(Number)},Color_parseValue=function parseValue(value){var _ref12;if(value){var valid=!0;if(RGB_REGEXP.test(value)){var _ref8,_stringToArgs2=_slicedToArray(stringToArgs(value),4),r=_stringToArgs2[0],g=_stringToArgs2[1],b=_stringToArgs2[2],a=_stringToArgs2[3],_ref7=_slicedToArray(color_convert_default.a.rgb.hsl([r,g,b])||[0,0,0],3),h=_ref7[0],s=_ref7[1],l=_ref7[2];return _defineProperty(_ref8={valid:valid,value:value,keyword:color_convert_default.a.rgb.keyword([r,g,b]),colorSpace:ColorSpace.RGB},ColorSpace.RGB,value),_defineProperty(_ref8,ColorSpace.HSL,"hsla(".concat(h,", ").concat(s,"%, ").concat(l,"%, ").concat(a,")")),_defineProperty(_ref8,ColorSpace.HEX,"#".concat(color_convert_default.a.rgb.hex([r,g,b]).toLowerCase())),_ref8}if(HSL_REGEXP.test(value)){var _ref11,_stringToArgs4=_slicedToArray(stringToArgs(value),4),_h=_stringToArgs4[0],_s2=_stringToArgs4[1],_l=_stringToArgs4[2],_a=_stringToArgs4[3],_ref10=_slicedToArray(color_convert_default.a.hsl.rgb([_h,_s2,_l])||[0,0,0],3),_r=_ref10[0],_g=_ref10[1],_b=_ref10[2];return _defineProperty(_ref11={valid:valid,value:value,keyword:color_convert_default.a.hsl.keyword([_h,_s2,_l]),colorSpace:ColorSpace.HSL},ColorSpace.RGB,"rgba(".concat(_r,", ").concat(_g,", ").concat(_b,", ").concat(_a,")")),_defineProperty(_ref11,ColorSpace.HSL,value),_defineProperty(_ref11,ColorSpace.HEX,"#".concat(color_convert_default.a.hsl.hex([_h,_s2,_l]).toLowerCase())),_ref11}var plain=value.replace("#",""),rgb=color_convert_default.a.keyword.rgb(plain)||color_convert_default.a.hex.rgb(plain),hsl=color_convert_default.a.rgb.hsl(rgb),mapped=value;if(/[^#a-f0-9]/i.test(value)?mapped=plain:HEX_REGEXP.test(value)&&(mapped="#".concat(plain)),mapped.startsWith("#"))valid=HEX_REGEXP.test(mapped);else try{color_convert_default.a.keyword.hex(mapped)}catch(e){valid=!1}return _defineProperty(_ref12={valid:valid,value:mapped,keyword:color_convert_default.a.rgb.keyword(rgb),colorSpace:ColorSpace.HEX},ColorSpace.RGB,"rgba(".concat(rgb[0],", ").concat(rgb[1],", ").concat(rgb[2],", 1)")),_defineProperty(_ref12,ColorSpace.HSL,"hsla(".concat(hsl[0],", ").concat(hsl[1],"%, ").concat(hsl[2],"%, 1)")),_defineProperty(_ref12,ColorSpace.HEX,mapped),_ref12}},Color_useColorInput=function useColorInput(initialValue,onChange){var _useState2=_slicedToArray(Object(react.useState)(initialValue||""),2),value=_useState2[0],setValue=_useState2[1],_useState4=_slicedToArray(Object(react.useState)((function(){return Color_parseValue(value)})),2),color=_useState4[0],setColor=_useState4[1],_useState6=_slicedToArray(Object(react.useState)((null==color?void 0:color.colorSpace)||ColorSpace.HEX),2),colorSpace=_useState6[0],setColorSpace=_useState6[1];Object(react.useEffect)((function(){void 0===initialValue&&(setValue(""),setColor(void 0),setColorSpace(ColorSpace.HEX))}),[initialValue]);var realValue=Object(react.useMemo)((function(){return function getRealValue(value,color,colorSpace){if(!value||null==color||!color.valid)return fallbackColor[colorSpace];if(colorSpace!==ColorSpace.HEX)return(null==color?void 0:color[colorSpace])||fallbackColor[colorSpace];if(!color.hex.startsWith("#"))try{return"#".concat(color_convert_default.a.keyword.hex(color.hex))}catch(e){return fallbackColor.hex}var short=color.hex.match(SHORTHEX_REGEXP);if(!short)return HEX_REGEXP.test(color.hex)?color.hex:fallbackColor.hex;var _short$1$split2=_slicedToArray(short[1].split(""),3),r=_short$1$split2[0],g=_short$1$split2[1],b=_short$1$split2[2];return"#".concat(r).concat(r).concat(g).concat(g).concat(b).concat(b)}(value,color,colorSpace).toLowerCase()}),[value,color,colorSpace]),updateValue=Object(react.useCallback)((function(update){var parsed=Color_parseValue(update);setValue((null==parsed?void 0:parsed.value)||update||""),parsed&&(setColor(parsed),setColorSpace(parsed.colorSpace),onChange(parsed.value))}),[onChange]),cycleColorSpace=Object(react.useCallback)((function(){var next=COLOR_SPACES.indexOf(colorSpace)+1;next>=COLOR_SPACES.length&&(next=0),setColorSpace(COLOR_SPACES[next]);var update=(null==color?void 0:color[COLOR_SPACES[next]])||"";setValue(update),onChange(update)}),[color,colorSpace,onChange]);return{value:value,realValue:realValue,updateValue:updateValue,color:color,colorSpace:colorSpace,cycleColorSpace:cycleColorSpace}},id=function id(value){return value.replace(/\s*/,"").toLowerCase()},Color_ColorControl=function ColorControl(_ref13){var name=_ref13.name,initialValue=_ref13.value,onChange=_ref13.onChange,onFocus=_ref13.onFocus,onBlur=_ref13.onBlur,presetColors=_ref13.presetColors,startOpen=_ref13.startOpen,_useColorInput=Color_useColorInput(initialValue,throttle_default()(onChange,200)),value=_useColorInput.value,realValue=_useColorInput.realValue,updateValue=_useColorInput.updateValue,color=_useColorInput.color,colorSpace=_useColorInput.colorSpace,cycleColorSpace=_useColorInput.cycleColorSpace,_usePresets=function usePresets(presetColors,currentColor,colorSpace){var _useState8=_slicedToArray(Object(react.useState)(null!=currentColor&&currentColor.valid?[currentColor]:[]),2),selectedColors=_useState8[0],setSelectedColors=_useState8[1];Object(react.useEffect)((function(){void 0===currentColor&&setSelectedColors([])}),[currentColor]);var presets=Object(react.useMemo)((function(){return(presetColors||[]).map((function(preset){return"string"==typeof preset?Color_parseValue(preset):preset.title?Object.assign({},Color_parseValue(preset.color),{keyword:preset.title}):Color_parseValue(preset.color)})).concat(selectedColors).filter(Boolean).slice(-27)}),[presetColors,selectedColors]),addPreset=Object(react.useCallback)((function(color){null!=color&&color.valid&&(presets.some((function(preset){return id(preset[colorSpace])===id(color[colorSpace])}))||setSelectedColors((function(arr){return arr.concat(color)})))}),[colorSpace,presets]);return{presets:presets,addPreset:addPreset}}(presetColors,color,colorSpace),presets=_usePresets.presets,addPreset=_usePresets.addPreset,Picker=ColorPicker[colorSpace];return react_default.a.createElement(Wrapper,null,react_default.a.createElement(PickerTooltip,{trigger:"click",startOpen:startOpen,closeOnClick:!0,onVisibilityChange:function onVisibilityChange(){return addPreset(color)},tooltip:react_default.a.createElement(TooltipContent,null,react_default.a.createElement(Picker,{color:"transparent"===realValue?"#000000":realValue,onChange:updateValue,onFocus:onFocus,onBlur:onBlur}),presets.length>0&&react_default.a.createElement(Swatches,null,presets.map((function(preset,index){return react_default.a.createElement(lazy_WithTooltip.a,{key:"".concat(preset.value,"-").concat(index),hasChrome:!1,tooltip:react_default.a.createElement(Note,{note:preset.keyword||preset.value})},react_default.a.createElement(Color_Swatch,{value:preset[colorSpace],active:color&&id(preset[colorSpace])===id(color[colorSpace]),onClick:function onClick(){return updateValue(preset.value)}}))}))))},react_default.a.createElement(Color_Swatch,{value:realValue,style:{margin:4}})),react_default.a.createElement(Input,{id:Object(helpers.a)(name),value:value,onChange:function onChange(e){return updateValue(e.target.value)},onFocus:function onFocus(e){return e.target.select()},placeholder:"Choose color..."}),value?react_default.a.createElement(ToggleIcon,{icon:"markup",onClick:cycleColorSpace}):null)};Color_ColorControl.displayName="ColorControl";__webpack_exports__.default=Color_ColorControl}}]);