(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{116:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),l=t(2),r=t(137),m=t(133),c=t(24),i=t(160),o=t(28),u=t(25),d=(t(86),t(117)),p=t.n(d),g=t(12);const E=()=>{const[e,a]=Object(s.useContext)(g.a),[t,r]=Object(s.useState)(!1),[c,d]=Object(s.useState)(null),{register:E,errors:b,handleSubmit:h}=Object(i.a)({mode:"all"}),v=Object(l.k)();Object(s.useEffect)((()=>{e&&v.replace("/me")}),[e]);return n.a.createElement("main",{className:p.a.main},t?n.a.createElement("div",null,"Loading..."):n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",{className:p.a.headerMessage},"Register now for free."),n.a.createElement("form",{onSubmit:h((async e=>{r(!0);try{const t=await o.a.post("signup",e),{data:s}=t;s.data?(Object(u.c)("token",s.data.token),o.a.get("/",{headers:{authorization:`Bearer ${s.data.token}`}}).then((({data:e})=>{a({...e.data})})).catch((e=>{console.log(e)}))):(d(s.message||s[0].msg),r(!1))}catch(c){d(c.message),r(!1)}})),className:"form "+p.a.signupForm},n.a.createElement("div",{className:"text "+p.a.errorMessage},b.email&&b.email.message||b.password&&b.password.message),n.a.createElement("div",null,n.a.createElement("div",{className:"text"},"Username"),n.a.createElement("input",{name:"username",ref:E,className:"input "+p.a.inputBox})),n.a.createElement("div",null,n.a.createElement("div",{className:"text"},"Email"),n.a.createElement("input",{name:"email",type:"email",ref:E({required:{value:!0,message:"Email required."},pattern:{value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:"Invalid email address."}}),className:"input "+p.a.inputBox})),n.a.createElement("div",null,n.a.createElement("div",{className:"text"},"Password"),n.a.createElement("input",{name:"password",type:"password",ref:E({required:{value:!0,message:"Password required."},minLength:{value:5,message:"Password should be at least 5 characters long."},maxLength:{value:30,message:"Password should be at least 5 characters long."}}),className:"input "+p.a.inputBox})),n.a.createElement("div",null,n.a.createElement("button",{type:"submit",className:"input button "+p.a.signupButton},"Sign Up")),n.a.createElement(m.a,{to:"/login",className:"text"},"Already have an account?"))))};a.default=function(){const e=Object(c.default)(),{siteConfig:a={}}=e;return n.a.createElement(r.a,{title:`Hello from ${a.title}`,description:"Description will go into a meta tag in <head />"},n.a.createElement(E,null))}}}]);