/*! For license information please see 3.0bcc0ede.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{160:function(e,r,t){"use strict";t.d(r,"a",(function(){return me}));var n=t(0),s=e=>e instanceof HTMLElement;const c="blur",i="change",u="input",a="onBlur",o="onChange",l="onSubmit",f="onTouched",d="all",b="undefined",y="max",g="min",O="maxLength",j="minLength",h="pattern",m="required",v="validate";var p=e=>null==e;const A=e=>"object"==typeof e;var V=e=>!p(e)&&!Array.isArray(e)&&A(e)&&!(e instanceof Date),R=e=>/^\w*$/.test(e),w=e=>e.filter(Boolean),k=e=>w(e.replace(/["|']/g,"").replace(/\[/g,".").replace(/\]/g,"").split("."));function C(e,r,t){let n=-1;const s=R(r)?[r]:k(r),c=s.length,i=c-1;for(;++n<c;){const r=s[n];let c=t;if(n!==i){const t=e[r];c=V(t)||Array.isArray(t)?t:isNaN(+s[n+1])?{}:[]}e[r]=c,e=e[r]}return e}var S=(e,r={})=>{for(const t in e)R(t)?r[t]=e[t]:C(r,t,e[t]);return r},F=e=>void 0===e,D=(e={},r,t)=>{const n=w(r.split(/[,[\].]+?/)).reduce(((e,r)=>p(e)?e:e[r]),e);return F(n)||n===e?F(e[r])?t:e[r]:n},E=(e,r)=>{s(e)&&e.removeEventListener&&(e.removeEventListener(u,r),e.removeEventListener(i,r),e.removeEventListener(c,r))};const x={isValid:!1,value:null};var L=e=>Array.isArray(e)?e.reduce(((e,r)=>r&&r.ref.checked?{isValid:!0,value:r.ref.value}:e),x):x,N=e=>"radio"===e.type,B=e=>"file"===e.type,T=e=>"checkbox"===e.type,M=e=>"select-multiple"===e.type;const W={value:!1,isValid:!1},$={value:!0,isValid:!0};var P=e=>{if(Array.isArray(e)){if(e.length>1){const r=e.filter((e=>e&&e.ref.checked)).map((({ref:{value:e}})=>e));return{value:r,isValid:!!r.length}}const{checked:r,value:t,attributes:n}=e[0].ref;return r?n&&!F(n.value)?F(t)||""===t?$:{value:t,isValid:!0}:$:W}return W};function H(e,r,t,n,s){const c=e.current[r];if(c){const{ref:{value:e,disabled:r},ref:t,valueAsNumber:u,valueAsDate:a,setValueAs:o}=c;if(r&&n)return;return B(t)?t.files:N(t)?L(c.options).value:M(t)?(i=t.options,[...i].filter((({selected:e})=>e)).map((({value:e})=>e))):T(t)?P(c.options).value:s?e:u?""===e?NaN:+e:a?t.valueAsDate:o?o(e):e}var i;if(t)return D(t.current,r)}function U(e){return!e||e instanceof HTMLElement&&e.nodeType!==Node.DOCUMENT_NODE&&U(e.parentNode)}var q=e=>V(e)&&!Object.keys(e).length,J=e=>"boolean"==typeof e;function z(e,r){const t=R(r)?[r]:k(r),n=1==t.length?e:function(e,r){const t=r.slice(0,-1).length;let n=0;for(;n<t;)e=F(e)?n++:e[r[n++]];return e}(e,t),s=t[t.length-1];let c;n&&delete n[s];for(let i=0;i<t.slice(0,-1).length;i++){let r,n=-1;const s=t.slice(0,-(i+1)),u=s.length-1;for(i>0&&(c=e);++n<s.length;){const t=s[n];r=r?r[t]:e[t],u===n&&(V(r)&&q(r)||Array.isArray(r)&&!r.filter((e=>V(e)&&!q(e)||J(e))).length)&&(c?delete c[t]:delete e[t]),c=r}}return e}const I=(e,r)=>e&&e.ref===r;var _=e=>p(e)||!A(e);function G(e,r){if(_(e)||_(r))return r;for(const n in r){const s=e[n],c=r[n];try{e[n]=V(s)&&V(c)||Array.isArray(s)&&Array.isArray(c)?G(s,c):c}catch(t){}}return e}function K(e,r,t){if(_(e)||_(r)||e instanceof Date||r instanceof Date)return e===r;if(!Object(n.isValidElement)(e)){const n=Object.keys(e),s=Object.keys(r);if(n.length!==s.length)return!1;for(const c of n){const n=e[c];if(!t||"ref"!==c){const e=r[c];if((V(n)||Array.isArray(n))&&(V(e)||Array.isArray(e))?!K(n,e,t):n!==e)return!1}}}return!0}function Q(e,r,t,n,s){let c=-1;for(;++c<e.length;){for(const n in e[c])Array.isArray(e[c][n])?(!t[c]&&(t[c]={}),t[c][n]=[],Q(e[c][n],D(r[c]||{},n,[]),t[c][n],t[c],n)):K(D(r[c]||{},n),e[c][n])?C(t[c]||{},n):t[c]=Object.assign(Object.assign({},t[c]),{[n]:!0});n&&!t.length&&delete n[s]}return t}var X=(e,r,t)=>G(Q(e,r,t.slice(0,e.length)),Q(r,e,t.slice(0,e.length))),Y=e=>"string"==typeof e,Z=(e,r,t,n,s)=>{const c={};for(const i in e.current)(F(s)||(Y(s)?i.startsWith(s):Array.isArray(s)&&s.find((e=>i.startsWith(e)))))&&(c[i]=H(e,i,void 0,n));return t?S(c):G(r,S(c))},ee=e=>e instanceof RegExp,re=e=>V(e)&&!ee(e)?e:{value:e,message:""},te=e=>"function"==typeof e,ne=e=>Y(e)||Object(n.isValidElement)(e);function se(e,r,t="validate"){if(ne(e)||J(e)&&!e)return{type:t,message:ne(e)?e:"",ref:r}}var ce=(e,r,t,n,s)=>r?Object.assign(Object.assign({},t[e]),{types:Object.assign(Object.assign({},t[e]&&t[e].types?t[e].types:{}),{[n]:s||!0})}):{},ie=async(e,r,{ref:t,ref:{value:n},options:s,required:c,maxLength:i,minLength:u,min:a,max:o,pattern:l,validate:f},d)=>{const b=t.name,A={},R=N(t),w=T(t),k=R||w,C=""===n,S=ce.bind(null,b,r,A),F=(e,r,n,s=O,c=j)=>{const i=e?r:n;A[b]=Object.assign({type:e?s:c,message:i,ref:t},S(e?s:c,i))};if(c&&(!R&&!w&&(C||p(n))||J(n)&&!n||w&&!P(s).isValid||R&&!L(s).isValid)){const{value:n,message:s}=ne(c)?{value:!!c,message:c}:re(c);if(n&&(A[b]=Object.assign({type:m,message:s,ref:k?((e.current[b].options||[])[0]||{}).ref:t},S(m,s)),!r))return A}if(!(p(a)&&p(o)||""===n)){let e,s;const c=re(o),i=re(a);if(isNaN(n)){const r=t.valueAsDate||new Date(n);Y(c.value)&&(e=r>new Date(c.value)),Y(i.value)&&(s=r<new Date(i.value))}else{const r=t.valueAsNumber||parseFloat(n);p(c.value)||(e=r>c.value),p(i.value)||(s=r<i.value)}if((e||s)&&(F(!!e,c.message,i.message,y,g),!r))return A}if(Y(n)&&!C&&(i||u)){const e=re(i),t=re(u),s=!p(e.value)&&n.length>e.value,c=!p(t.value)&&n.length<t.value;if((s||c)&&(F(s,e.message,t.message),!r))return A}if(Y(n)&&l&&!C){const{value:e,message:s}=re(l);if(ee(e)&&!e.test(n)&&(A[b]=Object.assign({type:h,message:s,ref:t},S(h,s)),!r))return A}if(f){const n=H(e,b,d,!1,!0),c=k&&s?s[0].ref:t;if(te(f)){const e=se(await f(n),c);if(e&&(A[b]=Object.assign(Object.assign({},e),S(v,e.message)),!r))return A}else if(V(f)){let e={};for(const[t,s]of Object.entries(f)){if(!q(e)&&!r)break;const i=se(await s(n),c,t);i&&(e=Object.assign(Object.assign({},i),S(t,i.message)),r&&(A[b]=e))}if(!q(e)&&(A[b]=Object.assign({ref:c},e),!r))return A}}return A};const ue=(e,r,t=[])=>{for(const n in r){const s=e+(V(r)?`.${n}`:`[${n}]`);_(r[n])?t.push(s):ue(s,r[n],t)}return t};var ae=(e,r,t,n,s)=>{let c;return t.add(r),q(e)||(c=D(e,r),(V(c)||Array.isArray(c))&&ue(r,c).forEach((e=>t.add(e)))),F(c)?s?n:D(n,r):c},oe=({isOnBlur:e,isOnChange:r,isOnTouch:t,isTouched:n,isReValidateOnBlur:s,isReValidateOnChange:c,isBlurEvent:i,isSubmitted:u,isOnAll:a})=>!a&&(!u&&t?!(n||i):(u?s:e)?!i:!(u?c:r)||i),le=e=>e.substring(0,e.indexOf("["));const fe=(e,r)=>RegExp(`^${r}([|.)\\d+`.replace(/\[/g,"\\[").replace(/\]/g,"\\]")).test(e);var de=(e,r)=>[...e].some((e=>fe(r,e)));var be=typeof window!==b&&typeof document!==b;function ye(e){let r;if(_(e)||be&&(e instanceof File||s(e)))return e;if(e instanceof Date)return r=new Date(e.getTime()),r;if(e instanceof Set){r=new Set;for(const t of e)r.add(t);return r}if(e instanceof Map){r=new Map;for(const t of e.keys())r.set(t,ye(e.get(t)));return r}r=Array.isArray(e)?[]:{};for(const t in e)r[t]=ye(e[t]);return r}var ge=e=>({isOnSubmit:!e||e===l,isOnBlur:e===a,isOnChange:e===o,isOnAll:e===d,isOnTouch:e===f}),Oe=e=>N(e)||T(e);const je=typeof window===b,he=be?"Proxy"in window:typeof Proxy!==b;function me({mode:e=l,reValidateMode:r=o,resolver:t,context:a,defaultValues:f={},shouldFocusError:b=!0,shouldUnregister:y=!0,criteriaMode:g}={}){const O=Object(n.useRef)({}),j=Object(n.useRef)({}),h=Object(n.useRef)({}),m=Object(n.useRef)(new Set),v=Object(n.useRef)({}),A=Object(n.useRef)({}),k=Object(n.useRef)({}),x=Object(n.useRef)({}),L=Object(n.useRef)(f),W=Object(n.useRef)(!1),$=Object(n.useRef)(!1),P=Object(n.useRef)(),J=Object(n.useRef)({}),G=Object(n.useRef)({}),Q=Object(n.useRef)(a),ee=Object(n.useRef)(t),re=Object(n.useRef)(new Set),ne=Object(n.useRef)(ge(e)),{isOnSubmit:se,isOnTouch:ce}=ne.current,fe=g===d,[me,ve]=Object(n.useState)({isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touched:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!se,errors:{}}),pe=Object(n.useRef)({isDirty:!he,dirtyFields:!he,touched:!he||ce,isValidating:!he,isSubmitting:!he,isValid:!he}),Ae=Object(n.useRef)(me),Ve=Object(n.useRef)(),{isOnBlur:Re,isOnChange:we}=Object(n.useRef)(ge(r)).current;Q.current=a,ee.current=t,Ae.current=me,J.current=y?{}:q(J.current)?ye(f):J.current;const ke=Object(n.useCallback)(((e={})=>{W.current||(Ae.current=Object.assign(Object.assign({},Ae.current),e),ve(Ae.current))}),[]),Ce=()=>pe.current.isValidating&&ke({isValidating:!0}),Se=Object(n.useCallback)(((e,r,t=!1,n={},s)=>{let c=t||(({errors:e,name:r,error:t,validFields:n,fieldsWithValidation:s})=>{const c=F(t),i=D(e,r);return c&&!!i||!c&&!K(i,t,!0)||c&&D(s,r)&&!D(n,r)})({errors:Ae.current.errors,error:r,name:e,validFields:x.current,fieldsWithValidation:k.current});const i=D(Ae.current.errors,e);r?(z(x.current,e),c=c||!i||!K(i,r,!0),C(Ae.current.errors,e,r)):((D(k.current,e)||ee.current)&&(C(x.current,e,!0),c=c||i),z(Ae.current.errors,e)),(c&&!p(t)||!q(n)||pe.current.isValidating)&&ke(Object.assign(Object.assign(Object.assign({},n),ee.current?{isValid:!!s}:{}),{isValidating:!1}))}),[]),Fe=Object(n.useCallback)(((e,r)=>{const{ref:t,options:n}=O.current[e],c=be&&s(t)&&p(r)?"":r;N(t)?(n||[]).forEach((({ref:e})=>e.checked=e.value===c)):B(t)&&!Y(c)?t.files=c:M(t)?[...t.options].forEach((e=>e.selected=c.includes(e.value))):T(t)&&n?n.length>1?n.forEach((({ref:e})=>e.checked=Array.isArray(c)?!!c.find((r=>r===e.value)):c===e.value)):n[0].ref.checked=!!c:t.value=c}),[]),De=Object(n.useCallback)(((e,r)=>{if(pe.current.isDirty){const t=Pe();return e&&r&&C(t,e,r),!K(t,L.current)}return!1}),[]),Ee=Object(n.useCallback)(((e,r=!0)=>{if(pe.current.isDirty||pe.current.dirtyFields){const t=!K(D(L.current,e),H(O,e,J)),n=D(Ae.current.dirtyFields,e),s=Ae.current.isDirty;t?C(Ae.current.dirtyFields,e,!0):z(Ae.current.dirtyFields,e);const c={isDirty:De(),dirtyFields:Ae.current.dirtyFields},i=pe.current.isDirty&&s!==c.isDirty||pe.current.dirtyFields&&n!==D(Ae.current.dirtyFields,e);return i&&r&&ke(c),i?c:{}}return{}}),[]),xe=Object(n.useCallback)((async(e,r)=>{const t=(await ie(O,fe,O.current[e],J))[e];return Se(e,t,r),F(t)}),[Se,fe]),Le=Object(n.useCallback)((async e=>{const{errors:r}=await ee.current(Pe(),Q.current,fe),t=Ae.current.isValid;if(Array.isArray(e)){const t=e.map((e=>{const t=D(r,e);return t?C(Ae.current.errors,e,t):z(Ae.current.errors,e),!t})).every(Boolean);return ke({isValid:q(r),isValidating:!1}),t}{const n=D(r,e);return Se(e,n,t!==q(r),{},q(r)),!n}}),[Se,fe]),Ne=Object(n.useCallback)((async e=>{const r=e||Object.keys(O.current);if(Ce(),ee.current)return Le(r);if(Array.isArray(r)){!e&&(Ae.current.errors={});const t=await Promise.all(r.map((async e=>await xe(e,null))));return ke({isValidating:!1}),t.every(Boolean)}return await xe(r)}),[Le,xe]),Be=Object(n.useCallback)(((e,r,{shouldDirty:t,shouldValidate:n})=>{const s={};C(s,e,r);for(const c of ue(e,r))O.current[c]&&(Fe(c,D(s,c)),t&&Ee(c),n&&Ne(c))}),[Ne,Fe,Ee]),Te=Object(n.useCallback)(((e,r,t)=>{if(!y&&!_(r)&&C(J.current,e,Object.assign({},r)),O.current[e])Fe(e,r),t.shouldDirty&&Ee(e),t.shouldValidate&&Ne(e);else if(!_(r)&&(Be(e,r,t),re.current.has(e))){const n=le(e)||e;C(j.current,e,r),G.current[n]({[n]:D(j.current,n)}),(pe.current.isDirty||pe.current.dirtyFields)&&t.shouldDirty&&(C(Ae.current.dirtyFields,e,X(r,D(L.current,e,[]),D(Ae.current.dirtyFields,e,[]))),ke({isDirty:!K(Object.assign(Object.assign({},Pe()),{[e]:r}),L.current)}))}!y&&C(J.current,e,r)}),[Ee,Fe,Be]),Me=e=>$.current||m.current.has(e)||m.current.has((e.match(/\w+/)||[])[0]),We=e=>{let r=!0;if(!q(v.current))for(const t in v.current)e&&v.current[t].size&&!v.current[t].has(e)&&!v.current[t].has(le(e))||(A.current[t](),r=!1);return r};function $e(e){if(!y){let r=ye(e);for(const e of re.current)R(e)&&!r[e]&&(r=Object.assign(Object.assign({},r),{[e]:[]}));return r}return e}function Pe(e){if(Y(e))return H(O,e,J);if(Array.isArray(e)){const r={};for(const t of e)C(r,t,H(O,t,J));return r}return $e(Z(O,ye(J.current),y))}P.current=P.current?P.current:async({type:e,target:r})=>{let t=r.name;const n=O.current[t];let s,i;if(n){const u=e===c,a=oe(Object.assign({isBlurEvent:u,isReValidateOnChange:we,isReValidateOnBlur:Re,isTouched:!!D(Ae.current.touched,t),isSubmitted:Ae.current.isSubmitted},ne.current));let o=Ee(t,!1),l=!q(o)||!u&&Me(t);if(u&&!D(Ae.current.touched,t)&&pe.current.touched&&(C(Ae.current.touched,t,!0),o=Object.assign(Object.assign({},o),{touched:Ae.current.touched})),!y&&T(r)&&C(J.current,t,H(O,t)),a)return!u&&We(t),(!q(o)||l&&q(o))&&ke(o);if(Ce(),ee.current){const{errors:e}=await ee.current(Pe(),Q.current,fe),n=Ae.current.isValid;if(s=D(e,t),T(r)&&!s&&ee.current){const r=le(t),n=D(e,r,{});n.type&&n.message&&(s=n),r&&(n||D(Ae.current.errors,r))&&(t=r)}i=q(e),n!==i&&(l=!0)}else s=(await ie(O,fe,n,J))[t];!u&&We(t),Se(t,s,l,o,i)}};const He=Object(n.useCallback)((async(e={})=>{const{errors:r}=await ee.current(Object.assign(Object.assign({},Pe()),e),Q.current,fe),t=q(r);Ae.current.isValid!==t&&ke({isValid:t})}),[fe]),Ue=Object(n.useCallback)(((e,r)=>function(e,r,t,n,s,c){const{ref:i,ref:{name:u}}=t,a=e.current[u];if(!s){const r=H(e,u,n);!F(r)&&C(n.current,u,r)}i.type&&a?N(i)||T(i)?Array.isArray(a.options)&&a.options.length?(w(a.options).forEach(((e={},t)=>{(U(e.ref)&&I(e,e.ref)||c)&&(E(e.ref,r),z(a.options,`[${t}]`))})),a.options&&!w(a.options).length&&delete e.current[u]):delete e.current[u]:(U(i)&&I(a,i)||c)&&(E(i,r),delete e.current[u]):delete e.current[u]}(O,P.current,e,J,y,r)),[y]),qe=Object(n.useCallback)((e=>{if($.current)ke();else{for(const r of m.current)if(r.startsWith(e)){ke();break}We(e)}}),[]),Je=Object(n.useCallback)(((e,r)=>{e&&(Ue(e,r),y&&!w(e.options||[]).length&&(z(x.current,e.ref.name),z(k.current,e.ref.name),z(Ae.current.errors,e.ref.name),C(Ae.current.dirtyFields,e.ref.name,!0),ke({isDirty:De()}),pe.current.isValid&&ee.current&&He(),qe(e.ref.name)))}),[He,Ue]);const ze=Object(n.useCallback)(((e,r,t)=>{const n=t?v.current[t]:m.current;let s=Z(O,ye(J.current),y,!1,e);if(Y(e)){const t=le(e)||e;return re.current.has(t)&&(s=Object.assign(Object.assign({},h.current),s)),ae(s,e,n,F(D(L.current,e))?r:D(L.current,e),!0)}const c=F(r)?L.current:r;return Array.isArray(e)?e.reduce(((e,r)=>Object.assign(Object.assign({},e),{[r]:ae(s,r,n,c)})),{}):($.current=F(t),S(!q(s)&&s||c))}),[]);function Ie(e,r={}){const{name:t,type:n,value:a}=e,o=Object.assign({ref:e},r),l=O.current,f=Oe(e),d=de(re.current,t),b=r=>be&&(!s(e)||r===e);let g,j=l[t],h=!0;if(j&&(f?Array.isArray(j.options)&&w(j.options).find((e=>a===e.ref.value&&b(e.ref))):b(j.ref)))return void(l[t]=Object.assign(Object.assign({},j),r));j=n?f?Object.assign({options:[...w(j&&j.options||[]),{ref:e}],ref:{type:n,name:t}},r):Object.assign({},o):o,l[t]=j;const m=F(D(J.current,t));q(L.current)&&m||(g=D(m?L.current:J.current,t),h=F(g),h||d||Fe(t,g)),q(r)||(C(k.current,t,!0),!se&&pe.current.isValid&&ie(O,fe,j,J).then((e=>{const r=Ae.current.isValid;q(e)?C(x.current,t,!0):z(x.current,t),r!==q(e)&&ke()}))),!y||d&&h||!d&&z(Ae.current.dirtyFields,t),n&&function({ref:e},r,t){s(e)&&t&&(e.addEventListener(r?i:u,t),e.addEventListener(c,t))}(f&&j.options?j.options[j.options.length-1]:j,f||"select-one"===e.type,P.current)}const _e=Object(n.useCallback)(((e,r)=>async t=>{t&&t.preventDefault&&(t.preventDefault(),t.persist());let n={},s=$e(Z(O,ye(J.current),y,!0));pe.current.isSubmitting&&ke({isSubmitting:!0});try{if(ee.current){const{errors:e,values:r}=await ee.current(s,Q.current,fe);Ae.current.errors=n=e,s=r}else for(const e of Object.values(O.current))if(e){const{name:r}=e.ref,t=await ie(O,fe,e,J);t[r]?(C(n,r,t[r]),z(x.current,r)):D(k.current,r)&&(z(Ae.current.errors,r),C(x.current,r,!0))}q(n)&&Object.keys(Ae.current.errors).every((e=>e in O.current))?(ke({errors:{},isSubmitting:!0}),await e(s,t)):(Ae.current.errors=Object.assign(Object.assign({},Ae.current.errors),n),r&&await r(Ae.current.errors,t),b&&((e,r)=>{for(const t in e)if(D(r,t)){const r=e[t];if(r){if(r.ref.focus&&F(r.ref.focus()))break;if(r.options){r.options[0].ref.focus();break}}}})(O.current,Ae.current.errors))}finally{Ae.current.isSubmitting=!1,ke({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:q(Ae.current.errors),submitCount:Ae.current.submitCount+1})}}),[b,fe]);Object(n.useEffect)((()=>{t&&pe.current.isValid&&He(),Ve.current=Ve.current||!be?Ve.current:function(e,r){const t=new MutationObserver((()=>{for(const t of Object.values(e.current))if(t&&t.options)for(const e of t.options)e&&e.ref&&U(e.ref)&&r(t);else t&&U(t.ref)&&r(t)}));return t.observe(window.document,{childList:!0,subtree:!0}),t}(O,Je)}),[Je,L.current]),Object(n.useEffect)((()=>()=>{Ve.current&&Ve.current.disconnect(),W.current=!0,Object.values(O.current).forEach((e=>Je(e,!0)))}),[]),!t&&pe.current.isValid&&(me.isValid=K(x.current,k.current)&&q(Ae.current.errors));const Ge={trigger:Ne,setValue:Object(n.useCallback)((function(e,r,t){Te(e,r,t||{}),Me(e)&&ke(),We(e)}),[Te,Ne]),getValues:Object(n.useCallback)(Pe,[]),register:Object(n.useCallback)((function(e,r){if(!je)if(Y(e))Ie({name:e},r);else{if(!V(e)||!("name"in e))return r=>r&&Ie(r,e);Ie(e,r)}}),[L.current]),unregister:Object(n.useCallback)((function(e){for(const r of Array.isArray(e)?e:[e])Je(O.current[r],!0)}),[]),formState:he?new Proxy(me,{get:(e,r)=>{if(r in e)return pe.current[r]=!0,e[r]}}):me},Ke=Object(n.useMemo)((()=>Object.assign({isFormDirty:De,updateWatchedValue:qe,shouldUnregister:y,updateFormState:ke,removeFieldEventListener:Ue,watchInternal:ze,mode:ne.current,reValidateMode:{isReValidateOnBlur:Re,isReValidateOnChange:we},validateResolver:t?He:void 0,fieldsRef:O,resetFieldArrayFunctionRef:G,useWatchFieldsRef:v,useWatchRenderFunctionsRef:A,fieldArrayDefaultValuesRef:j,validFieldsRef:x,fieldsWithValidationRef:k,fieldArrayNamesRef:re,readFormStateRef:pe,formStateRef:Ae,defaultValuesRef:L,shallowFieldsStateRef:J,fieldArrayValuesRef:h},Ge)),[L.current,qe,y,Ue,ze]);return Object.assign({watch:function(e,r){return ze(e,r)},control:Ke,handleSubmit:_e,reset:Object(n.useCallback)(((e,r={})=>{if(be)for(const n of Object.values(O.current))if(n){const{ref:e,options:r}=n,c=Oe(e)&&Array.isArray(r)?r[0].ref:e;if(s(c))try{c.closest("form").reset();break}catch(t){}}O.current={},L.current=Object.assign({},e||L.current),e&&We(""),Object.values(G.current).forEach((e=>te(e)&&e())),J.current=y?{}:ye(e||L.current),(({errors:e,isDirty:r,isSubmitted:t,touched:n,isValid:s,submitCount:c,dirtyFields:i})=>{s||(x.current={},k.current={}),j.current={},m.current=new Set,$.current=!1,ke({submitCount:c?Ae.current.submitCount:0,isDirty:!!r&&Ae.current.isDirty,isSubmitted:!!t&&Ae.current.isSubmitted,isValid:!!s&&Ae.current.isValid,dirtyFields:i?Ae.current.dirtyFields:{},touched:n?Ae.current.touched:{},errors:e?Ae.current.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})})(r)}),[]),clearErrors:Object(n.useCallback)((function(e){e&&(Array.isArray(e)?e:[e]).forEach((e=>O.current[e]&&R(e)?delete Ae.current.errors[e]:z(Ae.current.errors,e))),ke({errors:e?Ae.current.errors:{}})}),[]),setError:Object(n.useCallback)((function(e,r){const t=(O.current[e]||{}).ref;C(Ae.current.errors,e,Object.assign(Object.assign({},r),{ref:t})),ke({isValid:!1}),r.shouldFocus&&t&&t.focus&&t.focus()}),[]),errors:me.errors},Ge)}const ve=Object(n.createContext)(null);ve.displayName="RHFContext"}}]);