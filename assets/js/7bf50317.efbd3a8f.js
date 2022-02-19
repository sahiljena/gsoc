"use strict";(self.webpackChunkgosc_2021=self.webpackChunkgosc_2021||[]).push([[4449],{3905:function(e,t,o){o.d(t,{Zo:function(){return d},kt:function(){return h}});var a=o(7294);function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){l(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,a,l=function(e,t){if(null==e)return{};var o,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(l[o]=e[o]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(l[o]=e[o])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):n(n({},t),e)),o},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var o=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(o),h=l,f=c["".concat(s,".").concat(h)]||c[h]||u[h]||r;return o?a.createElement(f,n(n({ref:t},d),{},{components:o})):a.createElement(f,n({ref:t},d))}));function h(e,t){var o=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=o.length,n=new Array(r);n[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,n[1]=i;for(var p=2;p<r;p++)n[p]=o[p];return a.createElement.apply(null,n)}return a.createElement.apply(null,o)}c.displayName="MDXCreateElement"},2967:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var a=o(7462),l=o(3366),r=(o(7294),o(3905)),n=["components"],i={title:"Week 4",author:"Shruti Agarwal"},s=void 0,p={unversionedId:"2021/ui/updates/shruti/2021-07-06",id:"2021/ui/updates/shruti/2021-07-06",isDocsHomePage:!1,title:"Week 4",description:"\x3c!--",source:"@site/docs/2021/ui/updates/shruti/2021-07-06.md",sourceDirName:"2021/ui/updates/shruti",slug:"/2021/ui/updates/shruti/2021-07-06",permalink:"/gsoc/docs/2021/ui/updates/shruti/2021-07-06",editUrl:"https://github.com/fossology/gsoc/edit/main/docs/2021/ui/updates/shruti/2021-07-06.md",tags:[],version:"current",frontMatter:{title:"Week 4",author:"Shruti Agarwal"},sidebar:"2021",previous:{title:"Week 3",permalink:"/gsoc/docs/2021/ui/updates/shruti/2021-06-29"},next:{title:"Week 5",permalink:"/gsoc/docs/2021/ui/updates/shruti/2021-07-13"}},d=[{value:"Screenshots",id:"screenshots",children:[{value:"Home",id:"home",children:[]},{value:"Search",id:"search",children:[]},{value:"Upload File",id:"upload-file",children:[]},{value:"Custom Alert",id:"custom-alert",children:[]},{value:"Browse Page Prototype",id:"browse-page-prototype",children:[]},{value:"Move Uploads",id:"move-uploads",children:[]},{value:"Copy Uploads",id:"copy-uploads",children:[]},{value:"Delete Uploads",id:"delete-uploads",children:[]},{value:"Tooltip",id:"tooltip",children:[]}]},{value:"Contributions",id:"contributions",children:[]}],u={toc:d};function c(e){var t=e.components,i=(0,l.Z)(e,n);return(0,r.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added the separate button widget related to our theme and replaced the react-bootstrap button with our custom component."),(0,r.kt)("li",{parentName:"ul"},"Fixed the login button style."),(0,r.kt)("li",{parentName:"ul"},"Added the InputContainer in the widget for all the types which can be reusable by all the components."),(0,r.kt)("li",{parentName:"ul"},"Added the search page."),(0,r.kt)("li",{parentName:"ul"},"Added the Upload File page for which created the reusable components of ",(0,r.kt)("inlineCode",{parentName:"li"},"IgnoreScm"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"AccessLevel"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Optional Analysis")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Upload Reuse")," which can be reused by the other uploads page of server, vcs, url and schedule analysis in Jobs."),(0,r.kt)("li",{parentName:"ul"},"On creating the upload, we are simultaneously doing three processes, creating the upload and checking that it got unpacked or not, and scheduling the analysis."),(0,r.kt)("li",{parentName:"ul"},"Created the custom component for Alert and Tooltip."),(0,r.kt)("li",{parentName:"ul"},"Replaced the login alert with the custom component."),(0,r.kt)("li",{parentName:"ul"},"Added all the pages for the routes and linked them."),(0,r.kt)("li",{parentName:"ul"},"Added the prototype for the browse page."),(0,r.kt)("li",{parentName:"ul"},"Added the delete Uploads page. Created the getFolders page from where it is fetching all the folders. Created the organizeUploads which contains deleteUploadFile and getUploadsById."),(0,r.kt)("li",{parentName:"ul"},"Added the move or copy page in the organize/uploads."),(0,r.kt)("li",{parentName:"ul"},"Added the additional information for the components with Tooltip widget."),(0,r.kt)("li",{parentName:"ul"},"Added the fossology website target attribute, updated the Move Folder title and updated the styling of search page.")),(0,r.kt)("h2",{id:"screenshots"},"Screenshots"),(0,r.kt)("h3",{id:"home"},"Home"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"fix-home",src:o(8127).Z})),(0,r.kt)("h3",{id:"search"},"Search"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"search",src:o(2102).Z})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"file-search",src:o(1182).Z})),(0,r.kt)("h3",{id:"upload-file"},"Upload File"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"upload-file-error",src:o(9098).Z})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"uploaded-file",src:o(4677).Z})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"upload-file-reusable-options",src:o(5844).Z})),(0,r.kt)("h3",{id:"custom-alert"},"Custom Alert"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"custom-alert",src:o(4624).Z})),(0,r.kt)("h3",{id:"browse-page-prototype"},"Browse Page Prototype"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"browse-page-prototype",src:o(5692).Z})),(0,r.kt)("h3",{id:"move-uploads"},"Move Uploads"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"move-uploads",src:o(7310).Z})),(0,r.kt)("h3",{id:"copy-uploads"},"Copy Uploads"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"copy-uploads",src:o(2122).Z})),(0,r.kt)("h3",{id:"delete-uploads"},"Delete Uploads"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"delete-uploads",src:o(3339).Z})),(0,r.kt)("h3",{id:"tooltip"},"Tooltip"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"tooltip",src:o(559).Z})),(0,r.kt)("h2",{id:"contributions"},"Contributions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/fossology/FOSSologyUI/pull/33"},"feat(widget): added the Button widget and fixed the login button")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/fossology/FOSSologyUI/pull/34"},"feat(search): added the search page")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/fossology/FOSSologyUI/issues/44"},"Widgets for the helper messages to improve the UX")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/fossology/FOSSologyUI/pull/46"},"feat(upload): added the upload file page")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/fossology/FOSSologyUI/pull/46"},"feat(analysis): added the analysis request")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/fossology/FOSSologyUI/pull/47"},"feat(ui): added the custom component for alert and tooltip")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/fossology/FOSSologyUI/pull/48"},"feat(upload): added the delete uploads page")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/fossology/FOSSologyUI/pull/53"},"feat(browse): Added the prototype for the uploads page")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/fossology/FOSSologyUI/pull/57"},"fix(routes): added the routes for all pages")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/fossology/FOSSologyUI/pull/59"}," feat(tooltip): added the extra information")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/fossology/FOSSologyUI/pull/62"}," feat(moveUpload): Added the move upload or copy upload page")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/fossology/FOSSologyUI/pull/65"}," fix(ui): fixed the bugs in search, overview, create folder page"))))}c.isMDXComponent=!0},5692:function(e,t,o){t.Z=o.p+"assets/images/browsePagePrototype-d861bb65981aa2db04b1df334e00418a.png"},8127:function(e,t,o){t.Z=o.p+"assets/images/features-f7a21050ae1e73caad93deda70cdbbee.png"},2102:function(e,t,o){t.Z=o.p+"assets/images/search-c0b58d059d6cee9745e5c598ff986c21.png"},1182:function(e,t,o){t.Z=o.p+"assets/images/searchFiles-9f0f3ec472f743139c442d5931d34356.png"},2122:function(e,t,o){t.Z=o.p+"assets/images/copyUpload-3903fa9ddf88b0d0e00fd19f3e9b9fc9.png"},3339:function(e,t,o){t.Z=o.p+"assets/images/deleteUploads-60bb558a4cd905381f0875fc020960e8.png"},7310:function(e,t,o){t.Z=o.p+"assets/images/moveUpload-3139bc685e6912df15750d70e01d8318.png"},9098:function(e,t,o){t.Z=o.p+"assets/images/uploadFileError-bba80390497f6c8dc08ff0141ee64640.png"},5844:function(e,t,o){t.Z=o.p+"assets/images/uploadFileReusableOptions-f596329a8f04f0f455ab8690d82ce8f3.png"},4677:function(e,t,o){t.Z=o.p+"assets/images/uploadedFile-8d148ab22f1f71992e48ae5a75f32980.png"},4624:function(e,t,o){t.Z=o.p+"assets/images/customAlert-0484d57e939c6e186775d7e238e69049.png"},559:function(e,t,o){t.Z=o.p+"assets/images/tooltip-8b531422e8dfe01f61cf9a7cffa3f87c.png"}}]);