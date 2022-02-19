"use strict";(self.webpackChunkgosc_2021=self.webpackChunkgosc_2021||[]).push([[4683],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5597:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"Week 8",author:"Omar AbdelSamea"},c=void 0,u={unversionedId:"2021/microservice/updates/2021-07-27",id:"2021/microservice/updates/2021-07-27",isDocsHomePage:!1,title:"Week 8",description:"\x3c!--",source:"@site/docs/2021/microservice/updates/2021-07-27.md",sourceDirName:"2021/microservice/updates",slug:"/2021/microservice/updates/2021-07-27",permalink:"/gsoc/docs/2021/microservice/updates/2021-07-27",editUrl:"https://github.com/fossology/gsoc/edit/main/docs/2021/microservice/updates/2021-07-27.md",tags:[],version:"current",frontMatter:{title:"Week 8",author:"Omar AbdelSamea"},sidebar:"2021",previous:{title:"Week 7",permalink:"/gsoc/docs/2021/microservice/updates/2021-07-20"},next:{title:"Week 9",permalink:"/gsoc/docs/2021/microservice/updates/2021-08-03"}},s=[{value:"Meeting 0",id:"meeting-0",children:[{value:"Organizer",id:"organizer",children:[]},{value:"Attendees",id:"attendees",children:[]},{value:"Outcomes",id:"outcomes",children:[]}]},{value:"Migrating agent configuration to etcd",id:"migrating-agent-configuration-to-etcd",children:[]},{value:"End of the week result",id:"end-of-the-week-result",children:[]}],d={toc:s};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"coding-week-8"},"Coding Week 8"),(0,i.kt)("h2",{id:"meeting-0"},"Meeting 0"),(0,i.kt)("h3",{id:"organizer"},"Organizer"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Gaurav Mishra")),(0,i.kt)("h3",{id:"attendees"},"Attendees"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Anupam Ghosh"),(0,i.kt)("li",{parentName:"ul"},"Vasudev"),(0,i.kt)("li",{parentName:"ul"},"Ayush Bharadwaj"),(0,i.kt)("li",{parentName:"ul"},"Shreya Singh"),(0,i.kt)("li",{parentName:"ul"},"Kaushlendra Pratap Singh"),(0,i.kt)("li",{parentName:"ul"},"Omar AbdelSamea")),(0,i.kt)("h3",{id:"outcomes"},"Outcomes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Presented a possible implementation of migrating agent configuration to etcd."),(0,i.kt)("li",{parentName:"ul"},"Discussed the issues that happened while trying to apply agent UI issue solution.")),(0,i.kt)("h2",{id:"migrating-agent-configuration-to-etcd"},"Migrating agent configuration to etcd"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"in the agent's entrypoint, ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OmarAbdelSamea/fossology/blob/OmarAbdelSamea/GSoC/Microservices/Docker/conf.sh"},"conf.sh")," will open agent conf file in ",(0,i.kt)("inlineCode",{parentName:"li"},"/usr/share/fossology/<agent_name>/<agent_name>.conf")," and start iterating over it and extracts agent conf then create a PUT request to etcd pod for each configuration."),(0,i.kt)("li",{parentName:"ul"},"To reload the scheduler configuration ",(0,i.kt)("inlineCode",{parentName:"li"},"fo_cli")," will be used using ",(0,i.kt)("inlineCode",{parentName:"li"},"--reload")," option.")),(0,i.kt)("h2",{id:"end-of-the-week-result"},"End of the week result"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Migrated Agent configuraiton from ",(0,i.kt)("inlineCode",{parentName:"li"},"<agent_name>.conf")," to etcd ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/OmarAbdelSamea/fossology/blob/OmarAbdelSamea/GSoC/Microservices/src/scheduler/agent/scheduler.c#L795"},"scheduler_agent_config")))),(0,i.kt)("li",{parentName:"ul"},"created conf.sh to iterate over agent configuration and make the appropriate API calls to etcd container."),(0,i.kt)("li",{parentName:"ul"},"Added fo_cli and modified entrypoint to reload scheduler configuration."),(0,i.kt)("li",{parentName:"ul"},"Applied discussed solution of bundling UI folders inside web package.")))}p.isMDXComponent=!0}}]);