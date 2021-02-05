(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{129:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,b=p["".concat(i,".").concat(h)]||p[h]||d[h]||o;return n?r.a.createElement(b,s(s({ref:t},c),{},{components:n})):r.a.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(8),o=(n(0),n(129)),i={id:"knn",title:"K-Nearest Neighbors (KNN)",sidebar_label:"K-Nearest Neighbors (KNN)"},s={unversionedId:"EasyTrack/knn",id:"EasyTrack/knn",isDocsHomePage:!1,title:"K-Nearest Neighbors (KNN)",description:"We have seen many Classification algorithms so far and now it is time for us to explore KNN. K-Nearest neighbors or KNN is a supervised learning technique which can be used for both classification and regression type problems. But mostly, KNNs are used for classification. Compared to others, KNN is very simple to understand and implement. Let's try to understand it with help of some examples and diagrams.",source:"@site/docs/EasyTrack/knn.md",slug:"/EasyTrack/knn",permalink:"/docs/EasyTrack/knn",editUrl:"https://github.com/OneStep-elecTRON/docs/EasyTrack/knn.md",version:"current",sidebar_label:"K-Nearest Neighbors (KNN)",sidebar:"learningTracksSidebar",previous:{title:"Support Vector Machine (SVM)",permalink:"/docs/EasyTrack/svm"},next:{title:"Introduction to Intermediate Track",permalink:"/docs/IntermediateTrack/"}},l=[],c={toc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We have seen many Classification algorithms so far and now it is time for us to explore KNN. K-Nearest neighbors or KNN is a supervised learning technique which can be used for both classification and regression type problems. But mostly, KNNs are used for classification. Compared to others, KNN is very simple to understand and implement. Let's try to understand it with help of some examples and diagrams.",Object(o.b)("br",null)),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"https://raw.githubusercontent.com/OneStep-elecTRON/ContentSection/main/KNN/Knn-1.png",alt:"drawing",width:"700"})),Object(o.b)("p",null,"In the above diagram we have 2 classes, Yes and No. Let's assume that you want to get into a college and we have the data of your TOEFL scores, your GRE scores and College CGPA. We have a black point which is our target point. In KNN, we calculate the distance between our target point and the 'k' points that are close to it. So in the above case, we take the value of K as 3, when we apply KNN, we calculate the Euclidean distance between our target point and all the other points in the plane and the 3 points that are closest to our target points will determine our output. Maybe you have great TOEFL, GRE scores along with a good CGPA and hence in the abve case the 3 closest points to the target point fall in the class 'Yes'. Hence the model will give the output 'Yes'. You can also end up with the case where you have 2 points of 'Yes' class and 1 point of 'No' class but in all the cases the majority votes will win, this is an important point to remember. KNN is said to be a lazy learning algorithm and the outputs are found at time of execution. ",Object(o.b)("br",null)),Object(o.b)("p",null,"Now the question is how do we determine the K value? Well, there is no proper statistical method to determine the optimal K value. Trial and error method is one of the ways to determine the K value but there is still a way to find an optimal K value. Define a range and plot a graph for error rate versus K values and the K value that gives the lowest error rate is the most optimal K value.",Object(o.b)("br",null)),Object(o.b)("p",null,"We will just quickly summarize it all for you and then we can move on the Notebooks section."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Check the Type of problem statement you have. If it's a classification problem, KNN might be a good choice to go with."),Object(o.b)("li",{parentName:"ul"},"In KNN we calculate the Euclidean distance between the points in the plane and our target point."),Object(o.b)("li",{parentName:"ul"},"We define a K value and the K points having the least euclidean distance between them and our target points would determine our final output."),Object(o.b)("li",{parentName:"ul"},"There is no specific way to determine the K value but you can plot a graph of error rate versus K values and the one with least errror rate would be the optimal K value for our algorithm.",Object(o.b)("br",null))),Object(o.b)("p",null,"With KNN done, you can move onto the Notebooks and then implement whatever you have learnt so far in the Hands-on activity.",Object(o.b)("br",null)))}u.isMDXComponent=!0}}]);