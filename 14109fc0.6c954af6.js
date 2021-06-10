(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{136:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),l=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=a,h=p["".concat(i,".").concat(f)]||p[f]||d[f]||o;return n?r.a.createElement(h,c(c({ref:t},u),{},{components:n})):r.a.createElement(h,c({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},137:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},139:function(e,t,n){"use strict";n.d(t,"c",(function(){return h})),n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return m}));var a=n(3),r=n(0),o=n.n(r),i=n(137),c=n(140),s=n.n(c),u=n(26),l=n(25),p=n(86),d=n.n(p),f=n(11);const h=({children:e,...t})=>o.a.createElement("div",Object(a.a)({className:d.a.quiz},t),e),b=({children:e,...t})=>o.a.createElement("div",Object(a.a)({className:d.a.question},t),e),m=({answers:e,correctIndex:t,track:n,...c})=>{const[p,h]=Object(r.useState)(-1),[b,m]=Object(r.useContext)(f.a),y=e=>{const n=[d.a.button];return-1!==p&&(e===t?n.push(d.a.correct):e==p&&n.push(d.a.wrong)),n};return o.a.createElement("div",Object(a.a)({className:d.a.grid},c),e.map(((e,a)=>o.a.createElement("button",{key:a,onClick:()=>(e=>{if(-1===p&&(h(e),b)){u.a.patch("/quiz",{track:n,isCorrect:t===e},{headers:{authorization:`Bearer ${Object(l.b)("token")}`}}).then((({data:e})=>{console.log(e)})).catch((e=>{console.log(e)})),u.a.patch("/progress",{track:n,count:b.track[n].progress},{headers:{authorization:`Bearer ${Object(l.b)("token")}`}}).then((({data:e})=>{console.log(e)})).catch((e=>{console.log(e)}));const a=t===e?1:0,r=s()(b,{track:{[n]:{quizScore:{$set:b.track[n].quizScore+a},totalQuizAnswered:{$set:b.track[n].totalQuizAnswered+1},progress:{$set:b.track[n].progress+20}}}});m(r)}})(a),className:Object(i.a)(y(a))},e))))}},140:function(e,t,n){"use strict";(function(n){function a(e){return"object"!=typeof e||"toString"in e?e:Object.prototype.toString.call(e).slice(8,-1)}Object.defineProperty(t,"__esModule",{value:!0});var r="object"==typeof n&&!0;function o(e,t){if(!e){if(r)throw new Error("Invariant failed");throw new Error(t())}}t.invariant=o;var i=Object.prototype.hasOwnProperty,c=Array.prototype.splice,s=Object.prototype.toString;function u(e){return s.call(e).slice(8,-1)}var l=Object.assign||function(e,t){return p(t).forEach((function(n){i.call(t,n)&&(e[n]=t[n])})),e},p="function"==typeof Object.getOwnPropertySymbols?function(e){return Object.keys(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.keys(e)};function d(e){return Array.isArray(e)?l(e.constructor(e.length),e):"Map"===u(e)?new Map(e):"Set"===u(e)?new Set(e):e&&"object"==typeof e?l(Object.create(Object.getPrototypeOf(e)),e):e}var f=function(){function e(){this.commands=l({},h),this.update=this.update.bind(this),this.update.extend=this.extend=this.extend.bind(this),this.update.isEquals=function(e,t){return e===t},this.update.newContext=function(){return(new e).update}}return Object.defineProperty(e.prototype,"isEquals",{get:function(){return this.update.isEquals},set:function(e){this.update.isEquals=e},enumerable:!0,configurable:!0}),e.prototype.extend=function(e,t){this.commands[e]=t},e.prototype.update=function(e,t){var n=this,a="function"==typeof t?{$apply:t}:t;Array.isArray(e)&&Array.isArray(a)||o(!Array.isArray(a),(function(){return"update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value."})),o("object"==typeof a&&null!==a,(function(){return"update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the following commands: "+Object.keys(n.commands).join(", ")+"."}));var r=e;return p(a).forEach((function(t){if(i.call(n.commands,t)){var o=e===r;r=n.commands[t](a[t],r,a,e),o&&n.isEquals(r,e)&&(r=e)}else{var c="Map"===u(e)?n.update(e.get(t),a[t]):n.update(e[t],a[t]),s="Map"===u(r)?r.get(t):r[t];n.isEquals(c,s)&&(void 0!==c||i.call(e,t))||(r===e&&(r=d(e)),"Map"===u(r)?r.set(t,c):r[t]=c)}})),r},e}();t.Context=f;var h={$push:function(e,t,n){return m(t,n,"$push"),e.length?t.concat(e):t},$unshift:function(e,t,n){return m(t,n,"$unshift"),e.length?e.concat(t):t},$splice:function(e,t,n,r){return function(e,t){o(Array.isArray(e),(function(){return"Expected $splice target to be an array; got "+a(e)})),g(t.$splice)}(t,n),e.forEach((function(e){g(e),t===r&&e.length&&(t=d(r)),c.apply(t,e)})),t},$set:function(e,t,n){return function(e){o(1===Object.keys(e).length,(function(){return"Cannot have more than one key in an object with $set"}))}(n),e},$toggle:function(e,t){y(e,"$toggle");var n=e.length?d(t):t;return e.forEach((function(e){n[e]=!t[e]})),n},$unset:function(e,t,n,a){return y(e,"$unset"),e.forEach((function(e){Object.hasOwnProperty.call(t,e)&&(t===a&&(t=d(a)),delete t[e])})),t},$add:function(e,t,n,a){return v(t,"$add"),y(e,"$add"),"Map"===u(t)?e.forEach((function(e){var n=e[0],r=e[1];t===a&&t.get(n)!==r&&(t=d(a)),t.set(n,r)})):e.forEach((function(e){t!==a||t.has(e)||(t=d(a)),t.add(e)})),t},$remove:function(e,t,n,a){return v(t,"$remove"),y(e,"$remove"),e.forEach((function(e){t===a&&t.has(e)&&(t=d(a)),t.delete(e)})),t},$merge:function(e,t,n,r){var i,c;return i=t,o((c=e)&&"object"==typeof c,(function(){return"update(): $merge expects a spec of type 'object'; got "+a(c)})),o(i&&"object"==typeof i,(function(){return"update(): $merge expects a target of type 'object'; got "+a(i)})),p(e).forEach((function(n){e[n]!==t[n]&&(t===r&&(t=d(r)),t[n]=e[n])})),t},$apply:function(e,t){var n;return o("function"==typeof(n=e),(function(){return"update(): expected spec of $apply to be a function; got "+a(n)+"."})),e(t)}},b=new f;function m(e,t,n){o(Array.isArray(e),(function(){return"update(): expected target of "+a(n)+" to be an array; got "+a(e)+"."})),y(t[n],n)}function y(e,t){o(Array.isArray(e),(function(){return"update(): expected spec of "+a(t)+" to be an array; got "+a(e)+". Did you forget to wrap your parameter in an array?"}))}function g(e){o(Array.isArray(e),(function(){return"update(): expected spec of $splice to be an array of arrays; got "+a(e)+". Did you forget to wrap your parameters in an array?"}))}function v(e,t){var n=u(e);o("Map"===n||"Set"===n,(function(){return"update(): "+a(t)+" expects a target of type Set or Map; got "+a(n)}))}t.isEquals=b.update.isEquals,t.extend=b.extend,t.default=b.update,t.default.default=e.exports=l(t.default,t)}).call(this,n(51))},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),o=(n(0),n(136)),i=n(139),c={id:"knn",title:"K-Nearest Neighbors (KNN)",sidebar_label:"K-Nearest Neighbors (KNN)",custom_edit_url:"https://github.com/OneStep-elecTRON/onestep-electron-content"},s={unversionedId:"EasyTrack/knn",id:"EasyTrack/knn",isDocsHomePage:!1,title:"K-Nearest Neighbors (KNN)",description:"We have seen many Classification algorithms so far and now it is time for us to explore KNN. K-Nearest neighnors or KNN is a supervised learning technique which can be used for both classification and regression type problems. But mostly, KNNs are used for classification. Compared to others, KNN is very simple to understand and implement. Let's try to understand it with help of some examples and diagrams.",source:"@site/docs/EasyTrack/knn.md",slug:"/EasyTrack/knn",permalink:"/docs/EasyTrack/knn",editUrl:"https://github.com/OneStep-elecTRON/onestep-electron-content",version:"current",sidebar_label:"K-Nearest Neighbors (KNN)",sidebar:"learningTracksSidebar",previous:{title:"Decision Tree",permalink:"/docs/EasyTrack/decision-tree"},next:{title:"Random Forest",permalink:"/docs/EasyTrack/random-forest"}},u=[],l={toc:u};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We have seen many Classification algorithms so far and now it is time for us to explore KNN. K-Nearest neighnors or KNN is a supervised learning technique which can be used for both classification and regression type problems. But mostly, KNNs are used for classification. Compared to others, KNN is very simple to understand and implement. Let's try to understand it with help of some examples and diagrams.",Object(o.b)("br",null)),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"https://raw.githubusercontent.com/OneStep-elecTRON/ContentSection/main/Courses/easy_track/KNN/Knn-1.png",alt:"drawing",width:"700"})),Object(o.b)("p",null,"In the above diagram we have 2 classes, Yes and No. Let's assume that you want to get into a college and we have the data of your TOEFL scores, your GRE scores and College CGPA. We have a black point which is our target point. In KNN, we calculate the distance between our target point and the 'k' points that are close to it. So in the above case, we take the value of K as 3, when we apply KNN, we calculate the Euclidean distance between our target point and all the other points in the plane and the 3 points that are closest to our target points will determine our output. Maybe you have great TOEFL, GRE scores along with a good CGPA and hence in the abve case the 3 closest points to the target point fall in the class 'Yes'. Hence the model will give the output 'Yes'. You can also end up with the case where you have 2 points of 'Yes' class and 1 point of 'No' class but in all the cases the majority votes will win, this is an important point to remember. KNN is said to be a lazy learning algorithm and the outputs are found at time of execution. ",Object(o.b)("br",null)),Object(o.b)("p",null,"Now the question is how do we determine the K value? Well, there is no proper statistical method to determine the optimal K value. Trial and error method is one of the ways to determine the K value but there is still a way to find an optimal K value. Define a range and plot a graph for error rate versus K values and the K value that gives the lowest error rate is the most optimal K value.",Object(o.b)("br",null)),Object(o.b)("p",null,"We will just quickly summarize it all for you and then we can move on the Notebooks section."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Check the Type of problem statement you have. If it's a classification problem, KNN might be a good choice to go with."),Object(o.b)("li",{parentName:"ul"},"In KNN we calculate the Euclidean distance between the points in the plane and our target point."),Object(o.b)("li",{parentName:"ul"},"We define a K value and the K points having the least euclidean distance between them and our target points would determine our final output."),Object(o.b)("li",{parentName:"ul"},"There is no specific way to determine the K value but you can plot a graph of error rate versus K values and the one with least errror rate would be the optimal K value for our algorithm.",Object(o.b)("br",null))),Object(o.b)("p",null,"With KNN done, you can move onto the Notebooks and then implement whatever you have learnt so far in the Hands-on activity.",Object(o.b)("br",null)),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Implementation Walkthrough")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Learn this section on ",Object(o.b)("a",{href:"https://colab.research.google.com/drive/1yxRhrs3VZ2hkn-hLqMbX2b6XhFZs1jyu?usp=sharing"},"Google Colab.")))),Object(o.b)(i.c,{mdxType:"Quiz"},Object(o.b)(i.b,{mdxType:"Question"},"While finding the optimal K value, we make use of?"),Object(o.b)(i.a,{answers:["Error Rate","Accuracy","Both","None of these"],correctIndex:2,track:"basic",mdxType:"AnswerPanel"})))}p.isMDXComponent=!0}}]);