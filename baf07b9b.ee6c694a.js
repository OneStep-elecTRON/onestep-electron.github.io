(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{128:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(8),a=(n(0),n(136)),i=n(139),s={id:"decision-tree",title:"Decision Tree",sidebar_label:"Decision Tree",custom_edit_url:"https://github.com/OneStep-elecTRON/onestep-electron-content"},c={unversionedId:"EasyTrack/decision-tree",id:"EasyTrack/decision-tree",isDocsHomePage:!1,title:"Decision Tree",description:"When we talk about classification type problem statement, one of the most common algorithm that people tend to go with is Decision tree. Let's try to understand Decision tree and how does it work exactly. This algorithm can be used for both classification and regression but in most cases it is used for classification. In decision tree we split our data into different nodes in the tree. For the splitting purpose we use something known as Entropy that helps us in selecting the right features to split our data inorder to make our decision tree. Entropy helps us to determine the purity of a split. A pure subsplit means we either get a value of 0 or 1(Yes or No). The goal in Decision tree is to get to the leaf node as quickly as possible. For this purpose we need to select the right features and parameters. Whenever we perform a split, we need to calculate the purity of the split and this is where we use Entropy. Let's say we need to classify whether a car will be sold or not given it's different properties and features. Let's see how we can calculate the entropy and determine the split for the above case.",source:"@site/docs/EasyTrack/decisiontree.md",slug:"/EasyTrack/decision-tree",permalink:"/docs/EasyTrack/decision-tree",editUrl:"https://github.com/OneStep-elecTRON/onestep-electron-content",version:"current",sidebar_label:"Decision Tree",sidebar:"learningTracksSidebar",previous:{title:"Logistic Regression",permalink:"/docs/EasyTrack/logistic-regression"},next:{title:"K-Nearest Neighbors (KNN)",permalink:"/docs/EasyTrack/knn"}},u=[],l={toc:u};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"When we talk about classification type problem statement, one of the most common algorithm that people tend to go with is Decision tree. Let's try to understand Decision tree and how does it work exactly. This algorithm can be used for both classification and regression but in most cases it is used for classification. In decision tree we split our data into different nodes in the tree. For the splitting purpose we use something known as ",Object(a.b)("strong",{parentName:"p"},"Entropy")," that helps us in selecting the right features to split our data inorder to make our decision tree. Entropy helps us to determine the purity of a split. A pure subsplit means we either get a value of 0 or 1(Yes or No). The goal in Decision tree is to get to the leaf node as quickly as possible. For this purpose we need to select the right features and parameters. Whenever we perform a split, we need to calculate the purity of the split and this is where we use Entropy. Let's say we need to classify whether a car will be sold or not given it's different properties and features. Let's see how we can calculate the entropy and determine the split for the above case.",Object(a.b)("br",null)),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"https://raw.githubusercontent.com/OneStep-elecTRON/ContentSection/main/Courses/easy_track/Decision%20Trees/DecisionTree-1.png",alt:"drawing",width:"700"})),Object(a.b)("p",null,"We also need to understand a term known as ",Object(a.b)("strong",{parentName:"p"},"Information gain"),". We use information gain to device our root node for the tree. We take the average of all the entropies based on a specific split. On paper this is a long process but for our system it is a very small task. We need to select that split which has the highest information gain for making our decision tree. Once we have our root node, we can either calculate the entropy for rest of the splits and use those splits which have the least entropy or go with a faster approach and use Gini Impurity. ",Object(a.b)("strong",{parentName:"p"},"Gini impurity")," is used over entropy in ensemble as it is faster and takes computationally less time as it doesn't contain any logarithmic calculation in it's formula which usually takes more time to compute. ",Object(a.b)("br",null)),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"https://raw.githubusercontent.com/OneStep-elecTRON/ContentSection/main/Courses/easy_track/Decision%20Trees/DecisionTree-2.png",alt:"drawing",width:"700"})),Object(a.b)("p",null,"Decision trees have one disadvantage. They suffer from the problem of overfitting as the decision trees tend to perform very well on training data but fail to perform on testing data. This is what we call having low bias and high variance. This problem can be overcome with help of decision tree pruning or just using Random forests. We will learn about them next as they are based on Decision trees. Now we know how decision trees work so let's quickly summarize everything we just learnt. ",Object(a.b)("br",null)),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Decision trees can be used for both classification and regression problem statement but it is mostly used for classification."),Object(a.b)("li",{parentName:"ul"},"We make use of Information gain to get the Root node and then use either Entropy or Gini impurity to determine the further splits and to determine what features to use for the split. We choose the value which is lower when we compare entropies of 2 nodes and these values will be between 0 and 1."),Object(a.b)("li",{parentName:"ul"},"We keep splitting untill we reach the leaf node, the goal is to reach this leaf node as quickly as possible."),Object(a.b)("li",{parentName:"ul"},"Decision trees have low bias and high variance which is the condition for overfitting. We can eliminate this by using Decision tree pruning or using Random forest about which we will study in the next section.")),Object(a.b)("p",null,"With this we come to an end to the Decision Trees theory and we can go on to the Notebooks and Hands-On exercises. ",Object(a.b)("br",null)),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Implementation Walkthrough")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Learn this section on ",Object(a.b)("a",{href:"https://colab.research.google.com/drive/1qYanhuNI6e9-ohaNSf2G28Z34AljRyuT?usp=sharing"},"Google Colab.")))),Object(a.b)(i.c,{mdxType:"Quiz"},Object(a.b)(i.b,{mdxType:"Question"},"Entropy values fall between?"),Object(a.b)(i.a,{answers:["0 and 1","-1 and 1","More than 1","None of these"],correctIndex:0,track:"basic",mdxType:"AnswerPanel"})))}p.isMDXComponent=!0},136:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,h=p["".concat(i,".").concat(f)]||p[f]||d[f]||a;return n?o.a.createElement(h,s(s({ref:t},u),{},{components:n})):o.a.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},137:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},139:function(e,t,n){"use strict";n.d(t,"c",(function(){return b})),n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return y}));var r=n(3),o=n(8),a=n(0),i=n.n(a),s=n(137),c=n(140),u=n.n(c),l=n(26),p=n(25),d=n(86),f=n.n(d),h=n(11),b=function(e){var t=e.children,n=Object(o.a)(e,["children"]);return i.a.createElement("div",Object(r.a)({className:f.a.quiz},n),t)},m=function(e){var t=e.children,n=Object(o.a)(e,["children"]);return i.a.createElement("div",Object(r.a)({className:f.a.question},n),t)},y=function(e){var t=e.answers,n=e.correctIndex,c=e.track,d=Object(o.a)(e,["answers","correctIndex","track"]),b=Object(a.useState)(-1),m=b[0],y=b[1],g=Object(a.useContext)(h.a),w=g[0],v=g[1],O=function(e){var t=[f.a.button];return-1!==m&&(e===n?t.push(f.a.correct):e==m&&t.push(f.a.wrong)),t};return i.a.createElement("div",Object(r.a)({className:f.a.grid},d),t.map((function(e,t){return i.a.createElement("button",{key:t,onClick:function(){return function(e){if(-1===m&&(y(e),w)){var t;l.a.patch("/quiz",{track:c,isCorrect:n===e},{headers:{authorization:"Bearer "+Object(p.b)("token")}}).then((function(e){var t=e.data;console.log(t)})).catch((function(e){console.log(e)})),l.a.patch("/progress",{track:c,count:w.track[c].progress},{headers:{authorization:"Bearer "+Object(p.b)("token")}}).then((function(e){var t=e.data;console.log(t)})).catch((function(e){console.log(e)}));var r=n===e?1:0,o=u()(w,{track:(t={},t[c]={quizScore:{$set:w.track[c].quizScore+r},totalQuizAnswered:{$set:w.track[c].totalQuizAnswered+1},progress:{$set:w.track[c].progress+20}},t)});v(o)}}(t)},className:Object(s.a)(O(t))},e)})))}},140:function(e,t,n){"use strict";(function(n){function r(e){return"object"!=typeof e||"toString"in e?e:Object.prototype.toString.call(e).slice(8,-1)}Object.defineProperty(t,"__esModule",{value:!0});var o="object"==typeof n&&!0;function a(e,t){if(!e){if(o)throw new Error("Invariant failed");throw new Error(t())}}t.invariant=a;var i=Object.prototype.hasOwnProperty,s=Array.prototype.splice,c=Object.prototype.toString;function u(e){return c.call(e).slice(8,-1)}var l=Object.assign||function(e,t){return p(t).forEach((function(n){i.call(t,n)&&(e[n]=t[n])})),e},p="function"==typeof Object.getOwnPropertySymbols?function(e){return Object.keys(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.keys(e)};function d(e){return Array.isArray(e)?l(e.constructor(e.length),e):"Map"===u(e)?new Map(e):"Set"===u(e)?new Set(e):e&&"object"==typeof e?l(Object.create(Object.getPrototypeOf(e)),e):e}var f=function(){function e(){this.commands=l({},h),this.update=this.update.bind(this),this.update.extend=this.extend=this.extend.bind(this),this.update.isEquals=function(e,t){return e===t},this.update.newContext=function(){return(new e).update}}return Object.defineProperty(e.prototype,"isEquals",{get:function(){return this.update.isEquals},set:function(e){this.update.isEquals=e},enumerable:!0,configurable:!0}),e.prototype.extend=function(e,t){this.commands[e]=t},e.prototype.update=function(e,t){var n=this,r="function"==typeof t?{$apply:t}:t;Array.isArray(e)&&Array.isArray(r)||a(!Array.isArray(r),(function(){return"update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value."})),a("object"==typeof r&&null!==r,(function(){return"update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the following commands: "+Object.keys(n.commands).join(", ")+"."}));var o=e;return p(r).forEach((function(t){if(i.call(n.commands,t)){var a=e===o;o=n.commands[t](r[t],o,r,e),a&&n.isEquals(o,e)&&(o=e)}else{var s="Map"===u(e)?n.update(e.get(t),r[t]):n.update(e[t],r[t]),c="Map"===u(o)?o.get(t):o[t];n.isEquals(s,c)&&(void 0!==s||i.call(e,t))||(o===e&&(o=d(e)),"Map"===u(o)?o.set(t,s):o[t]=s)}})),o},e}();t.Context=f;var h={$push:function(e,t,n){return m(t,n,"$push"),e.length?t.concat(e):t},$unshift:function(e,t,n){return m(t,n,"$unshift"),e.length?e.concat(t):t},$splice:function(e,t,n,o){return function(e,t){a(Array.isArray(e),(function(){return"Expected $splice target to be an array; got "+r(e)})),g(t.$splice)}(t,n),e.forEach((function(e){g(e),t===o&&e.length&&(t=d(o)),s.apply(t,e)})),t},$set:function(e,t,n){return function(e){a(1===Object.keys(e).length,(function(){return"Cannot have more than one key in an object with $set"}))}(n),e},$toggle:function(e,t){y(e,"$toggle");var n=e.length?d(t):t;return e.forEach((function(e){n[e]=!t[e]})),n},$unset:function(e,t,n,r){return y(e,"$unset"),e.forEach((function(e){Object.hasOwnProperty.call(t,e)&&(t===r&&(t=d(r)),delete t[e])})),t},$add:function(e,t,n,r){return w(t,"$add"),y(e,"$add"),"Map"===u(t)?e.forEach((function(e){var n=e[0],o=e[1];t===r&&t.get(n)!==o&&(t=d(r)),t.set(n,o)})):e.forEach((function(e){t!==r||t.has(e)||(t=d(r)),t.add(e)})),t},$remove:function(e,t,n,r){return w(t,"$remove"),y(e,"$remove"),e.forEach((function(e){t===r&&t.has(e)&&(t=d(r)),t.delete(e)})),t},$merge:function(e,t,n,o){var i,s;return i=t,a((s=e)&&"object"==typeof s,(function(){return"update(): $merge expects a spec of type 'object'; got "+r(s)})),a(i&&"object"==typeof i,(function(){return"update(): $merge expects a target of type 'object'; got "+r(i)})),p(e).forEach((function(n){e[n]!==t[n]&&(t===o&&(t=d(o)),t[n]=e[n])})),t},$apply:function(e,t){var n;return a("function"==typeof(n=e),(function(){return"update(): expected spec of $apply to be a function; got "+r(n)+"."})),e(t)}},b=new f;function m(e,t,n){a(Array.isArray(e),(function(){return"update(): expected target of "+r(n)+" to be an array; got "+r(e)+"."})),y(t[n],n)}function y(e,t){a(Array.isArray(e),(function(){return"update(): expected spec of "+r(t)+" to be an array; got "+r(e)+". Did you forget to wrap your parameter in an array?"}))}function g(e){a(Array.isArray(e),(function(){return"update(): expected spec of $splice to be an array of arrays; got "+r(e)+". Did you forget to wrap your parameters in an array?"}))}function w(e,t){var n=u(e);a("Map"===n||"Set"===n,(function(){return"update(): "+r(t)+" expects a target of type Set or Map; got "+r(n)}))}t.isEquals=b.update.isEquals,t.extend=b.extend,t.default=b.update,t.default.default=e.exports=l(t.default,t)}).call(this,n(51))}}]);