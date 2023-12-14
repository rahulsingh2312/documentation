"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5552],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?o.createElement(h,a(a({ref:t},u),{},{components:n})):o.createElement(h,a({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const i={title:"Chroot Guide",id:"chroot",description:"Chroot Documentation",sidebar_label:"Chroot",keywords:["chroot","linux","root"]},a=void 0,s={unversionedId:"projects/tcet-linux/guides/chroot",id:"projects/tcet-linux/guides/chroot",title:"Chroot Guide",description:"Chroot Documentation",source:"@site/docs/projects/tcet-linux/guides/chroot.md",sourceDirName:"projects/tcet-linux/guides",slug:"/projects/tcet-linux/guides/chroot",permalink:"/docs/projects/tcet-linux/guides/chroot",draft:!1,editUrl:"https://github.com/tcet-opensource/documentation/edit/main/docs/projects/tcet-linux/guides/chroot.md",tags:[],version:"current",lastUpdatedBy:"Dibya J. Dutta",lastUpdatedAt:1702495014,formattedLastUpdatedAt:"Dec 13, 2023",frontMatter:{title:"Chroot Guide",id:"chroot",description:"Chroot Documentation",sidebar_label:"Chroot",keywords:["chroot","linux","root"]},sidebar:"docs",previous:{title:"Backup and Restore",permalink:"/docs/projects/tcet-linux/guides/backup-restore-timeshift"},next:{title:"Getting Started With Application",permalink:"/docs/projects/tcet-linux/guides/application/getting-started-with-application"}},c={},l=[{value:"Prerequisites:",id:"prerequisites",level:3},{value:"Basic Usage:",id:"basic-usage",level:3},{value:"1. Entering a Chroot Environment:",id:"1-entering-a-chroot-environment",level:4},{value:"2. Bind Mounting Essential Directories:",id:"2-bind-mounting-essential-directories",level:4},{value:"3. Executing Commands:",id:"3-executing-commands",level:4},{value:"Performing Important Operations:",id:"performing-important-operations",level:3},{value:"1. Resetting a User Password:",id:"1-resetting-a-user-password",level:4},{value:"2. Repairing a Broken System:",id:"2-repairing-a-broken-system",level:4},{value:"Advanced Usage:",id:"advanced-usage",level:3},{value:"1. Setting Environment Variables:",id:"1-setting-environment-variables",level:4},{value:"2. Chrooting to a Different Architecture:",id:"2-chrooting-to-a-different-architecture",level:4},{value:"Exiting the Chroot:",id:"exiting-the-chroot",level:3},{value:"Conclusion:",id:"conclusion",level:3}],u={toc:l},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Chroot (Change Root)")," is a powerful command in Unix-like systems that allows you to change the apparent root directory for a process and its children. This is particularly useful for system recovery, maintenance, and installation tasks, creating a secure and isolated environment for specific operations."),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Root Access:")," You need to be a superuser (root) to run ",(0,r.kt)("inlineCode",{parentName:"li"},"chroot")," commands.")),(0,r.kt)("h3",{id:"basic-usage"},"Basic Usage:"),(0,r.kt)("h4",{id:"1-entering-a-chroot-environment"},"1. Entering a Chroot Environment:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo chroot /path/to/new/root\n")),(0,r.kt)("p",null,'This command changes the "apparent root directory" to the specified path. Subsequent commands will operate within this new root, allowing you to access and modify files and directories as if they were the system\'s root.'),(0,r.kt)("h4",{id:"2-bind-mounting-essential-directories"},"2. Bind Mounting Essential Directories:"),(0,r.kt)("p",null,"Bind mounting allows accessing directories outside the chroot environment. Mount essential system directories like ",(0,r.kt)("inlineCode",{parentName:"p"},"/proc"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"/dev"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"/sys")," to ensure proper system functionality within the chroot:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mount --bind /proc /path/to/new/root/proc\nsudo mount --bind /dev /path/to/new/root/dev\nsudo mount --bind /sys /path/to/new/root/sys\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note:")," Refer to your system's documentation for specific mount points and configurations."),(0,r.kt)("h4",{id:"3-executing-commands"},"3. Executing Commands:"),(0,r.kt)("p",null,"Run commands within the chroot environment as if it were the complete system's root:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo chroot /path/to/new/root command-to-execute\n")),(0,r.kt)("p",null,"This allows you to install packages, modify system files, or perform other tasks within the isolated environment."),(0,r.kt)("h3",{id:"performing-important-operations"},"Performing Important Operations:"),(0,r.kt)("h4",{id:"1-resetting-a-user-password"},"1. Resetting a User Password:"),(0,r.kt)("p",null,"If you've forgotten a user password or need to reset it, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"chroot")," to access the user database and change the password:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Mount necessary directories\nsudo mount --bind /proc /path/to/new/root/proc\nsudo mount --bind /dev /path/to/new/root/dev\nsudo mount --bind /sys /path/to/new/root/sys\n\n# Enter the chroot environment\nsudo chroot /path/to/new/root\n\n# Change the password for the user 'username'\npasswd username\n\n# Exit the chroot environment\nexit\n")),(0,r.kt)("h4",{id:"2-repairing-a-broken-system"},"2. Repairing a Broken System:"),(0,r.kt)("p",null,"In case your system is unbootable or experiencing issues, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"chroot")," to repair it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Mount necessary directories\nsudo mount --bind /proc /path/to/new/root/proc\nsudo mount --bind /dev /path/to/new/root/dev\nsudo mount --bind /sys /path/to/new/root/sys\n\n# Enter the chroot environment\nsudo chroot /path/to/new/root\n\n# Perform system repair operations (e.g., reinstalling a kernel)\npacman -Syu linux\n\n# Exit the chroot environment\nexit\n")),(0,r.kt)("h3",{id:"advanced-usage"},"Advanced Usage:"),(0,r.kt)("h4",{id:"1-setting-environment-variables"},"1. Setting Environment Variables:"),(0,r.kt)("p",null,"Set environment variables when entering the chroot for specific tasks:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo chroot /path/to/new/root env VAR1=value1 VAR2=value2 command-to-execute\n")),(0,r.kt)("p",null,"This ensures the availability of required environment variables within the chroot."),(0,r.kt)("h4",{id:"2-chrooting-to-a-different-architecture"},"2. Chrooting to a Different Architecture:"),(0,r.kt)("p",null,"To run commands in a chroot of a different architecture (e.g., 32-bit on a 64-bit system), use commands like ",(0,r.kt)("inlineCode",{parentName:"p"},"linux32")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"linux64"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo linux32 chroot /path/to/new/root\n")),(0,r.kt)("p",null,"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"linux32")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"linux64")," as needed."),(0,r.kt)("h3",{id:"exiting-the-chroot"},"Exiting the Chroot:"),(0,r.kt)("p",null,"To return to the original root directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"exit\n")),(0,r.kt)("p",null,"This command exits the chroot environment and restores the original root."),(0,r.kt)("h3",{id:"conclusion"},"Conclusion:"),(0,r.kt)("p",null,"Chroot is a powerful tool for system administrators, developers, and users involved in system maintenance and recovery. Understanding its usage can enhance your ability to manage, install, and troubleshoot systems efficiently and securely."),(0,r.kt)("p",null,"Remember to always exercise caution when using ",(0,r.kt)("inlineCode",{parentName:"p"},"chroot"),", as it grants access to sensitive system files. Refer to your system's documentation and specific use case for detailed instructions and configurations."))}p.isMDXComponent=!0}}]);