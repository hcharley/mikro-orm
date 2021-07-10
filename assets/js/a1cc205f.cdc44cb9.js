(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[73553],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},81867:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var r=n(74034),o=n(79973),a=(n(67294),n(3905)),i={title:"EntityHelper and Decorated Entities",sidebar_label:"Updating Entity Values"},p=void 0,s={unversionedId:"entity-helper",id:"version-4.0/entity-helper",isDocsHomePage:!1,title:"EntityHelper and Decorated Entities",description:"Updating Entity Values with entity.assign()",source:"@site/versioned_docs/version-4.0/entity-helper.md",sourceDirName:".",slug:"/entity-helper",permalink:"/docs/4.0/entity-helper",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.0/entity-helper.md",version:"4.0",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1625904480,formattedLastUpdatedAt:"7/10/2021",frontMatter:{title:"EntityHelper and Decorated Entities",sidebar_label:"Updating Entity Values"},sidebar:"version-4.0/docs",previous:{title:"Serializing",permalink:"/docs/4.0/serializing"},next:{title:"Property Validation",permalink:"/docs/4.0/property-validation"}},l=[{value:"Updating Entity Values with <code>entity.assign()</code>",id:"updating-entity-values-with-entityassign",children:[]},{value:"<code>WrappedEntity</code> and <code>wrap()</code> helper",id:"wrappedentity-and-wrap-helper",children:[{value:"Accessing internal prefixed properties",id:"accessing-internal-prefixed-properties",children:[]}]}],c={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"updating-entity-values-with-entityassign"},"Updating Entity Values with ",(0,a.kt)("inlineCode",{parentName:"h2"},"entity.assign()")),(0,a.kt)("p",null,"When you want to update entity based on user input, you will usually have just plain\nstring ids of entity relations as user input. Normally you would need to use\n",(0,a.kt)("inlineCode",{parentName:"p"},"em.getReference()")," to create references from each id first, and then\nuse those references to update entity relations:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const jon = new Author('Jon Snow', 'snow@wall.st');\nconst book = new Book('Book', jon);\nbook.author = orm.em.getReference<Author>(Author, '...id...');\n")),(0,a.kt)("p",null,"Same result can be easily achieved with ",(0,a.kt)("inlineCode",{parentName:"p"},"entity.assign()"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { wrap } from '@mikro-orm/core';\n\nwrap(book).assign({ \n  title: 'Better Book 1', \n  author: '...id...',\n});\nconsole.log(book.title); // 'Better Book 1'\nconsole.log(book.author); // instance of Author with id: '...id...'\nconsole.log(book.author.id); // '...id...'\n")),(0,a.kt)("p",null,"To use ",(0,a.kt)("inlineCode",{parentName:"p"},"entity.assign()")," on not managed entities, you need to provide ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityManager"),"\ninstance explicitly: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { wrap } from '@mikro-orm/core';\n\nconst book = new Book();\nwrap(book).assign({ \n  title: 'Better Book 1', \n  author: '...id...',\n}, { em: orm.em });\n")),(0,a.kt)("p",null,"By default, ",(0,a.kt)("inlineCode",{parentName:"p"},"entity.assign(data)")," behaves same way as ",(0,a.kt)("inlineCode",{parentName:"p"},"Object.assign(entity, data)"),",\ne.g. it does not merge things recursively. To enable deep merging of object properties,\nuse second parameter to enable ",(0,a.kt)("inlineCode",{parentName:"p"},"mergeObjects")," flag:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { wrap } from '@mikro-orm/core';\n\nbook.meta = { foo: 1, bar: 2 };\n\nwrap(book).assign({ meta: { foo: 3 } }, { mergeObjects: true });\nconsole.log(book.meta); // { foo: 3, bar: 2 }\n\nwrap(book).assign({ meta: { foo: 4 } });\nconsole.log(book.meta); // { foo: 4 }\n")),(0,a.kt)("h2",{id:"wrappedentity-and-wrap-helper"},(0,a.kt)("inlineCode",{parentName:"h2"},"WrappedEntity")," and ",(0,a.kt)("inlineCode",{parentName:"h2"},"wrap()")," helper"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"IWrappedEntity")," is an interface that defines public helper methods provided\nby the ORM:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface IWrappedEntity<T, PK extends keyof T> {\n  isInitialized(): boolean;\n  populated(populated?: boolean): void;\n  init(populated?: boolean, lockMode?: LockMode): Promise<T>;\n  toReference(): IdentifiedReference<T, PK>;\n  toObject(ignoreFields?: string[]): Dictionary;\n  toJSON(...args: any[]): Dictionary;\n  assign(data: any, options?: AssignOptions | boolean): T;\n}\n")),(0,a.kt)("p",null,"There are two ways to access those methods. You can either extend ",(0,a.kt)("inlineCode",{parentName:"p"},"BaseEntity"),"\n(exported from ",(0,a.kt)("inlineCode",{parentName:"p"},"@mikro-orm/core"),"), that defines those methods, or use the\n",(0,a.kt)("inlineCode",{parentName:"p"},"wrap()")," helper to access ",(0,a.kt)("inlineCode",{parentName:"p"},"WrappedEntity")," instance, where those methods\nexist."),(0,a.kt)("p",null,"Users can choose whether they are fine with polluting the entity interface with\nthose additional methods, or they want to keep the interface clean\nand use the ",(0,a.kt)("inlineCode",{parentName:"p"},"wrap(entity)")," helper method instead to access them. "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Since v4 ",(0,a.kt)("inlineCode",{parentName:"p"},"wrap(entity)")," no longer returns the entity, now the ",(0,a.kt)("inlineCode",{parentName:"p"},"WrappedEntity")," instance is\nbeing returned. It contains only public methods (",(0,a.kt)("inlineCode",{parentName:"p"},"init"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"assign"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"isInitialized"),", ...),\nif you want to access internal properties like ",(0,a.kt)("inlineCode",{parentName:"p"},"__meta")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"__em"),", you need to explicitly\nask for the helper via ",(0,a.kt)("inlineCode",{parentName:"p"},"wrap(entity, true)"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { BaseEntity } from '@mikro-orm/core';\n\n@Entity()\nexport class Book extends BaseEntity<Book, 'id'> { ... }\n")),(0,a.kt)("p",null,"Then you can work with those methods directly:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"book.meta = { foo: 1, bar: 2 };\nbook.assign({ meta: { foo: 3 } }, { mergeObjects: true });\nconsole.log(book.meta); // { foo: 3, bar: 2 }\n")),(0,a.kt)("h3",{id:"accessing-internal-prefixed-properties"},"Accessing internal prefixed properties"),(0,a.kt)("p",null,"Previously it was possible to access internal properties like ",(0,a.kt)("inlineCode",{parentName:"p"},"__meta")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"__em"),"\nfrom the ",(0,a.kt)("inlineCode",{parentName:"p"},"wrap()")," helper. Now to access them, you need to use second parameter of\nwrap:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class Author { ... }\n\nconsole.log(wrap(author, true).__meta);\n")))}d.isMDXComponent=!0}}]);