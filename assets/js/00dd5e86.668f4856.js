(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1051:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=s(r),m=n,d=l["".concat(c,".").concat(m)]||l[m]||b[m]||a;return r?o.a.createElement(d,i(i({ref:t},u),{},{components:r})):o.a.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},78:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(8),a=(r(0),r(1051)),c={id:"core.changesettype",title:"Enumeration: ChangeSetType",sidebar_label:"ChangeSetType",hide_title:!0},i={unversionedId:"api/enums/core.changesettype",id:"version-4.4/api/enums/core.changesettype",isDocsHomePage:!1,title:"Enumeration: ChangeSetType",description:"Enumeration: ChangeSetType",source:"@site/versioned_docs/version-4.4/api/enums/core.changesettype.md",slug:"/api/enums/core.changesettype",permalink:"/docs/api/enums/core.changesettype",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/enums/core.changesettype.md",version:"4.4",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1613771845,sidebar_label:"ChangeSetType",sidebar:"version-4.4/API",previous:{title:"Enumeration: Cascade",permalink:"/docs/api/enums/core.cascade"},next:{title:"Enumeration: EventType",permalink:"/docs/api/enums/core.eventtype"}},p=[{value:"Enumeration members",id:"enumeration-members",children:[{value:"CREATE",id:"create",children:[]},{value:"DELETE",id:"delete",children:[]},{value:"UPDATE",id:"update",children:[]}]}],u={toc:p};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"enumeration-changesettype"},"Enumeration: ChangeSetType"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".ChangeSetType"),Object(a.b)("h2",{id:"enumeration-members"},"Enumeration members"),Object(a.b)("h3",{id:"create"},"CREATE"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"CREATE"),': = "create"'),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/unit-of-work/ChangeSet.ts#L28"},"packages/core/src/unit-of-work/ChangeSet.ts:28")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"delete"},"DELETE"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"DELETE"),': = "delete"'),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/unit-of-work/ChangeSet.ts#L30"},"packages/core/src/unit-of-work/ChangeSet.ts:30")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"update"},"UPDATE"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"UPDATE"),': = "update"'),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/unit-of-work/ChangeSet.ts#L29"},"packages/core/src/unit-of-work/ChangeSet.ts:29")))}s.isMDXComponent=!0}}]);