"use strict";(self.webpackChunkgosc_2021=self.webpackChunkgosc_2021||[]).push([[8746],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3501:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={sidebar_position:1,title:"Introduction",slug:"/2021/scancode/"},l=void 0,s={unversionedId:"2021/scancode/introduction",id:"2021/scancode/introduction",isDocsHomePage:!1,title:"Introduction",description:"\x3c!--",source:"@site/docs/2021/scancode/introduction.md",sourceDirName:"2021/scancode",slug:"/2021/scancode/",permalink:"/gsoc/docs/2021/scancode/",editUrl:"https://github.com/fossology/gsoc/edit/main/docs/2021/scancode/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Introduction",slug:"/2021/scancode/"},sidebar:"2021",previous:{title:"Installation",permalink:"/gsoc/docs/2021/minerva/installation"},next:{title:"Community Bonding",permalink:"/gsoc/docs/2021/scancode/updates/2021-05-28"}},u=[{value:"Author",id:"author",children:[]},{value:"Contact info",id:"contact-info",children:[]},{value:"Integrating ScanCode to FOSSology",id:"integrating-scancode-to-fossology",children:[]},{value:"Check out",id:"check-out",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"author"},"Author"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/itssingh"},"Sarita Singh"))),(0,a.kt)("h3",{id:"contact-info"},"Contact info"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"mailto:saritasingh.0425@gmail.com"},"Email")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/s-sarita/"},"LinkedIn"))),(0,a.kt)("h3",{id:"integrating-scancode-to-fossology"},"Integrating ScanCode to FOSSology"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Nomos")," and ",(0,a.kt)("strong",{parentName:"p"},"Monk")," are the two leading scanners FOSSology uses for license detection and Copyright for scanning ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"em"},"copyright, URL, emails")),", and ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"em"},"holders"))," name. FOSSology approach is to detect licenses with either a large (large: 2500 regexes) dataset of regex patterns (nomos) or a full string comparison against license full texts (large: ~400 texts) (monk). ",(0,a.kt)("strong",{parentName:"p"},"Atarashi")," license scanner implements multiple text statistics and information retrieval algorithms."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"ScanCode Toolkit")," is a very established license scanner similar to Nomos or Monk. It is a simple python based command line scanner that runs on Windows, Linux, and Mac. It implements a number of different approaches and integrates these into one application for identifying and classifying license-relevant content in packages."),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"basic idea")," is to use the command line interface from the ScanCode package in order to be called right from the FOSSology application. FOSSology will pass a single file and take the result from the ScanCode command line call. Scan result will include license name, the SPDX key, Score, Copyright and Holder name, Emails, and URLs present in the given code and as requested by the user."),(0,a.kt)("h3",{id:"check-out"},"Check out"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://itssingh.github.io/gsoc-blog/timeline.html"},"Proposed Timeline")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"installation"},"Installation steps"))))}d.isMDXComponent=!0}}]);