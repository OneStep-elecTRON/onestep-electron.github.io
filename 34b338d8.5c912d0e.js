/*! For license information please see 34b338d8.5c912d0e.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{104:function(e,r,t){"use strict";t.d(r,"c",(function(){return n})),t.d(r,"b",(function(){return s})),t.d(r,"a",(function(){return c}));const n=(e,r)=>{let t="";var n=new Date;n.setTime(n.getTime()+2592e5),t="; expires="+n.toUTCString(),document.cookie=e+"="+(r||"")+t+"; path=/"},s=e=>{for(var r=e+"=",t=document.cookie.split(";"),n=0;n<t.length;n++){for(var s=t[n];" "===s.charAt(0);)s=s.substring(1,s.length);if(0===s.indexOf(r))return s.substring(r.length,s.length)}return null},c=e=>{document.cookie=e+"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"}},108:function(e,r,t){"use strict";var n=t(112),s=t.n(n);r.a=s.a.create({baseURL:"https://onestep-server.herokuapp.com/"})},111:function(e,r,t){"use strict";t.d(r,"a",(function(){return ve}));var n=t(0),s=e=>e instanceof HTMLElement;const c="blur",i="change",a="input",u="onBlur",o="onChange",l="onSubmit",f="onTouched",d="all",b="undefined",g="max",m="min",y="maxLength",O="minLength",h="pattern",v="required",j="validate";var p=e=>null==e;const A=e=>"object"==typeof e;var V=e=>!p(e)&&!Array.isArray(e)&&A(e)&&!(e instanceof Date),w=e=>/^\w*$/.test(e),k=e=>e.filter(Boolean),E=e=>k(e.replace(/["|']/g,"").replace(/\[/g,".").replace(/\]/g,"").split("."));function R(e,r,t){let n=-1;const s=w(r)?[r]:E(r),c=s.length,i=c-1;for(;++n<c;){const r=s[n];let c=t;if(n!==i){const t=e[r];c=V(t)||Array.isArray(t)?t:isNaN(+s[n+1])?{}:[]}e[r]=c,e=e[r]}return e}var C=(e,r={})=>{for(const t in e)w(t)?r[t]=e[t]:R(r,t,e[t]);return r},S=e=>void 0===e,D=(e={},r,t)=>{const n=k(r.split(/[,[\].]+?/)).reduce(((e,r)=>p(e)?e:e[r]),e);return S(n)||n===e?S(e[r])?t:e[r]:n},F=(e,r)=>{s(e)&&e.removeEventListener&&(e.removeEventListener(a,r),e.removeEventListener(i,r),e.removeEventListener(c,r))};const x={isValid:!1,value:null};var N=e=>Array.isArray(e)?e.reduce(((e,r)=>r&&r.ref.checked?{isValid:!0,value:r.ref.value}:e),x):x,L=e=>"radio"===e.type,T=e=>"file"===e.type,B=e=>"checkbox"===e.type,M=e=>"select-multiple"===e.type;const W={value:!1,isValid:!1},P={value:!0,isValid:!0};var q=e=>{if(Array.isArray(e)){if(e.length>1){const r=e.filter((e=>e&&e.ref.checked)).map((({ref:{value:e}})=>e));return{value:r,isValid:!!r.length}}const{checked:r,value:t,attributes:n}=e[0].ref;return r?n&&!S(n.value)?S(t)||""===t?P:{value:t,isValid:!0}:P:W}return W};function $(e,r,t,n,s){const c=e.current[r];if(c){const{ref:{value:e,disabled:r},ref:t,valueAsNumber:a,valueAsDate:u,setValueAs:o}=c;if(r&&n)return;return T(t)?t.files:L(t)?N(c.options).value:M(t)?(i=t.options,[...i].filter((({selected:e})=>e)).map((({value:e})=>e))):B(t)?q(c.options).value:s?e:a?""===e?NaN:+e:u?t.valueAsDate:o?o(e):e}var i;if(t)return D(t.current,r)}function U(e){return!e||e instanceof HTMLElement&&e.nodeType!==Node.DOCUMENT_NODE&&U(e.parentNode)}var z=e=>V(e)&&!Object.keys(e).length,H=e=>"boolean"==typeof e;function I(e,r){const t=w(r)?[r]:E(r),n=1==t.length?e:function(e,r){const t=r.slice(0,-1).length;let n=0;for(;n<t;)e=S(e)?n++:e[r[n++]];return e}(e,t),s=t[t.length-1];let c;n&&delete n[s];for(let i=0;i<t.slice(0,-1).length;i++){let r,n=-1;const s=t.slice(0,-(i+1)),a=s.length-1;for(i>0&&(c=e);++n<s.length;){const t=s[n];r=r?r[t]:e[t],a===n&&(V(r)&&z(r)||Array.isArray(r)&&!r.filter((e=>V(e)&&!z(e)||H(e))).length)&&(c?delete c[t]:delete e[t]),c=r}}return e}const J=(e,r)=>e&&e.ref===r;var Z=e=>p(e)||!A(e);function G(e,r){if(Z(e)||Z(r))return r;for(const n in r){const s=e[n],c=r[n];try{e[n]=V(s)&&V(c)||Array.isArray(s)&&Array.isArray(c)?G(s,c):c}catch(t){}}return e}function _(e,r,t){if(Z(e)||Z(r)||e instanceof Date||r instanceof Date)return e===r;if(!Object(n.isValidElement)(e)){const n=Object.keys(e),s=Object.keys(r);if(n.length!==s.length)return!1;for(const c of n){const n=e[c];if(!t||"ref"!==c){const e=r[c];if((V(n)||Array.isArray(n))&&(V(e)||Array.isArray(e))?!_(n,e,t):n!==e)return!1}}}return!0}function K(e,r,t,n,s){let c=-1;for(;++c<e.length;){for(const n in e[c])Array.isArray(e[c][n])?(!t[c]&&(t[c]={}),t[c][n]=[],K(e[c][n],D(r[c]||{},n,[]),t[c][n],t[c],n)):_(D(r[c]||{},n),e[c][n])?R(t[c]||{},n):t[c]=Object.assign(Object.assign({},t[c]),{[n]:!0});n&&!t.length&&delete n[s]}return t}var Q=(e,r,t)=>G(K(e,r,t.slice(0,e.length)),K(r,e,t.slice(0,e.length))),X=e=>"string"==typeof e,Y=(e,r,t,n,s)=>{const c={};for(const i in e.current)(S(s)||(X(s)?i.startsWith(s):Array.isArray(s)&&s.find((e=>i.startsWith(e)))))&&(c[i]=$(e,i,void 0,n));return t?C(c):G(r,C(c))},ee=e=>e instanceof RegExp,re=e=>V(e)&&!ee(e)?e:{value:e,message:""},te=e=>"function"==typeof e,ne=e=>X(e)||Object(n.isValidElement)(e);function se(e,r,t="validate"){if(ne(e)||H(e)&&!e)return{type:t,message:ne(e)?e:"",ref:r}}var ce=(e,r,t,n,s)=>r?Object.assign(Object.assign({},t[e]),{types:Object.assign(Object.assign({},t[e]&&t[e].types?t[e].types:{}),{[n]:s||!0})}):{},ie=async(e,r,{ref:t,ref:{value:n},options:s,required:c,maxLength:i,minLength:a,min:u,max:o,pattern:l,validate:f},d)=>{const b=t.name,A={},w=L(t),k=B(t),E=w||k,R=""===n,C=ce.bind(null,b,r,A),S=(e,r,n,s=y,c=O)=>{const i=e?r:n;A[b]=Object.assign({type:e?s:c,message:i,ref:t},C(e?s:c,i))};if(c&&(!w&&!k&&(R||p(n))||H(n)&&!n||k&&!q(s).isValid||w&&!N(s).isValid)){const{value:n,message:s}=ne(c)?{value:!!c,message:c}:re(c);if(n&&(A[b]=Object.assign({type:v,message:s,ref:E?((e.current[b].options||[])[0]||{}).ref:t},C(v,s)),!r))return A}if(!(p(u)&&p(o)||""===n)){let e,s;const c=re(o),i=re(u);if(isNaN(n)){const r=t.valueAsDate||new Date(n);X(c.value)&&(e=r>new Date(c.value)),X(i.value)&&(s=r<new Date(i.value))}else{const r=t.valueAsNumber||parseFloat(n);p(c.value)||(e=r>c.value),p(i.value)||(s=r<i.value)}if((e||s)&&(S(!!e,c.message,i.message,g,m),!r))return A}if(X(n)&&!R&&(i||a)){const e=re(i),t=re(a),s=!p(e.value)&&n.length>e.value,c=!p(t.value)&&n.length<t.value;if((s||c)&&(S(s,e.message,t.message),!r))return A}if(X(n)&&l&&!R){const{value:e,message:s}=re(l);if(ee(e)&&!e.test(n)&&(A[b]=Object.assign({type:h,message:s,ref:t},C(h,s)),!r))return A}if(f){const n=$(e,b,d,!1,!0),c=E&&s?s[0].ref:t;if(te(f)){const e=se(await f(n),c);if(e&&(A[b]=Object.assign(Object.assign({},e),C(j,e.message)),!r))return A}else if(V(f)){let e={};for(const[t,s]of Object.entries(f)){if(!z(e)&&!r)break;const i=se(await s(n),c,t);i&&(e=Object.assign(Object.assign({},i),C(t,i.message)),r&&(A[b]=e))}if(!z(e)&&(A[b]=Object.assign({ref:c},e),!r))return A}}return A};const ae=(e,r,t=[])=>{for(const n in r){const s=e+(V(r)?`.${n}`:`[${n}]`);Z(r[n])?t.push(s):ae(s,r[n],t)}return t};var ue=(e,r,t,n,s)=>{let c;return t.add(r),z(e)||(c=D(e,r),(V(c)||Array.isArray(c))&&ae(r,c).forEach((e=>t.add(e)))),S(c)?s?n:D(n,r):c},oe=({isOnBlur:e,isOnChange:r,isOnTouch:t,isTouched:n,isReValidateOnBlur:s,isReValidateOnChange:c,isBlurEvent:i,isSubmitted:a,isOnAll:u})=>!u&&(!a&&t?!(n||i):(a?s:e)?!i:!(a?c:r)||i),le=e=>e.substring(0,e.indexOf("["));const fe=(e,r)=>RegExp(`^${r}([|.)\\d+`.replace(/\[/g,"\\[").replace(/\]/g,"\\]")).test(e);var de=(e,r)=>[...e].some((e=>fe(r,e)));var be=typeof window!==b&&typeof document!==b;function ge(e){let r;if(Z(e)||be&&(e instanceof File||s(e)))return e;if(e instanceof Date)return r=new Date(e.getTime()),r;if(e instanceof Set){r=new Set;for(const t of e)r.add(t);return r}if(e instanceof Map){r=new Map;for(const t of e.keys())r.set(t,ge(e.get(t)));return r}r=Array.isArray(e)?[]:{};for(const t in e)r[t]=ge(e[t]);return r}var me=e=>({isOnSubmit:!e||e===l,isOnBlur:e===u,isOnChange:e===o,isOnAll:e===d,isOnTouch:e===f}),ye=e=>L(e)||B(e);const Oe=typeof window===b,he=be?"Proxy"in window:typeof Proxy!==b;function ve({mode:e=l,reValidateMode:r=o,resolver:t,context:u,defaultValues:f={},shouldFocusError:b=!0,shouldUnregister:g=!0,criteriaMode:m}={}){const y=Object(n.useRef)({}),O=Object(n.useRef)({}),h=Object(n.useRef)({}),v=Object(n.useRef)(new Set),j=Object(n.useRef)({}),A=Object(n.useRef)({}),E=Object(n.useRef)({}),x=Object(n.useRef)({}),N=Object(n.useRef)(f),W=Object(n.useRef)(!1),P=Object(n.useRef)(!1),q=Object(n.useRef)(),H=Object(n.useRef)({}),G=Object(n.useRef)({}),K=Object(n.useRef)(u),ee=Object(n.useRef)(t),re=Object(n.useRef)(new Set),ne=Object(n.useRef)(me(e)),{isOnSubmit:se,isOnTouch:ce}=ne.current,fe=m===d,[ve,je]=Object(n.useState)({isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touched:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!se,errors:{}}),pe=Object(n.useRef)({isDirty:!he,dirtyFields:!he,touched:!he||ce,isValidating:!he,isSubmitting:!he,isValid:!he}),Ae=Object(n.useRef)(ve),Ve=Object(n.useRef)(),{isOnBlur:we,isOnChange:ke}=Object(n.useRef)(me(r)).current;K.current=u,ee.current=t,Ae.current=ve,H.current=g?{}:z(H.current)?ge(f):H.current;const Ee=Object(n.useCallback)(((e={})=>{W.current||(Ae.current=Object.assign(Object.assign({},Ae.current),e),je(Ae.current))}),[]),Re=()=>pe.current.isValidating&&Ee({isValidating:!0}),Ce=Object(n.useCallback)(((e,r,t=!1,n={},s)=>{let c=t||(({errors:e,name:r,error:t,validFields:n,fieldsWithValidation:s})=>{const c=S(t),i=D(e,r);return c&&!!i||!c&&!_(i,t,!0)||c&&D(s,r)&&!D(n,r)})({errors:Ae.current.errors,error:r,name:e,validFields:x.current,fieldsWithValidation:E.current});const i=D(Ae.current.errors,e);r?(I(x.current,e),c=c||!i||!_(i,r,!0),R(Ae.current.errors,e,r)):((D(E.current,e)||ee.current)&&(R(x.current,e,!0),c=c||i),I(Ae.current.errors,e)),(c&&!p(t)||!z(n)||pe.current.isValidating)&&Ee(Object.assign(Object.assign(Object.assign({},n),ee.current?{isValid:!!s}:{}),{isValidating:!1}))}),[]),Se=Object(n.useCallback)(((e,r)=>{const{ref:t,options:n}=y.current[e],c=be&&s(t)&&p(r)?"":r;L(t)?(n||[]).forEach((({ref:e})=>e.checked=e.value===c)):T(t)&&!X(c)?t.files=c:M(t)?[...t.options].forEach((e=>e.selected=c.includes(e.value))):B(t)&&n?n.length>1?n.forEach((({ref:e})=>e.checked=Array.isArray(c)?!!c.find((r=>r===e.value)):c===e.value)):n[0].ref.checked=!!c:t.value=c}),[]),De=Object(n.useCallback)(((e,r)=>{if(pe.current.isDirty){const t=qe();return e&&r&&R(t,e,r),!_(t,N.current)}return!1}),[]),Fe=Object(n.useCallback)(((e,r=!0)=>{if(pe.current.isDirty||pe.current.dirtyFields){const t=!_(D(N.current,e),$(y,e,H)),n=D(Ae.current.dirtyFields,e),s=Ae.current.isDirty;t?R(Ae.current.dirtyFields,e,!0):I(Ae.current.dirtyFields,e);const c={isDirty:De(),dirtyFields:Ae.current.dirtyFields},i=pe.current.isDirty&&s!==c.isDirty||pe.current.dirtyFields&&n!==D(Ae.current.dirtyFields,e);return i&&r&&Ee(c),i?c:{}}return{}}),[]),xe=Object(n.useCallback)((async(e,r)=>{const t=(await ie(y,fe,y.current[e],H))[e];return Ce(e,t,r),S(t)}),[Ce,fe]),Ne=Object(n.useCallback)((async e=>{const{errors:r}=await ee.current(qe(),K.current,fe),t=Ae.current.isValid;if(Array.isArray(e)){const t=e.map((e=>{const t=D(r,e);return t?R(Ae.current.errors,e,t):I(Ae.current.errors,e),!t})).every(Boolean);return Ee({isValid:z(r),isValidating:!1}),t}{const n=D(r,e);return Ce(e,n,t!==z(r),{},z(r)),!n}}),[Ce,fe]),Le=Object(n.useCallback)((async e=>{const r=e||Object.keys(y.current);if(Re(),ee.current)return Ne(r);if(Array.isArray(r)){!e&&(Ae.current.errors={});const t=await Promise.all(r.map((async e=>await xe(e,null))));return Ee({isValidating:!1}),t.every(Boolean)}return await xe(r)}),[Ne,xe]),Te=Object(n.useCallback)(((e,r,{shouldDirty:t,shouldValidate:n})=>{const s={};R(s,e,r);for(const c of ae(e,r))y.current[c]&&(Se(c,D(s,c)),t&&Fe(c),n&&Le(c))}),[Le,Se,Fe]),Be=Object(n.useCallback)(((e,r,t)=>{if(!g&&!Z(r)&&R(H.current,e,Object.assign({},r)),y.current[e])Se(e,r),t.shouldDirty&&Fe(e),t.shouldValidate&&Le(e);else if(!Z(r)&&(Te(e,r,t),re.current.has(e))){const n=le(e)||e;R(O.current,e,r),G.current[n]({[n]:D(O.current,n)}),(pe.current.isDirty||pe.current.dirtyFields)&&t.shouldDirty&&(R(Ae.current.dirtyFields,e,Q(r,D(N.current,e,[]),D(Ae.current.dirtyFields,e,[]))),Ee({isDirty:!_(Object.assign(Object.assign({},qe()),{[e]:r}),N.current)}))}!g&&R(H.current,e,r)}),[Fe,Se,Te]),Me=e=>P.current||v.current.has(e)||v.current.has((e.match(/\w+/)||[])[0]),We=e=>{let r=!0;if(!z(j.current))for(const t in j.current)e&&j.current[t].size&&!j.current[t].has(e)&&!j.current[t].has(le(e))||(A.current[t](),r=!1);return r};function Pe(e){if(!g){let r=ge(e);for(const e of re.current)w(e)&&!r[e]&&(r=Object.assign(Object.assign({},r),{[e]:[]}));return r}return e}function qe(e){if(X(e))return $(y,e,H);if(Array.isArray(e)){const r={};for(const t of e)R(r,t,$(y,t,H));return r}return Pe(Y(y,ge(H.current),g))}q.current=q.current?q.current:async({type:e,target:r})=>{let t=r.name;const n=y.current[t];let s,i;if(n){const a=e===c,u=oe(Object.assign({isBlurEvent:a,isReValidateOnChange:ke,isReValidateOnBlur:we,isTouched:!!D(Ae.current.touched,t),isSubmitted:Ae.current.isSubmitted},ne.current));let o=Fe(t,!1),l=!z(o)||!a&&Me(t);if(a&&!D(Ae.current.touched,t)&&pe.current.touched&&(R(Ae.current.touched,t,!0),o=Object.assign(Object.assign({},o),{touched:Ae.current.touched})),!g&&B(r)&&R(H.current,t,$(y,t)),u)return!a&&We(t),(!z(o)||l&&z(o))&&Ee(o);if(Re(),ee.current){const{errors:e}=await ee.current(qe(),K.current,fe),n=Ae.current.isValid;if(s=D(e,t),B(r)&&!s&&ee.current){const r=le(t),n=D(e,r,{});n.type&&n.message&&(s=n),r&&(n||D(Ae.current.errors,r))&&(t=r)}i=z(e),n!==i&&(l=!0)}else s=(await ie(y,fe,n,H))[t];!a&&We(t),Ce(t,s,l,o,i)}};const $e=Object(n.useCallback)((async(e={})=>{const{errors:r}=await ee.current(Object.assign(Object.assign({},qe()),e),K.current,fe),t=z(r);Ae.current.isValid!==t&&Ee({isValid:t})}),[fe]),Ue=Object(n.useCallback)(((e,r)=>function(e,r,t,n,s,c){const{ref:i,ref:{name:a}}=t,u=e.current[a];if(!s){const r=$(e,a,n);!S(r)&&R(n.current,a,r)}i.type&&u?L(i)||B(i)?Array.isArray(u.options)&&u.options.length?(k(u.options).forEach(((e={},t)=>{(U(e.ref)&&J(e,e.ref)||c)&&(F(e.ref,r),I(u.options,`[${t}]`))})),u.options&&!k(u.options).length&&delete e.current[a]):delete e.current[a]:(U(i)&&J(u,i)||c)&&(F(i,r),delete e.current[a]):delete e.current[a]}(y,q.current,e,H,g,r)),[g]),ze=Object(n.useCallback)((e=>{if(P.current)Ee();else{for(const r of v.current)if(r.startsWith(e)){Ee();break}We(e)}}),[]),He=Object(n.useCallback)(((e,r)=>{e&&(Ue(e,r),g&&!k(e.options||[]).length&&(I(x.current,e.ref.name),I(E.current,e.ref.name),I(Ae.current.errors,e.ref.name),R(Ae.current.dirtyFields,e.ref.name,!0),Ee({isDirty:De()}),pe.current.isValid&&ee.current&&$e(),ze(e.ref.name)))}),[$e,Ue]);const Ie=Object(n.useCallback)(((e,r,t)=>{const n=t?j.current[t]:v.current;let s=Y(y,ge(H.current),g,!1,e);if(X(e)){const t=le(e)||e;return re.current.has(t)&&(s=Object.assign(Object.assign({},h.current),s)),ue(s,e,n,S(D(N.current,e))?r:D(N.current,e),!0)}const c=S(r)?N.current:r;return Array.isArray(e)?e.reduce(((e,r)=>Object.assign(Object.assign({},e),{[r]:ue(s,r,n,c)})),{}):(P.current=S(t),C(!z(s)&&s||c))}),[]);function Je(e,r={}){const{name:t,type:n,value:u}=e,o=Object.assign({ref:e},r),l=y.current,f=ye(e),d=de(re.current,t),b=r=>be&&(!s(e)||r===e);let m,O=l[t],h=!0;if(O&&(f?Array.isArray(O.options)&&k(O.options).find((e=>u===e.ref.value&&b(e.ref))):b(O.ref)))return void(l[t]=Object.assign(Object.assign({},O),r));O=n?f?Object.assign({options:[...k(O&&O.options||[]),{ref:e}],ref:{type:n,name:t}},r):Object.assign({},o):o,l[t]=O;const v=S(D(H.current,t));z(N.current)&&v||(m=D(v?N.current:H.current,t),h=S(m),h||d||Se(t,m)),z(r)||(R(E.current,t,!0),!se&&pe.current.isValid&&ie(y,fe,O,H).then((e=>{const r=Ae.current.isValid;z(e)?R(x.current,t,!0):I(x.current,t),r!==z(e)&&Ee()}))),!g||d&&h||!d&&I(Ae.current.dirtyFields,t),n&&function({ref:e},r,t){s(e)&&t&&(e.addEventListener(r?i:a,t),e.addEventListener(c,t))}(f&&O.options?O.options[O.options.length-1]:O,f||"select-one"===e.type,q.current)}const Ze=Object(n.useCallback)(((e,r)=>async t=>{t&&t.preventDefault&&(t.preventDefault(),t.persist());let n={},s=Pe(Y(y,ge(H.current),g,!0));pe.current.isSubmitting&&Ee({isSubmitting:!0});try{if(ee.current){const{errors:e,values:r}=await ee.current(s,K.current,fe);Ae.current.errors=n=e,s=r}else for(const e of Object.values(y.current))if(e){const{name:r}=e.ref,t=await ie(y,fe,e,H);t[r]?(R(n,r,t[r]),I(x.current,r)):D(E.current,r)&&(I(Ae.current.errors,r),R(x.current,r,!0))}z(n)&&Object.keys(Ae.current.errors).every((e=>e in y.current))?(Ee({errors:{},isSubmitting:!0}),await e(s,t)):(Ae.current.errors=Object.assign(Object.assign({},Ae.current.errors),n),r&&await r(Ae.current.errors,t),b&&((e,r)=>{for(const t in e)if(D(r,t)){const r=e[t];if(r){if(r.ref.focus&&S(r.ref.focus()))break;if(r.options){r.options[0].ref.focus();break}}}})(y.current,Ae.current.errors))}finally{Ae.current.isSubmitting=!1,Ee({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:z(Ae.current.errors),submitCount:Ae.current.submitCount+1})}}),[b,fe]);Object(n.useEffect)((()=>{t&&pe.current.isValid&&$e(),Ve.current=Ve.current||!be?Ve.current:function(e,r){const t=new MutationObserver((()=>{for(const t of Object.values(e.current))if(t&&t.options)for(const e of t.options)e&&e.ref&&U(e.ref)&&r(t);else t&&U(t.ref)&&r(t)}));return t.observe(window.document,{childList:!0,subtree:!0}),t}(y,He)}),[He,N.current]),Object(n.useEffect)((()=>()=>{Ve.current&&Ve.current.disconnect(),W.current=!0,Object.values(y.current).forEach((e=>He(e,!0)))}),[]),!t&&pe.current.isValid&&(ve.isValid=_(x.current,E.current)&&z(Ae.current.errors));const Ge={trigger:Le,setValue:Object(n.useCallback)((function(e,r,t){Be(e,r,t||{}),Me(e)&&Ee(),We(e)}),[Be,Le]),getValues:Object(n.useCallback)(qe,[]),register:Object(n.useCallback)((function(e,r){if(!Oe)if(X(e))Je({name:e},r);else{if(!V(e)||!("name"in e))return r=>r&&Je(r,e);Je(e,r)}}),[N.current]),unregister:Object(n.useCallback)((function(e){for(const r of Array.isArray(e)?e:[e])He(y.current[r],!0)}),[]),formState:he?new Proxy(ve,{get:(e,r)=>{if(r in e)return pe.current[r]=!0,e[r]}}):ve},_e=Object(n.useMemo)((()=>Object.assign({isFormDirty:De,updateWatchedValue:ze,shouldUnregister:g,updateFormState:Ee,removeFieldEventListener:Ue,watchInternal:Ie,mode:ne.current,reValidateMode:{isReValidateOnBlur:we,isReValidateOnChange:ke},validateResolver:t?$e:void 0,fieldsRef:y,resetFieldArrayFunctionRef:G,useWatchFieldsRef:j,useWatchRenderFunctionsRef:A,fieldArrayDefaultValuesRef:O,validFieldsRef:x,fieldsWithValidationRef:E,fieldArrayNamesRef:re,readFormStateRef:pe,formStateRef:Ae,defaultValuesRef:N,shallowFieldsStateRef:H,fieldArrayValuesRef:h},Ge)),[N.current,ze,g,Ue,Ie]);return Object.assign({watch:function(e,r){return Ie(e,r)},control:_e,handleSubmit:Ze,reset:Object(n.useCallback)(((e,r={})=>{if(be)for(const n of Object.values(y.current))if(n){const{ref:e,options:r}=n,c=ye(e)&&Array.isArray(r)?r[0].ref:e;if(s(c))try{c.closest("form").reset();break}catch(t){}}y.current={},N.current=Object.assign({},e||N.current),e&&We(""),Object.values(G.current).forEach((e=>te(e)&&e())),H.current=g?{}:ge(e||N.current),(({errors:e,isDirty:r,isSubmitted:t,touched:n,isValid:s,submitCount:c,dirtyFields:i})=>{s||(x.current={},E.current={}),O.current={},v.current=new Set,P.current=!1,Ee({submitCount:c?Ae.current.submitCount:0,isDirty:!!r&&Ae.current.isDirty,isSubmitted:!!t&&Ae.current.isSubmitted,isValid:!!s&&Ae.current.isValid,dirtyFields:i?Ae.current.dirtyFields:{},touched:n?Ae.current.touched:{},errors:e?Ae.current.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})})(r)}),[]),clearErrors:Object(n.useCallback)((function(e){e&&(Array.isArray(e)?e:[e]).forEach((e=>y.current[e]&&w(e)?delete Ae.current.errors[e]:I(Ae.current.errors,e))),Ee({errors:e?Ae.current.errors:{}})}),[]),setError:Object(n.useCallback)((function(e,r){const t=(y.current[e]||{}).ref;R(Ae.current.errors,e,Object.assign(Object.assign({},r),{ref:t})),Ee({isValid:!1}),r.shouldFocus&&t&&t.focus&&t.focus()}),[]),errors:ve.errors},Ge)}const je=Object(n.createContext)(null);je.displayName="RHFContext"},80:function(e,r,t){"use strict";t.r(r);var n=t(0),s=t.n(n),c=t(2),i=t(105),a=t(101),u=t(22),o=t(111),l=t(108),f=t(104),d=(t(56),t(81)),b=t.n(d),g=t(23),m=function(){var e=Object(n.useContext)(g.a),r=e[0],t=e[1],i=Object(n.useState)(!1),u=i[0],d=i[1],m=Object(n.useState)(null),y=(m[0],m[1]),O=Object(o.a)({mode:"all"}),h=O.register,v=O.errors,j=O.handleSubmit,p=Object(c.k)();Object(n.useEffect)((function(){r&&(console.log(r),p.replace("/me"))}),[r]);return s.a.createElement("main",{className:b.a.main},u?s.a.createElement("div",null,"Loading..."):s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",{className:b.a.headerMessage},"Pick up right where you left off."),s.a.createElement("form",{onSubmit:j((function(e){d(!0),l.a.post("signin",e).then((function(e){var r=e.data;r.data?(Object(f.c)("token",r.data.token),l.a.get("/",{headers:{Authorization:"bearer "+r.data.token}}).then((function(e){var r=e.data;t(Object.assign({},r.data))})).catch((function(e){console.log(e)}))):(y(r.message||r[0].msg),d(!1))})).catch((function(e){y(e.message),d(!1)}))})),className:"form"},s.a.createElement("div",{className:"text "+b.a.errorMessage},v.email&&v.email.message||v.password&&v.password.message),s.a.createElement("div",null,s.a.createElement("div",{className:"text"},"Email"),s.a.createElement("input",{name:"email",type:"email",ref:h({required:{value:!0,message:"Email required."},pattern:{value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:"Invalid email address."}}),className:"input "+b.a.inputBox})),s.a.createElement("div",null,s.a.createElement("div",{className:"text"},"Password"),s.a.createElement("input",{name:"password",type:"password",ref:h({required:{value:!0,message:"Password required."}}),className:"input "+b.a.inputBox})),s.a.createElement("div",null,s.a.createElement("button",{type:"submit",className:"input button "+b.a.loginButton},"Log In")),s.a.createElement(a.a,{to:"/signup",className:"text"},"Don't have an account?"))))};r.default=function(){var e=Object(u.default)().siteConfig,r=void 0===e?{}:e;return s.a.createElement(i.a,{title:"Hello from "+r.title,description:"Description will go into a meta tag in <head />"},s.a.createElement(m,null))}}}]);