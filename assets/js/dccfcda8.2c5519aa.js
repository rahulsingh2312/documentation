"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[378],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),h=r,u=c["".concat(l,".").concat(h)]||c[h]||m[h]||i;return n?a.createElement(u,o(o({ref:t},p),{},{components:n})):a.createElement(u,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1869:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>g,frontMatter:()=>p,metadata:()=>m,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i=n.p+"assets/images/logo-name-0c582a858a750e58fa765cfbfcc03b5e.png",o="data:image/png;base64,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",s="data:image/png;base64,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",l=n.p+"assets/images/Nav-107deda682bc1746a88440e94b9ea41a.png",d=n.p+"assets/images/desktop-view-cfdaf661e1660dda63d37514b563ce01.png",p={title:"Header",id:"header",description:"Header Component in Resume Screener Website",sidebar_label:"Header",keywords:["header"]},c=void 0,m={unversionedId:"projects/resume-screener-website/frontend-components/header",id:"projects/resume-screener-website/frontend-components/header",title:"Header",description:"Header Component in Resume Screener Website",source:"@site/docs/projects/resume-screener-website/frontend-components/header.mdx",sourceDirName:"projects/resume-screener-website/frontend-components",slug:"/projects/resume-screener-website/frontend-components/header",permalink:"/docs/projects/resume-screener-website/frontend-components/header",draft:!1,editUrl:"https://github.com/tcet-opensource/documentation/edit/main/docs/projects/resume-screener-website/frontend-components/header.mdx",tags:[],version:"current",lastUpdatedBy:"Himanshu Agarwal",lastUpdatedAt:1688305373,formattedLastUpdatedAt:"Jul 2, 2023",frontMatter:{title:"Header",id:"header",description:"Header Component in Resume Screener Website",sidebar_label:"Header",keywords:["header"]},sidebar:"docs",previous:{title:"Tech Stacks",permalink:"/docs/projects/resume-screener-website/frontend-components/tech-stacks"},next:{title:"Hero",permalink:"/docs/projects/resume-screener-website/frontend-components/hero"}},h={},u=[{value:"Navigation Links Data",id:"navigation-links-data",level:3},{value:"Adding Logo and Name",id:"adding-logo-and-name",level:3},{value:"Adding Get Started Button",id:"adding-get-started-button",level:3},{value:"Adding three line menu button and Navigation for mobile view",id:"adding-three-line-menu-button-and-navigation-for-mobile-view",level:3}],k={toc:u},b="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(b,(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Header")," is a section at the top of a webpage that typically contains branding elements, navigation menus, and important information. It helps establish website identity, improves user experience, and ensures easy access to different sections of a website on various devices."),(0,r.kt)("h3",{id:"navigation-links-data"},"Navigation Links Data"),(0,r.kt)("p",null,"This block of code defines an array called ",(0,r.kt)("inlineCode",{parentName:"p"},"navlinks")," which stores objects representing ",(0,r.kt)("strong",{parentName:"p"},"navigation links"),". Each object has a title (the text to display) and a link (the URL to navigate to). "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Navbar.jsx"{3-4,7-8}showLineNumbers',title:'"Navbar.jsx"{3-4,7-8}showLineNumbers'},'   const navlinks = [\n     {\n      title: "Home",\n      link: "/#Home",\n     },\n      {\n       title: "About Us",\n       link: "https://opensource.tcetmumbai.in/docs/about-tcetopensource",\n       newtab: true,\n      },\n     // ...\n    ];\n')),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The code defines an array called ",(0,r.kt)("inlineCode",{parentName:"li"},"navlinks")," that contains objects representing the ",(0,r.kt)("strong",{parentName:"li"},"links")," in the navbar. Each object has a title and a link property.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"   Some objects also have a newtab property set to ",(0,r.kt)("strong",{parentName:"p"},"true"),", indicating that the link should open in a new browser tab.")),(0,r.kt)("h3",{id:"adding-logo-and-name"},"Adding Logo and Name"),(0,r.kt)("p",null,"This section represents the ",(0,r.kt)("strong",{parentName:"p"},"logo")," and website name ",(0,r.kt)("strong",{parentName:"p"},"Resume Screener"),' on the navbar. It displays the logo image, the name "',(0,r.kt)("strong",{parentName:"p"},"Resume screener"),'," and applies some styling including a border, gradient background, and a blur effect.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Navbar.jsx"{8-13}showLineNumbers',title:'"Navbar.jsx"{8-13}showLineNumbers'},'     <div\n       className="flex items-center gap-3 rounded-full border-2 border-white border-opacity-25"\n       style={{\n        background:\n         "linear-gradient(218.92deg, rgba(255, 255, 255, 0.25) 30.2%, rgba(255, 255, 255, 0) 105.59%)",\n        backdrop: "blur(4px)"\n         }}>\n          <img src="/Footer/logo.png" alt="" className="h-[48px] p-1" />\n         <a href="/" className="text-white">\n          <h2 className="text-white font-{400} text-base pr-2.5">\n           Resume screener\n         </h2>\n          </a>\n    </div>\n')),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"div")," represents the logo section of the navbar. It has CSS classes for styling and a style attribute that sets a background gradient and blur effect. Within this ",(0,r.kt)("inlineCode",{parentName:"li"},"div"),", there is an img tag displaying the ",(0,r.kt)("strong",{parentName:"li"},"logo"),' image and an a tag wrapping the heading text "',(0,r.kt)("em",{parentName:"li"},"Resume screener"),'".')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"On performing the above steps, the logo and name looked like this:")," "),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},(0,r.kt)("img",{src:i,style:{border:"1px solid gray"}})),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"adding-get-started-button"},"Adding Get Started Button"),(0,r.kt)("p",null,'This section represents the "',(0,r.kt)("strong",{parentName:"p"},"Get Started"),'" button on the desktop version of the navbar. It is styled with a border, text color, hover effects, and rounded corners. The button contains an ',(0,r.kt)("inlineCode",{parentName:"p"},"a"),' element that links to "',(0,r.kt)("em",{parentName:"p"},"/#installation"),'".'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Navbar.jsx"{2-4}showLineNumbers',title:'"Navbar.jsx"{2-4}showLineNumbers'},'   <div className="!ml-8 border-2 border-[#475467] rounded-lg">\n      <button className="inline-flex items-center text-[#E0EAFF] border-1 border-white py-1 px-2 focus:outline-none rounded md:mt-0 hover:bg-[#475467] hover:text-[#E0EAFF] text-base 2xl:text-lg">\n      <a href="/#installation">Get Started</a>\n      </button>\n   </div>\n')),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The outer ",(0,r.kt)("inlineCode",{parentName:"li"},"div")," has a left margin, border, and rounded corners."),(0,r.kt)("li",{parentName:"ol"},"Inside the ",(0,r.kt)("inlineCode",{parentName:"li"},"div"),", there's a ",(0,r.kt)("inlineCode",{parentName:"li"},"button")," element styled as an inline-flex container with centered items, specific text and border colors, padding, rounded corners, and hover effects."),(0,r.kt)("li",{parentName:"ol"},"Within the ",(0,r.kt)("inlineCode",{parentName:"li"},"button"),", there's an a element serving as a link with the text \"",(0,r.kt)("strong",{parentName:"li"},"Get Started"),'" and a target URL of ',(0,r.kt)("em",{parentName:"li"},"/#installation"),"."),(0,r.kt)("li",{parentName:"ol"},"On performing the above steps, the ",(0,r.kt)("strong",{parentName:"li"},"Get Started")," Button looked like this: ")),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},(0,r.kt)("img",{src:o,style:{border:"1px solid gray"}})),(0,r.kt)("br",null),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"   Similar steps are carried out to display ",(0,r.kt)("strong",{parentName:"p"},"Logo")," and ",(0,r.kt)("strong",{parentName:"p"},"Get Started")," Button on a smaller screen.")),(0,r.kt)("h3",{id:"adding-three-line-menu-button-and-navigation-for-mobile-view"},"Adding three line menu button and Navigation for mobile view"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When viewed on phone, the navigation options will be hidden under the three line ",(0,r.kt)("em",{parentName:"p"},"menu"),". "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Navbar.jsx"{2,7-10}showLineNumbers',title:'"Navbar.jsx"{2,7-10}showLineNumbers'},'    //to keep the navigation options hidden\n    <div className="-mr-2 flex md:hidden">\n     {/* ... */}\n    </div>\n    //three line menu button\n     <button\n       type="button"\n         onClick={handleMenu}\n       className="inline-flex items-center justify-center p-2 rounded-lg text-white hover:ring-white focus:outline-none focus:ring-2 focus:rig-offset-2 focus:ring-offset-white focus:ring-white">\n        {/* ... */}\n     </button>\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The outer ",(0,r.kt)("inlineCode",{parentName:"p"},"div")," has CSS classes to position it as a flex container with negative margin on the right side. It is hidden on medium-sized screens and larger.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"button")," is styled as an inline-flex container with centered items, padding, rounded corners, white text color, and various focus and hover effects.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"onClick")," event handler is assigned to the button to trigger the ",(0,r.kt)("inlineCode",{parentName:"p"},"handleMenu")," function when clicked.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"navigation links")," on mobile view would be hidden under the three line menu. The code for mobile nav: "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Navbar.jsx"{2-11}showLineNumbers',title:'"Navbar.jsx"{2-11}showLineNumbers'},'    {open ? (\n      <div className="flex flex-col  md:hidden">\n        <div className="px-2 pt-1 pb-3 space-y-1 sm:px-3">\n          {navlinks.map((link, index) => (\n            <a\n              key={index}\n              className="text-center cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"\n              href={link.link}>\n              {link.title}\n            </a>\n          ))}\n          <a\n            href="/Get Started"\n            className="text-center cursor-pointer text-[#E0EAFF] hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">\n            Get Started\n          </a>\n        </div>\n      </div>\n    ) : null}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"There is a ",(0,r.kt)("inlineCode",{parentName:"p"},"div")," element with CSS classes that make it a flex container with a column layout. It is hidden on medium-sized screens and smaller.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Inside this ",(0,r.kt)("inlineCode",{parentName:"p"},"div"),", there is another ",(0,r.kt)("inlineCode",{parentName:"p"},"div")," element with CSS classes for padding and spacing.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Within this inner ",(0,r.kt)("inlineCode",{parentName:"p"},"div"),", there is a mapping over the ",(0,r.kt)("inlineCode",{parentName:"p"},"navlinks")," array using the map function.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For each item in the ",(0,r.kt)("inlineCode",{parentName:"p"},"navlinks")," array, an a element is rendered with CSS classes for styling, including text color, hover effects, padding, rounded corners, and font size. The href attribute is set to the link property of the current ",(0,r.kt)("inlineCode",{parentName:"p"},"navlinks")," item, and the text content of the a element is set to the title property of the current ",(0,r.kt)("inlineCode",{parentName:"p"},"navlinks")," item.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Lastly, there is an additional a element rendered at the end, separate from the ",(0,r.kt)("inlineCode",{parentName:"p"},"navlinks")," array mapping. It has similar CSS classes but a different href attribute value.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On execution of the adove codes, the ",(0,r.kt)("strong",{parentName:"p"},"menu")," and ",(0,r.kt)("strong",{parentName:"p"},"navigation links")," on the mobile looks like this:"))),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},(0,r.kt)("img",{src:s,style:{border:"1px solid gray"}})),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},(0,r.kt)("img",{src:l,style:{border:"1px solid gray"}})),(0,r.kt)("br",null),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Basically, We have made use of a ",(0,r.kt)("strong",{parentName:"p"},"Hamburger Menu")," which on being clicked will display the ",(0,r.kt)("strong",{parentName:"p"},"Navigation links"),".")),(0,r.kt)("p",null,"   ",(0,r.kt)("strong",{parentName:"p"},"After adding ",(0,r.kt)("em",{parentName:"strong"},"logo"),", ",(0,r.kt)("em",{parentName:"strong"},"navigation links")," and ",(0,r.kt)("em",{parentName:"strong"},"'Get Started' Button")," The Header looked like this:")),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},(0,r.kt)("img",{src:d,style:{border:"1px solid gray"}})),(0,r.kt)("br",null)," ",(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"}," The ",(0,r.kt)("a",{parentName:"em",href:"header"},(0,r.kt)("strong",{parentName:"a"},"Header Section"))," is succesfully executed! Let's move on and see how we created the ",(0,r.kt)("a",{parentName:"em",href:"hero"},(0,r.kt)("strong",{parentName:"a"},"Hero Section"))," of the ",(0,r.kt)("strong",{parentName:"em"},"Resume Screener Website"),". ")))}g.isMDXComponent=!0}}]);