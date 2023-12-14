"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6144],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23612:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(67294),r=n(86010),o=n(35281),i=n(95999);const s={admonition:"admonition_LlT9",admonitionHeading:"admonitionHeading_tbUL",admonitionIcon:"admonitionIcon_kALy",admonitionContent:"admonitionContent_S0QG"};const l={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(i.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(i.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(i.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(i.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(i.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},c={secondary:"note",important:"info",success:"tip",warning:"danger"};function d(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=a.Children.toArray(e),n=t.find((e=>a.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),r=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:r}}(e.children);return{...e,title:e.title??t,children:n}}function u(e){const{children:t,type:n,title:i,icon:u}=d(e),p=function(e){const t=c[e]??e,n=l[t];return n||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),l.info)}(n),m=i??p.label,{iconComponent:h}=p,f=u??a.createElement(h,null);return a.createElement("div",{className:(0,r.Z)(o.k.common.admonition,o.k.common.admonitionType(e.type),"alert",`alert--${p.infimaClassName}`,s.admonition)},a.createElement("div",{className:s.admonitionHeading},a.createElement("span",{className:s.admonitionIcon},f),m),a.createElement("div",{className:s.admonitionContent},t))}},24386:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o=n.p+"assets/images/navbar-1-47d076475843abcbaa8a3be2e3446a3f.png";var i=n(23612);const s={title:"Search Bar in Navbar",id:"search-bar",sidebar_label:"Search Bar",description:"A detailed overview of adding Search bar in Navbar of TCET Open Source Website",keywords:["tcet","open-source","software"]},l=void 0,c={unversionedId:"projects/docs-site/navbar/search-bar",id:"projects/docs-site/navbar/search-bar",title:"Search Bar in Navbar",description:"A detailed overview of adding Search bar in Navbar of TCET Open Source Website",source:"@site/docs/projects/docs-site/navbar/search-bar.mdx",sourceDirName:"projects/docs-site/navbar",slug:"/projects/docs-site/navbar/search-bar",permalink:"/docs/projects/docs-site/navbar/search-bar",draft:!1,editUrl:"https://github.com/tcet-opensource/documentation/edit/main/docs/projects/docs-site/navbar/search-bar.mdx",tags:[],version:"current",lastUpdatedBy:"Himanshu Agarwal",lastUpdatedAt:1686811870,formattedLastUpdatedAt:"Jun 15, 2023",frontMatter:{title:"Search Bar in Navbar",id:"search-bar",sidebar_label:"Search Bar",description:"A detailed overview of adding Search bar in Navbar of TCET Open Source Website",keywords:["tcet","open-source","software"]},sidebar:"docs",previous:{title:"Links",permalink:"/docs/projects/docs-site/navbar/adding-links"},next:{title:"Sidebars",permalink:"/docs/projects/docs-site/sidebar/"}},d={},u=[{value:"Adding a search bar",id:"adding-a-search-bar",level:3},{value:"Congratulations \ud83c\udf8a",id:"congratulations-",level:2}],p={toc:u},m="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"adding-a-search-bar"},"Adding a search bar"),(0,r.kt)("p",null,"We are continuously working on improving our website to provide the best user experience. As part of this effort, we will be adding a ",(0,r.kt)("strong",{parentName:"p"},"search bar functionality")," in the near future. "),(0,r.kt)("p",null,"This feature will make it easy for users to access the documentations and blogs on our website. Thank you for your patience and support as we strive to make our website more user-friendly and professional."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Here are the steps we plan to take to implement this functionality:"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Installing the ",(0,r.kt)("inlineCode",{parentName:"p"},"@docusaurus/plugin-search-local")," package:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev @docusaurus/plugin-search-local\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Adding the plugin to our ",(0,r.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js" {3-15} showLineNumbers',title:'"docusaurus.config.js"',"{3-15}":!0,showLineNumbers:!0},"module.exports = {\n    // ...\n    plugins: [\n        [\n            '@docusaurus/plugin-search-local',\n            {\n                indexDocs: true, // Whether to index docs pages\n                indexBlog: true, // Whether to index blog pages\n                indexPages: true, // Whether to index static pages\n                docsRouteBasePath: '/docs', // Base path for the docs route\n                blogRouteBasePath: '/blog', // Base path for the blog route\n                language: ['en'], // Supported languages\n            },\n        ],\n    ],\n    // ...\n    };\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Adding the search bar to the navbar in our ",(0,r.kt)("inlineCode",{parentName:"p"},"themeConfig")," file:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js" {10-11} showLineNumbers',title:'"docusaurus.config.js"',"{10-11}":!0,showLineNumbers:!0},"module.exports = {\n    // ...\n    themeConfig: {\n        // ...\n        navbar: {\n            // ...\n            items: [\n                // ...\n                {\n                    type: 'search',\n                    position: 'right',\n                },\n            ],\n        },\n    },\n    // ...\n};\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Building our site:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Running our site:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start\n")))),(0,r.kt)("h2",{id:"congratulations-"},"Congratulations \ud83c\udf8a"),(0,r.kt)("p",null,"Following these steps and points, we were able to create a beautiful and interactive navbar . It's final structure looks something like this:"),(0,r.kt)("img",{src:o}),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"With this, we are pleased to announce that the ",(0,r.kt)("strong",{parentName:"em"},"navbar feature has been successfully added to the our organizations's website"),". You may have noticed that the navbar has a number of helpful links and features that make it simple to navigate the documentation.")),(0,r.kt)("p",null,"We are convinced that by including search capabilities in the navbar, our users will reach the documentation and blog entries even more easily."),(0,r.kt)("br",null),(0,r.kt)(i.Z,{type:"info",icon:"\ud83d\udce2",title:"Annoucement",mdxType:"Admonition"},(0,r.kt)("br",null),(0,r.kt)("p",null,"We're excited to share that the next page of our project documentation will include a detailed overview of the sidebars that we'll be incorporating. We believe that this will greatly enhance the user experience and make navigating our documentation even easier. ",(0,r.kt)("i",null,(0,r.kt)("b",null,"Stay tuned for more updates!")))))}h.isMDXComponent=!0}}]);