function Lg(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Dg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Z={},Mg={get exports(){return Z},set exports(e){Z=e}},ds={},I={},bg={get exports(){return I},set exports(e){I=e}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oi=Symbol.for("react.element"),$g=Symbol.for("react.portal"),Ug=Symbol.for("react.fragment"),zg=Symbol.for("react.strict_mode"),Fg=Symbol.for("react.profiler"),jg=Symbol.for("react.provider"),Bg=Symbol.for("react.context"),Vg=Symbol.for("react.forward_ref"),Hg=Symbol.for("react.suspense"),Wg=Symbol.for("react.memo"),Gg=Symbol.for("react.lazy"),Pc=Symbol.iterator;function Kg(e){return e===null||typeof e!="object"?null:(e=Pc&&e[Pc]||e["@@iterator"],typeof e=="function"?e:null)}var Ff={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jf=Object.assign,Bf={};function Or(e,t,n){this.props=e,this.context=t,this.refs=Bf,this.updater=n||Ff}Or.prototype.isReactComponent={};Or.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Or.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Vf(){}Vf.prototype=Or.prototype;function ou(e,t,n){this.props=e,this.context=t,this.refs=Bf,this.updater=n||Ff}var su=ou.prototype=new Vf;su.constructor=ou;jf(su,Or.prototype);su.isPureReactComponent=!0;var Ac=Array.isArray,Hf=Object.prototype.hasOwnProperty,au={current:null},Wf={key:!0,ref:!0,__self:!0,__source:!0};function Gf(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Hf.call(t,r)&&!Wf.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Oi,type:e,key:o,ref:s,props:i,_owner:au.current}}function Qg(e,t){return{$$typeof:Oi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function lu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Oi}function Yg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Oc=/\/+/g;function oa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Yg(""+e.key):t.toString(36)}function uo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Oi:case $g:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+oa(s,0):r,Ac(i)?(n="",e!=null&&(n=e.replace(Oc,"$&/")+"/"),uo(i,t,n,"",function(u){return u})):i!=null&&(lu(i)&&(i=Qg(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Oc,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Ac(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+oa(o,a);s+=uo(o,t,n,l,i)}else if(l=Kg(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+oa(o,a++),s+=uo(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Vi(e,t,n){if(e==null)return e;var r=[],i=0;return uo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function qg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ue={current:null},co={transition:null},Jg={ReactCurrentDispatcher:Ue,ReactCurrentBatchConfig:co,ReactCurrentOwner:au};B.Children={map:Vi,forEach:function(e,t,n){Vi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Vi(e,function(){t++}),t},toArray:function(e){return Vi(e,function(t){return t})||[]},only:function(e){if(!lu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=Or;B.Fragment=Ug;B.Profiler=Fg;B.PureComponent=ou;B.StrictMode=zg;B.Suspense=Hg;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jg;B.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=jf({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=au.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Hf.call(t,l)&&!Wf.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Oi,type:e.type,key:i,ref:o,props:r,_owner:s}};B.createContext=function(e){return e={$$typeof:Bg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:jg,_context:e},e.Consumer=e};B.createElement=Gf;B.createFactory=function(e){var t=Gf.bind(null,e);return t.type=e,t};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:Vg,render:e}};B.isValidElement=lu;B.lazy=function(e){return{$$typeof:Gg,_payload:{_status:-1,_result:e},_init:qg}};B.memo=function(e,t){return{$$typeof:Wg,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=co.transition;co.transition={};try{e()}finally{co.transition=t}};B.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};B.useCallback=function(e,t){return Ue.current.useCallback(e,t)};B.useContext=function(e){return Ue.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return Ue.current.useDeferredValue(e)};B.useEffect=function(e,t){return Ue.current.useEffect(e,t)};B.useId=function(){return Ue.current.useId()};B.useImperativeHandle=function(e,t,n){return Ue.current.useImperativeHandle(e,t,n)};B.useInsertionEffect=function(e,t){return Ue.current.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return Ue.current.useLayoutEffect(e,t)};B.useMemo=function(e,t){return Ue.current.useMemo(e,t)};B.useReducer=function(e,t,n){return Ue.current.useReducer(e,t,n)};B.useRef=function(e){return Ue.current.useRef(e)};B.useState=function(e){return Ue.current.useState(e)};B.useSyncExternalStore=function(e,t,n){return Ue.current.useSyncExternalStore(e,t,n)};B.useTransition=function(){return Ue.current.useTransition()};B.version="18.2.0";(function(e){e.exports=B})(bg);const _n=Dg(I),Wa=Lg({__proto__:null,default:_n},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xg=I,Zg=Symbol.for("react.element"),ev=Symbol.for("react.fragment"),tv=Object.prototype.hasOwnProperty,nv=Xg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rv={key:!0,ref:!0,__self:!0,__source:!0};function Kf(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)tv.call(t,r)&&!rv.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Zg,type:e,key:o,ref:s,props:i,_owner:nv.current}}ds.Fragment=ev;ds.jsx=Kf;ds.jsxs=Kf;(function(e){e.exports=ds})(Mg);var Ga={},Ka={},iv={get exports(){return Ka},set exports(e){Ka=e}},Xe={},Qa={},ov={get exports(){return Qa},set exports(e){Qa=e}},Qf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,D){var b=C.length;C.push(D);e:for(;0<b;){var X=b-1>>>1,x=C[X];if(0<i(x,D))C[X]=D,C[b]=x,b=X;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var D=C[0],b=C.pop();if(b!==D){C[0]=b;e:for(var X=0,x=C.length,A=x>>>1;X<A;){var N=2*(X+1)-1,$=C[N],g=N+1,V=C[g];if(0>i($,b))g<x&&0>i(V,$)?(C[X]=V,C[g]=b,X=g):(C[X]=$,C[N]=b,X=N);else if(g<x&&0>i(V,b))C[X]=V,C[g]=b,X=g;else break e}}return D}function i(C,D){var b=C.sortIndex-D.sortIndex;return b!==0?b:C.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],d=1,h=null,m=3,y=!1,_=!1,v=!1,S=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(C){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=C)r(u),D.sortIndex=D.expirationTime,t(l,D);else break;D=n(u)}}function w(C){if(v=!1,p(C),!_)if(n(l)!==null)_=!0,Pt(E);else{var D=n(u);D!==null&&Me(w,D.startTime-C)}}function E(C,D){_=!1,v&&(v=!1,f(P),P=-1),y=!0;var b=m;try{for(p(D),h=n(l);h!==null&&(!(h.expirationTime>D)||C&&!ve());){var X=h.callback;if(typeof X=="function"){h.callback=null,m=h.priorityLevel;var x=X(h.expirationTime<=D);D=e.unstable_now(),typeof x=="function"?h.callback=x:h===n(l)&&r(l),p(D)}else r(l);h=n(l)}if(h!==null)var A=!0;else{var N=n(u);N!==null&&Me(w,N.startTime-D),A=!1}return A}finally{h=null,m=b,y=!1}}var R=!1,O=null,P=-1,j=5,M=-1;function ve(){return!(e.unstable_now()-M<j)}function pe(){if(O!==null){var C=e.unstable_now();M=C;var D=!0;try{D=O(!0,C)}finally{D?Se():(R=!1,O=null)}}else R=!1}var Se;if(typeof c=="function")Se=function(){c(pe)};else if(typeof MessageChannel<"u"){var Ge=new MessageChannel,Re=Ge.port2;Ge.port1.onmessage=pe,Se=function(){Re.postMessage(null)}}else Se=function(){S(pe,0)};function Pt(C){O=C,R||(R=!0,Se())}function Me(C,D){P=S(function(){C(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){_||y||(_=!0,Pt(E))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(C){switch(m){case 1:case 2:case 3:var D=3;break;default:D=m}var b=m;m=D;try{return C()}finally{m=b}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,D){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var b=m;m=C;try{return D()}finally{m=b}},e.unstable_scheduleCallback=function(C,D,b){var X=e.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?X+b:X):b=X,C){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=b+x,C={id:d++,callback:D,priorityLevel:C,startTime:b,expirationTime:x,sortIndex:-1},b>X?(C.sortIndex=b,t(u,C),n(l)===null&&C===n(u)&&(v?(f(P),P=-1):v=!0,Me(w,b-X))):(C.sortIndex=x,t(l,C),_||y||(_=!0,Pt(E))),C},e.unstable_shouldYield=ve,e.unstable_wrapCallback=function(C){var D=m;return function(){var b=m;m=D;try{return C.apply(this,arguments)}finally{m=b}}}})(Qf);(function(e){e.exports=Qf})(ov);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yf=I,Je=Qa;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qf=new Set,ci={};function Qn(e,t){_r(e,t),_r(e+"Capture",t)}function _r(e,t){for(ci[e]=t,e=0;e<t.length;e++)qf.add(t[e])}var $t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ya=Object.prototype.hasOwnProperty,sv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Nc={},Lc={};function av(e){return Ya.call(Lc,e)?!0:Ya.call(Nc,e)?!1:sv.test(e)?Lc[e]=!0:(Nc[e]=!0,!1)}function lv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function uv(e,t,n,r){if(t===null||typeof t>"u"||lv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ze(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){xe[e]=new ze(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];xe[t]=new ze(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){xe[e]=new ze(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){xe[e]=new ze(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){xe[e]=new ze(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){xe[e]=new ze(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){xe[e]=new ze(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){xe[e]=new ze(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){xe[e]=new ze(e,5,!1,e.toLowerCase(),null,!1,!1)});var uu=/[\-:]([a-z])/g;function cu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(uu,cu);xe[t]=new ze(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(uu,cu);xe[t]=new ze(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(uu,cu);xe[t]=new ze(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){xe[e]=new ze(e,1,!1,e.toLowerCase(),null,!1,!1)});xe.xlinkHref=new ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){xe[e]=new ze(e,1,!1,e.toLowerCase(),null,!0,!0)});function du(e,t,n,r){var i=xe.hasOwnProperty(t)?xe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(uv(t,n,i,r)&&(n=null),r||i===null?av(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Vt=Yf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Hi=Symbol.for("react.element"),Xn=Symbol.for("react.portal"),Zn=Symbol.for("react.fragment"),fu=Symbol.for("react.strict_mode"),qa=Symbol.for("react.profiler"),Jf=Symbol.for("react.provider"),Xf=Symbol.for("react.context"),hu=Symbol.for("react.forward_ref"),Ja=Symbol.for("react.suspense"),Xa=Symbol.for("react.suspense_list"),pu=Symbol.for("react.memo"),Qt=Symbol.for("react.lazy"),Zf=Symbol.for("react.offscreen"),Dc=Symbol.iterator;function Fr(e){return e===null||typeof e!="object"?null:(e=Dc&&e[Dc]||e["@@iterator"],typeof e=="function"?e:null)}var ae=Object.assign,sa;function Qr(e){if(sa===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);sa=t&&t[1]||""}return`
`+sa+e}var aa=!1;function la(e,t){if(!e||aa)return"";aa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{aa=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Qr(e):""}function cv(e){switch(e.tag){case 5:return Qr(e.type);case 16:return Qr("Lazy");case 13:return Qr("Suspense");case 19:return Qr("SuspenseList");case 0:case 2:case 15:return e=la(e.type,!1),e;case 11:return e=la(e.type.render,!1),e;case 1:return e=la(e.type,!0),e;default:return""}}function Za(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Zn:return"Fragment";case Xn:return"Portal";case qa:return"Profiler";case fu:return"StrictMode";case Ja:return"Suspense";case Xa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Xf:return(e.displayName||"Context")+".Consumer";case Jf:return(e._context.displayName||"Context")+".Provider";case hu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case pu:return t=e.displayName||null,t!==null?t:Za(e.type)||"Memo";case Qt:t=e._payload,e=e._init;try{return Za(e(t))}catch{}}return null}function dv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Za(t);case 8:return t===fu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function yn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function eh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function fv(e){var t=eh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Wi(e){e._valueTracker||(e._valueTracker=fv(e))}function th(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=eh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function xo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function el(e,t){var n=t.checked;return ae({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Mc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=yn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function nh(e,t){t=t.checked,t!=null&&du(e,"checked",t,!1)}function tl(e,t){nh(e,t);var n=yn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?nl(e,t.type,n):t.hasOwnProperty("defaultValue")&&nl(e,t.type,yn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function bc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function nl(e,t,n){(t!=="number"||xo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Yr=Array.isArray;function fr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+yn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function rl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return ae({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function $c(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(Yr(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:yn(n)}}function rh(e,t){var n=yn(t.value),r=yn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Uc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ih(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function il(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ih(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Gi,oh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Gi=Gi||document.createElement("div"),Gi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Gi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function di(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Xr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hv=["Webkit","ms","Moz","O"];Object.keys(Xr).forEach(function(e){hv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Xr[t]=Xr[e]})});function sh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Xr.hasOwnProperty(e)&&Xr[e]?(""+t).trim():t+"px"}function ah(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=sh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var pv=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ol(e,t){if(t){if(pv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function sl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var al=null;function mu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ll=null,hr=null,pr=null;function zc(e){if(e=Di(e)){if(typeof ll!="function")throw Error(k(280));var t=e.stateNode;t&&(t=gs(t),ll(e.stateNode,e.type,t))}}function lh(e){hr?pr?pr.push(e):pr=[e]:hr=e}function uh(){if(hr){var e=hr,t=pr;if(pr=hr=null,zc(e),t)for(e=0;e<t.length;e++)zc(t[e])}}function ch(e,t){return e(t)}function dh(){}var ua=!1;function fh(e,t,n){if(ua)return e(t,n);ua=!0;try{return ch(e,t,n)}finally{ua=!1,(hr!==null||pr!==null)&&(dh(),uh())}}function fi(e,t){var n=e.stateNode;if(n===null)return null;var r=gs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var ul=!1;if($t)try{var jr={};Object.defineProperty(jr,"passive",{get:function(){ul=!0}}),window.addEventListener("test",jr,jr),window.removeEventListener("test",jr,jr)}catch{ul=!1}function mv(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Zr=!1,Ro=null,Po=!1,cl=null,gv={onError:function(e){Zr=!0,Ro=e}};function vv(e,t,n,r,i,o,s,a,l){Zr=!1,Ro=null,mv.apply(gv,arguments)}function yv(e,t,n,r,i,o,s,a,l){if(vv.apply(this,arguments),Zr){if(Zr){var u=Ro;Zr=!1,Ro=null}else throw Error(k(198));Po||(Po=!0,cl=u)}}function Yn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function hh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Fc(e){if(Yn(e)!==e)throw Error(k(188))}function wv(e){var t=e.alternate;if(!t){if(t=Yn(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Fc(i),e;if(o===r)return Fc(i),t;o=o.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function ph(e){return e=wv(e),e!==null?mh(e):null}function mh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=mh(e);if(t!==null)return t;e=e.sibling}return null}var gh=Je.unstable_scheduleCallback,jc=Je.unstable_cancelCallback,_v=Je.unstable_shouldYield,Sv=Je.unstable_requestPaint,de=Je.unstable_now,Ev=Je.unstable_getCurrentPriorityLevel,gu=Je.unstable_ImmediatePriority,vh=Je.unstable_UserBlockingPriority,Ao=Je.unstable_NormalPriority,kv=Je.unstable_LowPriority,yh=Je.unstable_IdlePriority,fs=null,St=null;function Iv(e){if(St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(fs,e,void 0,(e.current.flags&128)===128)}catch{}}var pt=Math.clz32?Math.clz32:xv,Cv=Math.log,Tv=Math.LN2;function xv(e){return e>>>=0,e===0?32:31-(Cv(e)/Tv|0)|0}var Ki=64,Qi=4194304;function qr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Oo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=qr(a):(o&=s,o!==0&&(r=qr(o)))}else s=n&~i,s!==0?r=qr(s):o!==0&&(r=qr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-pt(t),i=1<<n,r|=e[n],t&=~i;return r}function Rv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pv(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-pt(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=Rv(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function dl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function wh(){var e=Ki;return Ki<<=1,!(Ki&4194240)&&(Ki=64),e}function ca(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ni(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-pt(t),e[t]=n}function Av(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-pt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function vu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-pt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Y=0;function _h(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Sh,yu,Eh,kh,Ih,fl=!1,Yi=[],sn=null,an=null,ln=null,hi=new Map,pi=new Map,qt=[],Ov="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bc(e,t){switch(e){case"focusin":case"focusout":sn=null;break;case"dragenter":case"dragleave":an=null;break;case"mouseover":case"mouseout":ln=null;break;case"pointerover":case"pointerout":hi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":pi.delete(t.pointerId)}}function Br(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Di(t),t!==null&&yu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Nv(e,t,n,r,i){switch(t){case"focusin":return sn=Br(sn,e,t,n,r,i),!0;case"dragenter":return an=Br(an,e,t,n,r,i),!0;case"mouseover":return ln=Br(ln,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return hi.set(o,Br(hi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,pi.set(o,Br(pi.get(o)||null,e,t,n,r,i)),!0}return!1}function Ch(e){var t=Pn(e.target);if(t!==null){var n=Yn(t);if(n!==null){if(t=n.tag,t===13){if(t=hh(n),t!==null){e.blockedOn=t,Ih(e.priority,function(){Eh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=hl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);al=r,n.target.dispatchEvent(r),al=null}else return t=Di(n),t!==null&&yu(t),e.blockedOn=n,!1;t.shift()}return!0}function Vc(e,t,n){fo(e)&&n.delete(t)}function Lv(){fl=!1,sn!==null&&fo(sn)&&(sn=null),an!==null&&fo(an)&&(an=null),ln!==null&&fo(ln)&&(ln=null),hi.forEach(Vc),pi.forEach(Vc)}function Vr(e,t){e.blockedOn===t&&(e.blockedOn=null,fl||(fl=!0,Je.unstable_scheduleCallback(Je.unstable_NormalPriority,Lv)))}function mi(e){function t(i){return Vr(i,e)}if(0<Yi.length){Vr(Yi[0],e);for(var n=1;n<Yi.length;n++){var r=Yi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(sn!==null&&Vr(sn,e),an!==null&&Vr(an,e),ln!==null&&Vr(ln,e),hi.forEach(t),pi.forEach(t),n=0;n<qt.length;n++)r=qt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<qt.length&&(n=qt[0],n.blockedOn===null);)Ch(n),n.blockedOn===null&&qt.shift()}var mr=Vt.ReactCurrentBatchConfig,No=!0;function Dv(e,t,n,r){var i=Y,o=mr.transition;mr.transition=null;try{Y=1,wu(e,t,n,r)}finally{Y=i,mr.transition=o}}function Mv(e,t,n,r){var i=Y,o=mr.transition;mr.transition=null;try{Y=4,wu(e,t,n,r)}finally{Y=i,mr.transition=o}}function wu(e,t,n,r){if(No){var i=hl(e,t,n,r);if(i===null)_a(e,t,r,Lo,n),Bc(e,r);else if(Nv(i,e,t,n,r))r.stopPropagation();else if(Bc(e,r),t&4&&-1<Ov.indexOf(e)){for(;i!==null;){var o=Di(i);if(o!==null&&Sh(o),o=hl(e,t,n,r),o===null&&_a(e,t,r,Lo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else _a(e,t,r,null,n)}}var Lo=null;function hl(e,t,n,r){if(Lo=null,e=mu(r),e=Pn(e),e!==null)if(t=Yn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=hh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Lo=e,null}function Th(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ev()){case gu:return 1;case vh:return 4;case Ao:case kv:return 16;case yh:return 536870912;default:return 16}default:return 16}}var nn=null,_u=null,ho=null;function xh(){if(ho)return ho;var e,t=_u,n=t.length,r,i="value"in nn?nn.value:nn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return ho=i.slice(e,1<r?1-r:void 0)}function po(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qi(){return!0}function Hc(){return!1}function Ze(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?qi:Hc,this.isPropagationStopped=Hc,this}return ae(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qi)},persist:function(){},isPersistent:qi}),t}var Nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Su=Ze(Nr),Li=ae({},Nr,{view:0,detail:0}),bv=Ze(Li),da,fa,Hr,hs=ae({},Li,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Eu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Hr&&(Hr&&e.type==="mousemove"?(da=e.screenX-Hr.screenX,fa=e.screenY-Hr.screenY):fa=da=0,Hr=e),da)},movementY:function(e){return"movementY"in e?e.movementY:fa}}),Wc=Ze(hs),$v=ae({},hs,{dataTransfer:0}),Uv=Ze($v),zv=ae({},Li,{relatedTarget:0}),ha=Ze(zv),Fv=ae({},Nr,{animationName:0,elapsedTime:0,pseudoElement:0}),jv=Ze(Fv),Bv=ae({},Nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Vv=Ze(Bv),Hv=ae({},Nr,{data:0}),Gc=Ze(Hv),Wv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Kv[e])?!!t[e]:!1}function Eu(){return Qv}var Yv=ae({},Li,{key:function(e){if(e.key){var t=Wv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=po(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Eu,charCode:function(e){return e.type==="keypress"?po(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?po(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),qv=Ze(Yv),Jv=ae({},hs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kc=Ze(Jv),Xv=ae({},Li,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Eu}),Zv=Ze(Xv),ey=ae({},Nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),ty=Ze(ey),ny=ae({},hs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ry=Ze(ny),iy=[9,13,27,32],ku=$t&&"CompositionEvent"in window,ei=null;$t&&"documentMode"in document&&(ei=document.documentMode);var oy=$t&&"TextEvent"in window&&!ei,Rh=$t&&(!ku||ei&&8<ei&&11>=ei),Qc=String.fromCharCode(32),Yc=!1;function Ph(e,t){switch(e){case"keyup":return iy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ah(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var er=!1;function sy(e,t){switch(e){case"compositionend":return Ah(t);case"keypress":return t.which!==32?null:(Yc=!0,Qc);case"textInput":return e=t.data,e===Qc&&Yc?null:e;default:return null}}function ay(e,t){if(er)return e==="compositionend"||!ku&&Ph(e,t)?(e=xh(),ho=_u=nn=null,er=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Rh&&t.locale!=="ko"?null:t.data;default:return null}}var ly={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ly[e.type]:t==="textarea"}function Oh(e,t,n,r){lh(r),t=Do(t,"onChange"),0<t.length&&(n=new Su("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ti=null,gi=null;function uy(e){Bh(e,0)}function ps(e){var t=rr(e);if(th(t))return e}function cy(e,t){if(e==="change")return t}var Nh=!1;if($t){var pa;if($t){var ma="oninput"in document;if(!ma){var Jc=document.createElement("div");Jc.setAttribute("oninput","return;"),ma=typeof Jc.oninput=="function"}pa=ma}else pa=!1;Nh=pa&&(!document.documentMode||9<document.documentMode)}function Xc(){ti&&(ti.detachEvent("onpropertychange",Lh),gi=ti=null)}function Lh(e){if(e.propertyName==="value"&&ps(gi)){var t=[];Oh(t,gi,e,mu(e)),fh(uy,t)}}function dy(e,t,n){e==="focusin"?(Xc(),ti=t,gi=n,ti.attachEvent("onpropertychange",Lh)):e==="focusout"&&Xc()}function fy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ps(gi)}function hy(e,t){if(e==="click")return ps(t)}function py(e,t){if(e==="input"||e==="change")return ps(t)}function my(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var vt=typeof Object.is=="function"?Object.is:my;function vi(e,t){if(vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ya.call(t,i)||!vt(e[i],t[i]))return!1}return!0}function Zc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ed(e,t){var n=Zc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zc(n)}}function Dh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Dh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Mh(){for(var e=window,t=xo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=xo(e.document)}return t}function Iu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function gy(e){var t=Mh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Dh(n.ownerDocument.documentElement,n)){if(r!==null&&Iu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=ed(n,o);var s=ed(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var vy=$t&&"documentMode"in document&&11>=document.documentMode,tr=null,pl=null,ni=null,ml=!1;function td(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ml||tr==null||tr!==xo(r)||(r=tr,"selectionStart"in r&&Iu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ni&&vi(ni,r)||(ni=r,r=Do(pl,"onSelect"),0<r.length&&(t=new Su("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=tr)))}function Ji(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var nr={animationend:Ji("Animation","AnimationEnd"),animationiteration:Ji("Animation","AnimationIteration"),animationstart:Ji("Animation","AnimationStart"),transitionend:Ji("Transition","TransitionEnd")},ga={},bh={};$t&&(bh=document.createElement("div").style,"AnimationEvent"in window||(delete nr.animationend.animation,delete nr.animationiteration.animation,delete nr.animationstart.animation),"TransitionEvent"in window||delete nr.transitionend.transition);function ms(e){if(ga[e])return ga[e];if(!nr[e])return e;var t=nr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in bh)return ga[e]=t[n];return e}var $h=ms("animationend"),Uh=ms("animationiteration"),zh=ms("animationstart"),Fh=ms("transitionend"),jh=new Map,nd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sn(e,t){jh.set(e,t),Qn(t,[e])}for(var va=0;va<nd.length;va++){var ya=nd[va],yy=ya.toLowerCase(),wy=ya[0].toUpperCase()+ya.slice(1);Sn(yy,"on"+wy)}Sn($h,"onAnimationEnd");Sn(Uh,"onAnimationIteration");Sn(zh,"onAnimationStart");Sn("dblclick","onDoubleClick");Sn("focusin","onFocus");Sn("focusout","onBlur");Sn(Fh,"onTransitionEnd");_r("onMouseEnter",["mouseout","mouseover"]);_r("onMouseLeave",["mouseout","mouseover"]);_r("onPointerEnter",["pointerout","pointerover"]);_r("onPointerLeave",["pointerout","pointerover"]);Qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_y=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jr));function rd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,yv(r,t,void 0,e),e.currentTarget=null}function Bh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;rd(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;rd(i,a,u),o=l}}}if(Po)throw e=cl,Po=!1,cl=null,e}function ne(e,t){var n=t[_l];n===void 0&&(n=t[_l]=new Set);var r=e+"__bubble";n.has(r)||(Vh(t,e,2,!1),n.add(r))}function wa(e,t,n){var r=0;t&&(r|=4),Vh(n,e,r,t)}var Xi="_reactListening"+Math.random().toString(36).slice(2);function yi(e){if(!e[Xi]){e[Xi]=!0,qf.forEach(function(n){n!=="selectionchange"&&(_y.has(n)||wa(n,!1,e),wa(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Xi]||(t[Xi]=!0,wa("selectionchange",!1,t))}}function Vh(e,t,n,r){switch(Th(t)){case 1:var i=Dv;break;case 4:i=Mv;break;default:i=wu}n=i.bind(null,t,n,e),i=void 0,!ul||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function _a(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Pn(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}fh(function(){var u=o,d=mu(n),h=[];e:{var m=jh.get(e);if(m!==void 0){var y=Su,_=e;switch(e){case"keypress":if(po(n)===0)break e;case"keydown":case"keyup":y=qv;break;case"focusin":_="focus",y=ha;break;case"focusout":_="blur",y=ha;break;case"beforeblur":case"afterblur":y=ha;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Wc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Uv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Zv;break;case $h:case Uh:case zh:y=jv;break;case Fh:y=ty;break;case"scroll":y=bv;break;case"wheel":y=ry;break;case"copy":case"cut":case"paste":y=Vv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Kc}var v=(t&4)!==0,S=!v&&e==="scroll",f=v?m!==null?m+"Capture":null:m;v=[];for(var c=u,p;c!==null;){p=c;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,f!==null&&(w=fi(c,f),w!=null&&v.push(wi(c,w,p)))),S)break;c=c.return}0<v.length&&(m=new y(m,_,null,n,d),h.push({event:m,listeners:v}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&n!==al&&(_=n.relatedTarget||n.fromElement)&&(Pn(_)||_[Ut]))break e;if((y||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,y?(_=n.relatedTarget||n.toElement,y=u,_=_?Pn(_):null,_!==null&&(S=Yn(_),_!==S||_.tag!==5&&_.tag!==6)&&(_=null)):(y=null,_=u),y!==_)){if(v=Wc,w="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(v=Kc,w="onPointerLeave",f="onPointerEnter",c="pointer"),S=y==null?m:rr(y),p=_==null?m:rr(_),m=new v(w,c+"leave",y,n,d),m.target=S,m.relatedTarget=p,w=null,Pn(d)===u&&(v=new v(f,c+"enter",_,n,d),v.target=p,v.relatedTarget=S,w=v),S=w,y&&_)t:{for(v=y,f=_,c=0,p=v;p;p=Jn(p))c++;for(p=0,w=f;w;w=Jn(w))p++;for(;0<c-p;)v=Jn(v),c--;for(;0<p-c;)f=Jn(f),p--;for(;c--;){if(v===f||f!==null&&v===f.alternate)break t;v=Jn(v),f=Jn(f)}v=null}else v=null;y!==null&&id(h,m,y,v,!1),_!==null&&S!==null&&id(h,S,_,v,!0)}}e:{if(m=u?rr(u):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var E=cy;else if(qc(m))if(Nh)E=py;else{E=fy;var R=dy}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=hy);if(E&&(E=E(e,u))){Oh(h,E,n,d);break e}R&&R(e,m,u),e==="focusout"&&(R=m._wrapperState)&&R.controlled&&m.type==="number"&&nl(m,"number",m.value)}switch(R=u?rr(u):window,e){case"focusin":(qc(R)||R.contentEditable==="true")&&(tr=R,pl=u,ni=null);break;case"focusout":ni=pl=tr=null;break;case"mousedown":ml=!0;break;case"contextmenu":case"mouseup":case"dragend":ml=!1,td(h,n,d);break;case"selectionchange":if(vy)break;case"keydown":case"keyup":td(h,n,d)}var O;if(ku)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else er?Ph(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Rh&&n.locale!=="ko"&&(er||P!=="onCompositionStart"?P==="onCompositionEnd"&&er&&(O=xh()):(nn=d,_u="value"in nn?nn.value:nn.textContent,er=!0)),R=Do(u,P),0<R.length&&(P=new Gc(P,e,null,n,d),h.push({event:P,listeners:R}),O?P.data=O:(O=Ah(n),O!==null&&(P.data=O)))),(O=oy?sy(e,n):ay(e,n))&&(u=Do(u,"onBeforeInput"),0<u.length&&(d=new Gc("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:u}),d.data=O))}Bh(h,t)})}function wi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Do(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=fi(e,n),o!=null&&r.unshift(wi(e,o,i)),o=fi(e,t),o!=null&&r.push(wi(e,o,i))),e=e.return}return r}function Jn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function id(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=fi(n,o),l!=null&&s.unshift(wi(n,l,a))):i||(l=fi(n,o),l!=null&&s.push(wi(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Sy=/\r\n?/g,Ey=/\u0000|\uFFFD/g;function od(e){return(typeof e=="string"?e:""+e).replace(Sy,`
`).replace(Ey,"")}function Zi(e,t,n){if(t=od(t),od(e)!==t&&n)throw Error(k(425))}function Mo(){}var gl=null,vl=null;function yl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wl=typeof setTimeout=="function"?setTimeout:void 0,ky=typeof clearTimeout=="function"?clearTimeout:void 0,sd=typeof Promise=="function"?Promise:void 0,Iy=typeof queueMicrotask=="function"?queueMicrotask:typeof sd<"u"?function(e){return sd.resolve(null).then(e).catch(Cy)}:wl;function Cy(e){setTimeout(function(){throw e})}function Sa(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),mi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);mi(t)}function un(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ad(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Lr=Math.random().toString(36).slice(2),_t="__reactFiber$"+Lr,_i="__reactProps$"+Lr,Ut="__reactContainer$"+Lr,_l="__reactEvents$"+Lr,Ty="__reactListeners$"+Lr,xy="__reactHandles$"+Lr;function Pn(e){var t=e[_t];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ut]||n[_t]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ad(e);e!==null;){if(n=e[_t])return n;e=ad(e)}return t}e=n,n=e.parentNode}return null}function Di(e){return e=e[_t]||e[Ut],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function rr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function gs(e){return e[_i]||null}var Sl=[],ir=-1;function En(e){return{current:e}}function re(e){0>ir||(e.current=Sl[ir],Sl[ir]=null,ir--)}function te(e,t){ir++,Sl[ir]=e.current,e.current=t}var wn={},Le=En(wn),Ve=En(!1),$n=wn;function Sr(e,t){var n=e.type.contextTypes;if(!n)return wn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function He(e){return e=e.childContextTypes,e!=null}function bo(){re(Ve),re(Le)}function ld(e,t,n){if(Le.current!==wn)throw Error(k(168));te(Le,t),te(Ve,n)}function Hh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(k(108,dv(e)||"Unknown",i));return ae({},n,r)}function $o(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||wn,$n=Le.current,te(Le,e),te(Ve,Ve.current),!0}function ud(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=Hh(e,t,$n),r.__reactInternalMemoizedMergedChildContext=e,re(Ve),re(Le),te(Le,e)):re(Ve),te(Ve,n)}var Ot=null,vs=!1,Ea=!1;function Wh(e){Ot===null?Ot=[e]:Ot.push(e)}function Ry(e){vs=!0,Wh(e)}function kn(){if(!Ea&&Ot!==null){Ea=!0;var e=0,t=Y;try{var n=Ot;for(Y=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ot=null,vs=!1}catch(i){throw Ot!==null&&(Ot=Ot.slice(e+1)),gh(gu,kn),i}finally{Y=t,Ea=!1}}return null}var or=[],sr=0,Uo=null,zo=0,tt=[],nt=0,Un=null,Nt=1,Lt="";function Cn(e,t){or[sr++]=zo,or[sr++]=Uo,Uo=e,zo=t}function Gh(e,t,n){tt[nt++]=Nt,tt[nt++]=Lt,tt[nt++]=Un,Un=e;var r=Nt;e=Lt;var i=32-pt(r)-1;r&=~(1<<i),n+=1;var o=32-pt(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Nt=1<<32-pt(t)+i|n<<i|r,Lt=o+e}else Nt=1<<o|n<<i|r,Lt=e}function Cu(e){e.return!==null&&(Cn(e,1),Gh(e,1,0))}function Tu(e){for(;e===Uo;)Uo=or[--sr],or[sr]=null,zo=or[--sr],or[sr]=null;for(;e===Un;)Un=tt[--nt],tt[nt]=null,Lt=tt[--nt],tt[nt]=null,Nt=tt[--nt],tt[nt]=null}var Ye=null,Qe=null,ie=!1,ft=null;function Kh(e,t){var n=rt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function cd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ye=e,Qe=un(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ye=e,Qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Un!==null?{id:Nt,overflow:Lt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=rt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ye=e,Qe=null,!0):!1;default:return!1}}function El(e){return(e.mode&1)!==0&&(e.flags&128)===0}function kl(e){if(ie){var t=Qe;if(t){var n=t;if(!cd(e,t)){if(El(e))throw Error(k(418));t=un(n.nextSibling);var r=Ye;t&&cd(e,t)?Kh(r,n):(e.flags=e.flags&-4097|2,ie=!1,Ye=e)}}else{if(El(e))throw Error(k(418));e.flags=e.flags&-4097|2,ie=!1,Ye=e}}}function dd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ye=e}function eo(e){if(e!==Ye)return!1;if(!ie)return dd(e),ie=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!yl(e.type,e.memoizedProps)),t&&(t=Qe)){if(El(e))throw Qh(),Error(k(418));for(;t;)Kh(e,t),t=un(t.nextSibling)}if(dd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Qe=un(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Qe=null}}else Qe=Ye?un(e.stateNode.nextSibling):null;return!0}function Qh(){for(var e=Qe;e;)e=un(e.nextSibling)}function Er(){Qe=Ye=null,ie=!1}function xu(e){ft===null?ft=[e]:ft.push(e)}var Py=Vt.ReactCurrentBatchConfig;function ct(e,t){if(e&&e.defaultProps){t=ae({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Fo=En(null),jo=null,ar=null,Ru=null;function Pu(){Ru=ar=jo=null}function Au(e){var t=Fo.current;re(Fo),e._currentValue=t}function Il(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function gr(e,t){jo=e,Ru=ar=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Be=!0),e.firstContext=null)}function ot(e){var t=e._currentValue;if(Ru!==e)if(e={context:e,memoizedValue:t,next:null},ar===null){if(jo===null)throw Error(k(308));ar=e,jo.dependencies={lanes:0,firstContext:e}}else ar=ar.next=e;return t}var An=null;function Ou(e){An===null?An=[e]:An.push(e)}function Yh(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ou(t)):(n.next=i.next,i.next=n),t.interleaved=n,zt(e,r)}function zt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Yt=!1;function Nu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function bt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function cn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,H&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,zt(e,n)}return i=r.interleaved,i===null?(t.next=t,Ou(r)):(t.next=i.next,i.next=t),r.interleaved=t,zt(e,n)}function mo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,vu(e,n)}}function fd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Bo(e,t,n,r){var i=e.updateQueue;Yt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(o!==null){var h=i.baseState;s=0,d=u=l=null,a=o;do{var m=a.lane,y=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=e,v=a;switch(m=t,y=n,v.tag){case 1:if(_=v.payload,typeof _=="function"){h=_.call(y,h,m);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,m=typeof _=="function"?_.call(y,h,m):_,m==null)break e;h=ae({},h,m);break e;case 2:Yt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else y={eventTime:y,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=y,l=h):d=d.next=y,s|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(d===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Fn|=s,e.lanes=s,e.memoizedState=h}}function hd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var Jh=new Yf.Component().refs;function Cl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ae({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ys={isMounted:function(e){return(e=e._reactInternals)?Yn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=$e(),i=fn(e),o=bt(r,i);o.payload=t,n!=null&&(o.callback=n),t=cn(e,o,i),t!==null&&(mt(t,e,i,r),mo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=$e(),i=fn(e),o=bt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=cn(e,o,i),t!==null&&(mt(t,e,i,r),mo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=$e(),r=fn(e),i=bt(n,r);i.tag=2,t!=null&&(i.callback=t),t=cn(e,i,r),t!==null&&(mt(t,e,r,n),mo(t,e,r))}};function pd(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!vi(n,r)||!vi(i,o):!0}function Xh(e,t,n){var r=!1,i=wn,o=t.contextType;return typeof o=="object"&&o!==null?o=ot(o):(i=He(t)?$n:Le.current,r=t.contextTypes,o=(r=r!=null)?Sr(e,i):wn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ys,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function md(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ys.enqueueReplaceState(t,t.state,null)}function Tl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Jh,Nu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=ot(o):(o=He(t)?$n:Le.current,i.context=Sr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Cl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ys.enqueueReplaceState(i,i.state,null),Bo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Wr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===Jh&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function to(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function gd(e){var t=e._init;return t(e._payload)}function Zh(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=hn(f,c),f.index=0,f.sibling=null,f}function o(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function s(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,c,p,w){return c===null||c.tag!==6?(c=Pa(p,f.mode,w),c.return=f,c):(c=i(c,p),c.return=f,c)}function l(f,c,p,w){var E=p.type;return E===Zn?d(f,c,p.props.children,w,p.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Qt&&gd(E)===c.type)?(w=i(c,p.props),w.ref=Wr(f,c,p),w.return=f,w):(w=So(p.type,p.key,p.props,null,f.mode,w),w.ref=Wr(f,c,p),w.return=f,w)}function u(f,c,p,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=Aa(p,f.mode,w),c.return=f,c):(c=i(c,p.children||[]),c.return=f,c)}function d(f,c,p,w,E){return c===null||c.tag!==7?(c=Mn(p,f.mode,w,E),c.return=f,c):(c=i(c,p),c.return=f,c)}function h(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Pa(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Hi:return p=So(c.type,c.key,c.props,null,f.mode,p),p.ref=Wr(f,null,c),p.return=f,p;case Xn:return c=Aa(c,f.mode,p),c.return=f,c;case Qt:var w=c._init;return h(f,w(c._payload),p)}if(Yr(c)||Fr(c))return c=Mn(c,f.mode,p,null),c.return=f,c;to(f,c)}return null}function m(f,c,p,w){var E=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return E!==null?null:a(f,c,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Hi:return p.key===E?l(f,c,p,w):null;case Xn:return p.key===E?u(f,c,p,w):null;case Qt:return E=p._init,m(f,c,E(p._payload),w)}if(Yr(p)||Fr(p))return E!==null?null:d(f,c,p,w,null);to(f,p)}return null}function y(f,c,p,w,E){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(p)||null,a(c,f,""+w,E);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Hi:return f=f.get(w.key===null?p:w.key)||null,l(c,f,w,E);case Xn:return f=f.get(w.key===null?p:w.key)||null,u(c,f,w,E);case Qt:var R=w._init;return y(f,c,p,R(w._payload),E)}if(Yr(w)||Fr(w))return f=f.get(p)||null,d(c,f,w,E,null);to(c,w)}return null}function _(f,c,p,w){for(var E=null,R=null,O=c,P=c=0,j=null;O!==null&&P<p.length;P++){O.index>P?(j=O,O=null):j=O.sibling;var M=m(f,O,p[P],w);if(M===null){O===null&&(O=j);break}e&&O&&M.alternate===null&&t(f,O),c=o(M,c,P),R===null?E=M:R.sibling=M,R=M,O=j}if(P===p.length)return n(f,O),ie&&Cn(f,P),E;if(O===null){for(;P<p.length;P++)O=h(f,p[P],w),O!==null&&(c=o(O,c,P),R===null?E=O:R.sibling=O,R=O);return ie&&Cn(f,P),E}for(O=r(f,O);P<p.length;P++)j=y(O,f,P,p[P],w),j!==null&&(e&&j.alternate!==null&&O.delete(j.key===null?P:j.key),c=o(j,c,P),R===null?E=j:R.sibling=j,R=j);return e&&O.forEach(function(ve){return t(f,ve)}),ie&&Cn(f,P),E}function v(f,c,p,w){var E=Fr(p);if(typeof E!="function")throw Error(k(150));if(p=E.call(p),p==null)throw Error(k(151));for(var R=E=null,O=c,P=c=0,j=null,M=p.next();O!==null&&!M.done;P++,M=p.next()){O.index>P?(j=O,O=null):j=O.sibling;var ve=m(f,O,M.value,w);if(ve===null){O===null&&(O=j);break}e&&O&&ve.alternate===null&&t(f,O),c=o(ve,c,P),R===null?E=ve:R.sibling=ve,R=ve,O=j}if(M.done)return n(f,O),ie&&Cn(f,P),E;if(O===null){for(;!M.done;P++,M=p.next())M=h(f,M.value,w),M!==null&&(c=o(M,c,P),R===null?E=M:R.sibling=M,R=M);return ie&&Cn(f,P),E}for(O=r(f,O);!M.done;P++,M=p.next())M=y(O,f,P,M.value,w),M!==null&&(e&&M.alternate!==null&&O.delete(M.key===null?P:M.key),c=o(M,c,P),R===null?E=M:R.sibling=M,R=M);return e&&O.forEach(function(pe){return t(f,pe)}),ie&&Cn(f,P),E}function S(f,c,p,w){if(typeof p=="object"&&p!==null&&p.type===Zn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Hi:e:{for(var E=p.key,R=c;R!==null;){if(R.key===E){if(E=p.type,E===Zn){if(R.tag===7){n(f,R.sibling),c=i(R,p.props.children),c.return=f,f=c;break e}}else if(R.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Qt&&gd(E)===R.type){n(f,R.sibling),c=i(R,p.props),c.ref=Wr(f,R,p),c.return=f,f=c;break e}n(f,R);break}else t(f,R);R=R.sibling}p.type===Zn?(c=Mn(p.props.children,f.mode,w,p.key),c.return=f,f=c):(w=So(p.type,p.key,p.props,null,f.mode,w),w.ref=Wr(f,c,p),w.return=f,f=w)}return s(f);case Xn:e:{for(R=p.key;c!==null;){if(c.key===R)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=i(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=Aa(p,f.mode,w),c.return=f,f=c}return s(f);case Qt:return R=p._init,S(f,c,R(p._payload),w)}if(Yr(p))return _(f,c,p,w);if(Fr(p))return v(f,c,p,w);to(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=i(c,p),c.return=f,f=c):(n(f,c),c=Pa(p,f.mode,w),c.return=f,f=c),s(f)):n(f,c)}return S}var kr=Zh(!0),ep=Zh(!1),Mi={},Et=En(Mi),Si=En(Mi),Ei=En(Mi);function On(e){if(e===Mi)throw Error(k(174));return e}function Lu(e,t){switch(te(Ei,t),te(Si,e),te(Et,Mi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:il(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=il(t,e)}re(Et),te(Et,t)}function Ir(){re(Et),re(Si),re(Ei)}function tp(e){On(Ei.current);var t=On(Et.current),n=il(t,e.type);t!==n&&(te(Si,e),te(Et,n))}function Du(e){Si.current===e&&(re(Et),re(Si))}var oe=En(0);function Vo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ka=[];function Mu(){for(var e=0;e<ka.length;e++)ka[e]._workInProgressVersionPrimary=null;ka.length=0}var go=Vt.ReactCurrentDispatcher,Ia=Vt.ReactCurrentBatchConfig,zn=0,se=null,me=null,ye=null,Ho=!1,ri=!1,ki=0,Ay=0;function Ae(){throw Error(k(321))}function bu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!vt(e[n],t[n]))return!1;return!0}function $u(e,t,n,r,i,o){if(zn=o,se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,go.current=e===null||e.memoizedState===null?Dy:My,e=n(r,i),ri){o=0;do{if(ri=!1,ki=0,25<=o)throw Error(k(301));o+=1,ye=me=null,t.updateQueue=null,go.current=by,e=n(r,i)}while(ri)}if(go.current=Wo,t=me!==null&&me.next!==null,zn=0,ye=me=se=null,Ho=!1,t)throw Error(k(300));return e}function Uu(){var e=ki!==0;return ki=0,e}function wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?se.memoizedState=ye=e:ye=ye.next=e,ye}function st(){if(me===null){var e=se.alternate;e=e!==null?e.memoizedState:null}else e=me.next;var t=ye===null?se.memoizedState:ye.next;if(t!==null)ye=t,me=e;else{if(e===null)throw Error(k(310));me=e,e={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},ye===null?se.memoizedState=ye=e:ye=ye.next=e}return ye}function Ii(e,t){return typeof t=="function"?t(e):t}function Ca(e){var t=st(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=me,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var d=u.lane;if((zn&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,s=r):l=l.next=h,se.lanes|=d,Fn|=d}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,vt(r,t.memoizedState)||(Be=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,se.lanes|=o,Fn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ta(e){var t=st(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);vt(o,t.memoizedState)||(Be=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function np(){}function rp(e,t){var n=se,r=st(),i=t(),o=!vt(r.memoizedState,i);if(o&&(r.memoizedState=i,Be=!0),r=r.queue,zu(sp.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ye!==null&&ye.memoizedState.tag&1){if(n.flags|=2048,Ci(9,op.bind(null,n,r,i,t),void 0,null),we===null)throw Error(k(349));zn&30||ip(n,t,i)}return i}function ip(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=se.updateQueue,t===null?(t={lastEffect:null,stores:null},se.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function op(e,t,n,r){t.value=n,t.getSnapshot=r,ap(t)&&lp(e)}function sp(e,t,n){return n(function(){ap(t)&&lp(e)})}function ap(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!vt(e,n)}catch{return!0}}function lp(e){var t=zt(e,1);t!==null&&mt(t,e,1,-1)}function vd(e){var t=wt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:e},t.queue=e,e=e.dispatch=Ly.bind(null,se,e),[t.memoizedState,e]}function Ci(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=se.updateQueue,t===null?(t={lastEffect:null,stores:null},se.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function up(){return st().memoizedState}function vo(e,t,n,r){var i=wt();se.flags|=e,i.memoizedState=Ci(1|t,n,void 0,r===void 0?null:r)}function ws(e,t,n,r){var i=st();r=r===void 0?null:r;var o=void 0;if(me!==null){var s=me.memoizedState;if(o=s.destroy,r!==null&&bu(r,s.deps)){i.memoizedState=Ci(t,n,o,r);return}}se.flags|=e,i.memoizedState=Ci(1|t,n,o,r)}function yd(e,t){return vo(8390656,8,e,t)}function zu(e,t){return ws(2048,8,e,t)}function cp(e,t){return ws(4,2,e,t)}function dp(e,t){return ws(4,4,e,t)}function fp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hp(e,t,n){return n=n!=null?n.concat([e]):null,ws(4,4,fp.bind(null,t,e),n)}function Fu(){}function pp(e,t){var n=st();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&bu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function mp(e,t){var n=st();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&bu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function gp(e,t,n){return zn&21?(vt(n,t)||(n=wh(),se.lanes|=n,Fn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Be=!0),e.memoizedState=n)}function Oy(e,t){var n=Y;Y=n!==0&&4>n?n:4,e(!0);var r=Ia.transition;Ia.transition={};try{e(!1),t()}finally{Y=n,Ia.transition=r}}function vp(){return st().memoizedState}function Ny(e,t,n){var r=fn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},yp(e))wp(t,n);else if(n=Yh(e,t,n,r),n!==null){var i=$e();mt(n,e,r,i),_p(n,t,r)}}function Ly(e,t,n){var r=fn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(yp(e))wp(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,vt(a,s)){var l=t.interleaved;l===null?(i.next=i,Ou(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Yh(e,t,i,r),n!==null&&(i=$e(),mt(n,e,r,i),_p(n,t,r))}}function yp(e){var t=e.alternate;return e===se||t!==null&&t===se}function wp(e,t){ri=Ho=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function _p(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,vu(e,n)}}var Wo={readContext:ot,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useInsertionEffect:Ae,useLayoutEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useMutableSource:Ae,useSyncExternalStore:Ae,useId:Ae,unstable_isNewReconciler:!1},Dy={readContext:ot,useCallback:function(e,t){return wt().memoizedState=[e,t===void 0?null:t],e},useContext:ot,useEffect:yd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,vo(4194308,4,fp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return vo(4194308,4,e,t)},useInsertionEffect:function(e,t){return vo(4,2,e,t)},useMemo:function(e,t){var n=wt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=wt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ny.bind(null,se,e),[r.memoizedState,e]},useRef:function(e){var t=wt();return e={current:e},t.memoizedState=e},useState:vd,useDebugValue:Fu,useDeferredValue:function(e){return wt().memoizedState=e},useTransition:function(){var e=vd(!1),t=e[0];return e=Oy.bind(null,e[1]),wt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=se,i=wt();if(ie){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),we===null)throw Error(k(349));zn&30||ip(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,yd(sp.bind(null,r,o,e),[e]),r.flags|=2048,Ci(9,op.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=wt(),t=we.identifierPrefix;if(ie){var n=Lt,r=Nt;n=(r&~(1<<32-pt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ki++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ay++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},My={readContext:ot,useCallback:pp,useContext:ot,useEffect:zu,useImperativeHandle:hp,useInsertionEffect:cp,useLayoutEffect:dp,useMemo:mp,useReducer:Ca,useRef:up,useState:function(){return Ca(Ii)},useDebugValue:Fu,useDeferredValue:function(e){var t=st();return gp(t,me.memoizedState,e)},useTransition:function(){var e=Ca(Ii)[0],t=st().memoizedState;return[e,t]},useMutableSource:np,useSyncExternalStore:rp,useId:vp,unstable_isNewReconciler:!1},by={readContext:ot,useCallback:pp,useContext:ot,useEffect:zu,useImperativeHandle:hp,useInsertionEffect:cp,useLayoutEffect:dp,useMemo:mp,useReducer:Ta,useRef:up,useState:function(){return Ta(Ii)},useDebugValue:Fu,useDeferredValue:function(e){var t=st();return me===null?t.memoizedState=e:gp(t,me.memoizedState,e)},useTransition:function(){var e=Ta(Ii)[0],t=st().memoizedState;return[e,t]},useMutableSource:np,useSyncExternalStore:rp,useId:vp,unstable_isNewReconciler:!1};function Cr(e,t){try{var n="",r=t;do n+=cv(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function xa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function xl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var $y=typeof WeakMap=="function"?WeakMap:Map;function Sp(e,t,n){n=bt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ko||(Ko=!0,$l=r),xl(e,t)},n}function Ep(e,t,n){n=bt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){xl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){xl(e,t),typeof r!="function"&&(dn===null?dn=new Set([this]):dn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function wd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new $y;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Jy.bind(null,e,t,n),t.then(e,e))}function _d(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Sd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=bt(-1,1),t.tag=2,cn(n,t,1))),n.lanes|=1),e)}var Uy=Vt.ReactCurrentOwner,Be=!1;function be(e,t,n,r){t.child=e===null?ep(t,null,n,r):kr(t,e.child,n,r)}function Ed(e,t,n,r,i){n=n.render;var o=t.ref;return gr(t,i),r=$u(e,t,n,r,o,i),n=Uu(),e!==null&&!Be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ft(e,t,i)):(ie&&n&&Cu(t),t.flags|=1,be(e,t,r,i),t.child)}function kd(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Qu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,kp(e,t,o,r,i)):(e=So(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:vi,n(s,r)&&e.ref===t.ref)return Ft(e,t,i)}return t.flags|=1,e=hn(o,r),e.ref=t.ref,e.return=t,t.child=e}function kp(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(vi(o,r)&&e.ref===t.ref)if(Be=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Be=!0);else return t.lanes=e.lanes,Ft(e,t,i)}return Rl(e,t,n,r,i)}function Ip(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(ur,Ke),Ke|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,te(ur,Ke),Ke|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,te(ur,Ke),Ke|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,te(ur,Ke),Ke|=r;return be(e,t,i,n),t.child}function Cp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Rl(e,t,n,r,i){var o=He(n)?$n:Le.current;return o=Sr(t,o),gr(t,i),n=$u(e,t,n,r,o,i),r=Uu(),e!==null&&!Be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ft(e,t,i)):(ie&&r&&Cu(t),t.flags|=1,be(e,t,n,i),t.child)}function Id(e,t,n,r,i){if(He(n)){var o=!0;$o(t)}else o=!1;if(gr(t,i),t.stateNode===null)yo(e,t),Xh(t,n,r),Tl(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=ot(u):(u=He(n)?$n:Le.current,u=Sr(t,u));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&md(t,s,r,u),Yt=!1;var m=t.memoizedState;s.state=m,Bo(t,r,s,i),l=t.memoizedState,a!==r||m!==l||Ve.current||Yt?(typeof d=="function"&&(Cl(t,n,d,r),l=t.memoizedState),(a=Yt||pd(t,n,a,r,m,l,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,qh(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:ct(t.type,a),s.props=u,h=t.pendingProps,m=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=ot(l):(l=He(n)?$n:Le.current,l=Sr(t,l));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||m!==l)&&md(t,s,r,l),Yt=!1,m=t.memoizedState,s.state=m,Bo(t,r,s,i);var _=t.memoizedState;a!==h||m!==_||Ve.current||Yt?(typeof y=="function"&&(Cl(t,n,y,r),_=t.memoizedState),(u=Yt||pd(t,n,u,r,m,_,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,_,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,_,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=_),s.props=r,s.state=_,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Pl(e,t,n,r,o,i)}function Pl(e,t,n,r,i,o){Cp(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&ud(t,n,!1),Ft(e,t,o);r=t.stateNode,Uy.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=kr(t,e.child,null,o),t.child=kr(t,null,a,o)):be(e,t,a,o),t.memoizedState=r.state,i&&ud(t,n,!0),t.child}function Tp(e){var t=e.stateNode;t.pendingContext?ld(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ld(e,t.context,!1),Lu(e,t.containerInfo)}function Cd(e,t,n,r,i){return Er(),xu(i),t.flags|=256,be(e,t,n,r),t.child}var Al={dehydrated:null,treeContext:null,retryLane:0};function Ol(e){return{baseLanes:e,cachePool:null,transitions:null}}function xp(e,t,n){var r=t.pendingProps,i=oe.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),te(oe,i&1),e===null)return kl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Es(s,r,0,null),e=Mn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ol(n),t.memoizedState=Al,e):ju(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return zy(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=hn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=hn(a,o):(o=Mn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Ol(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Al,r}return o=e.child,e=o.sibling,r=hn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ju(e,t){return t=Es({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function no(e,t,n,r){return r!==null&&xu(r),kr(t,e.child,null,n),e=ju(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function zy(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=xa(Error(k(422))),no(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Es({mode:"visible",children:r.children},i,0,null),o=Mn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&kr(t,e.child,null,s),t.child.memoizedState=Ol(s),t.memoizedState=Al,o);if(!(t.mode&1))return no(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(k(419)),r=xa(o,r,void 0),no(e,t,s,r)}if(a=(s&e.childLanes)!==0,Be||a){if(r=we,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,zt(e,i),mt(r,e,i,-1))}return Ku(),r=xa(Error(k(421))),no(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Xy.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Qe=un(i.nextSibling),Ye=t,ie=!0,ft=null,e!==null&&(tt[nt++]=Nt,tt[nt++]=Lt,tt[nt++]=Un,Nt=e.id,Lt=e.overflow,Un=t),t=ju(t,r.children),t.flags|=4096,t)}function Td(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Il(e.return,t,n)}function Ra(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Rp(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(be(e,t,r.children,n),r=oe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Td(e,n,t);else if(e.tag===19)Td(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(te(oe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Vo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ra(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Vo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ra(t,!0,n,null,o);break;case"together":Ra(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function yo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ft(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Fn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=hn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=hn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Fy(e,t,n){switch(t.tag){case 3:Tp(t),Er();break;case 5:tp(t);break;case 1:He(t.type)&&$o(t);break;case 4:Lu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;te(Fo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(te(oe,oe.current&1),t.flags|=128,null):n&t.child.childLanes?xp(e,t,n):(te(oe,oe.current&1),e=Ft(e,t,n),e!==null?e.sibling:null);te(oe,oe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Rp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),te(oe,oe.current),r)break;return null;case 22:case 23:return t.lanes=0,Ip(e,t,n)}return Ft(e,t,n)}var Pp,Nl,Ap,Op;Pp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Nl=function(){};Ap=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,On(Et.current);var o=null;switch(n){case"input":i=el(e,i),r=el(e,r),o=[];break;case"select":i=ae({},i,{value:void 0}),r=ae({},r,{value:void 0}),o=[];break;case"textarea":i=rl(e,i),r=rl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Mo)}ol(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ci.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ci.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ne("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Op=function(e,t,n,r){n!==r&&(t.flags|=4)};function Gr(e,t){if(!ie)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function jy(e,t,n){var r=t.pendingProps;switch(Tu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(t),null;case 1:return He(t.type)&&bo(),Oe(t),null;case 3:return r=t.stateNode,Ir(),re(Ve),re(Le),Mu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(eo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ft!==null&&(Fl(ft),ft=null))),Nl(e,t),Oe(t),null;case 5:Du(t);var i=On(Ei.current);if(n=t.type,e!==null&&t.stateNode!=null)Ap(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return Oe(t),null}if(e=On(Et.current),eo(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[_t]=t,r[_i]=o,e=(t.mode&1)!==0,n){case"dialog":ne("cancel",r),ne("close",r);break;case"iframe":case"object":case"embed":ne("load",r);break;case"video":case"audio":for(i=0;i<Jr.length;i++)ne(Jr[i],r);break;case"source":ne("error",r);break;case"img":case"image":case"link":ne("error",r),ne("load",r);break;case"details":ne("toggle",r);break;case"input":Mc(r,o),ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ne("invalid",r);break;case"textarea":$c(r,o),ne("invalid",r)}ol(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Zi(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Zi(r.textContent,a,e),i=["children",""+a]):ci.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&ne("scroll",r)}switch(n){case"input":Wi(r),bc(r,o,!0);break;case"textarea":Wi(r),Uc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Mo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ih(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[_t]=t,e[_i]=r,Pp(e,t,!1,!1),t.stateNode=e;e:{switch(s=sl(n,r),n){case"dialog":ne("cancel",e),ne("close",e),i=r;break;case"iframe":case"object":case"embed":ne("load",e),i=r;break;case"video":case"audio":for(i=0;i<Jr.length;i++)ne(Jr[i],e);i=r;break;case"source":ne("error",e),i=r;break;case"img":case"image":case"link":ne("error",e),ne("load",e),i=r;break;case"details":ne("toggle",e),i=r;break;case"input":Mc(e,r),i=el(e,r),ne("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ae({},r,{value:void 0}),ne("invalid",e);break;case"textarea":$c(e,r),i=rl(e,r),ne("invalid",e);break;default:i=r}ol(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?ah(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&oh(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&di(e,l):typeof l=="number"&&di(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ci.hasOwnProperty(o)?l!=null&&o==="onScroll"&&ne("scroll",e):l!=null&&du(e,o,l,s))}switch(n){case"input":Wi(e),bc(e,r,!1);break;case"textarea":Wi(e),Uc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+yn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?fr(e,!!r.multiple,o,!1):r.defaultValue!=null&&fr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Mo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Oe(t),null;case 6:if(e&&t.stateNode!=null)Op(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=On(Ei.current),On(Et.current),eo(t)){if(r=t.stateNode,n=t.memoizedProps,r[_t]=t,(o=r.nodeValue!==n)&&(e=Ye,e!==null))switch(e.tag){case 3:Zi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Zi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[_t]=t,t.stateNode=r}return Oe(t),null;case 13:if(re(oe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ie&&Qe!==null&&t.mode&1&&!(t.flags&128))Qh(),Er(),t.flags|=98560,o=!1;else if(o=eo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(k(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(k(317));o[_t]=t}else Er(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Oe(t),o=!1}else ft!==null&&(Fl(ft),ft=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||oe.current&1?ge===0&&(ge=3):Ku())),t.updateQueue!==null&&(t.flags|=4),Oe(t),null);case 4:return Ir(),Nl(e,t),e===null&&yi(t.stateNode.containerInfo),Oe(t),null;case 10:return Au(t.type._context),Oe(t),null;case 17:return He(t.type)&&bo(),Oe(t),null;case 19:if(re(oe),o=t.memoizedState,o===null)return Oe(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Gr(o,!1);else{if(ge!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Vo(e),s!==null){for(t.flags|=128,Gr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return te(oe,oe.current&1|2),t.child}e=e.sibling}o.tail!==null&&de()>Tr&&(t.flags|=128,r=!0,Gr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Vo(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Gr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ie)return Oe(t),null}else 2*de()-o.renderingStartTime>Tr&&n!==1073741824&&(t.flags|=128,r=!0,Gr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=de(),t.sibling=null,n=oe.current,te(oe,r?n&1|2:n&1),t):(Oe(t),null);case 22:case 23:return Gu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ke&1073741824&&(Oe(t),t.subtreeFlags&6&&(t.flags|=8192)):Oe(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function By(e,t){switch(Tu(t),t.tag){case 1:return He(t.type)&&bo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ir(),re(Ve),re(Le),Mu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Du(t),null;case 13:if(re(oe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));Er()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return re(oe),null;case 4:return Ir(),null;case 10:return Au(t.type._context),null;case 22:case 23:return Gu(),null;case 24:return null;default:return null}}var ro=!1,Ne=!1,Vy=typeof WeakSet=="function"?WeakSet:Set,L=null;function lr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ue(e,t,r)}else n.current=null}function Ll(e,t,n){try{n()}catch(r){ue(e,t,r)}}var xd=!1;function Hy(e,t){if(gl=No,e=Mh(),Iu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,d=0,h=e,m=null;t:for(;;){for(var y;h!==n||i!==0&&h.nodeType!==3||(a=s+i),h!==o||r!==0&&h.nodeType!==3||(l=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(y=h.firstChild)!==null;)m=h,h=y;for(;;){if(h===e)break t;if(m===n&&++u===i&&(a=s),m===o&&++d===r&&(l=s),(y=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(vl={focusedElem:e,selectionRange:n},No=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var _=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var v=_.memoizedProps,S=_.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?v:ct(t.type,v),S);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(w){ue(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return _=xd,xd=!1,_}function ii(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ll(t,n,o)}i=i.next}while(i!==r)}}function _s(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Dl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Np(e){var t=e.alternate;t!==null&&(e.alternate=null,Np(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[_t],delete t[_i],delete t[_l],delete t[Ty],delete t[xy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Lp(e){return e.tag===5||e.tag===3||e.tag===4}function Rd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Lp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ml(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Mo));else if(r!==4&&(e=e.child,e!==null))for(Ml(e,t,n),e=e.sibling;e!==null;)Ml(e,t,n),e=e.sibling}function bl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(bl(e,t,n),e=e.sibling;e!==null;)bl(e,t,n),e=e.sibling}var Ce=null,dt=!1;function Gt(e,t,n){for(n=n.child;n!==null;)Dp(e,t,n),n=n.sibling}function Dp(e,t,n){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(fs,n)}catch{}switch(n.tag){case 5:Ne||lr(n,t);case 6:var r=Ce,i=dt;Ce=null,Gt(e,t,n),Ce=r,dt=i,Ce!==null&&(dt?(e=Ce,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ce.removeChild(n.stateNode));break;case 18:Ce!==null&&(dt?(e=Ce,n=n.stateNode,e.nodeType===8?Sa(e.parentNode,n):e.nodeType===1&&Sa(e,n),mi(e)):Sa(Ce,n.stateNode));break;case 4:r=Ce,i=dt,Ce=n.stateNode.containerInfo,dt=!0,Gt(e,t,n),Ce=r,dt=i;break;case 0:case 11:case 14:case 15:if(!Ne&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Ll(n,t,s),i=i.next}while(i!==r)}Gt(e,t,n);break;case 1:if(!Ne&&(lr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ue(n,t,a)}Gt(e,t,n);break;case 21:Gt(e,t,n);break;case 22:n.mode&1?(Ne=(r=Ne)||n.memoizedState!==null,Gt(e,t,n),Ne=r):Gt(e,t,n);break;default:Gt(e,t,n)}}function Pd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Vy),t.forEach(function(r){var i=Zy.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ut(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:Ce=a.stateNode,dt=!1;break e;case 3:Ce=a.stateNode.containerInfo,dt=!0;break e;case 4:Ce=a.stateNode.containerInfo,dt=!0;break e}a=a.return}if(Ce===null)throw Error(k(160));Dp(o,s,i),Ce=null,dt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ue(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Mp(t,e),t=t.sibling}function Mp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ut(t,e),yt(e),r&4){try{ii(3,e,e.return),_s(3,e)}catch(v){ue(e,e.return,v)}try{ii(5,e,e.return)}catch(v){ue(e,e.return,v)}}break;case 1:ut(t,e),yt(e),r&512&&n!==null&&lr(n,n.return);break;case 5:if(ut(t,e),yt(e),r&512&&n!==null&&lr(n,n.return),e.flags&32){var i=e.stateNode;try{di(i,"")}catch(v){ue(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&nh(i,o),sl(a,s);var u=sl(a,o);for(s=0;s<l.length;s+=2){var d=l[s],h=l[s+1];d==="style"?ah(i,h):d==="dangerouslySetInnerHTML"?oh(i,h):d==="children"?di(i,h):du(i,d,h,u)}switch(a){case"input":tl(i,o);break;case"textarea":rh(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?fr(i,!!o.multiple,y,!1):m!==!!o.multiple&&(o.defaultValue!=null?fr(i,!!o.multiple,o.defaultValue,!0):fr(i,!!o.multiple,o.multiple?[]:"",!1))}i[_i]=o}catch(v){ue(e,e.return,v)}}break;case 6:if(ut(t,e),yt(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){ue(e,e.return,v)}}break;case 3:if(ut(t,e),yt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{mi(t.containerInfo)}catch(v){ue(e,e.return,v)}break;case 4:ut(t,e),yt(e);break;case 13:ut(t,e),yt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Hu=de())),r&4&&Pd(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Ne=(u=Ne)||d,ut(t,e),Ne=u):ut(t,e),yt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(L=e,d=e.child;d!==null;){for(h=L=d;L!==null;){switch(m=L,y=m.child,m.tag){case 0:case 11:case 14:case 15:ii(4,m,m.return);break;case 1:lr(m,m.return);var _=m.stateNode;if(typeof _.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,_.props=t.memoizedProps,_.state=t.memoizedState,_.componentWillUnmount()}catch(v){ue(r,n,v)}}break;case 5:lr(m,m.return);break;case 22:if(m.memoizedState!==null){Od(h);continue}}y!==null?(y.return=m,L=y):Od(h)}d=d.sibling}e:for(d=null,h=e;;){if(h.tag===5){if(d===null){d=h;try{i=h.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,l=h.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=sh("display",s))}catch(v){ue(e,e.return,v)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){ue(e,e.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ut(t,e),yt(e),r&4&&Pd(e);break;case 21:break;default:ut(t,e),yt(e)}}function yt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Lp(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(di(i,""),r.flags&=-33);var o=Rd(e);bl(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Rd(e);Ml(e,a,s);break;default:throw Error(k(161))}}catch(l){ue(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Wy(e,t,n){L=e,bp(e)}function bp(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var i=L,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||ro;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ne;a=ro;var u=Ne;if(ro=s,(Ne=l)&&!u)for(L=i;L!==null;)s=L,l=s.child,s.tag===22&&s.memoizedState!==null?Nd(i):l!==null?(l.return=s,L=l):Nd(i);for(;o!==null;)L=o,bp(o),o=o.sibling;L=i,ro=a,Ne=u}Ad(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,L=o):Ad(e)}}function Ad(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ne||_s(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ne)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ct(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&hd(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}hd(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&mi(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}Ne||t.flags&512&&Dl(t)}catch(m){ue(t,t.return,m)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function Od(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function Nd(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{_s(4,t)}catch(l){ue(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ue(t,i,l)}}var o=t.return;try{Dl(t)}catch(l){ue(t,o,l)}break;case 5:var s=t.return;try{Dl(t)}catch(l){ue(t,s,l)}}}catch(l){ue(t,t.return,l)}if(t===e){L=null;break}var a=t.sibling;if(a!==null){a.return=t.return,L=a;break}L=t.return}}var Gy=Math.ceil,Go=Vt.ReactCurrentDispatcher,Bu=Vt.ReactCurrentOwner,it=Vt.ReactCurrentBatchConfig,H=0,we=null,fe=null,Te=0,Ke=0,ur=En(0),ge=0,Ti=null,Fn=0,Ss=0,Vu=0,oi=null,je=null,Hu=0,Tr=1/0,At=null,Ko=!1,$l=null,dn=null,io=!1,rn=null,Qo=0,si=0,Ul=null,wo=-1,_o=0;function $e(){return H&6?de():wo!==-1?wo:wo=de()}function fn(e){return e.mode&1?H&2&&Te!==0?Te&-Te:Py.transition!==null?(_o===0&&(_o=wh()),_o):(e=Y,e!==0||(e=window.event,e=e===void 0?16:Th(e.type)),e):1}function mt(e,t,n,r){if(50<si)throw si=0,Ul=null,Error(k(185));Ni(e,n,r),(!(H&2)||e!==we)&&(e===we&&(!(H&2)&&(Ss|=n),ge===4&&Jt(e,Te)),We(e,r),n===1&&H===0&&!(t.mode&1)&&(Tr=de()+500,vs&&kn()))}function We(e,t){var n=e.callbackNode;Pv(e,t);var r=Oo(e,e===we?Te:0);if(r===0)n!==null&&jc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&jc(n),t===1)e.tag===0?Ry(Ld.bind(null,e)):Wh(Ld.bind(null,e)),Iy(function(){!(H&6)&&kn()}),n=null;else{switch(_h(r)){case 1:n=gu;break;case 4:n=vh;break;case 16:n=Ao;break;case 536870912:n=yh;break;default:n=Ao}n=Hp(n,$p.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function $p(e,t){if(wo=-1,_o=0,H&6)throw Error(k(327));var n=e.callbackNode;if(vr()&&e.callbackNode!==n)return null;var r=Oo(e,e===we?Te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Yo(e,r);else{t=r;var i=H;H|=2;var o=zp();(we!==e||Te!==t)&&(At=null,Tr=de()+500,Dn(e,t));do try{Yy();break}catch(a){Up(e,a)}while(1);Pu(),Go.current=o,H=i,fe!==null?t=0:(we=null,Te=0,t=ge)}if(t!==0){if(t===2&&(i=dl(e),i!==0&&(r=i,t=zl(e,i))),t===1)throw n=Ti,Dn(e,0),Jt(e,r),We(e,de()),n;if(t===6)Jt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Ky(i)&&(t=Yo(e,r),t===2&&(o=dl(e),o!==0&&(r=o,t=zl(e,o))),t===1))throw n=Ti,Dn(e,0),Jt(e,r),We(e,de()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:Tn(e,je,At);break;case 3:if(Jt(e,r),(r&130023424)===r&&(t=Hu+500-de(),10<t)){if(Oo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){$e(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=wl(Tn.bind(null,e,je,At),t);break}Tn(e,je,At);break;case 4:if(Jt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-pt(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Gy(r/1960))-r,10<r){e.timeoutHandle=wl(Tn.bind(null,e,je,At),r);break}Tn(e,je,At);break;case 5:Tn(e,je,At);break;default:throw Error(k(329))}}}return We(e,de()),e.callbackNode===n?$p.bind(null,e):null}function zl(e,t){var n=oi;return e.current.memoizedState.isDehydrated&&(Dn(e,t).flags|=256),e=Yo(e,t),e!==2&&(t=je,je=n,t!==null&&Fl(t)),e}function Fl(e){je===null?je=e:je.push.apply(je,e)}function Ky(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!vt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Jt(e,t){for(t&=~Vu,t&=~Ss,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-pt(t),r=1<<n;e[n]=-1,t&=~r}}function Ld(e){if(H&6)throw Error(k(327));vr();var t=Oo(e,0);if(!(t&1))return We(e,de()),null;var n=Yo(e,t);if(e.tag!==0&&n===2){var r=dl(e);r!==0&&(t=r,n=zl(e,r))}if(n===1)throw n=Ti,Dn(e,0),Jt(e,t),We(e,de()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Tn(e,je,At),We(e,de()),null}function Wu(e,t){var n=H;H|=1;try{return e(t)}finally{H=n,H===0&&(Tr=de()+500,vs&&kn())}}function jn(e){rn!==null&&rn.tag===0&&!(H&6)&&vr();var t=H;H|=1;var n=it.transition,r=Y;try{if(it.transition=null,Y=1,e)return e()}finally{Y=r,it.transition=n,H=t,!(H&6)&&kn()}}function Gu(){Ke=ur.current,re(ur)}function Dn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ky(n)),fe!==null)for(n=fe.return;n!==null;){var r=n;switch(Tu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&bo();break;case 3:Ir(),re(Ve),re(Le),Mu();break;case 5:Du(r);break;case 4:Ir();break;case 13:re(oe);break;case 19:re(oe);break;case 10:Au(r.type._context);break;case 22:case 23:Gu()}n=n.return}if(we=e,fe=e=hn(e.current,null),Te=Ke=t,ge=0,Ti=null,Vu=Ss=Fn=0,je=oi=null,An!==null){for(t=0;t<An.length;t++)if(n=An[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}An=null}return e}function Up(e,t){do{var n=fe;try{if(Pu(),go.current=Wo,Ho){for(var r=se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ho=!1}if(zn=0,ye=me=se=null,ri=!1,ki=0,Bu.current=null,n===null||n.return===null){ge=1,Ti=t,fe=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=Te,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=_d(s);if(y!==null){y.flags&=-257,Sd(y,s,a,o,t),y.mode&1&&wd(o,u,t),t=y,l=u;var _=t.updateQueue;if(_===null){var v=new Set;v.add(l),t.updateQueue=v}else _.add(l);break e}else{if(!(t&1)){wd(o,u,t),Ku();break e}l=Error(k(426))}}else if(ie&&a.mode&1){var S=_d(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Sd(S,s,a,o,t),xu(Cr(l,a));break e}}o=l=Cr(l,a),ge!==4&&(ge=2),oi===null?oi=[o]:oi.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Sp(o,l,t);fd(o,f);break e;case 1:a=l;var c=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(dn===null||!dn.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=Ep(o,a,t);fd(o,w);break e}}o=o.return}while(o!==null)}jp(n)}catch(E){t=E,fe===n&&n!==null&&(fe=n=n.return);continue}break}while(1)}function zp(){var e=Go.current;return Go.current=Wo,e===null?Wo:e}function Ku(){(ge===0||ge===3||ge===2)&&(ge=4),we===null||!(Fn&268435455)&&!(Ss&268435455)||Jt(we,Te)}function Yo(e,t){var n=H;H|=2;var r=zp();(we!==e||Te!==t)&&(At=null,Dn(e,t));do try{Qy();break}catch(i){Up(e,i)}while(1);if(Pu(),H=n,Go.current=r,fe!==null)throw Error(k(261));return we=null,Te=0,ge}function Qy(){for(;fe!==null;)Fp(fe)}function Yy(){for(;fe!==null&&!_v();)Fp(fe)}function Fp(e){var t=Vp(e.alternate,e,Ke);e.memoizedProps=e.pendingProps,t===null?jp(e):fe=t,Bu.current=null}function jp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=By(n,t),n!==null){n.flags&=32767,fe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ge=6,fe=null;return}}else if(n=jy(n,t,Ke),n!==null){fe=n;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);ge===0&&(ge=5)}function Tn(e,t,n){var r=Y,i=it.transition;try{it.transition=null,Y=1,qy(e,t,n,r)}finally{it.transition=i,Y=r}return null}function qy(e,t,n,r){do vr();while(rn!==null);if(H&6)throw Error(k(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Av(e,o),e===we&&(fe=we=null,Te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||io||(io=!0,Hp(Ao,function(){return vr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=it.transition,it.transition=null;var s=Y;Y=1;var a=H;H|=4,Bu.current=null,Hy(e,n),Mp(n,e),gy(vl),No=!!gl,vl=gl=null,e.current=n,Wy(n),Sv(),H=a,Y=s,it.transition=o}else e.current=n;if(io&&(io=!1,rn=e,Qo=i),o=e.pendingLanes,o===0&&(dn=null),Iv(n.stateNode),We(e,de()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ko)throw Ko=!1,e=$l,$l=null,e;return Qo&1&&e.tag!==0&&vr(),o=e.pendingLanes,o&1?e===Ul?si++:(si=0,Ul=e):si=0,kn(),null}function vr(){if(rn!==null){var e=_h(Qo),t=it.transition,n=Y;try{if(it.transition=null,Y=16>e?16:e,rn===null)var r=!1;else{if(e=rn,rn=null,Qo=0,H&6)throw Error(k(331));var i=H;for(H|=4,L=e.current;L!==null;){var o=L,s=o.child;if(L.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(L=u;L!==null;){var d=L;switch(d.tag){case 0:case 11:case 15:ii(8,d,o)}var h=d.child;if(h!==null)h.return=d,L=h;else for(;L!==null;){d=L;var m=d.sibling,y=d.return;if(Np(d),d===u){L=null;break}if(m!==null){m.return=y,L=m;break}L=y}}}var _=o.alternate;if(_!==null){var v=_.child;if(v!==null){_.child=null;do{var S=v.sibling;v.sibling=null,v=S}while(v!==null)}}L=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,L=s;else e:for(;L!==null;){if(o=L,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ii(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,L=f;break e}L=o.return}}var c=e.current;for(L=c;L!==null;){s=L;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,L=p;else e:for(s=c;L!==null;){if(a=L,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:_s(9,a)}}catch(E){ue(a,a.return,E)}if(a===s){L=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,L=w;break e}L=a.return}}if(H=i,kn(),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(fs,e)}catch{}r=!0}return r}finally{Y=n,it.transition=t}}return!1}function Dd(e,t,n){t=Cr(n,t),t=Sp(e,t,1),e=cn(e,t,1),t=$e(),e!==null&&(Ni(e,1,t),We(e,t))}function ue(e,t,n){if(e.tag===3)Dd(e,e,n);else for(;t!==null;){if(t.tag===3){Dd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dn===null||!dn.has(r))){e=Cr(n,e),e=Ep(t,e,1),t=cn(t,e,1),e=$e(),t!==null&&(Ni(t,1,e),We(t,e));break}}t=t.return}}function Jy(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=$e(),e.pingedLanes|=e.suspendedLanes&n,we===e&&(Te&n)===n&&(ge===4||ge===3&&(Te&130023424)===Te&&500>de()-Hu?Dn(e,0):Vu|=n),We(e,t)}function Bp(e,t){t===0&&(e.mode&1?(t=Qi,Qi<<=1,!(Qi&130023424)&&(Qi=4194304)):t=1);var n=$e();e=zt(e,t),e!==null&&(Ni(e,t,n),We(e,n))}function Xy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Bp(e,n)}function Zy(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),Bp(e,n)}var Vp;Vp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ve.current)Be=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Be=!1,Fy(e,t,n);Be=!!(e.flags&131072)}else Be=!1,ie&&t.flags&1048576&&Gh(t,zo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;yo(e,t),e=t.pendingProps;var i=Sr(t,Le.current);gr(t,n),i=$u(null,t,r,e,i,n);var o=Uu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,He(r)?(o=!0,$o(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Nu(t),i.updater=ys,t.stateNode=i,i._reactInternals=t,Tl(t,r,e,n),t=Pl(null,t,r,!0,o,n)):(t.tag=0,ie&&o&&Cu(t),be(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(yo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=t0(r),e=ct(r,e),i){case 0:t=Rl(null,t,r,e,n);break e;case 1:t=Id(null,t,r,e,n);break e;case 11:t=Ed(null,t,r,e,n);break e;case 14:t=kd(null,t,r,ct(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),Rl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),Id(e,t,r,i,n);case 3:e:{if(Tp(t),e===null)throw Error(k(387));r=t.pendingProps,o=t.memoizedState,i=o.element,qh(e,t),Bo(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Cr(Error(k(423)),t),t=Cd(e,t,r,n,i);break e}else if(r!==i){i=Cr(Error(k(424)),t),t=Cd(e,t,r,n,i);break e}else for(Qe=un(t.stateNode.containerInfo.firstChild),Ye=t,ie=!0,ft=null,n=ep(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Er(),r===i){t=Ft(e,t,n);break e}be(e,t,r,n)}t=t.child}return t;case 5:return tp(t),e===null&&kl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,yl(r,i)?s=null:o!==null&&yl(r,o)&&(t.flags|=32),Cp(e,t),be(e,t,s,n),t.child;case 6:return e===null&&kl(t),null;case 13:return xp(e,t,n);case 4:return Lu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=kr(t,null,r,n):be(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),Ed(e,t,r,i,n);case 7:return be(e,t,t.pendingProps,n),t.child;case 8:return be(e,t,t.pendingProps.children,n),t.child;case 12:return be(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,te(Fo,r._currentValue),r._currentValue=s,o!==null)if(vt(o.value,s)){if(o.children===i.children&&!Ve.current){t=Ft(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=bt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Il(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(k(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Il(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}be(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,gr(t,n),i=ot(i),r=r(i),t.flags|=1,be(e,t,r,n),t.child;case 14:return r=t.type,i=ct(r,t.pendingProps),i=ct(r.type,i),kd(e,t,r,i,n);case 15:return kp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),yo(e,t),t.tag=1,He(r)?(e=!0,$o(t)):e=!1,gr(t,n),Xh(t,r,i),Tl(t,r,i,n),Pl(null,t,r,!0,e,n);case 19:return Rp(e,t,n);case 22:return Ip(e,t,n)}throw Error(k(156,t.tag))};function Hp(e,t){return gh(e,t)}function e0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rt(e,t,n,r){return new e0(e,t,n,r)}function Qu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function t0(e){if(typeof e=="function")return Qu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===hu)return 11;if(e===pu)return 14}return 2}function hn(e,t){var n=e.alternate;return n===null?(n=rt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function So(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Qu(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Zn:return Mn(n.children,i,o,t);case fu:s=8,i|=8;break;case qa:return e=rt(12,n,t,i|2),e.elementType=qa,e.lanes=o,e;case Ja:return e=rt(13,n,t,i),e.elementType=Ja,e.lanes=o,e;case Xa:return e=rt(19,n,t,i),e.elementType=Xa,e.lanes=o,e;case Zf:return Es(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Jf:s=10;break e;case Xf:s=9;break e;case hu:s=11;break e;case pu:s=14;break e;case Qt:s=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=rt(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Mn(e,t,n,r){return e=rt(7,e,r,t),e.lanes=n,e}function Es(e,t,n,r){return e=rt(22,e,r,t),e.elementType=Zf,e.lanes=n,e.stateNode={isHidden:!1},e}function Pa(e,t,n){return e=rt(6,e,null,t),e.lanes=n,e}function Aa(e,t,n){return t=rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function n0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ca(0),this.expirationTimes=ca(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ca(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Yu(e,t,n,r,i,o,s,a,l){return e=new n0(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=rt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nu(o),e}function r0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Wp(e){if(!e)return wn;e=e._reactInternals;e:{if(Yn(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(He(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(He(n))return Hh(e,n,t)}return t}function Gp(e,t,n,r,i,o,s,a,l){return e=Yu(n,r,!0,e,i,o,s,a,l),e.context=Wp(null),n=e.current,r=$e(),i=fn(n),o=bt(r,i),o.callback=t??null,cn(n,o,i),e.current.lanes=i,Ni(e,i,r),We(e,r),e}function ks(e,t,n,r){var i=t.current,o=$e(),s=fn(i);return n=Wp(n),t.context===null?t.context=n:t.pendingContext=n,t=bt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=cn(i,t,s),e!==null&&(mt(e,i,s,o),mo(e,i,s)),s}function qo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Md(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function qu(e,t){Md(e,t),(e=e.alternate)&&Md(e,t)}function i0(){return null}var Kp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ju(e){this._internalRoot=e}Is.prototype.render=Ju.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));ks(e,t,null,null)};Is.prototype.unmount=Ju.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jn(function(){ks(null,e,null,null)}),t[Ut]=null}};function Is(e){this._internalRoot=e}Is.prototype.unstable_scheduleHydration=function(e){if(e){var t=kh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<qt.length&&t!==0&&t<qt[n].priority;n++);qt.splice(n,0,e),n===0&&Ch(e)}};function Xu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Cs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function bd(){}function o0(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=qo(s);o.call(u)}}var s=Gp(t,r,e,0,null,!1,!1,"",bd);return e._reactRootContainer=s,e[Ut]=s.current,yi(e.nodeType===8?e.parentNode:e),jn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=qo(l);a.call(u)}}var l=Yu(e,0,!1,null,null,!1,!1,"",bd);return e._reactRootContainer=l,e[Ut]=l.current,yi(e.nodeType===8?e.parentNode:e),jn(function(){ks(t,l,n,r)}),l}function Ts(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=qo(s);a.call(l)}}ks(t,s,e,i)}else s=o0(n,t,e,i,r);return qo(s)}Sh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=qr(t.pendingLanes);n!==0&&(vu(t,n|1),We(t,de()),!(H&6)&&(Tr=de()+500,kn()))}break;case 13:jn(function(){var r=zt(e,1);if(r!==null){var i=$e();mt(r,e,1,i)}}),qu(e,1)}};yu=function(e){if(e.tag===13){var t=zt(e,134217728);if(t!==null){var n=$e();mt(t,e,134217728,n)}qu(e,134217728)}};Eh=function(e){if(e.tag===13){var t=fn(e),n=zt(e,t);if(n!==null){var r=$e();mt(n,e,t,r)}qu(e,t)}};kh=function(){return Y};Ih=function(e,t){var n=Y;try{return Y=e,t()}finally{Y=n}};ll=function(e,t,n){switch(t){case"input":if(tl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=gs(r);if(!i)throw Error(k(90));th(r),tl(r,i)}}}break;case"textarea":rh(e,n);break;case"select":t=n.value,t!=null&&fr(e,!!n.multiple,t,!1)}};ch=Wu;dh=jn;var s0={usingClientEntryPoint:!1,Events:[Di,rr,gs,lh,uh,Wu]},Kr={findFiberByHostInstance:Pn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},a0={bundleType:Kr.bundleType,version:Kr.version,rendererPackageName:Kr.rendererPackageName,rendererConfig:Kr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ph(e),e===null?null:e.stateNode},findFiberByHostInstance:Kr.findFiberByHostInstance||i0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oo.isDisabled&&oo.supportsFiber)try{fs=oo.inject(a0),St=oo}catch{}}Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=s0;Xe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xu(t))throw Error(k(200));return r0(e,t,null,n)};Xe.createRoot=function(e,t){if(!Xu(e))throw Error(k(299));var n=!1,r="",i=Kp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Yu(e,1,!1,null,null,n,!1,r,i),e[Ut]=t.current,yi(e.nodeType===8?e.parentNode:e),new Ju(t)};Xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=ph(t),e=e===null?null:e.stateNode,e};Xe.flushSync=function(e){return jn(e)};Xe.hydrate=function(e,t,n){if(!Cs(t))throw Error(k(200));return Ts(null,e,t,!0,n)};Xe.hydrateRoot=function(e,t,n){if(!Xu(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Kp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Gp(t,null,e,1,n??null,i,!1,o,s),e[Ut]=t.current,yi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Is(t)};Xe.render=function(e,t,n){if(!Cs(t))throw Error(k(200));return Ts(null,e,t,!1,n)};Xe.unmountComponentAtNode=function(e){if(!Cs(e))throw Error(k(40));return e._reactRootContainer?(jn(function(){Ts(null,null,e,!1,function(){e._reactRootContainer=null,e[Ut]=null})}),!0):!1};Xe.unstable_batchedUpdates=Wu;Xe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Cs(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Ts(e,t,n,!1,r)};Xe.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Xe})(iv);var $d=Ka;Ga.createRoot=$d.createRoot,Ga.hydrateRoot=$d.hydrateRoot;/**
 * @remix-run/router v1.3.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xi(){return xi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xi.apply(this,arguments)}var on;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(on||(on={}));const Ud="popstate";function l0(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return jl("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Jo(i)}return c0(t,n,null,e)}function he(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function u0(){return Math.random().toString(36).substr(2,8)}function zd(e,t){return{usr:e.state,key:e.key,idx:t}}function jl(e,t,n,r){return n===void 0&&(n=null),xi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Dr(t):t,{state:n,key:t&&t.key||r||u0()})}function Jo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Dr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function c0(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=on.Pop,l=null,u=d();u==null&&(u=0,s.replaceState(xi({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function h(){a=on.Pop;let S=d(),f=S==null?null:S-u;u=S,l&&l({action:a,location:v.location,delta:f})}function m(S,f){a=on.Push;let c=jl(v.location,S,f);n&&n(c,S),u=d()+1;let p=zd(c,u),w=v.createHref(c);try{s.pushState(p,"",w)}catch{i.location.assign(w)}o&&l&&l({action:a,location:v.location,delta:1})}function y(S,f){a=on.Replace;let c=jl(v.location,S,f);n&&n(c,S),u=d();let p=zd(c,u),w=v.createHref(c);s.replaceState(p,"",w),o&&l&&l({action:a,location:v.location,delta:0})}function _(S){let f=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof S=="string"?S:Jo(S);return he(f,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,f)}let v={get action(){return a},get location(){return e(i,s)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Ud,h),l=S,()=>{i.removeEventListener(Ud,h),l=null}},createHref(S){return t(i,S)},createURL:_,encodeLocation(S){let f=_(S);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:m,replace:y,go(S){return s.go(S)}};return v}var Fd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Fd||(Fd={}));function d0(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Dr(t):t,i=Zu(r.pathname||"/",n);if(i==null)return null;let o=Qp(e);f0(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=S0(o[a],I0(i));return s}function Qp(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(he(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=pn([r,l.relativePath]),d=n.concat(l);o.children&&o.children.length>0&&(he(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Qp(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:w0(u,o.index),routesMeta:d})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of Yp(o.path))i(o,s,l)}),t}function Yp(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=Yp(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function f0(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:_0(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const h0=/^:\w+$/,p0=3,m0=2,g0=1,v0=10,y0=-2,jd=e=>e==="*";function w0(e,t){let n=e.split("/"),r=n.length;return n.some(jd)&&(r+=y0),t&&(r+=m0),n.filter(i=>!jd(i)).reduce((i,o)=>i+(h0.test(o)?p0:o===""?g0:v0),r)}function _0(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function S0(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=E0({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!d)return null;Object.assign(r,d.params);let h=a.route;o.push({params:r,pathname:pn([i,d.pathname]),pathnameBase:R0(pn([i,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(i=pn([i,d.pathnameBase]))}return o}function E0(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=k0(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,h)=>{if(d==="*"){let m=a[h]||"";s=o.slice(0,o.length-m.length).replace(/(.)\/+$/,"$1")}return u[d]=C0(a[h]||"",d),u},{}),pathname:o,pathnameBase:s,pattern:e}}function k0(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ec(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function I0(e){try{return decodeURI(e)}catch(t){return ec(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function C0(e,t){try{return decodeURIComponent(e)}catch(n){return ec(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Zu(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function ec(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function T0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Dr(e):e;return{pathname:n?n.startsWith("/")?n:x0(n,t):t,search:P0(r),hash:A0(i)}}function x0(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Oa(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function qp(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Jp(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Dr(e):(i=xi({},e),he(!i.pathname||!i.pathname.includes("?"),Oa("?","pathname","search",i)),he(!i.pathname||!i.pathname.includes("#"),Oa("#","pathname","hash",i)),he(!i.search||!i.search.includes("#"),Oa("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(r||s==null)a=n;else{let h=t.length-1;if(s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),h-=1;i.pathname=m.join("/")}a=h>=0?t[h]:"/"}let l=T0(i,a),u=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const pn=e=>e.join("/").replace(/\/\/+/g,"/"),R0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),P0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,A0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function O0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const N0=["post","put","patch","delete"];[...N0];/**
 * React Router v6.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bl(){return Bl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Bl.apply(this,arguments)}function L0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const D0=typeof Object.is=="function"?Object.is:L0,{useState:M0,useEffect:b0,useLayoutEffect:$0,useDebugValue:U0}=Wa;function z0(e,t,n){const r=t(),[{inst:i},o]=M0({inst:{value:r,getSnapshot:t}});return $0(()=>{i.value=r,i.getSnapshot=t,Na(i)&&o({inst:i})},[e,r,t]),b0(()=>(Na(i)&&o({inst:i}),e(()=>{Na(i)&&o({inst:i})})),[e]),U0(r),r}function Na(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!D0(n,r)}catch{return!0}}function F0(e,t,n){return t()}const j0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",B0=!j0,V0=B0?F0:z0;"useSyncExternalStore"in Wa&&(e=>e.useSyncExternalStore)(Wa);const Xp=I.createContext(null),xs=I.createContext(null),Mr=I.createContext(null),Rs=I.createContext(null),In=I.createContext({outlet:null,matches:[]}),Zp=I.createContext(null);function H0(e,t){let{relative:n}=t===void 0?{}:t;br()||he(!1);let{basename:r,navigator:i}=I.useContext(Mr),{hash:o,pathname:s,search:a}=nc(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:pn([r,s])),i.createHref({pathname:l,search:a,hash:o})}function br(){return I.useContext(Rs)!=null}function $r(){return br()||he(!1),I.useContext(Rs).location}function tc(){br()||he(!1);let{basename:e,navigator:t}=I.useContext(Mr),{matches:n}=I.useContext(In),{pathname:r}=$r(),i=JSON.stringify(qp(n).map(a=>a.pathnameBase)),o=I.useRef(!1);return I.useEffect(()=>{o.current=!0}),I.useCallback(function(a,l){if(l===void 0&&(l={}),!o.current)return;if(typeof a=="number"){t.go(a);return}let u=Jp(a,JSON.parse(i),r,l.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:pn([e,u.pathname])),(l.replace?t.replace:t.push)(u,l.state,l)},[e,t,i,r])}const W0=I.createContext(null);function G0(e){let t=I.useContext(In).outlet;return t&&I.createElement(W0.Provider,{value:e},t)}function kI(){let{matches:e}=I.useContext(In),t=e[e.length-1];return t?t.params:{}}function nc(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=I.useContext(In),{pathname:i}=$r(),o=JSON.stringify(qp(r).map(s=>s.pathnameBase));return I.useMemo(()=>Jp(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function K0(e,t){br()||he(!1);let{navigator:n}=I.useContext(Mr),r=I.useContext(xs),{matches:i}=I.useContext(In),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=$r(),u;if(t){var d;let v=typeof t=="string"?Dr(t):t;a==="/"||(d=v.pathname)!=null&&d.startsWith(a)||he(!1),u=v}else u=l;let h=u.pathname||"/",m=a==="/"?h:h.slice(a.length)||"/",y=d0(e,{pathname:m}),_=J0(y&&y.map(v=>Object.assign({},v,{params:Object.assign({},s,v.params),pathname:pn([a,n.encodeLocation?n.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:pn([a,n.encodeLocation?n.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,r||void 0);return t&&_?I.createElement(Rs.Provider,{value:{location:Bl({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:on.Pop}},_):_}function Q0(){let e=t1(),t=O0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},t),n?I.createElement("pre",{style:i},n):null,o)}class Y0 extends I.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?I.createElement(In.Provider,{value:this.props.routeContext},I.createElement(Zp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function q0(e){let{routeContext:t,match:n,children:r}=e,i=I.useContext(Xp);return i&&i.static&&i.staticContext&&n.route.errorElement&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),I.createElement(In.Provider,{value:t},r)}function J0(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let o=r.findIndex(s=>s.route.id&&(i==null?void 0:i[s.route.id]));o>=0||he(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,s,a)=>{let l=s.route.id?i==null?void 0:i[s.route.id]:null,u=n?s.route.errorElement||I.createElement(Q0,null):null,d=t.concat(r.slice(0,a+1)),h=()=>I.createElement(q0,{match:s,routeContext:{outlet:o,matches:d}},l?u:s.route.element!==void 0?s.route.element:o);return n&&(s.route.errorElement||a===0)?I.createElement(Y0,{location:n.location,component:u,error:l,children:h(),routeContext:{outlet:null,matches:d}}):h()},null)}var Bd;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(Bd||(Bd={}));var Xo;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(Xo||(Xo={}));function X0(e){let t=I.useContext(xs);return t||he(!1),t}function Z0(e){let t=I.useContext(In);return t||he(!1),t}function e1(e){let t=Z0(),n=t.matches[t.matches.length-1];return n.route.id||he(!1),n.route.id}function t1(){var e;let t=I.useContext(Zp),n=X0(Xo.UseRouteError),r=e1(Xo.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function em(e){let{to:t,replace:n,state:r,relative:i}=e;br()||he(!1);let o=I.useContext(xs),s=tc();return I.useEffect(()=>{o&&o.navigation.state!=="idle"||s(t,{replace:n,state:r,relative:i})}),null}function II(e){return G0(e.context)}function xn(e){he(!1)}function n1(e){let{basename:t="/",children:n=null,location:r,navigationType:i=on.Pop,navigator:o,static:s=!1}=e;br()&&he(!1);let a=t.replace(/^\/*/,"/"),l=I.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=Dr(r));let{pathname:u="/",search:d="",hash:h="",state:m=null,key:y="default"}=r,_=I.useMemo(()=>{let v=Zu(u,a);return v==null?null:{pathname:v,search:d,hash:h,state:m,key:y}},[a,u,d,h,m,y]);return _==null?null:I.createElement(Mr.Provider,{value:l},I.createElement(Rs.Provider,{children:n,value:{location:_,navigationType:i}}))}function r1(e){let{children:t,location:n}=e,r=I.useContext(Xp),i=r&&!t?r.router.routes:Vl(t);return K0(i,n)}var Vd;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Vd||(Vd={}));new Promise(()=>{});function Vl(e,t){t===void 0&&(t=[]);let n=[];return I.Children.forEach(e,(r,i)=>{if(!I.isValidElement(r))return;if(r.type===I.Fragment){n.push.apply(n,Vl(r.props.children,t));return}r.type!==xn&&he(!1),!r.props.index||!r.props.children||he(!1);let o=[...t,i],s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(s.children=Vl(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zo(){return Zo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zo.apply(this,arguments)}function tm(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function i1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function o1(e,t){return e.button===0&&(!t||t==="_self")&&!i1(e)}function Hl(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function s1(e,t){let n=Hl(e);if(t)for(let r of t.keys())n.has(r)||t.getAll(r).forEach(i=>{n.append(r,i)});return n}const a1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],l1=["aria-current","caseSensitive","className","end","style","to","children"];function u1(e){let{basename:t,children:n,window:r}=e,i=I.useRef();i.current==null&&(i.current=l0({window:r,v5Compat:!0}));let o=i.current,[s,a]=I.useState({action:o.action,location:o.location});return I.useLayoutEffect(()=>o.listen(a),[o]),I.createElement(n1,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o})}const c1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",d1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,f1=I.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:d}=t,h=tm(t,a1),{basename:m}=I.useContext(Mr),y,_=!1;if(typeof u=="string"&&d1.test(u)&&(y=u,c1)){let c=new URL(window.location.href),p=u.startsWith("//")?new URL(c.protocol+u):new URL(u),w=Zu(p.pathname,m);p.origin===c.origin&&w!=null?u=w+p.search+p.hash:_=!0}let v=H0(u,{relative:i}),S=h1(u,{replace:s,state:a,target:l,preventScrollReset:d,relative:i});function f(c){r&&r(c),c.defaultPrevented||S(c)}return I.createElement("a",Zo({},h,{href:y||v,onClick:_||o?r:f,ref:n,target:l}))}),CI=I.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:s=!1,style:a,to:l,children:u}=t,d=tm(t,l1),h=nc(l,{relative:d.relative}),m=$r(),y=I.useContext(xs),{navigator:_}=I.useContext(Mr),v=_.encodeLocation?_.encodeLocation(h).pathname:h.pathname,S=m.pathname,f=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(S=S.toLowerCase(),f=f?f.toLowerCase():null,v=v.toLowerCase());let c=S===v||!s&&S.startsWith(v)&&S.charAt(v.length)==="/",p=f!=null&&(f===v||!s&&f.startsWith(v)&&f.charAt(v.length)==="/"),w=c?r:void 0,E;typeof o=="function"?E=o({isActive:c,isPending:p}):E=[o,c?"active":null,p?"pending":null].filter(Boolean).join(" ");let R=typeof a=="function"?a({isActive:c,isPending:p}):a;return I.createElement(f1,Zo({},d,{"aria-current":w,className:E,ref:n,style:R,to:l}),typeof u=="function"?u({isActive:c,isPending:p}):u)});var Hd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Hd||(Hd={}));var Wd;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Wd||(Wd={}));function h1(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s}=t===void 0?{}:t,a=tc(),l=$r(),u=nc(e,{relative:s});return I.useCallback(d=>{if(o1(d,n)){d.preventDefault();let h=r!==void 0?r:Jo(l)===Jo(u);a(e,{replace:h,state:i,preventScrollReset:o,relative:s})}},[l,a,u,r,i,n,e,o,s])}function TI(e){let t=I.useRef(Hl(e)),n=I.useRef(!1),r=$r(),i=I.useMemo(()=>s1(r.search,n.current?null:t.current),[r.search]),o=tc(),s=I.useCallback((a,l)=>{const u=Hl(typeof a=="function"?a(i):a);n.current=!0,o("?"+u,l)},[o,i]);return[i,s]}const p1="modulepreload",m1=function(e){return"/r_test/"+e},Gd={},bi=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=m1(o),o in Gd)return;Gd[o]=!0;const s=o.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(!!r)for(let d=i.length-1;d>=0;d--){const h=i[d];if(h.href===o&&(!s||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${a}`))return;const u=document.createElement("link");if(u.rel=s?"stylesheet":p1,s||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),s)return new Promise((d,h)=>{u.addEventListener("load",d),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())};var es={},g1={get exports(){return es},set exports(e){es=e}},q={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rc=Symbol.for("react.element"),ic=Symbol.for("react.portal"),Ps=Symbol.for("react.fragment"),As=Symbol.for("react.strict_mode"),Os=Symbol.for("react.profiler"),Ns=Symbol.for("react.provider"),Ls=Symbol.for("react.context"),v1=Symbol.for("react.server_context"),Ds=Symbol.for("react.forward_ref"),Ms=Symbol.for("react.suspense"),bs=Symbol.for("react.suspense_list"),$s=Symbol.for("react.memo"),Us=Symbol.for("react.lazy"),y1=Symbol.for("react.offscreen"),nm;nm=Symbol.for("react.module.reference");function at(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case rc:switch(e=e.type,e){case Ps:case Os:case As:case Ms:case bs:return e;default:switch(e=e&&e.$$typeof,e){case v1:case Ls:case Ds:case Us:case $s:case Ns:return e;default:return t}}case ic:return t}}}q.ContextConsumer=Ls;q.ContextProvider=Ns;q.Element=rc;q.ForwardRef=Ds;q.Fragment=Ps;q.Lazy=Us;q.Memo=$s;q.Portal=ic;q.Profiler=Os;q.StrictMode=As;q.Suspense=Ms;q.SuspenseList=bs;q.isAsyncMode=function(){return!1};q.isConcurrentMode=function(){return!1};q.isContextConsumer=function(e){return at(e)===Ls};q.isContextProvider=function(e){return at(e)===Ns};q.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===rc};q.isForwardRef=function(e){return at(e)===Ds};q.isFragment=function(e){return at(e)===Ps};q.isLazy=function(e){return at(e)===Us};q.isMemo=function(e){return at(e)===$s};q.isPortal=function(e){return at(e)===ic};q.isProfiler=function(e){return at(e)===Os};q.isStrictMode=function(e){return at(e)===As};q.isSuspense=function(e){return at(e)===Ms};q.isSuspenseList=function(e){return at(e)===bs};q.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ps||e===Os||e===As||e===Ms||e===bs||e===y1||typeof e=="object"&&e!==null&&(e.$$typeof===Us||e.$$typeof===$s||e.$$typeof===Ns||e.$$typeof===Ls||e.$$typeof===Ds||e.$$typeof===nm||e.getModuleId!==void 0)};q.typeOf=at;(function(e){e.exports=q})(g1);function w1(e){function t(x,A,N,$,g){for(var V=0,T=0,le=0,G=0,Q,F,Ee=0,Fe=0,W,Pe=W=Q=0,K=0,ke=0,Ur=0,Ie=0,Bi=N.length,zr=Bi-1,lt,z="",ce="",ra="",ia="",Wt;K<Bi;){if(F=N.charCodeAt(K),K===zr&&T+G+le+V!==0&&(T!==0&&(F=T===47?10:47),G=le=V=0,Bi++,zr++),T+G+le+V===0){if(K===zr&&(0<ke&&(z=z.replace(m,"")),0<z.trim().length)){switch(F){case 32:case 9:case 59:case 13:case 10:break;default:z+=N.charAt(K)}F=59}switch(F){case 123:for(z=z.trim(),Q=z.charCodeAt(0),W=1,Ie=++K;K<Bi;){switch(F=N.charCodeAt(K)){case 123:W++;break;case 125:W--;break;case 47:switch(F=N.charCodeAt(K+1)){case 42:case 47:e:{for(Pe=K+1;Pe<zr;++Pe)switch(N.charCodeAt(Pe)){case 47:if(F===42&&N.charCodeAt(Pe-1)===42&&K+2!==Pe){K=Pe+1;break e}break;case 10:if(F===47){K=Pe+1;break e}}K=Pe}}break;case 91:F++;case 40:F++;case 34:case 39:for(;K++<zr&&N.charCodeAt(K)!==F;);}if(W===0)break;K++}switch(W=N.substring(Ie,K),Q===0&&(Q=(z=z.replace(h,"").trim()).charCodeAt(0)),Q){case 64:switch(0<ke&&(z=z.replace(m,"")),F=z.charCodeAt(1),F){case 100:case 109:case 115:case 45:ke=A;break;default:ke=Pt}if(W=t(A,ke,W,F,g+1),Ie=W.length,0<C&&(ke=n(Pt,z,Ur),Wt=a(3,W,ke,A,Se,pe,Ie,F,g,$),z=ke.join(""),Wt!==void 0&&(Ie=(W=Wt.trim()).length)===0&&(F=0,W="")),0<Ie)switch(F){case 115:z=z.replace(R,s);case 100:case 109:case 45:W=z+"{"+W+"}";break;case 107:z=z.replace(c,"$1 $2"),W=z+"{"+W+"}",W=Re===1||Re===2&&o("@"+W,3)?"@-webkit-"+W+"@"+W:"@"+W;break;default:W=z+W,$===112&&(W=(ce+=W,""))}else W="";break;default:W=t(A,n(A,z,Ur),W,$,g+1)}ra+=W,W=Ur=ke=Pe=Q=0,z="",F=N.charCodeAt(++K);break;case 125:case 59:if(z=(0<ke?z.replace(m,""):z).trim(),1<(Ie=z.length))switch(Pe===0&&(Q=z.charCodeAt(0),Q===45||96<Q&&123>Q)&&(Ie=(z=z.replace(" ",":")).length),0<C&&(Wt=a(1,z,A,x,Se,pe,ce.length,$,g,$))!==void 0&&(Ie=(z=Wt.trim()).length)===0&&(z="\0\0"),Q=z.charCodeAt(0),F=z.charCodeAt(1),Q){case 0:break;case 64:if(F===105||F===99){ia+=z+N.charAt(K);break}default:z.charCodeAt(Ie-1)!==58&&(ce+=i(z,Q,F,z.charCodeAt(2)))}Ur=ke=Pe=Q=0,z="",F=N.charCodeAt(++K)}}switch(F){case 13:case 10:T===47?T=0:1+Q===0&&$!==107&&0<z.length&&(ke=1,z+="\0"),0<C*b&&a(0,z,A,x,Se,pe,ce.length,$,g,$),pe=1,Se++;break;case 59:case 125:if(T+G+le+V===0){pe++;break}default:switch(pe++,lt=N.charAt(K),F){case 9:case 32:if(G+V+T===0)switch(Ee){case 44:case 58:case 9:case 32:lt="";break;default:F!==32&&(lt=" ")}break;case 0:lt="\\0";break;case 12:lt="\\f";break;case 11:lt="\\v";break;case 38:G+T+V===0&&(ke=Ur=1,lt="\f"+lt);break;case 108:if(G+T+V+Ge===0&&0<Pe)switch(K-Pe){case 2:Ee===112&&N.charCodeAt(K-3)===58&&(Ge=Ee);case 8:Fe===111&&(Ge=Fe)}break;case 58:G+T+V===0&&(Pe=K);break;case 44:T+le+G+V===0&&(ke=1,lt+="\r");break;case 34:case 39:T===0&&(G=G===F?0:G===0?F:G);break;case 91:G+T+le===0&&V++;break;case 93:G+T+le===0&&V--;break;case 41:G+T+V===0&&le--;break;case 40:if(G+T+V===0){if(Q===0)switch(2*Ee+3*Fe){case 533:break;default:Q=1}le++}break;case 64:T+le+G+V+Pe+W===0&&(W=1);break;case 42:case 47:if(!(0<G+V+le))switch(T){case 0:switch(2*F+3*N.charCodeAt(K+1)){case 235:T=47;break;case 220:Ie=K,T=42}break;case 42:F===47&&Ee===42&&Ie+2!==K&&(N.charCodeAt(Ie+2)===33&&(ce+=N.substring(Ie,K+1)),lt="",T=0)}}T===0&&(z+=lt)}Fe=Ee,Ee=F,K++}if(Ie=ce.length,0<Ie){if(ke=A,0<C&&(Wt=a(2,ce,ke,x,Se,pe,Ie,$,g,$),Wt!==void 0&&(ce=Wt).length===0))return ia+ce+ra;if(ce=ke.join(",")+"{"+ce+"}",Re*Ge!==0){switch(Re!==2||o(ce,2)||(Ge=0),Ge){case 111:ce=ce.replace(w,":-moz-$1")+ce;break;case 112:ce=ce.replace(p,"::-webkit-input-$1")+ce.replace(p,"::-moz-$1")+ce.replace(p,":-ms-input-$1")+ce}Ge=0}}return ia+ce+ra}function n(x,A,N){var $=A.trim().split(S);A=$;var g=$.length,V=x.length;switch(V){case 0:case 1:var T=0;for(x=V===0?"":x[0]+" ";T<g;++T)A[T]=r(x,A[T],N).trim();break;default:var le=T=0;for(A=[];T<g;++T)for(var G=0;G<V;++G)A[le++]=r(x[G]+" ",$[T],N).trim()}return A}function r(x,A,N){var $=A.charCodeAt(0);switch(33>$&&($=(A=A.trim()).charCodeAt(0)),$){case 38:return A.replace(f,"$1"+x.trim());case 58:return x.trim()+A.replace(f,"$1"+x.trim());default:if(0<1*N&&0<A.indexOf("\f"))return A.replace(f,(x.charCodeAt(0)===58?"":"$1")+x.trim())}return x+A}function i(x,A,N,$){var g=x+";",V=2*A+3*N+4*$;if(V===944){x=g.indexOf(":",9)+1;var T=g.substring(x,g.length-1).trim();return T=g.substring(0,x).trim()+T+";",Re===1||Re===2&&o(T,1)?"-webkit-"+T+T:T}if(Re===0||Re===2&&!o(g,1))return g;switch(V){case 1015:return g.charCodeAt(10)===97?"-webkit-"+g+g:g;case 951:return g.charCodeAt(3)===116?"-webkit-"+g+g:g;case 963:return g.charCodeAt(5)===110?"-webkit-"+g+g:g;case 1009:if(g.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+g+g;case 978:return"-webkit-"+g+"-moz-"+g+g;case 1019:case 983:return"-webkit-"+g+"-moz-"+g+"-ms-"+g+g;case 883:if(g.charCodeAt(8)===45)return"-webkit-"+g+g;if(0<g.indexOf("image-set(",11))return g.replace(ve,"$1-webkit-$2")+g;break;case 932:if(g.charCodeAt(4)===45)switch(g.charCodeAt(5)){case 103:return"-webkit-box-"+g.replace("-grow","")+"-webkit-"+g+"-ms-"+g.replace("grow","positive")+g;case 115:return"-webkit-"+g+"-ms-"+g.replace("shrink","negative")+g;case 98:return"-webkit-"+g+"-ms-"+g.replace("basis","preferred-size")+g}return"-webkit-"+g+"-ms-"+g+g;case 964:return"-webkit-"+g+"-ms-flex-"+g+g;case 1023:if(g.charCodeAt(8)!==99)break;return T=g.substring(g.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+T+"-webkit-"+g+"-ms-flex-pack"+T+g;case 1005:return _.test(g)?g.replace(y,":-webkit-")+g.replace(y,":-moz-")+g:g;case 1e3:switch(T=g.substring(13).trim(),A=T.indexOf("-")+1,T.charCodeAt(0)+T.charCodeAt(A)){case 226:T=g.replace(E,"tb");break;case 232:T=g.replace(E,"tb-rl");break;case 220:T=g.replace(E,"lr");break;default:return g}return"-webkit-"+g+"-ms-"+T+g;case 1017:if(g.indexOf("sticky",9)===-1)break;case 975:switch(A=(g=x).length-10,T=(g.charCodeAt(A)===33?g.substring(0,A):g).substring(x.indexOf(":",7)+1).trim(),V=T.charCodeAt(0)+(T.charCodeAt(7)|0)){case 203:if(111>T.charCodeAt(8))break;case 115:g=g.replace(T,"-webkit-"+T)+";"+g;break;case 207:case 102:g=g.replace(T,"-webkit-"+(102<V?"inline-":"")+"box")+";"+g.replace(T,"-webkit-"+T)+";"+g.replace(T,"-ms-"+T+"box")+";"+g}return g+";";case 938:if(g.charCodeAt(5)===45)switch(g.charCodeAt(6)){case 105:return T=g.replace("-items",""),"-webkit-"+g+"-webkit-box-"+T+"-ms-flex-"+T+g;case 115:return"-webkit-"+g+"-ms-flex-item-"+g.replace(P,"")+g;default:return"-webkit-"+g+"-ms-flex-line-pack"+g.replace("align-content","").replace(P,"")+g}break;case 973:case 989:if(g.charCodeAt(3)!==45||g.charCodeAt(4)===122)break;case 931:case 953:if(M.test(x)===!0)return(T=x.substring(x.indexOf(":")+1)).charCodeAt(0)===115?i(x.replace("stretch","fill-available"),A,N,$).replace(":fill-available",":stretch"):g.replace(T,"-webkit-"+T)+g.replace(T,"-moz-"+T.replace("fill-",""))+g;break;case 962:if(g="-webkit-"+g+(g.charCodeAt(5)===102?"-ms-"+g:"")+g,N+$===211&&g.charCodeAt(13)===105&&0<g.indexOf("transform",10))return g.substring(0,g.indexOf(";",27)+1).replace(v,"$1-webkit-$2")+g}return g}function o(x,A){var N=x.indexOf(A===1?":":"{"),$=x.substring(0,A!==3?N:10);return N=x.substring(N+1,x.length-1),D(A!==2?$:$.replace(j,"$1"),N,A)}function s(x,A){var N=i(A,A.charCodeAt(0),A.charCodeAt(1),A.charCodeAt(2));return N!==A+";"?N.replace(O," or ($1)").substring(4):"("+A+")"}function a(x,A,N,$,g,V,T,le,G,Q){for(var F=0,Ee=A,Fe;F<C;++F)switch(Fe=Me[F].call(d,x,Ee,N,$,g,V,T,le,G,Q)){case void 0:case!1:case!0:case null:break;default:Ee=Fe}if(Ee!==A)return Ee}function l(x){switch(x){case void 0:case null:C=Me.length=0;break;default:if(typeof x=="function")Me[C++]=x;else if(typeof x=="object")for(var A=0,N=x.length;A<N;++A)l(x[A]);else b=!!x|0}return l}function u(x){return x=x.prefix,x!==void 0&&(D=null,x?typeof x!="function"?Re=1:(Re=2,D=x):Re=0),u}function d(x,A){var N=x;if(33>N.charCodeAt(0)&&(N=N.trim()),X=N,N=[X],0<C){var $=a(-1,A,N,N,Se,pe,0,0,0,0);$!==void 0&&typeof $=="string"&&(A=$)}var g=t(Pt,N,A,0,0);return 0<C&&($=a(-2,g,N,N,Se,pe,g.length,0,0,0),$!==void 0&&(g=$)),X="",Ge=0,pe=Se=1,g}var h=/^\0+/g,m=/[\0\r\f]/g,y=/: */g,_=/zoo|gra/,v=/([,: ])(transform)/g,S=/,\r+?/g,f=/([\t\r\n ])*\f?&/g,c=/@(k\w+)\s*(\S*)\s*/,p=/::(place)/g,w=/:(read-only)/g,E=/[svh]\w+-[tblr]{2}/,R=/\(\s*(.*)\s*\)/g,O=/([\s\S]*?);/g,P=/-self|flex-/g,j=/[^]*?(:[rp][el]a[\w-]+)[^]*/,M=/stretch|:\s*\w+\-(?:conte|avail)/,ve=/([^-])(image-set\()/,pe=1,Se=1,Ge=0,Re=1,Pt=[],Me=[],C=0,D=null,b=0,X="";return d.use=l,d.set=u,e!==void 0&&u(e),d}var _1={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function S1(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var E1=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Kd=S1(function(e){return E1.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Wl={},k1={get exports(){return Wl},set exports(e){Wl=e}},J={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _e=typeof Symbol=="function"&&Symbol.for,oc=_e?Symbol.for("react.element"):60103,sc=_e?Symbol.for("react.portal"):60106,zs=_e?Symbol.for("react.fragment"):60107,Fs=_e?Symbol.for("react.strict_mode"):60108,js=_e?Symbol.for("react.profiler"):60114,Bs=_e?Symbol.for("react.provider"):60109,Vs=_e?Symbol.for("react.context"):60110,ac=_e?Symbol.for("react.async_mode"):60111,Hs=_e?Symbol.for("react.concurrent_mode"):60111,Ws=_e?Symbol.for("react.forward_ref"):60112,Gs=_e?Symbol.for("react.suspense"):60113,I1=_e?Symbol.for("react.suspense_list"):60120,Ks=_e?Symbol.for("react.memo"):60115,Qs=_e?Symbol.for("react.lazy"):60116,C1=_e?Symbol.for("react.block"):60121,T1=_e?Symbol.for("react.fundamental"):60117,x1=_e?Symbol.for("react.responder"):60118,R1=_e?Symbol.for("react.scope"):60119;function et(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case oc:switch(e=e.type,e){case ac:case Hs:case zs:case js:case Fs:case Gs:return e;default:switch(e=e&&e.$$typeof,e){case Vs:case Ws:case Qs:case Ks:case Bs:return e;default:return t}}case sc:return t}}}function rm(e){return et(e)===Hs}J.AsyncMode=ac;J.ConcurrentMode=Hs;J.ContextConsumer=Vs;J.ContextProvider=Bs;J.Element=oc;J.ForwardRef=Ws;J.Fragment=zs;J.Lazy=Qs;J.Memo=Ks;J.Portal=sc;J.Profiler=js;J.StrictMode=Fs;J.Suspense=Gs;J.isAsyncMode=function(e){return rm(e)||et(e)===ac};J.isConcurrentMode=rm;J.isContextConsumer=function(e){return et(e)===Vs};J.isContextProvider=function(e){return et(e)===Bs};J.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===oc};J.isForwardRef=function(e){return et(e)===Ws};J.isFragment=function(e){return et(e)===zs};J.isLazy=function(e){return et(e)===Qs};J.isMemo=function(e){return et(e)===Ks};J.isPortal=function(e){return et(e)===sc};J.isProfiler=function(e){return et(e)===js};J.isStrictMode=function(e){return et(e)===Fs};J.isSuspense=function(e){return et(e)===Gs};J.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===zs||e===Hs||e===js||e===Fs||e===Gs||e===I1||typeof e=="object"&&e!==null&&(e.$$typeof===Qs||e.$$typeof===Ks||e.$$typeof===Bs||e.$$typeof===Vs||e.$$typeof===Ws||e.$$typeof===T1||e.$$typeof===x1||e.$$typeof===R1||e.$$typeof===C1)};J.typeOf=et;(function(e){e.exports=J})(k1);var lc=Wl,P1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},A1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},O1={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},im={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},uc={};uc[lc.ForwardRef]=O1;uc[lc.Memo]=im;function Qd(e){return lc.isMemo(e)?im:uc[e.$$typeof]||P1}var N1=Object.defineProperty,L1=Object.getOwnPropertyNames,Yd=Object.getOwnPropertySymbols,D1=Object.getOwnPropertyDescriptor,M1=Object.getPrototypeOf,qd=Object.prototype;function om(e,t,n){if(typeof t!="string"){if(qd){var r=M1(t);r&&r!==qd&&om(e,r,n)}var i=L1(t);Yd&&(i=i.concat(Yd(t)));for(var o=Qd(e),s=Qd(t),a=0;a<i.length;++a){var l=i[a];if(!A1[l]&&!(n&&n[l])&&!(s&&s[l])&&!(o&&o[l])){var u=D1(t,l);try{N1(e,l,u)}catch{}}}}return e}var b1=om;function ht(){return(ht=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Jd=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},Gl=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!es.typeOf(e)},ts=Object.freeze([]),mn=Object.freeze({});function xr(e){return typeof e=="function"}function Xd(e){return e.displayName||e.name||"Component"}function cc(e){return e&&typeof e.styledComponentId=="string"}var Rr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",dc=typeof window<"u"&&"HTMLElement"in window,$1=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1)),U1={};function Bn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var z1=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,s=o;n>=s;)(s<<=1)<0&&Bn(16,""+n);this.groupSizes=new Uint32Array(s),this.groupSizes.set(i),this.length=s;for(var a=o;a<s;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,d=r.length;u<d;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var s=i;s<o;s++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),s=o+i,a=o;a<s;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),Eo=new Map,ns=new Map,ai=1,so=function(e){if(Eo.has(e))return Eo.get(e);for(;ns.has(ai);)ai++;var t=ai++;return Eo.set(e,t),ns.set(t,e),t},F1=function(e){return ns.get(e)},j1=function(e,t){t>=ai&&(ai=t+1),Eo.set(e,t),ns.set(t,e)},B1="style["+Rr+'][data-styled-version="5.3.8"]',V1=new RegExp("^"+Rr+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),H1=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},W1=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var s=n[i].trim();if(s){var a=s.match(V1);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(j1(u,l),H1(e,u,a[3]),e.getTag().insertRules(l,r)),r.length=0}else r.push(s)}}},G1=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},sm=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var d=l[u];if(d&&d.nodeType===1&&d.hasAttribute(Rr))return d}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Rr,"active"),r.setAttribute("data-styled-version","5.3.8");var s=G1();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},K1=function(){function e(n){var r=this.element=sm(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,s=0,a=o.length;s<a;s++){var l=o[s];if(l.ownerNode===i)return l}Bn(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),Q1=function(){function e(n){var r=this.element=sm(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),Y1=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Zd=dc,q1={isServer:!dc,useCSSOMInjection:!$1},rs=function(){function e(n,r,i){n===void 0&&(n=mn),r===void 0&&(r={}),this.options=ht({},q1,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&dc&&Zd&&(Zd=!1,function(o){for(var s=document.querySelectorAll(B1),a=0,l=s.length;a<l;a++){var u=s[a];u&&u.getAttribute(Rr)!=="active"&&(W1(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return so(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(ht({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,s=r.target,n=i?new Y1(s):o?new K1(s):new Q1(s),new z1(n)));var n,r,i,o,s},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(so(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(so(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(so(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",s=0;s<i;s++){var a=F1(s);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(s);if(l&&u&&l.size){var d=Rr+".g"+s+'[id="'+a+'"]',h="";l!==void 0&&l.forEach(function(m){m.length>0&&(h+=m+",")}),o+=""+u+d+'{content:"'+h+`"}/*!sc*/
`}}}return o}(this)},e}(),J1=/(a)(d)/gi,ef=function(e){return String.fromCharCode(e+(e>25?39:97))};function Kl(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=ef(t%52)+n;return(ef(t%52)+n).replace(J1,"$1-$2")}var cr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},am=function(e){return cr(5381,e)};function lm(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(xr(n)&&!cc(n))return!1}return!0}var X1=am("5.3.8"),Z1=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&lm(t),this.componentId=n,this.baseHash=cr(X1,n),this.baseStyle=r,rs.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var s=Vn(this.rules,t,n,r).join(""),a=Kl(cr(this.baseHash,s)>>>0);if(!n.hasNameForId(i,a)){var l=r(s,"."+a,void 0,i);n.insertRules(i,a,l)}o.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,d=cr(this.baseHash,r.hash),h="",m=0;m<u;m++){var y=this.rules[m];if(typeof y=="string")h+=y;else if(y){var _=Vn(y,t,n,r),v=Array.isArray(_)?_.join(""):_;d=cr(d,v+m),h+=v}}if(h){var S=Kl(d>>>0);if(!n.hasNameForId(i,S)){var f=r(h,"."+S,void 0,i);n.insertRules(i,S,f)}o.push(S)}}return o.join(" ")},e}(),ew=/^\s*\/\/.*$/gm,tw=[":","[",".","#"];function nw(e){var t,n,r,i,o=e===void 0?mn:e,s=o.options,a=s===void 0?mn:s,l=o.plugins,u=l===void 0?ts:l,d=new w1(a),h=[],m=function(v){function S(f){if(f)try{v(f+"}")}catch{}}return function(f,c,p,w,E,R,O,P,j,M){switch(f){case 1:if(j===0&&c.charCodeAt(0)===64)return v(c+";"),"";break;case 2:if(P===0)return c+"/*|*/";break;case 3:switch(P){case 102:case 112:return v(p[0]+c),"";default:return c+(M===0?"/*|*/":"")}case-2:c.split("/*|*/}").forEach(S)}}}(function(v){h.push(v)}),y=function(v,S,f){return S===0&&tw.indexOf(f[n.length])!==-1||f.match(i)?v:"."+t};function _(v,S,f,c){c===void 0&&(c="&");var p=v.replace(ew,""),w=S&&f?f+" "+S+" { "+p+" }":p;return t=c,n=S,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),d(f||!S?"":S,w)}return d.use([].concat(u,[function(v,S,f){v===2&&f.length&&f[0].lastIndexOf(n)>0&&(f[0]=f[0].replace(r,y))},m,function(v){if(v===-2){var S=h;return h=[],S}}])),_.hash=u.length?u.reduce(function(v,S){return S.name||Bn(15),cr(v,S.name)},5381).toString():"",_}var um=_n.createContext();um.Consumer;var cm=_n.createContext(),rw=(cm.Consumer,new rs),Ql=nw();function dm(){return I.useContext(um)||rw}function fm(){return I.useContext(cm)||Ql}var hm=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Ql);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.toString=function(){return Bn(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Ql),this.name+t.hash},e}(),iw=/([A-Z])/,ow=/([A-Z])/g,sw=/^ms-/,aw=function(e){return"-"+e.toLowerCase()};function tf(e){return iw.test(e)?e.replace(ow,aw).replace(sw,"-ms-"):e}var nf=function(e){return e==null||e===!1||e===""};function Vn(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],s=0,a=e.length;s<a;s+=1)(i=Vn(e[s],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(nf(e))return"";if(cc(e))return"."+e.styledComponentId;if(xr(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var l=e(t);return Vn(l,t,n,r)}var u;return e instanceof hm?n?(e.inject(n,r),e.getName(r)):e:Gl(e)?function d(h,m){var y,_,v=[];for(var S in h)h.hasOwnProperty(S)&&!nf(h[S])&&(Array.isArray(h[S])&&h[S].isCss||xr(h[S])?v.push(tf(S)+":",h[S],";"):Gl(h[S])?v.push.apply(v,d(h[S],S)):v.push(tf(S)+": "+(y=S,(_=h[S])==null||typeof _=="boolean"||_===""?"":typeof _!="number"||_===0||y in _1?String(_).trim():_+"px")+";"));return m?[m+" {"].concat(v,["}"]):v}(e):e.toString()}var rf=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function fc(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return xr(e)||Gl(e)?rf(Vn(Jd(ts,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:rf(Vn(Jd(e,n)))}var pm=function(e,t,n){return n===void 0&&(n=mn),e.theme!==n.theme&&e.theme||t||n.theme},lw=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,uw=/(^-|-$)/g;function La(e){return e.replace(lw,"-").replace(uw,"")}var hc=function(e){return Kl(am(e)>>>0)};function ao(e){return typeof e=="string"&&!0}var Yl=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},cw=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function dw(e,t,n){var r=e[n];Yl(t)&&Yl(r)?mm(r,t):e[n]=t}function mm(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var s=o[i];if(Yl(s))for(var a in s)cw(a)&&dw(e,s[a],a)}return e}var Ri=_n.createContext();Ri.Consumer;function fw(e){var t=I.useContext(Ri),n=I.useMemo(function(){return function(r,i){if(!r)return Bn(14);if(xr(r)){var o=r(i);return o}return Array.isArray(r)||typeof r!="object"?Bn(8):i?ht({},i,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?_n.createElement(Ri.Provider,{value:n},e.children):null}var Da={};function gm(e,t,n){var r=cc(e),i=!ao(e),o=t.attrs,s=o===void 0?ts:o,a=t.componentId,l=a===void 0?function(c,p){var w=typeof c!="string"?"sc":La(c);Da[w]=(Da[w]||0)+1;var E=w+"-"+hc("5.3.8"+w+Da[w]);return p?p+"-"+E:E}(t.displayName,t.parentComponentId):a,u=t.displayName,d=u===void 0?function(c){return ao(c)?"styled."+c:"Styled("+Xd(c)+")"}(e):u,h=t.displayName&&t.componentId?La(t.displayName)+"-"+t.componentId:t.componentId||l,m=r&&e.attrs?Array.prototype.concat(e.attrs,s).filter(Boolean):s,y=t.shouldForwardProp;r&&e.shouldForwardProp&&(y=t.shouldForwardProp?function(c,p,w){return e.shouldForwardProp(c,p,w)&&t.shouldForwardProp(c,p,w)}:e.shouldForwardProp);var _,v=new Z1(n,h,r?e.componentStyle:void 0),S=v.isStatic&&s.length===0,f=function(c,p){return function(w,E,R,O){var P=w.attrs,j=w.componentStyle,M=w.defaultProps,ve=w.foldedComponentIds,pe=w.shouldForwardProp,Se=w.styledComponentId,Ge=w.target,Re=function($,g,V){$===void 0&&($=mn);var T=ht({},g,{theme:$}),le={};return V.forEach(function(G){var Q,F,Ee,Fe=G;for(Q in xr(Fe)&&(Fe=Fe(T)),Fe)T[Q]=le[Q]=Q==="className"?(F=le[Q],Ee=Fe[Q],F&&Ee?F+" "+Ee:F||Ee):Fe[Q]}),[T,le]}(pm(E,I.useContext(Ri),M)||mn,E,P),Pt=Re[0],Me=Re[1],C=function($,g,V,T){var le=dm(),G=fm(),Q=g?$.generateAndInjectStyles(mn,le,G):$.generateAndInjectStyles(V,le,G);return Q}(j,O,Pt),D=R,b=Me.$as||E.$as||Me.as||E.as||Ge,X=ao(b),x=Me!==E?ht({},E,{},Me):E,A={};for(var N in x)N[0]!=="$"&&N!=="as"&&(N==="forwardedAs"?A.as=x[N]:(pe?pe(N,Kd,b):!X||Kd(N))&&(A[N]=x[N]));return E.style&&Me.style!==E.style&&(A.style=ht({},E.style,{},Me.style)),A.className=Array.prototype.concat(ve,Se,C!==Se?C:null,E.className,Me.className).filter(Boolean).join(" "),A.ref=D,I.createElement(b,A)}(_,c,p,S)};return f.displayName=d,(_=_n.forwardRef(f)).attrs=m,_.componentStyle=v,_.displayName=d,_.shouldForwardProp=y,_.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):ts,_.styledComponentId=h,_.target=r?e.target:e,_.withComponent=function(c){var p=t.componentId,w=function(R,O){if(R==null)return{};var P,j,M={},ve=Object.keys(R);for(j=0;j<ve.length;j++)P=ve[j],O.indexOf(P)>=0||(M[P]=R[P]);return M}(t,["componentId"]),E=p&&p+"-"+(ao(c)?c:La(Xd(c)));return gm(c,ht({},w,{attrs:m,componentId:E}),n)},Object.defineProperty(_,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(c){this._foldedDefaultProps=r?mm({},e.defaultProps,c):c}}),_.toString=function(){return"."+_.styledComponentId},i&&b1(_,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),_}var ql=function(e){return function t(n,r,i){if(i===void 0&&(i=mn),!es.isValidElementType(r))return Bn(1,String(r));var o=function(){return n(r,i,fc.apply(void 0,arguments))};return o.withConfig=function(s){return t(n,r,ht({},i,{},s))},o.attrs=function(s){return t(n,r,ht({},i,{attrs:Array.prototype.concat(i.attrs,s).filter(Boolean)}))},o}(gm,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){ql[e]=ql(e)});var hw=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=lm(n),rs.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,i,o){var s=o(Vn(this.rules,r,i,o).join(""),""),a=this.componentId+n;i.insertRules(a,a,s)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,i,o){n>2&&rs.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,o)},e}();function pw(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=fc.apply(void 0,[e].concat(n)),o="sc-global-"+hc(JSON.stringify(i)),s=new hw(i,o);function a(u){var d=dm(),h=fm(),m=I.useContext(Ri),y=I.useRef(d.allocateGSInstance(o)).current;return d.server&&l(y,u,d,m,h),I.useLayoutEffect(function(){if(!d.server)return l(y,u,d,m,h),function(){return s.removeStyles(y,d)}},[y,u,d,m,h]),null}function l(u,d,h,m,y){if(s.isStatic)s.renderStyles(u,U1,h,y);else{var _=ht({},d,{theme:pm(d,m,a.defaultProps)});s.renderStyles(u,_,h,y)}}return _n.memo(a)}function xI(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=fc.apply(void 0,[e].concat(n)).join(""),o=hc(i);return new hm(o,i)}const mw=ql,gw=mw.p`
  padding: 20px;
  margin: 20px;
  color: ${e=>e.theme.colors.primary};
  font-size: ${e=>e.theme.fontSizes.xxl};
  font-weight: ${e=>e.theme.fontWeights.bold};
  text-align: center;
`,vw=()=>Z.jsx(gw,{children:"404 | This page could not be found"});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},yw=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},ym={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,d=o>>2,h=(o&3)<<4|a>>4;let m=(a&15)<<2|u>>6,y=u&63;l||(y=64,s||(m=64)),r.push(n[d],n[h],n[m],n[y])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(vm(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):yw(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const h=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||h==null)throw new ww;const m=o<<2|a>>4;if(r.push(m),u!==64){const y=a<<4&240|u>>2;if(r.push(y),h!==64){const _=u<<6&192|h;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class ww extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _w=function(e){const t=vm(e);return ym.encodeByteArray(t,!0)},wm=function(e){return _w(e).replace(/\./g,"")},_m=function(e){try{return ym.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew=()=>Sw().__FIREBASE_DEFAULTS__,kw=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Iw=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&_m(e[1]);return t&&JSON.parse(t)},pc=()=>{try{return Ew()||kw()||Iw()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Cw=e=>{var t,n;return(n=(t=pc())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Tw=()=>{var e;return(e=pc())===null||e===void 0?void 0:e.config},Sm=e=>{var t;return(t=pc())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Rw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(De())}function Em(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Pw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Aw(){const e=De();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function km(){try{return typeof indexedDB=="object"}catch{return!1}}function Im(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function Ow(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw="FirebaseError";class Rt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Nw,Object.setPrototypeOf(this,Rt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qn.prototype.create)}}class qn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?Lw(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Rt(i,a,r)}}function Lw(e,t){return e.replace(Dw,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Dw=/\{\$([^}]+)}/g;function Mw(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function is(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(of(o)&&of(s)){if(!is(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function of(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function bw(e,t){const n=new $w(e,t);return n.subscribe.bind(n)}class $w{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Uw(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Ma),i.error===void 0&&(i.error=Ma),i.complete===void 0&&(i.complete=Ma);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Uw(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Ma(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw=1e3,Fw=2,jw=4*60*60*1e3,Bw=.5;function sf(e,t=zw,n=Fw){const r=t*Math.pow(n,e),i=Math.round(Bw*r*(Math.random()-.5)*2);return Math.min(jw,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(e){return e&&e._delegate?e._delegate:e}class Tt{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new xw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ww(t))try{this.getOrInitializeService({instanceIdentifier:Rn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Rn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Rn){return this.instances.has(t)}getOptions(t=Rn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Hw(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Rn){return this.component?this.component.multipleInstances?t:Rn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Hw(e){return e===Rn?void 0:e}function Ww(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Vw(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ee||(ee={}));const Kw={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},Qw=ee.INFO,Yw={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},qw=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Yw[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class mc{constructor(t){this.name=t,this._logLevel=Qw,this._logHandler=qw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ee))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Kw[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...t),this._logHandler(this,ee.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...t),this._logHandler(this,ee.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...t),this._logHandler(this,ee.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...t),this._logHandler(this,ee.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...t),this._logHandler(this,ee.ERROR,...t)}}const Jw=(e,t)=>t.some(n=>e instanceof n);let af,lf;function Xw(){return af||(af=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zw(){return lf||(lf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cm=new WeakMap,Jl=new WeakMap,Tm=new WeakMap,ba=new WeakMap,gc=new WeakMap;function e_(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(gn(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&Cm.set(n,e)}).catch(()=>{}),gc.set(t,e),t}function t_(e){if(Jl.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});Jl.set(e,t)}let Xl={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Jl.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Tm.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function n_(e){Xl=e(Xl)}function r_(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call($a(this),t,...n);return Tm.set(r,t.sort?t.sort():[t]),gn(r)}:Zw().includes(e)?function(...t){return e.apply($a(this),t),gn(Cm.get(this))}:function(...t){return gn(e.apply($a(this),t))}}function i_(e){return typeof e=="function"?r_(e):(e instanceof IDBTransaction&&t_(e),Jw(e,Xw())?new Proxy(e,Xl):e)}function gn(e){if(e instanceof IDBRequest)return e_(e);if(ba.has(e))return ba.get(e);const t=i_(e);return t!==e&&(ba.set(e,t),gc.set(t,e)),t}const $a=e=>gc.get(e);function xm(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=gn(s);return r&&s.addEventListener("upgradeneeded",l=>{r(gn(s.result),l.oldVersion,l.newVersion,gn(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const o_=["get","getKey","getAll","getAllKeys","count"],s_=["put","add","delete","clear"],Ua=new Map;function uf(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ua.get(t))return Ua.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=s_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||o_.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Ua.set(t,o),o}n_(e=>({...e,get:(t,n,r)=>uf(t,n)||e.get(t,n,r),has:(t,n)=>!!uf(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(l_(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function l_(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Zl="@firebase/app",cf="0.9.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn=new mc("@firebase/app"),u_="@firebase/app-compat",c_="@firebase/analytics-compat",d_="@firebase/analytics",f_="@firebase/app-check-compat",h_="@firebase/app-check",p_="@firebase/auth",m_="@firebase/auth-compat",g_="@firebase/database",v_="@firebase/database-compat",y_="@firebase/functions",w_="@firebase/functions-compat",__="@firebase/installations",S_="@firebase/installations-compat",E_="@firebase/messaging",k_="@firebase/messaging-compat",I_="@firebase/performance",C_="@firebase/performance-compat",T_="@firebase/remote-config",x_="@firebase/remote-config-compat",R_="@firebase/storage",P_="@firebase/storage-compat",A_="@firebase/firestore",O_="@firebase/firestore-compat",N_="firebase",L_="9.17.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu="[DEFAULT]",D_={[Zl]:"fire-core",[u_]:"fire-core-compat",[d_]:"fire-analytics",[c_]:"fire-analytics-compat",[h_]:"fire-app-check",[f_]:"fire-app-check-compat",[p_]:"fire-auth",[m_]:"fire-auth-compat",[g_]:"fire-rtdb",[v_]:"fire-rtdb-compat",[y_]:"fire-fn",[w_]:"fire-fn-compat",[__]:"fire-iid",[S_]:"fire-iid-compat",[E_]:"fire-fcm",[k_]:"fire-fcm-compat",[I_]:"fire-perf",[C_]:"fire-perf-compat",[T_]:"fire-rc",[x_]:"fire-rc-compat",[R_]:"fire-gcs",[P_]:"fire-gcs-compat",[A_]:"fire-fst",[O_]:"fire-fst-compat","fire-js":"fire-js",[N_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os=new Map,tu=new Map;function M_(e,t){try{e.container.addComponent(t)}catch(n){Hn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function jt(e){const t=e.name;if(tu.has(t))return Hn.debug(`There were multiple attempts to register component ${t}.`),!1;tu.set(t,e);for(const n of os.values())M_(n,e);return!0}function Ys(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},vn=new qn("app","Firebase",b_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Tt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw vn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs=L_;function Rm(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:eu,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw vn.create("bad-app-name",{appName:String(i)});if(n||(n=Tw()),!n)throw vn.create("no-options");const o=os.get(i);if(o){if(is(n,o.options)&&is(r,o.config))return o;throw vn.create("duplicate-app",{appName:i})}const s=new Gw(i);for(const l of tu.values())s.addComponent(l);const a=new $_(n,r,s);return os.set(i,a),a}function U_(e=eu){const t=os.get(e);if(!t&&e===eu)return Rm();if(!t)throw vn.create("no-app",{appName:e});return t}function kt(e,t,n){var r;let i=(r=D_[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Hn.warn(a.join(" "));return}jt(new Tt(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z_="firebase-heartbeat-database",F_=1,Pi="firebase-heartbeat-store";let za=null;function Pm(){return za||(za=xm(z_,F_,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Pi)}}}).catch(e=>{throw vn.create("idb-open",{originalErrorMessage:e.message})})),za}async function j_(e){try{return(await Pm()).transaction(Pi).objectStore(Pi).get(Am(e))}catch(t){if(t instanceof Rt)Hn.warn(t.message);else{const n=vn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Hn.warn(n.message)}}}async function df(e,t){try{const r=(await Pm()).transaction(Pi,"readwrite");return await r.objectStore(Pi).put(t,Am(e)),r.done}catch(n){if(n instanceof Rt)Hn.warn(n.message);else{const r=vn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Hn.warn(r.message)}}}function Am(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_=1024,V_=30*24*60*60*1e3;class H_{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new G_(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ff();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=V_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ff(),{heartbeatsToSend:n,unsentEntries:r}=W_(this._heartbeatsCache.heartbeats),i=wm(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ff(){return new Date().toISOString().substring(0,10)}function W_(e,t=B_){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),hf(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),hf(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class G_{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return km()?Im().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await j_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return df(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return df(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function hf(e){return wm(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K_(e){jt(new Tt("platform-logger",t=>new a_(t),"PRIVATE")),jt(new Tt("heartbeat",t=>new H_(t),"PRIVATE")),kt(Zl,cf,e),kt(Zl,cf,"esm2017"),kt("fire-js","")}K_("");function vc(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Om(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Q_=Om,Nm=new qn("auth","Firebase",Om());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf=new mc("@firebase/auth");function ko(e,...t){pf.logLevel<=ee.ERROR&&pf.error(`Auth (${qs}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(e,...t){throw yc(e,...t)}function It(e,...t){return yc(e,...t)}function Lm(e,t,n){const r=Object.assign(Object.assign({},Q_()),{[t]:n});return new qn("auth","Firebase",r).create(t,{appName:e.name})}function Y_(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&xt(e,"argument-error"),Lm(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function yc(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Nm.create(e,...t)}function U(e,t,...n){if(!e)throw yc(t,...n)}function Dt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw ko(t),new Error(t)}function Bt(e,t){e||Dt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf=new Map;function Mt(e){Bt(e instanceof Function,"Expected a class definition");let t=mf.get(e);return t?(Bt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,mf.set(e,t),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q_(e,t){const n=Ys(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(is(o,t??{}))return i;xt(i,"already-initialized")}return n.initialize({options:t})}function J_(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Mt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function X_(){return gf()==="http:"||gf()==="https:"}function gf(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(X_()||Em()||"connection"in navigator)?navigator.onLine:!0}function eS(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(t,n){this.shortDelay=t,this.longDelay=n,Bt(n>t,"Short delay should be less than long delay!"),this.isMobile=Rw()||Pw()}get(){return Z_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(e,t){Bt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Dt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Dt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Dt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS=new Ui(3e4,6e4);function rS(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function zi(e,t,n,r,i={}){return Mm(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=$i(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),Dm.fetch()(bm(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))})}async function Mm(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},tS),t);try{const i=new oS(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw lo(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw lo(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw lo(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw lo(e,"user-disabled",s);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Lm(e,d,u);xt(e,d)}}catch(i){if(i instanceof Rt)throw i;xt(e,"internal-error",{message:String(i)})}}async function iS(e,t,n,r,i={}){const o=await zi(e,t,n,r,i);return"mfaPendingCredential"in o&&xt(e,"multi-factor-auth-required",{_serverResponse:o}),o}function bm(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?wc(e.config,i):`${e.config.apiScheme}://${i}`}class oS{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(It(this.auth,"network-request-failed")),nS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function lo(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=It(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sS(e,t){return zi(e,"POST","/v1/accounts:delete",t)}async function aS(e,t){return zi(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function lS(e,t=!1){const n=Ht(e),r=await n.getIdToken(t),i=_c(r);U(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:li(Fa(i.auth_time)),issuedAtTime:li(Fa(i.iat)),expirationTime:li(Fa(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Fa(e){return Number(e)*1e3}function _c(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return ko("JWT malformed, contained fewer than 3 sections"),null;try{const i=_m(n);return i?JSON.parse(i):(ko("Failed to decode base64 JWT payload"),null)}catch(i){return ko("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function uS(e){const t=_c(e);return U(t,"internal-error"),U(typeof t.exp<"u","internal-error"),U(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Rt&&cS(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function cS({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=li(this.lastLoginAt),this.creationTime=li(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ss(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Pr(e,aS(n,{idToken:r}));U(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?pS(o.providerUserInfo):[],a=hS(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new $m(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(e,h)}async function fS(e){const t=Ht(e);await ss(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function hS(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function pS(e){return e.map(t=>{var{providerId:n}=t,r=vc(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mS(e,t){const n=await Mm(e,{},async()=>{const r=$i({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=bm(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Dm.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){U(t.idToken,"internal-error"),U(typeof t.idToken<"u","internal-error"),U(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):uS(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return U(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await mS(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Ai;return r&&(U(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(U(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(U(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ai,this.toJSON())}_performRefresh(){return Dt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(e,t){U(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class bn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=vc(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new dS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new $m(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await Pr(this,this.stsTokenManager.getToken(this.auth,t));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return lS(this,t)}reload(){return fS(this)}_assign(t){this!==t&&(U(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new bn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await ss(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Pr(this,sS(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,u,d;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,y=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,_=(s=n.photoURL)!==null&&s!==void 0?s:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,f=(u=n.createdAt)!==null&&u!==void 0?u:void 0,c=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:p,emailVerified:w,isAnonymous:E,providerData:R,stsTokenManager:O}=n;U(p&&O,t,"internal-error");const P=Ai.fromJSON(this.name,O);U(typeof p=="string",t,"internal-error"),Kt(h,t.name),Kt(m,t.name),U(typeof w=="boolean",t,"internal-error"),U(typeof E=="boolean",t,"internal-error"),Kt(y,t.name),Kt(_,t.name),Kt(v,t.name),Kt(S,t.name),Kt(f,t.name),Kt(c,t.name);const j=new bn({uid:p,auth:t,email:m,emailVerified:w,displayName:h,isAnonymous:E,photoURL:_,phoneNumber:y,tenantId:v,stsTokenManager:P,createdAt:f,lastLoginAt:c});return R&&Array.isArray(R)&&(j.providerData=R.map(M=>Object.assign({},M))),S&&(j._redirectEventId=S),j}static async _fromIdTokenResponse(t,n,r=!1){const i=new Ai;i.updateFromServerResponse(n);const o=new bn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await ss(o),o}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Um.type="NONE";const vf=Um;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(e,t,n){return`firebase:${e}:${t}:${n}`}class yr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Io(this.userKey,i.apiKey,o),this.fullPersistenceKey=Io("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?bn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new yr(Mt(vf),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||Mt(vf);const s=Io(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const d=await u._get(s);if(d){const h=bn._fromJSON(t,d);u!==o&&(a=h),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new yr(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new yr(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(jm(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(zm(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Vm(t))return"Blackberry";if(Hm(t))return"Webos";if(Sc(t))return"Safari";if((t.includes("chrome/")||Fm(t))&&!t.includes("edge/"))return"Chrome";if(Bm(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function zm(e=De()){return/firefox\//i.test(e)}function Sc(e=De()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Fm(e=De()){return/crios\//i.test(e)}function jm(e=De()){return/iemobile/i.test(e)}function Bm(e=De()){return/android/i.test(e)}function Vm(e=De()){return/blackberry/i.test(e)}function Hm(e=De()){return/webos/i.test(e)}function Js(e=De()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function gS(e=De()){var t;return Js(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function vS(){return Aw()&&document.documentMode===10}function Wm(e=De()){return Js(e)||Bm(e)||Hm(e)||Vm(e)||/windows phone/i.test(e)||jm(e)}function yS(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(e,t=[]){let n;switch(e){case"Browser":n=yf(De());break;case"Worker":n=`${yf(De())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${qs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(t,n,r){this.app=t,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wf(this),this.idTokenSubscription=new wf(this),this.beforeStateQueue=new wS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Nm,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Mt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await yr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await ss(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=eS()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Ht(t):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&U(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Mt(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new qn("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Mt(t)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await yr.create(this,[Mt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),s=this._isInitialized?Promise.resolve():this._initializationPromise;return U(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Gm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Xs(e){return Ht(e)}class wf{constructor(t){this.auth=t,this.observer=null,this.addObserver=bw(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function SS(e,t,n){const r=Xs(e);U(r._canInitEmulator,r,"emulator-config-failed"),U(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=Km(t),{host:s,port:a}=ES(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||kS()}function Km(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function ES(e){const t=Km(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:_f(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:_f(s)}}}function _f(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function kS(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Dt("not implemented")}_getIdTokenResponse(t){return Dt("not implemented")}_linkToIdToken(t,n){return Dt("not implemented")}_getReauthenticationResolver(t){return Dt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wr(e,t){return iS(e,"POST","/v1/accounts:signInWithIdp",rS(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IS="http://localhost";class Wn extends Qm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Wn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):xt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=vc(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new Wn(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return wr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,wr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,wr(t,n)}buildRequest(){const t={requestUri:IS,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=$i(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi extends Ec{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends Fi{constructor(){super("facebook.com")}static credential(t){return Wn._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Xt.credentialFromTaggedObject(t)}static credentialFromError(t){return Xt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Xt.credential(t.oauthAccessToken)}catch{return null}}}Xt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends Fi{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Wn._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Zt.credentialFromTaggedObject(t)}static credentialFromError(t){return Zt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Zt.credential(n,r)}catch{return null}}}Zt.GOOGLE_SIGN_IN_METHOD="google.com";Zt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends Fi{constructor(){super("github.com")}static credential(t){return Wn._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return en.credentialFromTaggedObject(t)}static credentialFromError(t){return en.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return en.credential(t.oauthAccessToken)}catch{return null}}}en.GITHUB_SIGN_IN_METHOD="github.com";en.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends Fi{constructor(){super("twitter.com")}static credential(t,n){return Wn._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return tn.credentialFromTaggedObject(t)}static credentialFromError(t){return tn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return tn.credential(n,r)}catch{return null}}}tn.TWITTER_SIGN_IN_METHOD="twitter.com";tn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await bn._fromIdTokenResponse(t,r,i),s=Sf(r);return new Ar({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Sf(r);return new Ar({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Sf(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as extends Rt{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,as.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new as(t,n,r,i)}}function Ym(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?as._fromErrorAndOperation(e,o,t,r):o})}async function CS(e,t,n=!1){const r=await Pr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ar._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TS(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await Pr(e,Ym(r,i,t,e),n);U(o.idToken,r,"internal-error");const s=_c(o.idToken);U(s,r,"internal-error");const{sub:a}=s;return U(e.uid===a,r,"user-mismatch"),Ar._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&xt(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xS(e,t,n=!1){const r="signIn",i=await Ym(e,r,t),o=await Ar._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RS(e,t){return zi(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RI(e,{displayName:t,photoURL:n}){if(t===void 0&&n===void 0)return;const r=Ht(e),o={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},s=await Pr(r,RS(r.auth,o));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}function PS(e,t,n,r){return Ht(e).onIdTokenChanged(t,n,r)}function AS(e,t,n){return Ht(e).beforeAuthStateChanged(t,n)}function OS(e,t,n,r){return Ht(e).onAuthStateChanged(t,n,r)}const ls="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ls,"1"),this.storage.removeItem(ls),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NS(){const e=De();return Sc(e)||Js(e)}const LS=1e3,DS=10;class Jm extends qm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=NS()&&yS(),this.fallbackToPolling=Wm(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(t.newValue!==s)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);vS()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,DS):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},LS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Jm.type="LOCAL";const MS=Jm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm extends qm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Xm.type="SESSION";const Zm=Xm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bS(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Zs(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await bS(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=kc("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(h){const m=h;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(m.data.response);break;default:clearTimeout(d),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(){return window}function US(e){Ct().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eg(){return typeof Ct().WorkerGlobalScope<"u"&&typeof Ct().importScripts=="function"}async function zS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function FS(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function jS(){return eg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg="firebaseLocalStorageDb",BS=1,us="firebaseLocalStorage",ng="fbase_key";class ji{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ea(e,t){return e.transaction([us],t?"readwrite":"readonly").objectStore(us)}function VS(){const e=indexedDB.deleteDatabase(tg);return new ji(e).toPromise()}function ru(){const e=indexedDB.open(tg,BS);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(us,{keyPath:ng})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(us)?t(r):(r.close(),await VS(),t(await ru()))})})}async function Ef(e,t,n){const r=ea(e,!0).put({[ng]:t,value:n});return new ji(r).toPromise()}async function HS(e,t){const n=ea(e,!1).get(t),r=await new ji(n).toPromise();return r===void 0?null:r.value}function kf(e,t){const n=ea(e,!0).delete(t);return new ji(n).toPromise()}const WS=800,GS=3;class rg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ru(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>GS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return eg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zs._getInstance(jS()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await zS(),!this.activeServiceWorker)return;this.sender=new $S(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||FS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ru();return await Ef(t,ls,"1"),await kf(t,ls),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ef(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>HS(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>kf(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=ea(i,!1).getAll();return new ji(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),WS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}rg.type="LOCAL";const KS=rg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QS(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function YS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=It("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",QS().appendChild(r)})}function qS(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new Ui(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ig(e,t){return t?Mt(t):(U(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic extends Qm{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return wr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return wr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return wr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function JS(e){return xS(e.auth,new Ic(e),e.bypassAuthState)}function XS(e){const{auth:t,user:n}=e;return U(n,t,"internal-error"),TS(n,new Ic(e),e.bypassAuthState)}async function ZS(e){const{auth:t,user:n}=e;return U(n,t,"internal-error"),CS(n,new Ic(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return JS;case"linkViaPopup":case"linkViaRedirect":return ZS;case"reauthViaPopup":case"reauthViaRedirect":return XS;default:xt(this.auth,"internal-error")}}resolve(t){Bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eE=new Ui(2e3,1e4);async function PI(e,t,n){const r=Xs(e);Y_(e,t,Ec);const i=ig(r,n);return new Nn(r,"signInViaPopup",t,i).executeNotNull()}class Nn extends og{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Nn.currentPopupAction&&Nn.currentPopupAction.cancel(),Nn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return U(t,this.auth,"internal-error"),t}async onExecution(){Bt(this.filter.length===1,"Popup operations only handle one event");const t=kc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(It(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(It(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Nn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(It(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,eE.get())};t()}}Nn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE="pendingRedirect",Co=new Map;class nE extends og{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Co.get(this.auth._key());if(!t){try{const r=await rE(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Co.set(this.auth._key(),t)}return this.bypassAuthState||Co.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function rE(e,t){const n=sE(t),r=oE(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function iE(e,t){Co.set(e._key(),t)}function oE(e){return Mt(e._redirectPersistence)}function sE(e){return Io(tE,e.config.apiKey,e.name)}async function aE(e,t,n=!1){const r=Xs(e),i=ig(r,t),s=await new nE(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE=10*60*1e3;class uE{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!cE(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!sg(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(It(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=lE&&this.cachedEventUids.clear(),this.cachedEventUids.has(If(t))}saveEventToCache(t){this.cachedEventUids.add(If(t)),this.lastProcessedEventTime=Date.now()}}function If(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function sg({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function cE(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sg(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dE(e,t={}){return zi(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hE=/^https?/;async function pE(e){if(e.config.emulator)return;const{authorizedDomains:t}=await dE(e);for(const n of t)try{if(mE(n))return}catch{}xt(e,"unauthorized-domain")}function mE(e){const t=nu(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!hE.test(n))return!1;if(fE.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gE=new Ui(3e4,6e4);function Cf(){const e=Ct().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function vE(e){return new Promise((t,n)=>{var r,i,o;function s(){Cf(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Cf(),n(It(e,"network-request-failed"))},timeout:gE.get()})}if(!((i=(r=Ct().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=Ct().gapi)===null||o===void 0)&&o.load)s();else{const a=qS("iframefcb");return Ct()[a]=()=>{gapi.load?s():n(It(e,"network-request-failed"))},YS(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw To=null,t})}let To=null;function yE(e){return To=To||vE(e),To}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wE=new Ui(5e3,15e3),_E="__/auth/iframe",SE="emulator/auth/iframe",EE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},kE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function IE(e){const t=e.config;U(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?wc(t,SE):`https://${e.config.authDomain}/${_E}`,r={apiKey:t.apiKey,appName:e.name,v:qs},i=kE.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${$i(r).slice(1)}`}async function CE(e){const t=await yE(e),n=Ct().gapi;return U(n,e,"internal-error"),t.open({where:document.body,url:IE(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:EE,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=It(e,"network-request-failed"),a=Ct().setTimeout(()=>{o(s)},wE.get());function l(){Ct().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xE=500,RE=600,PE="_blank",AE="http://localhost";class Tf{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function OE(e,t,n,r=xE,i=RE){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},TE),{width:r.toString(),height:i.toString(),top:o,left:s}),u=De().toLowerCase();n&&(a=Fm(u)?PE:n),zm(u)&&(t=t||AE,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[y,_])=>`${m}${y}=${_},`,"");if(gS(u)&&a!=="_self")return NE(t||"",a),new Tf(null);const h=window.open(t||"",a,d);U(h,e,"popup-blocked");try{h.focus()}catch{}return new Tf(h)}function NE(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE="__/auth/handler",DE="emulator/auth/handler";function xf(e,t,n,r,i,o){U(e.config.authDomain,e,"auth-domain-config-required"),U(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:qs,eventId:i};if(t instanceof Ec){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",Mw(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[l,u]of Object.entries(o||{}))s[l]=u}if(t instanceof Fi){const l=t.getScopes().filter(u=>u!=="");l.length>0&&(s.scopes=l.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${ME(e)}?${$i(a).slice(1)}`}function ME({config:e}){return e.emulator?wc(e,DE):`https://${e.authDomain}/${LE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja="webStorageSupport";class bE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zm,this._completeRedirectFn=aE,this._overrideRedirectResult=iE}async _openPopup(t,n,r,i){var o;Bt((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=xf(t,n,r,nu(),i);return OE(t,s,kc())}async _openRedirect(t,n,r,i){return await this._originValidation(t),US(xf(t,n,r,nu(),i)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Bt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await CE(t),r=new uE(t);return n.register("authEvent",i=>(U(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(ja,{type:ja},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[ja];s!==void 0&&n(!!s),xt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=pE(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Wm()||Sc()||Js()}}const $E=bE;var Rf="@firebase/auth",Pf="0.21.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zE(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function FE(e){jt(new Tt("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:o,authDomain:s}=r.options;return((a,l)=>{U(o&&!o.includes(":"),"invalid-api-key",{appName:a.name}),U(!(s!=null&&s.includes(":")),"argument-error",{appName:a.name});const u={apiKey:o,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Gm(e)},d=new _S(a,l,u);return J_(d,n),d})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),jt(new Tt("auth-internal",t=>{const n=Xs(t.getProvider("auth").getImmediate());return(r=>new UE(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),kt(Rf,Pf,zE(e)),kt(Rf,Pf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE=5*60,BE=Sm("authIdTokenMaxAge")||jE;let Af=null;const VE=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>BE)return;const i=n==null?void 0:n.token;Af!==i&&(Af=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function HE(e=U_()){const t=Ys(e,"auth");if(t.isInitialized())return t.getImmediate();const n=q_(e,{popupRedirectResolver:$E,persistence:[KS,MS,Zm]}),r=Sm("authTokenSyncURL");if(r){const o=VE(r);AS(n,o,()=>o(n.currentUser)),PS(n,s=>o(s))}const i=Cw("auth");return i&&SS(n,`http://${i}`),n}FE("Browser");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function WE(e,t,n,r){function i(o){return o instanceof n?o:new n(function(s){s(o)})}return new(n||(n=Promise))(function(o,s){function a(d){try{u(r.next(d))}catch(h){s(h)}}function l(d){try{u(r.throw(d))}catch(h){s(h)}}function u(d){d.done?o(d.value):i(d.value).then(a,l)}u((r=r.apply(e,t||[])).next())})}function GE(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(u){return function(d){return l([u,d])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(o=u[0]&2?i.return:u[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;switch(i=0,o&&(u=[u[0]&2,o.value]),u[0]){case 0:case 1:o=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){n.label=u[1];break}if(u[0]===6&&n.label<o[1]){n.label=o[1],o=u;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(u);break}o[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(d){u=[6,d],i=0}finally{r=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var dr=function(){return dr=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},dr.apply(this,arguments)},ag=function(e){return{loading:e==null,value:e}},KE=function(){return function(e,t){switch(t.type){case"error":return dr(dr({},e),{error:t.error,loading:!1,value:void 0});case"reset":return ag(t.defaultValue);case"value":return dr(dr({},e),{error:void 0,loading:!1,value:t.value});default:return e}}},QE=function(e){var t=e?e():void 0,n=I.useReducer(KE(),ag(t)),r=n[0],i=n[1],o=I.useCallback(function(){var l=e?e():void 0;i({type:"reset",defaultValue:l})},[e]),s=I.useCallback(function(l){i({type:"error",error:l})},[]),a=I.useCallback(function(l){i({type:"value",value:l})},[]);return I.useMemo(function(){return{error:r.error,loading:r.loading,reset:o,setError:s,setValue:a,value:r.value}},[r.error,r.loading,o,s,a,r.value])},lg=function(e,t){var n=QE(function(){return e.currentUser}),r=n.error,i=n.loading,o=n.setError,s=n.setValue,a=n.value;return I.useEffect(function(){var l=OS(e,function(u){return WE(void 0,void 0,void 0,function(){var d;return GE(this,function(h){switch(h.label){case 0:if(!(t!=null&&t.onUserChanged))return[3,4];h.label=1;case 1:return h.trys.push([1,3,,4]),[4,t.onUserChanged(u)];case 2:return h.sent(),[3,4];case 3:return d=h.sent(),o(d),[3,4];case 4:return s(u),[2]}})})},o);return function(){l()}},[e]),[a,i,r]},YE="firebase",qE="9.17.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kt(YE,qE,"app");const ug="@firebase/installations",Cc="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg=1e4,dg=`w:${Cc}`,fg="FIS_v2",JE="https://firebaseinstallations.googleapis.com/v1",XE=60*60*1e3,ZE="installations",ek="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tk={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Gn=new qn(ZE,ek,tk);function hg(e){return e instanceof Rt&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg({projectId:e}){return`${JE}/projects/${e}/installations`}function mg(e){return{token:e.token,requestStatus:2,expiresIn:rk(e.expiresIn),creationTime:Date.now()}}async function gg(e,t){const r=(await t.json()).error;return Gn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function vg({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function nk(e,{refreshToken:t}){const n=vg(e);return n.append("Authorization",ik(t)),n}async function yg(e){const t=await e();return t.status>=500&&t.status<600?e():t}function rk(e){return Number(e.replace("s","000"))}function ik(e){return`${fg} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ok({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=pg(e),i=vg(e),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={fid:n,authVersion:fg,appId:e.appId,sdkVersion:dg},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await yg(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:mg(u.authToken)}}else throw await gg("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wg(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sk(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ak=/^[cdef][\w-]{21}$/,iu="";function lk(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=uk(e);return ak.test(n)?n:iu}catch{return iu}}function uk(e){return sk(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g=new Map;function Sg(e,t){const n=ta(e);Eg(n,t),ck(n,t)}function Eg(e,t){const n=_g.get(e);if(n)for(const r of n)r(t)}function ck(e,t){const n=dk();n&&n.postMessage({key:e,fid:t}),fk()}let Ln=null;function dk(){return!Ln&&"BroadcastChannel"in self&&(Ln=new BroadcastChannel("[Firebase] FID Change"),Ln.onmessage=e=>{Eg(e.data.key,e.data.fid)}),Ln}function fk(){_g.size===0&&Ln&&(Ln.close(),Ln=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hk="firebase-installations-database",pk=1,Kn="firebase-installations-store";let Ba=null;function Tc(){return Ba||(Ba=xm(hk,pk,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Kn)}}})),Ba}async function cs(e,t){const n=ta(e),i=(await Tc()).transaction(Kn,"readwrite"),o=i.objectStore(Kn),s=await o.get(n);return await o.put(t,n),await i.done,(!s||s.fid!==t.fid)&&Sg(e,t.fid),t}async function kg(e){const t=ta(e),r=(await Tc()).transaction(Kn,"readwrite");await r.objectStore(Kn).delete(t),await r.done}async function na(e,t){const n=ta(e),i=(await Tc()).transaction(Kn,"readwrite"),o=i.objectStore(Kn),s=await o.get(n),a=t(s);return a===void 0?await o.delete(n):await o.put(a,n),await i.done,a&&(!s||s.fid!==a.fid)&&Sg(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xc(e){let t;const n=await na(e.appConfig,r=>{const i=mk(r),o=gk(e,i);return t=o.registrationPromise,o.installationEntry});return n.fid===iu?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function mk(e){const t=e||{fid:lk(),registrationStatus:0};return Ig(t)}function gk(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Gn.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=vk(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:yk(e)}:{installationEntry:t}}async function vk(e,t){try{const n=await ok(e,t);return cs(e.appConfig,n)}catch(n){throw hg(n)&&n.customData.serverCode===409?await kg(e.appConfig):await cs(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function yk(e){let t=await Of(e.appConfig);for(;t.registrationStatus===1;)await wg(100),t=await Of(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await xc(e);return r||n}return t}function Of(e){return na(e,t=>{if(!t)throw Gn.create("installation-not-found");return Ig(t)})}function Ig(e){return wk(e)?{fid:e.fid,registrationStatus:0}:e}function wk(e){return e.registrationStatus===1&&e.registrationTime+cg<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _k({appConfig:e,heartbeatServiceProvider:t},n){const r=Sk(e,n),i=nk(e,n),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={installation:{sdkVersion:dg,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await yg(()=>fetch(r,a));if(l.ok){const u=await l.json();return mg(u)}else throw await gg("Generate Auth Token",l)}function Sk(e,{fid:t}){return`${pg(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rc(e,t=!1){let n;const r=await na(e.appConfig,o=>{if(!Cg(o))throw Gn.create("not-registered");const s=o.authToken;if(!t&&Ik(s))return o;if(s.requestStatus===1)return n=Ek(e,t),o;{if(!navigator.onLine)throw Gn.create("app-offline");const a=Tk(o);return n=kk(e,a),a}});return n?await n:r.authToken}async function Ek(e,t){let n=await Nf(e.appConfig);for(;n.authToken.requestStatus===1;)await wg(100),n=await Nf(e.appConfig);const r=n.authToken;return r.requestStatus===0?Rc(e,t):r}function Nf(e){return na(e,t=>{if(!Cg(t))throw Gn.create("not-registered");const n=t.authToken;return xk(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function kk(e,t){try{const n=await _k(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await cs(e.appConfig,r),n}catch(n){if(hg(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await kg(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await cs(e.appConfig,r)}throw n}}function Cg(e){return e!==void 0&&e.registrationStatus===2}function Ik(e){return e.requestStatus===2&&!Ck(e)}function Ck(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+XE}function Tk(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function xk(e){return e.requestStatus===1&&e.requestTime+cg<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rk(e){const t=e,{installationEntry:n,registrationPromise:r}=await xc(t);return r?r.catch(console.error):Rc(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pk(e,t=!1){const n=e;return await Ak(n),(await Rc(n,t)).token}async function Ak(e){const{registrationPromise:t}=await xc(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ok(e){if(!e||!e.options)throw Va("App Configuration");if(!e.name)throw Va("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Va(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Va(e){return Gn.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg="installations",Nk="installations-internal",Lk=e=>{const t=e.getProvider("app").getImmediate(),n=Ok(t),r=Ys(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Dk=e=>{const t=e.getProvider("app").getImmediate(),n=Ys(t,Tg).getImmediate();return{getId:()=>Rk(n),getToken:i=>Pk(n,i)}};function Mk(){jt(new Tt(Tg,Lk,"PUBLIC")),jt(new Tt(Nk,Dk,"PRIVATE"))}Mk();kt(ug,Cc);kt(ug,Cc,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf="analytics",bk="firebase_id",$k="origin",Uk=60*1e3,zk="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",xg="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe=new mc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rg(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Fk(e,t){const n=document.createElement("script");n.src=`${xg}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}function jk(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Bk(e,t,n,r,i,o){const s=r[i];try{if(s)await t[s];else{const l=(await Rg(n)).find(u=>u.measurementId===i);l&&await t[l.appId]}}catch(a){qe.error(a)}e("config",i,o)}async function Vk(e,t,n,r,i){try{let o=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const a=await Rg(n);for(const l of s){const u=a.find(h=>h.measurementId===l),d=u&&t[u.appId];if(d)o.push(d);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),e("event",r,i||{})}catch(o){qe.error(o)}}function Hk(e,t,n,r){async function i(o,s,a){try{o==="event"?await Vk(e,t,n,s,a):o==="config"?await Bk(e,t,n,r,s,a):o==="consent"?e("consent","update",a):e("set",s)}catch(l){qe.error(l)}}return i}function Wk(e,t,n,r,i){let o=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=Hk(o,e,t,n),{gtagCore:o,wrappedGtag:window[i]}}function Gk(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(xg)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kk={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},gt=new qn("analytics","Analytics",Kk);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qk=30,Yk=1e3;class qk{constructor(t={},n=Yk){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Pg=new qk;function Jk(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Xk(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:Jk(r)},o=zk.replace("{app-id}",n),s=await fetch(o,i);if(s.status!==200&&s.status!==304){let a="";try{const l=await s.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw gt.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function Zk(e,t=Pg,n){const{appId:r,apiKey:i,measurementId:o}=e.options;if(!r)throw gt.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw gt.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new nI;return setTimeout(async()=>{a.abort()},n!==void 0?n:Uk),Ag({appId:r,apiKey:i,measurementId:o},s,a,t)}async function Ag(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Pg){var o;const{appId:s,measurementId:a}=e;try{await eI(r,t)}catch(l){if(a)return qe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:a};throw l}try{const l=await Xk(e);return i.deleteThrottleMetadata(s),l}catch(l){const u=l;if(!tI(u)){if(i.deleteThrottleMetadata(s),a)return qe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:a};throw l}const d=Number((o=u==null?void 0:u.customData)===null||o===void 0?void 0:o.httpStatus)===503?sf(n,i.intervalMillis,Qk):sf(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(s,h),qe.debug(`Calling attemptFetch again in ${d} millis`),Ag(e,h,r,i)}}function eI(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(o),r(gt.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function tI(e){if(!(e instanceof Rt)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class nI{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function rI(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const o=await t,s=Object.assign(Object.assign({},r),{send_to:o});e("event",n,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iI(){if(km())try{await Im()}catch(e){return qe.warn(gt.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return qe.warn(gt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function oI(e,t,n,r,i,o,s){var a;const l=Zk(e);l.then(y=>{n[y.measurementId]=y.appId,e.options.measurementId&&y.measurementId!==e.options.measurementId&&qe.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${y.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(y=>qe.error(y)),t.push(l);const u=iI().then(y=>{if(y)return r.getId()}),[d,h]=await Promise.all([l,u]);Gk(o)||Fk(o,d.measurementId),i("js",new Date);const m=(a=s==null?void 0:s.config)!==null&&a!==void 0?a:{};return m[$k]="firebase",m.update=!0,h!=null&&(m[bk]=h),i("config",d.measurementId,m),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(t){this.app=t}_delete(){return delete ui[this.app.options.appId],Promise.resolve()}}let ui={},Df=[];const Mf={};let Ha="dataLayer",aI="gtag",bf,Og,$f=!1;function lI(){const e=[];if(Em()&&e.push("This is a browser extension environment."),Ow()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=gt.create("invalid-analytics-context",{errorInfo:t});qe.warn(n.message)}}function uI(e,t,n){lI();const r=e.options.appId;if(!r)throw gt.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)qe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw gt.create("no-api-key");if(ui[r]!=null)throw gt.create("already-exists",{id:r});if(!$f){jk(Ha);const{wrappedGtag:o,gtagCore:s}=Wk(ui,Df,Mf,Ha,aI);Og=o,bf=s,$f=!0}return ui[r]=oI(e,Df,Mf,t,bf,Ha,n),new sI(e)}function cI(e,t,n,r){e=Ht(e),rI(Og,ui[e.app.options.appId],t,n,r).catch(i=>qe.error(i))}const Uf="@firebase/analytics",zf="0.9.4";function dI(){jt(new Tt(Lf,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return uI(r,i,n)},"PUBLIC")),jt(new Tt("analytics-internal",e,"PRIVATE")),kt(Uf,zf),kt(Uf,zf,"esm2017");function e(t){try{const n=t.getProvider(Lf).getImmediate();return{logEvent:(r,i,o)=>cI(n,r,i,o)}}catch(n){throw gt.create("interop-component-reg-failed",{reason:n})}}}dI();const fI={apiKey:"AIzaSyAbJwGwRo_h-fRvWzbQOLjJ-AS6uFgbOTg",authDomain:"r-test-a77d8.firebaseapp.com",projectId:"r-test-a77d8",storageBucket:"r-test-a77d8.appspot.com",messagingSenderId:"741368384709",appId:"1:741368384709:web:61308690c7a0b5677e74ac",measurementId:"G-JSN7MR2SHK"};Rm(fI);const Ng=HE(),hI=({component:e,redirectTo:t="/auth"})=>(lg(Ng),localStorage.getItem("USER")?e:Z.jsx(em,{to:t})),pI=({component:e,redirectTo:t="/dashboard"})=>{const[n]=lg(Ng);return n?Z.jsx(em,{to:t}):e},mI=I.lazy(()=>bi(()=>import("./index-aa51b96a.js"),["assets/index-aa51b96a.js","assets/Loader-3af67ec5.js","assets/react-toastify.esm-ffc341bc.js","assets/index-cca67129.css"])),gI=I.lazy(()=>bi(()=>import("./index-61b48d23.js"),["assets/index-61b48d23.js","assets/iconBase-af38a13d.js"])),vI=I.lazy(()=>bi(()=>import("./index-aa205025.js"),["assets/index-aa205025.js","assets/iconBase-af38a13d.js","assets/Loader-3af67ec5.js","assets/react-toastify.esm-ffc341bc.js","assets/rickandmorty-api-43a2f9f2.js"])),yI=I.lazy(()=>bi(()=>import("./index-1445247c.js"),["assets/index-1445247c.js","assets/iconBase-af38a13d.js","assets/Loader-3af67ec5.js","assets/react-toastify.esm-ffc341bc.js","assets/rickandmorty-api-43a2f9f2.js"])),wI=I.lazy(()=>bi(()=>import("./index-0c14b521.js"),["assets/index-0c14b521.js","assets/Loader-3af67ec5.js","assets/iconBase-af38a13d.js"]));function _I(){return Z.jsx(Z.Fragment,{children:Z.jsxs(r1,{children:[Z.jsxs(xn,{path:"/",element:Z.jsx(mI,{}),children:[Z.jsx(xn,{index:!0,element:Z.jsx(vI,{})}),Z.jsx(xn,{path:"character/:characterId",element:Z.jsx(yI,{})}),Z.jsx(xn,{path:"/auth",element:Z.jsx(pI,{redirectTo:"/dashboard",component:Z.jsx(gI,{})})}),Z.jsx(xn,{path:"dashboard",element:Z.jsx(hI,{redirectTo:"/auth",component:Z.jsx(wI,{})})})]}),Z.jsx(xn,{path:"*",element:Z.jsx(vw,{})})]})})}const SI={colors:{primary:"rgb(0,176,200)",accent:"rgb(182,254,167)",white:"rgba(255, 255, 255, 1)",black:"rgba(0, 0, 0, 1)",searchText:"rgba(0, 0, 0, 0.5)",searchIcon:"rgba(0, 0, 0, 0.54)",cardTitle:"rgba(0, 0, 0, 0.87)",cardText:"rgba(0, 0, 0, 0.6)",informationIcon:"rgba(242, 242, 247, 1)",infoCharacterTitle:"rgba(8, 31, 50, 1)",informationTitle:"rgba(142, 142, 147, 1)",informationBorderLine:"rgba(33, 33, 33, 0.08)",informationText:"rgba(110, 121, 140, 1)",facebook:"rgba(24, 119, 242, 1)"},media:{mobileMin:"(min-width: 360px)",mobileMax:"(max-width: 767px)",tablet:"(min-width: 768px)",desktop:"(min-width: 1020px)"},space:[0,2,4,8,16,32,64,128,256],fontSizes:{xs:"14px",s:"16px",m:"18px",l:"20px",xl:"32px",xxl:"48px"},fontWeights:{normal:400,semiBold:500,bold:700},lineHeights:{goBack:1.16,characterTitle:1.17,informationTitle:1.2,informationText:1.43,body:1.5},letterSpacing:{body:"0.15px",cardText:"0.25px"},borders:{none:"none",normal:"1px solid",large:"5px solid"},radii:{none:"0",normal:"4px",large:"8px",round:"50%"},boxShadow:{shadowCard:"0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14)",shadowAccent:"0px 1px 5px rgb(182,254,167, 1), 0px 3px 4px rgb(182,254,167, 0.9), 0px 2px 4px rgb(182,254,167, 0.8)",shadowPrimary:"0px 1px 5px rgb(0,176,200,1), 0px 3px 4px rgb(0,176,200,0.9), 0px 2px 4px rgb(0,176,200,0.8)"},fonts:{goBack:"Karla",main:"Roboto"},transition:"250ms cubic-bezier(0.4, 0, 0.2, 1)"},EI=pw`
html {
  box-sizing: border-box;
  width: 100vw;
  font-family: Karla, system-ui, Roboto, sans-serif;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -moz-tab-size: 4;
  tab-size: 4;
  overflow-x: hidden;
}
*,
::after,
::before {
  box-sizing: inherit;
}

body {
  margin: 0;
  font-family: ${e=>e.theme.fonts.main};
  background-color: ${e=>e.theme.colors.white};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  &::-webkit-scrollbar {
    width: 0px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${e=>e.theme.colors.white};
    border-radius: ${e=>e.theme.borders.normal};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${e=>e.theme.colors.black};
    border-radius: ${e=>e.theme.borders.normal};
  }
}

a {
  text-decoration: none;
}

ul, ol{
  margin: 0;
  padding: 0;
  list-style: none;
}

h1, h2, h3, h4, h5, h6, p{
  margin: 0;
  padding: 0;
}

table {
  text-indent: 0;
  border-color: inherit;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}
button{
  cursor: pointer;
  border: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error {
}
`;Ga.createRoot(document.getElementById("root")).render(Z.jsx(_n.StrictMode,{children:Z.jsx(u1,{basename:"/r_test/",children:Z.jsxs(fw,{theme:SI,children:[Z.jsx(_I,{}),Z.jsx(EI,{})]})})}));export{Xt as F,Zt as G,CI as N,II as O,_n as R,xI as U,Ng as a,PI as b,RI as c,$r as d,TI as e,vw as f,tc as g,b1 as h,kI as i,Z as j,I as r,mw as s,lg as u};
