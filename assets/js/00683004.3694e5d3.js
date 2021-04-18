(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1026:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),l=s(n),u=r,O=l["".concat(c,".").concat(u)]||l[u]||m[u]||i;return n?a.a.createElement(O,p(p({ref:t},b),{},{components:n})):a.a.createElement(O,p({ref:t},b))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var b=2;b<i;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(8),i=(n(0),n(1026)),c={id:"knex.joinoptions",title:"Interface: JoinOptions",sidebar_label:"JoinOptions",custom_edit_url:null,hide_title:!0},p={unversionedId:"api/interfaces/knex.joinoptions",id:"api/interfaces/knex.joinoptions",isDocsHomePage:!1,title:"Interface: JoinOptions",description:"Interface: JoinOptions",source:"@site/docs/api/interfaces/knex.joinoptions.md",slug:"/api/interfaces/knex.joinoptions",permalink:"/docs/next/api/interfaces/knex.joinoptions",editUrl:null,version:"current",sidebar_label:"JoinOptions",sidebar:"API",previous:{title:"Interface: Index",permalink:"/docs/next/api/interfaces/knex.index"},next:{title:"Interface: SchemaDifference",permalink:"/docs/next/api/interfaces/knex.schemadifference"}},o=[{value:"Properties",id:"properties",children:[{value:"alias",id:"alias",children:[]},{value:"cond",id:"cond",children:[]},{value:"inverseAlias",id:"inversealias",children:[]},{value:"inverseJoinColumns",id:"inversejoincolumns",children:[]},{value:"joinColumns",id:"joincolumns",children:[]},{value:"ownerAlias",id:"owneralias",children:[]},{value:"path",id:"path",children:[]},{value:"primaryKeys",id:"primarykeys",children:[]},{value:"prop",id:"prop",children:[]},{value:"table",id:"table",children:[]},{value:"type",id:"type",children:[]}]}],b={toc:o};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"interface-joinoptions"},"Interface: JoinOptions"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/docs/next/api/modules/knex"},"knex"),".JoinOptions"),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"alias"},"alias"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"alias"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/c513ac4/packages/knex/src/typings.ts#L21"},"packages/knex/src/typings.ts:21")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"cond"},"cond"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"cond"),": ",Object(i.b)("a",{parentName:"p",href:"/docs/next/api/modules/core#dictionary"},Object(i.b)("em",{parentName:"a"},"Dictionary")),"<any",">"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/c513ac4/packages/knex/src/typings.ts#L29"},"packages/knex/src/typings.ts:29")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"inversealias"},"inverseAlias"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"inverseAlias"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/c513ac4/packages/knex/src/typings.ts#L23"},"packages/knex/src/typings.ts:23")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"inversejoincolumns"},"inverseJoinColumns"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"inverseJoinColumns"),": ",Object(i.b)("em",{parentName:"p"},"string"),"[]"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/c513ac4/packages/knex/src/typings.ts#L25"},"packages/knex/src/typings.ts:25")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"joincolumns"},"joinColumns"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"joinColumns"),": ",Object(i.b)("em",{parentName:"p"},"string"),"[]"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/c513ac4/packages/knex/src/typings.ts#L24"},"packages/knex/src/typings.ts:24")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"owneralias"},"ownerAlias"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"ownerAlias"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/c513ac4/packages/knex/src/typings.ts#L22"},"packages/knex/src/typings.ts:22")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"path"},"path"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"path"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/c513ac4/packages/knex/src/typings.ts#L27"},"packages/knex/src/typings.ts:27")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"primarykeys"},"primaryKeys"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"primaryKeys"),": ",Object(i.b)("em",{parentName:"p"},"string"),"[]"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/c513ac4/packages/knex/src/typings.ts#L26"},"packages/knex/src/typings.ts:26")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"prop"},"prop"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"prop"),": ",Object(i.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.entityproperty"},Object(i.b)("em",{parentName:"a"},"EntityProperty")),"<any",">"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/c513ac4/packages/knex/src/typings.ts#L28"},"packages/knex/src/typings.ts:28")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"table"},"table"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"table"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/c513ac4/packages/knex/src/typings.ts#L19"},"packages/knex/src/typings.ts:19")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"type"},"type"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"type"),": ",Object(i.b)("em",{parentName:"p"},"leftJoin")," ","|"," ",Object(i.b)("em",{parentName:"p"},"innerJoin")," ","|"," ",Object(i.b)("em",{parentName:"p"},"pivotJoin")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/c513ac4/packages/knex/src/typings.ts#L20"},"packages/knex/src/typings.ts:20")))}s.isMDXComponent=!0}}]);