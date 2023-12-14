"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7352],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94122:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={title:"Title and Logo in Navbar",id:"title-and-logo",sidebar_label:"Title and Logo",description:"A detailed overview of adding title and logo in Navbar of TCET Open Source Website",keywords:["tcet","open-source","software"]},i=void 0,l={unversionedId:"projects/docs-site/navbar/title-and-logo",id:"projects/docs-site/navbar/title-and-logo",title:"Title and Logo in Navbar",description:"A detailed overview of adding title and logo in Navbar of TCET Open Source Website",source:"@site/docs/projects/docs-site/navbar/title-and-logo.md",sourceDirName:"projects/docs-site/navbar",slug:"/projects/docs-site/navbar/title-and-logo",permalink:"/docs/projects/docs-site/navbar/title-and-logo",draft:!1,editUrl:"https://github.com/tcet-opensource/documentation/edit/main/docs/projects/docs-site/navbar/title-and-logo.md",tags:[],version:"current",lastUpdatedBy:"Himanshu Agarwal",lastUpdatedAt:1682162494,formattedLastUpdatedAt:"Apr 22, 2023",frontMatter:{title:"Title and Logo in Navbar",id:"title-and-logo",sidebar_label:"Title and Logo",description:"A detailed overview of adding title and logo in Navbar of TCET Open Source Website",keywords:["tcet","open-source","software"]},sidebar:"docs",previous:{title:"Navbar",permalink:"/docs/projects/docs-site/navbar/"},next:{title:"Items",permalink:"/docs/projects/docs-site/navbar/adding-items"}},s={},p=[{value:"Using Navbars",id:"using-navbars",level:2},{value:"Adding title and logo",id:"adding-title-and-logo",level:3}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"using-navbars"},"Using Navbars"),(0,o.kt)("h3",{id:"adding-title-and-logo"},"Adding title and logo"),(0,o.kt)("p",null,"To change the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"title")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"logo")," in the navbar function, we need to edit the ",(0,o.kt)("inlineCode",{parentName:"p"},"themeConfig")," object in the ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file of our project."),(0,o.kt)("p",null,"Here's a step-by-step guide on how we made those changes:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Opening the ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file in our project's root directory.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Locating the ",(0,o.kt)("inlineCode",{parentName:"p"},"themeConfig")," object within the file. It should be defined as follows:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"themeConfig: {\n// Your theme configuration goes here\n},\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To change the title of the navbar, we located the ",(0,o.kt)("inlineCode",{parentName:"p"},"title")," property within the ",(0,o.kt)("inlineCode",{parentName:"p"},"navbar")," object, and updated its value to the desired title:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js" {3} showLineNumbers',title:'"docusaurus.config.js"',"{3}":!0,showLineNumbers:!0},"navbar: {\n    // Other navbar properties go here\n    title: 'TCET Open Source',\n    // Other navbar properties go here\n},\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To change the logo of the navbar, we located the ",(0,o.kt)("inlineCode",{parentName:"p"},"logo")," object within the ",(0,o.kt)("inlineCode",{parentName:"p"},"navbar")," object, and updated its ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"alt")," properties to the desired logo image and alt text:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js" {3-5} showLineNumbers',title:'"docusaurus.config.js"',"{3-5}":!0,showLineNumbers:!0},"navbar: {\n    // Other navbar properties go here\n    logo: {\n        alt: 'TCET Open Source Logo',\n        src: 'img/logo.png',\n    },\n    // Other navbar properties go here\n},\n")),(0,o.kt)("admonition",{parentName:"li",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"In our case we had the logo of our website at ",(0,o.kt)("inlineCode",{parentName:"p"},"/img/logo.png")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Save the ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn start")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"npm start")," to see the changes reflected in your local development environment."))),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"With the ",(0,o.kt)("a",{parentName:"em",href:"title-and-logo"},(0,o.kt)("strong",{parentName:"a"},"title and logo"))," completed, it's time we move onto ",(0,o.kt)("a",{parentName:"em",href:"adding-items"},(0,o.kt)("strong",{parentName:"a"},"adding items to our navbar")),".")))}u.isMDXComponent=!0}}]);