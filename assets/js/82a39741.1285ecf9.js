(window.webpackJsonp=window.webpackJsonp||[]).push([[481],{1052:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),m=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=m(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,p=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),s=m(a),O=r,d=s["".concat(p,".").concat(O)]||s[O]||i[O]||b;return a?n.a.createElement(d,c(c({ref:t},o),{},{components:a})):n.a.createElement(d,c({ref:t},o))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,p=new Array(b);p[0]=O;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var o=2;o<b;o++)p[o]=a[o];return n.a.createElement.apply(null,p)}return n.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},554:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return m}));var r=a(3),n=a(8),b=(a(0),a(1052)),p={id:"core.type",title:"Class: Type<JSType, DBType>",sidebar_label:"Type",hide_title:!0},c={unversionedId:"api/classes/core.type",id:"version-4.4/api/classes/core.type",isDocsHomePage:!1,title:"Class: Type<JSType, DBType>",description:"Class: Type",source:"@site/versioned_docs/version-4.4/api/classes/core.type.md",slug:"/api/classes/core.type",permalink:"/docs/api/classes/core.type",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/classes/core.type.md",version:"4.4",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1616178969,formattedLastUpdatedAt:"3/19/2021",sidebar_label:"Type",sidebar:"version-4.4/API",previous:{title:"Class: TransactionEventBroadcaster",permalink:"/docs/api/classes/core.transactioneventbroadcaster"},next:{title:"Class: UnderscoreNamingStrategy",permalink:"/docs/api/classes/core.underscorenamingstrategy"}},l=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"types",id:"types",children:[]}]},{value:"Methods",id:"methods",children:[{value:"compareAsType",id:"compareastype",children:[]},{value:"convertToDatabaseValue",id:"converttodatabasevalue",children:[]},{value:"convertToJSValue",id:"converttojsvalue",children:[]},{value:"getColumnType",id:"getcolumntype",children:[]},{value:"toJSON",id:"tojson",children:[]},{value:"getType",id:"gettype",children:[]}]}],o={toc:l};function m(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"class-typejstype-dbtype"},"Class: Type<JSType, DBType",">"),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".Type"),Object(b.b)("h2",{id:"type-parameters"},"Type parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"JSType")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"DBType")),Object(b.b)("td",{parentName:"tr",align:null},"JSType")))),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"Type")),Object(b.b)("p",{parentName:"li"},"\u21b3 ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.datetype"},Object(b.b)("em",{parentName:"a"},"DateType"))),Object(b.b)("p",{parentName:"li"},"\u21b3 ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.timetype"},Object(b.b)("em",{parentName:"a"},"TimeType"))),Object(b.b)("p",{parentName:"li"},"\u21b3 ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.biginttype"},Object(b.b)("em",{parentName:"a"},"BigIntType"))),Object(b.b)("p",{parentName:"li"},"\u21b3 ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.blobtype"},Object(b.b)("em",{parentName:"a"},"BlobType"))),Object(b.b)("p",{parentName:"li"},"\u21b3 ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.arraytype"},Object(b.b)("em",{parentName:"a"},"ArrayType"))),Object(b.b)("p",{parentName:"li"},"\u21b3 ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.jsontype"},Object(b.b)("em",{parentName:"a"},"JsonType"))))),Object(b.b)("h2",{id:"constructors"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new Type"),"<JSType, DBType",">","(): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.type"},Object(b.b)("em",{parentName:"a"},"Type")),"<JSType, DBType",">"),Object(b.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"JSType")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"DBType")),Object(b.b)("td",{parentName:"tr",align:null},"JSType")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.type"},Object(b.b)("em",{parentName:"a"},"Type")),"<JSType, DBType",">"),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"types"},"types"),Object(b.b)("p",null,"\u25aa ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("inlineCode",{parentName:"p"},"Static")," ",Object(b.b)("strong",{parentName:"p"},"types"),": ",Object(b.b)("em",{parentName:"p"},"Map"),"<",Object(b.b)("em",{parentName:"p"},"any"),", ",Object(b.b)("em",{parentName:"p"},"any"),">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/types/Type.ts#L6"},"packages/core/src/types/Type.ts:6")),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"compareastype"},"compareAsType"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"compareAsType"),"(): ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"How should the raw database values be compared? Used in ",Object(b.b)("inlineCode",{parentName:"p"},"EntityComparator"),".\nPossible values: string | number | boolean | date | any | buffer | array"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/types/Type.ts#L26"},"packages/core/src/types/Type.ts:26")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"converttodatabasevalue"},"convertToDatabaseValue"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"convertToDatabaseValue"),"(",Object(b.b)("inlineCode",{parentName:"p"},"value"),": JSType ","|"," DBType, ",Object(b.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.platform"},Object(b.b)("em",{parentName:"a"},"Platform")),", ",Object(b.b)("inlineCode",{parentName:"p"},"fromQuery?"),": ",Object(b.b)("em",{parentName:"p"},"boolean"),"): DBType"),Object(b.b)("p",null,"Converts a value from its JS representation to its database representation of this type."),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"value")),Object(b.b)("td",{parentName:"tr",align:null},"JSType ","|"," DBType")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"platform")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/core.platform"},Object(b.b)("em",{parentName:"a"},"Platform")))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"fromQuery?")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"boolean"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," DBType"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/types/Type.ts#L11"},"packages/core/src/types/Type.ts:11")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"converttojsvalue"},"convertToJSValue"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"convertToJSValue"),"(",Object(b.b)("inlineCode",{parentName:"p"},"value"),": JSType ","|"," DBType, ",Object(b.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.platform"},Object(b.b)("em",{parentName:"a"},"Platform")),"): JSType"),Object(b.b)("p",null,"Converts a value from its database representation to its JS representation of this type."),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"value")),Object(b.b)("td",{parentName:"tr",align:null},"JSType ","|"," DBType")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"platform")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/core.platform"},Object(b.b)("em",{parentName:"a"},"Platform")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," JSType"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/types/Type.ts#L18"},"packages/core/src/types/Type.ts:18")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getcolumntype"},"getColumnType"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getColumnType"),"(",Object(b.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.entityproperty"},Object(b.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(b.b)("em",{parentName:"p"},"any"),">",", ",Object(b.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.platform"},Object(b.b)("em",{parentName:"a"},"Platform")),"): ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Gets the SQL declaration snippet for a field of this type."),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"prop")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/core.entityproperty"},Object(b.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(b.b)("em",{parentName:"td"},"any"),">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"platform")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/core.platform"},Object(b.b)("em",{parentName:"a"},"Platform")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/types/Type.ts#L41"},"packages/core/src/types/Type.ts:41")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"tojson"},"toJSON"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"toJSON"),"(",Object(b.b)("inlineCode",{parentName:"p"},"value"),": JSType, ",Object(b.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.platform"},Object(b.b)("em",{parentName:"a"},"Platform")),"): JSType ","|"," DBType"),Object(b.b)("p",null,"Converts a value from its JS representation to its serialized JSON form of this type.\nBy default uses the runtime value."),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"value")),Object(b.b)("td",{parentName:"tr",align:null},"JSType")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"platform")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/core.platform"},Object(b.b)("em",{parentName:"a"},"Platform")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," JSType ","|"," DBType"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/types/Type.ts#L34"},"packages/core/src/types/Type.ts:34")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"gettype"},"getType"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"getType"),"<JSType, DBType",">","(",Object(b.b)("inlineCode",{parentName:"p"},"cls"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core#constructor"},Object(b.b)("em",{parentName:"a"},"Constructor")),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.type"},Object(b.b)("em",{parentName:"a"},"Type")),"<JSType, DBType",">",">","): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.type"},Object(b.b)("em",{parentName:"a"},"Type")),"<JSType, DBType",">"),Object(b.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"JSType"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"DBType"))))),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"cls")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/core#constructor"},Object(b.b)("em",{parentName:"a"},"Constructor")),"<",Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/core.type"},Object(b.b)("em",{parentName:"a"},"Type")),"<JSType, DBType",">",">")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.type"},Object(b.b)("em",{parentName:"a"},"Type")),"<JSType, DBType",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/types/Type.ts#L46"},"packages/core/src/types/Type.ts:46")))}m.isMDXComponent=!0}}]);