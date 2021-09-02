(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53870],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},14743:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var n=r(74034),o=r(79973),a=(r(67294),r(3905)),i={id:"core.initoptions",title:"Interface: InitOptions<T>",sidebar_label:"InitOptions",custom_edit_url:null,hide_title:!0},p="Interface: InitOptions<T>",c={unversionedId:"api/interfaces/core.initoptions",id:"version-4.5/api/interfaces/core.initoptions",isDocsHomePage:!1,title:"Interface: InitOptions<T>",description:"core.InitOptions",source:"@site/versioned_docs/version-4.5/api/interfaces/core.initoptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/core.initoptions",permalink:"/docs/api/interfaces/core.initoptions",editUrl:null,tags:[],version:"4.5",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1630598929,formattedLastUpdatedAt:"9/2/2021",frontMatter:{id:"core.initoptions",title:"Interface: InitOptions<T>",sidebar_label:"InitOptions",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"IndexOptions",permalink:"/docs/api/interfaces/core.indexoptions"},next:{title:"LoadedCollection",permalink:"/docs/api/interfaces/core.loadedcollection"}},l=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Properties",id:"properties",children:[{value:"orderBy",id:"orderby",children:[]},{value:"populate",id:"populate",children:[]},{value:"where",id:"where",children:[]}]}],s={toc:l};function u(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"interface-initoptionst"},"Interface: InitOptions<T",">"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".InitOptions"),(0,a.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"T"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"orderby"},"orderBy"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"orderBy"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.queryordermap"},(0,a.kt)("em",{parentName:"a"},"QueryOrderMap"))),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/Collection.ts#L378"},"packages/core/src/entity/Collection.ts:378")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"populate"},"populate"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"populate"),": readonly ",(0,a.kt)("em",{parentName:"p"},"string"),"[] ","|"," readonly keyof T[] ","|"," ",(0,a.kt)("em",{parentName:"p"},"boolean")," ","|"," ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/enums/core.loadstrategy"},(0,a.kt)("em",{parentName:"a"},"LoadStrategy"))," ","|"," ",(0,a.kt)("em",{parentName:"p"},"PopulateChildren"),"<T",">"),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/Collection.ts#L377"},"packages/core/src/entity/Collection.ts:377")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"where"},"where"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"where"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/modules/core#filterquery"},(0,a.kt)("em",{parentName:"a"},"FilterQuery")),"<T",">"),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/Collection.ts#L379"},"packages/core/src/entity/Collection.ts:379")))}u.isMDXComponent=!0}}]);