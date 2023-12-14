"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2197],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),h=d(n),p=i,m=h["".concat(l,".").concat(p)]||h[p]||c[p]||o;return n?a.createElement(m,s(s({ref:t},u),{},{components:n})):a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[h]="string"==typeof e?e:i,s[1]=r;for(var d=2;d<o;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},95001:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const o={slug:"linux-basics",title:"Basics of GNU/Linux",authors:["gaurang","saasha"],tags:["linux","cli","terminal","tui"],description:"In this blog, you will understand the basic concept of the linux kernel and it's ecosystem in system softwares.",keywords:["linux","cli","terminal","tui","opensource"]},s=void 0,r={permalink:"/blog/linux-basics",source:"@site/blog/2023-10-06-linux-cli/index.mdx",title:"Basics of GNU/Linux",description:"In this blog, you will understand the basic concept of the linux kernel and it's ecosystem in system softwares.",date:"2023-10-06T00:00:00.000Z",formattedDate:"October 6, 2023",tags:[{label:"linux",permalink:"/blog/tags/linux"},{label:"cli",permalink:"/blog/tags/cli"},{label:"terminal",permalink:"/blog/tags/terminal"},{label:"tui",permalink:"/blog/tags/tui"}],readingTime:13.635,hasTruncateMarker:!0,authors:[{name:"Gaurang Vishwakarma",title:"Creator of TCET Open Source",url:"https://github.com/demonkillerr",imageURL:"https://github.com/demonkillerr.png",key:"gaurang"},{name:"Saasha Gupta",title:"Docs Team Member",url:"https://github.com/saashaspace",imageURL:"https://github.com/saashaspace.png",key:"saasha"}],frontMatter:{slug:"linux-basics",title:"Basics of GNU/Linux",authors:["gaurang","saasha"],tags:["linux","cli","terminal","tui"],description:"In this blog, you will understand the basic concept of the linux kernel and it's ecosystem in system softwares.",keywords:["linux","cli","terminal","tui","opensource"]},prevItem:{title:"Blockchain - Future of Tommorow",permalink:"/blog/intro-to-blockchain"},nextItem:{title:"General Posting Guidelines",permalink:"/blog/blog-posting-guidelines"}},l={authorsImageUrls:[void 0,void 0]},d=[{value:"The world of operating systems",id:"the-world-of-operating-systems",level:2},{value:"Why UNIX based?",id:"why-unix-based",level:3},{value:"History of operating systems",id:"history-of-operating-systems",level:2},{value:"What is UNIX?",id:"what-is-unix",level:3},{value:"Closed Source, Mixed Source, and Open Source",id:"closed-source-mixed-source-and-open-source",level:3},{value:"Free Software Foundation (FSF)",id:"free-software-foundation-fsf",level:3},{value:"What is GNU/Linux?",id:"what-is-gnulinux",level:3},{value:"Linux is an operating system kernel that along with other system software components creates an complete operating system called as linux distribution.",id:"linux-is-an-operating-system-kernel-that-along-with-other-system-software-components-creates-an-complete-operating-system-called-as-linux-distribution",level:4},{value:"Difference between unix-based vs unix-like",id:"difference-between-unix-based-vs-unix-like",level:3},{value:"Linux Distributions",id:"linux-distributions",level:2},{value:"Types of Linux Distributions",id:"types-of-linux-distributions",level:3},{value:"Well known derivative distributions",id:"well-known-derivative-distributions",level:4},{value:"Core Components of a distribution",id:"core-components-of-a-distribution",level:3},{value:"Kernel",id:"kernel",level:4},{value:"Init System",id:"init-system",level:4},{value:"Filesystem",id:"filesystem",level:4},{value:"The shell",id:"the-shell",level:4},{value:"GNU tools",id:"gnu-tools",level:4},{value:"Package manager",id:"package-manager",level:4},{value:"Desktop Enviroment",id:"desktop-enviroment",level:4},{value:"What&#39;s Next?",id:"whats-next",level:2}],u={toc:d},h="wrapper";function c(e){let{components:t,...o}=e;return(0,i.kt)(h,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Linux is an operating system kernel. It was originally written in 1991 by Linus Torvalds for his personal use, and it was soon adopted as the kernel for the GNU operating system, which was written to be a free (libre) replacement for Unix. "),(0,i.kt)("p",null,"So, what even is GNU/Linux? What is free software? You must have so many more questions! Through this blog, we will try to understand what is linux, and why it is the most popular operating system in the world. "),(0,i.kt)("h2",{id:"the-world-of-operating-systems"},"The world of operating systems"),(0,i.kt)("p",null,"Most modern opearting systems can be grouped into two categories:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Microsoft NT descendants like Windows XP to Windows 11, Xbox OS, Windows Phone"),(0,i.kt)("li",{parentName:"ul"},"Unix based (Mostly everything apart from Windows)")),(0,i.kt)("h3",{id:"why-unix-based"},"Why UNIX based?"),(0,i.kt)("p",null,"Well, the answer is simple. Most of unix-based operating systems are free to use or modify, and hence are widely adopted. UNIX itself has died today, however, it's clones and descendants are still alive. Some of these operating systems are direct clones of the UNIX source code, while some such as Linux are UNIX-like. Errr.. so unix-based, unix-like, what are all these?"),(0,i.kt)("p",null,"Don't worry, I will cover this in the next section. What's important in this section is you understand the fact almost everything that is not based on Microsoft NT is a direct or indirect descendant of UNIX. Some examples of operating systems that are descendants of UNIX are:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Linux and it's derivative distributions"),(0,i.kt)("li",{parentName:"ol"},"Mac OS X"),(0,i.kt)("li",{parentName:"ol"},"BSD "),(0,i.kt)("li",{parentName:"ol"},"ChromeOS "),(0,i.kt)("li",{parentName:"ol"},"Android"),(0,i.kt)("li",{parentName:"ol"},"PS4 OS")),(0,i.kt)("p",null,"Why is this important? Because all of these operating systems here share a plethora of common core functionailty. To put it simply, most of their internals and most of their functions are same, if not, similar. For example, all of these operating systems have the same basic commands."),(0,i.kt)("h2",{id:"history-of-operating-systems"},"History of operating systems"),(0,i.kt)("p",null,"Since most of the operating systems today can trace their lineage to UNIX, it is important to atleast have a brief idea of what UNIX is, even though the original versions of UNIX no longer survive. Understanding the history will also help you understand why UNIX-based commands do not work on something like Windows."),(0,i.kt)("h3",{id:"what-is-unix"},"What is UNIX?"),(0,i.kt)("p",null,"UNIX was an operating system, developed at Bell labs in mid 1960s. Many of their innovations and design choices of the original UNIX team have lived up to 60+ years, well into the 2020s. These design choices include the idea of a multiuser operating system and a hierarchical filesystem."),(0,i.kt)("p",null,"UNIX truely is the grandfather of all modern operating systems. All of these features that were built into different versions of the original UNIX operating system still exist in operating systems like Mac OS, Android, linux distributions and basically every thing that can trace their lineage back to UNIX."),(0,i.kt)("p",null,"Since Microsoft operating systems cannot trace back their lineage to UNIX, all UNIX features do not work on windows. The commands that you can run colloquially on both MacOS and Linux, do not exist natively on Windows. Windows has it's own commands, and it's own way of doing things."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(20450).Z,width:"900",height:"722"})),(0,i.kt)("p",{align:"center"},(0,i.kt)("b",null,"FIG 1:")," UNIX's descendants"),(0,i.kt)("h3",{id:"closed-source-mixed-source-and-open-source"},"Closed Source, Mixed Source, and Open Source"),(0,i.kt)("p",null,"In the diagram in the above section, you can see a legend in the top right that annotates the color codes given in the diagram. These are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("b",null,"Closed Source")," (denoted by Red): These were descendants of UNIX that were further developed by companies like Sun Microsystem, HP, etc. The source code of these developements of UNIX were strictly guarded. The code itself was kept a secret from the public and the clients did not have the permission to change or alter the source code in anyway. Each company had their own non-permissive license."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("b",null,"Mixed Source")," (denoted by Yellow): These were the descendants of UNIX that were further developed by colleges like Univesity of California, Berkeley, and many others. Berkeley was influential as they had released a mixed source code license (also known as BSD license), that would allow sharing and modification of the source code, with other colleges and companies, for educational or other purposes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("b",null,"Open Source")," (denoted by Green): These were descendants of UNIX whose developement was done in public as their source code was made freely available for everyone to view, modify, and use. The license that governed open source software were early versions of the GNU public license(GPL). The GPL from the early days has been a really permissive license as it allowed inspection and modification of the source code as per requirement.")),(0,i.kt)("p",null,"Licensing was the key differentiator in all of these descendants of UNIX, as they governed what could be done with the operating system. Companies have to make a profit, and colleges have to follow certain rules, hence we can understand why the first two cases wanted to safeguard their code behind non-permissive licenses. But why did the third case not want to protect their code?"),(0,i.kt)("p",null,"The answer is, as mentioned in the above two scenarios, software was a commodity that had to be purchased. The closed source versions were to be bought by clients. (Just like you buy a windows license). These were expensive to do so and also there were limited innovations in the software, like only in the company who built it or the college where it was developed. Hence, the Free Software Foundation was formed in the late 80s to solve this issue, and that is why they had created the GPL."),(0,i.kt)("h3",{id:"free-software-foundation-fsf"},"Free Software Foundation (FSF)"),(0,i.kt)("p",null,"The free software foundation was built as a part of the free software movement in response to proprietary and restricted software. Free is not equal to free in terms of money. Free as FREEDOM. That was FSF's motto."),(0,i.kt)("p",null,"The movement's philosophy is that computers and software should not prevent cooperation between users, and instead should have the goal of liberating everyone in the cyberspace. This will encourage innovation in software. "),(0,i.kt)("p",null,"According to the movement's leader ",(0,i.kt)("b",null,"Richard Stallman"),":"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Users should have the freedom to run, copy, distribute, study, change, and improve software.")),(0,i.kt)("p",null,"This was a visionary statement as open source software allowed ground-breaking innovations in the software industry and today, most of the software we use, have some kind of free software in them, either completly or in parts."),(0,i.kt)("h3",{id:"what-is-gnulinux"},"What is GNU/Linux?"),(0,i.kt)("p",null,"Richard Stallman was the leader of a group of developers who wanted to create an open source version of the UNIX operating systems. Remember, most of the UNIX descendants like System V or BSD were closed source or mixed source? The open source operating system needed to have everything that normally came with UNIX. The components had to be FREE, as stated in the previous section."),(0,i.kt)("p",null,"In 1984, they began working on the GNU project (GNU stands for GNU's not UNIX). Creating an operating systems however is a daunting task, even for the most experienced developers. Luckily for him, at the same time, a student in the University of Helsinki, Linus Torvalds was working on his operating system kernel, called Linux. "),(0,i.kt)("p",null,"In any operating system, the ",(0,i.kt)("b",null,"kernel")," is the most important and critical component. The kernel facilitates the interaction of the the hardware and other system software. At that time, while most parts of the GNU project were complete (including gcc -  compiler, open source implementations of all unix-commands, etc), the project lacked a kernel. Linus Torvalds combined his Linux kernel with the rest of the components of the GNU ecosystem, to create a full operating system. This was known as ",(0,i.kt)("b",null,"GNU/Linux"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(95548).Z,width:"800",height:"632"})),(0,i.kt)("p",{align:"center"},(0,i.kt)("b",null,"FIG 2:")," Kernel in operating system"),(0,i.kt)("h4",{id:"linux-is-an-operating-system-kernel-that-along-with-other-system-software-components-creates-an-complete-operating-system-called-as-linux-distribution"},"Linux is an operating system kernel that along with other system software components creates an complete operating system called as linux distribution."),(0,i.kt)("h3",{id:"difference-between-unix-based-vs-unix-like"},"Difference between unix-based vs unix-like"),(0,i.kt)("p",null,"In FIG 1, you can see that many of the closed and mixed source operating systems are directly linked to the original UNIX. This is because the companies and colleges that wanted to develop their own versions of UNIX paid a royalty to Bell Labs to acquire UNIX. This might sound contradictary to their own non-permissive licenses. However Bell labs decided that they did not want to be in the operating systems buisness, and instead wanted to focus on telecommunication and phone buisness. Hence they happily sold off their versions of UNIX. Since these companies directly got their versions of UNIX from Bell labs, their descendant operating systems were called ",(0,i.kt)("b",null,"unix-like"),". "),(0,i.kt)("p",null,"There are a bit of legal reasons too that I will not cover in the blog as it is out of scope for our discussion, but to put it in simple terms, there was a foundation formed by a few of these companies called ",(0,i.kt)("b",null,"The Open Group"),", and they defined the UNIX standard according to their developements of UNIX. In FIG 1, you can see that most of the operating systems do not have a direct connection to UNIX. This is because even though they are based on the original UNIX and are compatible with the UNIX standards, they have not been certified by The Open Group. This is often due to financial considerations, as open source projects do not have a definite source of income. Hence these operating systems are called ",(0,i.kt)("b",null,"Unix-like"),". It is basically a matter of certification by The Open Group, simply put."),(0,i.kt)("h2",{id:"linux-distributions"},"Linux Distributions"),(0,i.kt)("p",null,"You know that Linux is actually an operating system kernel and not an entire operating system in itself. When people talk about a linux based operating system, they are actually referring to Linux Distributions (often shorten to linux distro). Normally, a Linux Distribution bundles the linux kernel, a bunch of GNU tools, a shell, a package manager, a windowing system, and a window manager or desktop enviroment at the very least. On top of that, a linux distribution often can include utility software such as web browsers, a file explorer, a text editor, etc.\nDid you know that Linux is actually an operating system kernel and not an entire operating system in itself? When people talk about a linux based operating system, they are actually referring to Linux Distributions. Normally, a Linux Distribution bundles the linux kernel, a bunch of GNU tools, a shell, a package manager, a windowing system, and a window manager or desktop enviroment at the very least. On top of that, a linux distribution often can include utility software such as web browsers, a file explorer, a text editor, etc."),(0,i.kt)("h3",{id:"types-of-linux-distributions"},"Types of Linux Distributions"),(0,i.kt)("p",null,"While there are hundreds of linux distributions, most of them are based on a few original ones. These are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Arch Linux"),(0,i.kt)("li",{parentName:"ul"},"Debian Linux"),(0,i.kt)("li",{parentName:"ul"},"Red Hat Linux"),(0,i.kt)("li",{parentName:"ul"},"Slackware"),(0,i.kt)("li",{parentName:"ul"},"Gentoo"),(0,i.kt)("li",{parentName:"ul"},"NixOS"),(0,i.kt)("li",{parentName:"ul"},"Void Linux")),(0,i.kt)("p",null,"The key difference between these distributions are usually their package managers. However, different distributions may choose to ship different types of components. Let's look at them in brief:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Distribution"),(0,i.kt)("th",{parentName:"tr",align:null},"Package Manager"),(0,i.kt)("th",{parentName:"tr",align:null},"init system"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Arch Linux"),(0,i.kt)("td",{parentName:"tr",align:null},"pacman"),(0,i.kt)("td",{parentName:"tr",align:null},"systemd")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Debian"),(0,i.kt)("td",{parentName:"tr",align:null},"apt or dpkg"),(0,i.kt)("td",{parentName:"tr",align:null},"systemd")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Red Hat"),(0,i.kt)("td",{parentName:"tr",align:null},"dnf or yum"),(0,i.kt)("td",{parentName:"tr",align:null},"systemd")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Slackware"),(0,i.kt)("td",{parentName:"tr",align:null},"slackpkg"),(0,i.kt)("td",{parentName:"tr",align:null},"bsd-style")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Gentoo"),(0,i.kt)("td",{parentName:"tr",align:null},"portage"),(0,i.kt)("td",{parentName:"tr",align:null},"openrc")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"NixOS"),(0,i.kt)("td",{parentName:"tr",align:null},"nix"),(0,i.kt)("td",{parentName:"tr",align:null},"systemd")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Void Linux"),(0,i.kt)("td",{parentName:"tr",align:null},"xbps"),(0,i.kt)("td",{parentName:"tr",align:null},"runit")))),(0,i.kt)("p",null,"These distributions are often called parent distributions as many other distributions are derived from them. Derivatives retain the package manager of the parent distributions while shipping different components. For example - a different shell, a different filesystem, etc."),(0,i.kt)("h4",{id:"well-known-derivative-distributions"},"Well known derivative distributions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("b",null,"Arch based"),": Manjaro, EndeavourOS, Garuda Linux"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("b",null,"Debian based"),": Ubuntu, Linux Mint, ElementaryOS"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("b",null,"Red Hat Based"),": Fedora, CentOS, RockyLinux"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("b",null,"Gentoo based:")," RedstarOS, Funtoo")),(0,i.kt)("h3",{id:"core-components-of-a-distribution"},"Core Components of a distribution"),(0,i.kt)("p",null,"As we have discussed, a linux distro comes with the linux kernel, a shell, a filesystem, a bunch of GNU tools, and other system software. Let us discuss in brief what each of these components do, and how they help the operating system function."),(0,i.kt)("h4",{id:"kernel"},"Kernel"),(0,i.kt)("p",null,"The kernel is a computer program at the core of a computer's operating system and generally has complete control over everything in the system. It is the portion of the operating system code that is always resident in memory and facilitates interactions between hardware and software components."),(0,i.kt)("h4",{id:"init-system"},"Init System"),(0,i.kt)("p",null,"Init system (short of for ",(0,i.kt)("i",null,"initialization"),"), is the first process started during booting of the operating system. Init is a daemon process that continues running until the system is shut down. It is the direct or indirect ancestor of all other processes and automatically adopts all orphaned processes. Init is started by the kernel during the booting process. The process ID of init system is ",(0,i.kt)("b",null,"PID 1"),". "),(0,i.kt)("p",null,"The init system with the help of the kernel initialises all hardware on the computer. The init scripts are launched by the init process to guarantee basic functionality on system start and shutdown. This includes (un)mounting of file systems and launching of daemons (background services)."),(0,i.kt)("h4",{id:"filesystem"},"Filesystem"),(0,i.kt)("p",null,'A file system or filesystem controls how data is stored and retrieved. Without a file system, information placed in a storage medium would be one large body of data with no way to tell where one piece of information stops and the next begins. By separating the data into pieces and giving each piece a name, the information is easily isolated and identified. Taking its name from the way paper-based information systems are named, each group of data is called a "file". The structure and logic rules used to manage the groups of information and their names is called a "file system".'),(0,i.kt)("h4",{id:"the-shell"},"The shell"),(0,i.kt)("p",null,"From Wikipedia: "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"A Unix shell is a command-line interpreter or shell that provides a traditional user interface for the Unix operating system and for Unix-like systems. Users direct the operation of the computer by entering commands as text for a command line interpreter to execute or by creating text scripts of one or more such commands.")),(0,i.kt)("p",null,"A shell is a computer interface to an operating system. It exposes the operating systems' services (init system for example) to human users. The shell takes our commands, and gives them to the operating system to perform. It is called a shell because it is an outer protective layer around the operating system."),(0,i.kt)("h4",{id:"gnu-tools"},"GNU tools"),(0,i.kt)("p",null,"These are important tools that are present in some or other form since the UNIX days. The GNU toolchain is a broad collection of programming tools produced by the GNU Project. These tools form a toolchain (a suite of tools used in a serial manner) used for developing software applications and operating systems. "),(0,i.kt)("h4",{id:"package-manager"},"Package manager"),(0,i.kt)("p",null,"From Wikipedia:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"A package manager or package-management system is a collection of software tools that automates the process of installing, upgrading, configuring, and removing computer programs for a computer in a consistent manner.")),(0,i.kt)("p",null,"A package manager deals with packages, distributions of software and data in archive files. Packages contain metadata, such as the software's name, description of its purpose, version number, vendor, checksum (preferably a cryptographic hash function), and a list of dependencies necessary for the software to run properly. Upon installation, metadata is stored in a local package database. Package managers typically maintain a database of software dependencies and version information to prevent software mismatches and missing prerequisites. They work closely with software repositories, binary repository managers, and app stores. "),(0,i.kt)("h4",{id:"desktop-enviroment"},"Desktop Enviroment"),(0,i.kt)("p",null,"A desktop environment bundles together a variety of components to provide common graphical user interface elements such as icons, toolbars, wallpapers, and desktop widgets. Additionally, most desktop environments include a set of integrated applications and utilities. Most importantly, desktop environments provide their own window manager, which can however usually be replaced with another compatible one."),(0,i.kt)("p",null,"The user is free to configure their GUI environment in any number of ways. Desktop environments simply provide a complete and convenient means of accomplishing this task."),(0,i.kt)("h2",{id:"whats-next"},"What's Next?"),(0,i.kt)("p",null,"After reading this blog, you must have gotten the basic understanding of what GNU/Linux is, what linux itself is, and what a linux distribution is, and what it does. Moving on from here, you can dive deep and understand in depth how each component decsribed in the blog post work. For example, how does a typical linux file system look like. The world of operating systems is vast, and only so much can be covered in one blog post.\nKeep asking questions, and keep reading!"))}c.isMDXComponent=!0},20450:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/history-a65f57edaf967fad570d7218cbab6b4f.png"},95548:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kernel-16775a222a3cff4a30c60b705413958f.png"}}]);