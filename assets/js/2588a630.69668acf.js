(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[90087],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return m},kt:function(){return k}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),l=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=l(a),k=n,u=d["".concat(s,".").concat(k)]||d[k]||c[k]||o;return a?r.createElement(u,i(i({ref:t},m),{},{components:a})):r.createElement(u,i({ref:t},m))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4607:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var r=a(74034),n=a(79973),o=(a(67294),a(3905)),i={id:"core.configurationloader",title:"Class: ConfigurationLoader",sidebar_label:"ConfigurationLoader",custom_edit_url:null,hide_title:!0},p="Class: ConfigurationLoader",s={unversionedId:"api/classes/core.configurationloader",id:"version-4.5/api/classes/core.configurationloader",isDocsHomePage:!1,title:"Class: ConfigurationLoader",description:"core.ConfigurationLoader",source:"@site/versioned_docs/version-4.5/api/classes/core.configurationloader.md",sourceDirName:"api/classes",slug:"/api/classes/core.configurationloader",permalink:"/docs/api/classes/core.configurationloader",editUrl:null,version:"4.5",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1629875824,formattedLastUpdatedAt:"8/25/2021",frontMatter:{id:"core.configurationloader",title:"Class: ConfigurationLoader",sidebar_label:"ConfigurationLoader",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"Configuration",permalink:"/docs/api/classes/core.configuration"},next:{title:"Connection",permalink:"/docs/api/classes/core.connection"}},l=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"getConfigPaths",id:"getconfigpaths",children:[]},{value:"getConfiguration",id:"getconfiguration",children:[]},{value:"getPackageConfig",id:"getpackageconfig",children:[]},{value:"getSettings",id:"getsettings",children:[]},{value:"getTsConfig",id:"gettsconfig",children:[]},{value:"loadEnvironmentVars",id:"loadenvironmentvars",children:[]},{value:"registerTsNode",id:"registertsnode",children:[]}]}],m={toc:l};function c(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"class-configurationloader"},"Class: ConfigurationLoader"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".ConfigurationLoader"),(0,o.kt)("h2",{id:"constructors"},"Constructors"),(0,o.kt)("h3",{id:"constructor"},"constructor"),(0,o.kt)("p",null,"+"," ",(0,o.kt)("strong",{parentName:"p"},"new ConfigurationLoader"),"(): ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.configurationloader"},(0,o.kt)("em",{parentName:"a"},"ConfigurationLoader"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.configurationloader"},(0,o.kt)("em",{parentName:"a"},"ConfigurationLoader"))),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"getconfigpaths"},"getConfigPaths"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("inlineCode",{parentName:"p"},"Static"),(0,o.kt)("strong",{parentName:"p"},"getConfigPaths"),"(): ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<string[]",">"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<string[]",">"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/ConfigurationLoader.ts#L47"},"packages/core/src/utils/ConfigurationLoader.ts:47")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"getconfiguration"},"getConfiguration"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("inlineCode",{parentName:"p"},"Static"),(0,o.kt)("strong",{parentName:"p"},"getConfiguration"),"<D",">","(",(0,o.kt)("inlineCode",{parentName:"p"},"validate?"),": ",(0,o.kt)("em",{parentName:"p"},"boolean"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"options?"),": ",(0,o.kt)("em",{parentName:"p"},"Partial"),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/api/modules/core#options"},(0,o.kt)("em",{parentName:"a"},"Options")),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.idatabasedriver"},(0,o.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.connection"},(0,o.kt)("em",{parentName:"a"},"Connection")),">",">",">","): ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.configuration"},(0,o.kt)("em",{parentName:"a"},"Configuration")),"<D",">",">"),(0,o.kt)("h4",{id:"type-parameters"},"Type parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"D")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.idatabasedriver"},(0,o.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,o.kt)("a",{parentName:"td",href:"/docs/api/classes/core.connection"},(0,o.kt)("em",{parentName:"a"},"Connection")),", D",">"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.idatabasedriver"},(0,o.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,o.kt)("a",{parentName:"td",href:"/docs/api/classes/core.connection"},(0,o.kt)("em",{parentName:"a"},"Connection")),">")))),(0,o.kt)("h4",{id:"parameters"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"validate")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"boolean")),(0,o.kt)("td",{parentName:"tr",align:"left"},"true")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"options?")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"Partial"),"<",(0,o.kt)("a",{parentName:"td",href:"/docs/api/modules/core#options"},(0,o.kt)("em",{parentName:"a"},"Options")),"<",(0,o.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.idatabasedriver"},(0,o.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,o.kt)("a",{parentName:"td",href:"/docs/api/classes/core.connection"},(0,o.kt)("em",{parentName:"a"},"Connection")),">",">",">"),(0,o.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.configuration"},(0,o.kt)("em",{parentName:"a"},"Configuration")),"<D",">",">"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/ConfigurationLoader.ts#L12"},"packages/core/src/utils/ConfigurationLoader.ts:12")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"getpackageconfig"},"getPackageConfig"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("inlineCode",{parentName:"p"},"Static"),(0,o.kt)("strong",{parentName:"p"},"getPackageConfig"),"(): ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},(0,o.kt)("em",{parentName:"a"},"Dictionary")),"<any",">",">"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},(0,o.kt)("em",{parentName:"a"},"Dictionary")),"<any",">",">"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/ConfigurationLoader.ts#L34"},"packages/core/src/utils/ConfigurationLoader.ts:34")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"getsettings"},"getSettings"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("inlineCode",{parentName:"p"},"Static"),(0,o.kt)("strong",{parentName:"p"},"getSettings"),"(): ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.settings"},(0,o.kt)("em",{parentName:"a"},"Settings")),">"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.settings"},(0,o.kt)("em",{parentName:"a"},"Settings")),">"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/ConfigurationLoader.ts#L42"},"packages/core/src/utils/ConfigurationLoader.ts:42")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"gettsconfig"},"getTsConfig"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("inlineCode",{parentName:"p"},"Static"),(0,o.kt)("strong",{parentName:"p"},"getTsConfig"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"tsConfigPath"),": ",(0,o.kt)("em",{parentName:"p"},"string"),"): ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},(0,o.kt)("em",{parentName:"a"},"Dictionary")),"<any",">",">"),(0,o.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"tsConfigPath")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"string"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},(0,o.kt)("em",{parentName:"a"},"Dictionary")),"<any",">",">"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/ConfigurationLoader.ts#L89"},"packages/core/src/utils/ConfigurationLoader.ts:89")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"loadenvironmentvars"},"loadEnvironmentVars"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("inlineCode",{parentName:"p"},"Static"),(0,o.kt)("strong",{parentName:"p"},"loadEnvironmentVars"),"<D",">","(",(0,o.kt)("inlineCode",{parentName:"p"},"options?"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/modules/core#options"},(0,o.kt)("em",{parentName:"a"},"Options")),"<D",">"," ","|"," ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.configuration"},(0,o.kt)("em",{parentName:"a"},"Configuration")),"<D",">","): ",(0,o.kt)("em",{parentName:"p"},"Partial"),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/api/modules/core#options"},(0,o.kt)("em",{parentName:"a"},"Options")),"<D",">",">"),(0,o.kt)("h4",{id:"type-parameters-1"},"Type parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"D")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.idatabasedriver"},(0,o.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,o.kt)("a",{parentName:"td",href:"/docs/api/classes/core.connection"},(0,o.kt)("em",{parentName:"a"},"Connection")),", D",">")))),(0,o.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"options?")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/api/modules/core#options"},(0,o.kt)("em",{parentName:"a"},"Options")),"<D",">"," ","|"," ",(0,o.kt)("a",{parentName:"td",href:"/docs/api/classes/core.configuration"},(0,o.kt)("em",{parentName:"a"},"Configuration")),"<D",">")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"Partial"),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/api/modules/core#options"},(0,o.kt)("em",{parentName:"a"},"Options")),"<D",">",">"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/ConfigurationLoader.ts#L94"},"packages/core/src/utils/ConfigurationLoader.ts:94")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"registertsnode"},"registerTsNode"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("inlineCode",{parentName:"p"},"Static"),(0,o.kt)("strong",{parentName:"p"},"registerTsNode"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"configPath?"),": ",(0,o.kt)("em",{parentName:"p"},"string"),"): ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,o.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"configPath")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:"left"},"'tsconfig.json'")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/ConfigurationLoader.ts#L67"},"packages/core/src/utils/ConfigurationLoader.ts:67")))}c.isMDXComponent=!0}}]);