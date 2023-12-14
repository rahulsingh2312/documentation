"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5300],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52262:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"Links in Navbar",id:"adding-links",sidebar_label:"Links",description:"A detailed overview of adding href links in Navbar of TCET Open Source Website",keywords:["tcet","open-source","software"]},o=void 0,s={unversionedId:"projects/docs-site/navbar/adding-links",id:"projects/docs-site/navbar/adding-links",title:"Links in Navbar",description:"A detailed overview of adding href links in Navbar of TCET Open Source Website",source:"@site/docs/projects/docs-site/navbar/adding-links.md",sourceDirName:"projects/docs-site/navbar",slug:"/projects/docs-site/navbar/adding-links",permalink:"/docs/projects/docs-site/navbar/adding-links",draft:!1,editUrl:"https://github.com/tcet-opensource/documentation/edit/main/docs/projects/docs-site/navbar/adding-links.md",tags:[],version:"current",lastUpdatedBy:"Himanshu Agarwal",lastUpdatedAt:1682162494,formattedLastUpdatedAt:"Apr 22, 2023",frontMatter:{title:"Links in Navbar",id:"adding-links",sidebar_label:"Links",description:"A detailed overview of adding href links in Navbar of TCET Open Source Website",keywords:["tcet","open-source","software"]},sidebar:"docs",previous:{title:"Items",permalink:"/docs/projects/docs-site/navbar/adding-items"},next:{title:"Search Bar",permalink:"/docs/projects/docs-site/navbar/search-bar"}},p={},c=[{value:"Adding href to our Github repo:",id:"adding-href-to-our-github-repo",level:3}],l={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"adding-href-to-our-github-repo"},"Adding href to our Github repo:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Navigating to the ",(0,a.kt)("inlineCode",{parentName:"p"},"themeConfig")," object in our Docusaurus configuration file.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Locating the ",(0,a.kt)("inlineCode",{parentName:"p"},"navbar")," object within the ",(0,a.kt)("inlineCode",{parentName:"p"},"themeConfig")," object.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Finding the ",(0,a.kt)("inlineCode",{parentName:"p"},"items")," array within the ",(0,a.kt)("inlineCode",{parentName:"p"},"navbar")," object.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Locating the object within the ",(0,a.kt)("inlineCode",{parentName:"p"},"items")," array that has the ",(0,a.kt)("inlineCode",{parentName:"p"},"href")," property."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js" {5-7} showLineNumbers',title:'"docusaurus.config.js"',"{5-7}":!0,showLineNumbers:!0},"themeConfig: {\n    navbar: {\n        items: [\n            {\n                href: 'https://github.com/your-organization/your-repo',\n                label: 'GitHub',\n                position: 'right',\n            },\n        ],\n    },\n},\n\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Replacing the value of the href property with the URL of our organization's GitHub repo."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js" {5-7} showLineNumbers',title:'"docusaurus.config.js"',"{5-7}":!0,showLineNumbers:!0},"themeConfig: {\n   navbar: {\n       items: [\n           {\n               href: 'https://github.com/tcet-opensource/documentation',\n               label: 'GitHub',\n               position: 'right',\n           },\n       ],\n   },\n},\n")),(0,a.kt)("admonition",{parentName:"li",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"We added the ",(0,a.kt)("inlineCode",{parentName:"p"},"position:'right'")," to our ",(0,a.kt)("inlineCode",{parentName:"p"},"href")," object because we wanted the link to be displayed on the right side of the ",(0,a.kt)("inlineCode",{parentName:"p"},"navbar"),".")))),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"With the ",(0,a.kt)("a",{parentName:"em",href:"adding-links"},(0,a.kt)("strong",{parentName:"a"},"links"))," in place, we then move forward to create the ",(0,a.kt)("a",{parentName:"em",href:"search-bar"},(0,a.kt)("strong",{parentName:"a"},"search bar"))," for our navbar.")))}u.isMDXComponent=!0}}]);