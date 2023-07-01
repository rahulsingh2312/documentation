"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6345],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,g=c["".concat(l,".").concat(u)]||c[u]||m[u]||o;return n?i.createElement(g,r(r({ref:t},d),{},{components:n})):i.createElement(g,r({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3612:(e,t,n)=>{n.d(t,{Z:()=>c});var i=n(7294),a=n(6010),o=n(5281),r=n(5999);const s={admonition:"admonition_LlT9",admonitionHeading:"admonitionHeading_tbUL",admonitionIcon:"admonitionIcon_kALy",admonitionContent:"admonitionContent_S0QG"};const l={note:{infimaClassName:"secondary",iconComponent:function(){return i.createElement("svg",{viewBox:"0 0 14 16"},i.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:i.createElement(r.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return i.createElement("svg",{viewBox:"0 0 12 16"},i.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:i.createElement(r.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return i.createElement("svg",{viewBox:"0 0 12 16"},i.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:i.createElement(r.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return i.createElement("svg",{viewBox:"0 0 14 16"},i.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:i.createElement(r.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return i.createElement("svg",{viewBox:"0 0 16 16"},i.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:i.createElement(r.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},p={secondary:"note",important:"info",success:"tip",warning:"danger"};function d(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=i.Children.toArray(e),n=t.find((e=>i.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),a=i.createElement(i.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:a}}(e.children);return{...e,title:e.title??t,children:n}}function c(e){const{children:t,type:n,title:r,icon:c}=d(e),m=function(e){const t=p[e]??e,n=l[t];return n||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),l.info)}(n),u=r??m.label,{iconComponent:g}=m,h=c??i.createElement(g,null);return i.createElement("div",{className:(0,a.Z)(o.k.common.admonition,o.k.common.admonitionType(e.type),"alert",`alert--${m.infimaClassName}`,s.admonition)},i.createElement("div",{className:s.admonitionHeading},i.createElement("span",{className:s.admonitionIcon},h),u),i.createElement("div",{className:s.admonitionContent},t))}},5678:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>f,frontMatter:()=>p,metadata:()=>c,toc:()=>u});var i=n(7462),a=(n(7294),n(3905));const o=n.p+"assets/images/HugeEvents-a0e6e63c695e41ecc3e78b0064ca4205.png",r=n.p+"assets/images/ProfessionalBodies-53508b2de6fe27b69a7b4e9edf917207.png";var s=n(3612);const l=n.p+"assets/images/HeroTraining-227049954ab417cc542b1c23aad8f203.png",p={title:"Training",id:"training",description:"Training Component in T&P Website",sidebar_label:"Training",keyword:["training","professional-bodies","huge-events"]},d=void 0,c={unversionedId:"projects/tnp-website/frontend-components/training",id:"projects/tnp-website/frontend-components/training",title:"Training",description:"Training Component in T&P Website",source:"@site/docs/projects/tnp-website/frontend-components/training.mdx",sourceDirName:"projects/tnp-website/frontend-components",slug:"/projects/tnp-website/frontend-components/training",permalink:"/docs/projects/tnp-website/frontend-components/training",draft:!1,editUrl:"https://github.com/tcet-opensource/documentation/edit/main/docs/projects/tnp-website/frontend-components/training.mdx",tags:[],version:"current",lastUpdatedBy:"Himanshu Agarwal",lastUpdatedAt:1687789463,formattedLastUpdatedAt:"Jun 26, 2023",frontMatter:{title:"Training",id:"training",description:"Training Component in T&P Website",sidebar_label:"Training",keyword:["training","professional-bodies","huge-events"]},sidebar:"docs",previous:{title:"Hero",permalink:"/docs/projects/tnp-website/frontend-components/hero"},next:{title:"Attendance Chart",permalink:"/docs/projects/tnp-website/frontend-components/attendance-chart"}},m={},u=[{value:"Huge Events Section",id:"huge-events-section",level:2},{value:"Professional Bodies Section",id:"professional-bodies-section",level:2},{value:"Hero Section",id:"hero-section",level:2}],g={toc:u},h="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,i.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Training page on our website showcases a variety of training activities conducted by ",(0,a.kt)("strong",{parentName:"p"},"Training and Placement Cell")," along with professional student bodies under the ",(0,a.kt)("strong",{parentName:"p"},"T&P department"),". It highlights the initiatives aimed at ",(0,a.kt)("strong",{parentName:"p"},"enhancing the skills")," and ",(0,a.kt)("strong",{parentName:"p"},"knowledge")," of students, preparing them for future careers. Additionally, the page features major events organized by these student bodies, providing valuable opportunities for ",(0,a.kt)("strong",{parentName:"p"},"networking")," and ",(0,a.kt)("strong",{parentName:"p"},"career development"),"."),(0,a.kt)("h2",{id:"huge-events-section"},"Huge Events Section"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"HugeEvents")," Component, defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"index.astro")," file, is a flexible and responsive section that showcases various events organized by ",(0,a.kt)("strong",{parentName:"p"},"Training and Placement Cell"),". . It allows displaying event details such as the ",(0,a.kt)("strong",{parentName:"p"},"event name"),", an ",(0,a.kt)("strong",{parentName:"p"},"associated image"),", and a ",(0,a.kt)("strong",{parentName:"p"},"description"),". This component is designed to provide an engaging and visually appealing way to present event information on the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://tnp.tcetmumbai.in"},"T&P Website")),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Lets take a look at how we implemented this component in our website.")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open ",(0,a.kt)("inlineCode",{parentName:"p"},"index.astro")," file.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"We now added the different events that are conducted by the organizations under ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://tnp.tcetmumbai.in"},"T&P")),". ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"<div>")," classes in the provided code snippet define the styling and layout of the elements within the component.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"We them mention the ",(0,a.kt)("strong",{parentName:"p"},"event name"),", and ",(0,a.kt)("strong",{parentName:"p"},"event description")," in the code as shown below."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"We will see how we implemented those changes:")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="index.astro" {4-5,8,11-14} showLineNumbers',title:'"index.astro"',"{4-5,8,11-14}":!0,showLineNumbers:!0},'<div class="flex flex-col md:flex-row md:justify-center gap-y-4">\n    <div class="flex flex-col md:w-1/2">\n        <div class="py-3 pl-3 text-3xl font-title bg-blue-50 rounded-lg text-blue-600">\n            \x3c!-- Event name goes here --\x3e\n            Hacktoberfest - GDSC-TCET\n        </div>\n        <div>\n            <img class="mt-4 object-contain w-full rounded-t-xl" src="../../events/pic_1.png" alt="pic_1">  \n        </div>\n        <div class="bg-blue-100 text-slate-700 font-Inter text-sm sm:text-base rounded-b-xl p-4">\n            \x3c!-- Event description goes here --\x3e\n            College level Hacktoberfest event was conducted to encourage students to\n            contribute to open source projects and to learn about the open source\n            community.\n        </div>\n    </div>\n    \x3c!--Other Huge Events--\x3e \n</div>\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Also, we added an ",(0,a.kt)("inlineCode",{parentName:"p"},"image")," section in the middle to include some event pictures or banners."))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Similar steps were carried out for multiple ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"#huge-events-section"},"Huge Events")),". ")),(0,a.kt)("p",null,"After completing the above steps, we successfully incorporated the ",(0,a.kt)("strong",{parentName:"p"},"Huge Events")," section in our website. ",(0,a.kt)("strong",{parentName:"p"},"You can see the snapshot below:")),(0,a.kt)("figure",null,(0,a.kt)("img",{src:o,style:{border:"2px solid gray"}}),(0,a.kt)("center",null,(0,a.kt)("b",null,(0,a.kt)("figcaption",null,"Huge Events Section")))),(0,a.kt)("h2",{id:"professional-bodies-section"},"Professional Bodies Section"),(0,a.kt)("p",null,"This section showcases the ",(0,a.kt)("strong",{parentName:"p"},"professional student bodies")," of the Training and Placement Cell. It provides information about the different student bodies and their respective logos."),(0,a.kt)("p",null,"It was implemented in a similar way as the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"#huge-events-section"},"Huge Events Section")),". ",(0,a.kt)("strong",{parentName:"p"},"Lets have a look at the changes that were made to achieve this.")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Opening ",(0,a.kt)("inlineCode",{parentName:"p"},"index.astro")," file for ",(0,a.kt)("em",{parentName:"p"},"Professional Bodies Section"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The first ",(0,a.kt)("inlineCode",{parentName:"p"},"<div>")," container contains the main heading of the section.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Then, next we added the tagline of the section as shown in ",(0,a.kt)("strong",{parentName:"p"},"line number 8"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"After this we defined another parent container ",(0,a.kt)("inlineCode",{parentName:"p"},"<div>")," which then included the images of the professional bodies withing the ",(0,a.kt)("inlineCode",{parentName:"p"},"<img>")," and their name mentioned in the ",(0,a.kt)("inlineCode",{parentName:"p"},"<span>")," tags."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="index.astro" {3-4,7-8,14-18,19} showLineNumbers',title:'"index.astro"',"{3-4,7-8,14-18,19}":!0,showLineNumbers:!0},'<div class="flex flex-col justify-center align-middle sm:w-2/6">\n    <div class="font-semibold text-2xl xl:text-3xl font-Inter pb-2 uppercase">\n        \x3c!-- Title of the student bodies section --\x3e\n        professional student bodies of training and placement cell\n    </div>\n    <div class="text-slate-700 font-Inter text-lg">\n        \x3c!-- Description of the student bodies section --\x3e\n        Working together for a better Future!!\n    </div>\n</div>\n<div class="md:flex-col sm:w-3/5 mt-4">\n    \x3c!-- Student body section 1 --\x3e\n    <div class="flex justify-left xl:justify-center gap-x-4 items-center bg-gray-50 rounded-lg p-6">\n        <img \n            class="w-10 object-contain" \n            src="../../logos/tcet_shastra.png" \n            alt="tcet_shastra" \n        />\n        <span class="text-lg">TCET Shastra Coding Club</span>\n    </div>\n    \x3c!-- More student body sections can be added here --\x3e\n</div>\n')))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Similar steps were carried out to add multiple ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"#professional-bodies-section"},"Professional Student Bodies")),". ")),(0,a.kt)("p",null,"After completing the above steps, we successfully incorporated the ",(0,a.kt)("strong",{parentName:"p"},"Professional Bodies")," section in our website. ",(0,a.kt)("strong",{parentName:"p"},"You can see the snapshot below:")),(0,a.kt)("figure",null,(0,a.kt)("img",{src:r,style:{border:"2px solid gray"}}),(0,a.kt)("center",null,(0,a.kt)("b",null,(0,a.kt)("figcaption",null,"Professional Bodies Section")))),(0,a.kt)(s.Z,{type:"caution",icon:"\u2139\ufe0f",title:"IMPORTANT",mdxType:"Admonition"},(0,a.kt)("p",null,"Similarly, we have also included the ",(0,a.kt)("b",null,(0,a.kt)("a",{href:"https://opensource.tcetmumbai.in"},"TCET Open Source"))," section in the ",(0,a.kt)("b",null,(0,a.kt)("a",{href:"#professional-bodies-section"},"Professional Bodies")),".",(0,a.kt)("br",null),"You can refer it here: ",(0,a.kt)("b",null,(0,a.kt)("a",{href:"https://github.com/tcet-opensource/tnp-website/blob/main/src/components/Training/TcetOpenSource/index.astro"},"TCET Open Source section.")))),(0,a.kt)("h2",{id:"hero-section"},"Hero Section"),(0,a.kt)("p",null,"While implementing ",(0,a.kt)("strong",{parentName:"p"},"Hero Section"),", we wanted to add a Carousel Section where we can display different images, so we created an ",(0,a.kt)("inlineCode",{parentName:"p"},"Carousel.jsx")," file to implement a ",(0,a.kt)("strong",{parentName:"p"},"Swipe Carousel.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Below are the steps for implementation:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"An array called ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," is defined, containing objects with ",(0,a.kt)("inlineCode",{parentName:"p"},"caption")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"imgLink")," properties. Each object represents a slide in the Swiper component and holds the caption and image link for the slide."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Carousel.jsx" {3-4}   showLineNumbers',title:'"Carousel.jsx"',"{3-4}":!0,"":!0,showLineNumbers:!0},'const data = [\n    {\n        caption: "Massa elementum mi sed magnis",\n        imgLink: "student-workshop.png",    \n    },\n// Other Image Links and Captions\n],\n\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"We then defined a ",(0,a.kt)("strong",{parentName:"p"},"Swiper")," component in our code to set various configurations and properties. The navigation configurations were updated in this component as we can shee in the highlighted part of the code below:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Carousel.jsx" showLineNumbers',title:'"Carousel.jsx"',showLineNumbers:!0},'export default () => {\nreturn (\n    <Swiper\n    // install Swiper modules\n    navigation={{\n        prevEl: ".swiper-prev",\n        nextEl: ".swiper-next",\n        disabledClass: "swiper-button-disabled",\n    }}\n    >\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Now we headed over to the ",(0,a.kt)("inlineCode",{parentName:"p"},"index.astro")," file to add other components in the section.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"We added the ",(0,a.kt)("strong",{parentName:"p"},"Carousel")," component from the ",(0,a.kt)("inlineCode",{parentName:"p"},"Carousel.jsx")," file, and in the next container we defined various activities under training with a short description about the same. The ",(0,a.kt)("strong",{parentName:"p"},"svg icons")," denoting the activites were also added. "),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="index.astro" {3,7,10,13-16} showLineNumbers',title:'"index.astro"',"{3,7,10,13-16}":!0,showLineNumbers:!0},'<div class="grid lg:grid-rows-2 lg:grid-cols-3 sm:grid-rows-3 sm:grid-cols-2 grid-cols-1 grid-rows-6 gap-4">\n    <div>\n        <Carousel client:load />\n    </div>\n    <div class="flex flex-col gap-y-3 p-4 rounded-2xl border border-[#CCC6FF] bg-[#EEECFF]">\n        <div class="w-14 h-14 bg-[#A488F0] p-4 flex items-center justify-center rounded-full">\n            <img src="/misc/stacks.svg" alt="stack-of-books-icon" />\n        </div>\n        <h2 class="lg:text-2xl md:text-2xl text-xl font-title font-normal">\n            Aptitude Training\n        </h2>\n        <p class="lg:text-base md:text-sm text-[#475467] text-sm">\n            The main objective of this program is to make students employable by\n            providing them training on aptitude skills and soft skills. Under this,\n            we conduct various mock activities like Aptitude test, Group discussion\n            and personal interviews and more!\n        </p>\n    </div>\n    \x3c!-- Other activites added --\x3e\n</div>\n')))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Similar steps were carried out to add multiple ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"#hero-section"},"Training Activities")),". ")),(0,a.kt)("p",null,"After completing the above steps, we successfully incorporated the ",(0,a.kt)("strong",{parentName:"p"},"Hero")," section in our website. ",(0,a.kt)("strong",{parentName:"p"},"You can see the snapshot below:")),(0,a.kt)("figure",null,(0,a.kt)("img",{src:l,style:{border:"2px solid gray"}}),(0,a.kt)("center",null,(0,a.kt)("b",null,(0,a.kt)("figcaption",null,"Hero Section of Training Component")))),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"With the successful implementation of the provided code, we have successfully incorporated the ",(0,a.kt)("strong",{parentName:"em"},(0,a.kt)("a",{parentName:"strong",href:"training"},"Training"))," page into our website. Moving forward, let's now explore how we integrated the ",(0,a.kt)("strong",{parentName:"em"},(0,a.kt)("a",{parentName:"strong",href:"attendance-chart"},"Attendance Chart"))," page into the ",(0,a.kt)("strong",{parentName:"em"},(0,a.kt)("a",{parentName:"strong",href:"https://tnp.tcetmumbai.in"},"T&P Website")))))}f.isMDXComponent=!0}}]);