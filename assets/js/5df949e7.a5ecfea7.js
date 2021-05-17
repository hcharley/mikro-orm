(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[51718],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return l},kt:function(){return k}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(a),k=n,u=m["".concat(i,".").concat(k)]||m[k]||d[k]||o;return a?r.createElement(u,s(s({ref:t},l),{},{components:a})):r.createElement(u,s({ref:t},l))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var p=2;p<o;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},89268:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return i},default:function(){return l}});var r=a(74034),n=a(79973),o=(a(67294),a(3905)),s={id:"core.transactioneventbroadcaster",title:"Class: TransactionEventBroadcaster",sidebar_label:"TransactionEventBroadcaster",custom_edit_url:null,hide_title:!0},c={unversionedId:"api/classes/core.transactioneventbroadcaster",id:"version-4.5/api/classes/core.transactioneventbroadcaster",isDocsHomePage:!1,title:"Class: TransactionEventBroadcaster",description:"core.TransactionEventBroadcaster",source:"@site/versioned_docs/version-4.5/api/classes/core.transactioneventbroadcaster.md",sourceDirName:"api/classes",slug:"/api/classes/core.transactioneventbroadcaster",permalink:"/docs/api/classes/core.transactioneventbroadcaster",editUrl:null,version:"4.5",lastUpdatedBy:"Bart Riepe",lastUpdatedAt:1621234353,formattedLastUpdatedAt:"5/17/2021",sidebar_label:"TransactionEventBroadcaster",frontMatter:{id:"core.transactioneventbroadcaster",title:"Class: TransactionEventBroadcaster",sidebar_label:"TransactionEventBroadcaster",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"Class: TransactionContext",permalink:"/docs/api/classes/core.transactioncontext"},next:{title:"Class: Type<JSType, DBType\\>",permalink:"/docs/api/classes/core.type"}},i=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"eventManager",id:"eventmanager",children:[]}]},{value:"Methods",id:"methods",children:[{value:"dispatchEvent",id:"dispatchevent",children:[]}]}],p={toc:i};function l(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".TransactionEventBroadcaster"),(0,o.kt)("h2",{id:"constructors"},"Constructors"),(0,o.kt)("h3",{id:"constructor"},"constructor"),(0,o.kt)("p",null,"+"," ",(0,o.kt)("strong",{parentName:"p"},"new TransactionEventBroadcaster"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"em"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymanager"},(0,o.kt)("em",{parentName:"a"},"EntityManager")),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.idatabasedriver"},(0,o.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.connection"},(0,o.kt)("em",{parentName:"a"},"Connection")),">",">",", ",(0,o.kt)("inlineCode",{parentName:"p"},"uow?"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.unitofwork"},(0,o.kt)("em",{parentName:"a"},"UnitOfWork")),"): ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.transactioneventbroadcaster"},(0,o.kt)("em",{parentName:"a"},"TransactionEventBroadcaster"))),(0,o.kt)("h4",{id:"parameters"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"em")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/api/classes/core.entitymanager"},(0,o.kt)("em",{parentName:"a"},"EntityManager")),"<",(0,o.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.idatabasedriver"},(0,o.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,o.kt)("a",{parentName:"td",href:"/docs/api/classes/core.connection"},(0,o.kt)("em",{parentName:"a"},"Connection")),">",">")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"uow?")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/api/classes/core.unitofwork"},(0,o.kt)("em",{parentName:"a"},"UnitOfWork")))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.transactioneventbroadcaster"},(0,o.kt)("em",{parentName:"a"},"TransactionEventBroadcaster"))),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/events/TransactionEventBroadcaster.ts#L8"},"packages/core/src/events/TransactionEventBroadcaster.ts:8")),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"eventmanager"},"eventManager"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"eventManager"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.eventmanager"},(0,o.kt)("em",{parentName:"a"},"EventManager"))),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/events/TransactionEventBroadcaster.ts#L8"},"packages/core/src/events/TransactionEventBroadcaster.ts:8")),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"dispatchevent"},"dispatchEvent"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"dispatchEvent"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"event"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/modules/core#transactioneventtype"},(0,o.kt)("em",{parentName:"a"},"TransactionEventType")),", ",(0,o.kt)("inlineCode",{parentName:"p"},"transaction?"),": ",(0,o.kt)("em",{parentName:"p"},"any"),"): ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,o.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"event")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/api/modules/core#transactioneventtype"},(0,o.kt)("em",{parentName:"a"},"TransactionEventType")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"transaction?")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"any"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/events/TransactionEventBroadcaster.ts#L13"},"packages/core/src/events/TransactionEventBroadcaster.ts:13")))}l.isMDXComponent=!0}}]);