(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[82259],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,b=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(b,i(i({ref:t},c),{},{components:r})):n.createElement(b,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},45919:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var n=r(74034),o=r(79973),a=(r(67294),r(3905)),i={title:"Usage with Babel"},l={unversionedId:"usage-with-babel",id:"version-4.5/usage-with-babel",isDocsHomePage:!1,title:"Usage with Babel",description:"When compiling TS via babel, decorators are by default handled different implementation",source:"@site/versioned_docs/version-4.5/usage-with-babel.md",sourceDirName:".",slug:"/usage-with-babel",permalink:"/docs/usage-with-babel",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.5/usage-with-babel.md",version:"4.5",lastUpdatedBy:"Bart Riepe",lastUpdatedAt:1621234353,formattedLastUpdatedAt:"5/17/2021",frontMatter:{title:"Usage with Babel"},sidebar:"version-4.5/docs",previous:{title:"Usage with JavaScript",permalink:"/docs/usage-with-js"},next:{title:"Using Entity Constructors",permalink:"/docs/entity-constructors"}},s=[],p={toc:s};function c(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When compiling TS via babel, decorators are by default handled different implementation\nthan what ",(0,a.kt)("inlineCode",{parentName:"p"},"tsc")," uses. To make the metadata extraction from decorators via Babel work,\nwe need to do use following plugins:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "plugins": [\n    "babel-plugin-transform-typescript-metadata",\n    ["@babel/plugin-proposal-decorators", { "legacy": true }],\n    ["@babel/plugin-proposal-class-properties", { "loose": true  }]\n  ]\n}\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Make sure to install the plugins first: ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn add -D babel-plugin-transform-typescript-metadata @babel/plugin-proposal-decorators @babel/plugin-proposal-class-properties"))),(0,a.kt)("p",null,"Lastly we need to set the ",(0,a.kt)("inlineCode",{parentName:"p"},"BABEL_DECORATORS_COMPAT")," environment variable to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," to\nadjust the return value of decorators. "),(0,a.kt)("p",null,"More information about this topic can be found here:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/mikro-orm/mikro-orm/issues/840"},"https://github.com/mikro-orm/mikro-orm/issues/840")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://jonahallibonetech.medium.com/next-js-9-mikroorm-eb6f6e08e1a1"},"https://jonahallibonetech.medium.com/next-js-9-mikroorm-eb6f6e08e1a1"))))}c.isMDXComponent=!0}}]);