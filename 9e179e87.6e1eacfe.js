(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{125:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var i=n(3),o=n(8),r=(n(0),n(138)),s={id:"logistic-regression",title:"Logistic Regression",sidebar_label:"Logistic Regression"},a={unversionedId:"EasyTrack/logistic-regression",id:"EasyTrack/logistic-regression",isDocsHomePage:!1,title:"Logistic Regression",description:"Logistic Regression is a Machine Learning algorithm which is used for the classification problems, it is a predictive analysis algorithm and based on the concept of probability.We can call a Logistic Regression a Linear Regression model but the Logistic Regression uses a more complex cost function, this cost function can be defined as the \u2018Sigmoid function\u2019 or also known as the \u2018logistic function\u2019 instead of a linear function. The hypothesis of logistic regression tends it to limit the cost function between 0 and 1. Therefore linear functions fail to represent it as it can have a value greater than 1 or less than 0 which is not possible as per the hypothesis of logistic regression.",source:"@site/docs/EasyTrack/logistic-regression.md",slug:"/EasyTrack/logistic-regression",permalink:"/docs/EasyTrack/logistic-regression",editUrl:"https://github.com/OneStep-elecTRON/docs/EasyTrack/logistic-regression.md",version:"current",sidebar_label:"Logistic Regression",sidebar:"learningTracksSidebar",previous:{title:"Linear Regression",permalink:"/docs/EasyTrack/linear-regression"},next:{title:"Decision Tree",permalink:"/docs/EasyTrack/decision-tree"}},c=[],l={toc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Logistic Regression is a Machine Learning algorithm which is used for the classification problems, it is a predictive analysis algorithm and based on the concept of probability.We can call a Logistic Regression a Linear Regression model but the Logistic Regression uses a more complex cost function, this cost function can be defined as the \u2018Sigmoid function\u2019 or also known as the \u2018logistic function\u2019 instead of a linear function. The hypothesis of logistic regression tends it to limit the cost function between 0 and 1. Therefore linear functions fail to represent it as it can have a value greater than 1 or less than 0 which is not possible as per the hypothesis of logistic regression. ",Object(r.b)("br",null)),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"https://raw.githubusercontent.com/OneStep-elecTRON/ContentSection/main/Courses/easy_track/Logistic%20Regression/Logreg-1.png",alt:"drawing",width:"700"})),Object(r.b)("p",null,"So whats this sigmoid function? In order to map predicted values to probabilities, we use the Sigmoid function. The function maps any real value into another value between 0 and 1. In machine learning, we use sigmoid to map predictions to probabilities.",Object(r.b)("br",null)),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"https://raw.githubusercontent.com/OneStep-elecTRON/ContentSection/main/Courses/easy_track/Logistic%20Regression/Logreg-2.png",alt:"drawing",width:"700"})),Object(r.b)("p",null,"We use logistic regression for classification problems and it is known to give great results. It creates a boundary or a line that divides the two classes of the data that we have and tries to do it in the best possible way to ensure better classification. Let's say we have to build a classifier that classifies between different species of flowers based on their different features or maybe you wish to classsify the different breeeds of dogs based on their features, for all this, we can make use of Logistic Regression.",Object(r.b)("br",null)),Object(r.b)("p",null,"This was the basic knowledge and intuition that you need before you start implementing them with the help of the notebook and also do the quiz that will ensure that you have the right understanding of the concepts.",Object(r.b)("br",null)),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Implementation Walkthrough")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Learn this section on ",Object(r.b)("a",{href:"https://colab.research.google.com/drive/1TPhijTvqIPMOjwKtTCqQNFloJu3L6soC?usp=sharing"},"Google Colab.")))))}u.isMDXComponent=!0},138:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var i=n(0),o=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},b=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},g=o.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=u(n),g=i,d=b["".concat(s,".").concat(g)]||b[g]||p[g]||r;return n?o.a.createElement(d,a(a({ref:t},l),{},{components:n})):o.a.createElement(d,a({ref:t},l))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=g;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var l=2;l<r;l++)s[l]=n[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);