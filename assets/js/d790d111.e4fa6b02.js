"use strict";(self.webpackChunkgosc_2021=self.webpackChunkgosc_2021||[]).push([[3872],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(g,i(i({ref:t},c),{},{components:a})):n.createElement(g,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2695:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={title:"Week 3",author:"Aman Dwivedi"},p=void 0,s={unversionedId:"2021/ui/updates/aman/2021-06-29",id:"2021/ui/updates/aman/2021-06-29",isDocsHomePage:!1,title:"Week 3",description:"\x3c!--",source:"@site/docs/2021/ui/updates/aman/2021-06-29.md",sourceDirName:"2021/ui/updates/aman",slug:"/2021/ui/updates/aman/2021-06-29",permalink:"/gsoc/docs/2021/ui/updates/aman/2021-06-29",editUrl:"https://github.com/fossology/gsoc/edit/main/docs/2021/ui/updates/aman/2021-06-29.md",tags:[],version:"current",frontMatter:{title:"Week 3",author:"Aman Dwivedi"},sidebar:"2021",previous:{title:"Week 2",permalink:"/gsoc/docs/2021/ui/updates/aman/2021-06-22"},next:{title:"Week 4",permalink:"/gsoc/docs/2021/ui/updates/aman/2021-07-06"}},c=[{value:"Screenshots",id:"screenshots",children:[]},{value:"Pull requests",id:"pull-requests",children:[]}],u={toc:c};function m(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Added license browser page")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Added the login mechanism (login page, error alert, conditional login form, saving JWT tokens in cookie)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Made cookie storage secure by adding ",(0,o.kt)("inlineCode",{parentName:"p"},"sameSite: 'strict'")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"secure: true")," in cookies")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Added upload instructions page")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Added fossology documentation wiki link")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Added third party licenses page")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Added error 404 page")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Integrated GitHub actions for CI/CD test")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Added create folder page"))),(0,o.kt)("h2",{id:"screenshots"},"Screenshots"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Github actions",src:a(5981).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"help license browser page",src:a(3291).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"upload Instruction page",src:a(7718).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"login page",src:a(2594).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"hidden Login Form page",src:a(3470).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"loading spinner page",src:a(8552).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"login error page",src:a(9735).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"login page",src:a(2594).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"logout page",src:a(5415).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Error 404 page",src:a(57).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create Folder page",src:a(5699).Z})),(0,o.kt)("h2",{id:"pull-requests"},"Pull requests"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/fossology/FOSSologyUI/pull/19"},"feat(licenseBrowser): add license browser page"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/fossology/FOSSologyUI/pull/21"},"feat(login): add login mechanism"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/fossology/FOSSologyUI/pull/28"},"fix(cookies): add sameSite: 'strict' in cookies"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/fossology/FOSSologyUI/pull/29"},"feat(uploadInstructions): add upload instructions"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/fossology/FOSSologyUI/pull/30"},"feat(wiki-link): add fossology wiki link"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/fossology/FOSSologyUI/pull/31"},"feat(thirdPartyLicense): add third party licenses"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/fossology/FOSSologyUI/pull/35"},"fix(404): redirect to home page if page not found"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/fossology/FOSSologyUI/pull/37"},"feat(CI/CD): add github actions for CI/CD test"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/fossology/FOSSologyUI/pull/45"},"feat(folder): add create folder page")))))}m.isMDXComponent=!0},5981:function(e,t,a){t.Z=a.p+"assets/images/GithubActions-9b867c07e9a4744117f5955ecafdaafb.PNG"},57:function(e,t,a){t.Z=a.p+"assets/images/Error404-1f513d07cd78ed0d387faa618486f856.png"},5699:function(e,t,a){t.Z=a.p+"assets/images/CreateFolder-1b1845fda85eb126f209c084c864454a.png"},3291:function(e,t,a){t.Z=a.p+"assets/images/licenseBrowser-5b3cc6e10c74596a071e63d15f8c3844.png"},3470:function(e,t,a){t.Z=a.p+"assets/images/hiddenLoginForm-3f2c92d7a03de437320cd44215b33a3a.png"},8552:function(e,t,a){t.Z=a.p+"assets/images/loadingSpinner-00823753be7a727181057304db8958dd.png"},2594:function(e,t,a){t.Z=a.p+"assets/images/login-d599c4e53187c8f6439b8de616fbece4.png"},9735:function(e,t,a){t.Z=a.p+"assets/images/loginError-f2a2b7939ac365fa6b657c8c415cca6b.png"},5415:function(e,t,a){t.Z=a.p+"assets/images/logout-4b20404a7a752f8b423384cdfba08a50.png"},7718:function(e,t,a){t.Z=a.p+"assets/images/uploadInstruction-18713330361c6b5a5d707ec567163d72.png"}}]);