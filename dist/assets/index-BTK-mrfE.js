var Fg=Object.defineProperty;var Su=e=>{throw TypeError(e)};var $g=(e,t,n)=>t in e?Fg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var I=(e,t,n)=>$g(e,typeof t!="symbol"?t+"":t,n),pa=(e,t,n)=>t.has(e)||Su("Cannot "+n);var E=(e,t,n)=>(pa(e,t,"read from private field"),n?n.call(e):t.get(e)),J=(e,t,n)=>t.has(e)?Su("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),B=(e,t,n,r)=>(pa(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),Ne=(e,t,n)=>(pa(e,t,"access private method"),n);var vo=(e,t,n,r)=>({set _(i){B(e,t,i,n)},get _(){return E(e,t,r)}});function Wg(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Tf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Rf={exports:{}},As={},Of={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oo=Symbol.for("react.element"),Ug=Symbol.for("react.portal"),Bg=Symbol.for("react.fragment"),Hg=Symbol.for("react.strict_mode"),Vg=Symbol.for("react.profiler"),Yg=Symbol.for("react.provider"),Qg=Symbol.for("react.context"),Kg=Symbol.for("react.forward_ref"),qg=Symbol.for("react.suspense"),Gg=Symbol.for("react.memo"),Xg=Symbol.for("react.lazy"),ju=Symbol.iterator;function Zg(e){return e===null||typeof e!="object"?null:(e=ju&&e[ju]||e["@@iterator"],typeof e=="function"?e:null)}var Af={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mf=Object.assign,Lf={};function ri(e,t,n){this.props=e,this.context=t,this.refs=Lf,this.updater=n||Af}ri.prototype.isReactComponent={};ri.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ri.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function _f(){}_f.prototype=ri.prototype;function rc(e,t,n){this.props=e,this.context=t,this.refs=Lf,this.updater=n||Af}var ic=rc.prototype=new _f;ic.constructor=rc;Mf(ic,ri.prototype);ic.isPureReactComponent=!0;var zu=Array.isArray,Df=Object.prototype.hasOwnProperty,oc={current:null},If={key:!0,ref:!0,__self:!0,__source:!0};function Ff(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Df.call(t,r)&&!If.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:oo,type:e,key:o,ref:s,props:i,_owner:oc.current}}function Jg(e,t){return{$$typeof:oo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function sc(e){return typeof e=="object"&&e!==null&&e.$$typeof===oo}function e0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Eu=/\/+/g;function ha(e,t){return typeof e=="object"&&e!==null&&e.key!=null?e0(""+e.key):t.toString(36)}function Wo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case oo:case Ug:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+ha(s,0):r,zu(i)?(n="",e!=null&&(n=e.replace(Eu,"$&/")+"/"),Wo(i,t,n,"",function(u){return u})):i!=null&&(sc(i)&&(i=Jg(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Eu,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",zu(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+ha(o,a);s+=Wo(o,t,n,l,i)}else if(l=Zg(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+ha(o,a++),s+=Wo(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function yo(e,t,n){if(e==null)return e;var r=[],i=0;return Wo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function t0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var De={current:null},Uo={transition:null},n0={ReactCurrentDispatcher:De,ReactCurrentBatchConfig:Uo,ReactCurrentOwner:oc};function $f(){throw Error("act(...) is not supported in production builds of React.")}q.Children={map:yo,forEach:function(e,t,n){yo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return yo(e,function(){t++}),t},toArray:function(e){return yo(e,function(t){return t})||[]},only:function(e){if(!sc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};q.Component=ri;q.Fragment=Bg;q.Profiler=Vg;q.PureComponent=rc;q.StrictMode=Hg;q.Suspense=qg;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=n0;q.act=$f;q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Mf({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=oc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Df.call(t,l)&&!If.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:oo,type:e.type,key:i,ref:o,props:r,_owner:s}};q.createContext=function(e){return e={$$typeof:Qg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Yg,_context:e},e.Consumer=e};q.createElement=Ff;q.createFactory=function(e){var t=Ff.bind(null,e);return t.type=e,t};q.createRef=function(){return{current:null}};q.forwardRef=function(e){return{$$typeof:Kg,render:e}};q.isValidElement=sc;q.lazy=function(e){return{$$typeof:Xg,_payload:{_status:-1,_result:e},_init:t0}};q.memo=function(e,t){return{$$typeof:Gg,type:e,compare:t===void 0?null:t}};q.startTransition=function(e){var t=Uo.transition;Uo.transition={};try{e()}finally{Uo.transition=t}};q.unstable_act=$f;q.useCallback=function(e,t){return De.current.useCallback(e,t)};q.useContext=function(e){return De.current.useContext(e)};q.useDebugValue=function(){};q.useDeferredValue=function(e){return De.current.useDeferredValue(e)};q.useEffect=function(e,t){return De.current.useEffect(e,t)};q.useId=function(){return De.current.useId()};q.useImperativeHandle=function(e,t,n){return De.current.useImperativeHandle(e,t,n)};q.useInsertionEffect=function(e,t){return De.current.useInsertionEffect(e,t)};q.useLayoutEffect=function(e,t){return De.current.useLayoutEffect(e,t)};q.useMemo=function(e,t){return De.current.useMemo(e,t)};q.useReducer=function(e,t,n){return De.current.useReducer(e,t,n)};q.useRef=function(e){return De.current.useRef(e)};q.useState=function(e){return De.current.useState(e)};q.useSyncExternalStore=function(e,t,n){return De.current.useSyncExternalStore(e,t,n)};q.useTransition=function(){return De.current.useTransition()};q.version="18.3.1";Of.exports=q;var b=Of.exports;const R=Tf(b),Wf=Wg({__proto__:null,default:R},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r0=b,i0=Symbol.for("react.element"),o0=Symbol.for("react.fragment"),s0=Object.prototype.hasOwnProperty,a0=r0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l0={key:!0,ref:!0,__self:!0,__source:!0};function Uf(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)s0.call(t,r)&&!l0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:i0,type:e,key:o,ref:s,props:i,_owner:a0.current}}As.Fragment=o0;As.jsx=Uf;As.jsxs=Uf;Rf.exports=As;var c=Rf.exports,Ka={},Bf={exports:{}},Je={},Hf={exports:{}},Vf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,C){var L=N.length;N.push(C);e:for(;0<L;){var V=L-1>>>1,F=N[V];if(0<i(F,C))N[V]=C,N[L]=F,L=V;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var C=N[0],L=N.pop();if(L!==C){N[0]=L;e:for(var V=0,F=N.length,K=F>>>1;V<K;){var X=2*(V+1)-1,me=N[X],Ee=X+1,ee=N[Ee];if(0>i(me,L))Ee<F&&0>i(ee,me)?(N[V]=ee,N[Ee]=L,V=Ee):(N[V]=me,N[X]=L,V=X);else if(Ee<F&&0>i(ee,L))N[V]=ee,N[Ee]=L,V=Ee;else break e}}return C}function i(N,C){var L=N.sortIndex-C.sortIndex;return L!==0?L:N.id-C.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],f=1,h=null,d=3,p=!1,w=!1,v=!1,x=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(N){for(var C=n(u);C!==null;){if(C.callback===null)r(u);else if(C.startTime<=N)r(u),C.sortIndex=C.expirationTime,t(l,C);else break;C=n(u)}}function k(N){if(v=!1,y(N),!w)if(n(l)!==null)w=!0,W(S);else{var C=n(u);C!==null&&H(k,C.startTime-N)}}function S(N,C){w=!1,v&&(v=!1,g(P),P=-1),p=!0;var L=d;try{for(y(C),h=n(l);h!==null&&(!(h.expirationTime>C)||N&&!$());){var V=h.callback;if(typeof V=="function"){h.callback=null,d=h.priorityLevel;var F=V(h.expirationTime<=C);C=e.unstable_now(),typeof F=="function"?h.callback=F:h===n(l)&&r(l),y(C)}else r(l);h=n(l)}if(h!==null)var K=!0;else{var X=n(u);X!==null&&H(k,X.startTime-C),K=!1}return K}finally{h=null,d=L,p=!1}}var j=!1,z=null,P=-1,A=5,O=-1;function $(){return!(e.unstable_now()-O<A)}function D(){if(z!==null){var N=e.unstable_now();O=N;var C=!0;try{C=z(!0,N)}finally{C?Q():(j=!1,z=null)}}else j=!1}var Q;if(typeof m=="function")Q=function(){m(D)};else if(typeof MessageChannel<"u"){var M=new MessageChannel,G=M.port2;M.port1.onmessage=D,Q=function(){G.postMessage(null)}}else Q=function(){x(D,0)};function W(N){z=N,j||(j=!0,Q())}function H(N,C){P=x(function(){N(e.unstable_now())},C)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){w||p||(w=!0,W(S))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(N){switch(d){case 1:case 2:case 3:var C=3;break;default:C=d}var L=d;d=C;try{return N()}finally{d=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,C){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var L=d;d=N;try{return C()}finally{d=L}},e.unstable_scheduleCallback=function(N,C,L){var V=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?V+L:V):L=V,N){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=L+F,N={id:f++,callback:C,priorityLevel:N,startTime:L,expirationTime:F,sortIndex:-1},L>V?(N.sortIndex=L,t(u,N),n(l)===null&&N===n(u)&&(v?(g(P),P=-1):v=!0,H(k,L-V))):(N.sortIndex=F,t(l,N),w||p||(w=!0,W(S))),N},e.unstable_shouldYield=$,e.unstable_wrapCallback=function(N){var C=d;return function(){var L=d;d=C;try{return N.apply(this,arguments)}finally{d=L}}}})(Vf);Hf.exports=Vf;var c0=Hf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u0=b,Ze=c0;function T(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Yf=new Set,_i={};function cr(e,t){Kr(e,t),Kr(e+"Capture",t)}function Kr(e,t){for(_i[e]=t,e=0;e<t.length;e++)Yf.add(t[e])}var Qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qa=Object.prototype.hasOwnProperty,d0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Nu={},Cu={};function f0(e){return qa.call(Cu,e)?!0:qa.call(Nu,e)?!1:d0.test(e)?Cu[e]=!0:(Nu[e]=!0,!1)}function p0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function h0(e,t,n,r){if(t===null||typeof t>"u"||p0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ie(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ze[e]=new Ie(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ze[t]=new Ie(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ze[e]=new Ie(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ze[e]=new Ie(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ze[e]=new Ie(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ze[e]=new Ie(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ze[e]=new Ie(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ze[e]=new Ie(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ze[e]=new Ie(e,5,!1,e.toLowerCase(),null,!1,!1)});var ac=/[\-:]([a-z])/g;function lc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ac,lc);ze[t]=new Ie(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ac,lc);ze[t]=new Ie(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ac,lc);ze[t]=new Ie(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ze[e]=new Ie(e,1,!1,e.toLowerCase(),null,!1,!1)});ze.xlinkHref=new Ie("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ze[e]=new Ie(e,1,!1,e.toLowerCase(),null,!0,!0)});function cc(e,t,n,r){var i=ze.hasOwnProperty(t)?ze[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(h0(t,n,i,r)&&(n=null),r||i===null?f0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Jt=u0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xo=Symbol.for("react.element"),xr=Symbol.for("react.portal"),wr=Symbol.for("react.fragment"),uc=Symbol.for("react.strict_mode"),Ga=Symbol.for("react.profiler"),Qf=Symbol.for("react.provider"),Kf=Symbol.for("react.context"),dc=Symbol.for("react.forward_ref"),Xa=Symbol.for("react.suspense"),Za=Symbol.for("react.suspense_list"),fc=Symbol.for("react.memo"),fn=Symbol.for("react.lazy"),qf=Symbol.for("react.offscreen"),Pu=Symbol.iterator;function di(e){return e===null||typeof e!="object"?null:(e=Pu&&e[Pu]||e["@@iterator"],typeof e=="function"?e:null)}var de=Object.assign,ma;function bi(e){if(ma===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ma=t&&t[1]||""}return`
`+ma+e}var ga=!1;function va(e,t){if(!e||ga)return"";ga=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{ga=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?bi(e):""}function m0(e){switch(e.tag){case 5:return bi(e.type);case 16:return bi("Lazy");case 13:return bi("Suspense");case 19:return bi("SuspenseList");case 0:case 2:case 15:return e=va(e.type,!1),e;case 11:return e=va(e.type.render,!1),e;case 1:return e=va(e.type,!0),e;default:return""}}function Ja(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case wr:return"Fragment";case xr:return"Portal";case Ga:return"Profiler";case uc:return"StrictMode";case Xa:return"Suspense";case Za:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Kf:return(e.displayName||"Context")+".Consumer";case Qf:return(e._context.displayName||"Context")+".Provider";case dc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case fc:return t=e.displayName||null,t!==null?t:Ja(e.type)||"Memo";case fn:t=e._payload,e=e._init;try{return Ja(e(t))}catch{}}return null}function g0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ja(t);case 8:return t===uc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function On(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Gf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function v0(e){var t=Gf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function wo(e){e._valueTracker||(e._valueTracker=v0(e))}function Xf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Gf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ns(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function el(e,t){var n=t.checked;return de({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Tu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=On(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Zf(e,t){t=t.checked,t!=null&&cc(e,"checked",t,!1)}function tl(e,t){Zf(e,t);var n=On(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?nl(e,t.type,n):t.hasOwnProperty("defaultValue")&&nl(e,t.type,On(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ru(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function nl(e,t,n){(t!=="number"||ns(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ki=Array.isArray;function Rr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+On(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function rl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(T(91));return de({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ou(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(T(92));if(ki(n)){if(1<n.length)throw Error(T(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:On(n)}}function Jf(e,t){var n=On(t.value),r=On(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Au(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ep(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function il(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ep(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var bo,tp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(bo=bo||document.createElement("div"),bo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=bo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Di(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ei={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},y0=["Webkit","ms","Moz","O"];Object.keys(Ei).forEach(function(e){y0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ei[t]=Ei[e]})});function np(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ei.hasOwnProperty(e)&&Ei[e]?(""+t).trim():t+"px"}function rp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=np(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var x0=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ol(e,t){if(t){if(x0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(T(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(T(61))}if(t.style!=null&&typeof t.style!="object")throw Error(T(62))}}function sl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var al=null;function pc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ll=null,Or=null,Ar=null;function Mu(e){if(e=lo(e)){if(typeof ll!="function")throw Error(T(280));var t=e.stateNode;t&&(t=Is(t),ll(e.stateNode,e.type,t))}}function ip(e){Or?Ar?Ar.push(e):Ar=[e]:Or=e}function op(){if(Or){var e=Or,t=Ar;if(Ar=Or=null,Mu(e),t)for(e=0;e<t.length;e++)Mu(t[e])}}function sp(e,t){return e(t)}function ap(){}var ya=!1;function lp(e,t,n){if(ya)return e(t,n);ya=!0;try{return sp(e,t,n)}finally{ya=!1,(Or!==null||Ar!==null)&&(ap(),op())}}function Ii(e,t){var n=e.stateNode;if(n===null)return null;var r=Is(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(T(231,t,typeof n));return n}var cl=!1;if(Qt)try{var fi={};Object.defineProperty(fi,"passive",{get:function(){cl=!0}}),window.addEventListener("test",fi,fi),window.removeEventListener("test",fi,fi)}catch{cl=!1}function w0(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var Ni=!1,rs=null,is=!1,ul=null,b0={onError:function(e){Ni=!0,rs=e}};function k0(e,t,n,r,i,o,s,a,l){Ni=!1,rs=null,w0.apply(b0,arguments)}function S0(e,t,n,r,i,o,s,a,l){if(k0.apply(this,arguments),Ni){if(Ni){var u=rs;Ni=!1,rs=null}else throw Error(T(198));is||(is=!0,ul=u)}}function ur(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function cp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Lu(e){if(ur(e)!==e)throw Error(T(188))}function j0(e){var t=e.alternate;if(!t){if(t=ur(e),t===null)throw Error(T(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Lu(i),e;if(o===r)return Lu(i),t;o=o.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?e:t}function up(e){return e=j0(e),e!==null?dp(e):null}function dp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=dp(e);if(t!==null)return t;e=e.sibling}return null}var fp=Ze.unstable_scheduleCallback,_u=Ze.unstable_cancelCallback,z0=Ze.unstable_shouldYield,E0=Ze.unstable_requestPaint,he=Ze.unstable_now,N0=Ze.unstable_getCurrentPriorityLevel,hc=Ze.unstable_ImmediatePriority,pp=Ze.unstable_UserBlockingPriority,os=Ze.unstable_NormalPriority,C0=Ze.unstable_LowPriority,hp=Ze.unstable_IdlePriority,Ms=null,Mt=null;function P0(e){if(Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(Ms,e,void 0,(e.current.flags&128)===128)}catch{}}var bt=Math.clz32?Math.clz32:O0,T0=Math.log,R0=Math.LN2;function O0(e){return e>>>=0,e===0?32:31-(T0(e)/R0|0)|0}var ko=64,So=4194304;function Si(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ss(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Si(a):(o&=s,o!==0&&(r=Si(o)))}else s=n&~i,s!==0?r=Si(s):o!==0&&(r=Si(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-bt(t),i=1<<n,r|=e[n],t&=~i;return r}function A0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function M0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-bt(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=A0(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function dl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function mp(){var e=ko;return ko<<=1,!(ko&4194240)&&(ko=64),e}function xa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function so(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-bt(t),e[t]=n}function L0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-bt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function mc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-bt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var te=0;function gp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var vp,gc,yp,xp,wp,fl=!1,jo=[],jn=null,zn=null,En=null,Fi=new Map,$i=new Map,hn=[],_0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Du(e,t){switch(e){case"focusin":case"focusout":jn=null;break;case"dragenter":case"dragleave":zn=null;break;case"mouseover":case"mouseout":En=null;break;case"pointerover":case"pointerout":Fi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$i.delete(t.pointerId)}}function pi(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=lo(t),t!==null&&gc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function D0(e,t,n,r,i){switch(t){case"focusin":return jn=pi(jn,e,t,n,r,i),!0;case"dragenter":return zn=pi(zn,e,t,n,r,i),!0;case"mouseover":return En=pi(En,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Fi.set(o,pi(Fi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,$i.set(o,pi($i.get(o)||null,e,t,n,r,i)),!0}return!1}function bp(e){var t=Yn(e.target);if(t!==null){var n=ur(t);if(n!==null){if(t=n.tag,t===13){if(t=cp(n),t!==null){e.blockedOn=t,wp(e.priority,function(){yp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Bo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=pl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);al=r,n.target.dispatchEvent(r),al=null}else return t=lo(n),t!==null&&gc(t),e.blockedOn=n,!1;t.shift()}return!0}function Iu(e,t,n){Bo(e)&&n.delete(t)}function I0(){fl=!1,jn!==null&&Bo(jn)&&(jn=null),zn!==null&&Bo(zn)&&(zn=null),En!==null&&Bo(En)&&(En=null),Fi.forEach(Iu),$i.forEach(Iu)}function hi(e,t){e.blockedOn===t&&(e.blockedOn=null,fl||(fl=!0,Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority,I0)))}function Wi(e){function t(i){return hi(i,e)}if(0<jo.length){hi(jo[0],e);for(var n=1;n<jo.length;n++){var r=jo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(jn!==null&&hi(jn,e),zn!==null&&hi(zn,e),En!==null&&hi(En,e),Fi.forEach(t),$i.forEach(t),n=0;n<hn.length;n++)r=hn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<hn.length&&(n=hn[0],n.blockedOn===null);)bp(n),n.blockedOn===null&&hn.shift()}var Mr=Jt.ReactCurrentBatchConfig,as=!0;function F0(e,t,n,r){var i=te,o=Mr.transition;Mr.transition=null;try{te=1,vc(e,t,n,r)}finally{te=i,Mr.transition=o}}function $0(e,t,n,r){var i=te,o=Mr.transition;Mr.transition=null;try{te=4,vc(e,t,n,r)}finally{te=i,Mr.transition=o}}function vc(e,t,n,r){if(as){var i=pl(e,t,n,r);if(i===null)Pa(e,t,r,ls,n),Du(e,r);else if(D0(i,e,t,n,r))r.stopPropagation();else if(Du(e,r),t&4&&-1<_0.indexOf(e)){for(;i!==null;){var o=lo(i);if(o!==null&&vp(o),o=pl(e,t,n,r),o===null&&Pa(e,t,r,ls,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Pa(e,t,r,null,n)}}var ls=null;function pl(e,t,n,r){if(ls=null,e=pc(r),e=Yn(e),e!==null)if(t=ur(e),t===null)e=null;else if(n=t.tag,n===13){if(e=cp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ls=e,null}function kp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(N0()){case hc:return 1;case pp:return 4;case os:case C0:return 16;case hp:return 536870912;default:return 16}default:return 16}}var bn=null,yc=null,Ho=null;function Sp(){if(Ho)return Ho;var e,t=yc,n=t.length,r,i="value"in bn?bn.value:bn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Ho=i.slice(e,1<r?1-r:void 0)}function Vo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function zo(){return!0}function Fu(){return!1}function et(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?zo:Fu,this.isPropagationStopped=Fu,this}return de(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zo)},persist:function(){},isPersistent:zo}),t}var ii={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xc=et(ii),ao=de({},ii,{view:0,detail:0}),W0=et(ao),wa,ba,mi,Ls=de({},ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mi&&(mi&&e.type==="mousemove"?(wa=e.screenX-mi.screenX,ba=e.screenY-mi.screenY):ba=wa=0,mi=e),wa)},movementY:function(e){return"movementY"in e?e.movementY:ba}}),$u=et(Ls),U0=de({},Ls,{dataTransfer:0}),B0=et(U0),H0=de({},ao,{relatedTarget:0}),ka=et(H0),V0=de({},ii,{animationName:0,elapsedTime:0,pseudoElement:0}),Y0=et(V0),Q0=de({},ii,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),K0=et(Q0),q0=de({},ii,{data:0}),Wu=et(q0),G0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},X0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Z0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function J0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Z0[e])?!!t[e]:!1}function wc(){return J0}var ev=de({},ao,{key:function(e){if(e.key){var t=G0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?X0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wc,charCode:function(e){return e.type==="keypress"?Vo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),tv=et(ev),nv=de({},Ls,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uu=et(nv),rv=de({},ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wc}),iv=et(rv),ov=de({},ii,{propertyName:0,elapsedTime:0,pseudoElement:0}),sv=et(ov),av=de({},Ls,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),lv=et(av),cv=[9,13,27,32],bc=Qt&&"CompositionEvent"in window,Ci=null;Qt&&"documentMode"in document&&(Ci=document.documentMode);var uv=Qt&&"TextEvent"in window&&!Ci,jp=Qt&&(!bc||Ci&&8<Ci&&11>=Ci),Bu=" ",Hu=!1;function zp(e,t){switch(e){case"keyup":return cv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ep(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var br=!1;function dv(e,t){switch(e){case"compositionend":return Ep(t);case"keypress":return t.which!==32?null:(Hu=!0,Bu);case"textInput":return e=t.data,e===Bu&&Hu?null:e;default:return null}}function fv(e,t){if(br)return e==="compositionend"||!bc&&zp(e,t)?(e=Sp(),Ho=yc=bn=null,br=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return jp&&t.locale!=="ko"?null:t.data;default:return null}}var pv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!pv[e.type]:t==="textarea"}function Np(e,t,n,r){ip(r),t=cs(t,"onChange"),0<t.length&&(n=new xc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Pi=null,Ui=null;function hv(e){Ip(e,0)}function _s(e){var t=jr(e);if(Xf(t))return e}function mv(e,t){if(e==="change")return t}var Cp=!1;if(Qt){var Sa;if(Qt){var ja="oninput"in document;if(!ja){var Yu=document.createElement("div");Yu.setAttribute("oninput","return;"),ja=typeof Yu.oninput=="function"}Sa=ja}else Sa=!1;Cp=Sa&&(!document.documentMode||9<document.documentMode)}function Qu(){Pi&&(Pi.detachEvent("onpropertychange",Pp),Ui=Pi=null)}function Pp(e){if(e.propertyName==="value"&&_s(Ui)){var t=[];Np(t,Ui,e,pc(e)),lp(hv,t)}}function gv(e,t,n){e==="focusin"?(Qu(),Pi=t,Ui=n,Pi.attachEvent("onpropertychange",Pp)):e==="focusout"&&Qu()}function vv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _s(Ui)}function yv(e,t){if(e==="click")return _s(t)}function xv(e,t){if(e==="input"||e==="change")return _s(t)}function wv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var St=typeof Object.is=="function"?Object.is:wv;function Bi(e,t){if(St(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!qa.call(t,i)||!St(e[i],t[i]))return!1}return!0}function Ku(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qu(e,t){var n=Ku(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ku(n)}}function Tp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Tp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Rp(){for(var e=window,t=ns();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ns(e.document)}return t}function kc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function bv(e){var t=Rp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Tp(n.ownerDocument.documentElement,n)){if(r!==null&&kc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=qu(n,o);var s=qu(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var kv=Qt&&"documentMode"in document&&11>=document.documentMode,kr=null,hl=null,Ti=null,ml=!1;function Gu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ml||kr==null||kr!==ns(r)||(r=kr,"selectionStart"in r&&kc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ti&&Bi(Ti,r)||(Ti=r,r=cs(hl,"onSelect"),0<r.length&&(t=new xc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=kr)))}function Eo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Sr={animationend:Eo("Animation","AnimationEnd"),animationiteration:Eo("Animation","AnimationIteration"),animationstart:Eo("Animation","AnimationStart"),transitionend:Eo("Transition","TransitionEnd")},za={},Op={};Qt&&(Op=document.createElement("div").style,"AnimationEvent"in window||(delete Sr.animationend.animation,delete Sr.animationiteration.animation,delete Sr.animationstart.animation),"TransitionEvent"in window||delete Sr.transitionend.transition);function Ds(e){if(za[e])return za[e];if(!Sr[e])return e;var t=Sr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Op)return za[e]=t[n];return e}var Ap=Ds("animationend"),Mp=Ds("animationiteration"),Lp=Ds("animationstart"),_p=Ds("transitionend"),Dp=new Map,Xu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function In(e,t){Dp.set(e,t),cr(t,[e])}for(var Ea=0;Ea<Xu.length;Ea++){var Na=Xu[Ea],Sv=Na.toLowerCase(),jv=Na[0].toUpperCase()+Na.slice(1);In(Sv,"on"+jv)}In(Ap,"onAnimationEnd");In(Mp,"onAnimationIteration");In(Lp,"onAnimationStart");In("dblclick","onDoubleClick");In("focusin","onFocus");In("focusout","onBlur");In(_p,"onTransitionEnd");Kr("onMouseEnter",["mouseout","mouseover"]);Kr("onMouseLeave",["mouseout","mouseover"]);Kr("onPointerEnter",["pointerout","pointerover"]);Kr("onPointerLeave",["pointerout","pointerover"]);cr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));cr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));cr("onBeforeInput",["compositionend","keypress","textInput","paste"]);cr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));cr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));cr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ji="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zv=new Set("cancel close invalid load scroll toggle".split(" ").concat(ji));function Zu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,S0(r,t,void 0,e),e.currentTarget=null}function Ip(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Zu(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Zu(i,a,u),o=l}}}if(is)throw e=ul,is=!1,ul=null,e}function oe(e,t){var n=t[wl];n===void 0&&(n=t[wl]=new Set);var r=e+"__bubble";n.has(r)||(Fp(t,e,2,!1),n.add(r))}function Ca(e,t,n){var r=0;t&&(r|=4),Fp(n,e,r,t)}var No="_reactListening"+Math.random().toString(36).slice(2);function Hi(e){if(!e[No]){e[No]=!0,Yf.forEach(function(n){n!=="selectionchange"&&(zv.has(n)||Ca(n,!1,e),Ca(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[No]||(t[No]=!0,Ca("selectionchange",!1,t))}}function Fp(e,t,n,r){switch(kp(t)){case 1:var i=F0;break;case 4:i=$0;break;default:i=vc}n=i.bind(null,t,n,e),i=void 0,!cl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Pa(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Yn(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}lp(function(){var u=o,f=pc(n),h=[];e:{var d=Dp.get(e);if(d!==void 0){var p=xc,w=e;switch(e){case"keypress":if(Vo(n)===0)break e;case"keydown":case"keyup":p=tv;break;case"focusin":w="focus",p=ka;break;case"focusout":w="blur",p=ka;break;case"beforeblur":case"afterblur":p=ka;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=$u;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=B0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=iv;break;case Ap:case Mp:case Lp:p=Y0;break;case _p:p=sv;break;case"scroll":p=W0;break;case"wheel":p=lv;break;case"copy":case"cut":case"paste":p=K0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Uu}var v=(t&4)!==0,x=!v&&e==="scroll",g=v?d!==null?d+"Capture":null:d;v=[];for(var m=u,y;m!==null;){y=m;var k=y.stateNode;if(y.tag===5&&k!==null&&(y=k,g!==null&&(k=Ii(m,g),k!=null&&v.push(Vi(m,k,y)))),x)break;m=m.return}0<v.length&&(d=new p(d,w,null,n,f),h.push({event:d,listeners:v}))}}if(!(t&7)){e:{if(d=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",d&&n!==al&&(w=n.relatedTarget||n.fromElement)&&(Yn(w)||w[Kt]))break e;if((p||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,p?(w=n.relatedTarget||n.toElement,p=u,w=w?Yn(w):null,w!==null&&(x=ur(w),w!==x||w.tag!==5&&w.tag!==6)&&(w=null)):(p=null,w=u),p!==w)){if(v=$u,k="onMouseLeave",g="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(v=Uu,k="onPointerLeave",g="onPointerEnter",m="pointer"),x=p==null?d:jr(p),y=w==null?d:jr(w),d=new v(k,m+"leave",p,n,f),d.target=x,d.relatedTarget=y,k=null,Yn(f)===u&&(v=new v(g,m+"enter",w,n,f),v.target=y,v.relatedTarget=x,k=v),x=k,p&&w)t:{for(v=p,g=w,m=0,y=v;y;y=yr(y))m++;for(y=0,k=g;k;k=yr(k))y++;for(;0<m-y;)v=yr(v),m--;for(;0<y-m;)g=yr(g),y--;for(;m--;){if(v===g||g!==null&&v===g.alternate)break t;v=yr(v),g=yr(g)}v=null}else v=null;p!==null&&Ju(h,d,p,v,!1),w!==null&&x!==null&&Ju(h,x,w,v,!0)}}e:{if(d=u?jr(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var S=mv;else if(Vu(d))if(Cp)S=xv;else{S=vv;var j=gv}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(S=yv);if(S&&(S=S(e,u))){Np(h,S,n,f);break e}j&&j(e,d,u),e==="focusout"&&(j=d._wrapperState)&&j.controlled&&d.type==="number"&&nl(d,"number",d.value)}switch(j=u?jr(u):window,e){case"focusin":(Vu(j)||j.contentEditable==="true")&&(kr=j,hl=u,Ti=null);break;case"focusout":Ti=hl=kr=null;break;case"mousedown":ml=!0;break;case"contextmenu":case"mouseup":case"dragend":ml=!1,Gu(h,n,f);break;case"selectionchange":if(kv)break;case"keydown":case"keyup":Gu(h,n,f)}var z;if(bc)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else br?zp(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(jp&&n.locale!=="ko"&&(br||P!=="onCompositionStart"?P==="onCompositionEnd"&&br&&(z=Sp()):(bn=f,yc="value"in bn?bn.value:bn.textContent,br=!0)),j=cs(u,P),0<j.length&&(P=new Wu(P,e,null,n,f),h.push({event:P,listeners:j}),z?P.data=z:(z=Ep(n),z!==null&&(P.data=z)))),(z=uv?dv(e,n):fv(e,n))&&(u=cs(u,"onBeforeInput"),0<u.length&&(f=new Wu("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:u}),f.data=z))}Ip(h,t)})}function Vi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function cs(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ii(e,n),o!=null&&r.unshift(Vi(e,o,i)),o=Ii(e,t),o!=null&&r.push(Vi(e,o,i))),e=e.return}return r}function yr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ju(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ii(n,o),l!=null&&s.unshift(Vi(n,l,a))):i||(l=Ii(n,o),l!=null&&s.push(Vi(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Ev=/\r\n?/g,Nv=/\u0000|\uFFFD/g;function ed(e){return(typeof e=="string"?e:""+e).replace(Ev,`
`).replace(Nv,"")}function Co(e,t,n){if(t=ed(t),ed(e)!==t&&n)throw Error(T(425))}function us(){}var gl=null,vl=null;function yl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xl=typeof setTimeout=="function"?setTimeout:void 0,Cv=typeof clearTimeout=="function"?clearTimeout:void 0,td=typeof Promise=="function"?Promise:void 0,Pv=typeof queueMicrotask=="function"?queueMicrotask:typeof td<"u"?function(e){return td.resolve(null).then(e).catch(Tv)}:xl;function Tv(e){setTimeout(function(){throw e})}function Ta(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Wi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Wi(t)}function Nn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function nd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var oi=Math.random().toString(36).slice(2),Ot="__reactFiber$"+oi,Yi="__reactProps$"+oi,Kt="__reactContainer$"+oi,wl="__reactEvents$"+oi,Rv="__reactListeners$"+oi,Ov="__reactHandles$"+oi;function Yn(e){var t=e[Ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Kt]||n[Ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=nd(e);e!==null;){if(n=e[Ot])return n;e=nd(e)}return t}e=n,n=e.parentNode}return null}function lo(e){return e=e[Ot]||e[Kt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function jr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function Is(e){return e[Yi]||null}var bl=[],zr=-1;function Fn(e){return{current:e}}function se(e){0>zr||(e.current=bl[zr],bl[zr]=null,zr--)}function re(e,t){zr++,bl[zr]=e.current,e.current=t}var An={},Oe=Fn(An),Ue=Fn(!1),rr=An;function qr(e,t){var n=e.type.contextTypes;if(!n)return An;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Be(e){return e=e.childContextTypes,e!=null}function ds(){se(Ue),se(Oe)}function rd(e,t,n){if(Oe.current!==An)throw Error(T(168));re(Oe,t),re(Ue,n)}function $p(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(T(108,g0(e)||"Unknown",i));return de({},n,r)}function fs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||An,rr=Oe.current,re(Oe,e),re(Ue,Ue.current),!0}function id(e,t,n){var r=e.stateNode;if(!r)throw Error(T(169));n?(e=$p(e,t,rr),r.__reactInternalMemoizedMergedChildContext=e,se(Ue),se(Oe),re(Oe,e)):se(Ue),re(Ue,n)}var Ut=null,Fs=!1,Ra=!1;function Wp(e){Ut===null?Ut=[e]:Ut.push(e)}function Av(e){Fs=!0,Wp(e)}function $n(){if(!Ra&&Ut!==null){Ra=!0;var e=0,t=te;try{var n=Ut;for(te=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ut=null,Fs=!1}catch(i){throw Ut!==null&&(Ut=Ut.slice(e+1)),fp(hc,$n),i}finally{te=t,Ra=!1}}return null}var Er=[],Nr=0,ps=null,hs=0,rt=[],it=0,ir=null,Ht=1,Vt="";function Hn(e,t){Er[Nr++]=hs,Er[Nr++]=ps,ps=e,hs=t}function Up(e,t,n){rt[it++]=Ht,rt[it++]=Vt,rt[it++]=ir,ir=e;var r=Ht;e=Vt;var i=32-bt(r)-1;r&=~(1<<i),n+=1;var o=32-bt(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Ht=1<<32-bt(t)+i|n<<i|r,Vt=o+e}else Ht=1<<o|n<<i|r,Vt=e}function Sc(e){e.return!==null&&(Hn(e,1),Up(e,1,0))}function jc(e){for(;e===ps;)ps=Er[--Nr],Er[Nr]=null,hs=Er[--Nr],Er[Nr]=null;for(;e===ir;)ir=rt[--it],rt[it]=null,Vt=rt[--it],rt[it]=null,Ht=rt[--it],rt[it]=null}var Ge=null,qe=null,le=!1,wt=null;function Bp(e,t){var n=ot(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function od(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ge=e,qe=Nn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ge=e,qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ir!==null?{id:Ht,overflow:Vt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ot(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ge=e,qe=null,!0):!1;default:return!1}}function kl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Sl(e){if(le){var t=qe;if(t){var n=t;if(!od(e,t)){if(kl(e))throw Error(T(418));t=Nn(n.nextSibling);var r=Ge;t&&od(e,t)?Bp(r,n):(e.flags=e.flags&-4097|2,le=!1,Ge=e)}}else{if(kl(e))throw Error(T(418));e.flags=e.flags&-4097|2,le=!1,Ge=e}}}function sd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ge=e}function Po(e){if(e!==Ge)return!1;if(!le)return sd(e),le=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!yl(e.type,e.memoizedProps)),t&&(t=qe)){if(kl(e))throw Hp(),Error(T(418));for(;t;)Bp(e,t),t=Nn(t.nextSibling)}if(sd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){qe=Nn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}qe=null}}else qe=Ge?Nn(e.stateNode.nextSibling):null;return!0}function Hp(){for(var e=qe;e;)e=Nn(e.nextSibling)}function Gr(){qe=Ge=null,le=!1}function zc(e){wt===null?wt=[e]:wt.push(e)}var Mv=Jt.ReactCurrentBatchConfig;function gi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,e))}return e}function To(e,t){throw e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ad(e){var t=e._init;return t(e._payload)}function Vp(e){function t(g,m){if(e){var y=g.deletions;y===null?(g.deletions=[m],g.flags|=16):y.push(m)}}function n(g,m){if(!e)return null;for(;m!==null;)t(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function i(g,m){return g=Rn(g,m),g.index=0,g.sibling=null,g}function o(g,m,y){return g.index=y,e?(y=g.alternate,y!==null?(y=y.index,y<m?(g.flags|=2,m):y):(g.flags|=2,m)):(g.flags|=1048576,m)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,m,y,k){return m===null||m.tag!==6?(m=Ia(y,g.mode,k),m.return=g,m):(m=i(m,y),m.return=g,m)}function l(g,m,y,k){var S=y.type;return S===wr?f(g,m,y.props.children,k,y.key):m!==null&&(m.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===fn&&ad(S)===m.type)?(k=i(m,y.props),k.ref=gi(g,m,y),k.return=g,k):(k=Zo(y.type,y.key,y.props,null,g.mode,k),k.ref=gi(g,m,y),k.return=g,k)}function u(g,m,y,k){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=Fa(y,g.mode,k),m.return=g,m):(m=i(m,y.children||[]),m.return=g,m)}function f(g,m,y,k,S){return m===null||m.tag!==7?(m=nr(y,g.mode,k,S),m.return=g,m):(m=i(m,y),m.return=g,m)}function h(g,m,y){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Ia(""+m,g.mode,y),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case xo:return y=Zo(m.type,m.key,m.props,null,g.mode,y),y.ref=gi(g,null,m),y.return=g,y;case xr:return m=Fa(m,g.mode,y),m.return=g,m;case fn:var k=m._init;return h(g,k(m._payload),y)}if(ki(m)||di(m))return m=nr(m,g.mode,y,null),m.return=g,m;To(g,m)}return null}function d(g,m,y,k){var S=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return S!==null?null:a(g,m,""+y,k);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case xo:return y.key===S?l(g,m,y,k):null;case xr:return y.key===S?u(g,m,y,k):null;case fn:return S=y._init,d(g,m,S(y._payload),k)}if(ki(y)||di(y))return S!==null?null:f(g,m,y,k,null);To(g,y)}return null}function p(g,m,y,k,S){if(typeof k=="string"&&k!==""||typeof k=="number")return g=g.get(y)||null,a(m,g,""+k,S);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case xo:return g=g.get(k.key===null?y:k.key)||null,l(m,g,k,S);case xr:return g=g.get(k.key===null?y:k.key)||null,u(m,g,k,S);case fn:var j=k._init;return p(g,m,y,j(k._payload),S)}if(ki(k)||di(k))return g=g.get(y)||null,f(m,g,k,S,null);To(m,k)}return null}function w(g,m,y,k){for(var S=null,j=null,z=m,P=m=0,A=null;z!==null&&P<y.length;P++){z.index>P?(A=z,z=null):A=z.sibling;var O=d(g,z,y[P],k);if(O===null){z===null&&(z=A);break}e&&z&&O.alternate===null&&t(g,z),m=o(O,m,P),j===null?S=O:j.sibling=O,j=O,z=A}if(P===y.length)return n(g,z),le&&Hn(g,P),S;if(z===null){for(;P<y.length;P++)z=h(g,y[P],k),z!==null&&(m=o(z,m,P),j===null?S=z:j.sibling=z,j=z);return le&&Hn(g,P),S}for(z=r(g,z);P<y.length;P++)A=p(z,g,P,y[P],k),A!==null&&(e&&A.alternate!==null&&z.delete(A.key===null?P:A.key),m=o(A,m,P),j===null?S=A:j.sibling=A,j=A);return e&&z.forEach(function($){return t(g,$)}),le&&Hn(g,P),S}function v(g,m,y,k){var S=di(y);if(typeof S!="function")throw Error(T(150));if(y=S.call(y),y==null)throw Error(T(151));for(var j=S=null,z=m,P=m=0,A=null,O=y.next();z!==null&&!O.done;P++,O=y.next()){z.index>P?(A=z,z=null):A=z.sibling;var $=d(g,z,O.value,k);if($===null){z===null&&(z=A);break}e&&z&&$.alternate===null&&t(g,z),m=o($,m,P),j===null?S=$:j.sibling=$,j=$,z=A}if(O.done)return n(g,z),le&&Hn(g,P),S;if(z===null){for(;!O.done;P++,O=y.next())O=h(g,O.value,k),O!==null&&(m=o(O,m,P),j===null?S=O:j.sibling=O,j=O);return le&&Hn(g,P),S}for(z=r(g,z);!O.done;P++,O=y.next())O=p(z,g,P,O.value,k),O!==null&&(e&&O.alternate!==null&&z.delete(O.key===null?P:O.key),m=o(O,m,P),j===null?S=O:j.sibling=O,j=O);return e&&z.forEach(function(D){return t(g,D)}),le&&Hn(g,P),S}function x(g,m,y,k){if(typeof y=="object"&&y!==null&&y.type===wr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case xo:e:{for(var S=y.key,j=m;j!==null;){if(j.key===S){if(S=y.type,S===wr){if(j.tag===7){n(g,j.sibling),m=i(j,y.props.children),m.return=g,g=m;break e}}else if(j.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===fn&&ad(S)===j.type){n(g,j.sibling),m=i(j,y.props),m.ref=gi(g,j,y),m.return=g,g=m;break e}n(g,j);break}else t(g,j);j=j.sibling}y.type===wr?(m=nr(y.props.children,g.mode,k,y.key),m.return=g,g=m):(k=Zo(y.type,y.key,y.props,null,g.mode,k),k.ref=gi(g,m,y),k.return=g,g=k)}return s(g);case xr:e:{for(j=y.key;m!==null;){if(m.key===j)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){n(g,m.sibling),m=i(m,y.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else t(g,m);m=m.sibling}m=Fa(y,g.mode,k),m.return=g,g=m}return s(g);case fn:return j=y._init,x(g,m,j(y._payload),k)}if(ki(y))return w(g,m,y,k);if(di(y))return v(g,m,y,k);To(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,m!==null&&m.tag===6?(n(g,m.sibling),m=i(m,y),m.return=g,g=m):(n(g,m),m=Ia(y,g.mode,k),m.return=g,g=m),s(g)):n(g,m)}return x}var Xr=Vp(!0),Yp=Vp(!1),ms=Fn(null),gs=null,Cr=null,Ec=null;function Nc(){Ec=Cr=gs=null}function Cc(e){var t=ms.current;se(ms),e._currentValue=t}function jl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Lr(e,t){gs=e,Ec=Cr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(We=!0),e.firstContext=null)}function at(e){var t=e._currentValue;if(Ec!==e)if(e={context:e,memoizedValue:t,next:null},Cr===null){if(gs===null)throw Error(T(308));Cr=e,gs.dependencies={lanes:0,firstContext:e}}else Cr=Cr.next=e;return t}var Qn=null;function Pc(e){Qn===null?Qn=[e]:Qn.push(e)}function Qp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Pc(t)):(n.next=i.next,i.next=n),t.interleaved=n,qt(e,r)}function qt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var pn=!1;function Tc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Yt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Cn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Z&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,qt(e,n)}return i=r.interleaved,i===null?(t.next=t,Pc(r)):(t.next=i.next,i.next=t),r.interleaved=t,qt(e,n)}function Yo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,mc(e,n)}}function ld(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function vs(e,t,n,r){var i=e.updateQueue;pn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==s&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(o!==null){var h=i.baseState;s=0,f=u=l=null,a=o;do{var d=a.lane,p=a.eventTime;if((r&d)===d){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,v=a;switch(d=t,p=n,v.tag){case 1:if(w=v.payload,typeof w=="function"){h=w.call(p,h,d);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=v.payload,d=typeof w=="function"?w.call(p,h,d):w,d==null)break e;h=de({},h,d);break e;case 2:pn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=p,l=h):f=f.next=p,s|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(f===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);sr|=s,e.lanes=s,e.memoizedState=h}}function cd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var co={},Lt=Fn(co),Qi=Fn(co),Ki=Fn(co);function Kn(e){if(e===co)throw Error(T(174));return e}function Rc(e,t){switch(re(Ki,t),re(Qi,e),re(Lt,co),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:il(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=il(t,e)}se(Lt),re(Lt,t)}function Zr(){se(Lt),se(Qi),se(Ki)}function qp(e){Kn(Ki.current);var t=Kn(Lt.current),n=il(t,e.type);t!==n&&(re(Qi,e),re(Lt,n))}function Oc(e){Qi.current===e&&(se(Lt),se(Qi))}var ce=Fn(0);function ys(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Oa=[];function Ac(){for(var e=0;e<Oa.length;e++)Oa[e]._workInProgressVersionPrimary=null;Oa.length=0}var Qo=Jt.ReactCurrentDispatcher,Aa=Jt.ReactCurrentBatchConfig,or=0,ue=null,ve=null,we=null,xs=!1,Ri=!1,qi=0,Lv=0;function Ce(){throw Error(T(321))}function Mc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!St(e[n],t[n]))return!1;return!0}function Lc(e,t,n,r,i,o){if(or=o,ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Qo.current=e===null||e.memoizedState===null?Fv:$v,e=n(r,i),Ri){o=0;do{if(Ri=!1,qi=0,25<=o)throw Error(T(301));o+=1,we=ve=null,t.updateQueue=null,Qo.current=Wv,e=n(r,i)}while(Ri)}if(Qo.current=ws,t=ve!==null&&ve.next!==null,or=0,we=ve=ue=null,xs=!1,t)throw Error(T(300));return e}function _c(){var e=qi!==0;return qi=0,e}function Ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?ue.memoizedState=we=e:we=we.next=e,we}function lt(){if(ve===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=ve.next;var t=we===null?ue.memoizedState:we.next;if(t!==null)we=t,ve=e;else{if(e===null)throw Error(T(310));ve=e,e={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},we===null?ue.memoizedState=we=e:we=we.next=e}return we}function Gi(e,t){return typeof t=="function"?t(e):t}function Ma(e){var t=lt(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=ve,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var f=u.lane;if((or&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,s=r):l=l.next=h,ue.lanes|=f,sr|=f}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,St(r,t.memoizedState)||(We=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ue.lanes|=o,sr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function La(e){var t=lt(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);St(o,t.memoizedState)||(We=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Gp(){}function Xp(e,t){var n=ue,r=lt(),i=t(),o=!St(r.memoizedState,i);if(o&&(r.memoizedState=i,We=!0),r=r.queue,Dc(eh.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||we!==null&&we.memoizedState.tag&1){if(n.flags|=2048,Xi(9,Jp.bind(null,n,r,i,t),void 0,null),be===null)throw Error(T(349));or&30||Zp(n,t,i)}return i}function Zp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ue.updateQueue,t===null?(t={lastEffect:null,stores:null},ue.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Jp(e,t,n,r){t.value=n,t.getSnapshot=r,th(t)&&nh(e)}function eh(e,t,n){return n(function(){th(t)&&nh(e)})}function th(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!St(e,n)}catch{return!0}}function nh(e){var t=qt(e,1);t!==null&&kt(t,e,1,-1)}function ud(e){var t=Ct();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:e},t.queue=e,e=e.dispatch=Iv.bind(null,ue,e),[t.memoizedState,e]}function Xi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ue.updateQueue,t===null?(t={lastEffect:null,stores:null},ue.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function rh(){return lt().memoizedState}function Ko(e,t,n,r){var i=Ct();ue.flags|=e,i.memoizedState=Xi(1|t,n,void 0,r===void 0?null:r)}function $s(e,t,n,r){var i=lt();r=r===void 0?null:r;var o=void 0;if(ve!==null){var s=ve.memoizedState;if(o=s.destroy,r!==null&&Mc(r,s.deps)){i.memoizedState=Xi(t,n,o,r);return}}ue.flags|=e,i.memoizedState=Xi(1|t,n,o,r)}function dd(e,t){return Ko(8390656,8,e,t)}function Dc(e,t){return $s(2048,8,e,t)}function ih(e,t){return $s(4,2,e,t)}function oh(e,t){return $s(4,4,e,t)}function sh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ah(e,t,n){return n=n!=null?n.concat([e]):null,$s(4,4,sh.bind(null,t,e),n)}function Ic(){}function lh(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Mc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ch(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Mc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function uh(e,t,n){return or&21?(St(n,t)||(n=mp(),ue.lanes|=n,sr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,We=!0),e.memoizedState=n)}function _v(e,t){var n=te;te=n!==0&&4>n?n:4,e(!0);var r=Aa.transition;Aa.transition={};try{e(!1),t()}finally{te=n,Aa.transition=r}}function dh(){return lt().memoizedState}function Dv(e,t,n){var r=Tn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},fh(e))ph(t,n);else if(n=Qp(e,t,n,r),n!==null){var i=_e();kt(n,e,r,i),hh(n,t,r)}}function Iv(e,t,n){var r=Tn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(fh(e))ph(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,St(a,s)){var l=t.interleaved;l===null?(i.next=i,Pc(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Qp(e,t,i,r),n!==null&&(i=_e(),kt(n,e,r,i),hh(n,t,r))}}function fh(e){var t=e.alternate;return e===ue||t!==null&&t===ue}function ph(e,t){Ri=xs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function hh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,mc(e,n)}}var ws={readContext:at,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useInsertionEffect:Ce,useLayoutEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useMutableSource:Ce,useSyncExternalStore:Ce,useId:Ce,unstable_isNewReconciler:!1},Fv={readContext:at,useCallback:function(e,t){return Ct().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:dd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ko(4194308,4,sh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ko(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ko(4,2,e,t)},useMemo:function(e,t){var n=Ct();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ct();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Dv.bind(null,ue,e),[r.memoizedState,e]},useRef:function(e){var t=Ct();return e={current:e},t.memoizedState=e},useState:ud,useDebugValue:Ic,useDeferredValue:function(e){return Ct().memoizedState=e},useTransition:function(){var e=ud(!1),t=e[0];return e=_v.bind(null,e[1]),Ct().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ue,i=Ct();if(le){if(n===void 0)throw Error(T(407));n=n()}else{if(n=t(),be===null)throw Error(T(349));or&30||Zp(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,dd(eh.bind(null,r,o,e),[e]),r.flags|=2048,Xi(9,Jp.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ct(),t=be.identifierPrefix;if(le){var n=Vt,r=Ht;n=(r&~(1<<32-bt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=qi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Lv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},$v={readContext:at,useCallback:lh,useContext:at,useEffect:Dc,useImperativeHandle:ah,useInsertionEffect:ih,useLayoutEffect:oh,useMemo:ch,useReducer:Ma,useRef:rh,useState:function(){return Ma(Gi)},useDebugValue:Ic,useDeferredValue:function(e){var t=lt();return uh(t,ve.memoizedState,e)},useTransition:function(){var e=Ma(Gi)[0],t=lt().memoizedState;return[e,t]},useMutableSource:Gp,useSyncExternalStore:Xp,useId:dh,unstable_isNewReconciler:!1},Wv={readContext:at,useCallback:lh,useContext:at,useEffect:Dc,useImperativeHandle:ah,useInsertionEffect:ih,useLayoutEffect:oh,useMemo:ch,useReducer:La,useRef:rh,useState:function(){return La(Gi)},useDebugValue:Ic,useDeferredValue:function(e){var t=lt();return ve===null?t.memoizedState=e:uh(t,ve.memoizedState,e)},useTransition:function(){var e=La(Gi)[0],t=lt().memoizedState;return[e,t]},useMutableSource:Gp,useSyncExternalStore:Xp,useId:dh,unstable_isNewReconciler:!1};function mt(e,t){if(e&&e.defaultProps){t=de({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function zl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:de({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ws={isMounted:function(e){return(e=e._reactInternals)?ur(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=_e(),i=Tn(e),o=Yt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Cn(e,o,i),t!==null&&(kt(t,e,i,r),Yo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=_e(),i=Tn(e),o=Yt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Cn(e,o,i),t!==null&&(kt(t,e,i,r),Yo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=_e(),r=Tn(e),i=Yt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Cn(e,i,r),t!==null&&(kt(t,e,r,n),Yo(t,e,r))}};function fd(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Bi(n,r)||!Bi(i,o):!0}function mh(e,t,n){var r=!1,i=An,o=t.contextType;return typeof o=="object"&&o!==null?o=at(o):(i=Be(t)?rr:Oe.current,r=t.contextTypes,o=(r=r!=null)?qr(e,i):An),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ws,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function pd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ws.enqueueReplaceState(t,t.state,null)}function El(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Tc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=at(o):(o=Be(t)?rr:Oe.current,i.context=qr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(zl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ws.enqueueReplaceState(i,i.state,null),vs(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Jr(e,t){try{var n="",r=t;do n+=m0(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function _a(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Nl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Uv=typeof WeakMap=="function"?WeakMap:Map;function gh(e,t,n){n=Yt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ks||(ks=!0,Dl=r),Nl(e,t)},n}function vh(e,t,n){n=Yt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Nl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Nl(e,t),typeof r!="function"&&(Pn===null?Pn=new Set([this]):Pn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function hd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Uv;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=ny.bind(null,e,t,n),t.then(e,e))}function md(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function gd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Yt(-1,1),t.tag=2,Cn(n,t,1))),n.lanes|=1),e)}var Bv=Jt.ReactCurrentOwner,We=!1;function Me(e,t,n,r){t.child=e===null?Yp(t,null,n,r):Xr(t,e.child,n,r)}function vd(e,t,n,r,i){n=n.render;var o=t.ref;return Lr(t,i),r=Lc(e,t,n,r,o,i),n=_c(),e!==null&&!We?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Gt(e,t,i)):(le&&n&&Sc(t),t.flags|=1,Me(e,t,r,i),t.child)}function yd(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Yc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,yh(e,t,o,r,i)):(e=Zo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Bi,n(s,r)&&e.ref===t.ref)return Gt(e,t,i)}return t.flags|=1,e=Rn(o,r),e.ref=t.ref,e.return=t,t.child=e}function yh(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Bi(o,r)&&e.ref===t.ref)if(We=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(We=!0);else return t.lanes=e.lanes,Gt(e,t,i)}return Cl(e,t,n,r,i)}function xh(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},re(Tr,Qe),Qe|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,re(Tr,Qe),Qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,re(Tr,Qe),Qe|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,re(Tr,Qe),Qe|=r;return Me(e,t,i,n),t.child}function wh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Cl(e,t,n,r,i){var o=Be(n)?rr:Oe.current;return o=qr(t,o),Lr(t,i),n=Lc(e,t,n,r,o,i),r=_c(),e!==null&&!We?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Gt(e,t,i)):(le&&r&&Sc(t),t.flags|=1,Me(e,t,n,i),t.child)}function xd(e,t,n,r,i){if(Be(n)){var o=!0;fs(t)}else o=!1;if(Lr(t,i),t.stateNode===null)qo(e,t),mh(t,n,r),El(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=at(u):(u=Be(n)?rr:Oe.current,u=qr(t,u));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&pd(t,s,r,u),pn=!1;var d=t.memoizedState;s.state=d,vs(t,r,s,i),l=t.memoizedState,a!==r||d!==l||Ue.current||pn?(typeof f=="function"&&(zl(t,n,f,r),l=t.memoizedState),(a=pn||fd(t,n,a,r,d,l,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Kp(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:mt(t.type,a),s.props=u,h=t.pendingProps,d=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=at(l):(l=Be(n)?rr:Oe.current,l=qr(t,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||d!==l)&&pd(t,s,r,l),pn=!1,d=t.memoizedState,s.state=d,vs(t,r,s,i);var w=t.memoizedState;a!==h||d!==w||Ue.current||pn?(typeof p=="function"&&(zl(t,n,p,r),w=t.memoizedState),(u=pn||fd(t,n,u,r,d,w,l)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,w,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,w,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),s.props=r,s.state=w,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return Pl(e,t,n,r,o,i)}function Pl(e,t,n,r,i,o){wh(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&id(t,n,!1),Gt(e,t,o);r=t.stateNode,Bv.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Xr(t,e.child,null,o),t.child=Xr(t,null,a,o)):Me(e,t,a,o),t.memoizedState=r.state,i&&id(t,n,!0),t.child}function bh(e){var t=e.stateNode;t.pendingContext?rd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&rd(e,t.context,!1),Rc(e,t.containerInfo)}function wd(e,t,n,r,i){return Gr(),zc(i),t.flags|=256,Me(e,t,n,r),t.child}var Tl={dehydrated:null,treeContext:null,retryLane:0};function Rl(e){return{baseLanes:e,cachePool:null,transitions:null}}function kh(e,t,n){var r=t.pendingProps,i=ce.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),re(ce,i&1),e===null)return Sl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Hs(s,r,0,null),e=nr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Rl(n),t.memoizedState=Tl,e):Fc(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Hv(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Rn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Rn(a,o):(o=nr(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Rl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Tl,r}return o=e.child,e=o.sibling,r=Rn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Fc(e,t){return t=Hs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ro(e,t,n,r){return r!==null&&zc(r),Xr(t,e.child,null,n),e=Fc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Hv(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=_a(Error(T(422))),Ro(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Hs({mode:"visible",children:r.children},i,0,null),o=nr(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Xr(t,e.child,null,s),t.child.memoizedState=Rl(s),t.memoizedState=Tl,o);if(!(t.mode&1))return Ro(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(T(419)),r=_a(o,r,void 0),Ro(e,t,s,r)}if(a=(s&e.childLanes)!==0,We||a){if(r=be,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,qt(e,i),kt(r,e,i,-1))}return Vc(),r=_a(Error(T(421))),Ro(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=ry.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,qe=Nn(i.nextSibling),Ge=t,le=!0,wt=null,e!==null&&(rt[it++]=Ht,rt[it++]=Vt,rt[it++]=ir,Ht=e.id,Vt=e.overflow,ir=t),t=Fc(t,r.children),t.flags|=4096,t)}function bd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),jl(e.return,t,n)}function Da(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Sh(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Me(e,t,r.children,n),r=ce.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bd(e,n,t);else if(e.tag===19)bd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(re(ce,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ys(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Da(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ys(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Da(t,!0,n,null,o);break;case"together":Da(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function qo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Gt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),sr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,n=Rn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Rn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Vv(e,t,n){switch(t.tag){case 3:bh(t),Gr();break;case 5:qp(t);break;case 1:Be(t.type)&&fs(t);break;case 4:Rc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;re(ms,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(re(ce,ce.current&1),t.flags|=128,null):n&t.child.childLanes?kh(e,t,n):(re(ce,ce.current&1),e=Gt(e,t,n),e!==null?e.sibling:null);re(ce,ce.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Sh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),re(ce,ce.current),r)break;return null;case 22:case 23:return t.lanes=0,xh(e,t,n)}return Gt(e,t,n)}var jh,Ol,zh,Eh;jh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ol=function(){};zh=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Kn(Lt.current);var o=null;switch(n){case"input":i=el(e,i),r=el(e,r),o=[];break;case"select":i=de({},i,{value:void 0}),r=de({},r,{value:void 0}),o=[];break;case"textarea":i=rl(e,i),r=rl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=us)}ol(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(_i.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(_i.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&oe("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Eh=function(e,t,n,r){n!==r&&(t.flags|=4)};function vi(e,t){if(!le)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Yv(e,t,n){var r=t.pendingProps;switch(jc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(t),null;case 1:return Be(t.type)&&ds(),Pe(t),null;case 3:return r=t.stateNode,Zr(),se(Ue),se(Oe),Ac(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Po(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,wt!==null&&($l(wt),wt=null))),Ol(e,t),Pe(t),null;case 5:Oc(t);var i=Kn(Ki.current);if(n=t.type,e!==null&&t.stateNode!=null)zh(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(T(166));return Pe(t),null}if(e=Kn(Lt.current),Po(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ot]=t,r[Yi]=o,e=(t.mode&1)!==0,n){case"dialog":oe("cancel",r),oe("close",r);break;case"iframe":case"object":case"embed":oe("load",r);break;case"video":case"audio":for(i=0;i<ji.length;i++)oe(ji[i],r);break;case"source":oe("error",r);break;case"img":case"image":case"link":oe("error",r),oe("load",r);break;case"details":oe("toggle",r);break;case"input":Tu(r,o),oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},oe("invalid",r);break;case"textarea":Ou(r,o),oe("invalid",r)}ol(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Co(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Co(r.textContent,a,e),i=["children",""+a]):_i.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&oe("scroll",r)}switch(n){case"input":wo(r),Ru(r,o,!0);break;case"textarea":wo(r),Au(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=us)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ep(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Ot]=t,e[Yi]=r,jh(e,t,!1,!1),t.stateNode=e;e:{switch(s=sl(n,r),n){case"dialog":oe("cancel",e),oe("close",e),i=r;break;case"iframe":case"object":case"embed":oe("load",e),i=r;break;case"video":case"audio":for(i=0;i<ji.length;i++)oe(ji[i],e);i=r;break;case"source":oe("error",e),i=r;break;case"img":case"image":case"link":oe("error",e),oe("load",e),i=r;break;case"details":oe("toggle",e),i=r;break;case"input":Tu(e,r),i=el(e,r),oe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=de({},r,{value:void 0}),oe("invalid",e);break;case"textarea":Ou(e,r),i=rl(e,r),oe("invalid",e);break;default:i=r}ol(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?rp(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&tp(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Di(e,l):typeof l=="number"&&Di(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(_i.hasOwnProperty(o)?l!=null&&o==="onScroll"&&oe("scroll",e):l!=null&&cc(e,o,l,s))}switch(n){case"input":wo(e),Ru(e,r,!1);break;case"textarea":wo(e),Au(e);break;case"option":r.value!=null&&e.setAttribute("value",""+On(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Rr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Rr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=us)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Pe(t),null;case 6:if(e&&t.stateNode!=null)Eh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(T(166));if(n=Kn(Ki.current),Kn(Lt.current),Po(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ot]=t,(o=r.nodeValue!==n)&&(e=Ge,e!==null))switch(e.tag){case 3:Co(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Co(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ot]=t,t.stateNode=r}return Pe(t),null;case 13:if(se(ce),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(le&&qe!==null&&t.mode&1&&!(t.flags&128))Hp(),Gr(),t.flags|=98560,o=!1;else if(o=Po(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(T(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(T(317));o[Ot]=t}else Gr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Pe(t),o=!1}else wt!==null&&($l(wt),wt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ce.current&1?xe===0&&(xe=3):Vc())),t.updateQueue!==null&&(t.flags|=4),Pe(t),null);case 4:return Zr(),Ol(e,t),e===null&&Hi(t.stateNode.containerInfo),Pe(t),null;case 10:return Cc(t.type._context),Pe(t),null;case 17:return Be(t.type)&&ds(),Pe(t),null;case 19:if(se(ce),o=t.memoizedState,o===null)return Pe(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)vi(o,!1);else{if(xe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=ys(e),s!==null){for(t.flags|=128,vi(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return re(ce,ce.current&1|2),t.child}e=e.sibling}o.tail!==null&&he()>ei&&(t.flags|=128,r=!0,vi(o,!1),t.lanes=4194304)}else{if(!r)if(e=ys(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),vi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!le)return Pe(t),null}else 2*he()-o.renderingStartTime>ei&&n!==1073741824&&(t.flags|=128,r=!0,vi(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=he(),t.sibling=null,n=ce.current,re(ce,r?n&1|2:n&1),t):(Pe(t),null);case 22:case 23:return Hc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Qe&1073741824&&(Pe(t),t.subtreeFlags&6&&(t.flags|=8192)):Pe(t),null;case 24:return null;case 25:return null}throw Error(T(156,t.tag))}function Qv(e,t){switch(jc(t),t.tag){case 1:return Be(t.type)&&ds(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zr(),se(Ue),se(Oe),Ac(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Oc(t),null;case 13:if(se(ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));Gr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return se(ce),null;case 4:return Zr(),null;case 10:return Cc(t.type._context),null;case 22:case 23:return Hc(),null;case 24:return null;default:return null}}var Oo=!1,Re=!1,Kv=typeof WeakSet=="function"?WeakSet:Set,_=null;function Pr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){pe(e,t,r)}else n.current=null}function Al(e,t,n){try{n()}catch(r){pe(e,t,r)}}var kd=!1;function qv(e,t){if(gl=as,e=Rp(),kc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,f=0,h=e,d=null;t:for(;;){for(var p;h!==n||i!==0&&h.nodeType!==3||(a=s+i),h!==o||r!==0&&h.nodeType!==3||(l=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===e)break t;if(d===n&&++u===i&&(a=s),d===o&&++f===r&&(l=s),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(vl={focusedElem:e,selectionRange:n},as=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var v=w.memoizedProps,x=w.memoizedState,g=t.stateNode,m=g.getSnapshotBeforeUpdate(t.elementType===t.type?v:mt(t.type,v),x);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(k){pe(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return w=kd,kd=!1,w}function Oi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Al(t,n,o)}i=i.next}while(i!==r)}}function Us(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ml(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Nh(e){var t=e.alternate;t!==null&&(e.alternate=null,Nh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ot],delete t[Yi],delete t[wl],delete t[Rv],delete t[Ov])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ch(e){return e.tag===5||e.tag===3||e.tag===4}function Sd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ch(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ll(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=us));else if(r!==4&&(e=e.child,e!==null))for(Ll(e,t,n),e=e.sibling;e!==null;)Ll(e,t,n),e=e.sibling}function _l(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(_l(e,t,n),e=e.sibling;e!==null;)_l(e,t,n),e=e.sibling}var Se=null,xt=!1;function an(e,t,n){for(n=n.child;n!==null;)Ph(e,t,n),n=n.sibling}function Ph(e,t,n){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(Ms,n)}catch{}switch(n.tag){case 5:Re||Pr(n,t);case 6:var r=Se,i=xt;Se=null,an(e,t,n),Se=r,xt=i,Se!==null&&(xt?(e=Se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Se.removeChild(n.stateNode));break;case 18:Se!==null&&(xt?(e=Se,n=n.stateNode,e.nodeType===8?Ta(e.parentNode,n):e.nodeType===1&&Ta(e,n),Wi(e)):Ta(Se,n.stateNode));break;case 4:r=Se,i=xt,Se=n.stateNode.containerInfo,xt=!0,an(e,t,n),Se=r,xt=i;break;case 0:case 11:case 14:case 15:if(!Re&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Al(n,t,s),i=i.next}while(i!==r)}an(e,t,n);break;case 1:if(!Re&&(Pr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){pe(n,t,a)}an(e,t,n);break;case 21:an(e,t,n);break;case 22:n.mode&1?(Re=(r=Re)||n.memoizedState!==null,an(e,t,n),Re=r):an(e,t,n);break;default:an(e,t,n)}}function jd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Kv),t.forEach(function(r){var i=iy.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function pt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:Se=a.stateNode,xt=!1;break e;case 3:Se=a.stateNode.containerInfo,xt=!0;break e;case 4:Se=a.stateNode.containerInfo,xt=!0;break e}a=a.return}if(Se===null)throw Error(T(160));Ph(o,s,i),Se=null,xt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){pe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Th(t,e),t=t.sibling}function Th(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(pt(t,e),Nt(e),r&4){try{Oi(3,e,e.return),Us(3,e)}catch(v){pe(e,e.return,v)}try{Oi(5,e,e.return)}catch(v){pe(e,e.return,v)}}break;case 1:pt(t,e),Nt(e),r&512&&n!==null&&Pr(n,n.return);break;case 5:if(pt(t,e),Nt(e),r&512&&n!==null&&Pr(n,n.return),e.flags&32){var i=e.stateNode;try{Di(i,"")}catch(v){pe(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Zf(i,o),sl(a,s);var u=sl(a,o);for(s=0;s<l.length;s+=2){var f=l[s],h=l[s+1];f==="style"?rp(i,h):f==="dangerouslySetInnerHTML"?tp(i,h):f==="children"?Di(i,h):cc(i,f,h,u)}switch(a){case"input":tl(i,o);break;case"textarea":Jf(i,o);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?Rr(i,!!o.multiple,p,!1):d!==!!o.multiple&&(o.defaultValue!=null?Rr(i,!!o.multiple,o.defaultValue,!0):Rr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Yi]=o}catch(v){pe(e,e.return,v)}}break;case 6:if(pt(t,e),Nt(e),r&4){if(e.stateNode===null)throw Error(T(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){pe(e,e.return,v)}}break;case 3:if(pt(t,e),Nt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Wi(t.containerInfo)}catch(v){pe(e,e.return,v)}break;case 4:pt(t,e),Nt(e);break;case 13:pt(t,e),Nt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Uc=he())),r&4&&jd(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Re=(u=Re)||f,pt(t,e),Re=u):pt(t,e),Nt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(_=e,f=e.child;f!==null;){for(h=_=f;_!==null;){switch(d=_,p=d.child,d.tag){case 0:case 11:case 14:case 15:Oi(4,d,d.return);break;case 1:Pr(d,d.return);var w=d.stateNode;if(typeof w.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(v){pe(r,n,v)}}break;case 5:Pr(d,d.return);break;case 22:if(d.memoizedState!==null){Ed(h);continue}}p!==null?(p.return=d,_=p):Ed(h)}f=f.sibling}e:for(f=null,h=e;;){if(h.tag===5){if(f===null){f=h;try{i=h.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,l=h.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=np("display",s))}catch(v){pe(e,e.return,v)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){pe(e,e.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:pt(t,e),Nt(e),r&4&&jd(e);break;case 21:break;default:pt(t,e),Nt(e)}}function Nt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ch(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Di(i,""),r.flags&=-33);var o=Sd(e);_l(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Sd(e);Ll(e,a,s);break;default:throw Error(T(161))}}catch(l){pe(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Gv(e,t,n){_=e,Rh(e)}function Rh(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var i=_,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Oo;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Re;a=Oo;var u=Re;if(Oo=s,(Re=l)&&!u)for(_=i;_!==null;)s=_,l=s.child,s.tag===22&&s.memoizedState!==null?Nd(i):l!==null?(l.return=s,_=l):Nd(i);for(;o!==null;)_=o,Rh(o),o=o.sibling;_=i,Oo=a,Re=u}zd(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,_=o):zd(e)}}function zd(e){for(;_!==null;){var t=_;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Re||Us(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Re)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:mt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&cd(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}cd(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Wi(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}Re||t.flags&512&&Ml(t)}catch(d){pe(t,t.return,d)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function Ed(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function Nd(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Us(4,t)}catch(l){pe(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){pe(t,i,l)}}var o=t.return;try{Ml(t)}catch(l){pe(t,o,l)}break;case 5:var s=t.return;try{Ml(t)}catch(l){pe(t,s,l)}}}catch(l){pe(t,t.return,l)}if(t===e){_=null;break}var a=t.sibling;if(a!==null){a.return=t.return,_=a;break}_=t.return}}var Xv=Math.ceil,bs=Jt.ReactCurrentDispatcher,$c=Jt.ReactCurrentOwner,st=Jt.ReactCurrentBatchConfig,Z=0,be=null,ge=null,je=0,Qe=0,Tr=Fn(0),xe=0,Zi=null,sr=0,Bs=0,Wc=0,Ai=null,$e=null,Uc=0,ei=1/0,Wt=null,ks=!1,Dl=null,Pn=null,Ao=!1,kn=null,Ss=0,Mi=0,Il=null,Go=-1,Xo=0;function _e(){return Z&6?he():Go!==-1?Go:Go=he()}function Tn(e){return e.mode&1?Z&2&&je!==0?je&-je:Mv.transition!==null?(Xo===0&&(Xo=mp()),Xo):(e=te,e!==0||(e=window.event,e=e===void 0?16:kp(e.type)),e):1}function kt(e,t,n,r){if(50<Mi)throw Mi=0,Il=null,Error(T(185));so(e,n,r),(!(Z&2)||e!==be)&&(e===be&&(!(Z&2)&&(Bs|=n),xe===4&&mn(e,je)),He(e,r),n===1&&Z===0&&!(t.mode&1)&&(ei=he()+500,Fs&&$n()))}function He(e,t){var n=e.callbackNode;M0(e,t);var r=ss(e,e===be?je:0);if(r===0)n!==null&&_u(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&_u(n),t===1)e.tag===0?Av(Cd.bind(null,e)):Wp(Cd.bind(null,e)),Pv(function(){!(Z&6)&&$n()}),n=null;else{switch(gp(r)){case 1:n=hc;break;case 4:n=pp;break;case 16:n=os;break;case 536870912:n=hp;break;default:n=os}n=Fh(n,Oh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Oh(e,t){if(Go=-1,Xo=0,Z&6)throw Error(T(327));var n=e.callbackNode;if(_r()&&e.callbackNode!==n)return null;var r=ss(e,e===be?je:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=js(e,r);else{t=r;var i=Z;Z|=2;var o=Mh();(be!==e||je!==t)&&(Wt=null,ei=he()+500,tr(e,t));do try{ey();break}catch(a){Ah(e,a)}while(!0);Nc(),bs.current=o,Z=i,ge!==null?t=0:(be=null,je=0,t=xe)}if(t!==0){if(t===2&&(i=dl(e),i!==0&&(r=i,t=Fl(e,i))),t===1)throw n=Zi,tr(e,0),mn(e,r),He(e,he()),n;if(t===6)mn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Zv(i)&&(t=js(e,r),t===2&&(o=dl(e),o!==0&&(r=o,t=Fl(e,o))),t===1))throw n=Zi,tr(e,0),mn(e,r),He(e,he()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(T(345));case 2:Vn(e,$e,Wt);break;case 3:if(mn(e,r),(r&130023424)===r&&(t=Uc+500-he(),10<t)){if(ss(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){_e(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=xl(Vn.bind(null,e,$e,Wt),t);break}Vn(e,$e,Wt);break;case 4:if(mn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-bt(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=he()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Xv(r/1960))-r,10<r){e.timeoutHandle=xl(Vn.bind(null,e,$e,Wt),r);break}Vn(e,$e,Wt);break;case 5:Vn(e,$e,Wt);break;default:throw Error(T(329))}}}return He(e,he()),e.callbackNode===n?Oh.bind(null,e):null}function Fl(e,t){var n=Ai;return e.current.memoizedState.isDehydrated&&(tr(e,t).flags|=256),e=js(e,t),e!==2&&(t=$e,$e=n,t!==null&&$l(t)),e}function $l(e){$e===null?$e=e:$e.push.apply($e,e)}function Zv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!St(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function mn(e,t){for(t&=~Wc,t&=~Bs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-bt(t),r=1<<n;e[n]=-1,t&=~r}}function Cd(e){if(Z&6)throw Error(T(327));_r();var t=ss(e,0);if(!(t&1))return He(e,he()),null;var n=js(e,t);if(e.tag!==0&&n===2){var r=dl(e);r!==0&&(t=r,n=Fl(e,r))}if(n===1)throw n=Zi,tr(e,0),mn(e,t),He(e,he()),n;if(n===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Vn(e,$e,Wt),He(e,he()),null}function Bc(e,t){var n=Z;Z|=1;try{return e(t)}finally{Z=n,Z===0&&(ei=he()+500,Fs&&$n())}}function ar(e){kn!==null&&kn.tag===0&&!(Z&6)&&_r();var t=Z;Z|=1;var n=st.transition,r=te;try{if(st.transition=null,te=1,e)return e()}finally{te=r,st.transition=n,Z=t,!(Z&6)&&$n()}}function Hc(){Qe=Tr.current,se(Tr)}function tr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Cv(n)),ge!==null)for(n=ge.return;n!==null;){var r=n;switch(jc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ds();break;case 3:Zr(),se(Ue),se(Oe),Ac();break;case 5:Oc(r);break;case 4:Zr();break;case 13:se(ce);break;case 19:se(ce);break;case 10:Cc(r.type._context);break;case 22:case 23:Hc()}n=n.return}if(be=e,ge=e=Rn(e.current,null),je=Qe=t,xe=0,Zi=null,Wc=Bs=sr=0,$e=Ai=null,Qn!==null){for(t=0;t<Qn.length;t++)if(n=Qn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Qn=null}return e}function Ah(e,t){do{var n=ge;try{if(Nc(),Qo.current=ws,xs){for(var r=ue.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}xs=!1}if(or=0,we=ve=ue=null,Ri=!1,qi=0,$c.current=null,n===null||n.return===null){xe=1,Zi=t,ge=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=je,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=md(s);if(p!==null){p.flags&=-257,gd(p,s,a,o,t),p.mode&1&&hd(o,u,t),t=p,l=u;var w=t.updateQueue;if(w===null){var v=new Set;v.add(l),t.updateQueue=v}else w.add(l);break e}else{if(!(t&1)){hd(o,u,t),Vc();break e}l=Error(T(426))}}else if(le&&a.mode&1){var x=md(s);if(x!==null){!(x.flags&65536)&&(x.flags|=256),gd(x,s,a,o,t),zc(Jr(l,a));break e}}o=l=Jr(l,a),xe!==4&&(xe=2),Ai===null?Ai=[o]:Ai.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=gh(o,l,t);ld(o,g);break e;case 1:a=l;var m=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Pn===null||!Pn.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t;var k=vh(o,a,t);ld(o,k);break e}}o=o.return}while(o!==null)}_h(n)}catch(S){t=S,ge===n&&n!==null&&(ge=n=n.return);continue}break}while(!0)}function Mh(){var e=bs.current;return bs.current=ws,e===null?ws:e}function Vc(){(xe===0||xe===3||xe===2)&&(xe=4),be===null||!(sr&268435455)&&!(Bs&268435455)||mn(be,je)}function js(e,t){var n=Z;Z|=2;var r=Mh();(be!==e||je!==t)&&(Wt=null,tr(e,t));do try{Jv();break}catch(i){Ah(e,i)}while(!0);if(Nc(),Z=n,bs.current=r,ge!==null)throw Error(T(261));return be=null,je=0,xe}function Jv(){for(;ge!==null;)Lh(ge)}function ey(){for(;ge!==null&&!z0();)Lh(ge)}function Lh(e){var t=Ih(e.alternate,e,Qe);e.memoizedProps=e.pendingProps,t===null?_h(e):ge=t,$c.current=null}function _h(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Qv(n,t),n!==null){n.flags&=32767,ge=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{xe=6,ge=null;return}}else if(n=Yv(n,t,Qe),n!==null){ge=n;return}if(t=t.sibling,t!==null){ge=t;return}ge=t=e}while(t!==null);xe===0&&(xe=5)}function Vn(e,t,n){var r=te,i=st.transition;try{st.transition=null,te=1,ty(e,t,n,r)}finally{st.transition=i,te=r}return null}function ty(e,t,n,r){do _r();while(kn!==null);if(Z&6)throw Error(T(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(L0(e,o),e===be&&(ge=be=null,je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ao||(Ao=!0,Fh(os,function(){return _r(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=st.transition,st.transition=null;var s=te;te=1;var a=Z;Z|=4,$c.current=null,qv(e,n),Th(n,e),bv(vl),as=!!gl,vl=gl=null,e.current=n,Gv(n),E0(),Z=a,te=s,st.transition=o}else e.current=n;if(Ao&&(Ao=!1,kn=e,Ss=i),o=e.pendingLanes,o===0&&(Pn=null),P0(n.stateNode),He(e,he()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ks)throw ks=!1,e=Dl,Dl=null,e;return Ss&1&&e.tag!==0&&_r(),o=e.pendingLanes,o&1?e===Il?Mi++:(Mi=0,Il=e):Mi=0,$n(),null}function _r(){if(kn!==null){var e=gp(Ss),t=st.transition,n=te;try{if(st.transition=null,te=16>e?16:e,kn===null)var r=!1;else{if(e=kn,kn=null,Ss=0,Z&6)throw Error(T(331));var i=Z;for(Z|=4,_=e.current;_!==null;){var o=_,s=o.child;if(_.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(_=u;_!==null;){var f=_;switch(f.tag){case 0:case 11:case 15:Oi(8,f,o)}var h=f.child;if(h!==null)h.return=f,_=h;else for(;_!==null;){f=_;var d=f.sibling,p=f.return;if(Nh(f),f===u){_=null;break}if(d!==null){d.return=p,_=d;break}_=p}}}var w=o.alternate;if(w!==null){var v=w.child;if(v!==null){w.child=null;do{var x=v.sibling;v.sibling=null,v=x}while(v!==null)}}_=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,_=s;else e:for(;_!==null;){if(o=_,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Oi(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,_=g;break e}_=o.return}}var m=e.current;for(_=m;_!==null;){s=_;var y=s.child;if(s.subtreeFlags&2064&&y!==null)y.return=s,_=y;else e:for(s=m;_!==null;){if(a=_,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Us(9,a)}}catch(S){pe(a,a.return,S)}if(a===s){_=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,_=k;break e}_=a.return}}if(Z=i,$n(),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(Ms,e)}catch{}r=!0}return r}finally{te=n,st.transition=t}}return!1}function Pd(e,t,n){t=Jr(n,t),t=gh(e,t,1),e=Cn(e,t,1),t=_e(),e!==null&&(so(e,1,t),He(e,t))}function pe(e,t,n){if(e.tag===3)Pd(e,e,n);else for(;t!==null;){if(t.tag===3){Pd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pn===null||!Pn.has(r))){e=Jr(n,e),e=vh(t,e,1),t=Cn(t,e,1),e=_e(),t!==null&&(so(t,1,e),He(t,e));break}}t=t.return}}function ny(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=_e(),e.pingedLanes|=e.suspendedLanes&n,be===e&&(je&n)===n&&(xe===4||xe===3&&(je&130023424)===je&&500>he()-Uc?tr(e,0):Wc|=n),He(e,t)}function Dh(e,t){t===0&&(e.mode&1?(t=So,So<<=1,!(So&130023424)&&(So=4194304)):t=1);var n=_e();e=qt(e,t),e!==null&&(so(e,t,n),He(e,n))}function ry(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Dh(e,n)}function iy(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(t),Dh(e,n)}var Ih;Ih=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ue.current)We=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return We=!1,Vv(e,t,n);We=!!(e.flags&131072)}else We=!1,le&&t.flags&1048576&&Up(t,hs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;qo(e,t),e=t.pendingProps;var i=qr(t,Oe.current);Lr(t,n),i=Lc(null,t,r,e,i,n);var o=_c();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Be(r)?(o=!0,fs(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Tc(t),i.updater=Ws,t.stateNode=i,i._reactInternals=t,El(t,r,e,n),t=Pl(null,t,r,!0,o,n)):(t.tag=0,le&&o&&Sc(t),Me(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(qo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=sy(r),e=mt(r,e),i){case 0:t=Cl(null,t,r,e,n);break e;case 1:t=xd(null,t,r,e,n);break e;case 11:t=vd(null,t,r,e,n);break e;case 14:t=yd(null,t,r,mt(r.type,e),n);break e}throw Error(T(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),Cl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),xd(e,t,r,i,n);case 3:e:{if(bh(t),e===null)throw Error(T(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Kp(e,t),vs(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Jr(Error(T(423)),t),t=wd(e,t,r,n,i);break e}else if(r!==i){i=Jr(Error(T(424)),t),t=wd(e,t,r,n,i);break e}else for(qe=Nn(t.stateNode.containerInfo.firstChild),Ge=t,le=!0,wt=null,n=Yp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Gr(),r===i){t=Gt(e,t,n);break e}Me(e,t,r,n)}t=t.child}return t;case 5:return qp(t),e===null&&Sl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,yl(r,i)?s=null:o!==null&&yl(r,o)&&(t.flags|=32),wh(e,t),Me(e,t,s,n),t.child;case 6:return e===null&&Sl(t),null;case 13:return kh(e,t,n);case 4:return Rc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Xr(t,null,r,n):Me(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),vd(e,t,r,i,n);case 7:return Me(e,t,t.pendingProps,n),t.child;case 8:return Me(e,t,t.pendingProps.children,n),t.child;case 12:return Me(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,re(ms,r._currentValue),r._currentValue=s,o!==null)if(St(o.value,s)){if(o.children===i.children&&!Ue.current){t=Gt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Yt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),jl(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(T(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),jl(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Me(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Lr(t,n),i=at(i),r=r(i),t.flags|=1,Me(e,t,r,n),t.child;case 14:return r=t.type,i=mt(r,t.pendingProps),i=mt(r.type,i),yd(e,t,r,i,n);case 15:return yh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),qo(e,t),t.tag=1,Be(r)?(e=!0,fs(t)):e=!1,Lr(t,n),mh(t,r,i),El(t,r,i,n),Pl(null,t,r,!0,e,n);case 19:return Sh(e,t,n);case 22:return xh(e,t,n)}throw Error(T(156,t.tag))};function Fh(e,t){return fp(e,t)}function oy(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(e,t,n,r){return new oy(e,t,n,r)}function Yc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function sy(e){if(typeof e=="function")return Yc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===dc)return 11;if(e===fc)return 14}return 2}function Rn(e,t){var n=e.alternate;return n===null?(n=ot(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Zo(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Yc(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case wr:return nr(n.children,i,o,t);case uc:s=8,i|=8;break;case Ga:return e=ot(12,n,t,i|2),e.elementType=Ga,e.lanes=o,e;case Xa:return e=ot(13,n,t,i),e.elementType=Xa,e.lanes=o,e;case Za:return e=ot(19,n,t,i),e.elementType=Za,e.lanes=o,e;case qf:return Hs(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Qf:s=10;break e;case Kf:s=9;break e;case dc:s=11;break e;case fc:s=14;break e;case fn:s=16,r=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return t=ot(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function nr(e,t,n,r){return e=ot(7,e,r,t),e.lanes=n,e}function Hs(e,t,n,r){return e=ot(22,e,r,t),e.elementType=qf,e.lanes=n,e.stateNode={isHidden:!1},e}function Ia(e,t,n){return e=ot(6,e,null,t),e.lanes=n,e}function Fa(e,t,n){return t=ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ay(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xa(0),this.expirationTimes=xa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Qc(e,t,n,r,i,o,s,a,l){return e=new ay(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=ot(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tc(o),e}function ly(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function $h(e){if(!e)return An;e=e._reactInternals;e:{if(ur(e)!==e||e.tag!==1)throw Error(T(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Be(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(T(171))}if(e.tag===1){var n=e.type;if(Be(n))return $p(e,n,t)}return t}function Wh(e,t,n,r,i,o,s,a,l){return e=Qc(n,r,!0,e,i,o,s,a,l),e.context=$h(null),n=e.current,r=_e(),i=Tn(n),o=Yt(r,i),o.callback=t??null,Cn(n,o,i),e.current.lanes=i,so(e,i,r),He(e,r),e}function Vs(e,t,n,r){var i=t.current,o=_e(),s=Tn(i);return n=$h(n),t.context===null?t.context=n:t.pendingContext=n,t=Yt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Cn(i,t,s),e!==null&&(kt(e,i,s,o),Yo(e,i,s)),s}function zs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Td(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Kc(e,t){Td(e,t),(e=e.alternate)&&Td(e,t)}function cy(){return null}var Uh=typeof reportError=="function"?reportError:function(e){console.error(e)};function qc(e){this._internalRoot=e}Ys.prototype.render=qc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));Vs(e,t,null,null)};Ys.prototype.unmount=qc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ar(function(){Vs(null,e,null,null)}),t[Kt]=null}};function Ys(e){this._internalRoot=e}Ys.prototype.unstable_scheduleHydration=function(e){if(e){var t=xp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<hn.length&&t!==0&&t<hn[n].priority;n++);hn.splice(n,0,e),n===0&&bp(e)}};function Gc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Qs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Rd(){}function uy(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=zs(s);o.call(u)}}var s=Wh(t,r,e,0,null,!1,!1,"",Rd);return e._reactRootContainer=s,e[Kt]=s.current,Hi(e.nodeType===8?e.parentNode:e),ar(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=zs(l);a.call(u)}}var l=Qc(e,0,!1,null,null,!1,!1,"",Rd);return e._reactRootContainer=l,e[Kt]=l.current,Hi(e.nodeType===8?e.parentNode:e),ar(function(){Vs(t,l,n,r)}),l}function Ks(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=zs(s);a.call(l)}}Vs(t,s,e,i)}else s=uy(n,t,e,i,r);return zs(s)}vp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Si(t.pendingLanes);n!==0&&(mc(t,n|1),He(t,he()),!(Z&6)&&(ei=he()+500,$n()))}break;case 13:ar(function(){var r=qt(e,1);if(r!==null){var i=_e();kt(r,e,1,i)}}),Kc(e,1)}};gc=function(e){if(e.tag===13){var t=qt(e,134217728);if(t!==null){var n=_e();kt(t,e,134217728,n)}Kc(e,134217728)}};yp=function(e){if(e.tag===13){var t=Tn(e),n=qt(e,t);if(n!==null){var r=_e();kt(n,e,t,r)}Kc(e,t)}};xp=function(){return te};wp=function(e,t){var n=te;try{return te=e,t()}finally{te=n}};ll=function(e,t,n){switch(t){case"input":if(tl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Is(r);if(!i)throw Error(T(90));Xf(r),tl(r,i)}}}break;case"textarea":Jf(e,n);break;case"select":t=n.value,t!=null&&Rr(e,!!n.multiple,t,!1)}};sp=Bc;ap=ar;var dy={usingClientEntryPoint:!1,Events:[lo,jr,Is,ip,op,Bc]},yi={findFiberByHostInstance:Yn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},fy={bundleType:yi.bundleType,version:yi.version,rendererPackageName:yi.rendererPackageName,rendererConfig:yi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Jt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=up(e),e===null?null:e.stateNode},findFiberByHostInstance:yi.findFiberByHostInstance||cy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mo.isDisabled&&Mo.supportsFiber)try{Ms=Mo.inject(fy),Mt=Mo}catch{}}Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dy;Je.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gc(t))throw Error(T(200));return ly(e,t,null,n)};Je.createRoot=function(e,t){if(!Gc(e))throw Error(T(299));var n=!1,r="",i=Uh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Qc(e,1,!1,null,null,n,!1,r,i),e[Kt]=t.current,Hi(e.nodeType===8?e.parentNode:e),new qc(t)};Je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=up(t),e=e===null?null:e.stateNode,e};Je.flushSync=function(e){return ar(e)};Je.hydrate=function(e,t,n){if(!Qs(t))throw Error(T(200));return Ks(null,e,t,!0,n)};Je.hydrateRoot=function(e,t,n){if(!Gc(e))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Uh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Wh(t,null,e,1,n??null,i,!1,o,s),e[Kt]=t.current,Hi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ys(t)};Je.render=function(e,t,n){if(!Qs(t))throw Error(T(200));return Ks(null,e,t,!1,n)};Je.unmountComponentAtNode=function(e){if(!Qs(e))throw Error(T(40));return e._reactRootContainer?(ar(function(){Ks(null,null,e,!1,function(){e._reactRootContainer=null,e[Kt]=null})}),!0):!1};Je.unstable_batchedUpdates=Bc;Je.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Qs(n))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return Ks(e,t,n,!1,r)};Je.version="18.3.1-next-f1338f8080-20240426";function Bh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bh)}catch(e){console.error(e)}}Bh(),Bf.exports=Je;var uo=Bf.exports;const Hh=Tf(uo);var Od=uo;Ka.createRoot=Od.createRoot,Ka.hydrateRoot=Od.hydrateRoot;var qs=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Gs=typeof window>"u"||"Deno"in globalThis;function gt(){}function py(e,t){return typeof e=="function"?e(t):e}function hy(e){return typeof e=="number"&&e>=0&&e!==1/0}function my(e,t){return Math.max(e+(t||0)-Date.now(),0)}function Wl(e,t){return typeof e=="function"?e(t):e}function gy(e,t){return typeof e=="function"?e(t):e}function Ad(e,t){const{type:n="all",exact:r,fetchStatus:i,predicate:o,queryKey:s,stale:a}=e;if(s){if(r){if(t.queryHash!==Xc(s,t.options))return!1}else if(!eo(t.queryKey,s))return!1}if(n!=="all"){const l=t.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof a=="boolean"&&t.isStale()!==a||i&&i!==t.state.fetchStatus||o&&!o(t))}function Md(e,t){const{exact:n,status:r,predicate:i,mutationKey:o}=e;if(o){if(!t.options.mutationKey)return!1;if(n){if(Ji(t.options.mutationKey)!==Ji(o))return!1}else if(!eo(t.options.mutationKey,o))return!1}return!(r&&t.state.status!==r||i&&!i(t))}function Xc(e,t){return((t==null?void 0:t.queryKeyHashFn)||Ji)(e)}function Ji(e){return JSON.stringify(e,(t,n)=>Ul(n)?Object.keys(n).sort().reduce((r,i)=>(r[i]=n[i],r),{}):n)}function eo(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?Object.keys(t).every(n=>eo(e[n],t[n])):!1}function Vh(e,t){if(e===t)return e;const n=Ld(e)&&Ld(t);if(n||Ul(e)&&Ul(t)){const r=n?e:Object.keys(e),i=r.length,o=n?t:Object.keys(t),s=o.length,a=n?[]:{},l=new Set(r);let u=0;for(let f=0;f<s;f++){const h=n?f:o[f];(!n&&l.has(h)||n)&&e[h]===void 0&&t[h]===void 0?(a[h]=void 0,u++):(a[h]=Vh(e[h],t[h]),a[h]===e[h]&&e[h]!==void 0&&u++)}return i===s&&u===i?e:a}return t}function Ld(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function Ul(e){if(!_d(e))return!1;const t=e.constructor;if(t===void 0)return!0;const n=t.prototype;return!(!_d(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function _d(e){return Object.prototype.toString.call(e)==="[object Object]"}function vy(e){return new Promise(t=>{setTimeout(t,e)})}function yy(e,t,n){return typeof n.structuralSharing=="function"?n.structuralSharing(e,t):n.structuralSharing!==!1?Vh(e,t):t}function xy(e,t,n=0){const r=[...e,t];return n&&r.length>n?r.slice(1):r}function wy(e,t,n=0){const r=[t,...e];return n&&r.length>n?r.slice(0,-1):r}var Zc=Symbol();function Yh(e,t){return!e.queryFn&&(t!=null&&t.initialPromise)?()=>t.initialPromise:!e.queryFn||e.queryFn===Zc?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}var qn,gn,$r,kf,by=(kf=class extends qs{constructor(){super();J(this,qn);J(this,gn);J(this,$r);B(this,$r,t=>{if(!Gs&&window.addEventListener){const n=()=>t();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){E(this,gn)||this.setEventListener(E(this,$r))}onUnsubscribe(){var t;this.hasListeners()||((t=E(this,gn))==null||t.call(this),B(this,gn,void 0))}setEventListener(t){var n;B(this,$r,t),(n=E(this,gn))==null||n.call(this),B(this,gn,t(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(t){E(this,qn)!==t&&(B(this,qn,t),this.onFocus())}onFocus(){const t=this.isFocused();this.listeners.forEach(n=>{n(t)})}isFocused(){var t;return typeof E(this,qn)=="boolean"?E(this,qn):((t=globalThis.document)==null?void 0:t.visibilityState)!=="hidden"}},qn=new WeakMap,gn=new WeakMap,$r=new WeakMap,kf),Qh=new by,Wr,vn,Ur,Sf,ky=(Sf=class extends qs{constructor(){super();J(this,Wr,!0);J(this,vn);J(this,Ur);B(this,Ur,t=>{if(!Gs&&window.addEventListener){const n=()=>t(!0),r=()=>t(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",r)}}})}onSubscribe(){E(this,vn)||this.setEventListener(E(this,Ur))}onUnsubscribe(){var t;this.hasListeners()||((t=E(this,vn))==null||t.call(this),B(this,vn,void 0))}setEventListener(t){var n;B(this,Ur,t),(n=E(this,vn))==null||n.call(this),B(this,vn,t(this.setOnline.bind(this)))}setOnline(t){E(this,Wr)!==t&&(B(this,Wr,t),this.listeners.forEach(r=>{r(t)}))}isOnline(){return E(this,Wr)}},Wr=new WeakMap,vn=new WeakMap,Ur=new WeakMap,Sf),Es=new ky;function Sy(){let e,t;const n=new Promise((i,o)=>{e=i,t=o});n.status="pending",n.catch(()=>{});function r(i){Object.assign(n,i),delete n.resolve,delete n.reject}return n.resolve=i=>{r({status:"fulfilled",value:i}),e(i)},n.reject=i=>{r({status:"rejected",reason:i}),t(i)},n}function jy(e){return Math.min(1e3*2**e,3e4)}function Kh(e){return(e??"online")==="online"?Es.isOnline():!0}var qh=class extends Error{constructor(e){super("CancelledError"),this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function $a(e){return e instanceof qh}function Gh(e){let t=!1,n=0,r=!1,i;const o=Sy(),s=v=>{var x;r||(d(new qh(v)),(x=e.abort)==null||x.call(e))},a=()=>{t=!0},l=()=>{t=!1},u=()=>Qh.isFocused()&&(e.networkMode==="always"||Es.isOnline())&&e.canRun(),f=()=>Kh(e.networkMode)&&e.canRun(),h=v=>{var x;r||(r=!0,(x=e.onSuccess)==null||x.call(e,v),i==null||i(),o.resolve(v))},d=v=>{var x;r||(r=!0,(x=e.onError)==null||x.call(e,v),i==null||i(),o.reject(v))},p=()=>new Promise(v=>{var x;i=g=>{(r||u())&&v(g)},(x=e.onPause)==null||x.call(e)}).then(()=>{var v;i=void 0,r||(v=e.onContinue)==null||v.call(e)}),w=()=>{if(r)return;let v;const x=n===0?e.initialPromise:void 0;try{v=x??e.fn()}catch(g){v=Promise.reject(g)}Promise.resolve(v).then(h).catch(g=>{var j;if(r)return;const m=e.retry??(Gs?0:3),y=e.retryDelay??jy,k=typeof y=="function"?y(n,g):y,S=m===!0||typeof m=="number"&&n<m||typeof m=="function"&&m(n,g);if(t||!S){d(g);return}n++,(j=e.onFail)==null||j.call(e,n,g),vy(k).then(()=>u()?void 0:p()).then(()=>{t?d(g):w()})})};return{promise:o,cancel:s,continue:()=>(i==null||i(),o),cancelRetry:a,continueRetry:l,canStart:f,start:()=>(f()?w():p().then(w),o)}}var zy=e=>setTimeout(e,0);function Ey(){let e=[],t=0,n=a=>{a()},r=a=>{a()},i=zy;const o=a=>{t?e.push(a):i(()=>{n(a)})},s=()=>{const a=e;e=[],a.length&&i(()=>{r(()=>{a.forEach(l=>{n(l)})})})};return{batch:a=>{let l;t++;try{l=a()}finally{t--,t||s()}return l},batchCalls:a=>(...l)=>{o(()=>{a(...l)})},schedule:o,setNotifyFunction:a=>{n=a},setBatchNotifyFunction:a=>{r=a},setScheduler:a=>{i=a}}}var Le=Ey(),Gn,jf,Xh=(jf=class{constructor(){J(this,Gn)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),hy(this.gcTime)&&B(this,Gn,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(Gs?1/0:5*60*1e3))}clearGcTimeout(){E(this,Gn)&&(clearTimeout(E(this,Gn)),B(this,Gn,void 0))}},Gn=new WeakMap,jf),Br,Xn,nt,Zn,Te,ro,Jn,vt,$t,zf,Ny=(zf=class extends Xh{constructor(t){super();J(this,vt);J(this,Br);J(this,Xn);J(this,nt);J(this,Zn);J(this,Te);J(this,ro);J(this,Jn);B(this,Jn,!1),B(this,ro,t.defaultOptions),this.setOptions(t.options),this.observers=[],B(this,Zn,t.client),B(this,nt,E(this,Zn).getQueryCache()),this.queryKey=t.queryKey,this.queryHash=t.queryHash,B(this,Br,Py(this.options)),this.state=t.state??E(this,Br),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var t;return(t=E(this,Te))==null?void 0:t.promise}setOptions(t){this.options={...E(this,ro),...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&E(this,nt).remove(this)}setData(t,n){const r=yy(this.state.data,t,this.options);return Ne(this,vt,$t).call(this,{data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(t,n){Ne(this,vt,$t).call(this,{type:"setState",state:t,setStateOptions:n})}cancel(t){var r,i;const n=(r=E(this,Te))==null?void 0:r.promise;return(i=E(this,Te))==null||i.cancel(t),n?n.then(gt).catch(gt):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(E(this,Br))}isActive(){return this.observers.some(t=>gy(t.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Zc||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(t=>Wl(t.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(t=0){return this.state.data===void 0?!0:t==="static"?!1:this.state.isInvalidated?!0:!my(this.state.dataUpdatedAt,t)}onFocus(){var n;const t=this.observers.find(r=>r.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(n=E(this,Te))==null||n.continue()}onOnline(){var n;const t=this.observers.find(r=>r.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(n=E(this,Te))==null||n.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),E(this,nt).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(n=>n!==t),this.observers.length||(E(this,Te)&&(E(this,Jn)?E(this,Te).cancel({revert:!0}):E(this,Te).cancelRetry()),this.scheduleGc()),E(this,nt).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||Ne(this,vt,$t).call(this,{type:"invalidate"})}fetch(t,n){var u,f,h;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(E(this,Te))return E(this,Te).continueRetry(),E(this,Te).promise}if(t&&this.setOptions(t),!this.options.queryFn){const d=this.observers.find(p=>p.options.queryFn);d&&this.setOptions(d.options)}const r=new AbortController,i=d=>{Object.defineProperty(d,"signal",{enumerable:!0,get:()=>(B(this,Jn,!0),r.signal)})},o=()=>{const d=Yh(this.options,n),w=(()=>{const v={client:E(this,Zn),queryKey:this.queryKey,meta:this.meta};return i(v),v})();return B(this,Jn,!1),this.options.persister?this.options.persister(d,w,this):d(w)},a=(()=>{const d={fetchOptions:n,options:this.options,queryKey:this.queryKey,client:E(this,Zn),state:this.state,fetchFn:o};return i(d),d})();(u=this.options.behavior)==null||u.onFetch(a,this),B(this,Xn,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((f=a.fetchOptions)==null?void 0:f.meta))&&Ne(this,vt,$t).call(this,{type:"fetch",meta:(h=a.fetchOptions)==null?void 0:h.meta});const l=d=>{var p,w,v,x;$a(d)&&d.silent||Ne(this,vt,$t).call(this,{type:"error",error:d}),$a(d)||((w=(p=E(this,nt).config).onError)==null||w.call(p,d,this),(x=(v=E(this,nt).config).onSettled)==null||x.call(v,this.state.data,d,this)),this.scheduleGc()};return B(this,Te,Gh({initialPromise:n==null?void 0:n.initialPromise,fn:a.fetchFn,abort:r.abort.bind(r),onSuccess:d=>{var p,w,v,x;if(d===void 0){l(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(d)}catch(g){l(g);return}(w=(p=E(this,nt).config).onSuccess)==null||w.call(p,d,this),(x=(v=E(this,nt).config).onSettled)==null||x.call(v,d,this.state.error,this),this.scheduleGc()},onError:l,onFail:(d,p)=>{Ne(this,vt,$t).call(this,{type:"failed",failureCount:d,error:p})},onPause:()=>{Ne(this,vt,$t).call(this,{type:"pause"})},onContinue:()=>{Ne(this,vt,$t).call(this,{type:"continue"})},retry:a.options.retry,retryDelay:a.options.retryDelay,networkMode:a.options.networkMode,canRun:()=>!0})),E(this,Te).start()}},Br=new WeakMap,Xn=new WeakMap,nt=new WeakMap,Zn=new WeakMap,Te=new WeakMap,ro=new WeakMap,Jn=new WeakMap,vt=new WeakSet,$t=function(t){const n=r=>{switch(t.type){case"failed":return{...r,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,...Cy(r.data,this.options),fetchMeta:t.meta??null};case"success":return B(this,Xn,void 0),{...r,data:t.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const i=t.error;return $a(i)&&i.revert&&E(this,Xn)?{...E(this,Xn),fetchStatus:"idle"}:{...r,error:i,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...t.state}}};this.state=n(this.state),Le.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate()}),E(this,nt).notify({query:this,type:"updated",action:t})})},zf);function Cy(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Kh(t.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function Py(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,n=t!==void 0,r=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var Pt,Ef,Ty=(Ef=class extends qs{constructor(t={}){super();J(this,Pt);this.config=t,B(this,Pt,new Map)}build(t,n,r){const i=n.queryKey,o=n.queryHash??Xc(i,n);let s=this.get(o);return s||(s=new Ny({client:t,queryKey:i,queryHash:o,options:t.defaultQueryOptions(n),state:r,defaultOptions:t.getQueryDefaults(i)}),this.add(s)),s}add(t){E(this,Pt).has(t.queryHash)||(E(this,Pt).set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const n=E(this,Pt).get(t.queryHash);n&&(t.destroy(),n===t&&E(this,Pt).delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){Le.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return E(this,Pt).get(t)}getAll(){return[...E(this,Pt).values()]}find(t){const n={exact:!0,...t};return this.getAll().find(r=>Ad(n,r))}findAll(t={}){const n=this.getAll();return Object.keys(t).length>0?n.filter(r=>Ad(t,r)):n}notify(t){Le.batch(()=>{this.listeners.forEach(n=>{n(t)})})}onFocus(){Le.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){Le.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},Pt=new WeakMap,Ef),Tt,Ae,er,Rt,dn,Nf,Ry=(Nf=class extends Xh{constructor(t){super();J(this,Rt);J(this,Tt);J(this,Ae);J(this,er);this.mutationId=t.mutationId,B(this,Ae,t.mutationCache),B(this,Tt,[]),this.state=t.state||Oy(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){E(this,Tt).includes(t)||(E(this,Tt).push(t),this.clearGcTimeout(),E(this,Ae).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){B(this,Tt,E(this,Tt).filter(n=>n!==t)),this.scheduleGc(),E(this,Ae).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){E(this,Tt).length||(this.state.status==="pending"?this.scheduleGc():E(this,Ae).remove(this))}continue(){var t;return((t=E(this,er))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var o,s,a,l,u,f,h,d,p,w,v,x,g,m,y,k,S,j,z,P;const n=()=>{Ne(this,Rt,dn).call(this,{type:"continue"})};B(this,er,Gh({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(A,O)=>{Ne(this,Rt,dn).call(this,{type:"failed",failureCount:A,error:O})},onPause:()=>{Ne(this,Rt,dn).call(this,{type:"pause"})},onContinue:n,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>E(this,Ae).canRun(this)}));const r=this.state.status==="pending",i=!E(this,er).canStart();try{if(r)n();else{Ne(this,Rt,dn).call(this,{type:"pending",variables:t,isPaused:i}),await((s=(o=E(this,Ae).config).onMutate)==null?void 0:s.call(o,t,this));const O=await((l=(a=this.options).onMutate)==null?void 0:l.call(a,t));O!==this.state.context&&Ne(this,Rt,dn).call(this,{type:"pending",context:O,variables:t,isPaused:i})}const A=await E(this,er).start();return await((f=(u=E(this,Ae).config).onSuccess)==null?void 0:f.call(u,A,t,this.state.context,this)),await((d=(h=this.options).onSuccess)==null?void 0:d.call(h,A,t,this.state.context)),await((w=(p=E(this,Ae).config).onSettled)==null?void 0:w.call(p,A,null,this.state.variables,this.state.context,this)),await((x=(v=this.options).onSettled)==null?void 0:x.call(v,A,null,t,this.state.context)),Ne(this,Rt,dn).call(this,{type:"success",data:A}),A}catch(A){try{throw await((m=(g=E(this,Ae).config).onError)==null?void 0:m.call(g,A,t,this.state.context,this)),await((k=(y=this.options).onError)==null?void 0:k.call(y,A,t,this.state.context)),await((j=(S=E(this,Ae).config).onSettled)==null?void 0:j.call(S,void 0,A,this.state.variables,this.state.context,this)),await((P=(z=this.options).onSettled)==null?void 0:P.call(z,void 0,A,t,this.state.context)),A}finally{Ne(this,Rt,dn).call(this,{type:"error",error:A})}}finally{E(this,Ae).runNext(this)}}},Tt=new WeakMap,Ae=new WeakMap,er=new WeakMap,Rt=new WeakSet,dn=function(t){const n=r=>{switch(t.type){case"failed":return{...r,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...r,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:t.error,failureCount:r.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=n(this.state),Le.batch(()=>{E(this,Tt).forEach(r=>{r.onMutationUpdate(t)}),E(this,Ae).notify({mutation:this,type:"updated",action:t})})},Nf);function Oy(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Bt,yt,io,Cf,Ay=(Cf=class extends qs{constructor(t={}){super();J(this,Bt);J(this,yt);J(this,io);this.config=t,B(this,Bt,new Set),B(this,yt,new Map),B(this,io,0)}build(t,n,r){const i=new Ry({mutationCache:this,mutationId:++vo(this,io)._,options:t.defaultMutationOptions(n),state:r});return this.add(i),i}add(t){E(this,Bt).add(t);const n=Lo(t);if(typeof n=="string"){const r=E(this,yt).get(n);r?r.push(t):E(this,yt).set(n,[t])}this.notify({type:"added",mutation:t})}remove(t){if(E(this,Bt).delete(t)){const n=Lo(t);if(typeof n=="string"){const r=E(this,yt).get(n);if(r)if(r.length>1){const i=r.indexOf(t);i!==-1&&r.splice(i,1)}else r[0]===t&&E(this,yt).delete(n)}}this.notify({type:"removed",mutation:t})}canRun(t){const n=Lo(t);if(typeof n=="string"){const r=E(this,yt).get(n),i=r==null?void 0:r.find(o=>o.state.status==="pending");return!i||i===t}else return!0}runNext(t){var r;const n=Lo(t);if(typeof n=="string"){const i=(r=E(this,yt).get(n))==null?void 0:r.find(o=>o!==t&&o.state.isPaused);return(i==null?void 0:i.continue())??Promise.resolve()}else return Promise.resolve()}clear(){Le.batch(()=>{E(this,Bt).forEach(t=>{this.notify({type:"removed",mutation:t})}),E(this,Bt).clear(),E(this,yt).clear()})}getAll(){return Array.from(E(this,Bt))}find(t){const n={exact:!0,...t};return this.getAll().find(r=>Md(n,r))}findAll(t={}){return this.getAll().filter(n=>Md(t,n))}notify(t){Le.batch(()=>{this.listeners.forEach(n=>{n(t)})})}resumePausedMutations(){const t=this.getAll().filter(n=>n.state.isPaused);return Le.batch(()=>Promise.all(t.map(n=>n.continue().catch(gt))))}},Bt=new WeakMap,yt=new WeakMap,io=new WeakMap,Cf);function Lo(e){var t;return(t=e.options.scope)==null?void 0:t.id}function Dd(e){return{onFetch:(t,n)=>{var f,h,d,p,w;const r=t.options,i=(d=(h=(f=t.fetchOptions)==null?void 0:f.meta)==null?void 0:h.fetchMore)==null?void 0:d.direction,o=((p=t.state.data)==null?void 0:p.pages)||[],s=((w=t.state.data)==null?void 0:w.pageParams)||[];let a={pages:[],pageParams:[]},l=0;const u=async()=>{let v=!1;const x=y=>{Object.defineProperty(y,"signal",{enumerable:!0,get:()=>(t.signal.aborted?v=!0:t.signal.addEventListener("abort",()=>{v=!0}),t.signal)})},g=Yh(t.options,t.fetchOptions),m=async(y,k,S)=>{if(v)return Promise.reject();if(k==null&&y.pages.length)return Promise.resolve(y);const z=(()=>{const $={client:t.client,queryKey:t.queryKey,pageParam:k,direction:S?"backward":"forward",meta:t.options.meta};return x($),$})(),P=await g(z),{maxPages:A}=t.options,O=S?wy:xy;return{pages:O(y.pages,P,A),pageParams:O(y.pageParams,k,A)}};if(i&&o.length){const y=i==="backward",k=y?My:Id,S={pages:o,pageParams:s},j=k(r,S);a=await m(S,j,y)}else{const y=e??o.length;do{const k=l===0?s[0]??r.initialPageParam:Id(r,a);if(l>0&&k==null)break;a=await m(a,k),l++}while(l<y)}return a};t.options.persister?t.fetchFn=()=>{var v,x;return(x=(v=t.options).persister)==null?void 0:x.call(v,u,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n)}:t.fetchFn=u}}}function Id(e,{pages:t,pageParams:n}){const r=t.length-1;return t.length>0?e.getNextPageParam(t[r],t,n[r],n):void 0}function My(e,{pages:t,pageParams:n}){var r;return t.length>0?(r=e.getPreviousPageParam)==null?void 0:r.call(e,t[0],t,n[0],n):void 0}var fe,yn,xn,Hr,Vr,wn,Yr,Qr,Pf,Ly=(Pf=class{constructor(e={}){J(this,fe);J(this,yn);J(this,xn);J(this,Hr);J(this,Vr);J(this,wn);J(this,Yr);J(this,Qr);B(this,fe,e.queryCache||new Ty),B(this,yn,e.mutationCache||new Ay),B(this,xn,e.defaultOptions||{}),B(this,Hr,new Map),B(this,Vr,new Map),B(this,wn,0)}mount(){vo(this,wn)._++,E(this,wn)===1&&(B(this,Yr,Qh.subscribe(async e=>{e&&(await this.resumePausedMutations(),E(this,fe).onFocus())})),B(this,Qr,Es.subscribe(async e=>{e&&(await this.resumePausedMutations(),E(this,fe).onOnline())})))}unmount(){var e,t;vo(this,wn)._--,E(this,wn)===0&&((e=E(this,Yr))==null||e.call(this),B(this,Yr,void 0),(t=E(this,Qr))==null||t.call(this),B(this,Qr,void 0))}isFetching(e){return E(this,fe).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return E(this,yn).findAll({...e,status:"pending"}).length}getQueryData(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=E(this,fe).get(t.queryHash))==null?void 0:n.state.data}ensureQueryData(e){const t=this.defaultQueryOptions(e),n=E(this,fe).build(this,t),r=n.state.data;return r===void 0?this.fetchQuery(e):(e.revalidateIfStale&&n.isStaleByTime(Wl(t.staleTime,n))&&this.prefetchQuery(t),Promise.resolve(r))}getQueriesData(e){return E(this,fe).findAll(e).map(({queryKey:t,state:n})=>{const r=n.data;return[t,r]})}setQueryData(e,t,n){const r=this.defaultQueryOptions({queryKey:e}),i=E(this,fe).get(r.queryHash),o=i==null?void 0:i.state.data,s=py(t,o);if(s!==void 0)return E(this,fe).build(this,r).setData(s,{...n,manual:!0})}setQueriesData(e,t,n){return Le.batch(()=>E(this,fe).findAll(e).map(({queryKey:r})=>[r,this.setQueryData(r,t,n)]))}getQueryState(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=E(this,fe).get(t.queryHash))==null?void 0:n.state}removeQueries(e){const t=E(this,fe);Le.batch(()=>{t.findAll(e).forEach(n=>{t.remove(n)})})}resetQueries(e,t){const n=E(this,fe);return Le.batch(()=>(n.findAll(e).forEach(r=>{r.reset()}),this.refetchQueries({type:"active",...e},t)))}cancelQueries(e,t={}){const n={revert:!0,...t},r=Le.batch(()=>E(this,fe).findAll(e).map(i=>i.cancel(n)));return Promise.all(r).then(gt).catch(gt)}invalidateQueries(e,t={}){return Le.batch(()=>(E(this,fe).findAll(e).forEach(n=>{n.invalidate()}),(e==null?void 0:e.refetchType)==="none"?Promise.resolve():this.refetchQueries({...e,type:(e==null?void 0:e.refetchType)??(e==null?void 0:e.type)??"active"},t)))}refetchQueries(e,t={}){const n={...t,cancelRefetch:t.cancelRefetch??!0},r=Le.batch(()=>E(this,fe).findAll(e).filter(i=>!i.isDisabled()&&!i.isStatic()).map(i=>{let o=i.fetch(void 0,n);return n.throwOnError||(o=o.catch(gt)),i.state.fetchStatus==="paused"?Promise.resolve():o}));return Promise.all(r).then(gt)}fetchQuery(e){const t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);const n=E(this,fe).build(this,t);return n.isStaleByTime(Wl(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(gt).catch(gt)}fetchInfiniteQuery(e){return e.behavior=Dd(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(gt).catch(gt)}ensureInfiniteQueryData(e){return e.behavior=Dd(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return Es.isOnline()?E(this,yn).resumePausedMutations():Promise.resolve()}getQueryCache(){return E(this,fe)}getMutationCache(){return E(this,yn)}getDefaultOptions(){return E(this,xn)}setDefaultOptions(e){B(this,xn,e)}setQueryDefaults(e,t){E(this,Hr).set(Ji(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...E(this,Hr).values()],n={};return t.forEach(r=>{eo(e,r.queryKey)&&Object.assign(n,r.defaultOptions)}),n}setMutationDefaults(e,t){E(this,Vr).set(Ji(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...E(this,Vr).values()],n={};return t.forEach(r=>{eo(e,r.mutationKey)&&Object.assign(n,r.defaultOptions)}),n}defaultQueryOptions(e){if(e._defaulted)return e;const t={...E(this,xn).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=Xc(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.queryFn===Zc&&(t.enabled=!1),t}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...E(this,xn).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){E(this,fe).clear(),E(this,yn).clear()}},fe=new WeakMap,yn=new WeakMap,xn=new WeakMap,Hr=new WeakMap,Vr=new WeakMap,wn=new WeakMap,Yr=new WeakMap,Qr=new WeakMap,Pf),_y=b.createContext(void 0),Dy=({client:e,children:t})=>(b.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),c.jsx(_y.Provider,{value:e,children:t}));/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ns(){return Ns=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ns.apply(this,arguments)}var Sn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Sn||(Sn={}));const Fd="popstate";function Iy(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return Bl("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Jh(i)}return $y(t,n,null,e)}function Ve(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Zh(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Fy(){return Math.random().toString(36).substr(2,8)}function $d(e,t){return{usr:e.state,key:e.key,idx:t}}function Bl(e,t,n,r){return n===void 0&&(n=null),Ns({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Xs(t):t,{state:n,key:t&&t.key||r||Fy()})}function Jh(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Xs(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function $y(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Sn.Pop,l=null,u=f();u==null&&(u=0,s.replaceState(Ns({},s.state,{idx:u}),""));function f(){return(s.state||{idx:null}).idx}function h(){a=Sn.Pop;let x=f(),g=x==null?null:x-u;u=x,l&&l({action:a,location:v.location,delta:g})}function d(x,g){a=Sn.Push;let m=Bl(v.location,x,g);u=f()+1;let y=$d(m,u),k=v.createHref(m);try{s.pushState(y,"",k)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(k)}o&&l&&l({action:a,location:v.location,delta:1})}function p(x,g){a=Sn.Replace;let m=Bl(v.location,x,g);u=f();let y=$d(m,u),k=v.createHref(m);s.replaceState(y,"",k),o&&l&&l({action:a,location:v.location,delta:0})}function w(x){let g=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof x=="string"?x:Jh(x);return m=m.replace(/ $/,"%20"),Ve(g,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,g)}let v={get action(){return a},get location(){return e(i,s)},listen(x){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Fd,h),l=x,()=>{i.removeEventListener(Fd,h),l=null}},createHref(x){return t(i,x)},createURL:w,encodeLocation(x){let g=w(x);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:d,replace:p,go(x){return s.go(x)}};return v}var Wd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Wd||(Wd={}));function Wy(e,t,n){return n===void 0&&(n="/"),Uy(e,t,n,!1)}function Uy(e,t,n,r){let i=typeof t=="string"?Xs(t):t,o=nm(i.pathname||"/",n);if(o==null)return null;let s=em(e);By(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let u=ex(o);a=Zy(s[l],u,r)}return a}function em(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(Ve(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Dr([r,l.relativePath]),f=n.concat(l);o.children&&o.children.length>0&&(Ve(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),em(o.children,t,f,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Gy(u,o.index),routesMeta:f})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of tm(o.path))i(o,s,l)}),t}function tm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=tm(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function By(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Xy(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Hy=/^:[\w-]+$/,Vy=3,Yy=2,Qy=1,Ky=10,qy=-2,Ud=e=>e==="*";function Gy(e,t){let n=e.split("/"),r=n.length;return n.some(Ud)&&(r+=qy),t&&(r+=Yy),n.filter(i=>!Ud(i)).reduce((i,o)=>i+(Hy.test(o)?Vy:o===""?Qy:Ky),r)}function Xy(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Zy(e,t,n){let{routesMeta:r}=e,i={},o="/",s=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,f=o==="/"?t:t.slice(o.length)||"/",h=Bd({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},f),d=l.route;if(!h&&u&&n&&!r[r.length-1].route.index&&(h=Bd({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},f)),!h)return null;Object.assign(i,h.params),s.push({params:i,pathname:Dr([o,h.pathname]),pathnameBase:tx(Dr([o,h.pathnameBase])),route:d}),h.pathnameBase!=="/"&&(o=Dr([o,h.pathnameBase]))}return s}function Bd(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Jy(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,f,h)=>{let{paramName:d,isOptional:p}=f;if(d==="*"){let v=a[h]||"";s=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}const w=a[h];return p&&!w?u[d]=void 0:u[d]=(w||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:e}}function Jy(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Zh(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function ex(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Zh(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function nm(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Dr=e=>e.join("/").replace(/\/\/+/g,"/"),tx=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/");function nx(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const rm=["post","put","patch","delete"];new Set(rm);const rx=["get",...rm];new Set(rx);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cs(){return Cs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Cs.apply(this,arguments)}const ix=b.createContext(null),ox=b.createContext(null),im=b.createContext(null),Zs=b.createContext(null),Js=b.createContext({outlet:null,matches:[],isDataRoute:!1}),om=b.createContext(null);function Jc(){return b.useContext(Zs)!=null}function sm(){return Jc()||Ve(!1),b.useContext(Zs).location}function sx(e,t){return ax(e,t)}function ax(e,t,n,r){Jc()||Ve(!1);let{navigator:i}=b.useContext(im),{matches:o}=b.useContext(Js),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u=sm(),f;if(t){var h;let x=typeof t=="string"?Xs(t):t;l==="/"||(h=x.pathname)!=null&&h.startsWith(l)||Ve(!1),f=x}else f=u;let d=f.pathname||"/",p=d;if(l!=="/"){let x=l.replace(/^\//,"").split("/");p="/"+d.replace(/^\//,"").split("/").slice(x.length).join("/")}let w=Wy(e,{pathname:p}),v=fx(w&&w.map(x=>Object.assign({},x,{params:Object.assign({},a,x.params),pathname:Dr([l,i.encodeLocation?i.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?l:Dr([l,i.encodeLocation?i.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),o,n,r);return t&&v?b.createElement(Zs.Provider,{value:{location:Cs({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Sn.Pop}},v):v}function lx(){let e=gx(),t=nx(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:i},n):null,null)}const cx=b.createElement(lx,null);class ux extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?b.createElement(Js.Provider,{value:this.props.routeContext},b.createElement(om.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function dx(e){let{routeContext:t,match:n,children:r}=e,i=b.useContext(ix);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(Js.Provider,{value:t},r)}function fx(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let f=s.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);f>=0||Ve(!1),s=s.slice(0,Math.min(s.length,f+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<s.length;f++){let h=s[f];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=f),h.route.id){let{loaderData:d,errors:p}=n,w=h.route.loader&&d[h.route.id]===void 0&&(!p||p[h.route.id]===void 0);if(h.route.lazy||w){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((f,h,d)=>{let p,w=!1,v=null,x=null;n&&(p=a&&h.route.id?a[h.route.id]:void 0,v=h.route.errorElement||cx,l&&(u<0&&d===0?(w=!0,x=null):u===d&&(w=!0,x=h.route.hydrateFallbackElement||null)));let g=t.concat(s.slice(0,d+1)),m=()=>{let y;return p?y=v:w?y=x:h.route.Component?y=b.createElement(h.route.Component,null):h.route.element?y=h.route.element:y=f,b.createElement(dx,{match:h,routeContext:{outlet:f,matches:g,isDataRoute:n!=null},children:y})};return n&&(h.route.ErrorBoundary||h.route.errorElement||d===0)?b.createElement(ux,{location:n.location,revalidation:n.revalidation,component:v,error:p,children:m(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):m()},null)}var Hl=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Hl||{});function px(e){let t=b.useContext(ox);return t||Ve(!1),t}function hx(e){let t=b.useContext(Js);return t||Ve(!1),t}function mx(e){let t=hx(),n=t.matches[t.matches.length-1];return n.route.id||Ve(!1),n.route.id}function gx(){var e;let t=b.useContext(om),n=px(Hl.UseRouteError),r=mx(Hl.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function vx(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function zi(e){Ve(!1)}function yx(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Sn.Pop,navigator:o,static:s=!1,future:a}=e;Jc()&&Ve(!1);let l=t.replace(/^\/*/,"/"),u=b.useMemo(()=>({basename:l,navigator:o,static:s,future:Cs({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof r=="string"&&(r=Xs(r));let{pathname:f="/",search:h="",hash:d="",state:p=null,key:w="default"}=r,v=b.useMemo(()=>{let x=nm(f,l);return x==null?null:{location:{pathname:x,search:h,hash:d,state:p,key:w},navigationType:i}},[l,f,h,d,p,w,i]);return v==null?null:b.createElement(im.Provider,{value:u},b.createElement(Zs.Provider,{children:n,value:v}))}function xx(e){let{children:t,location:n}=e;return sx(Vl(t),n)}new Promise(()=>{});function Vl(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,i)=>{if(!b.isValidElement(r))return;let o=[...t,i];if(r.type===b.Fragment){n.push.apply(n,Vl(r.props.children,o));return}r.type!==zi&&Ve(!1),!r.props.index||!r.props.children||Ve(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Vl(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const wx="6";try{window.__reactRouterVersion=wx}catch{}const bx="startTransition",Hd=Wf[bx];function kx(e){let{basename:t,children:n,future:r,window:i}=e,o=b.useRef();o.current==null&&(o.current=Iy({window:i,v5Compat:!0}));let s=o.current,[a,l]=b.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},f=b.useCallback(h=>{u&&Hd?Hd(()=>l(h)):l(h)},[l,u]);return b.useLayoutEffect(()=>s.listen(f),[s,f]),b.useEffect(()=>vx(r),[r]),b.createElement(yx,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}var Vd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Vd||(Vd={}));var Yd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Yd||(Yd={}));var Qd=["light","dark"],Sx="(prefers-color-scheme: dark)",jx=b.createContext(void 0),zx={setTheme:e=>{},themes:[]},Ex=()=>{var e;return(e=b.useContext(jx))!=null?e:zx};b.memo(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:r,enableColorScheme:i,defaultTheme:o,value:s,attrs:a,nonce:l})=>{let u=o==="system",f=n==="class"?`var d=document.documentElement,c=d.classList;${`c.remove(${a.map(w=>`'${w}'`).join(",")})`};`:`var d=document.documentElement,n='${n}',s='setAttribute';`,h=i?Qd.includes(o)&&o?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${o}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",d=(w,v=!1,x=!0)=>{let g=s?s[w]:w,m=v?w+"|| ''":`'${g}'`,y="";return i&&x&&!v&&Qd.includes(w)&&(y+=`d.style.colorScheme = '${w}';`),n==="class"?v||g?y+=`c.add(${m})`:y+="null":g&&(y+=`d[s](n,${m})`),y},p=e?`!function(){${f}${d(e)}}()`:r?`!function(){try{${f}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${Sx}',m=window.matchMedia(t);if(m.media!==t||m.matches){${d("dark")}}else{${d("light")}}}else if(e){${s?`var x=${JSON.stringify(s)};`:""}${d(s?"x[e]":"e",!0)}}${u?"":"else{"+d(o,!1,!1)+"}"}${h}}catch(e){}}()`:`!function(){try{${f}var e=localStorage.getItem('${t}');if(e){${s?`var x=${JSON.stringify(s)};`:""}${d(s?"x[e]":"e",!0)}}else{${d(o,!1,!1)};}${h}}catch(t){}}();`;return b.createElement("script",{nonce:l,dangerouslySetInnerHTML:{__html:p}})});var Nx=e=>{switch(e){case"success":return Tx;case"info":return Ox;case"warning":return Rx;case"error":return Ax;default:return null}},Cx=Array(12).fill(0),Px=({visible:e,className:t})=>R.createElement("div",{className:["sonner-loading-wrapper",t].filter(Boolean).join(" "),"data-visible":e},R.createElement("div",{className:"sonner-spinner"},Cx.map((n,r)=>R.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${r}`})))),Tx=R.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},R.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),Rx=R.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},R.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),Ox=R.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},R.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),Ax=R.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},R.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),Mx=R.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},R.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),R.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),Lx=()=>{let[e,t]=R.useState(document.hidden);return R.useEffect(()=>{let n=()=>{t(document.hidden)};return document.addEventListener("visibilitychange",n),()=>window.removeEventListener("visibilitychange",n)},[]),e},Yl=1,_x=class{constructor(){this.subscribe=e=>(this.subscribers.push(e),()=>{let t=this.subscribers.indexOf(e);this.subscribers.splice(t,1)}),this.publish=e=>{this.subscribers.forEach(t=>t(e))},this.addToast=e=>{this.publish(e),this.toasts=[...this.toasts,e]},this.create=e=>{var t;let{message:n,...r}=e,i=typeof(e==null?void 0:e.id)=="number"||((t=e.id)==null?void 0:t.length)>0?e.id:Yl++,o=this.toasts.find(a=>a.id===i),s=e.dismissible===void 0?!0:e.dismissible;return this.dismissedToasts.has(i)&&this.dismissedToasts.delete(i),o?this.toasts=this.toasts.map(a=>a.id===i?(this.publish({...a,...e,id:i,title:n}),{...a,...e,id:i,dismissible:s,title:n}):a):this.addToast({title:n,...r,dismissible:s,id:i}),i},this.dismiss=e=>(this.dismissedToasts.add(e),e||this.toasts.forEach(t=>{this.subscribers.forEach(n=>n({id:t.id,dismiss:!0}))}),this.subscribers.forEach(t=>t({id:e,dismiss:!0})),e),this.message=(e,t)=>this.create({...t,message:e}),this.error=(e,t)=>this.create({...t,message:e,type:"error"}),this.success=(e,t)=>this.create({...t,type:"success",message:e}),this.info=(e,t)=>this.create({...t,type:"info",message:e}),this.warning=(e,t)=>this.create({...t,type:"warning",message:e}),this.loading=(e,t)=>this.create({...t,type:"loading",message:e}),this.promise=(e,t)=>{if(!t)return;let n;t.loading!==void 0&&(n=this.create({...t,promise:e,type:"loading",message:t.loading,description:typeof t.description!="function"?t.description:void 0}));let r=e instanceof Promise?e:e(),i=n!==void 0,o,s=r.then(async l=>{if(o=["resolve",l],R.isValidElement(l))i=!1,this.create({id:n,type:"default",message:l});else if(Ix(l)&&!l.ok){i=!1;let u=typeof t.error=="function"?await t.error(`HTTP error! status: ${l.status}`):t.error,f=typeof t.description=="function"?await t.description(`HTTP error! status: ${l.status}`):t.description;this.create({id:n,type:"error",message:u,description:f})}else if(t.success!==void 0){i=!1;let u=typeof t.success=="function"?await t.success(l):t.success,f=typeof t.description=="function"?await t.description(l):t.description;this.create({id:n,type:"success",message:u,description:f})}}).catch(async l=>{if(o=["reject",l],t.error!==void 0){i=!1;let u=typeof t.error=="function"?await t.error(l):t.error,f=typeof t.description=="function"?await t.description(l):t.description;this.create({id:n,type:"error",message:u,description:f})}}).finally(()=>{var l;i&&(this.dismiss(n),n=void 0),(l=t.finally)==null||l.call(t)}),a=()=>new Promise((l,u)=>s.then(()=>o[0]==="reject"?u(o[1]):l(o[1])).catch(u));return typeof n!="string"&&typeof n!="number"?{unwrap:a}:Object.assign(n,{unwrap:a})},this.custom=(e,t)=>{let n=(t==null?void 0:t.id)||Yl++;return this.create({jsx:e(n),id:n,...t}),n},this.getActiveToasts=()=>this.toasts.filter(e=>!this.dismissedToasts.has(e.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}},Fe=new _x,Dx=(e,t)=>{let n=(t==null?void 0:t.id)||Yl++;return Fe.addToast({title:e,...t,id:n}),n},Ix=e=>e&&typeof e=="object"&&"ok"in e&&typeof e.ok=="boolean"&&"status"in e&&typeof e.status=="number",Fx=Dx,$x=()=>Fe.toasts,Wx=()=>Fe.getActiveToasts();Object.assign(Fx,{success:Fe.success,info:Fe.info,warning:Fe.warning,error:Fe.error,custom:Fe.custom,message:Fe.message,promise:Fe.promise,dismiss:Fe.dismiss,loading:Fe.loading},{getHistory:$x,getToasts:Wx});function Ux(e,{insertAt:t}={}){if(typeof document>"u")return;let n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}Ux(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function _o(e){return e.label!==void 0}var Bx=3,Hx="32px",Vx="16px",Kd=4e3,Yx=356,Qx=14,Kx=20,qx=200;function ht(...e){return e.filter(Boolean).join(" ")}function Gx(e){let[t,n]=e.split("-"),r=[];return t&&r.push(t),n&&r.push(n),r}var Xx=e=>{var t,n,r,i,o,s,a,l,u,f,h;let{invert:d,toast:p,unstyled:w,interacting:v,setHeights:x,visibleToasts:g,heights:m,index:y,toasts:k,expanded:S,removeToast:j,defaultRichColors:z,closeButton:P,style:A,cancelButtonStyle:O,actionButtonStyle:$,className:D="",descriptionClassName:Q="",duration:M,position:G,gap:W,loadingIcon:H,expandByDefault:N,classNames:C,icons:L,closeButtonAriaLabel:V="Close toast",pauseWhenPageIsHidden:F}=e,[K,X]=R.useState(null),[me,Ee]=R.useState(null),[ee,fr]=R.useState(!1),[en,Wn]=R.useState(!1),[tn,pr]=R.useState(!1),[nn,ho]=R.useState(!1),[ca,mo]=R.useState(!1),[ua,ci]=R.useState(0),[hr,vu]=R.useState(0),ui=R.useRef(p.duration||M||Kd),yu=R.useRef(null),Un=R.useRef(null),Tg=y===0,Rg=y+1<=g,tt=p.type,mr=p.dismissible!==!1,Og=p.className||"",Ag=p.descriptionClassName||"",go=R.useMemo(()=>m.findIndex(U=>U.toastId===p.id)||0,[m,p.id]),Mg=R.useMemo(()=>{var U;return(U=p.closeButton)!=null?U:P},[p.closeButton,P]),xu=R.useMemo(()=>p.duration||M||Kd,[p.duration,M]),da=R.useRef(0),gr=R.useRef(0),wu=R.useRef(0),vr=R.useRef(null),[Lg,_g]=G.split("-"),bu=R.useMemo(()=>m.reduce((U,ne,ae)=>ae>=go?U:U+ne.height,0),[m,go]),ku=Lx(),Dg=p.invert||d,fa=tt==="loading";gr.current=R.useMemo(()=>go*W+bu,[go,bu]),R.useEffect(()=>{ui.current=xu},[xu]),R.useEffect(()=>{fr(!0)},[]),R.useEffect(()=>{let U=Un.current;if(U){let ne=U.getBoundingClientRect().height;return vu(ne),x(ae=>[{toastId:p.id,height:ne,position:p.position},...ae]),()=>x(ae=>ae.filter(ut=>ut.toastId!==p.id))}},[x,p.id]),R.useLayoutEffect(()=>{if(!ee)return;let U=Un.current,ne=U.style.height;U.style.height="auto";let ae=U.getBoundingClientRect().height;U.style.height=ne,vu(ae),x(ut=>ut.find(dt=>dt.toastId===p.id)?ut.map(dt=>dt.toastId===p.id?{...dt,height:ae}:dt):[{toastId:p.id,height:ae,position:p.position},...ut])},[ee,p.title,p.description,x,p.id]);let rn=R.useCallback(()=>{Wn(!0),ci(gr.current),x(U=>U.filter(ne=>ne.toastId!==p.id)),setTimeout(()=>{j(p)},qx)},[p,j,x,gr]);R.useEffect(()=>{if(p.promise&&tt==="loading"||p.duration===1/0||p.type==="loading")return;let U;return S||v||F&&ku?(()=>{if(wu.current<da.current){let ne=new Date().getTime()-da.current;ui.current=ui.current-ne}wu.current=new Date().getTime()})():ui.current!==1/0&&(da.current=new Date().getTime(),U=setTimeout(()=>{var ne;(ne=p.onAutoClose)==null||ne.call(p,p),rn()},ui.current)),()=>clearTimeout(U)},[S,v,p,tt,F,ku,rn]),R.useEffect(()=>{p.delete&&rn()},[rn,p.delete]);function Ig(){var U,ne,ae;return L!=null&&L.loading?R.createElement("div",{className:ht(C==null?void 0:C.loader,(U=p==null?void 0:p.classNames)==null?void 0:U.loader,"sonner-loader"),"data-visible":tt==="loading"},L.loading):H?R.createElement("div",{className:ht(C==null?void 0:C.loader,(ne=p==null?void 0:p.classNames)==null?void 0:ne.loader,"sonner-loader"),"data-visible":tt==="loading"},H):R.createElement(Px,{className:ht(C==null?void 0:C.loader,(ae=p==null?void 0:p.classNames)==null?void 0:ae.loader),visible:tt==="loading"})}return R.createElement("li",{tabIndex:0,ref:Un,className:ht(D,Og,C==null?void 0:C.toast,(t=p==null?void 0:p.classNames)==null?void 0:t.toast,C==null?void 0:C.default,C==null?void 0:C[tt],(n=p==null?void 0:p.classNames)==null?void 0:n[tt]),"data-sonner-toast":"","data-rich-colors":(r=p.richColors)!=null?r:z,"data-styled":!(p.jsx||p.unstyled||w),"data-mounted":ee,"data-promise":!!p.promise,"data-swiped":ca,"data-removed":en,"data-visible":Rg,"data-y-position":Lg,"data-x-position":_g,"data-index":y,"data-front":Tg,"data-swiping":tn,"data-dismissible":mr,"data-type":tt,"data-invert":Dg,"data-swipe-out":nn,"data-swipe-direction":me,"data-expanded":!!(S||N&&ee),style:{"--index":y,"--toasts-before":y,"--z-index":k.length-y,"--offset":`${en?ua:gr.current}px`,"--initial-height":N?"auto":`${hr}px`,...A,...p.style},onDragEnd:()=>{pr(!1),X(null),vr.current=null},onPointerDown:U=>{fa||!mr||(yu.current=new Date,ci(gr.current),U.target.setPointerCapture(U.pointerId),U.target.tagName!=="BUTTON"&&(pr(!0),vr.current={x:U.clientX,y:U.clientY}))},onPointerUp:()=>{var U,ne,ae,ut;if(nn||!mr)return;vr.current=null;let dt=Number(((U=Un.current)==null?void 0:U.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),on=Number(((ne=Un.current)==null?void 0:ne.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),Bn=new Date().getTime()-((ae=yu.current)==null?void 0:ae.getTime()),ft=K==="x"?dt:on,sn=Math.abs(ft)/Bn;if(Math.abs(ft)>=Kx||sn>.11){ci(gr.current),(ut=p.onDismiss)==null||ut.call(p,p),Ee(K==="x"?dt>0?"right":"left":on>0?"down":"up"),rn(),ho(!0),mo(!1);return}pr(!1),X(null)},onPointerMove:U=>{var ne,ae,ut,dt;if(!vr.current||!mr||((ne=window.getSelection())==null?void 0:ne.toString().length)>0)return;let on=U.clientY-vr.current.y,Bn=U.clientX-vr.current.x,ft=(ae=e.swipeDirections)!=null?ae:Gx(G);!K&&(Math.abs(Bn)>1||Math.abs(on)>1)&&X(Math.abs(Bn)>Math.abs(on)?"x":"y");let sn={x:0,y:0};K==="y"?(ft.includes("top")||ft.includes("bottom"))&&(ft.includes("top")&&on<0||ft.includes("bottom")&&on>0)&&(sn.y=on):K==="x"&&(ft.includes("left")||ft.includes("right"))&&(ft.includes("left")&&Bn<0||ft.includes("right")&&Bn>0)&&(sn.x=Bn),(Math.abs(sn.x)>0||Math.abs(sn.y)>0)&&mo(!0),(ut=Un.current)==null||ut.style.setProperty("--swipe-amount-x",`${sn.x}px`),(dt=Un.current)==null||dt.style.setProperty("--swipe-amount-y",`${sn.y}px`)}},Mg&&!p.jsx?R.createElement("button",{"aria-label":V,"data-disabled":fa,"data-close-button":!0,onClick:fa||!mr?()=>{}:()=>{var U;rn(),(U=p.onDismiss)==null||U.call(p,p)},className:ht(C==null?void 0:C.closeButton,(i=p==null?void 0:p.classNames)==null?void 0:i.closeButton)},(o=L==null?void 0:L.close)!=null?o:Mx):null,p.jsx||b.isValidElement(p.title)?p.jsx?p.jsx:typeof p.title=="function"?p.title():p.title:R.createElement(R.Fragment,null,tt||p.icon||p.promise?R.createElement("div",{"data-icon":"",className:ht(C==null?void 0:C.icon,(s=p==null?void 0:p.classNames)==null?void 0:s.icon)},p.promise||p.type==="loading"&&!p.icon?p.icon||Ig():null,p.type!=="loading"?p.icon||(L==null?void 0:L[tt])||Nx(tt):null):null,R.createElement("div",{"data-content":"",className:ht(C==null?void 0:C.content,(a=p==null?void 0:p.classNames)==null?void 0:a.content)},R.createElement("div",{"data-title":"",className:ht(C==null?void 0:C.title,(l=p==null?void 0:p.classNames)==null?void 0:l.title)},typeof p.title=="function"?p.title():p.title),p.description?R.createElement("div",{"data-description":"",className:ht(Q,Ag,C==null?void 0:C.description,(u=p==null?void 0:p.classNames)==null?void 0:u.description)},typeof p.description=="function"?p.description():p.description):null),b.isValidElement(p.cancel)?p.cancel:p.cancel&&_o(p.cancel)?R.createElement("button",{"data-button":!0,"data-cancel":!0,style:p.cancelButtonStyle||O,onClick:U=>{var ne,ae;_o(p.cancel)&&mr&&((ae=(ne=p.cancel).onClick)==null||ae.call(ne,U),rn())},className:ht(C==null?void 0:C.cancelButton,(f=p==null?void 0:p.classNames)==null?void 0:f.cancelButton)},p.cancel.label):null,b.isValidElement(p.action)?p.action:p.action&&_o(p.action)?R.createElement("button",{"data-button":!0,"data-action":!0,style:p.actionButtonStyle||$,onClick:U=>{var ne,ae;_o(p.action)&&((ae=(ne=p.action).onClick)==null||ae.call(ne,U),!U.defaultPrevented&&rn())},className:ht(C==null?void 0:C.actionButton,(h=p==null?void 0:p.classNames)==null?void 0:h.actionButton)},p.action.label):null))};function qd(){if(typeof window>"u"||typeof document>"u")return"ltr";let e=document.documentElement.getAttribute("dir");return e==="auto"||!e?window.getComputedStyle(document.documentElement).direction:e}function Zx(e,t){let n={};return[e,t].forEach((r,i)=>{let o=i===1,s=o?"--mobile-offset":"--offset",a=o?Vx:Hx;function l(u){["top","right","bottom","left"].forEach(f=>{n[`${s}-${f}`]=typeof u=="number"?`${u}px`:u})}typeof r=="number"||typeof r=="string"?l(r):typeof r=="object"?["top","right","bottom","left"].forEach(u=>{r[u]===void 0?n[`${s}-${u}`]=a:n[`${s}-${u}`]=typeof r[u]=="number"?`${r[u]}px`:r[u]}):l(a)}),n}var Jx=b.forwardRef(function(e,t){let{invert:n,position:r="bottom-right",hotkey:i=["altKey","KeyT"],expand:o,closeButton:s,className:a,offset:l,mobileOffset:u,theme:f="light",richColors:h,duration:d,style:p,visibleToasts:w=Bx,toastOptions:v,dir:x=qd(),gap:g=Qx,loadingIcon:m,icons:y,containerAriaLabel:k="Notifications",pauseWhenPageIsHidden:S}=e,[j,z]=R.useState([]),P=R.useMemo(()=>Array.from(new Set([r].concat(j.filter(F=>F.position).map(F=>F.position)))),[j,r]),[A,O]=R.useState([]),[$,D]=R.useState(!1),[Q,M]=R.useState(!1),[G,W]=R.useState(f!=="system"?f:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),H=R.useRef(null),N=i.join("+").replace(/Key/g,"").replace(/Digit/g,""),C=R.useRef(null),L=R.useRef(!1),V=R.useCallback(F=>{z(K=>{var X;return(X=K.find(me=>me.id===F.id))!=null&&X.delete||Fe.dismiss(F.id),K.filter(({id:me})=>me!==F.id)})},[]);return R.useEffect(()=>Fe.subscribe(F=>{if(F.dismiss){z(K=>K.map(X=>X.id===F.id?{...X,delete:!0}:X));return}setTimeout(()=>{Hh.flushSync(()=>{z(K=>{let X=K.findIndex(me=>me.id===F.id);return X!==-1?[...K.slice(0,X),{...K[X],...F},...K.slice(X+1)]:[F,...K]})})})}),[]),R.useEffect(()=>{if(f!=="system"){W(f);return}if(f==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?W("dark"):W("light")),typeof window>"u")return;let F=window.matchMedia("(prefers-color-scheme: dark)");try{F.addEventListener("change",({matches:K})=>{W(K?"dark":"light")})}catch{F.addListener(({matches:X})=>{try{W(X?"dark":"light")}catch(me){console.error(me)}})}},[f]),R.useEffect(()=>{j.length<=1&&D(!1)},[j]),R.useEffect(()=>{let F=K=>{var X,me;i.every(Ee=>K[Ee]||K.code===Ee)&&(D(!0),(X=H.current)==null||X.focus()),K.code==="Escape"&&(document.activeElement===H.current||(me=H.current)!=null&&me.contains(document.activeElement))&&D(!1)};return document.addEventListener("keydown",F),()=>document.removeEventListener("keydown",F)},[i]),R.useEffect(()=>{if(H.current)return()=>{C.current&&(C.current.focus({preventScroll:!0}),C.current=null,L.current=!1)}},[H.current]),R.createElement("section",{ref:t,"aria-label":`${k} ${N}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},P.map((F,K)=>{var X;let[me,Ee]=F.split("-");return j.length?R.createElement("ol",{key:F,dir:x==="auto"?qd():x,tabIndex:-1,ref:H,className:a,"data-sonner-toaster":!0,"data-theme":G,"data-y-position":me,"data-lifted":$&&j.length>1&&!o,"data-x-position":Ee,style:{"--front-toast-height":`${((X=A[0])==null?void 0:X.height)||0}px`,"--width":`${Yx}px`,"--gap":`${g}px`,...p,...Zx(l,u)},onBlur:ee=>{L.current&&!ee.currentTarget.contains(ee.relatedTarget)&&(L.current=!1,C.current&&(C.current.focus({preventScroll:!0}),C.current=null))},onFocus:ee=>{ee.target instanceof HTMLElement&&ee.target.dataset.dismissible==="false"||L.current||(L.current=!0,C.current=ee.relatedTarget)},onMouseEnter:()=>D(!0),onMouseMove:()=>D(!0),onMouseLeave:()=>{Q||D(!1)},onDragEnd:()=>D(!1),onPointerDown:ee=>{ee.target instanceof HTMLElement&&ee.target.dataset.dismissible==="false"||M(!0)},onPointerUp:()=>M(!1)},j.filter(ee=>!ee.position&&K===0||ee.position===F).map((ee,fr)=>{var en,Wn;return R.createElement(Xx,{key:ee.id,icons:y,index:fr,toast:ee,defaultRichColors:h,duration:(en=v==null?void 0:v.duration)!=null?en:d,className:v==null?void 0:v.className,descriptionClassName:v==null?void 0:v.descriptionClassName,invert:n,visibleToasts:w,closeButton:(Wn=v==null?void 0:v.closeButton)!=null?Wn:s,interacting:Q,position:F,style:v==null?void 0:v.style,unstyled:v==null?void 0:v.unstyled,classNames:v==null?void 0:v.classNames,cancelButtonStyle:v==null?void 0:v.cancelButtonStyle,actionButtonStyle:v==null?void 0:v.actionButtonStyle,removeToast:V,toasts:j.filter(tn=>tn.position==ee.position),heights:A.filter(tn=>tn.position==ee.position),setHeights:O,expandByDefault:o,gap:g,loadingIcon:m,expanded:$,pauseWhenPageIsHidden:S,swipeDirections:e.swipeDirections})})):null}))});const ew=({...e})=>{const{theme:t="system"}=Ex();return c.jsx(Jx,{theme:t,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...e})},tw=1,nw=1e6;let Wa=0;function rw(){return Wa=(Wa+1)%Number.MAX_SAFE_INTEGER,Wa.toString()}const Ua=new Map,Gd=e=>{if(Ua.has(e))return;const t=setTimeout(()=>{Ua.delete(e),Li({type:"REMOVE_TOAST",toastId:e})},nw);Ua.set(e,t)},iw=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,tw)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(n=>n.id===t.toast.id?{...n,...t.toast}:n)};case"DISMISS_TOAST":{const{toastId:n}=t;return n?Gd(n):e.toasts.forEach(r=>{Gd(r.id)}),{...e,toasts:e.toasts.map(r=>r.id===n||n===void 0?{...r,open:!1}:r)}}case"REMOVE_TOAST":return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(n=>n.id!==t.toastId)}}},Jo=[];let es={toasts:[]};function Li(e){es=iw(es,e),Jo.forEach(t=>{t(es)})}function ow({...e}){const t=rw(),n=i=>Li({type:"UPDATE_TOAST",toast:{...i,id:t}}),r=()=>Li({type:"DISMISS_TOAST",toastId:t});return Li({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:i=>{i||r()}}}),{id:t,dismiss:r,update:n}}function sw(){const[e,t]=b.useState(es);return b.useEffect(()=>(Jo.push(t),()=>{const n=Jo.indexOf(t);n>-1&&Jo.splice(n,1)}),[e]),{...e,toast:ow,dismiss:n=>Li({type:"DISMISS_TOAST",toastId:n})}}function ye(e,t,{checkForDefaultPrevented:n=!0}={}){return function(i){if(e==null||e(i),n===!1||!i.defaultPrevented)return t==null?void 0:t(i)}}function Xd(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function am(...e){return t=>{let n=!1;const r=e.map(i=>{const o=Xd(i,t);return!n&&typeof o=="function"&&(n=!0),o});if(n)return()=>{for(let i=0;i<r.length;i++){const o=r[i];typeof o=="function"?o():Xd(e[i],null)}}}}function jt(...e){return b.useCallback(am(...e),e)}function ea(e,t=[]){let n=[];function r(o,s){const a=b.createContext(s),l=n.length;n=[...n,s];const u=h=>{var g;const{scope:d,children:p,...w}=h,v=((g=d==null?void 0:d[e])==null?void 0:g[l])||a,x=b.useMemo(()=>w,Object.values(w));return c.jsx(v.Provider,{value:x,children:p})};u.displayName=o+"Provider";function f(h,d){var v;const p=((v=d==null?void 0:d[e])==null?void 0:v[l])||a,w=b.useContext(p);if(w)return w;if(s!==void 0)return s;throw new Error(`\`${h}\` must be used within \`${o}\``)}return[u,f]}const i=()=>{const o=n.map(s=>b.createContext(s));return function(a){const l=(a==null?void 0:a[e])||o;return b.useMemo(()=>({[`__scope${e}`]:{...a,[e]:l}}),[a,l])}};return i.scopeName=e,[r,aw(i,...t)]}function aw(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(i=>({useScope:i(),scopeName:i.scopeName}));return function(o){const s=r.reduce((a,{useScope:l,scopeName:u})=>{const h=l(o)[`__scope${u}`];return{...a,...h}},{});return b.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])}};return n.scopeName=t.scopeName,n}function Ql(e){const t=lw(e),n=b.forwardRef((r,i)=>{const{children:o,...s}=r,a=b.Children.toArray(o),l=a.find(uw);if(l){const u=l.props.children,f=a.map(h=>h===l?b.Children.count(u)>1?b.Children.only(null):b.isValidElement(u)?u.props.children:null:h);return c.jsx(t,{...s,ref:i,children:b.isValidElement(u)?b.cloneElement(u,void 0,f):null})}return c.jsx(t,{...s,ref:i,children:o})});return n.displayName=`${e}.Slot`,n}function lw(e){const t=b.forwardRef((n,r)=>{const{children:i,...o}=n;if(b.isValidElement(i)){const s=fw(i),a=dw(o,i.props);return i.type!==b.Fragment&&(a.ref=r?am(r,s):s),b.cloneElement(i,a)}return b.Children.count(i)>1?b.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var lm=Symbol("radix.slottable");function cw(e){const t=({children:n})=>c.jsx(c.Fragment,{children:n});return t.displayName=`${e}.Slottable`,t.__radixId=lm,t}function uw(e){return b.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===lm}function dw(e,t){const n={...t};for(const r in t){const i=e[r],o=t[r];/^on[A-Z]/.test(r)?i&&o?n[r]=(...a)=>{const l=o(...a);return i(...a),l}:i&&(n[r]=i):r==="style"?n[r]={...i,...o}:r==="className"&&(n[r]=[i,o].filter(Boolean).join(" "))}return{...e,...n}}function fw(e){var r,i;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function pw(e){const t=e+"CollectionProvider",[n,r]=ea(t),[i,o]=n(t,{collectionRef:{current:null},itemMap:new Map}),s=v=>{const{scope:x,children:g}=v,m=R.useRef(null),y=R.useRef(new Map).current;return c.jsx(i,{scope:x,itemMap:y,collectionRef:m,children:g})};s.displayName=t;const a=e+"CollectionSlot",l=Ql(a),u=R.forwardRef((v,x)=>{const{scope:g,children:m}=v,y=o(a,g),k=jt(x,y.collectionRef);return c.jsx(l,{ref:k,children:m})});u.displayName=a;const f=e+"CollectionItemSlot",h="data-radix-collection-item",d=Ql(f),p=R.forwardRef((v,x)=>{const{scope:g,children:m,...y}=v,k=R.useRef(null),S=jt(x,k),j=o(f,g);return R.useEffect(()=>(j.itemMap.set(k,{ref:k,...y}),()=>void j.itemMap.delete(k))),c.jsx(d,{[h]:"",ref:S,children:m})});p.displayName=f;function w(v){const x=o(e+"CollectionConsumer",v);return R.useCallback(()=>{const m=x.collectionRef.current;if(!m)return[];const y=Array.from(m.querySelectorAll(`[${h}]`));return Array.from(x.itemMap.values()).sort((j,z)=>y.indexOf(j.ref.current)-y.indexOf(z.ref.current))},[x.collectionRef,x.itemMap])}return[{Provider:s,Slot:u,ItemSlot:p},w,r]}var hw=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Ye=hw.reduce((e,t)=>{const n=Ql(`Primitive.${t}`),r=b.forwardRef((i,o)=>{const{asChild:s,...a}=i,l=s?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),c.jsx(l,{...a,ref:o})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function cm(e,t){e&&uo.flushSync(()=>e.dispatchEvent(t))}function Mn(e){const t=b.useRef(e);return b.useEffect(()=>{t.current=e}),b.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function mw(e,t=globalThis==null?void 0:globalThis.document){const n=Mn(e);b.useEffect(()=>{const r=i=>{i.key==="Escape"&&n(i)};return t.addEventListener("keydown",r,{capture:!0}),()=>t.removeEventListener("keydown",r,{capture:!0})},[n,t])}var gw="DismissableLayer",Kl="dismissableLayer.update",vw="dismissableLayer.pointerDownOutside",yw="dismissableLayer.focusOutside",Zd,um=b.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),eu=b.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:i,onFocusOutside:o,onInteractOutside:s,onDismiss:a,...l}=e,u=b.useContext(um),[f,h]=b.useState(null),d=(f==null?void 0:f.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,p]=b.useState({}),w=jt(t,z=>h(z)),v=Array.from(u.layers),[x]=[...u.layersWithOutsidePointerEventsDisabled].slice(-1),g=v.indexOf(x),m=f?v.indexOf(f):-1,y=u.layersWithOutsidePointerEventsDisabled.size>0,k=m>=g,S=ww(z=>{const P=z.target,A=[...u.branches].some(O=>O.contains(P));!k||A||(i==null||i(z),s==null||s(z),z.defaultPrevented||a==null||a())},d),j=bw(z=>{const P=z.target;[...u.branches].some(O=>O.contains(P))||(o==null||o(z),s==null||s(z),z.defaultPrevented||a==null||a())},d);return mw(z=>{m===u.layers.size-1&&(r==null||r(z),!z.defaultPrevented&&a&&(z.preventDefault(),a()))},d),b.useEffect(()=>{if(f)return n&&(u.layersWithOutsidePointerEventsDisabled.size===0&&(Zd=d.body.style.pointerEvents,d.body.style.pointerEvents="none"),u.layersWithOutsidePointerEventsDisabled.add(f)),u.layers.add(f),Jd(),()=>{n&&u.layersWithOutsidePointerEventsDisabled.size===1&&(d.body.style.pointerEvents=Zd)}},[f,d,n,u]),b.useEffect(()=>()=>{f&&(u.layers.delete(f),u.layersWithOutsidePointerEventsDisabled.delete(f),Jd())},[f,u]),b.useEffect(()=>{const z=()=>p({});return document.addEventListener(Kl,z),()=>document.removeEventListener(Kl,z)},[]),c.jsx(Ye.div,{...l,ref:w,style:{pointerEvents:y?k?"auto":"none":void 0,...e.style},onFocusCapture:ye(e.onFocusCapture,j.onFocusCapture),onBlurCapture:ye(e.onBlurCapture,j.onBlurCapture),onPointerDownCapture:ye(e.onPointerDownCapture,S.onPointerDownCapture)})});eu.displayName=gw;var xw="DismissableLayerBranch",dm=b.forwardRef((e,t)=>{const n=b.useContext(um),r=b.useRef(null),i=jt(t,r);return b.useEffect(()=>{const o=r.current;if(o)return n.branches.add(o),()=>{n.branches.delete(o)}},[n.branches]),c.jsx(Ye.div,{...e,ref:i})});dm.displayName=xw;function ww(e,t=globalThis==null?void 0:globalThis.document){const n=Mn(e),r=b.useRef(!1),i=b.useRef(()=>{});return b.useEffect(()=>{const o=a=>{if(a.target&&!r.current){let l=function(){fm(vw,n,u,{discrete:!0})};const u={originalEvent:a};a.pointerType==="touch"?(t.removeEventListener("click",i.current),i.current=l,t.addEventListener("click",i.current,{once:!0})):l()}else t.removeEventListener("click",i.current);r.current=!1},s=window.setTimeout(()=>{t.addEventListener("pointerdown",o)},0);return()=>{window.clearTimeout(s),t.removeEventListener("pointerdown",o),t.removeEventListener("click",i.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function bw(e,t=globalThis==null?void 0:globalThis.document){const n=Mn(e),r=b.useRef(!1);return b.useEffect(()=>{const i=o=>{o.target&&!r.current&&fm(yw,n,{originalEvent:o},{discrete:!1})};return t.addEventListener("focusin",i),()=>t.removeEventListener("focusin",i)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function Jd(){const e=new CustomEvent(Kl);document.dispatchEvent(e)}function fm(e,t,n,{discrete:r}){const i=n.originalEvent.target,o=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),r?cm(i,o):i.dispatchEvent(o)}var kw=eu,Sw=dm,Ln=globalThis!=null&&globalThis.document?b.useLayoutEffect:()=>{},jw="Portal",pm=b.forwardRef((e,t)=>{var a;const{container:n,...r}=e,[i,o]=b.useState(!1);Ln(()=>o(!0),[]);const s=n||i&&((a=globalThis==null?void 0:globalThis.document)==null?void 0:a.body);return s?Hh.createPortal(c.jsx(Ye.div,{...r,ref:t}),s):null});pm.displayName=jw;function zw(e,t){return b.useReducer((n,r)=>t[n][r]??n,e)}var tu=e=>{const{present:t,children:n}=e,r=Ew(t),i=typeof n=="function"?n({present:r.isPresent}):b.Children.only(n),o=jt(r.ref,Nw(i));return typeof n=="function"||r.isPresent?b.cloneElement(i,{ref:o}):null};tu.displayName="Presence";function Ew(e){const[t,n]=b.useState(),r=b.useRef(null),i=b.useRef(e),o=b.useRef("none"),s=e?"mounted":"unmounted",[a,l]=zw(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return b.useEffect(()=>{const u=Do(r.current);o.current=a==="mounted"?u:"none"},[a]),Ln(()=>{const u=r.current,f=i.current;if(f!==e){const d=o.current,p=Do(u);e?l("MOUNT"):p==="none"||(u==null?void 0:u.display)==="none"?l("UNMOUNT"):l(f&&d!==p?"ANIMATION_OUT":"UNMOUNT"),i.current=e}},[e,l]),Ln(()=>{if(t){let u;const f=t.ownerDocument.defaultView??window,h=p=>{const v=Do(r.current).includes(p.animationName);if(p.target===t&&v&&(l("ANIMATION_END"),!i.current)){const x=t.style.animationFillMode;t.style.animationFillMode="forwards",u=f.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=x)})}},d=p=>{p.target===t&&(o.current=Do(r.current))};return t.addEventListener("animationstart",d),t.addEventListener("animationcancel",h),t.addEventListener("animationend",h),()=>{f.clearTimeout(u),t.removeEventListener("animationstart",d),t.removeEventListener("animationcancel",h),t.removeEventListener("animationend",h)}}else l("ANIMATION_END")},[t,l]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:b.useCallback(u=>{r.current=u?getComputedStyle(u):null,n(u)},[])}}function Do(e){return(e==null?void 0:e.animationName)||"none"}function Nw(e){var r,i;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var Cw=Wf[" useInsertionEffect ".trim().toString()]||Ln;function Pw({prop:e,defaultProp:t,onChange:n=()=>{},caller:r}){const[i,o,s]=Tw({defaultProp:t,onChange:n}),a=e!==void 0,l=a?e:i;{const f=b.useRef(e!==void 0);b.useEffect(()=>{const h=f.current;h!==a&&console.warn(`${r} is changing from ${h?"controlled":"uncontrolled"} to ${a?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),f.current=a},[a,r])}const u=b.useCallback(f=>{var h;if(a){const d=Rw(f)?f(e):f;d!==e&&((h=s.current)==null||h.call(s,d))}else o(f)},[a,e,o,s]);return[l,u]}function Tw({defaultProp:e,onChange:t}){const[n,r]=b.useState(e),i=b.useRef(n),o=b.useRef(t);return Cw(()=>{o.current=t},[t]),b.useEffect(()=>{var s;i.current!==n&&((s=o.current)==null||s.call(o,n),i.current=n)},[n,i]),[n,r,o]}function Rw(e){return typeof e=="function"}var Ow=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),Aw="VisuallyHidden",ta=b.forwardRef((e,t)=>c.jsx(Ye.span,{...e,ref:t,style:{...Ow,...e.style}}));ta.displayName=Aw;var Mw=ta,nu="ToastProvider",[ru,Lw,_w]=pw("Toast"),[hm,S5]=ea("Toast",[_w]),[Dw,na]=hm(nu),mm=e=>{const{__scopeToast:t,label:n="Notification",duration:r=5e3,swipeDirection:i="right",swipeThreshold:o=50,children:s}=e,[a,l]=b.useState(null),[u,f]=b.useState(0),h=b.useRef(!1),d=b.useRef(!1);return n.trim()||console.error(`Invalid prop \`label\` supplied to \`${nu}\`. Expected non-empty \`string\`.`),c.jsx(ru.Provider,{scope:t,children:c.jsx(Dw,{scope:t,label:n,duration:r,swipeDirection:i,swipeThreshold:o,toastCount:u,viewport:a,onViewportChange:l,onToastAdd:b.useCallback(()=>f(p=>p+1),[]),onToastRemove:b.useCallback(()=>f(p=>p-1),[]),isFocusedToastEscapeKeyDownRef:h,isClosePausedRef:d,children:s})})};mm.displayName=nu;var gm="ToastViewport",Iw=["F8"],ql="toast.viewportPause",Gl="toast.viewportResume",vm=b.forwardRef((e,t)=>{const{__scopeToast:n,hotkey:r=Iw,label:i="Notifications ({hotkey})",...o}=e,s=na(gm,n),a=Lw(n),l=b.useRef(null),u=b.useRef(null),f=b.useRef(null),h=b.useRef(null),d=jt(t,h,s.onViewportChange),p=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),w=s.toastCount>0;b.useEffect(()=>{const x=g=>{var y;r.length!==0&&r.every(k=>g[k]||g.code===k)&&((y=h.current)==null||y.focus())};return document.addEventListener("keydown",x),()=>document.removeEventListener("keydown",x)},[r]),b.useEffect(()=>{const x=l.current,g=h.current;if(w&&x&&g){const m=()=>{if(!s.isClosePausedRef.current){const j=new CustomEvent(ql);g.dispatchEvent(j),s.isClosePausedRef.current=!0}},y=()=>{if(s.isClosePausedRef.current){const j=new CustomEvent(Gl);g.dispatchEvent(j),s.isClosePausedRef.current=!1}},k=j=>{!x.contains(j.relatedTarget)&&y()},S=()=>{x.contains(document.activeElement)||y()};return x.addEventListener("focusin",m),x.addEventListener("focusout",k),x.addEventListener("pointermove",m),x.addEventListener("pointerleave",S),window.addEventListener("blur",m),window.addEventListener("focus",y),()=>{x.removeEventListener("focusin",m),x.removeEventListener("focusout",k),x.removeEventListener("pointermove",m),x.removeEventListener("pointerleave",S),window.removeEventListener("blur",m),window.removeEventListener("focus",y)}}},[w,s.isClosePausedRef]);const v=b.useCallback(({tabbingDirection:x})=>{const m=a().map(y=>{const k=y.ref.current,S=[k,...Xw(k)];return x==="forwards"?S:S.reverse()});return(x==="forwards"?m.reverse():m).flat()},[a]);return b.useEffect(()=>{const x=h.current;if(x){const g=m=>{var S,j,z;const y=m.altKey||m.ctrlKey||m.metaKey;if(m.key==="Tab"&&!y){const P=document.activeElement,A=m.shiftKey;if(m.target===x&&A){(S=u.current)==null||S.focus();return}const D=v({tabbingDirection:A?"backwards":"forwards"}),Q=D.findIndex(M=>M===P);Ba(D.slice(Q+1))?m.preventDefault():A?(j=u.current)==null||j.focus():(z=f.current)==null||z.focus()}};return x.addEventListener("keydown",g),()=>x.removeEventListener("keydown",g)}},[a,v]),c.jsxs(Sw,{ref:l,role:"region","aria-label":i.replace("{hotkey}",p),tabIndex:-1,style:{pointerEvents:w?void 0:"none"},children:[w&&c.jsx(Xl,{ref:u,onFocusFromOutsideViewport:()=>{const x=v({tabbingDirection:"forwards"});Ba(x)}}),c.jsx(ru.Slot,{scope:n,children:c.jsx(Ye.ol,{tabIndex:-1,...o,ref:d})}),w&&c.jsx(Xl,{ref:f,onFocusFromOutsideViewport:()=>{const x=v({tabbingDirection:"backwards"});Ba(x)}})]})});vm.displayName=gm;var ym="ToastFocusProxy",Xl=b.forwardRef((e,t)=>{const{__scopeToast:n,onFocusFromOutsideViewport:r,...i}=e,o=na(ym,n);return c.jsx(ta,{"aria-hidden":!0,tabIndex:0,...i,ref:t,style:{position:"fixed"},onFocus:s=>{var u;const a=s.relatedTarget;!((u=o.viewport)!=null&&u.contains(a))&&r()}})});Xl.displayName=ym;var fo="Toast",Fw="toast.swipeStart",$w="toast.swipeMove",Ww="toast.swipeCancel",Uw="toast.swipeEnd",xm=b.forwardRef((e,t)=>{const{forceMount:n,open:r,defaultOpen:i,onOpenChange:o,...s}=e,[a,l]=Pw({prop:r,defaultProp:i??!0,onChange:o,caller:fo});return c.jsx(tu,{present:n||a,children:c.jsx(Vw,{open:a,...s,ref:t,onClose:()=>l(!1),onPause:Mn(e.onPause),onResume:Mn(e.onResume),onSwipeStart:ye(e.onSwipeStart,u=>{u.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:ye(e.onSwipeMove,u=>{const{x:f,y:h}=u.detail.delta;u.currentTarget.setAttribute("data-swipe","move"),u.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${f}px`),u.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${h}px`)}),onSwipeCancel:ye(e.onSwipeCancel,u=>{u.currentTarget.setAttribute("data-swipe","cancel"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:ye(e.onSwipeEnd,u=>{const{x:f,y:h}=u.detail.delta;u.currentTarget.setAttribute("data-swipe","end"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),u.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${f}px`),u.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${h}px`),l(!1)})})})});xm.displayName=fo;var[Bw,Hw]=hm(fo,{onClose(){}}),Vw=b.forwardRef((e,t)=>{const{__scopeToast:n,type:r="foreground",duration:i,open:o,onClose:s,onEscapeKeyDown:a,onPause:l,onResume:u,onSwipeStart:f,onSwipeMove:h,onSwipeCancel:d,onSwipeEnd:p,...w}=e,v=na(fo,n),[x,g]=b.useState(null),m=jt(t,M=>g(M)),y=b.useRef(null),k=b.useRef(null),S=i||v.duration,j=b.useRef(0),z=b.useRef(S),P=b.useRef(0),{onToastAdd:A,onToastRemove:O}=v,$=Mn(()=>{var G;(x==null?void 0:x.contains(document.activeElement))&&((G=v.viewport)==null||G.focus()),s()}),D=b.useCallback(M=>{!M||M===1/0||(window.clearTimeout(P.current),j.current=new Date().getTime(),P.current=window.setTimeout($,M))},[$]);b.useEffect(()=>{const M=v.viewport;if(M){const G=()=>{D(z.current),u==null||u()},W=()=>{const H=new Date().getTime()-j.current;z.current=z.current-H,window.clearTimeout(P.current),l==null||l()};return M.addEventListener(ql,W),M.addEventListener(Gl,G),()=>{M.removeEventListener(ql,W),M.removeEventListener(Gl,G)}}},[v.viewport,S,l,u,D]),b.useEffect(()=>{o&&!v.isClosePausedRef.current&&D(S)},[o,S,v.isClosePausedRef,D]),b.useEffect(()=>(A(),()=>O()),[A,O]);const Q=b.useMemo(()=>x?Em(x):null,[x]);return v.viewport?c.jsxs(c.Fragment,{children:[Q&&c.jsx(Yw,{__scopeToast:n,role:"status","aria-live":r==="foreground"?"assertive":"polite","aria-atomic":!0,children:Q}),c.jsx(Bw,{scope:n,onClose:$,children:uo.createPortal(c.jsx(ru.ItemSlot,{scope:n,children:c.jsx(kw,{asChild:!0,onEscapeKeyDown:ye(a,()=>{v.isFocusedToastEscapeKeyDownRef.current||$(),v.isFocusedToastEscapeKeyDownRef.current=!1}),children:c.jsx(Ye.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":o?"open":"closed","data-swipe-direction":v.swipeDirection,...w,ref:m,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:ye(e.onKeyDown,M=>{M.key==="Escape"&&(a==null||a(M.nativeEvent),M.nativeEvent.defaultPrevented||(v.isFocusedToastEscapeKeyDownRef.current=!0,$()))}),onPointerDown:ye(e.onPointerDown,M=>{M.button===0&&(y.current={x:M.clientX,y:M.clientY})}),onPointerMove:ye(e.onPointerMove,M=>{if(!y.current)return;const G=M.clientX-y.current.x,W=M.clientY-y.current.y,H=!!k.current,N=["left","right"].includes(v.swipeDirection),C=["left","up"].includes(v.swipeDirection)?Math.min:Math.max,L=N?C(0,G):0,V=N?0:C(0,W),F=M.pointerType==="touch"?10:2,K={x:L,y:V},X={originalEvent:M,delta:K};H?(k.current=K,Io($w,h,X,{discrete:!1})):ef(K,v.swipeDirection,F)?(k.current=K,Io(Fw,f,X,{discrete:!1}),M.target.setPointerCapture(M.pointerId)):(Math.abs(G)>F||Math.abs(W)>F)&&(y.current=null)}),onPointerUp:ye(e.onPointerUp,M=>{const G=k.current,W=M.target;if(W.hasPointerCapture(M.pointerId)&&W.releasePointerCapture(M.pointerId),k.current=null,y.current=null,G){const H=M.currentTarget,N={originalEvent:M,delta:G};ef(G,v.swipeDirection,v.swipeThreshold)?Io(Uw,p,N,{discrete:!0}):Io(Ww,d,N,{discrete:!0}),H.addEventListener("click",C=>C.preventDefault(),{once:!0})}})})})}),v.viewport)})]}):null}),Yw=e=>{const{__scopeToast:t,children:n,...r}=e,i=na(fo,t),[o,s]=b.useState(!1),[a,l]=b.useState(!1);return qw(()=>s(!0)),b.useEffect(()=>{const u=window.setTimeout(()=>l(!0),1e3);return()=>window.clearTimeout(u)},[]),a?null:c.jsx(pm,{asChild:!0,children:c.jsx(ta,{...r,children:o&&c.jsxs(c.Fragment,{children:[i.label," ",n]})})})},Qw="ToastTitle",wm=b.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e;return c.jsx(Ye.div,{...r,ref:t})});wm.displayName=Qw;var Kw="ToastDescription",bm=b.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e;return c.jsx(Ye.div,{...r,ref:t})});bm.displayName=Kw;var km="ToastAction",Sm=b.forwardRef((e,t)=>{const{altText:n,...r}=e;return n.trim()?c.jsx(zm,{altText:n,asChild:!0,children:c.jsx(iu,{...r,ref:t})}):(console.error(`Invalid prop \`altText\` supplied to \`${km}\`. Expected non-empty \`string\`.`),null)});Sm.displayName=km;var jm="ToastClose",iu=b.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e,i=Hw(jm,n);return c.jsx(zm,{asChild:!0,children:c.jsx(Ye.button,{type:"button",...r,ref:t,onClick:ye(e.onClick,i.onClose)})})});iu.displayName=jm;var zm=b.forwardRef((e,t)=>{const{__scopeToast:n,altText:r,...i}=e;return c.jsx(Ye.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":r||void 0,...i,ref:t})});function Em(e){const t=[];return Array.from(e.childNodes).forEach(r=>{if(r.nodeType===r.TEXT_NODE&&r.textContent&&t.push(r.textContent),Gw(r)){const i=r.ariaHidden||r.hidden||r.style.display==="none",o=r.dataset.radixToastAnnounceExclude==="";if(!i)if(o){const s=r.dataset.radixToastAnnounceAlt;s&&t.push(s)}else t.push(...Em(r))}}),t}function Io(e,t,n,{discrete:r}){const i=n.originalEvent.currentTarget,o=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),r?cm(i,o):i.dispatchEvent(o)}var ef=(e,t,n=0)=>{const r=Math.abs(e.x),i=Math.abs(e.y),o=r>i;return t==="left"||t==="right"?o&&r>n:!o&&i>n};function qw(e=()=>{}){const t=Mn(e);Ln(()=>{let n=0,r=0;return n=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(n),window.cancelAnimationFrame(r)}},[t])}function Gw(e){return e.nodeType===e.ELEMENT_NODE}function Xw(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const i=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||i?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function Ba(e){const t=document.activeElement;return e.some(n=>n===t?!0:(n.focus(),document.activeElement!==t))}var Zw=mm,Nm=vm,Cm=xm,Pm=wm,Tm=bm,Rm=Sm,Om=iu;function Am(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=Am(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Mm(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=Am(e))&&(r&&(r+=" "),r+=t);return r}const tf=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,nf=Mm,Jw=(e,t)=>n=>{var r;if((t==null?void 0:t.variants)==null)return nf(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:i,defaultVariants:o}=t,s=Object.keys(i).map(u=>{const f=n==null?void 0:n[u],h=o==null?void 0:o[u];if(f===null)return null;const d=tf(f)||tf(h);return i[u][d]}),a=n&&Object.entries(n).reduce((u,f)=>{let[h,d]=f;return d===void 0||(u[h]=d),u},{}),l=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((u,f)=>{let{class:h,className:d,...p}=f;return Object.entries(p).every(w=>{let[v,x]=w;return Array.isArray(x)?x.includes({...o,...a}[v]):{...o,...a}[v]===x})?[...u,h,d]:u},[]);return nf(e,s,l,n==null?void 0:n.class,n==null?void 0:n.className)};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Lm=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var t1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=b.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:s,...a},l)=>b.createElement("svg",{ref:l,...t1,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:Lm("lucide",i),...a},[...s.map(([u,f])=>b.createElement(u,f)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ke=(e,t)=>{const n=b.forwardRef(({className:r,...i},o)=>b.createElement(n1,{ref:o,iconNode:t,className:Lm(`lucide-${e1(e)}`,r),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m=ke("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=ke("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=ke("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=ke("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=ke("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=ke("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=ke("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=ke("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=ke("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=ke("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=ke("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=ke("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=ke("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=ke("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=ke("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=ke("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=ke("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=ke("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),ou="-",g1=e=>{const t=y1(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:s=>{const a=s.split(ou);return a[0]===""&&a.length!==1&&a.shift(),$m(a,t)||v1(s)},getConflictingClassGroupIds:(s,a)=>{const l=n[s]||[];return a&&r[s]?[...l,...r[s]]:l}}},$m=(e,t)=>{var s;if(e.length===0)return t.classGroupId;const n=e[0],r=t.nextPart.get(n),i=r?$m(e.slice(1),r):void 0;if(i)return i;if(t.validators.length===0)return;const o=e.join(ou);return(s=t.validators.find(({validator:a})=>a(o)))==null?void 0:s.classGroupId},of=/^\[(.+)\]$/,v1=e=>{if(of.test(e)){const t=of.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},y1=e=>{const{theme:t,prefix:n}=e,r={nextPart:new Map,validators:[]};return w1(Object.entries(e.classGroups),n).forEach(([o,s])=>{Zl(s,r,o,t)}),r},Zl=(e,t,n,r)=>{e.forEach(i=>{if(typeof i=="string"){const o=i===""?t:sf(t,i);o.classGroupId=n;return}if(typeof i=="function"){if(x1(i)){Zl(i(r),t,n,r);return}t.validators.push({validator:i,classGroupId:n});return}Object.entries(i).forEach(([o,s])=>{Zl(s,sf(t,o),n,r)})})},sf=(e,t)=>{let n=e;return t.split(ou).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},x1=e=>e.isThemeGetter,w1=(e,t)=>t?e.map(([n,r])=>{const i=r.map(o=>typeof o=="string"?t+o:typeof o=="object"?Object.fromEntries(Object.entries(o).map(([s,a])=>[t+s,a])):o);return[n,i]}):e,b1=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,r=new Map;const i=(o,s)=>{n.set(o,s),t++,t>e&&(t=0,r=n,n=new Map)};return{get(o){let s=n.get(o);if(s!==void 0)return s;if((s=r.get(o))!==void 0)return i(o,s),s},set(o,s){n.has(o)?n.set(o,s):i(o,s)}}},Wm="!",k1=e=>{const{separator:t,experimentalParseClassName:n}=e,r=t.length===1,i=t[0],o=t.length,s=a=>{const l=[];let u=0,f=0,h;for(let x=0;x<a.length;x++){let g=a[x];if(u===0){if(g===i&&(r||a.slice(x,x+o)===t)){l.push(a.slice(f,x)),f=x+o;continue}if(g==="/"){h=x;continue}}g==="["?u++:g==="]"&&u--}const d=l.length===0?a:a.substring(f),p=d.startsWith(Wm),w=p?d.substring(1):d,v=h&&h>f?h-f:void 0;return{modifiers:l,hasImportantModifier:p,baseClassName:w,maybePostfixModifierPosition:v}};return n?a=>n({className:a,parseClassName:s}):s},S1=e=>{if(e.length<=1)return e;const t=[];let n=[];return e.forEach(r=>{r[0]==="["?(t.push(...n.sort(),r),n=[]):n.push(r)}),t.push(...n.sort()),t},j1=e=>({cache:b1(e.cacheSize),parseClassName:k1(e),...g1(e)}),z1=/\s+/,E1=(e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i}=t,o=[],s=e.trim().split(z1);let a="";for(let l=s.length-1;l>=0;l-=1){const u=s[l],{modifiers:f,hasImportantModifier:h,baseClassName:d,maybePostfixModifierPosition:p}=n(u);let w=!!p,v=r(w?d.substring(0,p):d);if(!v){if(!w){a=u+(a.length>0?" "+a:a);continue}if(v=r(d),!v){a=u+(a.length>0?" "+a:a);continue}w=!1}const x=S1(f).join(":"),g=h?x+Wm:x,m=g+v;if(o.includes(m))continue;o.push(m);const y=i(v,w);for(let k=0;k<y.length;++k){const S=y[k];o.push(g+S)}a=u+(a.length>0?" "+a:a)}return a};function N1(){let e=0,t,n,r="";for(;e<arguments.length;)(t=arguments[e++])&&(n=Um(t))&&(r&&(r+=" "),r+=n);return r}const Um=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=Um(e[r]))&&(n&&(n+=" "),n+=t);return n};function C1(e,...t){let n,r,i,o=s;function s(l){const u=t.reduce((f,h)=>h(f),e());return n=j1(u),r=n.cache.get,i=n.cache.set,o=a,a(l)}function a(l){const u=r(l);if(u)return u;const f=E1(l,n);return i(l,f),f}return function(){return o(N1.apply(null,arguments))}}const ie=e=>{const t=n=>n[e]||[];return t.isThemeGetter=!0,t},Bm=/^\[(?:([a-z-]+):)?(.+)\]$/i,P1=/^\d+\/\d+$/,T1=new Set(["px","full","screen"]),R1=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,O1=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,A1=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,M1=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,L1=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ft=e=>Ir(e)||T1.has(e)||P1.test(e),ln=e=>si(e,"length",B1),Ir=e=>!!e&&!Number.isNaN(Number(e)),Ha=e=>si(e,"number",Ir),xi=e=>!!e&&Number.isInteger(Number(e)),_1=e=>e.endsWith("%")&&Ir(e.slice(0,-1)),Y=e=>Bm.test(e),cn=e=>R1.test(e),D1=new Set(["length","size","percentage"]),I1=e=>si(e,D1,Hm),F1=e=>si(e,"position",Hm),$1=new Set(["image","url"]),W1=e=>si(e,$1,V1),U1=e=>si(e,"",H1),wi=()=>!0,si=(e,t,n)=>{const r=Bm.exec(e);return r?r[1]?typeof t=="string"?r[1]===t:t.has(r[1]):n(r[2]):!1},B1=e=>O1.test(e)&&!A1.test(e),Hm=()=>!1,H1=e=>M1.test(e),V1=e=>L1.test(e),Y1=()=>{const e=ie("colors"),t=ie("spacing"),n=ie("blur"),r=ie("brightness"),i=ie("borderColor"),o=ie("borderRadius"),s=ie("borderSpacing"),a=ie("borderWidth"),l=ie("contrast"),u=ie("grayscale"),f=ie("hueRotate"),h=ie("invert"),d=ie("gap"),p=ie("gradientColorStops"),w=ie("gradientColorStopPositions"),v=ie("inset"),x=ie("margin"),g=ie("opacity"),m=ie("padding"),y=ie("saturate"),k=ie("scale"),S=ie("sepia"),j=ie("skew"),z=ie("space"),P=ie("translate"),A=()=>["auto","contain","none"],O=()=>["auto","hidden","clip","visible","scroll"],$=()=>["auto",Y,t],D=()=>[Y,t],Q=()=>["",Ft,ln],M=()=>["auto",Ir,Y],G=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],W=()=>["solid","dashed","dotted","double","none"],H=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],N=()=>["start","end","center","between","around","evenly","stretch"],C=()=>["","0",Y],L=()=>["auto","avoid","all","avoid-page","page","left","right","column"],V=()=>[Ir,Y];return{cacheSize:500,separator:":",theme:{colors:[wi],spacing:[Ft,ln],blur:["none","",cn,Y],brightness:V(),borderColor:[e],borderRadius:["none","","full",cn,Y],borderSpacing:D(),borderWidth:Q(),contrast:V(),grayscale:C(),hueRotate:V(),invert:C(),gap:D(),gradientColorStops:[e],gradientColorStopPositions:[_1,ln],inset:$(),margin:$(),opacity:V(),padding:D(),saturate:V(),scale:V(),sepia:C(),skew:V(),space:D(),translate:D()},classGroups:{aspect:[{aspect:["auto","square","video",Y]}],container:["container"],columns:[{columns:[cn]}],"break-after":[{"break-after":L()}],"break-before":[{"break-before":L()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...G(),Y]}],overflow:[{overflow:O()}],"overflow-x":[{"overflow-x":O()}],"overflow-y":[{"overflow-y":O()}],overscroll:[{overscroll:A()}],"overscroll-x":[{"overscroll-x":A()}],"overscroll-y":[{"overscroll-y":A()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[v]}],"inset-x":[{"inset-x":[v]}],"inset-y":[{"inset-y":[v]}],start:[{start:[v]}],end:[{end:[v]}],top:[{top:[v]}],right:[{right:[v]}],bottom:[{bottom:[v]}],left:[{left:[v]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",xi,Y]}],basis:[{basis:$()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Y]}],grow:[{grow:C()}],shrink:[{shrink:C()}],order:[{order:["first","last","none",xi,Y]}],"grid-cols":[{"grid-cols":[wi]}],"col-start-end":[{col:["auto",{span:["full",xi,Y]},Y]}],"col-start":[{"col-start":M()}],"col-end":[{"col-end":M()}],"grid-rows":[{"grid-rows":[wi]}],"row-start-end":[{row:["auto",{span:[xi,Y]},Y]}],"row-start":[{"row-start":M()}],"row-end":[{"row-end":M()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Y]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Y]}],gap:[{gap:[d]}],"gap-x":[{"gap-x":[d]}],"gap-y":[{"gap-y":[d]}],"justify-content":[{justify:["normal",...N()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...N(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...N(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[m]}],px:[{px:[m]}],py:[{py:[m]}],ps:[{ps:[m]}],pe:[{pe:[m]}],pt:[{pt:[m]}],pr:[{pr:[m]}],pb:[{pb:[m]}],pl:[{pl:[m]}],m:[{m:[x]}],mx:[{mx:[x]}],my:[{my:[x]}],ms:[{ms:[x]}],me:[{me:[x]}],mt:[{mt:[x]}],mr:[{mr:[x]}],mb:[{mb:[x]}],ml:[{ml:[x]}],"space-x":[{"space-x":[z]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[z]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",Y,t]}],"min-w":[{"min-w":[Y,t,"min","max","fit"]}],"max-w":[{"max-w":[Y,t,"none","full","min","max","fit","prose",{screen:[cn]},cn]}],h:[{h:[Y,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[Y,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[Y,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[Y,t,"auto","min","max","fit"]}],"font-size":[{text:["base",cn,ln]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Ha]}],"font-family":[{font:[wi]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Y]}],"line-clamp":[{"line-clamp":["none",Ir,Ha]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Ft,Y]}],"list-image":[{"list-image":["none",Y]}],"list-style-type":[{list:["none","disc","decimal",Y]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[g]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[g]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...W(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Ft,ln]}],"underline-offset":[{"underline-offset":["auto",Ft,Y]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:D()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Y]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Y]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[g]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...G(),F1]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",I1]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},W1]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[w]}],"gradient-via-pos":[{via:[w]}],"gradient-to-pos":[{to:[w]}],"gradient-from":[{from:[p]}],"gradient-via":[{via:[p]}],"gradient-to":[{to:[p]}],rounded:[{rounded:[o]}],"rounded-s":[{"rounded-s":[o]}],"rounded-e":[{"rounded-e":[o]}],"rounded-t":[{"rounded-t":[o]}],"rounded-r":[{"rounded-r":[o]}],"rounded-b":[{"rounded-b":[o]}],"rounded-l":[{"rounded-l":[o]}],"rounded-ss":[{"rounded-ss":[o]}],"rounded-se":[{"rounded-se":[o]}],"rounded-ee":[{"rounded-ee":[o]}],"rounded-es":[{"rounded-es":[o]}],"rounded-tl":[{"rounded-tl":[o]}],"rounded-tr":[{"rounded-tr":[o]}],"rounded-br":[{"rounded-br":[o]}],"rounded-bl":[{"rounded-bl":[o]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[g]}],"border-style":[{border:[...W(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[g]}],"divide-style":[{divide:W()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-s":[{"border-s":[i]}],"border-color-e":[{"border-e":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...W()]}],"outline-offset":[{"outline-offset":[Ft,Y]}],"outline-w":[{outline:[Ft,ln]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:Q()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[g]}],"ring-offset-w":[{"ring-offset":[Ft,ln]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",cn,U1]}],"shadow-color":[{shadow:[wi]}],opacity:[{opacity:[g]}],"mix-blend":[{"mix-blend":[...H(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":H()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",cn,Y]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[f]}],invert:[{invert:[h]}],saturate:[{saturate:[y]}],sepia:[{sepia:[S]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[f]}],"backdrop-invert":[{"backdrop-invert":[h]}],"backdrop-opacity":[{"backdrop-opacity":[g]}],"backdrop-saturate":[{"backdrop-saturate":[y]}],"backdrop-sepia":[{"backdrop-sepia":[S]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Y]}],duration:[{duration:V()}],ease:[{ease:["linear","in","out","in-out",Y]}],delay:[{delay:V()}],animate:[{animate:["none","spin","ping","pulse","bounce",Y]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[k]}],"scale-x":[{"scale-x":[k]}],"scale-y":[{"scale-y":[k]}],rotate:[{rotate:[xi,Y]}],"translate-x":[{"translate-x":[P]}],"translate-y":[{"translate-y":[P]}],"skew-x":[{"skew-x":[j]}],"skew-y":[{"skew-y":[j]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Y]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Y]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":D()}],"scroll-mx":[{"scroll-mx":D()}],"scroll-my":[{"scroll-my":D()}],"scroll-ms":[{"scroll-ms":D()}],"scroll-me":[{"scroll-me":D()}],"scroll-mt":[{"scroll-mt":D()}],"scroll-mr":[{"scroll-mr":D()}],"scroll-mb":[{"scroll-mb":D()}],"scroll-ml":[{"scroll-ml":D()}],"scroll-p":[{"scroll-p":D()}],"scroll-px":[{"scroll-px":D()}],"scroll-py":[{"scroll-py":D()}],"scroll-ps":[{"scroll-ps":D()}],"scroll-pe":[{"scroll-pe":D()}],"scroll-pt":[{"scroll-pt":D()}],"scroll-pr":[{"scroll-pr":D()}],"scroll-pb":[{"scroll-pb":D()}],"scroll-pl":[{"scroll-pl":D()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Y]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[Ft,ln,Ha]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},Q1=C1(Y1);function dr(...e){return Q1(Mm(e))}const K1=Zw,Vm=b.forwardRef(({className:e,...t},n)=>c.jsx(Nm,{ref:n,className:dr("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...t}));Vm.displayName=Nm.displayName;const q1=Jw("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),Ym=b.forwardRef(({className:e,variant:t,...n},r)=>c.jsx(Cm,{ref:r,className:dr(q1({variant:t}),e),...n}));Ym.displayName=Cm.displayName;const G1=b.forwardRef(({className:e,...t},n)=>c.jsx(Rm,{ref:n,className:dr("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",e),...t}));G1.displayName=Rm.displayName;const Qm=b.forwardRef(({className:e,...t},n)=>c.jsx(Om,{ref:n,className:dr("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...t,children:c.jsx(Fm,{className:"h-4 w-4"})}));Qm.displayName=Om.displayName;const Km=b.forwardRef(({className:e,...t},n)=>c.jsx(Pm,{ref:n,className:dr("text-sm font-semibold",e),...t}));Km.displayName=Pm.displayName;const qm=b.forwardRef(({className:e,...t},n)=>c.jsx(Tm,{ref:n,className:dr("text-sm opacity-90",e),...t}));qm.displayName=Tm.displayName;function X1(){const{toasts:e}=sw();return c.jsxs(K1,{children:[e.map(function({id:t,title:n,description:r,action:i,...o}){return c.jsxs(Ym,{...o,children:[c.jsxs("div",{className:"grid gap-1",children:[n&&c.jsx(Km,{children:n}),r&&c.jsx(qm,{children:r})]}),i,c.jsx(Qm,{})]},t)}),c.jsx(Vm,{})]})}const Z1=["top","right","bottom","left"],_n=Math.min,Ke=Math.max,Ps=Math.round,Fo=Math.floor,_t=e=>({x:e,y:e}),J1={left:"right",right:"left",bottom:"top",top:"bottom"},e2={start:"end",end:"start"};function Jl(e,t,n){return Ke(e,_n(t,n))}function Xt(e,t){return typeof e=="function"?e(t):e}function Zt(e){return e.split("-")[0]}function ai(e){return e.split("-")[1]}function su(e){return e==="x"?"y":"x"}function au(e){return e==="y"?"height":"width"}const t2=new Set(["top","bottom"]);function At(e){return t2.has(Zt(e))?"y":"x"}function lu(e){return su(At(e))}function n2(e,t,n){n===void 0&&(n=!1);const r=ai(e),i=lu(e),o=au(i);let s=i==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[o]>t.floating[o]&&(s=Ts(s)),[s,Ts(s)]}function r2(e){const t=Ts(e);return[ec(e),t,ec(t)]}function ec(e){return e.replace(/start|end/g,t=>e2[t])}const af=["left","right"],lf=["right","left"],i2=["top","bottom"],o2=["bottom","top"];function s2(e,t,n){switch(e){case"top":case"bottom":return n?t?lf:af:t?af:lf;case"left":case"right":return t?i2:o2;default:return[]}}function a2(e,t,n,r){const i=ai(e);let o=s2(Zt(e),n==="start",r);return i&&(o=o.map(s=>s+"-"+i),t&&(o=o.concat(o.map(ec)))),o}function Ts(e){return e.replace(/left|right|bottom|top/g,t=>J1[t])}function l2(e){return{top:0,right:0,bottom:0,left:0,...e}}function Gm(e){return typeof e!="number"?l2(e):{top:e,right:e,bottom:e,left:e}}function Rs(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function cf(e,t,n){let{reference:r,floating:i}=e;const o=At(t),s=lu(t),a=au(s),l=Zt(t),u=o==="y",f=r.x+r.width/2-i.width/2,h=r.y+r.height/2-i.height/2,d=r[a]/2-i[a]/2;let p;switch(l){case"top":p={x:f,y:r.y-i.height};break;case"bottom":p={x:f,y:r.y+r.height};break;case"right":p={x:r.x+r.width,y:h};break;case"left":p={x:r.x-i.width,y:h};break;default:p={x:r.x,y:r.y}}switch(ai(t)){case"start":p[s]-=d*(n&&u?-1:1);break;case"end":p[s]+=d*(n&&u?-1:1);break}return p}const c2=async(e,t,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:o=[],platform:s}=n,a=o.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(t));let u=await s.getElementRects({reference:e,floating:t,strategy:i}),{x:f,y:h}=cf(u,r,l),d=r,p={},w=0;for(let v=0;v<a.length;v++){const{name:x,fn:g}=a[v],{x:m,y,data:k,reset:S}=await g({x:f,y:h,initialPlacement:r,placement:d,strategy:i,middlewareData:p,rects:u,platform:s,elements:{reference:e,floating:t}});f=m??f,h=y??h,p={...p,[x]:{...p[x],...k}},S&&w<=50&&(w++,typeof S=="object"&&(S.placement&&(d=S.placement),S.rects&&(u=S.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:i}):S.rects),{x:f,y:h}=cf(u,d,l)),v=-1)}return{x:f,y:h,placement:d,strategy:i,middlewareData:p}};async function to(e,t){var n;t===void 0&&(t={});const{x:r,y:i,platform:o,rects:s,elements:a,strategy:l}=e,{boundary:u="clippingAncestors",rootBoundary:f="viewport",elementContext:h="floating",altBoundary:d=!1,padding:p=0}=Xt(t,e),w=Gm(p),x=a[d?h==="floating"?"reference":"floating":h],g=Rs(await o.getClippingRect({element:(n=await(o.isElement==null?void 0:o.isElement(x)))==null||n?x:x.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(a.floating)),boundary:u,rootBoundary:f,strategy:l})),m=h==="floating"?{x:r,y:i,width:s.floating.width,height:s.floating.height}:s.reference,y=await(o.getOffsetParent==null?void 0:o.getOffsetParent(a.floating)),k=await(o.isElement==null?void 0:o.isElement(y))?await(o.getScale==null?void 0:o.getScale(y))||{x:1,y:1}:{x:1,y:1},S=Rs(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:m,offsetParent:y,strategy:l}):m);return{top:(g.top-S.top+w.top)/k.y,bottom:(S.bottom-g.bottom+w.bottom)/k.y,left:(g.left-S.left+w.left)/k.x,right:(S.right-g.right+w.right)/k.x}}const u2=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:i,rects:o,platform:s,elements:a,middlewareData:l}=t,{element:u,padding:f=0}=Xt(e,t)||{};if(u==null)return{};const h=Gm(f),d={x:n,y:r},p=lu(i),w=au(p),v=await s.getDimensions(u),x=p==="y",g=x?"top":"left",m=x?"bottom":"right",y=x?"clientHeight":"clientWidth",k=o.reference[w]+o.reference[p]-d[p]-o.floating[w],S=d[p]-o.reference[p],j=await(s.getOffsetParent==null?void 0:s.getOffsetParent(u));let z=j?j[y]:0;(!z||!await(s.isElement==null?void 0:s.isElement(j)))&&(z=a.floating[y]||o.floating[w]);const P=k/2-S/2,A=z/2-v[w]/2-1,O=_n(h[g],A),$=_n(h[m],A),D=O,Q=z-v[w]-$,M=z/2-v[w]/2+P,G=Jl(D,M,Q),W=!l.arrow&&ai(i)!=null&&M!==G&&o.reference[w]/2-(M<D?O:$)-v[w]/2<0,H=W?M<D?M-D:M-Q:0;return{[p]:d[p]+H,data:{[p]:G,centerOffset:M-G-H,...W&&{alignmentOffset:H}},reset:W}}}),d2=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:i,middlewareData:o,rects:s,initialPlacement:a,platform:l,elements:u}=t,{mainAxis:f=!0,crossAxis:h=!0,fallbackPlacements:d,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:w="none",flipAlignment:v=!0,...x}=Xt(e,t);if((n=o.arrow)!=null&&n.alignmentOffset)return{};const g=Zt(i),m=At(a),y=Zt(a)===a,k=await(l.isRTL==null?void 0:l.isRTL(u.floating)),S=d||(y||!v?[Ts(a)]:r2(a)),j=w!=="none";!d&&j&&S.push(...a2(a,v,w,k));const z=[a,...S],P=await to(t,x),A=[];let O=((r=o.flip)==null?void 0:r.overflows)||[];if(f&&A.push(P[g]),h){const M=n2(i,s,k);A.push(P[M[0]],P[M[1]])}if(O=[...O,{placement:i,overflows:A}],!A.every(M=>M<=0)){var $,D;const M=((($=o.flip)==null?void 0:$.index)||0)+1,G=z[M];if(G&&(!(h==="alignment"?m!==At(G):!1)||O.every(N=>N.overflows[0]>0&&At(N.placement)===m)))return{data:{index:M,overflows:O},reset:{placement:G}};let W=(D=O.filter(H=>H.overflows[0]<=0).sort((H,N)=>H.overflows[1]-N.overflows[1])[0])==null?void 0:D.placement;if(!W)switch(p){case"bestFit":{var Q;const H=(Q=O.filter(N=>{if(j){const C=At(N.placement);return C===m||C==="y"}return!0}).map(N=>[N.placement,N.overflows.filter(C=>C>0).reduce((C,L)=>C+L,0)]).sort((N,C)=>N[1]-C[1])[0])==null?void 0:Q[0];H&&(W=H);break}case"initialPlacement":W=a;break}if(i!==W)return{reset:{placement:W}}}return{}}}};function uf(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function df(e){return Z1.some(t=>e[t]>=0)}const f2=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:r="referenceHidden",...i}=Xt(e,t);switch(r){case"referenceHidden":{const o=await to(t,{...i,elementContext:"reference"}),s=uf(o,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:df(s)}}}case"escaped":{const o=await to(t,{...i,altBoundary:!0}),s=uf(o,n.floating);return{data:{escapedOffsets:s,escaped:df(s)}}}default:return{}}}}},Xm=new Set(["left","top"]);async function p2(e,t){const{placement:n,platform:r,elements:i}=e,o=await(r.isRTL==null?void 0:r.isRTL(i.floating)),s=Zt(n),a=ai(n),l=At(n)==="y",u=Xm.has(s)?-1:1,f=o&&l?-1:1,h=Xt(t,e);let{mainAxis:d,crossAxis:p,alignmentAxis:w}=typeof h=="number"?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:h.mainAxis||0,crossAxis:h.crossAxis||0,alignmentAxis:h.alignmentAxis};return a&&typeof w=="number"&&(p=a==="end"?w*-1:w),l?{x:p*f,y:d*u}:{x:d*u,y:p*f}}const h2=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:i,y:o,placement:s,middlewareData:a}=t,l=await p2(t,e);return s===((n=a.offset)==null?void 0:n.placement)&&(r=a.arrow)!=null&&r.alignmentOffset?{}:{x:i+l.x,y:o+l.y,data:{...l,placement:s}}}}},m2=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:i}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:a={fn:x=>{let{x:g,y:m}=x;return{x:g,y:m}}},...l}=Xt(e,t),u={x:n,y:r},f=await to(t,l),h=At(Zt(i)),d=su(h);let p=u[d],w=u[h];if(o){const x=d==="y"?"top":"left",g=d==="y"?"bottom":"right",m=p+f[x],y=p-f[g];p=Jl(m,p,y)}if(s){const x=h==="y"?"top":"left",g=h==="y"?"bottom":"right",m=w+f[x],y=w-f[g];w=Jl(m,w,y)}const v=a.fn({...t,[d]:p,[h]:w});return{...v,data:{x:v.x-n,y:v.y-r,enabled:{[d]:o,[h]:s}}}}}},g2=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:i,rects:o,middlewareData:s}=t,{offset:a=0,mainAxis:l=!0,crossAxis:u=!0}=Xt(e,t),f={x:n,y:r},h=At(i),d=su(h);let p=f[d],w=f[h];const v=Xt(a,t),x=typeof v=="number"?{mainAxis:v,crossAxis:0}:{mainAxis:0,crossAxis:0,...v};if(l){const y=d==="y"?"height":"width",k=o.reference[d]-o.floating[y]+x.mainAxis,S=o.reference[d]+o.reference[y]-x.mainAxis;p<k?p=k:p>S&&(p=S)}if(u){var g,m;const y=d==="y"?"width":"height",k=Xm.has(Zt(i)),S=o.reference[h]-o.floating[y]+(k&&((g=s.offset)==null?void 0:g[h])||0)+(k?0:x.crossAxis),j=o.reference[h]+o.reference[y]+(k?0:((m=s.offset)==null?void 0:m[h])||0)-(k?x.crossAxis:0);w<S?w=S:w>j&&(w=j)}return{[d]:p,[h]:w}}}},v2=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var n,r;const{placement:i,rects:o,platform:s,elements:a}=t,{apply:l=()=>{},...u}=Xt(e,t),f=await to(t,u),h=Zt(i),d=ai(i),p=At(i)==="y",{width:w,height:v}=o.floating;let x,g;h==="top"||h==="bottom"?(x=h,g=d===(await(s.isRTL==null?void 0:s.isRTL(a.floating))?"start":"end")?"left":"right"):(g=h,x=d==="end"?"top":"bottom");const m=v-f.top-f.bottom,y=w-f.left-f.right,k=_n(v-f[x],m),S=_n(w-f[g],y),j=!t.middlewareData.shift;let z=k,P=S;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(P=y),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(z=m),j&&!d){const O=Ke(f.left,0),$=Ke(f.right,0),D=Ke(f.top,0),Q=Ke(f.bottom,0);p?P=w-2*(O!==0||$!==0?O+$:Ke(f.left,f.right)):z=v-2*(D!==0||Q!==0?D+Q:Ke(f.top,f.bottom))}await l({...t,availableWidth:P,availableHeight:z});const A=await s.getDimensions(a.floating);return w!==A.width||v!==A.height?{reset:{rects:!0}}:{}}}};function ra(){return typeof window<"u"}function li(e){return Zm(e)?(e.nodeName||"").toLowerCase():"#document"}function Xe(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function It(e){var t;return(t=(Zm(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Zm(e){return ra()?e instanceof Node||e instanceof Xe(e).Node:!1}function zt(e){return ra()?e instanceof Element||e instanceof Xe(e).Element:!1}function Dt(e){return ra()?e instanceof HTMLElement||e instanceof Xe(e).HTMLElement:!1}function ff(e){return!ra()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Xe(e).ShadowRoot}const y2=new Set(["inline","contents"]);function po(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=Et(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!y2.has(i)}const x2=new Set(["table","td","th"]);function w2(e){return x2.has(li(e))}const b2=[":popover-open",":modal"];function ia(e){return b2.some(t=>{try{return e.matches(t)}catch{return!1}})}const k2=["transform","translate","scale","rotate","perspective"],S2=["transform","translate","scale","rotate","perspective","filter"],j2=["paint","layout","strict","content"];function cu(e){const t=uu(),n=zt(e)?Et(e):e;return k2.some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||S2.some(r=>(n.willChange||"").includes(r))||j2.some(r=>(n.contain||"").includes(r))}function z2(e){let t=Dn(e);for(;Dt(t)&&!ti(t);){if(cu(t))return t;if(ia(t))return null;t=Dn(t)}return null}function uu(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const E2=new Set(["html","body","#document"]);function ti(e){return E2.has(li(e))}function Et(e){return Xe(e).getComputedStyle(e)}function oa(e){return zt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Dn(e){if(li(e)==="html")return e;const t=e.assignedSlot||e.parentNode||ff(e)&&e.host||It(e);return ff(t)?t.host:t}function Jm(e){const t=Dn(e);return ti(t)?e.ownerDocument?e.ownerDocument.body:e.body:Dt(t)&&po(t)?t:Jm(t)}function no(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=Jm(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),s=Xe(i);if(o){const a=tc(s);return t.concat(s,s.visualViewport||[],po(i)?i:[],a&&n?no(a):[])}return t.concat(i,no(i,[],n))}function tc(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function eg(e){const t=Et(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=Dt(e),o=i?e.offsetWidth:n,s=i?e.offsetHeight:r,a=Ps(n)!==o||Ps(r)!==s;return a&&(n=o,r=s),{width:n,height:r,$:a}}function du(e){return zt(e)?e:e.contextElement}function Fr(e){const t=du(e);if(!Dt(t))return _t(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:o}=eg(t);let s=(o?Ps(n.width):n.width)/r,a=(o?Ps(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}const N2=_t(0);function tg(e){const t=Xe(e);return!uu()||!t.visualViewport?N2:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function C2(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==Xe(e)?!1:t}function lr(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=du(e);let s=_t(1);t&&(r?zt(r)&&(s=Fr(r)):s=Fr(e));const a=C2(o,n,r)?tg(o):_t(0);let l=(i.left+a.x)/s.x,u=(i.top+a.y)/s.y,f=i.width/s.x,h=i.height/s.y;if(o){const d=Xe(o),p=r&&zt(r)?Xe(r):r;let w=d,v=tc(w);for(;v&&r&&p!==w;){const x=Fr(v),g=v.getBoundingClientRect(),m=Et(v),y=g.left+(v.clientLeft+parseFloat(m.paddingLeft))*x.x,k=g.top+(v.clientTop+parseFloat(m.paddingTop))*x.y;l*=x.x,u*=x.y,f*=x.x,h*=x.y,l+=y,u+=k,w=Xe(v),v=tc(w)}}return Rs({width:f,height:h,x:l,y:u})}function fu(e,t){const n=oa(e).scrollLeft;return t?t.left+n:lr(It(e)).left+n}function ng(e,t,n){n===void 0&&(n=!1);const r=e.getBoundingClientRect(),i=r.left+t.scrollLeft-(n?0:fu(e,r)),o=r.top+t.scrollTop;return{x:i,y:o}}function P2(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e;const o=i==="fixed",s=It(r),a=t?ia(t.floating):!1;if(r===s||a&&o)return n;let l={scrollLeft:0,scrollTop:0},u=_t(1);const f=_t(0),h=Dt(r);if((h||!h&&!o)&&((li(r)!=="body"||po(s))&&(l=oa(r)),Dt(r))){const p=lr(r);u=Fr(r),f.x=p.x+r.clientLeft,f.y=p.y+r.clientTop}const d=s&&!h&&!o?ng(s,l,!0):_t(0);return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-l.scrollLeft*u.x+f.x+d.x,y:n.y*u.y-l.scrollTop*u.y+f.y+d.y}}function T2(e){return Array.from(e.getClientRects())}function R2(e){const t=It(e),n=oa(e),r=e.ownerDocument.body,i=Ke(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),o=Ke(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let s=-n.scrollLeft+fu(e);const a=-n.scrollTop;return Et(r).direction==="rtl"&&(s+=Ke(t.clientWidth,r.clientWidth)-i),{width:i,height:o,x:s,y:a}}function O2(e,t){const n=Xe(e),r=It(e),i=n.visualViewport;let o=r.clientWidth,s=r.clientHeight,a=0,l=0;if(i){o=i.width,s=i.height;const u=uu();(!u||u&&t==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}return{width:o,height:s,x:a,y:l}}const A2=new Set(["absolute","fixed"]);function M2(e,t){const n=lr(e,!0,t==="fixed"),r=n.top+e.clientTop,i=n.left+e.clientLeft,o=Dt(e)?Fr(e):_t(1),s=e.clientWidth*o.x,a=e.clientHeight*o.y,l=i*o.x,u=r*o.y;return{width:s,height:a,x:l,y:u}}function pf(e,t,n){let r;if(t==="viewport")r=O2(e,n);else if(t==="document")r=R2(It(e));else if(zt(t))r=M2(t,n);else{const i=tg(e);r={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return Rs(r)}function rg(e,t){const n=Dn(e);return n===t||!zt(n)||ti(n)?!1:Et(n).position==="fixed"||rg(n,t)}function L2(e,t){const n=t.get(e);if(n)return n;let r=no(e,[],!1).filter(a=>zt(a)&&li(a)!=="body"),i=null;const o=Et(e).position==="fixed";let s=o?Dn(e):e;for(;zt(s)&&!ti(s);){const a=Et(s),l=cu(s);!l&&a.position==="fixed"&&(i=null),(o?!l&&!i:!l&&a.position==="static"&&!!i&&A2.has(i.position)||po(s)&&!l&&rg(e,s))?r=r.filter(f=>f!==s):i=a,s=Dn(s)}return t.set(e,r),r}function _2(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e;const s=[...n==="clippingAncestors"?ia(t)?[]:L2(t,this._c):[].concat(n),r],a=s[0],l=s.reduce((u,f)=>{const h=pf(t,f,i);return u.top=Ke(h.top,u.top),u.right=_n(h.right,u.right),u.bottom=_n(h.bottom,u.bottom),u.left=Ke(h.left,u.left),u},pf(t,a,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function D2(e){const{width:t,height:n}=eg(e);return{width:t,height:n}}function I2(e,t,n){const r=Dt(t),i=It(t),o=n==="fixed",s=lr(e,!0,o,t);let a={scrollLeft:0,scrollTop:0};const l=_t(0);function u(){l.x=fu(i)}if(r||!r&&!o)if((li(t)!=="body"||po(i))&&(a=oa(t)),r){const p=lr(t,!0,o,t);l.x=p.x+t.clientLeft,l.y=p.y+t.clientTop}else i&&u();o&&!r&&i&&u();const f=i&&!r&&!o?ng(i,a):_t(0),h=s.left+a.scrollLeft-l.x-f.x,d=s.top+a.scrollTop-l.y-f.y;return{x:h,y:d,width:s.width,height:s.height}}function Va(e){return Et(e).position==="static"}function hf(e,t){if(!Dt(e)||Et(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return It(e)===n&&(n=n.ownerDocument.body),n}function ig(e,t){const n=Xe(e);if(ia(e))return n;if(!Dt(e)){let i=Dn(e);for(;i&&!ti(i);){if(zt(i)&&!Va(i))return i;i=Dn(i)}return n}let r=hf(e,t);for(;r&&w2(r)&&Va(r);)r=hf(r,t);return r&&ti(r)&&Va(r)&&!cu(r)?n:r||z2(e)||n}const F2=async function(e){const t=this.getOffsetParent||ig,n=this.getDimensions,r=await n(e.floating);return{reference:I2(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function $2(e){return Et(e).direction==="rtl"}const W2={convertOffsetParentRelativeRectToViewportRelativeRect:P2,getDocumentElement:It,getClippingRect:_2,getOffsetParent:ig,getElementRects:F2,getClientRects:T2,getDimensions:D2,getScale:Fr,isElement:zt,isRTL:$2};function og(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function U2(e,t){let n=null,r;const i=It(e);function o(){var a;clearTimeout(r),(a=n)==null||a.disconnect(),n=null}function s(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),o();const u=e.getBoundingClientRect(),{left:f,top:h,width:d,height:p}=u;if(a||t(),!d||!p)return;const w=Fo(h),v=Fo(i.clientWidth-(f+d)),x=Fo(i.clientHeight-(h+p)),g=Fo(f),y={rootMargin:-w+"px "+-v+"px "+-x+"px "+-g+"px",threshold:Ke(0,_n(1,l))||1};let k=!0;function S(j){const z=j[0].intersectionRatio;if(z!==l){if(!k)return s();z?s(!1,z):r=setTimeout(()=>{s(!1,1e-7)},1e3)}z===1&&!og(u,e.getBoundingClientRect())&&s(),k=!1}try{n=new IntersectionObserver(S,{...y,root:i.ownerDocument})}catch{n=new IntersectionObserver(S,y)}n.observe(e)}return s(!0),o}function B2(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=r,u=du(e),f=i||o?[...u?no(u):[],...no(t)]:[];f.forEach(g=>{i&&g.addEventListener("scroll",n,{passive:!0}),o&&g.addEventListener("resize",n)});const h=u&&a?U2(u,n):null;let d=-1,p=null;s&&(p=new ResizeObserver(g=>{let[m]=g;m&&m.target===u&&p&&(p.unobserve(t),cancelAnimationFrame(d),d=requestAnimationFrame(()=>{var y;(y=p)==null||y.observe(t)})),n()}),u&&!l&&p.observe(u),p.observe(t));let w,v=l?lr(e):null;l&&x();function x(){const g=lr(e);v&&!og(v,g)&&n(),v=g,w=requestAnimationFrame(x)}return n(),()=>{var g;f.forEach(m=>{i&&m.removeEventListener("scroll",n),o&&m.removeEventListener("resize",n)}),h==null||h(),(g=p)==null||g.disconnect(),p=null,l&&cancelAnimationFrame(w)}}const H2=h2,V2=m2,Y2=d2,Q2=v2,K2=f2,mf=u2,q2=g2,G2=(e,t,n)=>{const r=new Map,i={platform:W2,...n},o={...i.platform,_c:r};return c2(e,t,{...i,platform:o})};var X2=typeof document<"u",Z2=function(){},ts=X2?b.useLayoutEffect:Z2;function Os(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,i;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(!Os(e[r],t[r]))return!1;return!0}if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,i[r]))return!1;for(r=n;r--!==0;){const o=i[r];if(!(o==="_owner"&&e.$$typeof)&&!Os(e[o],t[o]))return!1}return!0}return e!==e&&t!==t}function sg(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function gf(e,t){const n=sg(e);return Math.round(t*n)/n}function Ya(e){const t=b.useRef(e);return ts(()=>{t.current=e}),t}function J2(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:i,elements:{reference:o,floating:s}={},transform:a=!0,whileElementsMounted:l,open:u}=e,[f,h]=b.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[d,p]=b.useState(r);Os(d,r)||p(r);const[w,v]=b.useState(null),[x,g]=b.useState(null),m=b.useCallback(N=>{N!==j.current&&(j.current=N,v(N))},[]),y=b.useCallback(N=>{N!==z.current&&(z.current=N,g(N))},[]),k=o||w,S=s||x,j=b.useRef(null),z=b.useRef(null),P=b.useRef(f),A=l!=null,O=Ya(l),$=Ya(i),D=Ya(u),Q=b.useCallback(()=>{if(!j.current||!z.current)return;const N={placement:t,strategy:n,middleware:d};$.current&&(N.platform=$.current),G2(j.current,z.current,N).then(C=>{const L={...C,isPositioned:D.current!==!1};M.current&&!Os(P.current,L)&&(P.current=L,uo.flushSync(()=>{h(L)}))})},[d,t,n,$,D]);ts(()=>{u===!1&&P.current.isPositioned&&(P.current.isPositioned=!1,h(N=>({...N,isPositioned:!1})))},[u]);const M=b.useRef(!1);ts(()=>(M.current=!0,()=>{M.current=!1}),[]),ts(()=>{if(k&&(j.current=k),S&&(z.current=S),k&&S){if(O.current)return O.current(k,S,Q);Q()}},[k,S,Q,O,A]);const G=b.useMemo(()=>({reference:j,floating:z,setReference:m,setFloating:y}),[m,y]),W=b.useMemo(()=>({reference:k,floating:S}),[k,S]),H=b.useMemo(()=>{const N={position:n,left:0,top:0};if(!W.floating)return N;const C=gf(W.floating,f.x),L=gf(W.floating,f.y);return a?{...N,transform:"translate("+C+"px, "+L+"px)",...sg(W.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:C,top:L}},[n,a,W.floating,f.x,f.y]);return b.useMemo(()=>({...f,update:Q,refs:G,elements:W,floatingStyles:H}),[f,Q,G,W,H])}const eb=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:r,padding:i}=typeof e=="function"?e(n):e;return r&&t(r)?r.current!=null?mf({element:r.current,padding:i}).fn(n):{}:r?mf({element:r,padding:i}).fn(n):{}}}},tb=(e,t)=>({...H2(e),options:[e,t]}),nb=(e,t)=>({...V2(e),options:[e,t]}),rb=(e,t)=>({...q2(e),options:[e,t]}),ib=(e,t)=>({...Y2(e),options:[e,t]}),ob=(e,t)=>({...Q2(e),options:[e,t]}),sb=(e,t)=>({...K2(e),options:[e,t]}),ab=(e,t)=>({...eb(e),options:[e,t]});var lb="Arrow",ag=b.forwardRef((e,t)=>{const{children:n,width:r=10,height:i=5,...o}=e;return c.jsx(Ye.svg,{...o,ref:t,width:r,height:i,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:c.jsx("polygon",{points:"0,0 30,0 15,10"})})});ag.displayName=lb;var cb=ag;function ub(e){const[t,n]=b.useState(void 0);return Ln(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(i=>{if(!Array.isArray(i)||!i.length)return;const o=i[0];let s,a;if("borderBoxSize"in o){const l=o.borderBoxSize,u=Array.isArray(l)?l[0]:l;s=u.inlineSize,a=u.blockSize}else s=e.offsetWidth,a=e.offsetHeight;n({width:s,height:a})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}var lg="Popper",[cg,ug]=ea(lg),[j5,dg]=cg(lg),fg="PopperAnchor",pg=b.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:r,...i}=e,o=dg(fg,n),s=b.useRef(null),a=jt(t,s);return b.useEffect(()=>{o.onAnchorChange((r==null?void 0:r.current)||s.current)}),r?null:c.jsx(Ye.div,{...i,ref:a})});pg.displayName=fg;var pu="PopperContent",[db,fb]=cg(pu),hg=b.forwardRef((e,t)=>{var ee,fr,en,Wn,tn,pr;const{__scopePopper:n,side:r="bottom",sideOffset:i=0,align:o="center",alignOffset:s=0,arrowPadding:a=0,avoidCollisions:l=!0,collisionBoundary:u=[],collisionPadding:f=0,sticky:h="partial",hideWhenDetached:d=!1,updatePositionStrategy:p="optimized",onPlaced:w,...v}=e,x=dg(pu,n),[g,m]=b.useState(null),y=jt(t,nn=>m(nn)),[k,S]=b.useState(null),j=ub(k),z=(j==null?void 0:j.width)??0,P=(j==null?void 0:j.height)??0,A=r+(o!=="center"?"-"+o:""),O=typeof f=="number"?f:{top:0,right:0,bottom:0,left:0,...f},$=Array.isArray(u)?u:[u],D=$.length>0,Q={padding:O,boundary:$.filter(hb),altBoundary:D},{refs:M,floatingStyles:G,placement:W,isPositioned:H,middlewareData:N}=J2({strategy:"fixed",placement:A,whileElementsMounted:(...nn)=>B2(...nn,{animationFrame:p==="always"}),elements:{reference:x.anchor},middleware:[tb({mainAxis:i+P,alignmentAxis:s}),l&&nb({mainAxis:!0,crossAxis:!1,limiter:h==="partial"?rb():void 0,...Q}),l&&ib({...Q}),ob({...Q,apply:({elements:nn,rects:ho,availableWidth:ca,availableHeight:mo})=>{const{width:ua,height:ci}=ho.reference,hr=nn.floating.style;hr.setProperty("--radix-popper-available-width",`${ca}px`),hr.setProperty("--radix-popper-available-height",`${mo}px`),hr.setProperty("--radix-popper-anchor-width",`${ua}px`),hr.setProperty("--radix-popper-anchor-height",`${ci}px`)}}),k&&ab({element:k,padding:a}),mb({arrowWidth:z,arrowHeight:P}),d&&sb({strategy:"referenceHidden",...Q})]}),[C,L]=vg(W),V=Mn(w);Ln(()=>{H&&(V==null||V())},[H,V]);const F=(ee=N.arrow)==null?void 0:ee.x,K=(fr=N.arrow)==null?void 0:fr.y,X=((en=N.arrow)==null?void 0:en.centerOffset)!==0,[me,Ee]=b.useState();return Ln(()=>{g&&Ee(window.getComputedStyle(g).zIndex)},[g]),c.jsx("div",{ref:M.setFloating,"data-radix-popper-content-wrapper":"",style:{...G,transform:H?G.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:me,"--radix-popper-transform-origin":[(Wn=N.transformOrigin)==null?void 0:Wn.x,(tn=N.transformOrigin)==null?void 0:tn.y].join(" "),...((pr=N.hide)==null?void 0:pr.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:c.jsx(db,{scope:n,placedSide:C,onArrowChange:S,arrowX:F,arrowY:K,shouldHideArrow:X,children:c.jsx(Ye.div,{"data-side":C,"data-align":L,...v,ref:y,style:{...v.style,animation:H?void 0:"none"}})})})});hg.displayName=pu;var mg="PopperArrow",pb={top:"bottom",right:"left",bottom:"top",left:"right"},gg=b.forwardRef(function(t,n){const{__scopePopper:r,...i}=t,o=fb(mg,r),s=pb[o.placedSide];return c.jsx("span",{ref:o.onArrowChange,style:{position:"absolute",left:o.arrowX,top:o.arrowY,[s]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[o.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[o.placedSide],visibility:o.shouldHideArrow?"hidden":void 0},children:c.jsx(cb,{...i,ref:n,style:{...i.style,display:"block"}})})});gg.displayName=mg;function hb(e){return e!==null}var mb=e=>({name:"transformOrigin",options:e,fn(t){var x,g,m;const{placement:n,rects:r,middlewareData:i}=t,s=((x=i.arrow)==null?void 0:x.centerOffset)!==0,a=s?0:e.arrowWidth,l=s?0:e.arrowHeight,[u,f]=vg(n),h={start:"0%",center:"50%",end:"100%"}[f],d=(((g=i.arrow)==null?void 0:g.x)??0)+a/2,p=(((m=i.arrow)==null?void 0:m.y)??0)+l/2;let w="",v="";return u==="bottom"?(w=s?h:`${d}px`,v=`${-l}px`):u==="top"?(w=s?h:`${d}px`,v=`${r.floating.height+l}px`):u==="right"?(w=`${-l}px`,v=s?h:`${p}px`):u==="left"&&(w=`${r.floating.width+l}px`,v=s?h:`${p}px`),{data:{x:w,y:v}}}});function vg(e){const[t,n="center"]=e.split("-");return[t,n]}var gb=pg,vb=hg,yb=gg,[sa,z5]=ea("Tooltip",[ug]),hu=ug(),yg="TooltipProvider",xb=700,vf="tooltip.open",[wb,xg]=sa(yg),wg=e=>{const{__scopeTooltip:t,delayDuration:n=xb,skipDelayDuration:r=300,disableHoverableContent:i=!1,children:o}=e,s=b.useRef(!0),a=b.useRef(!1),l=b.useRef(0);return b.useEffect(()=>{const u=l.current;return()=>window.clearTimeout(u)},[]),c.jsx(wb,{scope:t,isOpenDelayedRef:s,delayDuration:n,onOpen:b.useCallback(()=>{window.clearTimeout(l.current),s.current=!1},[]),onClose:b.useCallback(()=>{window.clearTimeout(l.current),l.current=window.setTimeout(()=>s.current=!0,r)},[r]),isPointerInTransitRef:a,onPointerInTransitChange:b.useCallback(u=>{a.current=u},[]),disableHoverableContent:i,children:o})};wg.displayName=yg;var bg="Tooltip",[E5,aa]=sa(bg),nc="TooltipTrigger",bb=b.forwardRef((e,t)=>{const{__scopeTooltip:n,...r}=e,i=aa(nc,n),o=xg(nc,n),s=hu(n),a=b.useRef(null),l=jt(t,a,i.onTriggerChange),u=b.useRef(!1),f=b.useRef(!1),h=b.useCallback(()=>u.current=!1,[]);return b.useEffect(()=>()=>document.removeEventListener("pointerup",h),[h]),c.jsx(gb,{asChild:!0,...s,children:c.jsx(Ye.button,{"aria-describedby":i.open?i.contentId:void 0,"data-state":i.stateAttribute,...r,ref:l,onPointerMove:ye(e.onPointerMove,d=>{d.pointerType!=="touch"&&!f.current&&!o.isPointerInTransitRef.current&&(i.onTriggerEnter(),f.current=!0)}),onPointerLeave:ye(e.onPointerLeave,()=>{i.onTriggerLeave(),f.current=!1}),onPointerDown:ye(e.onPointerDown,()=>{i.open&&i.onClose(),u.current=!0,document.addEventListener("pointerup",h,{once:!0})}),onFocus:ye(e.onFocus,()=>{u.current||i.onOpen()}),onBlur:ye(e.onBlur,i.onClose),onClick:ye(e.onClick,i.onClose)})})});bb.displayName=nc;var kb="TooltipPortal",[N5,Sb]=sa(kb,{forceMount:void 0}),ni="TooltipContent",kg=b.forwardRef((e,t)=>{const n=Sb(ni,e.__scopeTooltip),{forceMount:r=n.forceMount,side:i="top",...o}=e,s=aa(ni,e.__scopeTooltip);return c.jsx(tu,{present:r||s.open,children:s.disableHoverableContent?c.jsx(Sg,{side:i,...o,ref:t}):c.jsx(jb,{side:i,...o,ref:t})})}),jb=b.forwardRef((e,t)=>{const n=aa(ni,e.__scopeTooltip),r=xg(ni,e.__scopeTooltip),i=b.useRef(null),o=jt(t,i),[s,a]=b.useState(null),{trigger:l,onClose:u}=n,f=i.current,{onPointerInTransitChange:h}=r,d=b.useCallback(()=>{a(null),h(!1)},[h]),p=b.useCallback((w,v)=>{const x=w.currentTarget,g={x:w.clientX,y:w.clientY},m=Pb(g,x.getBoundingClientRect()),y=Tb(g,m),k=Rb(v.getBoundingClientRect()),S=Ab([...y,...k]);a(S),h(!0)},[h]);return b.useEffect(()=>()=>d(),[d]),b.useEffect(()=>{if(l&&f){const w=x=>p(x,f),v=x=>p(x,l);return l.addEventListener("pointerleave",w),f.addEventListener("pointerleave",v),()=>{l.removeEventListener("pointerleave",w),f.removeEventListener("pointerleave",v)}}},[l,f,p,d]),b.useEffect(()=>{if(s){const w=v=>{const x=v.target,g={x:v.clientX,y:v.clientY},m=(l==null?void 0:l.contains(x))||(f==null?void 0:f.contains(x)),y=!Ob(g,s);m?d():y&&(d(),u())};return document.addEventListener("pointermove",w),()=>document.removeEventListener("pointermove",w)}},[l,f,s,u,d]),c.jsx(Sg,{...e,ref:o})}),[zb,Eb]=sa(bg,{isInside:!1}),Nb=cw("TooltipContent"),Sg=b.forwardRef((e,t)=>{const{__scopeTooltip:n,children:r,"aria-label":i,onEscapeKeyDown:o,onPointerDownOutside:s,...a}=e,l=aa(ni,n),u=hu(n),{onClose:f}=l;return b.useEffect(()=>(document.addEventListener(vf,f),()=>document.removeEventListener(vf,f)),[f]),b.useEffect(()=>{if(l.trigger){const h=d=>{const p=d.target;p!=null&&p.contains(l.trigger)&&f()};return window.addEventListener("scroll",h,{capture:!0}),()=>window.removeEventListener("scroll",h,{capture:!0})}},[l.trigger,f]),c.jsx(eu,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:o,onPointerDownOutside:s,onFocusOutside:h=>h.preventDefault(),onDismiss:f,children:c.jsxs(vb,{"data-state":l.stateAttribute,...u,...a,ref:t,style:{...a.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[c.jsx(Nb,{children:r}),c.jsx(zb,{scope:n,isInside:!0,children:c.jsx(Mw,{id:l.contentId,role:"tooltip",children:i||r})})]})})});kg.displayName=ni;var jg="TooltipArrow",Cb=b.forwardRef((e,t)=>{const{__scopeTooltip:n,...r}=e,i=hu(n);return Eb(jg,n).isInside?null:c.jsx(yb,{...i,...r,ref:t})});Cb.displayName=jg;function Pb(e,t){const n=Math.abs(t.top-e.y),r=Math.abs(t.bottom-e.y),i=Math.abs(t.right-e.x),o=Math.abs(t.left-e.x);switch(Math.min(n,r,i,o)){case o:return"left";case i:return"right";case n:return"top";case r:return"bottom";default:throw new Error("unreachable")}}function Tb(e,t,n=5){const r=[];switch(t){case"top":r.push({x:e.x-n,y:e.y+n},{x:e.x+n,y:e.y+n});break;case"bottom":r.push({x:e.x-n,y:e.y-n},{x:e.x+n,y:e.y-n});break;case"left":r.push({x:e.x+n,y:e.y-n},{x:e.x+n,y:e.y+n});break;case"right":r.push({x:e.x-n,y:e.y-n},{x:e.x-n,y:e.y+n});break}return r}function Rb(e){const{top:t,right:n,bottom:r,left:i}=e;return[{x:i,y:t},{x:n,y:t},{x:n,y:r},{x:i,y:r}]}function Ob(e,t){const{x:n,y:r}=e;let i=!1;for(let o=0,s=t.length-1;o<t.length;s=o++){const a=t[o],l=t[s],u=a.x,f=a.y,h=l.x,d=l.y;f>r!=d>r&&n<(h-u)*(r-f)/(d-f)+u&&(i=!i)}return i}function Ab(e){const t=e.slice();return t.sort((n,r)=>n.x<r.x?-1:n.x>r.x?1:n.y<r.y?-1:n.y>r.y?1:0),Mb(t)}function Mb(e){if(e.length<=1)return e.slice();const t=[];for(let r=0;r<e.length;r++){const i=e[r];for(;t.length>=2;){const o=t[t.length-1],s=t[t.length-2];if((o.x-s.x)*(i.y-s.y)>=(o.y-s.y)*(i.x-s.x))t.pop();else break}t.push(i)}t.pop();const n=[];for(let r=e.length-1;r>=0;r--){const i=e[r];for(;n.length>=2;){const o=n[n.length-1],s=n[n.length-2];if((o.x-s.x)*(i.y-s.y)>=(o.y-s.y)*(i.x-s.x))n.pop();else break}n.push(i)}return n.pop(),t.length===1&&n.length===1&&t[0].x===n[0].x&&t[0].y===n[0].y?t:t.concat(n)}var Lb=wg,zg=kg;const _b=Lb,Db=b.forwardRef(({className:e,sideOffset:t=4,...n},r)=>c.jsx(zg,{ref:r,sideOffset:t,className:dr("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...n}));Db.displayName=zg.displayName;const Eg={en:{nav:{about:"About",services:"Services",contact:"Contact",pricing:"Pricing",blog:"Blog"},hero:{title1:"Your Car Deserves",title2:"Expert Care",desc:"From quick washes to full diagnostics, we bring precision, care, and convenience together. Trusted by 4,000+ satisfied customers.",cta1:"Book A Service",cta2:"View Packages"},stats:{s1:{val:"4,000+",label:"Satisfied Customers",desc:"From diagnostics to car electronics, chip tuning and audio installation — we deliver precise and reliable service."},s2:{val:"5+",label:"Years Experience",desc:"Trusted automotive electronics and diagnostics expertise built over years of dedicated work."},s3:{val:"10/5",label:"Support Available",desc:"Clear communication and dedicated support for every service request."}},services:{title:"Our Services",items:[{name:"Chip Tuning",desc:"Engine optimization + solving AdBlue, DPF and EGR issues."},{name:"Computer diagnostics",desc:"Fast detection and removal of car electronics errors."},{name:"Electrical system repair",desc:"Professional repair of wiring, modules and electrical systems."},{name:"Car audio installation",desc:"Installation and tuning of sound systems for better audio quality."},{name:"Coding and programming",desc:"Activation of functions and configuration of electronic modules."},{name:"Accessory installation",desc:"Installation of cameras, parking sensors and additional equipment."},{name:"Air conditioning service",desc:"Refilling, disinfection and repair of the air conditioning system."},{name:"Headlight restoration",desc:"Repair and restoration of headlights for better visibility and appearance."}],whatWeDo:"What We Do",viewDetails:"View Details"},whyUs:{title:"Why Choose Us",items:[{title:"Certified Technicians",desc:"ASE-certified professionals with years of experience."},{title:"Fast Service",desc:"We complete most repairs efficiently and without unnecessary delays."},{title:"Affordable Pricing",desc:"Transparent rates with no hidden fees."},{title:"Trusted by 4,000+",desc:"Join thousands of satisfied customers."}]},pricing:{title:"Transparent Pricing",desc:"Choose from individual services, bundled packages, or membership plans. No hidden fees, just honest pricing.",cta:"See Pricing Details",plans:[{name:"Android Radio Installation",price:"from $100",oldPrice:"from $140",desc:"Installation of an Android radio or CarPlay + Android Auto module",features:["Radio or module installation","CarPlay connection","Android Auto connection","Bluetooth configuration","Full system test"],cta:"Book installation"},{name:"Chip Tuning Stage 1",price:"from $180",oldPrice:"from $230",desc:"Engine map optimization to improve power and torque",popular:!0,features:["Vehicle diagnostics","Engine map reading","Stage 1 optimization","Power increase","Post-tuning test"],cta:"Book tuning"},{name:"Rear View Camera Installation",price:"from $50",oldPrice:"from $75",desc:"Rear view camera installation with connection to the radio or monitor",features:["Camera installation","Video signal connection","Hidden wiring","Viewing angle adjustment","Final system test"],cta:"Book installation"},{name:"Interior Soundproofing",price:"from $250",desc:"Car interior soundproofing for better driving comfort",features:["Removal of selected panels","Soundproofing mat installation","Road noise reduction","Improved acoustic comfort","Precise fitting and finish"],cta:"Book soundproofing"},{name:"Speaker / Subwoofer Installation",price:"from $125",desc:"Installation of speakers, amplifiers and subwoofers for better sound",features:["Speaker or subwoofer installation","Amplifier connection","Hidden and secured wiring","Audio settings configuration","Sound quality test"],cta:"Book audio"}]},testimonials:{title:"Loved by Drivers Across the City",desc:"Don't just take our word for it — hear what our customers have to say.",reviews:[{text:"Several workshops could not find the electrical problem in my car. Here they quickly diagnosed it, found the real cause, and fixed everything without replacing unnecessary parts.",name:"Michael Kowalski",role:"Customer from Wrocław",stars:5},{text:"I had Stage 1 chip tuning done. The car drives much better, the throttle response is quicker, and fuel consumption stayed almost the same during normal driving.",name:"Andrew Novak",role:"BMW Owner",stars:5},{text:"They installed a rear view camera for me. Everything was done neatly, the wires are hidden, and the image is clear. Parking is much easier now.",name:"Oleksandr Melnyk",role:"Customer from Poznań",stars:5},{text:"I brought my car in for interior soundproofing and the difference is really noticeable. It is quieter on the road, there is less tire noise, and the doors close more solidly.",name:"Pavel Zielinski",role:"Audi Driver",stars:5},{text:"They installed speakers and a subwoofer. The sound became much cleaner, the bass is good, and nothing rattles. The guys also helped set everything up properly.",name:"Dmytro Shevchenko",role:"Volkswagen Owner",stars:5},{text:"I had an Android Auto module installed in my car. Everything works smoothly, the phone connects quickly, and the installation looks factory-made.",name:"Thomas Wisniewski",role:"Customer from Opole",stars:5}]},about:{title1:"Passion for Cars.",title2:"Dedication to Service.",desc1:"Founded in 2021, ElectroMagic has been the trusted choice for car owners who demand excellence. What started as a small family workshop has grown into the city's premier automotive care center.",desc2:"Our team of technicians brings decades of experience and a true passion for the automotive industry.",cta:"Learn More About Us"},blog:{title:"Car Care Tips & Insights",desc:"Stay informed with expert advice, maintenance tips, and industry news."},cta:{title:"Ready to Take Care of Your Car?",desc:"Book diagnostics, car electronics repair, chip tuning or audio installation — our specialists are ready to help.",bookNow:"Book Now",phone:"+48 577 472 788"},form:{title:"Quick Booking",name:"Name",phone:"Phone",services:"Select Services",packages:"Prefered Time",message:"Message",namePlaceholder:"Your Name",phonePlaceholder:"+48 777 77 77",messagePlaceholder:"Write your message here...",select:"Select...",submit:"Book Now",successTitle:"Request Sent",successDesc:"Thank you! Your request has been received. We will contact you soon to confirm the details.",successClose:"Close",sending:"Sending...",requiredAlert:"Please fill in all required fields.",errorAlert:"Failed to send the form.",preferredDate:"Preferred Date"},footer:{copy:"Your trusted partner for car electronics, diagnostics, chip tuning and audio installation. Professional service, clean installation and honest support since 2021.",quickLinks:"Quick Links",servicesTitle:"Services",contactInfo:"Contact Info",rights:"All rights reserved.",privacy:"Privacy Policy",terms:"Terms of Service",links:{home:"Home",about:"About Us",services:"Services",pricing:"Pricing",contact:"Contact"}}},pl:{nav:{about:"O nas",services:"Usługi",contact:"Kontakt",pricing:"Cennik",blog:"Blog"},hero:{title1:"Twój Samochód Zasługuje",title2:"Na Profesjonalną Opiekę",desc:"Od szybkiego mycia po pełną diagnostykę — łączymy precyzję, troskę i wygodę. Zaufało nam ponad 4 000 klientów.",cta1:"Umów Wizytę",cta2:"Zobacz Pakiety"},stats:{s1:{val:"4 000+",label:"Zadowolonych Klientów",desc:"Od diagnostyki po elektronikę samochodową, chip tuning i car audio — zapewniamy precyzyjną i solidną obsługę."},s2:{val:"5+",label:"Lat Doświadczenia",desc:"Sprawdzone doświadczenie w elektronice samochodowej i diagnostyce, budowane przez lata pracy."},s3:{val:"10/5",label:"Wsparcie Dostępne",desc:"Jasna komunikacja i indywidualne wsparcie przy każdym zleceniu."}},services:{title:"Nasze Usługi",items:[{name:"Chip Tuning",desc:"Optymalizacja silnika + rozwiązywanie problemów z AdBlue, DPF i EGR."},{name:"Diagnostyka komputerowa",desc:"Szybkie wykrywanie i usuwanie błędów elektroniki samochodu."},{name:"Naprawa instalacji elektrycznej",desc:"Profesjonalna naprawa wiązek, modułów i układów elektrycznych."},{name:"Montaż car audio",desc:"Instalacja i strojenie systemów nagłośnienia dla lepszej jakości dźwięku."},{name:"Kodowanie i programowanie",desc:"Aktywacja funkcji oraz konfiguracja modułów elektronicznych."},{name:"Montaż akcesoriów",desc:"Instalacja kamer, czujników parkowania i dodatkowego wyposażenia."},{name:"Serwis klimatyzacji",desc:"Napełnianie, odgrzybianie i naprawa układu klimatyzacji."},{name:"Regeneracja reflektorów",desc:"Naprawa i odnawianie reflektorów dla lepszej widoczności i wyglądu."}],whatWeDo:"Co Robimy",viewDetails:"Zobacz Szczegóły"},whyUs:{title:"Dlaczego My",items:[{title:"Certyfikowani Technicy",desc:"Profesjonaliści z certyfikatem ASE i wieloletnim doświadczeniem."},{title:"Szybka Obsługa",desc:"Większość napraw realizujemy sprawnie i bez zbędnej zwłoki."},{title:"Przystępne Ceny",desc:"Przejrzyste stawki bez ukrytych opłat."},{title:"Zaufało Nam 4 000+",desc:"Dołącz do tysięcy zadowolonych klientów."}]},pricing:{title:"Przejrzyste Ceny",desc:"Wybierz spośród pojedynczych usług, pakietów lub planów członkowskich. Bez ukrytych opłat.",cta:"Zobacz Szczegóły Cennika",plans:[{name:"Montaż radia Android",price:"od 400 PLN",oldPrice:"od 550 PLN",desc:"Montaż radia Android lub modułu CarPlay + Android Auto",features:["Montaż radia lub modułu","Podłączenie CarPlay","Podłączenie Android Auto","Konfiguracja Bluetooth","Test działania systemu"],cta:"Zamów montaż"},{name:"Chip-Tuning Stage 1",price:"od 700 PLN",oldPrice:"od 900 PLN",desc:"Optymalizacja mapy silnika w celu poprawy mocy i momentu obrotowego",popular:!0,features:["Diagnostyka auta","Odczyt mapy silnika","Optymalizacja Stage 1","Zwiększenie mocy","Test po modyfikacji"],cta:"Zamów tuning"},{name:"Montaż kamerki cofania",price:"od 200 PLN",oldPrice:"od 300 PLN",desc:"Montaż kamerki cofania z podłączeniem do radia lub monitora",features:["Montaż kamerki","Podłączenie obrazu","Ukrycie przewodów","Regulacja kąta widzenia","Test po montażu"],cta:"Zamów montaż"},{name:"Wyciszanie wnętrza",price:"od 1000 PLN",desc:"Wyciszanie wnętrza samochodu dla większego komfortu jazdy",features:["Demontaż wybranych elementów","Montaż mat wygłuszających","Redukcja hałasu drogowego","Poprawa komfortu akustycznego","Dokładny montaż i wykończenie"],cta:"Zamów wyciszanie"},{name:"Montaż głośników / tub basowych",price:"od 500 PLN",desc:"Montaż głośników, wzmacniaczy i tub basowych dla lepszego brzmienia",features:["Montaż głośników lub subwoofera","Podłączenie wzmacniacza","Ukrycie i zabezpieczenie przewodów","Konfiguracja ustawień audio","Test jakości dźwięku"],cta:"Zamów audio"}]},testimonials:{title:"Kochany Przez Kierowców w Całym Mieście",desc:"Nie wierz nam na słowo — posłuchaj, co mówią nasi klienci.",reviews:[{text:"Kilka serwisów nie potrafiło znaleźć problemu z elektryką w moim aucie. Tutaj szybko zrobili diagnostykę, znaleźli przyczynę i naprawili wszystko bez wymiany niepotrzebnych części.",name:"Michał Kowalski",role:"Klient z Wrocławia",stars:5},{text:"Robiłem Chip-Tuning Stage 1. Auto jedzie dużo lepiej, reakcja na gaz jest szybsza, a spalanie przy normalnej jeździe zostało praktycznie bez zmian.",name:"Andrzej Nowak",role:"Właściciel BMW",stars:5},{text:"Montowałem kamerkę cofania. Wszystko zrobione bardzo schludnie, przewodów nie widać, obraz jest wyraźny. Teraz parkowanie jest dużo wygodniejsze.",name:"Olek Melnyk",role:"Klient z Poznania",stars:5},{text:"Oddałem auto na wyciszanie wnętrza i różnica jest naprawdę odczuwalna. Na trasie jest ciszej, mniej słychać opony i drzwi zamykają się solidniej.",name:"Paweł Zieliński",role:"Kierowca Audi",stars:5},{text:"Zakładałem głośniki i tubę basową. Dźwięk jest dużo czystszy, bas jest konkretny i nic nie trzeszczy. Pomogli też dobrze ustawić cały system.",name:"Dmytro Szewczenko",role:"Właściciel Volkswagen",stars:5},{text:"Montowałem moduł Android Auto w swoim aucie. Wszystko działa stabilnie, telefon łączy się szybko, a sama instalacja wygląda jak fabryczna.",name:"Tomasz Wiśniewski",role:"Klient z Opola",stars:5}]},about:{title1:"Pasja do Samochodów.",title2:"Oddanie Usługom.",desc1:"Założona w 2021 roku, ElectroMagic jest zaufanym wyborem właścicieli samochodów, którzy wymagają doskonałości.",desc2:"Nasz zespół techników wnosi dekady doświadczenia i prawdziwą pasję do motoryzacji.",cta:"Dowiedz Się Więcej"},blog:{title:"Porady i Wskazówki",desc:"Bądź na bieżąco z poradami ekspertów i nowinkami z branży."},cta:{title:"Gotowy Zadbać o Swoje Auto?",desc:"Umów diagnostykę, naprawę elektroniki, chip tuning lub montaż car audio — nasi specjaliści są gotowi pomóc.",bookNow:"Umów Teraz",phone:"+48 577 472 788"},form:{title:"Szybka Rezerwacja",name:"Imię",phone:"Telefon",services:"Wybierz Usługi",packages:"Czas",message:"Wiadomość",namePlaceholder:"Twoje Imię",phonePlaceholder:"+48 777 77 77",messagePlaceholder:"Napisz swoją wiadomość...",select:"Wybierz...",submit:"Zarezerwuj",successTitle:"Zgłoszenie wysłane",successDesc:"Dziękujemy! Otrzymaliśmy Twoje zgłoszenie. Skontaktujemy się wkrótce, aby potwierdzić szczegóły.",successClose:"Zamknij",sending:"Wysyłanie...",requiredAlert:"Wypełnij wszystkie wymagane pola.",errorAlert:"Nie udało się wysłać formularza.",preferredDate:"Preferowana data"},footer:{copy:"Twój zaufany partner w zakresie elektroniki samochodowej, diagnostyki, chip tuningu i montażu car audio. Profesjonalna obsługa, czysty montaż i uczciwe wsparcie od 2021 roku.",quickLinks:"Szybkie Linki",servicesTitle:"Usługi",contactInfo:"Dane Kontaktowe",rights:"Wszelkie prawa zastrzeżone.",privacy:"Polityka Prywatności",terms:"Regulamin",links:{home:"Strona Główna",about:"O Nas",services:"Usługi",pricing:"Cennik",contact:"Kontakt"}}},ua:{nav:{about:"Про нас",services:"Послуги",contact:"Контакт",pricing:"Ціни",blog:"Блог"},hero:{title1:"Ваш Автомобіль Заслуговує",title2:"Експертного Догляду",desc:"Від швидкого миття до повної діагностики — ми поєднуємо точність, турботу та зручність. Нам довіряють понад 4 000 клієнтів.",cta1:"Записатися",cta2:"Переглянути Пакети"},stats:{s1:{val:"4 000+",label:"Задоволених Клієнтів",desc:"Від діагностики до автоелектроніки, чип-тюнінгу та car audio — ми забезпечуємо точний і надійний сервіс."},s2:{val:"5+",label:"Років Досвіду",desc:"Перевірений досвід в автоелектроніці та діагностиці, здобутий роками роботи."},s3:{val:"10/5",label:"Підтримка Доступна",desc:"Зрозуміла комунікація та індивідуальна підтримка для кожного замовлення."}},services:{title:"Наші Послуги",items:[{name:"Чип-тюнінг",desc:"Оптимізація двигуна + вирішення проблем з AdBlue, DPF та EGR."},{name:"Компʼютерна діагностика",desc:"Швидке виявлення та усунення помилок електроніки автомобіля."},{name:"Ремонт електропроводки",desc:"Професійний ремонт проводки, модулів та електричних систем."},{name:"Встановлення car audio",desc:"Встановлення та налаштування аудіосистем для кращої якості звуку."},{name:"Кодування та програмування",desc:"Активація функцій і налаштування електронних модулів."},{name:"Встановлення аксесуарів",desc:"Встановлення камер, парктроніків та додаткового обладнання."},{name:"Обслуговування кондиціонера",desc:"Заправка, дезінфекція та ремонт системи кондиціонування."},{name:"Реставрація фар",desc:"Ремонт і відновлення фар для кращої видимості та зовнішнього вигляду."}],whatWeDo:"Що Ми Робимо",viewDetails:"Детальніше"},whyUs:{title:"Чому Обирають Нас",items:[{title:"Сертифіковані Техніки",desc:"Професіонали з сертифікатом ASE та багаторічним досвідом."},{title:"Швидке обслуговування",desc:"Більшість ремонтів ми виконуємо оперативно та без зайвих затримок."},{title:"Доступні Ціни",desc:"Прозорі ціни без прихованих платежів."},{title:"Довіряють 4 000+",desc:"Приєднуйтесь до тисяч задоволених клієнтів."}]},pricing:{title:"Прозорі Ціни",desc:"Оберіть з окремих послуг, пакетів або планів. Без прихованих платежів.",cta:"Деталі Цін",plans:[{name:"Встановлення Android-магнітоли",price:"від 4000 грн",oldPrice:"від 5500 грн",desc:"Встановлення Android-магнітоли або модуля CarPlay + Android Auto",features:["Встановлення магнітоли або модуля","Підключення CarPlay","Підключення Android Auto","Налаштування Bluetooth","Повний тест системи"],cta:"Замовити встановлення"},{name:"Чип-тюнінг Stage 1",price:"від 7000 грн",oldPrice:"від 9000 грн",desc:"Оптимізація карти двигуна для збільшення потужності та крутного моменту",popular:!0,features:["Діагностика автомобіля","Зчитування карти двигуна","Оптимізація Stage 1","Збільшення потужності","Тест після модифікації"],cta:"Замовити тюнінг"},{name:"Встановлення камери заднього виду",price:"від 2000 грн",oldPrice:"від 3000 грн",desc:"Встановлення камери заднього виду з підключенням до магнітоли або монітора",features:["Встановлення камери","Підключення відеосигналу","Приховане прокладання проводів","Регулювання кута огляду","Фінальний тест системи"],cta:"Замовити встановлення"},{name:"Шумоізоляція салону",price:"від 10000 грн",desc:"Шумоізоляція салону автомобіля для більшого комфорту під час їзди",features:["Демонтаж вибраних елементів","Монтаж шумоізоляційних матів","Зменшення дорожнього шуму","Покращення акустичного комфорту","Акуратне встановлення та оздоблення"],cta:"Замовити шумоізоляцію"},{name:"Встановлення динаміків / сабвуферів",price:"від 5000 грн",desc:"Встановлення динаміків, підсилювачів і сабвуферів для кращого звучання",features:["Встановлення динаміків або сабвуфера","Підключення підсилювача","Приховане та безпечне прокладання проводів","Налаштування аудіосистеми","Тест якості звуку"],cta:"Замовити аудіо"}]},testimonials:{title:"Улюблений Водіями по Всьому Місту",desc:"Не вірте нам на слово — послухайте наших клієнтів.",reviews:[{text:"Кілька сервісів не могли знайти проблему з електрикою в моєму авто. Тут швидко зробили діагностику, знайшли причину і все відремонтували без зайвої заміни деталей.",name:"Михайло Ковальський",role:"Клієнт з Вроцлава",stars:5},{text:"Робив Chip-Tuning Stage 1. Авто їде значно краще, реакція на газ стала швидшою, а витрата пального при звичайній їзді майже не змінилася.",name:"Андрій Новак",role:"Власник BMW",stars:5},{text:"Встановлювали камеру заднього виду. Все зробили акуратно, дроти не видно, картинка чітка. Тепер паркуватися набагато зручніше.",name:"Олександр Мельник",role:"Клієнт з Познані",stars:5},{text:"Віддав авто на шумоізоляцію салону, і різниця справді відчутна. На трасі стало тихіше, менше чути шини, а двері закриваються солідніше.",name:"Павло Зеленський",role:"Водій Audi",stars:5},{text:"Ставили динаміки та сабвуфер. Звук став набагато чистіший, бас нормальний, нічого не хрипить. Хлопці ще допомогли все правильно налаштувати.",name:"Дмитро Шевченко",role:"Власник Volkswagen",stars:5},{text:"Встановлював модуль Android Auto у своє авто. Все працює стабільно, телефон швидко підключається, а сама установка виглядає як заводська.",name:"Томаш Вишневський",role:"Клієнт з Ополе",stars:5}]},about:{title1:"Пристрасть до Авто.",title2:"Відданість Сервісу.",desc1:"Заснована у 2021 році, ElectroMagic є надійним вибором для власників авто, які вимагають найкращого.",desc2:"Наша команда техніків має десятиліття досвіду та справжню пристрасть до автомобілів.",cta:"Дізнатися Більше"},blog:{title:"Поради та Інсайти",desc:"Будьте в курсі з порадами експертів та новинами галузі."},cta:{title:"Готові Подбати про Ваш Автомобіль?",desc:"Запишіться на діагностику, ремонт автоелектроніки, чип-тюнінг або встановлення car audio — наші спеціалісти готові допомогти.",bookNow:"Записатися",phone:"+48 577 472 788"},form:{title:"Швидке Бронювання",name:"Ім'я",phone:"Телефон",services:"Оберіть Послуги",packages:"Час",message:"Повідомлення",namePlaceholder:"Ваше ім'я",phonePlaceholder:"+48 777 77 77",messagePlaceholder:"Напишіть ваше повідомлення...",select:"Оберіть...",submit:"Записатися",form:{title:"Швидке Бронювання",name:"Ім'я",phone:"Телефон",services:"Оберіть Послуги",packages:"Час",message:"Повідомлення",namePlaceholder:"Ваше ім'я",phonePlaceholder:"+48 777 77 77",messagePlaceholder:"Напишіть ваше повідомлення...",select:"Оберіть...",submit:"Записатися",successTitle:"Заявку надіслано",successDesc:"Дякуємо! Ми отримали вашу заявку. Незабаром звʼяжемося з вами, щоб підтвердити деталі.",successClose:"Закрити",sending:"Надсилання...",requiredAlert:"Заповніть усі обовʼязкові поля.",errorAlert:"Не вдалося надіслати форму.",preferredDate:"Бажана дата"}},footer:{copy:"Ваш надійний партнер з автоелектроніки, діагностики, чип-тюнінгу та встановлення car audio. Професійний сервіс, акуратний монтаж і чесна підтримка з 2021 року.",quickLinks:"Швидкі Посилання",servicesTitle:"Послуги",contactInfo:"Контактна Інформація",rights:"Усі права захищені.",privacy:"Політика Конфіденційності",terms:"Умови Використання",links:{home:"Головна",about:"Про Нас",services:"Послуги",pricing:"Ціни",contact:"Контакт"}}}},Ng=b.createContext({lang:"pl",setLang:()=>{},t:Eg.pl}),Ib=({children:e})=>{const[t,n]=b.useState("pl");return c.jsx(Ng.Provider,{value:{lang:t,setLang:n,t:Eg[t]},children:e})},ct=()=>b.useContext(Ng),la="/assets/logo-8C9MqT8B.png",Qa={en:"EN",pl:"PL",ua:"UA"},mu=()=>{const{t:e,lang:t,setLang:n}=ct(),[r,i]=b.useState(!1),[o,s]=b.useState(!1),a=[{label:e.nav.about,href:"#about"},{label:e.nav.services,href:"#services"},{label:e.nav.contact,href:"#contact"},{label:e.nav.pricing,href:"#pricing"}];return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        .menu-overlay {
          background: rgba(0, 0, 0, 0.58);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }

        .menu-drawer {
          position: fixed;
          top: 0;
          right: 0;
          height: 100vh;
          height: 100dvh;
          width: 18rem;
          background:
            linear-gradient(180deg, rgba(10,10,10,0.98) 0%, rgba(4,4,4,0.98) 100%);
          border-left: 1px solid rgba(255,255,255,0.08);
          box-shadow: -20px 0 60px rgba(0,0,0,0.34);
          overflow: hidden;
          transform: translateX(100%);
          transition: transform 0.3s ease-out;
        }

        .menu-drawer-open {
          transform: translateX(0);
        }

        .menu-drawer::before {
          content: '';
          position: absolute;
          right: -80px;
          bottom: -60px;
          width: 260px;
          height: 260px;
          background: radial-gradient(circle, rgba(255,90,31,0.16) 0%, transparent 70%);
          pointer-events: none;
        }

        .menu-drawer::after {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(255,255,255,0.02) 0%, transparent 18%);
          pointer-events: none;
        }

        .menu-grid-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 1px;
          background: rgba(255,255,255,0.06);
          pointer-events: none;
        }

        .menu-link {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          padding: 20px 0;
          border-top: 1px solid rgba(255,255,255,0.08);
          color: #f4f4f4;
          text-decoration: none;
          transition: color 0.18s ease, transform 0.18s ease;
        }

        .menu-link:last-child {
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .menu-link:hover {
          color: #ff5a1f;
          transform: translateX(2px);
        }

        .menu-link-text {
          font-size: clamp(26px, 4vw, 38px);
          line-height: 1;
          font-weight: 400;
          letter-spacing: -0.04em;
        }

        .menu-link-num {
          color: rgba(255,255,255,0.34);
          font-size: 14px;
          letter-spacing: 0.1em;
          flex: 0 0 auto;
        }

        .menu-footer {
          margin-top: auto;
          padding-top: 24px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        .menu-footer-cta,
        .menu-footer-call {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 42px;
          padding: 0 16px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition:
            transform 0.18s ease,
            background 0.18s ease,
            border-color 0.18s ease,
            color 0.18s ease;
        }

        .menu-footer-cta {
          background: #ff5a1f;
          border: 1px solid #ff5a1f;
          color: #fff;
        }

        .menu-footer-cta:hover {
          background: #ff6229;
          border-color: #ff6229;
          transform: translateY(-1px);
        }

        .menu-footer-call {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.72);
          color: #fff;
        }

        .menu-footer-call:hover {
          border-color: #ff5a1f;
          color: #ff5a1f;
          transform: translateY(-1px);
        }

        @media (max-width: 767px) {
          .menu-drawer {
            top: 0;
            left: 0;
            right: 0;
            width: 100%;
            height: clamp(420px, 60vh, 520px);
            max-height: clamp(420px, 60vh, 520px);
            border-left: 0;
            border-bottom: 1px solid rgba(255,255,255,0.08);
            box-shadow: 0 20px 60px rgba(0,0,0,0.34);
            transform: translateY(-100%);
            overflow: hidden;
          }

          .menu-drawer-open {
            transform: translateY(0);
          }

          .menu-drawer::before {
            right: auto;
            left: 50%;
            bottom: -100px;
            transform: translateX(-50%);
            width: 300px;
            height: 220px;
          }

          .menu-link {
            padding: 16px 0;
          }

          .menu-link-text {
            font-size: 28px;
          }

          .menu-link:last-child {
            border-bottom: 0;
          }

          .menu-footer {
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            padding-top: 24px;
          }
        }
      `}),c.jsxs("nav",{className:"fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 py-6 flex items-center justify-between",children:[c.jsx("a",{href:"#",className:"z-50 flex items-center",children:c.jsx("img",{src:la,alt:"El-Magic",className:"h-9 w-auto object-contain md:h-10"})}),c.jsxs("div",{className:"flex items-center gap-5 z-50",children:[c.jsxs("div",{className:"relative",children:[c.jsxs("button",{onClick:()=>s(!o),className:"flex items-center gap-1.5 text-foreground/70 hover:text-foreground transition-colors text-sm",children:[c.jsx(c1,{className:"w-4 h-4"}),Qa[t]]}),o&&c.jsx("div",{className:"absolute right-0 top-full mt-2 bg-card border border-border rounded-md overflow-hidden shadow-xl min-w-[60px]",children:Object.keys(Qa).map(l=>c.jsx("button",{onClick:()=>{n(l),s(!1)},className:`block w-full px-4 py-2 text-sm text-left hover:bg-muted transition-colors ${l===t?"text-primary":"text-foreground"}`,children:Qa[l]},l))})]}),c.jsx("button",{onClick:()=>i(!r),className:"z-50 flex flex-col justify-center items-end gap-[6px] w-8 h-8",children:r?c.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",className:"text-foreground",children:[c.jsx("line",{x1:"4",y1:"4",x2:"20",y2:"20",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),c.jsx("line",{x1:"20",y1:"4",x2:"4",y2:"20",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}):c.jsxs(c.Fragment,{children:[c.jsx("span",{className:"block w-7 h-[2px] bg-foreground"}),c.jsx("span",{className:"block w-5 h-[2px] bg-foreground"})]})})]}),c.jsx("div",{className:`menu-overlay fixed inset-0 transition-opacity duration-300 ${r?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"}`,onClick:()=>i(!1)}),c.jsxs("div",{className:`menu-drawer fixed z-[45] p-8 pt-24 md:w-[380px] ${r?"menu-drawer-open":""}`,children:[c.jsx("div",{className:"menu-grid-line md:hidden",style:{left:"4%"}}),c.jsx("div",{className:"menu-grid-line md:hidden",style:{left:"50%"}}),c.jsx("div",{className:"menu-grid-line md:hidden",style:{left:"96%"}}),c.jsx("div",{className:"menu-grid-line hidden md:block",style:{left:"12%"}}),c.jsx("div",{className:"menu-grid-line hidden md:block",style:{left:"50%"}}),c.jsx("div",{className:"menu-grid-line hidden md:block",style:{left:"88%"}}),c.jsxs("div",{className:"relative z-[2] flex h-full flex-col",children:[c.jsx("div",{className:"mb-8",children:c.jsx("span",{className:"text-white/45 text-[12px] tracking-[0.18em] uppercase",children:"Menu"})}),c.jsx("div",{className:"flex flex-col",children:a.map((l,u)=>c.jsxs("a",{href:l.href,onClick:()=>i(!1),className:"menu-link",children:[c.jsx("span",{className:"menu-link-text",children:l.label}),c.jsx("span",{className:"menu-link-num",children:String(u+1).padStart(2,"0")})]},l.href))}),c.jsxs("div",{className:"menu-footer",children:[c.jsx("a",{href:"#contact",onClick:()=>i(!1),className:"menu-footer-cta",children:"Book Now"}),c.jsx("a",{href:"tel:+48577472788",onClick:()=>i(!1),className:"menu-footer-call","aria-label":"Call +48 577 472 788",children:"Call"})]})]})]})]})]})},Fb="/assets/hero-test-Bt8sXLf1.png",$b=()=>{const{t:e}=ct();return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        .hero-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 172px;
          height: 50px;
          padding: 0 26px;
          border-radius: 3px;
          font-size: 15px;
          font-weight: 400;
          line-height: 1;
          letter-spacing: 0;
          text-decoration: none;
          overflow: hidden;
          transition:
            transform 0.18s ease,
            box-shadow 0.18s ease,
            background-color 0.18s ease,
            border-color 0.18s ease,
            color 0.18s ease;
          will-change: transform;
        }

        .hero-btn span {
          position: relative;
          z-index: 2;
        }

        .hero-btn-primary {
          color: #ffffff;
          background: #ff5a1f;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.08),
            inset 0 -1px 0 rgba(0, 0, 0, 0.14),
            0 6px 14px rgba(255, 90, 31, 0.16);
        }

        .hero-btn-primary:hover {
          background: #ff6229;
          transform: translateY(-1px);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.08),
            inset 0 -1px 0 rgba(0, 0, 0, 0.14),
            0 8px 18px rgba(255, 90, 31, 0.2);
        }

        .hero-btn-primary:active {
          transform: translateY(1px);
          box-shadow:
            inset 0 2px 3px rgba(0, 0, 0, 0.12),
            0 4px 10px rgba(255, 90, 31, 0.14);
        }

        .hero-btn-outline {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid rgba(255, 255, 255, 0.72);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.03),
            0 4px 12px rgba(0, 0, 0, 0.12);
        }

        .hero-btn-outline:hover {
          transform: translateY(-1px);
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(255, 255, 255, 0.88);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.04),
            0 6px 14px rgba(0, 0, 0, 0.16);
        }

        .hero-btn-outline:active {
          transform: translateY(1px);
          box-shadow:
            inset 0 2px 3px rgba(0, 0, 0, 0.14),
            0 3px 8px rgba(0, 0, 0, 0.12);
        }

        .hero-guide-line {
          position: absolute;
          top: 0;
          height: 100%;
          width: 1px;
          pointer-events: none;
        }

        .hero-mobile-title-line {
          display: block;
          margin-top: 6px;
        }

        .hero-mobile-title-line:first-child {
          margin-top: 0;
        }

        .hero-mobile-na {
          color: #ffffff;
          font: inherit;
          letter-spacing: inherit;
          text-transform: none;
        }

        @media (max-width: 767px) {
          .hero-btn {
            width: 100%;
            min-width: 0;
            height: 48px;
            padding: 0 18px;
            font-size: 14px;
          }
        }
      `}),c.jsxs("section",{className:"relative h-[86svh] min-h-[740px] overflow-hidden bg-black text-white md:h-screen md:min-h-[820px]",children:[c.jsxs("div",{className:"absolute inset-0",children:[c.jsx("img",{src:Fb,alt:"Auto mechanic workshop",className:"h-full w-full object-cover object-[58%_center] md:object-[68%_center]"}),c.jsx("div",{className:"absolute inset-0 bg-black/60 md:bg-black/52"}),c.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-black/84 via-black/54 to-black/18 md:from-black/82 md:via-black/42 md:to-black/12"}),c.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-black/18 via-transparent to-black/28 md:from-black/30 md:to-black/22"})]}),c.jsxs("div",{className:"pointer-events-none absolute inset-0 z-[4] md:hidden",children:[c.jsx("div",{className:"hero-guide-line",style:{left:"8%",backgroundColor:"rgba(255,255,255,0.18)"}}),c.jsx("div",{className:"hero-guide-line",style:{left:"28%",backgroundColor:"rgba(255,255,255,0.14)"}}),c.jsx("div",{className:"hero-guide-line",style:{left:"50%",backgroundColor:"rgba(255,255,255,0.14)"}}),c.jsx("div",{className:"hero-guide-line",style:{left:"72%",backgroundColor:"rgba(255,255,255,0.14)"}}),c.jsx("div",{className:"hero-guide-line",style:{left:"92%",backgroundColor:"rgba(255,255,255,0.18)"}})]}),c.jsxs("div",{className:"pointer-events-none absolute inset-0 z-[4] hidden md:block",children:[c.jsx("div",{className:"hero-guide-line",style:{left:"7.5%",backgroundColor:"rgba(255,255,255,0.18)"}}),c.jsx("div",{className:"hero-guide-line",style:{left:"28.5%",backgroundColor:"rgba(255,255,255,0.14)"}}),c.jsx("div",{className:"hero-guide-line",style:{left:"50%",backgroundColor:"rgba(255,255,255,0.14)"}}),c.jsx("div",{className:"hero-guide-line",style:{left:"71.5%",backgroundColor:"rgba(255,255,255,0.14)"}}),c.jsx("div",{className:"hero-guide-line",style:{left:"92.5%",backgroundColor:"rgba(255,255,255,0.18)"}})]}),c.jsx("div",{className:"relative z-10 flex h-full items-start md:items-center",children:c.jsx("div",{className:"w-full px-4 sm:px-6 md:px-12 lg:px-0",children:c.jsxs("div",{className:"mx-auto max-w-[332px] pt-[210px] text-center sm:max-w-[350px] sm:pt-[225px] md:mx-0 md:max-w-[760px] md:pt-24 md:text-left md:ml-[4%] lg:ml-[6%]",children:[c.jsx("h1",{className:"animate-on-scroll font-semibold leading-[0.98] tracking-[-0.05em] text-white md:hidden",children:e.hero.title1==="Twój Samochód Zasługuje"?c.jsxs(c.Fragment,{children:[c.jsx("span",{className:"hero-mobile-title-line text-[42px]",children:"Twój"}),c.jsx("span",{className:"hero-mobile-title-line text-[42px]",children:"Samochód"}),c.jsxs("span",{className:"hero-mobile-title-line text-[42px]",children:["Zasługuje ",c.jsx("span",{className:"hero-mobile-na",children:"na"})]}),c.jsx("span",{className:"hero-mobile-title-line text-[42px] text-primary",children:"Profesjonalną"}),c.jsx("span",{className:"hero-mobile-title-line text-[42px] text-primary",children:"Opiekę"})]}):c.jsxs(c.Fragment,{children:[c.jsx("span",{className:"hero-mobile-title-line text-[46px]",children:e.hero.title1}),c.jsx("span",{className:"hero-mobile-title-line text-[47px] text-primary",children:e.hero.title2})]})}),c.jsxs("h1",{className:"animate-on-scroll hidden text-[84px] font-semibold leading-[0.95] tracking-[-0.03em] text-white md:block lg:text-[96px]",children:[e.hero.title1,c.jsx("br",{}),c.jsx("span",{className:"text-primary",children:e.hero.title2})]}),c.jsx("p",{className:"animate-on-scroll mx-auto mt-5 max-w-[320px] text-[16px] leading-[1.58] text-white/74 sm:max-w-[332px] sm:text-[16px] md:mx-0 md:mt-8 md:max-w-[680px] md:text-[20px] md:leading-[1.6]",style:{transitionDelay:"100ms"},children:e.hero.desc}),c.jsxs("div",{className:"animate-on-scroll mt-8 flex flex-col gap-3 sm:gap-4 md:mt-10 md:flex-row md:flex-wrap md:gap-6",style:{transitionDelay:"200ms"},children:[c.jsx("a",{href:"#contact",className:"hero-btn hero-btn-primary",children:c.jsx("span",{children:e.hero.cta1})}),c.jsx("a",{href:"#pricing",className:"hero-btn hero-btn-outline",children:c.jsx("span",{children:e.hero.cta2})})]})]})})})]})]})},Wb=()=>{const{t:e}=ct(),t=[e.stats.s1,e.stats.s2,e.stats.s3];return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        .stats-grid-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 1px;
          background: rgba(255,255,255,0.08);
          pointer-events: none;
        }

        .stats-card {
          position: relative;
          min-height: 295px;
          border: 1px solid rgba(255,255,255,0.1);
          background: #050505;
          padding: 42px 32px 30px;
          transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease;
        }

        .stats-card:hover {
          transform: translateY(-2px);
          border-color: rgba(255,255,255,0.16);
          background: #080808;
        }

        .stats-value {
          font-size: clamp(54px, 5.4vw, 74px);
          line-height: 0.95;
          font-weight: 400;
          letter-spacing: -0.04em;
          color: #f5f5f5;
        }

        .stats-divider {
          width: 100%;
          height: 1px;
          margin-top: 30px;
          margin-bottom: 28px;
          background: linear-gradient(90deg, #ff5a1f 0%, #ff5a1f 72%, rgba(255,90,31,0.15) 100%);
        }

        .stats-label {
          font-size: 18px;
          line-height: 1.3;
          font-weight: 400;
          color: rgba(255,255,255,0.92);
        }

        .stats-desc {
          margin-top: 18px;
          max-width: 320px;
          font-size: 15px;
          line-height: 1.55;
          font-weight: 400;
          color: rgba(255,255,255,0.68);
        }

        @media (max-width: 1024px) {
          .stats-card {
            min-height: 270px;
            padding: 34px 26px 28px;
          }

          .stats-divider {
            margin-top: 24px;
            margin-bottom: 22px;
          }
        }

        @media (max-width: 767px) {
          .stats-card {
            min-height: auto;
            padding: 28px 22px 24px;
          }

          .stats-value {
            font-size: 48px;
          }

          .stats-label {
            font-size: 17px;
          }

          .stats-desc {
            font-size: 14px;
            max-width: none;
          }
        }
      `}),c.jsxs("section",{className:"relative overflow-hidden bg-black text-white",children:[c.jsxs("div",{className:"pointer-events-none absolute inset-0 z-0 md:hidden",children:[c.jsx("div",{className:"stats-grid-line",style:{left:"4%",backgroundColor:"rgba(255,255,255,0.12)"}}),c.jsx("div",{className:"stats-grid-line",style:{left:"50%",backgroundColor:"rgba(255,255,255,0.10)"}}),c.jsx("div",{className:"stats-grid-line",style:{left:"96%",backgroundColor:"rgba(255,255,255,0.12)"}})]}),c.jsxs("div",{className:"pointer-events-none absolute inset-0 z-0 hidden md:block",children:[c.jsx("div",{className:"stats-grid-line left-[7.5%]"}),c.jsx("div",{className:"stats-grid-line left-[28.5%]"}),c.jsx("div",{className:"stats-grid-line left-1/2"}),c.jsx("div",{className:"stats-grid-line right-[28.5%]"}),c.jsx("div",{className:"stats-grid-line right-[7.5%]"})]}),c.jsx("div",{className:"relative z-[2] mx-auto max-w-[1280px] px-[4%] py-10 md:px-10 md:py-14 lg:px-0 lg:py-16",children:c.jsx("div",{className:"grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-5",children:t.map((n,r)=>c.jsxs("div",{className:"stats-card animate-on-scroll",style:{transitionDelay:`${r*90}ms`},children:[c.jsx("p",{className:"stats-value",children:n.val}),c.jsx("div",{className:"stats-divider"}),c.jsx("p",{className:"stats-label",children:n.label}),c.jsx("p",{className:"stats-desc",children:n.desc})]},r))})})]})]})},Ub="/assets/chip-CDmymGNY.jpg",Bb="/assets/electric-DNPkQeut.jpg",Hb="/assets/diagnostick-DGCI4ABw.jpg",Vb="/assets/audio-9Cy2GIPW.jpg",Yb="/assets/progr-WDYb6Jai.jpg",Qb="/assets/klima-Di3MfQLv.jpg",Kb="/assets/lights-Mqo3LViV.jpg",qb="/assets/access-xDdCzUPZ.jpg",yf=[Ub,Hb,Bb,Vb,Yb,qb,Qb,Kb],Gb=()=>{var o,s;const{t:e}=ct(),[t,n]=b.useState(0),r=((o=e==null?void 0:e.services)==null?void 0:o.items)??[],i=a=>{n(l=>l===a?-1:a)};return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        .services-grid-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 1px;
          background: rgba(255,255,255,0.08);
          pointer-events: none;
        }

        .services-row {
          position: relative;
          border-top: 1px solid rgba(255,255,255,0.12);
          background: #050505;
          overflow: hidden;
        }

        .services-row:last-child {
          border-bottom: 1px solid rgba(255,255,255,0.12);
        }

        .services-row-open {
          background: #050505;
        }

        .services-row-open::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 28%;
          height: 100%;
          background:
            radial-gradient(circle at 60% 50%, rgba(255, 90, 31, 0.18), transparent 58%);
          pointer-events: none;
          opacity: 1;
        }

        .services-trigger {
          position: relative;
          z-index: 2;
          width: 100%;
          display: grid;
          grid-template-columns: 90px minmax(0, 1fr) 56px;
          align-items: center;
          gap: 24px;
          padding: 30px 28px;
          text-align: left;
          background: transparent;
          border: 0;
          color: inherit;
          cursor: pointer;
        }

        .services-num {
          color: rgba(255,255,255,0.82);
          font-size: 22px;
          line-height: 1;
          font-weight: 400;
          letter-spacing: -0.02em;
        }

        .services-title-wrap {
          display: flex;
          align-items: center;
          gap: 26px;
          min-width: 0;
        }

        .services-accent {
          width: 2px;
          height: 48px;
          background: #ff5a1f;
          flex: 0 0 auto;
          opacity: 0;
          transform: scaleY(0.65);
          transition: opacity 0.2s ease, transform 0.2s ease;
        }

        .services-row-open .services-accent {
          opacity: 1;
          transform: scaleY(1);
        }

        .services-title {
          color: #f4f4f4;
          font-size: clamp(28px, 3vw, 44px);
          line-height: 1.06;
          font-weight: 400;
          letter-spacing: -0.04em;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .services-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.9);
        }

        .services-content {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 90px minmax(0, 1fr) 56px;
          gap: 24px;
          padding: 0 28px 34px;
        }

        .services-content-inner {
          grid-column: 2 / 3;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          max-width: 980px;
          min-width: 0;
        }

        .services-image {
          width: min(100%, 480px);
          height: 310px;
          object-fit: cover;
          object-position: center;
          display: block;
          margin-bottom: 34px;
          background: #050505;
        }

        .services-subtitle {
          color: #f2f2f2;
          font-size: 20px;
          line-height: 1.2;
          font-weight: 400;
          margin: 0 0 16px;
        }

        .services-desc-row {
          width: 100%;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
        }

        .services-desc {
          max-width: 520px;
          color: rgba(255,255,255,0.7);
          font-size: 16px;
          line-height: 1.65;
          font-weight: 400;
          margin: 0;
        }

        .services-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 146px;
          height: 52px;
          padding: 0 28px;
          border-radius: 4px;
          background: #ff5a1f;
          color: #fff;
          font-size: 16px;
          font-weight: 400;
          text-decoration: none;
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.08),
            inset 0 -1px 0 rgba(0,0,0,0.14),
            0 8px 18px rgba(255,90,31,0.16);
          transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
          flex: 0 0 auto;
        }

        .services-btn:hover {
          background: #ff6229;
          transform: translateY(-1px);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.08),
            inset 0 -1px 0 rgba(0,0,0,0.14),
            0 10px 20px rgba(255,90,31,0.2);
        }

        .services-btn:active {
          transform: translateY(1px);
        }

        @media (max-width: 1024px) {
          .services-trigger {
            grid-template-columns: 72px minmax(0, 1fr) 44px;
            gap: 20px;
            padding: 24px 20px;
          }

          .services-content {
            grid-template-columns: 72px minmax(0, 1fr) 44px;
            gap: 20px;
            padding: 0 20px 28px;
          }

          .services-num {
            font-size: 18px;
          }

          .services-title {
            font-size: clamp(24px, 4vw, 34px);
          }

          .services-image {
            height: 260px;
            width: min(100%, 440px);
            margin-bottom: 28px;
          }
        }

        @media (max-width: 768px) {
          .services-row-open::after {
            width: 42%;
            background:
              radial-gradient(circle at 78% 52%, rgba(255, 90, 31, 0.12), transparent 62%);
          }

          .services-trigger {
            grid-template-columns: 56px minmax(0, 1fr) 36px;
            gap: 14px;
            padding: 20px 14px;
          }

          .services-content {
            display: block;
            padding: 0 14px 22px 14px;
          }

          .services-content-inner {
            grid-column: auto;
            display: block;
            max-width: none;
            width: 100%;
          }

          .services-title-wrap {
            gap: 14px;
          }

          .services-accent {
            height: 32px;
          }

          .services-num {
            font-size: 16px;
          }

          .services-title {
            font-size: 20px;
            white-space: normal;
          }

          .services-image {
            width: 100%;
            height: 220px;
            margin-bottom: 22px;
          }

          .services-subtitle {
            font-size: 18px;
            margin-bottom: 12px;
          }

          .services-desc-row {
            flex-direction: column;
            align-items: flex-start;
          }

          .services-desc {
            font-size: 15px;
            max-width: none;
          }

          .services-btn {
            min-width: 132px;
            height: 48px;
            padding: 0 22px;
            font-size: 15px;
          }
        }
      `}),c.jsxs("section",{id:"services",className:"relative overflow-hidden bg-black text-white",children:[c.jsxs("div",{className:"pointer-events-none absolute inset-0 z-0 md:hidden",children:[c.jsx("div",{className:"services-grid-line",style:{left:"4%",backgroundColor:"rgba(255,255,255,0.12)"}}),c.jsx("div",{className:"services-grid-line",style:{left:"50%",backgroundColor:"rgba(255,255,255,0.10)"}}),c.jsx("div",{className:"services-grid-line",style:{left:"96%",backgroundColor:"rgba(255,255,255,0.12)"}})]}),c.jsxs("div",{className:"pointer-events-none absolute inset-0 z-0 hidden md:block",children:[c.jsx("div",{className:"services-grid-line left-[7.5%]"}),c.jsx("div",{className:"services-grid-line left-[28.5%]"}),c.jsx("div",{className:"services-grid-line left-1/2"}),c.jsx("div",{className:"services-grid-line right-[28.5%]"}),c.jsx("div",{className:"services-grid-line right-[7.5%]"})]}),c.jsxs("div",{className:"relative z-[2] mx-auto max-w-[1280px] px-4 py-20 md:px-10 lg:px-0 lg:py-24",children:[c.jsx("div",{className:"mb-16 md:mb-20",children:c.jsxs("div",{className:"flex items-center gap-6",children:[c.jsx("div",{className:"h-[74px] w-[2px] bg-[#ff5a1f]"}),c.jsx("h2",{className:"text-[54px] font-normal leading-none tracking-[-0.04em] text-white md:text-[76px] lg:text-[68px]",children:(s=e==null?void 0:e.services)==null?void 0:s.title})]})}),c.jsx("div",{className:"relative",children:r.map((a,l)=>{var h,d;const u=t===l,f=String(l+1).padStart(3,"0");return c.jsxs("div",{className:`services-row ${u?"services-row-open":""}`,children:[c.jsxs("button",{type:"button",onClick:()=>i(l),className:"services-trigger","aria-expanded":u,children:[c.jsx("span",{className:"services-num",children:f}),c.jsxs("span",{className:"services-title-wrap",children:[c.jsx("span",{className:"services-accent"}),c.jsx("span",{className:"services-title",children:a.name})]}),c.jsx("span",{className:"services-icon",children:u?c.jsx(p1,{className:"h-8 w-8 stroke-[1.5]"}):c.jsx(h1,{className:"h-8 w-8 stroke-[1.5]"})})]}),u&&c.jsx("div",{className:"services-content",children:c.jsxs("div",{className:"services-content-inner",children:[c.jsx("img",{src:yf[l%yf.length],alt:a.name,className:"services-image"}),c.jsx("p",{className:"services-subtitle",children:(h=e==null?void 0:e.services)==null?void 0:h.whatWeDo}),c.jsxs("div",{className:"services-desc-row",children:[c.jsx("p",{className:"services-desc",children:a.desc}),c.jsx("a",{href:"#contact",className:"services-btn",children:(d=e==null?void 0:e.services)==null?void 0:d.viewDetails})]})]})})]},l)})})]})]})]})},Xb="/assets/why-choose-us-NESWChwR.jpg",Zb=[_m,s1,a1,m1],Jb=()=>{var n,r;const{t:e}=ct(),t=((n=e==null?void 0:e.whyUs)==null?void 0:n.items)??[];return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        .why-grid-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 1px;
          background: rgba(255,255,255,0.08);
          pointer-events: none;
        }

        .why-card {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 22px;
          min-height: 138px;
          padding: 34px 32px;
          border: 1px solid rgba(255,255,255,0.1);
          background: #050505;
          transition:
            transform 0.22s ease,
            border-color 0.22s ease,
            background 0.22s ease;
        }

        .why-card:hover {
          transform: translateY(-2px);
          border-color: rgba(255,255,255,0.15);
          background: #080808;
        }

        .why-icon-wrap {
          width: 50px;
          height: 50px;
          border-radius: 999px;
          border: 2px solid #ff5a1f;
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 auto;
          color: #ff5a1f;
        }

        .why-title {
          color: #f5f5f5;
          font-size: 22px;
          line-height: 1.2;
          font-weight: 400;
          letter-spacing: -0.02em;
          margin: 0 0 10px;
        }

        .why-desc {
          color: rgba(255,255,255,0.68);
          font-size: 15px;
          line-height: 1.65;
          margin: 0;
          max-width: 430px;
        }

        .why-main-image-wrap {
          position: relative;
          display: block;
        }

        .why-main-image {
          width: 100%;
          display: block;
          object-fit: cover;
          object-position: center;
          border: 1px solid rgba(255,255,255,0.12);
          aspect-ratio: 5 / 6;
        }

        @media (min-width: 769px) {
          .why-main-image-wrap {
            min-height: 100%;
            height: 100%;
            display: flex;
            align-items: stretch;
            justify-content: flex-end;
          }

          .why-main-image {
            height: 100%;
            min-height: 640px;
            aspect-ratio: auto;
          }
        }

        @media (max-width: 1279px) and (min-width: 769px) {
          .why-main-image {
            min-height: 560px;
          }
        }

        @media (max-width: 1024px) and (min-width: 769px) {
          .why-main-image {
            min-height: 520px;
          }
        }

        @media (max-width: 768px) {
          .why-card {
            min-height: auto;
            padding: 22px 18px;
            gap: 16px;
          }

          .why-icon-wrap {
            width: 44px;
            height: 44px;
          }

          .why-title {
            font-size: 18px;
            margin-bottom: 8px;
          }

          .why-desc {
            font-size: 14px;
            max-width: none;
          }

          .why-main-image-wrap {
            margin-top: 28px;
            min-height: 0;
            height: auto;
          }

          .why-main-image {
            width: 100%;
            height: auto;
            min-height: 0;
            aspect-ratio: 4 / 5;
          }
        }
      `}),c.jsxs("section",{className:"relative overflow-hidden bg-black text-white",children:[c.jsxs("div",{className:"pointer-events-none absolute inset-0 z-0 md:hidden",children:[c.jsx("div",{className:"why-grid-line",style:{left:"4%",backgroundColor:"rgba(255,255,255,0.12)"}}),c.jsx("div",{className:"why-grid-line",style:{left:"50%",backgroundColor:"rgba(255,255,255,0.10)"}}),c.jsx("div",{className:"why-grid-line",style:{left:"96%",backgroundColor:"rgba(255,255,255,0.12)"}})]}),c.jsxs("div",{className:"pointer-events-none absolute inset-0 z-0 hidden md:block",children:[c.jsx("div",{className:"why-grid-line left-[7.5%]"}),c.jsx("div",{className:"why-grid-line left-[28.5%]"}),c.jsx("div",{className:"why-grid-line left-1/2"}),c.jsx("div",{className:"why-grid-line right-[28.5%]"}),c.jsx("div",{className:"why-grid-line right-[7.5%]"})]}),c.jsxs("div",{className:"relative z-[2] mx-auto max-w-[1280px] px-[4%] py-20 md:px-10 lg:px-0 lg:py-24",children:[c.jsx("div",{className:"mb-16 md:mb-20",children:c.jsxs("div",{className:"flex items-center gap-6",children:[c.jsx("div",{className:"h-[74px] w-[2px] bg-[#ff5a1f]"}),c.jsx("h2",{className:"text-[40px] font-normal leading-none tracking-[-0.04em] text-white md:text-[76px] lg:text-[68px]",children:(r=e==null?void 0:e.whyUs)==null?void 0:r.title})]})}),c.jsxs("div",{className:"grid grid-cols-1 gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:gap-7",children:[c.jsx("div",{className:"space-y-0",children:t.map((i,o)=>{const s=Zb[o]??_m;return c.jsxs("div",{className:"why-card animate-on-scroll",style:{transitionDelay:`${o*80}ms`},children:[c.jsx("div",{className:"why-icon-wrap",children:c.jsx(s,{className:"h-6 w-6 stroke-[1.9]"})}),c.jsxs("div",{children:[c.jsx("p",{className:"why-title",children:i.title}),c.jsx("p",{className:"why-desc",children:i.desc})]})]},o)})}),c.jsx("div",{className:"why-main-image-wrap animate-on-scroll",style:{transitionDelay:"180ms"},children:c.jsx("img",{src:Xb,alt:"Professional mechanic",className:"why-main-image"})})]})]})]})]})},e5=()=>{var r;const{t:e}=ct(),t=b.useRef(null),n=((r=e==null?void 0:e.pricing)==null?void 0:r.plans)??[];return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        .pricing-grid-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 1px;
          background: rgba(255,255,255,0.08);
          pointer-events: none;
        }

        .pricing-left-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 198px;
          height: 54px;
          padding: 0 26px;
          border-radius: 14px;
          background: #f5f5f5;
          color: #111111;
          font-size: 17px;
          font-weight: 400;
          text-decoration: none;
          transition: transform 0.18s ease, opacity 0.18s ease;
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        .pricing-left-cta:hover {
          transform: translateY(-1px);
          opacity: 0.96;
        }

        .pricing-card {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.1);
          background: #050505;
          padding: 30px 30px 32px;
          transition:
            border-color 0.2s ease,
            transform 0.2s ease,
            background 0.2s ease;
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        .pricing-card:hover {
          transform: translateY(-2px);
          border-color: rgba(255,255,255,0.14);
        }

        .pricing-card-popular {
          background:
            linear-gradient(90deg, rgba(255,90,31,0.12) 0%, rgba(255,90,31,0.03) 22%, #050505 55%);
          border-color: rgba(255, 111, 44, 0.22);
        }

        .pricing-card-header-box {
          border: 1px solid rgba(255,255,255,0.06);
          background: #080808;
          padding: 24px 24px 22px;
          margin-bottom: 34px;
        }

        .pricing-card-popular .pricing-card-header-box {
          background:
            linear-gradient(90deg, rgba(255,90,31,0.08) 0%, #080808 40%, #080808 100%);
        }

        .pricing-plan-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 18px;
        }

        .pricing-plan-name {
          color: rgba(255,255,255,0.86);
          font-size: 15px;
          font-weight: 400;
          line-height: 1.2;
        }

        .pricing-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          height: 28px;
          padding: 0 12px;
          border-radius: 999px;
          background: #ff5a1f;
          color: #ffffff;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
        }

        .pricing-badge svg {
          width: 12px;
          height: 12px;
        }

        .pricing-price-row {
          display: flex;
          align-items: baseline;
          gap: 12px;
          margin-bottom: 10px;
        }

        .pricing-price {
          color: #f5f5f5;
          font-size: clamp(46px, 4vw, 60px);
          line-height: 0.95;
          font-weight: 400;
          letter-spacing: -0.05em;
        }

        .pricing-old-price {
          color: rgba(255,255,255,0.28);
          font-size: 23px;
          line-height: 1;
          font-weight: 400;
          text-decoration: line-through;
        }

        .pricing-plan-desc {
          color: rgba(255,255,255,0.72);
          font-size: 15px;
          line-height: 1.5;
          font-weight: 400;
        }

        .pricing-features {
          list-style: none;
          margin: 0 0 34px;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .pricing-feature {
          display: flex;
          align-items: center;
          gap: 14px;
          color: rgba(255,255,255,0.76);
          font-size: 15px;
          line-height: 1.3;
          font-weight: 400;
        }

        .pricing-feature-dot {
          width: 11px;
          height: 11px;
          border-radius: 2px;
          background: rgba(255,255,255,0.44);
          flex: 0 0 auto;
        }

        .pricing-btn {
          width: 100%;
          height: 56px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.78);
          background: transparent;
          color: #f5f5f5;
          font-size: 18px;
          font-weight: 400;
          transition:
            background 0.18s ease,
            color 0.18s ease,
            transform 0.18s ease,
            border-color 0.18s ease;
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        .pricing-btn:hover {
          background: rgba(255,255,255,0.04);
          transform: translateY(-1px);
        }

        .pricing-btn:active {
          transform: translateY(1px);
        }

        @media (hover: none) and (pointer: coarse) {
          .pricing-card:hover {
            transform: none;
            border-color: rgba(255,255,255,0.1);
            background: #050505;
          }

          .pricing-btn:hover {
            transform: none;
            background: transparent;
          }

          .pricing-left-cta:hover {
            transform: none;
            opacity: 1;
          }
        }

        @media (max-width: 1024px) {
          .pricing-card {
            padding: 24px 22px 26px;
          }

          .pricing-card-header-box {
            padding: 20px 20px 18px;
            margin-bottom: 26px;
          }

          .pricing-price {
            font-size: 46px;
          }

          .pricing-old-price {
            font-size: 20px;
          }

          .pricing-btn {
            height: 52px;
            font-size: 17px;
          }
        }

        @media (max-width: 768px) {
          .pricing-left-cta {
            min-width: 178px;
            height: 50px;
            font-size: 16px;
            border-radius: 12px;
          }

          .pricing-card {
            padding: 20px 16px 22px;
            transition: border-color 0.2s ease, background 0.2s ease;
          }

          .pricing-card-header-box {
            padding: 18px 16px 16px;
            margin-bottom: 22px;
          }

          .pricing-plan-top {
            flex-wrap: wrap;
            margin-bottom: 14px;
          }

          .pricing-price {
            font-size: 40px;
          }

          .pricing-old-price {
            font-size: 18px;
          }

          .pricing-feature {
            font-size: 14px;
            gap: 12px;
          }

          .pricing-btn {
            height: 50px;
            font-size: 16px;
            border-radius: 12px;
          }
        }
      `}),c.jsxs("section",{id:"pricing",className:"relative bg-black py-24 text-white",children:[c.jsxs("div",{className:"pointer-events-none absolute inset-0 z-0 md:hidden",children:[c.jsx("div",{className:"pricing-grid-line",style:{left:"4%",backgroundColor:"rgba(255,255,255,0.12)"}}),c.jsx("div",{className:"pricing-grid-line",style:{left:"50%",backgroundColor:"rgba(255,255,255,0.10)"}}),c.jsx("div",{className:"pricing-grid-line",style:{left:"96%",backgroundColor:"rgba(255,255,255,0.12)"}})]}),c.jsxs("div",{className:"pointer-events-none absolute inset-0 z-0 hidden md:block",children:[c.jsx("div",{className:"pricing-grid-line left-[7.5%]"}),c.jsx("div",{className:"pricing-grid-line left-[28.5%]"}),c.jsx("div",{className:"pricing-grid-line left-1/2"}),c.jsx("div",{className:"pricing-grid-line right-[28.5%]"}),c.jsx("div",{className:"pricing-grid-line right-[7.5%]"})]}),c.jsx("div",{className:"relative z-[2] mx-auto max-w-[1280px] px-[4%] md:px-10 lg:px-0",children:c.jsxs("div",{className:"grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16",children:[c.jsxs("div",{className:"animate-on-scroll lg:sticky lg:top-32 lg:self-start",children:[c.jsxs("div",{className:"mb-6 flex items-start gap-6",children:[c.jsx("div",{className:"mt-1 h-[72px] w-[2px] bg-primary"}),c.jsx("h2",{className:"text-[48px] font-normal leading-[0.95] tracking-[-0.045em] text-white md:text-[68px] lg:text-[72px]",children:e.pricing.title})]}),c.jsx("p",{className:"max-w-[560px] text-[18px] leading-[1.45] text-white/72 md:text-[20px]",children:e.pricing.desc}),c.jsx("a",{href:"#contact",className:"pricing-left-cta mt-10",children:e.pricing.cta})]}),c.jsx("div",{ref:t,className:"space-y-8",children:n.map((i,o)=>c.jsxs("div",{className:`pricing-card ${i.popular?"pricing-card-popular":""}`,children:[c.jsxs("div",{className:"pricing-card-header-box",children:[c.jsxs("div",{className:"pricing-plan-top",children:[c.jsx("p",{className:"pricing-plan-name",children:i.name}),i.popular&&c.jsxs("span",{className:"pricing-badge",children:[c.jsx(Im,{className:"fill-none"}),"Most Popular"]})]}),c.jsxs("div",{className:"pricing-price-row",children:[c.jsx("span",{className:"pricing-price",children:i.price}),c.jsx("span",{className:"pricing-old-price",children:i.oldPrice})]}),c.jsx("p",{className:"pricing-plan-desc",children:i.desc})]}),c.jsx("ul",{className:"pricing-features",children:i.features.map((s,a)=>c.jsxs("li",{className:"pricing-feature",children:[c.jsx("span",{className:"pricing-feature-dot"}),c.jsx("span",{children:s})]},a))}),c.jsx("button",{className:"pricing-btn",children:i.cta})]},o))})]})})]})]})},t5=()=>{const{t:e}=ct(),t=e.testimonials.reviews,n=b.useRef(null),r=b.useRef([]),[i,o]=b.useState(0),s=l=>{const u=n.current,f=r.current[l];!u||!f||(u.scrollTo({left:f.offsetLeft,behavior:"smooth"}),o(l))},a=l=>{const u=t.length,f=Math.max(0,Math.min(u-1,i+l));s(f)};return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        .testimonials-grid-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 1px;
          background: rgba(255,255,255,0.08);
          pointer-events: none;
        }

        .testimonials-track {
          scrollbar-width: none;
          -ms-overflow-style: none;
          scroll-behavior: smooth;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          padding-top: 8px;
          padding-bottom: 8px;
        }

        .testimonials-track::-webkit-scrollbar {
          display: none;
        }

        .testimonial-card {
          min-width: 440px;
          max-width: 440px;
          min-height: 382px;
          border: 1px solid rgba(255,255,255,0.11);
          background: #050505;
          padding: 34px 30px 28px;
          flex-shrink: 0;
          scroll-snap-align: start;
          scroll-snap-stop: always;
          display: flex;
          flex-direction: column;
          transition:
            transform 0.22s ease,
            border-color 0.22s ease,
            background 0.22s ease;
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        .testimonial-card:hover {
          transform: translateY(-2px);
          border-color: rgba(255,255,255,0.16);
          background: #080808;
        }

        .testimonial-stars {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 32px;
          flex: 0 0 auto;
        }

        .testimonial-text {
          color: #f3f3f3;
          font-size: 20px;
          line-height: 1.45;
          font-weight: 400;
          letter-spacing: -0.02em;
          margin: 0;
          max-width: 360px;
          flex: 1 1 auto;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: auto;
          padding-top: 34px;
          flex: 0 0 auto;
        }

        .testimonial-avatar {
          width: 44px;
          height: 44px;
          border: 1px solid rgba(255,255,255,0.08);
          background: linear-gradient(180deg, #202020 0%, #0f0f0f 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.88);
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          flex: 0 0 auto;
        }

        .testimonial-name {
          color: #f4f4f4;
          font-size: 15px;
          line-height: 1.2;
          font-weight: 400;
          margin: 0 0 4px;
        }

        .testimonial-role {
          color: rgba(255,255,255,0.62);
          font-size: 14px;
          line-height: 1.2;
          font-weight: 400;
          margin: 0;
        }

        .testimonial-nav {
          width: 56px;
          height: 56px;
          border: 1px solid rgba(255,255,255,0.08);
          background: #232323;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #f3f3f3;
          transition:
            transform 0.18s ease,
            background 0.18s ease,
            border-color 0.18s ease;
        }

        .testimonial-nav:hover {
          background: #2b2b2b;
          border-color: rgba(255,255,255,0.14);
          transform: translateY(-1px);
        }

        .testimonial-nav:active {
          transform: translateY(1px);
        }

        @media (hover: none) and (pointer: coarse) {
          .testimonial-card:hover,
          .testimonial-nav:hover {
            transform: none;
          }
        }

        @media (max-width: 1024px) {
          .testimonial-card {
            min-width: 390px;
            max-width: 390px;
            min-height: 350px;
            padding: 28px 24px 24px;
          }

          .testimonial-stars {
            margin-bottom: 28px;
          }

          .testimonial-text {
            font-size: 18px;
            max-width: 320px;
          }

          .testimonial-author {
            padding-top: 28px;
          }
        }

        @media (max-width: 768px) {
          .testimonial-card {
            min-width: 100%;
            max-width: 100%;
            min-height: 360px;
            padding: 24px 18px 22px;
          }

          .testimonial-stars {
            margin-bottom: 24px;
          }

          .testimonial-text {
            font-size: 17px;
            max-width: none;
          }

          .testimonial-author {
            padding-top: 24px;
          }

          .testimonial-nav {
            width: 50px;
            height: 50px;
          }
        }
      `}),c.jsxs("section",{className:"relative bg-black py-24 text-white",children:[c.jsxs("div",{className:"pointer-events-none absolute inset-0 z-0 md:hidden",children:[c.jsx("div",{className:"testimonials-grid-line",style:{left:"4%",backgroundColor:"rgba(255,255,255,0.12)"}}),c.jsx("div",{className:"testimonials-grid-line",style:{left:"50%",backgroundColor:"rgba(255,255,255,0.10)"}}),c.jsx("div",{className:"testimonials-grid-line",style:{left:"96%",backgroundColor:"rgba(255,255,255,0.12)"}})]}),c.jsxs("div",{className:"pointer-events-none absolute inset-0 z-0 hidden md:block",children:[c.jsx("div",{className:"testimonials-grid-line left-[7.5%]"}),c.jsx("div",{className:"testimonials-grid-line left-[28.5%]"}),c.jsx("div",{className:"testimonials-grid-line left-1/2"}),c.jsx("div",{className:"testimonials-grid-line right-[28.5%]"}),c.jsx("div",{className:"testimonials-grid-line right-[7.5%]"})]}),c.jsxs("div",{className:"relative z-[2] mx-auto max-w-[1280px] px-[4%] md:px-10 lg:px-0",children:[c.jsxs("div",{className:"mb-12 animate-on-scroll md:mb-14",children:[c.jsxs("div",{className:"mb-5 flex items-start gap-6",children:[c.jsx("div",{className:"mt-2 h-[72px] w-[2px] bg-primary"}),c.jsx("h2",{className:"text-[46px] font-normal leading-[0.95] tracking-[-0.045em] text-white md:text-[68px] lg:text-[74px]",children:e.testimonials.title})]}),c.jsx("p",{className:"max-w-[760px] text-[18px] leading-[1.45] text-white/70 md:text-[20px]",children:e.testimonials.desc})]}),c.jsx("div",{ref:n,className:"testimonials-track flex gap-0 overflow-x-auto md:gap-6",children:t.map((l,u)=>c.jsxs("div",{ref:f=>{r.current[u]=f},className:"testimonial-card",children:[c.jsx("div",{className:"testimonial-stars",children:Array.from({length:5}).map((f,h)=>c.jsx(Im,{className:`h-6 w-6 ${h<l.stars?"fill-primary text-primary":"fill-[#bcbcbc] text-[#bcbcbc]"}`},h))}),c.jsx("p",{className:"testimonial-text",children:l.text}),c.jsxs("div",{className:"testimonial-author",children:[c.jsx("div",{className:"testimonial-avatar",children:l.name.split(" ").map(f=>f[0]).join("")}),c.jsxs("div",{children:[c.jsx("p",{className:"testimonial-name",children:l.name}),c.jsx("p",{className:"testimonial-role",children:l.role})]})]})]},u))}),c.jsxs("div",{className:"mt-10 flex justify-center gap-0",children:[c.jsx("button",{onClick:()=>a(-1),className:"testimonial-nav","aria-label":"Previous testimonials",children:c.jsx(r1,{className:"h-8 w-8 stroke-[1.5]"})}),c.jsx("button",{onClick:()=>a(1),className:"testimonial-nav","aria-label":"Next testimonials",children:c.jsx(i1,{className:"h-8 w-8 stroke-[1.5]"})})]})]})]})]})},n5="/assets/about-section-DySck5mT.jpg",r5=()=>{const{t:e}=ct(),t=[e.stats.s1,e.stats.s2,e.stats.s3];return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        .about-grid-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 1px;
          background: rgba(255,255,255,0.08);
          pointer-events: none;
        }

        .about-shell {
          position: relative;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
          min-height: 900px;
          background: #000;
          overflow: hidden;
        }

        .about-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .about-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          display: block;
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        .about-bg::after {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              rgba(0,0,0,0.42) 0%,
              rgba(0,0,0,0.26) 24%,
              rgba(0,0,0,0.16) 52%,
              rgba(0,0,0,0.28) 100%
            ),
            linear-gradient(
              180deg,
              rgba(0,0,0,0.08) 0%,
              rgba(0,0,0,0.18) 100%
            );
        }

        .about-inner {
          position: relative;
          z-index: 2;
          min-height: 900px;
          display: flex;
          align-items: center;
          padding: 72px 86px;
        }

        .about-layout {
          width: 100%;
          display: grid;
          grid-template-columns: 320px minmax(0, 1fr);
          align-items: center;
          gap: 42px;
        }

        .about-stats-wrap {
          display: flex;
          align-items: center;
          min-height: 100%;
        }

        .about-stats {
          width: 100%;
          max-width: 326px;
        }

        .about-stat {
          padding: 30px 0 30px;
          border-bottom: 1px solid rgba(255,255,255,0.18);
        }

        .about-stat-value {
          margin: 0 0 22px;
          color: #f5f5f5;
          font-size: clamp(58px, 5vw, 78px);
          line-height: 0.9;
          font-weight: 400;
          letter-spacing: -0.055em;
        }

        .about-stat-label {
          margin: 0;
          color: rgba(255,255,255,0.95);
          font-size: 18px;
          line-height: 1.2;
          font-weight: 400;
        }

        .about-panel-wrap {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        .about-panel {
          position: relative;
          width: 100%;
          max-width: 620px;
          padding: 78px 64px 68px;
          background: rgba(120, 120, 124, 0.38);
          border: 1px solid rgba(255,255,255,0.05);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          box-shadow: 0 24px 70px rgba(0,0,0,0.20);
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        .about-panel::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 82%, rgba(255,90,31,0.12), transparent 24%);
          pointer-events: none;
        }

        .about-title {
          position: relative;
          z-index: 1;
          margin: 0 0 28px;
          color: #f4f4f4;
          font-size: clamp(40px, 4vw, 56px);
          line-height: 1.08;
          font-weight: 400;
          letter-spacing: -0.045em;
          text-align: center;
        }

        .about-copy {
          position: relative;
          z-index: 1;
          margin: 0 auto;
          max-width: 470px;
        }

        .about-desc {
          margin: 0;
          color: rgba(255,255,255,0.88);
          font-size: 15px;
          line-height: 1.62;
          font-weight: 400;
          text-align: center;
        }

        .about-desc + .about-desc {
          margin-top: 24px;
        }

        .about-cta-wrap {
          position: relative;
          z-index: 1;
          margin-top: 42px;
          display: flex;
          justify-content: center;
        }

        .about-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 220px;
          height: 50px;
          padding: 0 26px;
          border-radius: 3px;
          background: #ff5a1f;
          color: #ffffff;
          text-decoration: none;
          font-size: 15px;
          font-weight: 400;
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.08),
            inset 0 -1px 0 rgba(0,0,0,0.15),
            0 8px 16px rgba(255,90,31,0.16);
          transition: transform 0.18s ease, background 0.18s ease, box-shadow 0.18s ease;
        }

        .about-cta:hover {
          background: #ff6229;
          transform: translateY(-1px);
        }

        .about-cta:active {
          transform: translateY(1px);
        }

        @media (max-width: 1200px) {
          .about-inner {
            padding: 56px 48px;
          }

          .about-layout {
            grid-template-columns: 280px minmax(0, 1fr);
            gap: 30px;
          }

          .about-panel {
            max-width: 560px;
            padding: 62px 46px 54px;
          }
        }

        @media (max-width: 1024px) {
          .about-shell,
          .about-inner {
            min-height: auto;
          }

          .about-inner {
            padding: 40px 24px;
          }

          .about-layout {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .about-stats-wrap {
            align-items: stretch;
          }

          .about-stats {
            max-width: 100%;
          }

          .about-panel-wrap {
            justify-content: center;
          }

          .about-panel {
            max-width: 100%;
            padding: 48px 28px 42px;
          }

          .about-stat-value {
            font-size: 48px;
            margin-bottom: 14px;
          }
        }

        @media (max-width: 768px) {
          .about-shell {
            min-height: 100svh;
          }

          .about-bg img {
            height: 100%;
            min-height: 100svh;
            object-fit: cover;
            object-position: center top;
            transform: scale(1.08);
            transform-origin: center top;
          }

          .about-bg::after {
            background:
              linear-gradient(
                180deg,
                rgba(0,0,0,0.58) 0%,
                rgba(0,0,0,0.34) 28%,
                rgba(0,0,0,0.28) 100%
              );
          }

          .about-inner {
  min-height: 100svh;
  padding: 56px 16px 20px;
}

          .about-layout {
            gap: 32px;
          }

          .about-stat {
            padding: 18px 0 20px;
          }

          .about-stat-value {
            font-size: 40px;
            margin-bottom: 10px;
          }

          .about-stat-label {
            font-size: 16px;
          }

          .about-panel {
            padding: 34px 18px 30px;
            background: rgba(22, 22, 24, 0.72);
            backdrop-filter: none;
            -webkit-backdrop-filter: none;
            box-shadow: 0 14px 34px rgba(0,0,0,0.18);
          }

          .about-title {
            font-size: 34px;
            margin-bottom: 18px;
          }

          .about-desc {
            font-size: 14px;
          }

          .about-cta-wrap {
            margin-top: 28px;
          }

          .about-cta {
            min-width: 190px;
            height: 46px;
            font-size: 14px;
          }
        }

        @media (hover: none) and (pointer: coarse) {
          .about-cta:hover {
            transform: none;
            background: #ff5a1f;
          }
        }
      `}),c.jsxs("section",{id:"about",className:"relative bg-black py-0 text-white md:py-24",children:[c.jsxs("div",{className:"pointer-events-none absolute inset-0 z-0 md:hidden",children:[c.jsx("div",{className:"about-grid-line",style:{left:"4%",backgroundColor:"rgba(255,255,255,0.12)"}}),c.jsx("div",{className:"about-grid-line",style:{left:"50%",backgroundColor:"rgba(255,255,255,0.10)"}}),c.jsx("div",{className:"about-grid-line",style:{left:"96%",backgroundColor:"rgba(255,255,255,0.12)"}})]}),c.jsxs("div",{className:"pointer-events-none absolute inset-0 z-0 hidden md:block",children:[c.jsx("div",{className:"about-grid-line left-[7.5%]"}),c.jsx("div",{className:"about-grid-line left-[28.5%]"}),c.jsx("div",{className:"about-grid-line left-1/2"}),c.jsx("div",{className:"about-grid-line right-[28.5%]"}),c.jsx("div",{className:"about-grid-line right-[7.5%]"})]}),c.jsx("div",{className:"relative z-[2] mx-auto max-w-[1280px] px-6 md:px-10 lg:px-0",children:c.jsxs("div",{className:"about-shell",children:[c.jsx("div",{className:"about-bg",children:c.jsx("img",{src:n5,alt:"Technician inspection"})}),c.jsx("div",{className:"about-inner",children:c.jsxs("div",{className:"about-layout",children:[c.jsx("div",{className:"about-stats-wrap animate-on-scroll",children:c.jsx("div",{className:"about-stats",children:t.map((n,r)=>c.jsxs("div",{className:"about-stat",style:{transitionDelay:`${r*80}ms`},children:[c.jsx("p",{className:"about-stat-value",children:n.val}),c.jsx("p",{className:"about-stat-label",children:n.label})]},r))})}),c.jsx("div",{className:"about-panel-wrap animate-on-scroll",style:{transitionDelay:"140ms"},children:c.jsxs("div",{className:"about-panel",children:[c.jsxs("h2",{className:"about-title",children:[e.about.title1,c.jsx("br",{}),e.about.title2]}),c.jsxs("div",{className:"about-copy",children:[c.jsx("p",{className:"about-desc",children:e.about.desc1}),c.jsx("p",{className:"about-desc",children:e.about.desc2})]}),c.jsx("div",{className:"about-cta-wrap",children:c.jsx("a",{href:"#contact",className:"about-cta",children:e.about.cta})})]})})]})})]})})]})]})},i5="https://script.google.com/macros/s/AKfycbw2q5oaLuh1ZdjLGDRL_9xEA4dtGhAx-FIntsZHz52MCy_8ibpb8TJxGeX5LHzf70qk/exec",o5=()=>{const{t:e}=ct(),[t,n]=b.useState({name:"",phone:"",service:"",time:"",preferredDate:"",message:""}),[r,i]=b.useState(!1),[o,s]=b.useState(!1),a=["11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00"],l=e.services.items.map(d=>d.name),u=b.useMemo(()=>{const d=new Date,p=d.getFullYear(),w=String(d.getMonth()+1).padStart(2,"0"),v=String(d.getDate()).padStart(2,"0");return`${p}-${w}-${v}`},[]),f=t.service||t.time?"#f4f4f4":"rgba(255,255,255,0.42)",h=async d=>{if(d.preventDefault(),!t.name||!t.phone||!t.service||!t.time||!t.preferredDate){alert(e.form.requiredAlert);return}try{i(!0),await fetch(i5,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify({name:t.name,phone:t.phone,service:t.service,time:t.time,preferredDate:t.preferredDate,message:t.message})}),n({name:"",phone:"",service:"",time:"",preferredDate:"",message:""}),s(!0)}catch(p){console.error("Submit error:",p),alert(e.form.errorAlert)}finally{i(!1)}};return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        .contact-grid-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 1px;
          background: rgba(255,255,255,0.08);
          pointer-events: none;
        }

        .contact-shell {
          position: relative;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
          border: 1px solid rgba(255,255,255,0.1);
          background: #030303;
          overflow: hidden;
        }

        .contact-shell::before {
          content: '';
          position: absolute;
          left: -120px;
          bottom: -120px;
          width: 360px;
          height: 360px;
          background: radial-gradient(
            circle,
            rgba(255,90,31,0.16) 0%,
            rgba(255,90,31,0.07) 30%,
            transparent 70%
          );
          pointer-events: none;
          z-index: 0;
        }

        .contact-left {
          position: relative;
          z-index: 2;
          min-height: 760px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 72px 48px;
        }

        .contact-left-inner {
          width: 100%;
          max-width: 520px;
          text-align: center;
        }

        .contact-logo {
          display: flex;
          justify-content: center;
          margin-bottom: 34px;
        }

        .contact-title {
          color: #f5f5f5;
          font-size: clamp(44px, 4.4vw, 68px);
          line-height: 1.06;
          font-weight: 400;
          letter-spacing: -0.05em;
          margin: 0 0 26px;
        }

        .contact-desc {
          max-width: 470px;
          margin: 0 auto;
          color: rgba(255,255,255,0.76);
          font-size: 17px;
          line-height: 1.55;
          font-weight: 400;
        }

        .contact-actions {
          margin-top: 38px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 22px;
        }

        .contact-primary-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 220px;
          height: 54px;
          padding: 0 28px;
          border-radius: 4px;
          background: #ff5a1f;
          color: #fff;
          text-decoration: none;
          font-size: 16px;
          font-weight: 400;
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.08),
            inset 0 -1px 0 rgba(0,0,0,0.15),
            0 8px 16px rgba(255,90,31,0.16);
          transition: transform 0.18s ease, background 0.18s ease;
        }

        .contact-primary-btn:hover {
          background: #ff6229;
          transform: translateY(-1px);
        }

        .contact-primary-btn:active {
          transform: translateY(1px);
        }

        .contact-phone-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          min-width: 220px;
          height: 54px;
          padding: 0 26px;
          border-radius: 4px;
          border: 1px solid rgba(255,255,255,0.72);
          background: transparent;
          color: #f5f5f5;
          text-decoration: none;
          font-size: 16px;
          font-weight: 400;
          transition: transform 0.18s ease, background 0.18s ease;
        }

        .contact-phone-btn:hover {
          background: rgba(255,255,255,0.04);
          transform: translateY(-1px);
        }

        .contact-phone-btn:active {
          transform: translateY(1px);
        }

        .contact-right {
          position: relative;
          z-index: 2;
          min-height: 760px;
          padding: 52px 48px 48px;
          border-left: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.01);
        }

        .contact-form-title {
          color: #f5f5f5;
          font-size: 22px;
          line-height: 1.2;
          font-weight: 400;
          margin: 0 0 28px;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .contact-field {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .contact-label {
          color: rgba(255,255,255,0.94);
          font-size: 15px;
          line-height: 1.2;
          font-weight: 400;
        }

        .contact-label .required {
          color: #ff5a1f;
        }

        .contact-input,
        .contact-select,
        .contact-textarea,
        .contact-date {
          width: 100%;
          border: 0;
          outline: none;
          background: #0d0d0f;
          color: #f4f4f4;
          font-size: 16px;
          font-weight: 400;
          box-sizing: border-box;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.02);
        }

        .contact-input,
        .contact-select,
        .contact-date {
          height: 60px;
          padding: 0 18px;
        }

        .contact-textarea {
          min-height: 124px;
          padding: 16px 18px;
          resize: vertical;
        }

        .contact-input::placeholder,
        .contact-textarea::placeholder {
          color: rgba(255,255,255,0.28);
        }

        .contact-input:focus,
        .contact-select:focus,
        .contact-textarea:focus,
        .contact-date:focus {
          box-shadow: inset 0 0 0 1px rgba(255,90,31,0.45);
        }

        .contact-date {
          color-scheme: dark;
        }

        .contact-select-wrap {
          position: relative;
        }

        .contact-select {
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          padding-right: 52px;
        }

        .contact-select-icon {
          position: absolute;
          top: 50%;
          right: 16px;
          transform: translateY(-50%);
          pointer-events: none;
          color: rgba(255,255,255,0.55);
        }

        .contact-submit {
          width: 100%;
          height: 56px;
          margin-top: 2px;
          border: 0;
          border-radius: 14px;
          background: #f1f1f1;
          color: #161616;
          font-size: 18px;
          font-weight: 400;
          transition: transform 0.18s ease, opacity 0.18s ease;
        }

        .contact-submit:hover {
          transform: translateY(-1px);
          opacity: 0.97;
        }

        .contact-submit:active {
          transform: translateY(1px);
        }

        .contact-submit:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }

        .success-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          background: rgba(0,0,0,0.72);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .success-modal {
          position: relative;
          width: min(100%, 460px);
          border: 1px solid rgba(255,255,255,0.12);
          background:
            radial-gradient(circle at 50% 0%, rgba(255,90,31,0.18), transparent 45%),
            linear-gradient(180deg, #090909 0%, #030303 100%);
          padding: 42px 30px 30px;
          text-align: center;
          box-shadow: 0 24px 80px rgba(0,0,0,0.48);
          overflow: hidden;
        }

        .success-modal::before {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          height: 2px;
          background: #ff5a1f;
        }

        .success-close {
          position: absolute;
          top: 14px;
          right: 14px;
          width: 36px;
          height: 36px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.03);
          color: rgba(255,255,255,0.82);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: background 0.18s ease, color 0.18s ease;
        }

        .success-close:hover {
          background: rgba(255,255,255,0.08);
          color: #fff;
        }

        .success-icon {
          width: 68px;
          height: 68px;
          margin: 0 auto 22px;
          border: 1px solid rgba(255,90,31,0.42);
          background: rgba(255,90,31,0.1);
          color: #ff5a1f;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .success-title {
          margin: 0 0 12px;
          color: #f5f5f5;
          font-size: 30px;
          line-height: 1.08;
          font-weight: 400;
          letter-spacing: -0.04em;
        }

        .success-desc {
          max-width: 360px;
          margin: 0 auto 26px;
          color: rgba(255,255,255,0.68);
          font-size: 15px;
          line-height: 1.55;
        }

        .success-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 50px;
          border: 0;
          border-radius: 4px;
          background: #ff5a1f;
          color: #fff;
          font-size: 16px;
          font-weight: 400;
          transition: transform 0.18s ease, background 0.18s ease;
        }

        .success-btn:hover {
          background: #ff6229;
          transform: translateY(-1px);
        }

        .success-btn:active {
          transform: translateY(1px);
        }

        @media (max-width: 1200px) {
          .contact-left,
          .contact-right {
            min-height: 700px;
          }

          .contact-left {
            padding: 56px 32px;
          }

          .contact-right {
            padding: 42px 30px 36px;
          }
        }

        @media (max-width: 1024px) {
          .contact-right {
            border-left: 0;
            border-top: 1px solid rgba(255,255,255,0.08);
          }

          .contact-left,
          .contact-right {
            min-height: auto;
          }

          .contact-left {
            padding: 56px 24px;
          }

          .contact-right {
            padding: 36px 24px 28px;
          }

          .contact-title {
            font-size: 48px;
          }
        }

        @media (max-width: 768px) {
          .contact-left {
            padding: 44px 16px;
          }

          .contact-right {
            padding: 28px 16px 20px;
          }

          .contact-title {
            font-size: 36px;
          }

          .contact-desc {
            font-size: 15px;
          }

          .contact-actions {
            gap: 14px;
          }

          .contact-primary-btn,
          .contact-phone-btn {
            min-width: 190px;
            height: 48px;
            font-size: 15px;
          }

          .contact-input,
          .contact-select,
          .contact-date {
            height: 54px;
            font-size: 15px;
          }

          .contact-textarea {
            min-height: 110px;
            font-size: 15px;
          }

          .contact-submit {
            height: 52px;
            font-size: 16px;
            border-radius: 12px;
          }

          .success-modal {
            padding: 40px 22px 24px;
          }

          .success-title {
            font-size: 27px;
          }
        }
      `}),c.jsxs("section",{id:"contact",className:"relative bg-black py-24 text-white",children:[c.jsxs("div",{className:"pointer-events-none absolute inset-0 z-0 md:hidden",children:[c.jsx("div",{className:"contact-grid-line",style:{left:"4%",backgroundColor:"rgba(255,255,255,0.12)"}}),c.jsx("div",{className:"contact-grid-line",style:{left:"50%",backgroundColor:"rgba(255,255,255,0.10)"}}),c.jsx("div",{className:"contact-grid-line",style:{left:"96%",backgroundColor:"rgba(255,255,255,0.12)"}})]}),c.jsxs("div",{className:"pointer-events-none absolute inset-0 z-0 hidden md:block",children:[c.jsx("div",{className:"contact-grid-line left-[7.5%]"}),c.jsx("div",{className:"contact-grid-line left-[28.5%]"}),c.jsx("div",{className:"contact-grid-line left-1/2"}),c.jsx("div",{className:"contact-grid-line right-[28.5%]"}),c.jsx("div",{className:"contact-grid-line right-[7.5%]"})]}),c.jsx("div",{className:"relative z-[2] mx-auto max-w-[1280px] px-[4%] md:px-10 lg:px-0",children:c.jsx("div",{className:"contact-shell",children:c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2",children:[c.jsx("div",{className:"contact-left animate-on-scroll",children:c.jsxs("div",{className:"contact-left-inner",children:[c.jsx("div",{className:"contact-logo",children:c.jsxs("svg",{width:"74",height:"46",viewBox:"0 0 74 46",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("path",{d:"M23 0H51L57 12H17L23 0Z",fill:"#FF5A1F"}),c.jsx("path",{d:"M7 12H31L37 23H13L7 12Z",fill:"#FF5A1F"}),c.jsx("path",{d:"M43 12H67L61 23H37L43 12Z",fill:"#FF5A1F"}),c.jsx("path",{d:"M17 23H57L51 35H23L17 23Z",fill:"#FF5A1F"})]})}),c.jsx("h2",{className:"contact-title",children:e.cta.title}),c.jsx("p",{className:"contact-desc",children:e.cta.desc}),c.jsxs("div",{className:"contact-actions",children:[c.jsx("a",{href:"#contact",className:"contact-primary-btn",children:e.cta.bookNow}),c.jsxs("a",{href:"tel:+48577472788",className:"contact-phone-btn",children:[c.jsx(Dm,{className:"h-5 w-5"}),c.jsx("span",{children:e.cta.phone})]})]})]})}),c.jsxs("div",{className:"contact-right animate-on-scroll",style:{transitionDelay:"150ms"},children:[c.jsx("h3",{className:"contact-form-title",children:e.form.title}),c.jsxs("form",{className:"contact-form",onSubmit:h,children:[c.jsxs("div",{className:"contact-field",children:[c.jsxs("label",{className:"contact-label",children:[e.form.name,c.jsx("span",{className:"required",children:"*"})]}),c.jsx("input",{type:"text",placeholder:e.form.namePlaceholder,value:t.name,onChange:d=>n({...t,name:d.target.value}),className:"contact-input"})]}),c.jsxs("div",{className:"contact-field",children:[c.jsxs("label",{className:"contact-label",children:[e.form.phone,c.jsx("span",{className:"required",children:"*"})]}),c.jsx("input",{type:"tel",placeholder:e.form.phonePlaceholder,value:t.phone,onChange:d=>n({...t,phone:d.target.value}),className:"contact-input"})]}),c.jsxs("div",{className:"contact-field",children:[c.jsxs("label",{className:"contact-label",children:[e.form.services,c.jsx("span",{className:"required",children:"*"})]}),c.jsxs("div",{className:"contact-select-wrap",children:[c.jsxs("select",{value:t.service,onChange:d=>n({...t,service:d.target.value}),className:"contact-select",style:{color:f},children:[c.jsx("option",{value:"",children:e.form.select}),l.map(d=>c.jsx("option",{value:d,children:d},d))]}),c.jsx(rf,{className:"contact-select-icon h-5 w-5"})]})]}),c.jsxs("div",{className:"contact-field",children:[c.jsxs("label",{className:"contact-label",children:[e.form.packages,c.jsx("span",{className:"required",children:"*"})]}),c.jsxs("div",{className:"contact-select-wrap",children:[c.jsxs("select",{value:t.time,onChange:d=>n({...t,time:d.target.value}),className:"contact-select",style:{color:f},children:[c.jsx("option",{value:"",children:e.form.select}),a.map(d=>c.jsx("option",{value:d,children:d},d))]}),c.jsx(rf,{className:"contact-select-icon h-5 w-5"})]})]}),c.jsxs("div",{className:"contact-field",children:[c.jsxs("label",{className:"contact-label",children:[e.form.preferredDate,c.jsx("span",{className:"required",children:"*"})]}),c.jsx("input",{type:"date",min:u,value:t.preferredDate,onChange:d=>n({...t,preferredDate:d.target.value}),className:"contact-date"})]}),c.jsxs("div",{className:"contact-field",children:[c.jsx("label",{className:"contact-label",children:e.form.message}),c.jsx("textarea",{rows:4,placeholder:e.form.messagePlaceholder,value:t.message,onChange:d=>n({...t,message:d.target.value}),className:"contact-textarea"})]}),c.jsx("button",{type:"submit",className:"contact-submit",disabled:r,children:r?e.form.sending:e.form.submit})]})]})]})})})]}),o&&c.jsx("div",{className:"success-overlay",onClick:()=>s(!1),children:c.jsxs("div",{className:"success-modal",onClick:d=>d.stopPropagation(),children:[c.jsx("button",{type:"button",className:"success-close",onClick:()=>s(!1),"aria-label":e.form.successClose,children:c.jsx(Fm,{className:"h-5 w-5"})}),c.jsx("div",{className:"success-icon",children:c.jsx(o1,{className:"h-9 w-9 stroke-[1.5]"})}),c.jsx("h3",{className:"success-title",children:e.form.successTitle}),c.jsx("p",{className:"success-desc",children:e.form.successDesc}),c.jsx("button",{type:"button",className:"success-btn",onClick:()=>s(!1),children:e.form.successClose})]})})]})},gu=()=>{const{t:e}=ct(),t=[{label:e.footer.links.home,href:"#home"},{label:e.footer.links.about,href:"#about"},{label:e.footer.links.services,href:"#services"},{label:e.footer.links.pricing,href:"#pricing"},{label:e.footer.links.contact,href:"#contact"}],n=e.services.items.map(r=>r.name);return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        .footer-grid-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 1px;
          background: rgba(255,255,255,0.08);
          pointer-events: none;
        }

        .footer-shell {
          position: relative;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
          border: 1px solid rgba(255,255,255,0.10);
          background: #030303;
          overflow: hidden;
        }

        .footer-main {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1.3fr 0.8fr 0.9fr 1fr;
          gap: 60px;
          padding: 78px 38px 86px;
        }

        .footer-bottom {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 28px 38px 34px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        .footer-logo {
          display: flex;
          align-items: center;
          margin-bottom: 42px;
        }

        .footer-logo-image {
          display: block;
          width: auto;
          height: 58px;
          object-fit: contain;
        }

        .footer-copy {
          max-width: 360px;
          color: rgba(255,255,255,0.76);
          font-size: 16px;
          line-height: 1.62;
          font-weight: 400;
          margin: 0 0 42px;
        }

        .footer-socials {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .footer-social {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #ff5a1f;
          transition: transform 0.18s ease, opacity 0.18s ease;
        }

        .footer-social:hover {
          transform: translateY(-1px);
          opacity: 0.9;
        }

        .footer-title {
          color: #f4f4f4;
          font-size: 18px;
          line-height: 1.2;
          font-weight: 400;
          margin: 0 0 28px;
        }

        .footer-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .footer-link,
        .footer-text {
          color: rgba(255,255,255,0.76);
          font-size: 16px;
          line-height: 1.35;
          font-weight: 400;
          text-decoration: none;
          transition: color 0.18s ease;
        }

        .footer-link:hover {
          color: #ffffff;
        }

        .footer-contact-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .footer-contact-icon {
          color: #ff5a1f;
          flex: 0 0 auto;
          margin-top: 1px;
        }

        .footer-meta {
          color: rgba(255,255,255,0.72);
          font-size: 16px;
          line-height: 1.3;
          font-weight: 400;
          margin: 0;
        }

        .footer-bottom-copy {
          color: rgba(255,255,255,0.72);
          font-size: 15px;
          line-height: 1.2;
          font-weight: 400;
          margin: 0;
        }

        .footer-bottom-links {
          display: flex;
          align-items: center;
          gap: 34px;
          flex-wrap: wrap;
        }

        .footer-bottom-link {
          color: rgba(255,255,255,0.78);
          text-decoration: none;
          font-size: 15px;
          line-height: 1.2;
          font-weight: 400;
          transition: color 0.18s ease;
        }

        .footer-bottom-link:hover {
          color: #ffffff;
        }

        @media (max-width: 1200px) {
          .footer-main {
            grid-template-columns: 1.2fr 0.9fr 1fr 1fr;
            gap: 40px;
            padding: 64px 28px 72px;
          }

          .footer-bottom {
            padding: 24px 28px 28px;
          }
        }

        @media (max-width: 1024px) {
          .footer-main {
            grid-template-columns: 1fr 1fr;
            gap: 42px 28px;
          }

          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 768px) {
          .footer-main {
            grid-template-columns: 1fr;
            gap: 34px;
            padding: 42px 18px 46px;
          }

          .footer-bottom {
            padding: 20px 18px 24px;
            gap: 16px;
          }

          .footer-logo-image {
            height: 46px;
          }

          .footer-copy,
          .footer-link,
          .footer-text,
          .footer-meta {
            font-size: 15px;
          }

          .footer-bottom-copy,
          .footer-bottom-link {
            font-size: 14px;
          }

          .footer-bottom-links {
            gap: 18px;
          }
        }
      `}),c.jsxs("footer",{className:"relative bg-black py-24 text-white",children:[c.jsxs("div",{className:"pointer-events-none absolute inset-0 z-0 md:hidden",children:[c.jsx("div",{className:"footer-grid-line",style:{left:"4%",backgroundColor:"rgba(255,255,255,0.12)"}}),c.jsx("div",{className:"footer-grid-line",style:{left:"50%",backgroundColor:"rgba(255,255,255,0.10)"}}),c.jsx("div",{className:"footer-grid-line",style:{left:"96%",backgroundColor:"rgba(255,255,255,0.12)"}})]}),c.jsxs("div",{className:"pointer-events-none absolute inset-0 z-0 hidden md:block",children:[c.jsx("div",{className:"footer-grid-line left-[7.5%]"}),c.jsx("div",{className:"footer-grid-line left-[28.5%]"}),c.jsx("div",{className:"footer-grid-line left-1/2"}),c.jsx("div",{className:"footer-grid-line right-[28.5%]"}),c.jsx("div",{className:"footer-grid-line right-[7.5%]"})]}),c.jsx("div",{className:"relative z-[2] mx-auto max-w-[1280px] px-[4%] md:px-10 lg:px-0",children:c.jsxs("div",{className:"footer-shell",children:[c.jsxs("div",{className:"footer-main",children:[c.jsxs("div",{children:[c.jsx("div",{className:"footer-logo",children:c.jsx("img",{src:la,alt:"El-Magic",className:"footer-logo-image"})}),c.jsx("p",{className:"footer-copy",children:e.footer.copy}),c.jsxs("div",{className:"footer-socials",children:[c.jsx("a",{href:"#",className:"footer-social","aria-label":"Facebook",children:c.jsx(l1,{className:"h-6 w-6 stroke-[1.8]"})}),c.jsx("a",{href:"#",className:"footer-social","aria-label":"Instagram",children:c.jsx(u1,{className:"h-6 w-6 stroke-[1.8]"})})]})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"footer-title",children:e.footer.quickLinks}),c.jsx("ul",{className:"footer-list",children:t.map(r=>c.jsx("li",{children:c.jsx("a",{href:r.href,className:"footer-link",children:r.label})},r.label))})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"footer-title",children:e.footer.servicesTitle}),c.jsx("ul",{className:"footer-list",children:n.map(r=>c.jsx("li",{children:c.jsx("a",{href:"#services",className:"footer-link",children:r})},r))})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"footer-title",children:e.footer.contactInfo}),c.jsxs("ul",{className:"footer-contact-list",children:[c.jsxs("li",{className:"footer-contact-item",children:[c.jsx(Dm,{className:"footer-contact-icon h-6 w-6 stroke-[1.8]"}),c.jsx("p",{className:"footer-meta",children:"+48 577 472 788"})]}),c.jsxs("li",{className:"footer-contact-item",children:[c.jsx(d1,{className:"footer-contact-icon h-6 w-6 stroke-[1.8]"}),c.jsx("p",{className:"footer-meta",children:"ekimyans@gmail.com"})]}),c.jsxs("li",{className:"footer-contact-item",children:[c.jsx(f1,{className:"footer-contact-icon h-6 w-6 stroke-[1.8]"}),c.jsxs("p",{className:"footer-meta",children:["Wrocław,",c.jsx("br",{}),"Sułowska 19A"]})]})]})]})]}),c.jsxs("div",{className:"footer-bottom",children:[c.jsxs("p",{className:"footer-bottom-copy",children:["© 2026 El-Magic. ",e.footer.rights]}),c.jsxs("div",{className:"footer-bottom-links",children:[c.jsx("a",{href:"/privacy-policy",className:"footer-bottom-link",children:e.footer.privacy}),c.jsx("a",{href:"/terms-of-service",className:"footer-bottom-link",children:e.footer.terms})]})]})]})})]})]})},s5=()=>(b.useEffect(()=>{const e=new IntersectionObserver(r=>{r.forEach(i=>{i.isIntersecting&&i.target.classList.add("visible")})},{threshold:.1,rootMargin:"0px 0px -20px 0px"}),t=()=>{document.querySelectorAll(".animate-on-scroll").forEach(r=>e.observe(r))};t();const n=setInterval(t,1e3);return()=>{e.disconnect(),clearInterval(n)}},[]),c.jsxs("div",{className:"bg-background text-foreground min-h-screen relative",children:[c.jsx(mu,{}),c.jsx($b,{}),c.jsx(Wb,{}),c.jsx(Gb,{}),c.jsx(Jb,{}),c.jsx(e5,{}),c.jsx(t5,{}),c.jsx(r5,{}),c.jsx(o5,{}),c.jsx(gu,{})]})),a5=()=>{const e=sm();return b.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",e.pathname)},[e.pathname]),c.jsx("div",{className:"flex min-h-screen items-center justify-center bg-muted",children:c.jsxs("div",{className:"text-center",children:[c.jsx("h1",{className:"mb-4 text-4xl font-bold",children:"404"}),c.jsx("p",{className:"mb-4 text-xl text-muted-foreground",children:"Oops! Page not found"}),c.jsx("a",{href:"/",className:"text-primary underline hover:text-primary/90",children:"Return to Home"})]})})},l5=()=>{const{lang:e}=ct(),t={en:{eyebrow:"Legal Information",title:"Privacy Policy",updated:"Last updated: 2026",intro:"This Privacy Policy explains how El-Magic collects, uses and protects personal data when you use our website, contact us or book automotive services.",back:"Back to Home",sections:[{title:"1. Data Controller",text:"The controller of your personal data is El-Magic, located at Sułowska 19A, Wrocław, Poland. You can contact us by e-mail at ekimyans@gmail.com or by phone at +48 577 472 788."},{title:"2. What Data We Collect",text:"We may collect personal data that you voluntarily provide through the contact form, phone, e-mail or social media. This may include your name, phone number, selected service, preferred date and time, message content and vehicle-related information if you provide it."},{title:"3. Why We Use Your Data",text:"We use your data to respond to inquiries, confirm bookings, prepare service details and provide services such as computer diagnostics, car electronics repair, chip tuning, Android radio installation, CarPlay / Android Auto modules, rear camera installation, car audio installation and interior soundproofing."},{title:"4. Legal Basis",text:"We process your data to take steps before providing a service, to perform a service, to respond to your request, and where necessary based on our legitimate interest in communicating with customers. In some cases, we may process data based on your consent."},{title:"5. Contact Form",text:"When you submit the contact form, you provide the information needed to process your request. Required fields are necessary so we can contact you and arrange the service."},{title:"6. Sharing Data",text:"We do not sell your personal data. Your data may be shared only with technical service providers that help us operate the website, contact form, hosting, e-mail or related tools."},{title:"7. Data Retention",text:"We keep your data only as long as necessary to handle your inquiry, provide the service, maintain communication history and protect possible legal claims."},{title:"8. Your Rights",text:"You have the right to access your data, correct it, request deletion, restrict processing, object to processing, request data portability and withdraw consent where processing is based on consent."},{title:"9. Cookies and Technical Data",text:"Our website may use basic cookies and technical data necessary for proper operation, security and improving the user experience. If analytical or marketing tools are used, this should be described in a separate cookies section."},{title:"10. Data Security",text:"We apply appropriate technical and organizational measures to protect personal data against unauthorized access, loss, alteration or disclosure."},{title:"11. Changes to This Policy",text:"We may update this Privacy Policy when our website, services or legal requirements change. The current version will always be available on this page."}]},pl:{eyebrow:"Informacje prawne",title:"Polityka Prywatności",updated:"Ostatnia aktualizacja: 2026",intro:"Niniejsza Polityka Prywatności wyjaśnia, w jaki sposób El-Magic zbiera, wykorzystuje i chroni dane osobowe podczas korzystania ze strony, kontaktu z nami lub rezerwacji usług.",back:"Wróć na stronę główną",sections:[{title:"1. Administrator danych",text:"Administratorem danych osobowych jest El-Magic, ul. Sułowska 19A, Wrocław, Polska. Możesz skontaktować się z nami pod adresem e-mail: ekimyans@gmail.com lub telefonicznie: +48 577 472 788."},{title:"2. Jakie dane zbieramy",text:"Możemy zbierać dane osobowe, które dobrowolnie przekazujesz przez formularz kontaktowy, telefon, e-mail lub media społecznościowe. Mogą to być: imię, numer telefonu, wybrana usługa, preferowana data i godzina wizyty, treść wiadomości oraz informacje o pojeździe, jeśli je podasz."},{title:"3. W jakim celu używamy danych",text:"Dane wykorzystujemy do odpowiedzi na zapytania, potwierdzania rezerwacji, ustalania szczegółów usługi oraz realizacji usług takich jak diagnostyka komputerowa, naprawa elektroniki samochodowej, chip tuning, montaż radia Android, modułów CarPlay / Android Auto, kamer cofania, car audio oraz wyciszanie wnętrza."},{title:"4. Podstawa prawna",text:"Dane przetwarzamy w celu podjęcia działań przed wykonaniem usługi, realizacji usługi, odpowiedzi na zapytanie oraz na podstawie naszego prawnie uzasadnionego interesu polegającego na kontakcie z klientami. W niektórych przypadkach dane mogą być przetwarzane na podstawie zgody."},{title:"5. Formularz kontaktowy",text:"Wysyłając formularz kontaktowy, przekazujesz dane potrzebne do obsługi zgłoszenia. Pola wymagane są niezbędne, abyśmy mogli skontaktować się z Tobą i ustalić szczegóły wizyty."},{title:"6. Udostępnianie danych",text:"Nie sprzedajemy danych osobowych. Dane mogą być przekazywane wyłącznie dostawcom technicznym, którzy pomagają nam obsługiwać stronę internetową, formularz kontaktowy, hosting, pocztę e-mail lub inne narzędzia techniczne."},{title:"7. Okres przechowywania danych",text:"Dane przechowujemy tylko tak długo, jak jest to potrzebne do obsługi zapytania, wykonania usługi, zachowania historii kontaktu oraz zabezpieczenia ewentualnych roszczeń."},{title:"8. Twoje prawa",text:"Masz prawo dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, wniesienia sprzeciwu, przenoszenia danych oraz wycofania zgody, jeśli przetwarzanie odbywa się na podstawie zgody."},{title:"9. Cookies i dane techniczne",text:"Nasza strona może korzystać z podstawowych plików cookies i danych technicznych potrzebnych do prawidłowego działania strony, bezpieczeństwa oraz poprawy wygody korzystania z serwisu. Jeśli używane są narzędzia analityczne lub marketingowe, powinny zostać opisane w osobnej sekcji cookies."},{title:"10. Bezpieczeństwo danych",text:"Stosujemy odpowiednie środki techniczne i organizacyjne, aby chronić dane osobowe przed nieuprawnionym dostępem, utratą, zmianą lub ujawnieniem."},{title:"11. Zmiany Polityki Prywatności",text:"Możemy aktualizować niniejszą Politykę Prywatności, jeśli zmieni się działanie strony, zakres usług lub wymagania prawne. Aktualna wersja będzie zawsze dostępna na tej stronie."}]},ua:{eyebrow:"Правова інформація",title:"Політика Конфіденційності",updated:"Останнє оновлення: 2026",intro:"Ця Політика Конфіденційності пояснює, як El-Magic збирає, використовує та захищає персональні дані під час користування сайтом, звернення до нас або бронювання послуг.",back:"Повернутися на головну",sections:[{title:"1. Адміністратор даних",text:"Адміністратором персональних даних є El-Magic, вул. Sułowska 19A, Вроцлав, Польща. Ви можете звʼязатися з нами електронною поштою: ekimyans@gmail.com або телефоном: +48 577 472 788."},{title:"2. Які дані ми збираємо",text:"Ми можемо збирати персональні дані, які ви добровільно надаєте через контактну форму, телефон, e-mail або соціальні мережі. Це може бути імʼя, номер телефону, вибрана послуга, бажана дата й час візиту, текст повідомлення та інформація про автомобіль, якщо ви її надаєте."},{title:"3. Для чого ми використовуємо дані",text:"Ми використовуємо дані для відповіді на запити, підтвердження запису, уточнення деталей послуги та надання таких послуг, як компʼютерна діагностика, ремонт автоелектроніки, чип-тюнінг, встановлення Android-магнітол, модулів CarPlay / Android Auto, камер заднього виду, car audio та шумоізоляція салону."},{title:"4. Правова підстава",text:"Ми обробляємо дані для підготовки до надання послуги, виконання послуги, відповіді на ваш запит, а також на підставі нашого законного інтересу у комунікації з клієнтами. У деяких випадках дані можуть оброблятися на підставі вашої згоди."},{title:"5. Контактна форма",text:"Надсилаючи контактну форму, ви передаєте дані, необхідні для обробки заявки. Обовʼязкові поля потрібні для того, щоб ми могли звʼязатися з вами та узгодити деталі візиту."},{title:"6. Передача даних",text:"Ми не продаємо персональні дані. Дані можуть передаватися лише технічним постачальникам, які допомагають нам обслуговувати сайт, контактну форму, хостинг, електронну пошту або інші технічні інструменти."},{title:"7. Строк зберігання даних",text:"Ми зберігаємо дані лише стільки, скільки потрібно для обробки запиту, надання послуги, збереження історії контакту та захисту можливих правових вимог."},{title:"8. Ваші права",text:"Ви маєте право на доступ до своїх даних, їх виправлення, видалення, обмеження обробки, заперечення проти обробки, перенесення даних та відкликання згоди, якщо обробка здійснюється на підставі згоди."},{title:"9. Cookies і технічні дані",text:"Наш сайт може використовувати базові cookies та технічні дані, необхідні для правильної роботи сайту, безпеки та покращення зручності користування. Якщо використовуються аналітичні або маркетингові інструменти, це має бути описано в окремому розділі cookies."},{title:"10. Безпека даних",text:"Ми застосовуємо відповідні технічні та організаційні заходи для захисту персональних даних від несанкціонованого доступу, втрати, зміни або розголошення."},{title:"11. Зміни Політики Конфіденційності",text:"Ми можемо оновлювати цю Політику Конфіденційності, якщо змінюється робота сайту, перелік послуг або правові вимоги. Актуальна версія завжди буде доступна на цій сторінці."}]}},n=t[e]??t.pl;return c.jsxs(c.Fragment,{children:[c.jsx(mu,{}),c.jsx("style",{children:`
        .privacy-grid-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 1px;
          background: rgba(255,255,255,0.08);
          pointer-events: none;
        }

        .privacy-shell {
          position: relative;
          border: 1px solid rgba(255,255,255,0.1);
          background:
            radial-gradient(circle at 74% 0%, rgba(255,90,31,0.14), transparent 34%),
            linear-gradient(180deg, #050505 0%, #030303 100%);
          overflow: hidden;
        }

        .privacy-shell::before {
          content: '';
          position: absolute;
          left: -140px;
          top: -140px;
          width: 360px;
          height: 360px;
          background: radial-gradient(circle, rgba(255,90,31,0.14), transparent 68%);
          pointer-events: none;
        }

        .privacy-hero {
          position: relative;
          z-index: 2;
          padding: 120px 56px 64px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .privacy-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: rgba(255,255,255,0.58);
          font-size: 13px;
          line-height: 1;
          font-weight: 400;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin-bottom: 28px;
        }

        .privacy-eyebrow::before {
          content: '';
          width: 42px;
          height: 1px;
          background: #ff5a1f;
        }

        .privacy-title {
          max-width: 860px;
          margin: 0;
          color: #f5f5f5;
          font-size: clamp(48px, 7vw, 92px);
          line-height: 0.94;
          font-weight: 400;
          letter-spacing: -0.06em;
        }

        .privacy-updated {
          margin: 26px 0 0;
          color: rgba(255,255,255,0.52);
          font-size: 15px;
          line-height: 1.4;
        }

        .privacy-intro {
          max-width: 760px;
          margin: 34px 0 0;
          color: rgba(255,255,255,0.76);
          font-size: 20px;
          line-height: 1.55;
          font-weight: 400;
        }

        .privacy-content {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 280px minmax(0, 1fr);
          gap: 64px;
          padding: 64px 56px 76px;
        }

        .privacy-side {
          position: sticky;
          top: 110px;
          align-self: start;
        }

        .privacy-logo {
          display: flex;
          align-items: center;
          margin-bottom: 28px;
        }

        .privacy-logo-image {
          display: block;
          width: auto;
          height: 42px;
          object-fit: contain;
        }

        .privacy-side-text {
          margin: 0 0 28px;
          color: rgba(255,255,255,0.62);
          font-size: 15px;
          line-height: 1.58;
        }

        .privacy-back {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 180px;
          height: 48px;
          padding: 0 22px;
          border-radius: 3px;
          background: #ff5a1f;
          color: #fff;
          text-decoration: none;
          font-size: 15px;
          font-weight: 400;
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.08),
            inset 0 -1px 0 rgba(0,0,0,0.15),
            0 8px 16px rgba(255,90,31,0.16);
          transition: transform 0.18s ease, background 0.18s ease;
        }

        .privacy-back:hover {
          background: #ff6229;
          transform: translateY(-1px);
        }

        .privacy-list {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .privacy-card {
          position: relative;
          padding: 30px 32px;
          border: 1px solid rgba(255,255,255,0.09);
          background: rgba(255,255,255,0.025);
          overflow: hidden;
        }

        .privacy-card::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: #ff5a1f;
          opacity: 0;
          transition: opacity 0.18s ease;
        }

        .privacy-card:hover::before {
          opacity: 1;
        }

        .privacy-card-title {
          margin: 0 0 14px;
          color: #f4f4f4;
          font-size: 22px;
          line-height: 1.2;
          font-weight: 400;
          letter-spacing: -0.03em;
        }

        .privacy-card-text {
          margin: 0;
          color: rgba(255,255,255,0.72);
          font-size: 16px;
          line-height: 1.68;
          font-weight: 400;
        }

        @media (max-width: 1024px) {
          .privacy-hero {
            padding: 110px 34px 54px;
          }

          .privacy-content {
            grid-template-columns: 1fr;
            gap: 42px;
            padding: 48px 34px 60px;
          }

          .privacy-side {
            position: relative;
            top: auto;
          }
        }

        @media (max-width: 768px) {
          .privacy-hero {
            padding: 108px 20px 44px;
          }

          .privacy-title {
            font-size: 48px;
          }

          .privacy-intro {
            font-size: 16px;
            line-height: 1.6;
          }

          .privacy-content {
            padding: 34px 20px 46px;
          }

          .privacy-card {
            padding: 24px 20px;
          }

          .privacy-card-title {
            font-size: 20px;
          }

          .privacy-card-text {
            font-size: 15px;
          }
        }
      `}),c.jsxs("main",{className:"relative min-h-screen bg-black pt-24 text-white",children:[c.jsxs("div",{className:"pointer-events-none absolute inset-0 z-0 md:hidden",children:[c.jsx("div",{className:"privacy-grid-line",style:{left:"4%",backgroundColor:"rgba(255,255,255,0.12)"}}),c.jsx("div",{className:"privacy-grid-line",style:{left:"50%",backgroundColor:"rgba(255,255,255,0.10)"}}),c.jsx("div",{className:"privacy-grid-line",style:{left:"96%",backgroundColor:"rgba(255,255,255,0.12)"}})]}),c.jsxs("div",{className:"pointer-events-none absolute inset-0 z-0 hidden md:block",children:[c.jsx("div",{className:"privacy-grid-line left-[7.5%]"}),c.jsx("div",{className:"privacy-grid-line left-[28.5%]"}),c.jsx("div",{className:"privacy-grid-line left-1/2"}),c.jsx("div",{className:"privacy-grid-line right-[28.5%]"}),c.jsx("div",{className:"privacy-grid-line right-[7.5%]"})]}),c.jsx("div",{className:"relative z-[2] mx-auto max-w-[1280px] px-[4%] pb-24 md:px-10 lg:px-0",children:c.jsxs("div",{className:"privacy-shell",children:[c.jsxs("section",{className:"privacy-hero",children:[c.jsx("div",{className:"privacy-eyebrow",children:n.eyebrow}),c.jsx("h1",{className:"privacy-title",children:n.title}),c.jsx("p",{className:"privacy-updated",children:n.updated}),c.jsx("p",{className:"privacy-intro",children:n.intro})]}),c.jsxs("section",{className:"privacy-content",children:[c.jsxs("aside",{className:"privacy-side",children:[c.jsx("div",{className:"privacy-logo",children:c.jsx("img",{src:la,alt:"El-Magic",className:"privacy-logo-image"})}),c.jsxs("p",{className:"privacy-side-text",children:["Wrocław, Sułowska 19A",c.jsx("br",{}),"+48 577 472 788",c.jsx("br",{}),"ekimyans@gmail.com"]}),c.jsx("a",{href:"/",className:"privacy-back",children:n.back})]}),c.jsx("div",{className:"privacy-list",children:n.sections.map(r=>c.jsxs("article",{className:"privacy-card",children:[c.jsx("h2",{className:"privacy-card-title",children:r.title}),c.jsx("p",{className:"privacy-card-text",children:r.text})]},r.title))})]})]})})]}),c.jsx(gu,{})]})},c5=()=>{const{lang:e}=ct(),t={en:{eyebrow:"Service Rules",title:"Terms of Service",updated:"Last updated: 2026",intro:"These Terms of Service explain the rules for using the El-Magic website, contacting us and booking automotive services.",back:"Back to Home",sections:[{title:"1. General Information",text:"This website is operated by El-Magic, located at Sułowska 19A, Wrocław, Poland. You can contact us by e-mail at ekimyans@gmail.com or by phone at +48 577 472 788."},{title:"2. Scope of Services",text:"El-Magic provides automotive services including computer diagnostics, car electronics repair, chip tuning, Android radio installation, CarPlay / Android Auto module installation, rear camera installation, car audio installation, interior soundproofing and related vehicle services."},{title:"3. Booking a Service",text:"You can book a service through the contact form, by phone, e-mail or social media. After receiving your request, we may contact you to confirm the details, selected service, preferred date and time, vehicle information and expected scope of work."},{title:"4. Prices",text:"Prices shown on the website are starting prices and are marked as “from”. The final price may depend on the vehicle model, technical condition, parts required, installation complexity and final scope of work. The final price is confirmed individually before the service is performed."},{title:"5. Customer Responsibilities",text:"The customer is responsible for providing correct contact details, accurate vehicle information and arriving at the agreed time. The customer should inform us about known vehicle issues, previous modifications or repairs that may affect the service."},{title:"6. Service Time",text:"Estimated service time may vary depending on the vehicle, type of service, technical condition, availability of parts and complexity of the work. We always try to complete services efficiently, but some work may require additional time."},{title:"7. Changes and Cancellations",text:"If you need to change or cancel your appointment, please contact us as early as possible. We reserve the right to reschedule a booking if necessary due to technical reasons, unavailable parts, delays or other circumstances beyond our control."},{title:"8. Vehicle Diagnostics and Results",text:"Diagnostic results are based on available vehicle data, visible symptoms and technical inspection. Some faults may require additional checks, testing or repair before the final cause can be confirmed."},{title:"9. Chip Tuning and Modifications",text:"Chip tuning and vehicle modifications are performed based on the vehicle condition and technical possibilities. The final result may vary depending on engine condition, software version, hardware, previous modifications and maintenance history."},{title:"10. Liability",text:"We provide services with care and professional attention. We are not responsible for hidden defects, previous improper repairs, unauthorized modifications, worn components or faults that were not visible before starting the service."},{title:"11. Website Content",text:"The information on this website is for general informational purposes. Photos, descriptions and prices are illustrative and do not constitute a final commercial offer unless confirmed individually."},{title:"12. Changes to These Terms",text:"We may update these Terms of Service if our website, services, prices or legal requirements change. The current version will always be available on this page."}]},pl:{eyebrow:"Zasady usług",title:"Regulamin",updated:"Ostatnia aktualizacja: 2026",intro:"Niniejszy Regulamin określa zasady korzystania ze strony El-Magic, kontaktu z nami oraz umawiania usług samochodowych.",back:"Wróć na stronę główną",sections:[{title:"1. Informacje ogólne",text:"Strona internetowa jest prowadzona przez El-Magic, ul. Sułowska 19A, Wrocław, Polska. Możesz skontaktować się z nami pod adresem e-mail: ekimyans@gmail.com lub telefonicznie: +48 577 472 788."},{title:"2. Zakres usług",text:"El-Magic świadczy usługi samochodowe, w tym diagnostykę komputerową, naprawę elektroniki samochodowej, chip tuning, montaż radia Android, montaż modułów CarPlay / Android Auto, montaż kamer cofania, montaż car audio, wyciszanie wnętrza oraz powiązane usługi przy pojazdach."},{title:"3. Umawianie wizyty",text:"Usługę można umówić przez formularz kontaktowy, telefon, e-mail lub media społecznościowe. Po otrzymaniu zgłoszenia możemy skontaktować się z Tobą w celu potwierdzenia szczegółów, wybranej usługi, preferowanej daty i godziny, informacji o pojeździe oraz przewidywanego zakresu prac."},{title:"4. Ceny",text:"Ceny podane na stronie są cenami początkowymi i oznaczone są jako “od”. Ostateczna cena może zależeć od modelu pojazdu, stanu technicznego, potrzebnych części, złożoności montażu oraz końcowego zakresu prac. Ostateczna cena jest potwierdzana indywidualnie przed wykonaniem usługi."},{title:"5. Obowiązki klienta",text:"Klient odpowiada za podanie prawidłowych danych kontaktowych, rzetelnych informacji o pojeździe oraz przybycie w ustalonym terminie. Klient powinien poinformować nas o znanych problemach pojazdu, wcześniejszych modyfikacjach lub naprawach, które mogą mieć wpływ na usługę."},{title:"6. Czas realizacji usługi",text:"Przewidywany czas realizacji może różnić się w zależności od pojazdu, rodzaju usługi, stanu technicznego, dostępności części oraz złożoności prac. Zawsze staramy się realizować usługi sprawnie, jednak niektóre prace mogą wymagać dodatkowego czasu."},{title:"7. Zmiana lub odwołanie wizyty",text:"Jeśli chcesz zmienić lub odwołać wizytę, skontaktuj się z nami możliwie jak najwcześniej. Zastrzegamy sobie prawo do zmiany terminu wizyty, jeśli będzie to konieczne z przyczyn technicznych, braku części, opóźnień lub innych okoliczności niezależnych od nas."},{title:"8. Diagnostyka i wyniki",text:"Wyniki diagnostyki opierają się na dostępnych danych pojazdu, widocznych objawach oraz kontroli technicznej. Niektóre usterki mogą wymagać dodatkowej weryfikacji, testów lub naprawy, zanim możliwe będzie potwierdzenie ostatecznej przyczyny problemu."},{title:"9. Chip tuning i modyfikacje",text:"Chip tuning oraz modyfikacje pojazdu wykonywane są z uwzględnieniem stanu technicznego auta i możliwości technicznych. Ostateczny rezultat może zależeć od stanu silnika, wersji oprogramowania, osprzętu, wcześniejszych modyfikacji oraz historii serwisowej."},{title:"10. Odpowiedzialność",text:"Usługi wykonujemy z należytą starannością i profesjonalnym podejściem. Nie odpowiadamy za ukryte wady, wcześniejsze nieprawidłowe naprawy, nieautoryzowane modyfikacje, zużyte elementy lub usterki, które nie były widoczne przed rozpoczęciem usługi."},{title:"11. Treści na stronie",text:"Informacje znajdujące się na stronie mają charakter ogólny i informacyjny. Zdjęcia, opisy oraz ceny mają charakter poglądowy i nie stanowią ostatecznej oferty handlowej, chyba że zostaną potwierdzone indywidualnie."},{title:"12. Zmiany Regulaminu",text:"Możemy aktualizować niniejszy Regulamin, jeśli zmieni się działanie strony, zakres usług, ceny lub wymagania prawne. Aktualna wersja będzie zawsze dostępna na tej stronie."}]},ua:{eyebrow:"Правила послуг",title:"Умови Використання",updated:"Останнє оновлення: 2026",intro:"Ці Умови Використання описують правила користування сайтом El-Magic, звʼязку з нами та бронювання автомобільних послуг.",back:"Повернутися на головну",sections:[{title:"1. Загальна інформація",text:"Сайт належить El-Magic, вул. Sułowska 19A, Вроцлав, Польща. Ви можете звʼязатися з нами електронною поштою: ekimyans@gmail.com або телефоном: +48 577 472 788."},{title:"2. Перелік послуг",text:"El-Magic надає автомобільні послуги, зокрема компʼютерну діагностику, ремонт автоелектроніки, чип-тюнінг, встановлення Android-магнітол, модулів CarPlay / Android Auto, камер заднього виду, car audio, шумоізоляцію салону та інші повʼязані роботи з автомобілями."},{title:"3. Запис на послугу",text:"Записатися можна через контактну форму, телефон, e-mail або соціальні мережі. Після отримання заявки ми можемо звʼязатися з вами для підтвердження деталей, вибраної послуги, бажаної дати й часу, інформації про автомобіль та орієнтовного обсягу робіт."},{title:"4. Ціни",text:"Ціни на сайті є стартовими та позначені як “від”. Остаточна ціна може залежати від моделі автомобіля, технічного стану, потрібних деталей, складності монтажу та фінального обсягу робіт. Остаточна ціна підтверджується індивідуально перед виконанням послуги."},{title:"5. Обовʼязки клієнта",text:"Клієнт відповідає за надання правильних контактних даних, достовірної інформації про автомобіль та прибуття в узгоджений час. Клієнт має повідомити нас про відомі проблеми авто, попередні модифікації або ремонти, які можуть вплинути на виконання послуги."},{title:"6. Час виконання послуги",text:"Орієнтовний час виконання може відрізнятися залежно від автомобіля, виду послуги, технічного стану, наявності деталей та складності робіт. Ми завжди намагаємося виконувати послуги оперативно, однак деякі роботи можуть потребувати додаткового часу."},{title:"7. Зміна або скасування запису",text:"Якщо вам потрібно змінити або скасувати запис, звʼяжіться з нами якомога раніше. Ми залишаємо за собою право перенести запис у разі технічних причин, відсутності деталей, затримок або інших обставин, що не залежать від нас."},{title:"8. Діагностика та результати",text:"Результати діагностики базуються на доступних даних автомобіля, видимих симптомах та технічній перевірці. Деякі несправності можуть потребувати додаткової перевірки, тестування або ремонту, перш ніж буде можливо підтвердити остаточну причину проблеми."},{title:"9. Чип-тюнінг та модифікації",text:"Чип-тюнінг та модифікації автомобіля виконуються з урахуванням технічного стану авто та технічних можливостей. Остаточний результат може залежати від стану двигуна, версії програмного забезпечення, обладнання, попередніх модифікацій та історії обслуговування."},{title:"10. Відповідальність",text:"Ми виконуємо послуги уважно та професійно. Ми не несемо відповідальності за приховані дефекти, попередні неякісні ремонти, неавторизовані модифікації, зношені компоненти або несправності, які не були видимі до початку роботи."},{title:"11. Інформація на сайті",text:"Інформація на сайті має загальний інформаційний характер. Фото, описи та ціни є орієнтовними й не є остаточною комерційною пропозицією, якщо це не підтверджено індивідуально."},{title:"12. Зміни Умов",text:"Ми можемо оновлювати ці Умови Використання, якщо змінюється робота сайту, перелік послуг, ціни або правові вимоги. Актуальна версія завжди буде доступна на цій сторінці."}]}},n=t[e]??t.pl;return c.jsxs(c.Fragment,{children:[c.jsx(mu,{}),c.jsx("style",{children:`
        .terms-grid-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 1px;
          background: rgba(255,255,255,0.08);
          pointer-events: none;
        }

        .terms-shell {
          position: relative;
          border: 1px solid rgba(255,255,255,0.1);
          background:
            radial-gradient(circle at 74% 0%, rgba(255,90,31,0.14), transparent 34%),
            linear-gradient(180deg, #050505 0%, #030303 100%);
          overflow: hidden;
        }

        .terms-shell::before {
          content: '';
          position: absolute;
          left: -140px;
          top: -140px;
          width: 360px;
          height: 360px;
          background: radial-gradient(circle, rgba(255,90,31,0.14), transparent 68%);
          pointer-events: none;
        }

        .terms-hero {
          position: relative;
          z-index: 2;
          padding: 120px 56px 64px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .terms-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: rgba(255,255,255,0.58);
          font-size: 13px;
          line-height: 1;
          font-weight: 400;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin-bottom: 28px;
        }

        .terms-eyebrow::before {
          content: '';
          width: 42px;
          height: 1px;
          background: #ff5a1f;
        }

        .terms-title {
          max-width: 860px;
          margin: 0;
          color: #f5f5f5;
          font-size: clamp(48px, 7vw, 92px);
          line-height: 0.94;
          font-weight: 400;
          letter-spacing: -0.06em;
        }

        .terms-updated {
          margin: 26px 0 0;
          color: rgba(255,255,255,0.52);
          font-size: 15px;
          line-height: 1.4;
        }

        .terms-intro {
          max-width: 760px;
          margin: 34px 0 0;
          color: rgba(255,255,255,0.76);
          font-size: 20px;
          line-height: 1.55;
          font-weight: 400;
        }

        .terms-content {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 280px minmax(0, 1fr);
          gap: 64px;
          padding: 64px 56px 76px;
        }

        .terms-side {
          position: sticky;
          top: 110px;
          align-self: start;
        }

        .terms-logo {
          display: flex;
          align-items: center;
          margin-bottom: 28px;
        }

        .terms-logo-image {
          display: block;
          width: auto;
          height: 42px;
          object-fit: contain;
        }

        .terms-side-text {
          margin: 0 0 28px;
          color: rgba(255,255,255,0.62);
          font-size: 15px;
          line-height: 1.58;
        }

        .terms-back {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 180px;
          height: 48px;
          padding: 0 22px;
          border-radius: 3px;
          background: #ff5a1f;
          color: #fff;
          text-decoration: none;
          font-size: 15px;
          font-weight: 400;
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.08),
            inset 0 -1px 0 rgba(0,0,0,0.15),
            0 8px 16px rgba(255,90,31,0.16);
          transition: transform 0.18s ease, background 0.18s ease;
        }

        .terms-back:hover {
          background: #ff6229;
          transform: translateY(-1px);
        }

        .terms-list {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .terms-card {
          position: relative;
          padding: 30px 32px;
          border: 1px solid rgba(255,255,255,0.09);
          background: rgba(255,255,255,0.025);
          overflow: hidden;
        }

        .terms-card::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: #ff5a1f;
          opacity: 0;
          transition: opacity 0.18s ease;
        }

        .terms-card:hover::before {
          opacity: 1;
        }

        .terms-card-title {
          margin: 0 0 14px;
          color: #f4f4f4;
          font-size: 22px;
          line-height: 1.2;
          font-weight: 400;
          letter-spacing: -0.03em;
        }

        .terms-card-text {
          margin: 0;
          color: rgba(255,255,255,0.72);
          font-size: 16px;
          line-height: 1.68;
          font-weight: 400;
        }

        @media (max-width: 1024px) {
          .terms-hero {
            padding: 110px 34px 54px;
          }

          .terms-content {
            grid-template-columns: 1fr;
            gap: 42px;
            padding: 48px 34px 60px;
          }

          .terms-side {
            position: relative;
            top: auto;
          }
        }

        @media (max-width: 768px) {
          .terms-hero {
            padding: 108px 20px 44px;
          }

          .terms-title {
            font-size: 48px;
          }

          .terms-intro {
            font-size: 16px;
            line-height: 1.6;
          }

          .terms-content {
            padding: 34px 20px 46px;
          }

          .terms-card {
            padding: 24px 20px;
          }

          .terms-card-title {
            font-size: 20px;
          }

          .terms-card-text {
            font-size: 15px;
          }
        }
      `}),c.jsxs("main",{className:"relative min-h-screen bg-black pt-24 text-white",children:[c.jsxs("div",{className:"pointer-events-none absolute inset-0 z-0 md:hidden",children:[c.jsx("div",{className:"terms-grid-line",style:{left:"4%",backgroundColor:"rgba(255,255,255,0.12)"}}),c.jsx("div",{className:"terms-grid-line",style:{left:"50%",backgroundColor:"rgba(255,255,255,0.10)"}}),c.jsx("div",{className:"terms-grid-line",style:{left:"96%",backgroundColor:"rgba(255,255,255,0.12)"}})]}),c.jsxs("div",{className:"pointer-events-none absolute inset-0 z-0 hidden md:block",children:[c.jsx("div",{className:"terms-grid-line left-[7.5%]"}),c.jsx("div",{className:"terms-grid-line left-[28.5%]"}),c.jsx("div",{className:"terms-grid-line left-1/2"}),c.jsx("div",{className:"terms-grid-line right-[28.5%]"}),c.jsx("div",{className:"terms-grid-line right-[7.5%]"})]}),c.jsx("div",{className:"relative z-[2] mx-auto max-w-[1280px] px-[4%] pb-24 md:px-10 lg:px-0",children:c.jsxs("div",{className:"terms-shell",children:[c.jsxs("section",{className:"terms-hero",children:[c.jsx("div",{className:"terms-eyebrow",children:n.eyebrow}),c.jsx("h1",{className:"terms-title",children:n.title}),c.jsx("p",{className:"terms-updated",children:n.updated}),c.jsx("p",{className:"terms-intro",children:n.intro})]}),c.jsxs("section",{className:"terms-content",children:[c.jsxs("aside",{className:"terms-side",children:[c.jsx("div",{className:"terms-logo",children:c.jsx("img",{src:la,alt:"El-Magic",className:"terms-logo-image"})}),c.jsxs("p",{className:"terms-side-text",children:["Wrocław, Sułowska 19A",c.jsx("br",{}),"+48 577 472 788",c.jsx("br",{}),"ekimyans@gmail.com"]}),c.jsx("a",{href:"/",className:"terms-back",children:n.back})]}),c.jsx("div",{className:"terms-list",children:n.sections.map(r=>c.jsxs("article",{className:"terms-card",children:[c.jsx("h2",{className:"terms-card-title",children:r.title}),c.jsx("p",{className:"terms-card-text",children:r.text})]},r.title))})]})]})})]}),c.jsx(gu,{})]})},u5=new Ly,d5=()=>c.jsx(Dy,{client:u5,children:c.jsx(_b,{children:c.jsxs(Ib,{children:[c.jsx(X1,{}),c.jsx(ew,{}),c.jsx(kx,{children:c.jsxs(xx,{children:[c.jsx(zi,{path:"/",element:c.jsx(s5,{})}),c.jsx(zi,{path:"*",element:c.jsx(a5,{})}),c.jsx(zi,{path:"/privacy-policy",element:c.jsx(l5,{})}),c.jsx(zi,{path:"/terms-of-service",element:c.jsx(c5,{})})]})})]})})});var xf="1.3.19";function Cg(e,t,n){return Math.max(e,Math.min(t,n))}function f5(e,t,n){return(1-n)*e+n*t}function p5(e,t,n,r){return f5(e,t,1-Math.exp(-n*r))}function h5(e,t){return(e%t+t)%t}var m5=class{constructor(){I(this,"isRunning",!1);I(this,"value",0);I(this,"from",0);I(this,"to",0);I(this,"currentTime",0);I(this,"lerp");I(this,"duration");I(this,"easing");I(this,"onUpdate")}advance(e){var n;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=e;const r=Cg(0,this.currentTime/this.duration,1);t=r>=1;const i=t?1:this.easing(r);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=p5(this.value,this.to,this.lerp*60,e),Math.round(this.value)===this.to&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(n=this.onUpdate)==null||n.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(e,t,{lerp:n,duration:r,easing:i,onStart:o,onUpdate:s}){this.from=this.value=e,this.to=t,this.lerp=n,this.duration=r,this.easing=i,this.currentTime=0,this.isRunning=!0,o==null||o(),this.onUpdate=s}};function g5(e,t){let n;return function(...r){clearTimeout(n),n=setTimeout(()=>{n=void 0,e.apply(this,r)},t)}}var v5=class{constructor(e,t,{autoResize:n=!0,debounce:r=250}={}){I(this,"width",0);I(this,"height",0);I(this,"scrollHeight",0);I(this,"scrollWidth",0);I(this,"debouncedResize");I(this,"wrapperResizeObserver");I(this,"contentResizeObserver");I(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});I(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});I(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=e,this.content=t,n&&(this.debouncedResize=g5(this.resize,r),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var e,t;(e=this.wrapperResizeObserver)==null||e.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Pg=class{constructor(){I(this,"events",{})}emit(e,...t){var r;const n=this.events[e]||[];for(let i=0,o=n.length;i<o;i++)(r=n[i])==null||r.call(n,...t)}on(e,t){return this.events[e]?this.events[e].push(t):this.events[e]=[t],()=>{var n;this.events[e]=(n=this.events[e])==null?void 0:n.filter(r=>t!==r)}}off(e,t){var n;this.events[e]=(n=this.events[e])==null?void 0:n.filter(r=>t!==r)}destroy(){this.events={}}},y5=100/6,un={passive:!1};function wf(e,t){return e===1?y5:e===2?t:1}var x5=class{constructor(e,t={wheelMultiplier:1,touchMultiplier:1}){I(this,"touchStart",{x:0,y:0});I(this,"lastDelta",{x:0,y:0});I(this,"window",{width:0,height:0});I(this,"emitter",new Pg);I(this,"onTouchStart",e=>{const{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:e})});I(this,"onTouchMove",e=>{const{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e,r=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(n-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:r,y:i},this.emitter.emit("scroll",{deltaX:r,deltaY:i,event:e})});I(this,"onTouchEnd",e=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})});I(this,"onWheel",e=>{let{deltaX:t,deltaY:n,deltaMode:r}=e;const i=wf(r,this.window.width),o=wf(r,this.window.height);t*=i,n*=o,t*=this.options.wheelMultiplier,n*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:n,event:e})});I(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=e,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,un),this.element.addEventListener("touchstart",this.onTouchStart,un),this.element.addEventListener("touchmove",this.onTouchMove,un),this.element.addEventListener("touchend",this.onTouchEnd,un)}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,un),this.element.removeEventListener("touchstart",this.onTouchStart,un),this.element.removeEventListener("touchmove",this.onTouchMove,un),this.element.removeEventListener("touchend",this.onTouchEnd,un)}},bf=e=>Math.min(1,1.001-2**(-10*e)),w5=class{constructor({wrapper:e=window,content:t=document.documentElement,eventsTarget:n=e,smoothWheel:r=!0,syncTouch:i=!1,syncTouchLerp:o=.075,touchInertiaExponent:s=1.7,duration:a,easing:l,lerp:u=.1,infinite:f=!1,orientation:h="vertical",gestureOrientation:d=h==="horizontal"?"both":"vertical",touchMultiplier:p=1,wheelMultiplier:w=1,autoResize:v=!0,prevent:x,virtualScroll:g,overscroll:m=!0,autoRaf:y=!1,anchors:k=!1,autoToggle:S=!1,allowNestedScroll:j=!1,__experimental__naiveDimensions:z=!1,naiveDimensions:P=z,stopInertiaOnNavigate:A=!1}={}){I(this,"_isScrolling",!1);I(this,"_isStopped",!1);I(this,"_isLocked",!1);I(this,"_preventNextNativeScrollEvent",!1);I(this,"_resetVelocityTimeout",null);I(this,"_rafId",null);I(this,"isTouching");I(this,"time",0);I(this,"userData",{});I(this,"lastVelocity",0);I(this,"velocity",0);I(this,"direction",0);I(this,"options");I(this,"targetScroll");I(this,"animatedScroll");I(this,"animate",new m5);I(this,"emitter",new Pg);I(this,"dimensions");I(this,"virtualScroll");I(this,"onScrollEnd",e=>{e instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&e.stopPropagation()});I(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});I(this,"onTransitionEnd",e=>{e.propertyName.includes("overflow")&&this.checkOverflow()});I(this,"onClick",e=>{const r=e.composedPath().filter(o=>o instanceof HTMLAnchorElement&&o.href).map(o=>new URL(o.href)),i=new URL(window.location.href);if(this.options.anchors){const o=r.find(s=>i.host===s.host&&i.pathname===s.pathname&&s.hash);if(o){const s=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,a=`#${o.hash.split("#")[1]}`;this.scrollTo(a,s);return}}if(this.options.stopInertiaOnNavigate&&r.some(s=>i.host===s.host&&i.pathname!==s.pathname)){this.reset();return}});I(this,"onPointerDown",e=>{e.button===1&&this.reset()});I(this,"onVirtualScroll",e=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(e)===!1)return;const{deltaX:t,deltaY:n,event:r}=e;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:n,event:r}),r.ctrlKey||r.lenisStopPropagation)return;const i=r.type.includes("touch"),o=r.type.includes("wheel");this.isTouching=r.type==="touchstart"||r.type==="touchmove";const s=t===0&&n===0;if(this.options.syncTouch&&i&&r.type==="touchstart"&&s&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&n===0||this.options.gestureOrientation==="horizontal"&&t===0;if(s||l)return;let u=r.composedPath();u=u.slice(0,u.indexOf(this.rootElement));const f=this.options.prevent,h=Math.abs(t)>=Math.abs(n)?"horizontal":"vertical";if(u.find(g=>{var m,y,k,S,j;return g instanceof HTMLElement&&(typeof f=="function"&&(f==null?void 0:f(g))||((m=g.hasAttribute)==null?void 0:m.call(g,"data-lenis-prevent"))||h==="vertical"&&((y=g.hasAttribute)==null?void 0:y.call(g,"data-lenis-prevent-vertical"))||h==="horizontal"&&((k=g.hasAttribute)==null?void 0:k.call(g,"data-lenis-prevent-horizontal"))||i&&((S=g.hasAttribute)==null?void 0:S.call(g,"data-lenis-prevent-touch"))||o&&((j=g.hasAttribute)==null?void 0:j.call(g,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(g,{deltaX:t,deltaY:n}))}))return;if(this.isStopped||this.isLocked){r.cancelable&&r.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&o)){this.isScrolling="native",this.animate.stop(),r.lenisStopPropagation=!0;return}let p=n;this.options.gestureOrientation==="both"?p=Math.abs(n)>Math.abs(t)?n:t:this.options.gestureOrientation==="horizontal"&&(p=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&n>0||this.animatedScroll===this.limit&&n<0))&&(r.lenisStopPropagation=!0),r.cancelable&&r.preventDefault();const w=i&&this.options.syncTouch,x=i&&r.type==="touchend";x&&(p=Math.sign(this.velocity)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+p,{programmatic:!1,...w?{lerp:x?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});I(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const e=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-e,this.direction=Math.sign(this.animatedScroll-e),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});I(this,"raf",e=>{const t=e-(this.time||e);this.time=e,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=xf,window.lenis||(window.lenis={}),window.lenis.version=xf,h==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),(!e||e===document.documentElement)&&(e=window),typeof a=="number"&&typeof l!="function"?l=bf:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:e,content:t,eventsTarget:n,smoothWheel:r,syncTouch:i,syncTouchLerp:o,touchInertiaExponent:s,duration:a,easing:l,lerp:u,infinite:f,gestureOrientation:d,orientation:h,touchMultiplier:p,wheelMultiplier:w,autoResize:v,prevent:x,virtualScroll:g,overscroll:m,autoRaf:y,anchors:k,autoToggle:S,allowNestedScroll:j,naiveDimensions:P,stopInertiaOnNavigate:A},this.dimensions=new v5(e,t,{autoResize:v}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new x5(n,{touchMultiplier:p,wheelMultiplier:w}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(e,t){return this.emitter.on(e,t)}off(e,t){return this.emitter.off(e,t)}get overflow(){const e=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[e]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(e){this.isHorizontal?this.options.wrapper.scrollTo({left:e,behavior:"instant"}):this.options.wrapper.scrollTo({top:e,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(e,{offset:t=0,immediate:n=!1,lock:r=!1,programmatic:i=!0,lerp:o=i?this.options.lerp:void 0,duration:s=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:u,force:f=!1,userData:h}={}){if((this.isStopped||this.isLocked)&&!f)return;let d=e,p=t;if(typeof d=="string"&&["top","left","start","#"].includes(d))d=0;else if(typeof d=="string"&&["bottom","right","end"].includes(d))d=this.limit;else{let w=null;if(typeof d=="string"?(w=document.querySelector(d),w||(d==="#top"?d=0:console.warn("Lenis: Target not found",d))):d instanceof HTMLElement&&(d!=null&&d.nodeType)&&(w=d),w){if(this.options.wrapper!==window){const x=this.rootElement.getBoundingClientRect();p-=this.isHorizontal?x.left:x.top}const v=w.getBoundingClientRect();d=(this.isHorizontal?v.left:v.top)+this.animatedScroll}}if(typeof d=="number"){if(d+=p,d=Math.round(d),this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const w=d-this.animatedScroll;w>this.limit/2?d-=this.limit:w<-this.limit/2&&(d+=this.limit)}}else d=Cg(0,d,this.limit);if(d===this.targetScroll){l==null||l(this),u==null||u(this);return}if(this.userData=h??{},n){this.animatedScroll=this.targetScroll=d,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),u==null||u(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=d),typeof s=="number"&&typeof a!="function"?a=bf:typeof a=="function"&&typeof s!="number"&&(s=1),this.animate.fromTo(this.animatedScroll,d,{duration:s,easing:a,lerp:o,onStart:()=>{r&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(w,v)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=w-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=w,this.setScroll(this.scroll),i&&(this.targetScroll=w),v||this.emit(),v&&(this.reset(),this.emit(),u==null||u(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(e,{deltaX:t,deltaY:n}){const r=Date.now();e._lenis||(e._lenis={});const i=e._lenis;let o,s,a,l,u,f,h,d,p,w;if(r-(i.time??0)>2e3){i.time=Date.now();const z=window.getComputedStyle(e);if(i.computedStyle=z,o=["auto","overlay","scroll"].includes(z.overflowX),s=["auto","overlay","scroll"].includes(z.overflowY),u=["auto"].includes(z.overscrollBehaviorX),f=["auto"].includes(z.overscrollBehaviorY),i.hasOverflowX=o,i.hasOverflowY=s,!(o||s))return!1;h=e.scrollWidth,d=e.scrollHeight,p=e.clientWidth,w=e.clientHeight,a=h>p,l=d>w,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=h,i.scrollHeight=d,i.clientWidth=p,i.clientHeight=w,i.hasOverscrollBehaviorX=u,i.hasOverscrollBehaviorY=f}else a=i.isScrollableX,l=i.isScrollableY,o=i.hasOverflowX,s=i.hasOverflowY,h=i.scrollWidth,d=i.scrollHeight,p=i.clientWidth,w=i.clientHeight,u=i.hasOverscrollBehaviorX,f=i.hasOverscrollBehaviorY;if(!(o&&a||s&&l))return!1;const v=Math.abs(t)>=Math.abs(n)?"horizontal":"vertical";let x,g,m,y,k,S;if(v==="horizontal")x=Math.round(e.scrollLeft),g=h-p,m=t,y=o,k=a,S=u;else if(v==="vertical")x=Math.round(e.scrollTop),g=d-w,m=n,y=s,k=l,S=f;else return!1;return!S&&(x>=g||x<=0)?!0:(m>0?x<g:x>0)&&y&&k}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const e=this.options.wrapper;return this.isHorizontal?e.scrollX??e.scrollLeft:e.scrollY??e.scrollTop}get scroll(){return this.options.infinite?h5(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(e){this._isScrolling!==e&&(this._isScrolling=e,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(e){this._isStopped!==e&&(this._isStopped=e,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(e){this._isLocked!==e&&(this._isLocked=e,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let e="lenis";return this.options.autoToggle&&(e+=" lenis-autoToggle"),this.isStopped&&(e+=" lenis-stopped"),this.isLocked&&(e+=" lenis-locked"),this.isScrolling&&(e+=" lenis-scrolling"),this.isScrolling==="smooth"&&(e+=" lenis-smooth"),e}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};let $o=null;const b5=()=>(typeof window>"u"||$o||($o=new w5({autoRaf:!0,smoothWheel:!0,syncTouch:!1,wheelMultiplier:.9,touchMultiplier:1,anchors:{offset:-20,duration:1.2}})),$o);b5();Ka.createRoot(document.getElementById("root")).render(c.jsx(R.StrictMode,{children:c.jsx(d5,{})}));
