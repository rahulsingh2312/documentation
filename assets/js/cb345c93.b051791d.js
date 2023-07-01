"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7820],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(a),d=r,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return a?n.createElement(f,i(i({ref:t},p),{},{components:a})):n.createElement(f,i({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(6010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>I});var n=a(7462),r=a(7294),o=a(6010),i=a(2466),s=a(6550),l=a(1980),u=a(7392),p=a(12);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=m(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[l,u]=f({queryString:a,groupId:n}),[c,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,p.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),g=(()=>{const e=l??c;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),h(e)}),[u,h,o]),tabValues:o}}var g=a(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:a,selectedValue:s,selectValue:l,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),m=e=>{const t=e.currentTarget,a=p.indexOf(t),n=u[a].value;n!==s&&(c(t),l(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:m},i,{className:(0,o.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":s===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},r.createElement(k,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function I(e){const t=(0,g.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},1129:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>b,frontMatter:()=>p,metadata:()=>m,toc:()=>f});var n=a(7462),r=(a(7294),a(3905)),o=a(4866),i=a(5162),s=a(933),l=a(8328),u=a(261);const p={slug:"introduction-to-api",title:"Introduction to APIs: Unlocking the Power of Integration",authors:["himanshu"],tags:["api","integration","software","authentication"],description:"An Introduction to APIs: Unlocking the Power of Integration",keywords:["api","integration"]},c=void 0,m={permalink:"/blog/introduction-to-api",source:"@site/blog/2023-06-10-introduction-to-api/index.mdx",title:"Introduction to APIs: Unlocking the Power of Integration",description:"An Introduction to APIs: Unlocking the Power of Integration",date:"2023-06-10T00:00:00.000Z",formattedDate:"June 10, 2023",tags:[{label:"api",permalink:"/blog/tags/api"},{label:"integration",permalink:"/blog/tags/integration"},{label:"software",permalink:"/blog/tags/software"},{label:"authentication",permalink:"/blog/tags/authentication"}],readingTime:3.975,hasTruncateMarker:!1,authors:[{name:"Himanshu Agarwal",title:"Docs Team Lead | 2x Kaggle Expert | Software Developer | Data Analyst",url:"https://github.com/himanshu-03",imageURL:"https://github.com/himanshu-03.png",key:"himanshu"}],frontMatter:{slug:"introduction-to-api",title:"Introduction to APIs: Unlocking the Power of Integration",authors:["himanshu"],tags:["api","integration","software","authentication"],description:"An Introduction to APIs: Unlocking the Power of Integration",keywords:["api","integration"]},prevItem:{title:"This Month in AI - June 2023",permalink:"/blog/tmai-june-2023"},nextItem:{title:"This Month in AI - May 2023",permalink:"/blog/tmai-may-2023"}},d={authorsImageUrls:[void 0]},f=[{value:"Introduction to API",id:"introduction-to-api",level:2},{value:"Why are APIs Important?",id:"why-are-apis-important",level:2},{value:"Types of APIs",id:"types-of-apis",level:2},{value:"API Communication Styles:",id:"api-communication-styles",level:2},{value:"Common APIs",id:"common-apis",level:2},{value:"Conclusion",id:"conclusion",level:2}],h={toc:f},g="wrapper";function b(e){let{components:t,...a}=e;return(0,r.kt)(g,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Applications and systems rely on smooth communication and data sharing to deliver improved functionality and services in today's interconnected digital environment. ",(0,r.kt)("strong",{parentName:"em"},"Application Programming Interfaces (APIs)")," are quite important in this situation. APIs serve as mediators, enabling interoperability, data sharing, and communication between various software programmes. This article will provide you a thorough introduction to APIs and their importance in contemporary software development, whether you're a developer, a tech enthusiast, or just interested about the world of APIs."))),(0,r.kt)("br",null),(0,r.kt)("figure",null,(0,r.kt)("img",{src:l.Z,style:{border:"2px solid grey"}}),(0,r.kt)("center",null,(0,r.kt)("figcaption",null,"APIs to a layman"))),(0,r.kt)("h2",{id:"introduction-to-api"},"Introduction to API"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Application Programming Interface")," is referred to as API. It is a set of guidelines and protocols that specifies how various software components ought to communicate and share information. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"APIs")," can be thought of as a contract that enables successful communication between two software entities. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"APIs")," give programmers a standardised method of using the features of other software platforms, libraries, or systems.")),(0,r.kt)("h2",{id:"why-are-apis-important"},"Why are APIs Important?"),(0,r.kt)("p",null,"APIs have revolutionized the way software is developed and integrated. Here are some key reasons why APIs are important:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Seamless Integration",attributes:{className:s.Z.unique},mdxType:"TabItem"},(0,r.kt)("p",null,"By allowing various software systems to interact and cooperate, APIs enable developers to take advantage of already-existing functions and resources without having to start from scratch.")),(0,r.kt)(i.Z,{value:"Extensibility and Scalability",attributes:{className:s.Z.unique},mdxType:"TabItem"},(0,r.kt)("p",null,"APIs give software developers a modular way to create new features, services, or data sources. As applications can be built upon existing APIs, promoting extensibility and scalability while saving time and effort.")),(0,r.kt)(i.Z,{value:"Collaboration and Innovation",attributes:{className:s.Z.unique},mdxType:"TabItem"},(0,r.kt)("p",null,"By offering a standardised method of sharing data and services, APIs promote collaboration between developers and organisations. As a result, innovation is accelerated since developers can use APIs to build new apps or incorporate current systems into creative solutions.")),(0,r.kt)(i.Z,{value:"User Experience",attributes:{className:s.Z.unique},mdxType:"TabItem"},(0,r.kt)("p",null,"APIs make it easier to incorporate services or data sources from outside sources into applications, which improves the overall user experience. For instance, incorporating a weather API into a travel app gives users access to real-time weather information, enhancing the utility and appeal of the service."))),(0,r.kt)("h2",{id:"types-of-apis"},"Types of APIs"),(0,r.kt)("p",null,"APIs come in different types and formats, depending on the purpose and underlying technology. Here are some common types of APIs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Web APIs:")," These APIs allow web-based services and applications to communicate with one another. The majority of the time, they are built on widely used web protocols like ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTP")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"REST")," (Representational State Transfer).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"SOAP APIs:")," Based on XML (eXtensible Markup Language), SOAP (Simple Object Access Protocol) APIs offer a standardised method for applications to communicate structured information across a network.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"JSON-RPC and XML-RPC:")," JSON (JavaScript Object Notation) or XML can be used as the data format for remote procedure calls when using the ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON-RPC")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"XML-RPC APIs"),". They're frequently employed for lightweight."))),(0,r.kt)("h2",{id:"api-communication-styles"},"API Communication Styles:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"RESTful APIs:")," REST (Representational State Transfer) is a popular architectural style for designing web APIs. RESTful APIs use standard HTTP methods such as ",(0,r.kt)("inlineCode",{parentName:"p"},"GET"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"POST"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"PUT"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE")," to perform operations on resources. They often return data in formats like JSON or XML.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"GraphQL:")," GraphQL is an alternative to RESTful APIs that provides a more flexible and efficient approach to data retrieval. With GraphQL, clients can specify the exact data they need, reducing over-fetching and under-fetching of data.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Real-Time APIs:")," Real-time APIs use technologies like WebSockets to enable bidirectional communication between the client and the server. They are ideal for applications that require instant updates, such as chat applications or real-time collaboration tools."))),(0,r.kt)("h2",{id:"common-apis"},"Common APIs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Social media APIs:")," Websites like ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://developers.facebook.com/docs/"},"Facebook")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://developer.twitter.com/en/docs/twitter-api"},"Twitter")),", and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://developers.facebook.com/docs/instagram-api/"},"Instagram"))," offer APIs that let programmers incorporate social media features into their applications, such as updating statuses, retrieving user profiles, or engaging with social networks.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Payment Gateway APIs:")," Companies such as ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://developer.paypal.com/api/rest/"},"PayPal")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://stripe.com/docs/api"},"Stripe")),", and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://developer.paypal.com/braintree/docs"},"Braintree"))," provide APIs for handling online payments, allowing developers to include secure payment processing into their apps.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Mapping and Geolocation APIs:")," Maps, geolocation data, routing, and other location-based services are all made available by mapping and geolocation APIs, which developers can use to build apps with mapping features. Examples of these APIs include ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://developers.google.com/maps/apis-by-platform"},"Google Maps"))," and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://docs.mapbox.com/api/overview/"},"Mapbox")),"."))),(0,r.kt)("img",{src:u.Z}),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"APIs enable seamless integration, teamwork, and creativity, serving as the foundation for contemporary software development. For developers and organisations wishing to take use of the power of APIs to build strong and interconnected applications, understanding APIs and their many types, communication styles, authentication methods, documentation practises, and management systems is essential. So go ahead and discover the immense possibilities that APIs contain for your software applications by exploring their enormous world!"))}b.isMDXComponent=!0},933:(e,t,a)=>{a.d(t,{Z:()=>n});const n={features:"features_t9lD",featureSvg:"featureSvg_GfXr",unique:"unique_cziY"}},8328:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/api-to-layman-87f159cbade040856e308df80d0e089a.png"},261:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/apis-b58fc05e4054c5413c8f5ac058e3fc9a.png"}}]);