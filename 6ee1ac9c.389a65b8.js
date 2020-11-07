(window.webpackJsonp=window.webpackJsonp||[]).push([[320],{379:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return s}));var n=r(1),a=r(6),i=(r(0),r(807)),o={id:"ientitygenerator",title:"Interface: IEntityGenerator",sidebar_label:"IEntityGenerator"},c={unversionedId:"api/interfaces/ientitygenerator",id:"version-4.2/api/interfaces/ientitygenerator",isDocsHomePage:!1,title:"Interface: IEntityGenerator",description:"Hierarchy",source:"@site/versioned_docs/version-4.2/api/interfaces/ientitygenerator.md",slug:"/api/interfaces/ientitygenerator",permalink:"/docs/api/interfaces/ientitygenerator",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.2/api/interfaces/ientitygenerator.md",version:"4.2",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1604778357,sidebar_label:"IEntityGenerator",sidebar:"version-4.2/API",previous:{title:"Interface: IDatabaseDriver<C>",permalink:"/docs/api/interfaces/idatabasedriver"},next:{title:"Interface: IHydrator",permalink:"/docs/api/interfaces/ihydrator"}},b=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Methods",id:"methods",children:[{value:"generate",id:"generate",children:[]}]}],p={rightToc:b};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"IEntityGenerator"))),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"generate"},"generate"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"generate"),"(",Object(i.b)("inlineCode",{parentName:"p"},"options?"),": { baseDir?: string ; save?: boolean  }): Promise","<","string[]>"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/typings.ts#L315"}),"packages/core/src/typings.ts:315"))),Object(i.b)("h4",{id:"parameters"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"options?")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"{ baseDir?: string ; save?: boolean  }")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," Promise","<","string[]>"))}s.isMDXComponent=!0},807:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),l=s(r),d=n,m=l["".concat(o,".").concat(d)]||l[d]||u[d]||i;return r?a.a.createElement(m,c(c({ref:t},p),{},{components:r})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);