(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[42593],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return k},kt:function(){return s}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),u=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},k=function(e){var t=u(e.components);return r.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},o=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),o=u(a),s=n,c=o["".concat(d,".").concat(s)]||o[s]||m[s]||l;return a?r.createElement(c,p(p({ref:t},k),{},{components:a})):r.createElement(c,p({ref:t},k))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,p=new Array(l);p[0]=o;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var u=2;u<l;u++)p[u]=a[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}o.displayName="MDXCreateElement"},35149:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return p},metadata:function(){return i},toc:function(){return d},default:function(){return k}});var r=a(74034),n=a(79973),l=(a(67294),a(3905)),p={id:"knex.knex-1.rawquerybuilder",title:"Interface: RawQueryBuilder<TRecord, TResult>",sidebar_label:"RawQueryBuilder",custom_edit_url:null,hide_title:!0},i={unversionedId:"api/interfaces/knex.knex-1.rawquerybuilder",id:"version-4.5/api/interfaces/knex.knex-1.rawquerybuilder",isDocsHomePage:!1,title:"Interface: RawQueryBuilder<TRecord, TResult\\>",description:"knex.Knex.RawQueryBuilder",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.knex-1.rawquerybuilder.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/knex.knex-1.rawquerybuilder",permalink:"/docs/api/interfaces/knex.knex-1.rawquerybuilder",editUrl:null,version:"4.5",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1622851604,formattedLastUpdatedAt:"6/5/2021",sidebar_label:"RawQueryBuilder",frontMatter:{id:"knex.knex-1.rawquerybuilder",title:"Interface: RawQueryBuilder<TRecord, TResult>",sidebar_label:"RawQueryBuilder",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"Interface: RawBuilder<TRecord, TResult\\>",permalink:"/docs/api/interfaces/knex.knex-1.rawbuilder"},next:{title:"Interface: Ref<TSrc, TMapping\\>",permalink:"/docs/api/interfaces/knex.knex-1.ref"}},d=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Callable",id:"callable",children:[]}],u={toc:d};function k(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",(0,l.kt)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".RawQueryBuilder"),(0,l.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"TRecord")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"any"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"TResult")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"unknown"),"[]")))),(0,l.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"RawQueryBuilder")),(0,l.kt)("p",{parentName:"li"},"\u21b3 ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.whereraw"},(0,l.kt)("em",{parentName:"a"},"WhereRaw"))),(0,l.kt)("p",{parentName:"li"},"\u21b3 ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.groupby"},(0,l.kt)("em",{parentName:"a"},"GroupBy"))))),(0,l.kt)("h2",{id:"callable"},"Callable"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"RawQueryBuilder"),"<TResult2",">","(",(0,l.kt)("inlineCode",{parentName:"p"},"sql"),": ",(0,l.kt)("em",{parentName:"p"},"string"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"bindings?"),": ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.valuedict"},(0,l.kt)("em",{parentName:"a"},"ValueDict"))," ","|"," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1#value"},(0,l.kt)("em",{parentName:"a"},"Value"))," ","|"," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<any, any",">"," ","|"," readonly (",(0,l.kt)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1#value"},(0,l.kt)("em",{parentName:"a"},"Value"))," ","|"," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<any, any",">",")[]): ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),(0,l.kt)("h4",{id:"type-parameters-1"},"Type parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"TResult2")),(0,l.kt)("td",{parentName:"tr",align:"left"},"TResult")))),(0,l.kt)("h4",{id:"parameters"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"sql")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"string"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"bindings?")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docs/api/interfaces/knex.knex-1.valuedict"},(0,l.kt)("em",{parentName:"a"},"ValueDict"))," ","|"," ",(0,l.kt)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#value"},(0,l.kt)("em",{parentName:"a"},"Value"))," ","|"," ",(0,l.kt)("a",{parentName:"td",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<any, any",">"," ","|"," readonly (",(0,l.kt)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#value"},(0,l.kt)("em",{parentName:"a"},"Value"))," ","|"," ",(0,l.kt)("a",{parentName:"td",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<any, any",">",")[]")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1489"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"RawQueryBuilder"),"<TResult2",">","(",(0,l.kt)("inlineCode",{parentName:"p"},"raw"),": ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.raw"},(0,l.kt)("em",{parentName:"a"},"Raw")),"<TResult2",">","): ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),(0,l.kt)("h4",{id:"type-parameters-2"},"Type parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"TResult2")),(0,l.kt)("td",{parentName:"tr",align:"left"},"TResult")))),(0,l.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"raw")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docs/api/interfaces/knex.knex-1.raw"},(0,l.kt)("em",{parentName:"a"},"Raw")),"<TResult2",">")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1493"))}k.isMDXComponent=!0}}]);