(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),o=(n(0),n(136)),i=n(139),c={id:"k-means",title:"K-Means",sidebar_label:"K-Means",custom_edit_url:"https://github.com/OneStep-elecTRON/onestep-electron-content"},s={unversionedId:"EasyTrack/k-means",id:"EasyTrack/k-means",isDocsHomePage:!1,title:"K-Means",description:"K-Means clustering or simply clustering is an unsupervised learning technique. Unlike all the other techniques, which all came under supervised learning techniques, Kmeans is considered as unsupervised as there is no solid ground truth to compare our output with. It can only help us to determine the structure of our data and find smaller groups of data within our main data set.",source:"@site/docs/EasyTrack/kmeans.md",slug:"/EasyTrack/k-means",permalink:"/docs/EasyTrack/k-means",editUrl:"https://github.com/OneStep-elecTRON/onestep-electron-content",version:"current",sidebar_label:"K-Means",sidebar:"learningTracksSidebar",previous:{title:"Support Vector Machine (SVM)",permalink:"/docs/EasyTrack/svm"},next:{title:"Introduction",permalink:"/docs/IntermediateTrack/"}},u=[],l={toc:u};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"K-Means clustering or simply clustering is an unsupervised learning technique. Unlike all the other techniques, which all came under supervised learning techniques, Kmeans is considered as unsupervised as there is no solid ground truth to compare our output with. It can only help us to determine the structure of our data and find smaller groups of data within our main data set. ",Object(o.b)("br",null)),Object(o.b)("p",null,"The main goal is to divide our data into sub categories or clusters or we can say  K pre-defined clusters. But how exactly do we create these clusters? Kmeans checks the similarities between different points and groups them in clusters. Remember the Euclidean distance that we discussed in KNN? We apply the same concept here as well in order to form our clusters. Let's understand the working using an example.",Object(o.b)("br",null)),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"https://raw.githubusercontent.com/OneStep-elecTRON/ContentSection/main/Courses/easy_track/KMeans/KMeans-1.png",alt:"drawing",width:"700"})),Object(o.b)("p",null,"Let's say we are given a table with heights and weights of students and we need to perform clustering on it. In the above image we have 3 rows and 2 columns. We take the first point which forms our cluster one and we then take our second point which forms our second cluster. Now, when we bring in the third row entries, we need to check in which cluster does it belong, for that purpose we will be using our K1 which is our first point and K2 which is our second point and find the euclidean distance between them and the new point. The new point will become part of the cluster with which it has the least euclidean distance. ",Object(o.b)("br",null)),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"https://raw.githubusercontent.com/OneStep-elecTRON/ContentSection/main/Courses/easy_track/KMeans/KMeans-2.png",alt:"drawing",width:"700"})),Object(o.b)("p",null,"As we can see it has the least distance from K2 so it will become part of that cluster. Once we have found the cluster it belongs to , we need to recalculate the centroid for that cluster. This will give us a new centroid and whenever a new point enters, we will be using this new centroid to calculate the euclidean distance and this process goes on untill all the elements become part of some cluster. No point can be part of 2 clusters at the same time.",Object(o.b)("br",null)),Object(o.b)("p",null,"But again, how do we know what is the K value which is nothing but the optimal amount of Clusters required? For that we have something called the elbow method which helps us in selecting the optimal number of clusters. The idea is very simple. We need to calculate the sum of squared errors or SSE for each value of K in a given range. We will then plot a graph. It should look like an arm and the point where there is sudden dip in the plot or an 'elbow' is present, we take that K value to be the optimal K value. As we increase K value, the SSE tends to 0. So the goal is to choose a small value of K which also gives us a small SSE. We have already implemented this for you in the notebook below so you may go through them to understand it's implementation.",Object(o.b)("br",null)),Object(o.b)("p",null,"Let's quickly summarise what we just learnt:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"KMeans is a unsupervised learning technique."),Object(o.b)("li",{parentName:"ul"},"When we are trying to cluster our data points, we first set some random number of clusters or some random K value. And assign some centroids."),Object(o.b)("li",{parentName:"ul"},"Whenever we get a new point, we calculate the Euclidean distance between these points and the one that gives least euclidean distance, the new point will belong to that cluster."),Object(o.b)("li",{parentName:"ul"},"We then need to determine the new centroid of the cluster in which we add our target point. "),Object(o.b)("li",{parentName:"ul"},"We repeat this for any new point that we have in our plane."),Object(o.b)("li",{parentName:"ul"},"To determine the optimal K value we can make use of elbow method to get better clusters.")),Object(o.b)("p",null,"With this we come to an end to the theory related to KMeans, you might go on to the Notebooks section followed by the Hand-On activity. ",Object(o.b)("br",null)),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Implementation Walkthrough")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Learn this section on ",Object(o.b)("a",{href:"https://colab.research.google.com/drive/1zFSwABPi-66YG-BUr7a98SrL2pQndtA_?usp=sharing"},"Google Colab.")))),Object(o.b)(i.c,{mdxType:"Quiz"},Object(o.b)(i.b,{mdxType:"Question"},"Which of the following algorithm is most sensitive to outliers?"),Object(o.b)(i.a,{answers:["K-means clustering algorithm","K-medians clustering algorithm","K-modes clustering algorithm","K-medoids clustering algorithm"],correctIndex:0,track:"basic",mdxType:"AnswerPanel"})))}p.isMDXComponent=!0},136:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=r,f=p["".concat(i,".").concat(h)]||p[h]||d[h]||o;return n?a.a.createElement(f,c(c({ref:t},u),{},{components:n})):a.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},137:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},139:function(e,t,n){"use strict";n.d(t,"c",(function(){return b})),n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return g}));var r=n(3),a=n(8),o=n(0),i=n.n(o),c=n(137),s=n(140),u=n.n(s),l=n(26),p=n(25),d=n(86),h=n.n(d),f=n(11),b=function(e){var t=e.children,n=Object(a.a)(e,["children"]);return i.a.createElement("div",Object(r.a)({className:h.a.quiz},n),t)},m=function(e){var t=e.children,n=Object(a.a)(e,["children"]);return i.a.createElement("div",Object(r.a)({className:h.a.question},n),t)},g=function(e){var t=e.answers,n=e.correctIndex,s=e.track,d=Object(a.a)(e,["answers","correctIndex","track"]),b=Object(o.useState)(-1),m=b[0],g=b[1],y=Object(o.useContext)(f.a),w=y[0],v=y[1],O=function(e){var t=[h.a.button];return-1!==m&&(e===n?t.push(h.a.correct):e==m&&t.push(h.a.wrong)),t};return i.a.createElement("div",Object(r.a)({className:h.a.grid},d),t.map((function(e,t){return i.a.createElement("button",{key:t,onClick:function(){return function(e){if(-1===m&&(g(e),w)){var t;l.a.patch("/quiz",{track:s,isCorrect:n===e},{headers:{authorization:"Bearer "+Object(p.b)("token")}}).then((function(e){var t=e.data;console.log(t)})).catch((function(e){console.log(e)})),l.a.patch("/progress",{track:s,count:w.track[s].progress},{headers:{authorization:"Bearer "+Object(p.b)("token")}}).then((function(e){var t=e.data;console.log(t)})).catch((function(e){console.log(e)}));var r=n===e?1:0,a=u()(w,{track:(t={},t[s]={quizScore:{$set:w.track[s].quizScore+r},totalQuizAnswered:{$set:w.track[s].totalQuizAnswered+1},progress:{$set:w.track[s].progress+20}},t)});v(a)}}(t)},className:Object(c.a)(O(t))},e)})))}},140:function(e,t,n){"use strict";(function(n){function r(e){return"object"!=typeof e||"toString"in e?e:Object.prototype.toString.call(e).slice(8,-1)}Object.defineProperty(t,"__esModule",{value:!0});var a="object"==typeof n&&!0;function o(e,t){if(!e){if(a)throw new Error("Invariant failed");throw new Error(t())}}t.invariant=o;var i=Object.prototype.hasOwnProperty,c=Array.prototype.splice,s=Object.prototype.toString;function u(e){return s.call(e).slice(8,-1)}var l=Object.assign||function(e,t){return p(t).forEach((function(n){i.call(t,n)&&(e[n]=t[n])})),e},p="function"==typeof Object.getOwnPropertySymbols?function(e){return Object.keys(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.keys(e)};function d(e){return Array.isArray(e)?l(e.constructor(e.length),e):"Map"===u(e)?new Map(e):"Set"===u(e)?new Set(e):e&&"object"==typeof e?l(Object.create(Object.getPrototypeOf(e)),e):e}var h=function(){function e(){this.commands=l({},f),this.update=this.update.bind(this),this.update.extend=this.extend=this.extend.bind(this),this.update.isEquals=function(e,t){return e===t},this.update.newContext=function(){return(new e).update}}return Object.defineProperty(e.prototype,"isEquals",{get:function(){return this.update.isEquals},set:function(e){this.update.isEquals=e},enumerable:!0,configurable:!0}),e.prototype.extend=function(e,t){this.commands[e]=t},e.prototype.update=function(e,t){var n=this,r="function"==typeof t?{$apply:t}:t;Array.isArray(e)&&Array.isArray(r)||o(!Array.isArray(r),(function(){return"update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value."})),o("object"==typeof r&&null!==r,(function(){return"update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the following commands: "+Object.keys(n.commands).join(", ")+"."}));var a=e;return p(r).forEach((function(t){if(i.call(n.commands,t)){var o=e===a;a=n.commands[t](r[t],a,r,e),o&&n.isEquals(a,e)&&(a=e)}else{var c="Map"===u(e)?n.update(e.get(t),r[t]):n.update(e[t],r[t]),s="Map"===u(a)?a.get(t):a[t];n.isEquals(c,s)&&(void 0!==c||i.call(e,t))||(a===e&&(a=d(e)),"Map"===u(a)?a.set(t,c):a[t]=c)}})),a},e}();t.Context=h;var f={$push:function(e,t,n){return m(t,n,"$push"),e.length?t.concat(e):t},$unshift:function(e,t,n){return m(t,n,"$unshift"),e.length?e.concat(t):t},$splice:function(e,t,n,a){return function(e,t){o(Array.isArray(e),(function(){return"Expected $splice target to be an array; got "+r(e)})),y(t.$splice)}(t,n),e.forEach((function(e){y(e),t===a&&e.length&&(t=d(a)),c.apply(t,e)})),t},$set:function(e,t,n){return function(e){o(1===Object.keys(e).length,(function(){return"Cannot have more than one key in an object with $set"}))}(n),e},$toggle:function(e,t){g(e,"$toggle");var n=e.length?d(t):t;return e.forEach((function(e){n[e]=!t[e]})),n},$unset:function(e,t,n,r){return g(e,"$unset"),e.forEach((function(e){Object.hasOwnProperty.call(t,e)&&(t===r&&(t=d(r)),delete t[e])})),t},$add:function(e,t,n,r){return w(t,"$add"),g(e,"$add"),"Map"===u(t)?e.forEach((function(e){var n=e[0],a=e[1];t===r&&t.get(n)!==a&&(t=d(r)),t.set(n,a)})):e.forEach((function(e){t!==r||t.has(e)||(t=d(r)),t.add(e)})),t},$remove:function(e,t,n,r){return w(t,"$remove"),g(e,"$remove"),e.forEach((function(e){t===r&&t.has(e)&&(t=d(r)),t.delete(e)})),t},$merge:function(e,t,n,a){var i,c;return i=t,o((c=e)&&"object"==typeof c,(function(){return"update(): $merge expects a spec of type 'object'; got "+r(c)})),o(i&&"object"==typeof i,(function(){return"update(): $merge expects a target of type 'object'; got "+r(i)})),p(e).forEach((function(n){e[n]!==t[n]&&(t===a&&(t=d(a)),t[n]=e[n])})),t},$apply:function(e,t){var n;return o("function"==typeof(n=e),(function(){return"update(): expected spec of $apply to be a function; got "+r(n)+"."})),e(t)}},b=new h;function m(e,t,n){o(Array.isArray(e),(function(){return"update(): expected target of "+r(n)+" to be an array; got "+r(e)+"."})),g(t[n],n)}function g(e,t){o(Array.isArray(e),(function(){return"update(): expected spec of "+r(t)+" to be an array; got "+r(e)+". Did you forget to wrap your parameter in an array?"}))}function y(e){o(Array.isArray(e),(function(){return"update(): expected spec of $splice to be an array of arrays; got "+r(e)+". Did you forget to wrap your parameters in an array?"}))}function w(e,t){var n=u(e);o("Map"===n||"Set"===n,(function(){return"update(): "+r(t)+" expects a target of type Set or Map; got "+r(n)}))}t.isEquals=b.update.isEquals,t.extend=b.extend,t.default=b.update,t.default.default=e.exports=l(t.default,t)}).call(this,n(51))}}]);