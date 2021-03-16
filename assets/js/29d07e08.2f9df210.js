(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{1052:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return m}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),d=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=d(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),l=d(t),u=r,m=l["".concat(o,".").concat(u)]||l[u]||s[u]||a;return t?i.a.createElement(m,c(c({ref:n},p),{},{components:t})):i.a.createElement(m,c({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=u;var c={};for(var b in n)hasOwnProperty.call(n,b)&&(c[b]=n[b]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<a;p++)o[p]=t[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},223:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return b})),t.d(n,"default",(function(){return d}));var r=t(3),i=t(8),a=(t(0),t(1052)),o={id:"knex.knex.connectionconfig",title:"Interface: ConnectionConfig",sidebar_label:"ConnectionConfig",hide_title:!0},c={unversionedId:"api/interfaces/knex.knex.connectionconfig",id:"version-4.4/api/interfaces/knex.knex.connectionconfig",isDocsHomePage:!1,title:"Interface: ConnectionConfig",description:"Interface: ConnectionConfig",source:"@site/versioned_docs/version-4.4/api/interfaces/knex.knex.connectionconfig.md",slug:"/api/interfaces/knex.knex.connectionconfig",permalink:"/docs/api/interfaces/knex.knex.connectionconfig",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/knex.knex.connectionconfig.md",version:"4.4",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1615909753,formattedLastUpdatedAt:"3/16/2021",sidebar_label:"ConnectionConfig",sidebar:"version-4.4/API",previous:{title:"Interface: Config<SV>",permalink:"/docs/api/interfaces/knex.knex.config"},next:{title:"Interface: CreateTableBuilder",permalink:"/docs/api/interfaces/knex.knex.createtablebuilder"}},b=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"database",id:"database",children:[]},{value:"debug",id:"debug",children:[]},{value:"domain",id:"domain",children:[]},{value:"host",id:"host",children:[]},{value:"instanceName",id:"instancename",children:[]},{value:"password",id:"password",children:[]},{value:"requestTimeout",id:"requesttimeout",children:[]},{value:"user",id:"user",children:[]}]}],p={toc:b};function d(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"interface-connectionconfig"},"Interface: ConnectionConfig"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",Object(a.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".ConnectionConfig"),Object(a.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"ConnectionConfig"))),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("h3",{id:"database"},"database"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"database"),": ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1891"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"debug"},"debug"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"debug"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1894"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"domain"},"domain"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"domain"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1892"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"host"},"host"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"host"),": ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1888"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"instancename"},"instanceName"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"instanceName"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1893"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"password"},"password"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"password"),": ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1890"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"requesttimeout"},"requestTimeout"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"requestTimeout"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"number")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1895"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"user"},"user"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"user"),": ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1889"))}d.isMDXComponent=!0}}]);