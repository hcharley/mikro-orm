(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[10953],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return l},kt:function(){return d}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),m=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},l=function(t){var e=m(t.components);return r.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,s=t.parentName,l=p(t,["components","mdxType","originalType","parentName"]),k=m(a),d=n,u=k["".concat(s,".").concat(d)]||k[d]||c[d]||i;return a?r.createElement(u,o(o({ref:e},l),{},{components:a})):r.createElement(u,o({ref:e},l))}));function d(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,o=new Array(i);o[0]=k;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=t,p.mdxType="string"==typeof t?t:n,o[1]=p;for(var m=2;m<i;m++)o[m]=a[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},89908:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return m},default:function(){return c}});var r=a(74034),n=a(79973),i=(a(67294),a(3905)),o={id:"migrations.migration",title:"Class: Migration",sidebar_label:"Migration",custom_edit_url:null,hide_title:!0},p="Class: Migration",s={unversionedId:"api/classes/migrations.migration",id:"version-4.5/api/classes/migrations.migration",isDocsHomePage:!1,title:"Class: Migration",description:"migrations.Migration",source:"@site/versioned_docs/version-4.5/api/classes/migrations.migration.md",sourceDirName:"api/classes",slug:"/api/classes/migrations.migration",permalink:"/docs/api/classes/migrations.migration",editUrl:null,version:"4.5",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1629875824,formattedLastUpdatedAt:"8/25/2021",frontMatter:{id:"migrations.migration",title:"Class: Migration",sidebar_label:"Migration",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"SqlEntityRepository",permalink:"/docs/api/classes/knex.sqlentityrepository"},next:{title:"MigrationGenerator",permalink:"/docs/api/classes/migrations.migrationgenerator"}},m=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"config",id:"config",children:[]},{value:"ctx",id:"ctx",children:[]},{value:"driver",id:"driver",children:[]},{value:"queries",id:"queries",children:[]}]},{value:"Methods",id:"methods",children:[{value:"addSql",id:"addsql",children:[]},{value:"down",id:"down",children:[]},{value:"execute",id:"execute",children:[]},{value:"getKnex",id:"getknex",children:[]},{value:"getQueries",id:"getqueries",children:[]},{value:"isTransactional",id:"istransactional",children:[]},{value:"reset",id:"reset",children:[]},{value:"setTransactionContext",id:"settransactioncontext",children:[]},{value:"up",id:"up",children:[]}]}],l={toc:m};function c(t){var e=t.components,a=(0,n.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},l,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"class-migration"},"Class: Migration"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/migrations"},"migrations"),".Migration"),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"+"," ",(0,i.kt)("strong",{parentName:"p"},"new Migration"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"driver"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.abstractsqldriver"},(0,i.kt)("em",{parentName:"a"},"AbstractSqlDriver")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.abstractsqlconnection"},(0,i.kt)("em",{parentName:"a"},"AbstractSqlConnection")),">",", ",(0,i.kt)("inlineCode",{parentName:"p"},"config"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.configuration"},(0,i.kt)("em",{parentName:"a"},"Configuration")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.idatabasedriver"},(0,i.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.connection"},(0,i.kt)("em",{parentName:"a"},"Connection")),">",">","): ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/migrations.migration"},(0,i.kt)("em",{parentName:"a"},"Migration"))),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"driver")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/classes/knex.abstractsqldriver"},(0,i.kt)("em",{parentName:"a"},"AbstractSqlDriver")),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/api/classes/knex.abstractsqlconnection"},(0,i.kt)("em",{parentName:"a"},"AbstractSqlConnection")),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"config")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/classes/core.configuration"},(0,i.kt)("em",{parentName:"a"},"Configuration")),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.idatabasedriver"},(0,i.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/api/classes/core.connection"},(0,i.kt)("em",{parentName:"a"},"Connection")),">",">")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/migrations.migration"},(0,i.kt)("em",{parentName:"a"},"Migration"))),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/Migration.ts#L9"},"packages/migrations/src/Migration.ts:9")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"config"},"config"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"config"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.configuration"},(0,i.kt)("em",{parentName:"a"},"Configuration")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.idatabasedriver"},(0,i.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.connection"},(0,i.kt)("em",{parentName:"a"},"Connection")),">",">"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"ctx"},"ctx"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"ctx"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.transaction"},(0,i.kt)("em",{parentName:"a"},"Transaction")),"<any, any",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/Migration.ts#L9"},"packages/migrations/src/Migration.ts:9")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"driver"},"driver"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"driver"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.abstractsqldriver"},(0,i.kt)("em",{parentName:"a"},"AbstractSqlDriver")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.abstractsqlconnection"},(0,i.kt)("em",{parentName:"a"},"AbstractSqlConnection")),">"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"queries"},"queries"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"queries"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/migrations#query"},(0,i.kt)("em",{parentName:"a"},"Query")),"[]"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/Migration.ts#L8"},"packages/migrations/src/Migration.ts:8")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"addsql"},"addSql"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"addSql"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"sql"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/migrations#query"},(0,i.kt)("em",{parentName:"a"},"Query")),"): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"sql")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/modules/migrations#query"},(0,i.kt)("em",{parentName:"a"},"Query")))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/Migration.ts#L24"},"packages/migrations/src/Migration.ts:24")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"down"},"down"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"down"),"(): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/Migration.ts#L16"},"packages/migrations/src/Migration.ts:16")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"execute"},"execute"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"execute"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"sql"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/migrations#query"},(0,i.kt)("em",{parentName:"a"},"Query")),"): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/core#entitydata"},(0,i.kt)("em",{parentName:"a"},"EntityData")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/core#anyentity"},(0,i.kt)("em",{parentName:"a"},"AnyEntity")),"<any",">",">","[]",">"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"sql")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/modules/migrations#query"},(0,i.kt)("em",{parentName:"a"},"Query")))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/core#entitydata"},(0,i.kt)("em",{parentName:"a"},"EntityData")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/core#anyentity"},(0,i.kt)("em",{parentName:"a"},"AnyEntity")),"<any",">",">","[]",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/Migration.ts#L37"},"packages/migrations/src/Migration.ts:37")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getknex"},"getKnex"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getKnex"),"(): ",(0,i.kt)("em",{parentName:"p"},"Knex"),"<any, unknown[]",">"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Knex"),"<any, unknown[]",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/Migration.ts#L41"},"packages/migrations/src/Migration.ts:41")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getqueries"},"getQueries"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getQueries"),"(): ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/migrations#query"},(0,i.kt)("em",{parentName:"a"},"Query")),"[]"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/migrations#query"},(0,i.kt)("em",{parentName:"a"},"Query")),"[]"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/Migration.ts#L45"},"packages/migrations/src/Migration.ts:45")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"istransactional"},"isTransactional"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"isTransactional"),"(): ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/Migration.ts#L20"},"packages/migrations/src/Migration.ts:20")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"reset"},"reset"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"reset"),"(): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/Migration.ts#L28"},"packages/migrations/src/Migration.ts:28")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"settransactioncontext"},"setTransactionContext"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"setTransactionContext"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"ctx"),": ",(0,i.kt)("em",{parentName:"p"},"any"),"): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ctx")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"any"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/Migration.ts#L33"},"packages/migrations/src/Migration.ts:33")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"up"},"up"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Abstract"),(0,i.kt)("strong",{parentName:"p"},"up"),"(): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/Migration.ts#L14"},"packages/migrations/src/Migration.ts:14")))}c.isMDXComponent=!0}}]);