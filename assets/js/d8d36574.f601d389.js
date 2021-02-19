(window.webpackJsonp=window.webpackJsonp||[]).push([[812],{1051:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),m=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=m(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=m(n),u=i,g=p["".concat(o,".").concat(u)]||p[u]||b[u]||r;return n?a.a.createElement(g,c(c({ref:t},s),{},{components:n})):a.a.createElement(g,c({ref:t},s))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},885:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return m}));var i=n(3),a=n(8),r=(n(0),n(1051)),o={title:"Migrations"},c={unversionedId:"migrations",id:"version-4.2/migrations",isDocsHomePage:!1,title:"Migrations",description:"MikroORM has integrated support for migrations via umzug.",source:"@site/versioned_docs/version-4.2/migrations.md",slug:"/migrations",permalink:"/docs/4.2/migrations",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.2/migrations.md",version:"4.2",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1613771845,sidebar:"version-4.2/docs",previous:{title:"Property Validation",permalink:"/docs/4.2/property-validation"},next:{title:"Read Replica Connections",permalink:"/docs/4.2/read-connections"}},l=[{value:"Migration class",id:"migration-class",children:[]},{value:"Initial migration",id:"initial-migration",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Using via CLI",id:"using-via-cli",children:[]},{value:"Using the Migrator programmatically",id:"using-the-migrator-programmatically",children:[]},{value:"Providing transaction context",id:"providing-transaction-context",children:[]},{value:"Importing migrations statically",id:"importing-migrations-statically",children:[]},{value:"Limitations",id:"limitations",children:[{value:"MySQL",id:"mysql",children:[]}]}],s={toc:l};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"MikroORM has integrated support for migrations via ",Object(r.b)("a",{parentName:"p",href:"https://github.com/sequelize/umzug"},"umzug"),".\nIt allows you to generate migrations with current schema differences."),Object(r.b)("p",null,"By default, each migration will be all executed inside a transaction, and all of them will\nbe wrapped in one master transaction, so if one of them fails, everything will be rolled back. "),Object(r.b)("h2",{id:"migration-class"},"Migration class"),Object(r.b)("p",null,"Migrations are classes that extend Migration abstract class:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"export class Migration20191019195930 extends Migration {\n\n  async up(): Promise<void> {\n    this.addSql('select 1 + 1');\n  }\n\n}\n")),Object(r.b)("p",null,"To support undoing those changed, you can implement the ",Object(r.b)("inlineCode",{parentName:"p"},"down")," method, which throws an error by default. "),Object(r.b)("p",null,"Migrations are by default wrapped in a transaction. You can override this behaviour on\nper migration basis by implementing the ",Object(r.b)("inlineCode",{parentName:"p"},"isTransactional(): boolean")," method."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Configuration")," object and driver instance are available in the ",Object(r.b)("inlineCode",{parentName:"p"},"Migration")," class context."),Object(r.b)("p",null,"You can execute queries in the migration via ",Object(r.b)("inlineCode",{parentName:"p"},"Migration.execute()")," method, which\nwill run queries in the same transaction as the rest of the migration. The\n",Object(r.b)("inlineCode",{parentName:"p"},"Migration.addSql()")," method also accepts instances of knex. Knex instance can be\naccessed via ",Object(r.b)("inlineCode",{parentName:"p"},"Migration.getKnex()"),"; "),Object(r.b)("h2",{id:"initial-migration"},"Initial migration"),Object(r.b)("p",null,"If you want to start using migrations, and you already have the schema generated,\nyou can do so by creating so called initial migration:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Initial migration can be created only if there are no migrations previously\ngenerated or executed. ")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"npx mikro-orm migration:create --initial\n")),Object(r.b)("p",null,"This will create the initial migration, containing the schema dump from\n",Object(r.b)("inlineCode",{parentName:"p"},"schema:create")," command. The migration will be automatically marked as executed. "),Object(r.b)("h2",{id:"configuration"},"Configuration"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"await MikroORM.init({\n  // default values:\n  migrations: {\n    tableName: 'mikro_orm_migrations', // name of database table with log of executed transactions\n    path: './migrations', // path to the folder with migrations\n    pattern: /^[\\w-]+\\d+\\.ts$/, // regex pattern for the migration files\n    transactional: true, // wrap each migration in a transaction\n    disableForeignKeys: true, // wrap statements with `set foreign_key_checks = 0` or equivalent\n    allOrNothing: true, // wrap all migrations in master transaction\n    dropTables: true, // allow to disable table dropping\n    safe: false, // allow to disable table and column dropping\n    emit: 'ts', // migration generation mode\n  },\n})\n")),Object(r.b)("h2",{id:"using-via-cli"},"Using via CLI"),Object(r.b)("p",null,"You can use it via CLI: "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"npx mikro-orm migration:create   # Create new migration with current schema diff\nnpx mikro-orm migration:up       # Migrate up to the latest version\nnpx mikro-orm migration:down     # Migrate one step down\nnpx mikro-orm migration:list     # List all executed migrations\nnpx mikro-orm migration:pending  # List all pending migrations\n")),Object(r.b)("p",null,"For ",Object(r.b)("inlineCode",{parentName:"p"},"migration:up")," and ",Object(r.b)("inlineCode",{parentName:"p"},"migration:down")," commands you can specify ",Object(r.b)("inlineCode",{parentName:"p"},"--from")," (",Object(r.b)("inlineCode",{parentName:"p"},"-f"),"), ",Object(r.b)("inlineCode",{parentName:"p"},"--to")," (",Object(r.b)("inlineCode",{parentName:"p"},"-t"),")\nand ",Object(r.b)("inlineCode",{parentName:"p"},"--only")," (",Object(r.b)("inlineCode",{parentName:"p"},"-o"),") options to run only a subset of migrations:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"npx mikro-orm migration:up --from 2019101911 --to 2019102117  # the same as above\nnpx mikro-orm migration:up --only 2019101923                  # apply a single migration\nnpx mikro-orm migration:down --to 0                           # migratee down all migrations\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"To run TS migration files, you will need to ",Object(r.b)("a",{parentName:"p",href:"/docs/4.2/installation"},"enable ",Object(r.b)("inlineCode",{parentName:"a"},"useTsNode")," flag"),"\nin your ",Object(r.b)("inlineCode",{parentName:"p"},"package.json"),".")),Object(r.b)("h2",{id:"using-the-migrator-programmatically"},"Using the Migrator programmatically"),Object(r.b)("p",null,"Or you can create a simple script where you initialize MikroORM like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="./migrate.ts"',title:'"./migrate.ts"'},"import { MikroORM } from '@mikro-orm/core';\n\n(async () => {\n  const orm = await MikroORM.init({\n    dbName: 'your-db-name',\n    // ...\n  });\n\n  const migrator = orm.getMigrator();\n  await migrator.createMigration(); // creates file Migration20191019195930.ts\n  await migrator.up(); // runs migrations up to the latest\n  await migrator.up('up-to-name'); // runs migrations up to given version\n  await migrator.down('down-to-name'); // runs migrations down to given version\n  await migrator.down(); // migrates one step down\n  await migrator.down({ to: 0 }); // migrates down to the first version\n\n  await orm.close(true);\n})();\n")),Object(r.b)("p",null,"Then run this script via ",Object(r.b)("inlineCode",{parentName:"p"},"ts-node")," (or compile it to plain JS and use ",Object(r.b)("inlineCode",{parentName:"p"},"node"),"):"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"$ ts-node migrate\n")),Object(r.b)("h2",{id:"providing-transaction-context"},"Providing transaction context"),Object(r.b)("p",null,"In some cases you might want to control the transaction context yourself:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"await orm.em.transactional(async em => {\n  await migrator.up({ transaction: em.getTransactionContext() });\n});\n")),Object(r.b)("h2",{id:"importing-migrations-statically"},"Importing migrations statically"),Object(r.b)("p",null,"If you do not want to dynamically import a folder (e.g. when bundling your code with webpack) you can import migrations\ndirectly."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"import { Migration20191019195930 } from '../migrations/Migration20191019195930.ts';\n\nawait MikroORM.init({\n  migrations: {\n    migrationsList: [\n      {\n        name: 'Migration20191019195930.ts',\n        class: Migration20191019195930,\n      },\n    ],\n  },\n});\n")),Object(r.b)("p",null,"With the help of (webpacks context module api)","[https://webpack.js.org/guides/dependency-management/#context-module-api]","\nwe can dynamically import the migrations making it possible to import all files in a folder."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"import { basename } from 'path';\n\nconst migrations = {};\n\nfunction importAll(r) {\n  r.keys().forEach(\n    (key) => (migrations[basename(key)] = Object.values(r(key))[0])\n  );\n}\n\nimportAll(require.context('../migrations', false, /\\.ts$/));\n\nconst migrationsList = Object.keys(migrations).map((migrationName) => ({\n  name: migrationName,\n  class: migrations[migrationName],\n}));\n\nawait MikroORM.init({\n  migrations: {\n    migrationsList,\n  },\n});\n")),Object(r.b)("h2",{id:"limitations"},"Limitations"),Object(r.b)("h3",{id:"mysql"},"MySQL"),Object(r.b)("p",null,"There is no way to rollback DDL changes in MySQL. An implicit commit is forced for those\nqueries automatically, so transactions are not working as expected. "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/mikro-orm/mikro-orm/issues/217"},"https://github.com/mikro-orm/mikro-orm/issues/217")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://dev.mysql.com/doc/refman/5.7/en/implicit-commit.html"},"https://dev.mysql.com/doc/refman/5.7/en/implicit-commit.html"))),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"/docs/4.2/index#table-of-contents"},"\u2190"," Back to table of contents")))}m.isMDXComponent=!0}}]);