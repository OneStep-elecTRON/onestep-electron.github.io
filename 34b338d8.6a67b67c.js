(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{110:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),l=t(2),r=t(137),c=t(133),m=t(25),i=t(160),o=t(28),u=t(14),d=(t(86),t(111)),p=t.n(d),g=t(12);const E=()=>{const[e,a]=Object(n.useContext)(g.a),[t,r]=Object(n.useState)(!1),[m,d]=Object(n.useState)(null),{register:E,errors:b,handleSubmit:f}=Object(i.a)({mode:"all"}),w=Object(l.k)();Object(n.useEffect)((()=>{e&&w.replace("/me")}),[e]);return s.a.createElement("main",{className:p.a.main},t?s.a.createElement("div",null,"Loading..."):s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",{className:p.a.headerMessage},"Pick up right where you left off."),s.a.createElement("form",{onSubmit:f((e=>{r(!0),o.a.post("signin",e).then((({data:e})=>{e.data?(Object(u.c)("token",e.data.token),o.a.get("/").then((({data:e})=>{a({...e.data})})).catch((e=>{console.log(e)}))):(d(e.message||e[0].msg),r(!1))})).catch((e=>{d(e.message),r(!1)}))})),className:"form"},s.a.createElement("div",{className:"text "+p.a.errorMessage},b.email&&b.email.message||b.password&&b.password.message),s.a.createElement("div",null,s.a.createElement("div",{className:"text"},"Email"),s.a.createElement("input",{name:"email",type:"email",ref:E({required:{value:!0,message:"Email required."},pattern:{value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:"Invalid email address."}}),className:"input "+p.a.inputBox})),s.a.createElement("div",null,s.a.createElement("div",{className:"text"},"Password"),s.a.createElement("input",{name:"password",type:"password",ref:E({required:{value:!0,message:"Password required."}}),className:"input "+p.a.inputBox})),s.a.createElement("div",null,s.a.createElement("button",{type:"submit",className:"input button "+p.a.loginButton},"Log In")),s.a.createElement(c.a,{to:"/signup",className:"text"},"Don't have an account?"))))};a.default=function(){const e=Object(m.default)(),{siteConfig:a={}}=e;return s.a.createElement(r.a,{title:`Hello from ${a.title}`,description:"Description will go into a meta tag in <head />"},s.a.createElement(E,null))}}}]);