(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[51373],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return s},kt:function(){return c}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function p(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},p=Object.keys(t);for(n=0;n<p.length;n++)a=p[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(n=0;n<p.length;n++)a=p[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),m=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=m(t.components);return n.createElement(o.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,p=t.originalType,o=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),d=m(a),c=r,N=d["".concat(o,".").concat(c)]||d[c]||k[c]||p;return a?n.createElement(N,i(i({ref:e},s),{},{components:a})):n.createElement(N,i({ref:e},s))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var p=a.length,i=new Array(p);i[0]=d;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var m=2;m<p;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},13323:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return o},default:function(){return s}});var n=a(74034),r=a(79973),p=(a(67294),a(3905)),i={id:"core.baseentity",title:"Class: BaseEntity<T, PK, P>",sidebar_label:"BaseEntity",custom_edit_url:null,hide_title:!0},l={unversionedId:"api/classes/core.baseentity",id:"version-4.5/api/classes/core.baseentity",isDocsHomePage:!1,title:"Class: BaseEntity<T, PK, P\\>",description:"core.BaseEntity",source:"@site/versioned_docs/version-4.5/api/classes/core.baseentity.md",sourceDirName:"api/classes",slug:"/api/classes/core.baseentity",permalink:"/docs/api/classes/core.baseentity",editUrl:null,version:"4.5",lastUpdatedBy:"Bart Riepe",lastUpdatedAt:1621234353,formattedLastUpdatedAt:"5/17/2021",sidebar_label:"BaseEntity",frontMatter:{id:"core.baseentity",title:"Class: BaseEntity<T, PK, P>",sidebar_label:"BaseEntity",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"Class: ArrayType<T\\>",permalink:"/docs/api/classes/core.arraytype"},next:{title:"Class: BigIntType",permalink:"/docs/api/classes/core.biginttype"}},o=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Implements",id:"implements",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"assign",id:"assign",children:[]},{value:"init",id:"init",children:[]},{value:"isInitialized",id:"isinitialized",children:[]},{value:"populated",id:"populated",children:[]},{value:"toJSON",id:"tojson",children:[]},{value:"toObject",id:"toobject",children:[]},{value:"toPOJO",id:"topojo",children:[]},{value:"toReference",id:"toreference",children:[]}]}],m={toc:o};function s(t){var e=t.components,a=(0,r.Z)(t,["components"]);return(0,p.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".BaseEntity"),(0,p.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"T")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},(0,p.kt)("em",{parentName:"a"},"AnyEntity")),"<T",">"),(0,p.kt)("td",{parentName:"tr",align:"left"},"-")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"PK")),(0,p.kt)("td",{parentName:"tr",align:"left"},"keyof T"),(0,p.kt)("td",{parentName:"tr",align:"left"},"-")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"P")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/modules/core#populate"},(0,p.kt)("em",{parentName:"a"},"Populate")),"<T",">"," ","|"," ",(0,p.kt)("em",{parentName:"td"},"unknown")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"unknown"))))),(0,p.kt)("h2",{id:"implements"},"Implements"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/docs/api/interfaces/core.iwrappedentity"},(0,p.kt)("em",{parentName:"a"},"IWrappedEntity")),"<T, PK, P",">")),(0,p.kt)("h2",{id:"constructors"},"Constructors"),(0,p.kt)("h3",{id:"constructor"},"constructor"),(0,p.kt)("p",null,"+"," ",(0,p.kt)("strong",{parentName:"p"},"new BaseEntity"),"<T, PK, P",">","(): ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.baseentity"},(0,p.kt)("em",{parentName:"a"},"BaseEntity")),"<T, PK, P",">"),(0,p.kt)("h4",{id:"type-parameters-1"},"Type parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"T")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},(0,p.kt)("em",{parentName:"a"},"AnyEntity")),"<T",">"),(0,p.kt)("td",{parentName:"tr",align:"left"},"-")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"PK")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"string")," ","|"," ",(0,p.kt)("em",{parentName:"td"},"number")," ","|"," ",(0,p.kt)("em",{parentName:"td"},"symbol")),(0,p.kt)("td",{parentName:"tr",align:"left"},"-")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"P")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"unknown")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"unknown"))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.baseentity"},(0,p.kt)("em",{parentName:"a"},"BaseEntity")),"<T, PK, P",">"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/BaseEntity.ts#L5"},"packages/core/src/entity/BaseEntity.ts:5")),(0,p.kt)("h2",{id:"methods"},"Methods"),(0,p.kt)("h3",{id:"assign"},"assign"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"assign"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"data"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core#entitydata"},(0,p.kt)("em",{parentName:"a"},"EntityData")),"<T",">",", ",(0,p.kt)("inlineCode",{parentName:"p"},"options?"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.assignoptions"},(0,p.kt)("em",{parentName:"a"},"AssignOptions")),"): T"),(0,p.kt)("h4",{id:"parameters"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"data")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/modules/core#entitydata"},(0,p.kt)("em",{parentName:"a"},"EntityData")),"<T",">")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"options?")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.assignoptions"},(0,p.kt)("em",{parentName:"a"},"AssignOptions")))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," T"),(0,p.kt)("p",null,"Implementation of: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.iwrappedentity"},"IWrappedEntity")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/BaseEntity.ts#L35"},"packages/core/src/entity/BaseEntity.ts:35")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"init"},"init"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"init"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"populated?"),": ",(0,p.kt)("em",{parentName:"p"},"boolean"),"): ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<T",">"),(0,p.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"populated")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"boolean")),(0,p.kt)("td",{parentName:"tr",align:"left"},"true")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<T",">"),(0,p.kt)("p",null,"Implementation of: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.iwrappedentity"},"IWrappedEntity")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/BaseEntity.ts#L39"},"packages/core/src/entity/BaseEntity.ts:39")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"isinitialized"},"isInitialized"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"isInitialized"),"(): ",(0,p.kt)("em",{parentName:"p"},"boolean")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"boolean")),(0,p.kt)("p",null,"Implementation of: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.iwrappedentity"},"IWrappedEntity")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/BaseEntity.ts#L11"},"packages/core/src/entity/BaseEntity.ts:11")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"populated"},"populated"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"populated"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"populated?"),": ",(0,p.kt)("em",{parentName:"p"},"boolean"),"): ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"populated")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"boolean")),(0,p.kt)("td",{parentName:"tr",align:"left"},"true")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Implementation of: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.iwrappedentity"},"IWrappedEntity")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/BaseEntity.ts#L15"},"packages/core/src/entity/BaseEntity.ts:15")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"tojson"},"toJSON"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"toJSON"),"(...",(0,p.kt)("inlineCode",{parentName:"p"},"args"),": ",(0,p.kt)("em",{parentName:"p"},"any"),"[]): ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},(0,p.kt)("em",{parentName:"a"},"Dictionary")),"<any",">"),(0,p.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"...args")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"any"),"[]")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},(0,p.kt)("em",{parentName:"a"},"Dictionary")),"<any",">"),(0,p.kt)("p",null,"Implementation of: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.iwrappedentity"},"IWrappedEntity")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/BaseEntity.ts#L27"},"packages/core/src/entity/BaseEntity.ts:27")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"toobject"},"toObject"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"toObject"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"ignoreFields?"),": ",(0,p.kt)("em",{parentName:"p"},"string"),"[]): ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},(0,p.kt)("em",{parentName:"a"},"Dictionary")),"<any",">"),(0,p.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"ignoreFields")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"string"),"[]")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},(0,p.kt)("em",{parentName:"a"},"Dictionary")),"<any",">"),(0,p.kt)("p",null,"Implementation of: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.iwrappedentity"},"IWrappedEntity")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/BaseEntity.ts#L23"},"packages/core/src/entity/BaseEntity.ts:23")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"topojo"},"toPOJO"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"toPOJO"),"(): ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core#entitydata"},(0,p.kt)("em",{parentName:"a"},"EntityData")),"<T",">"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core#entitydata"},(0,p.kt)("em",{parentName:"a"},"EntityData")),"<T",">"),(0,p.kt)("p",null,"Implementation of: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.iwrappedentity"},"IWrappedEntity")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/BaseEntity.ts#L31"},"packages/core/src/entity/BaseEntity.ts:31")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"toreference"},"toReference"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"toReference"),"(): ",(0,p.kt)("em",{parentName:"p"},"any")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"any")),(0,p.kt)("p",null,"Implementation of: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.iwrappedentity"},"IWrappedEntity")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/BaseEntity.ts#L19"},"packages/core/src/entity/BaseEntity.ts:19")))}s.isMDXComponent=!0}}]);