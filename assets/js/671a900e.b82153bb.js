"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8923],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,g=d["".concat(s,".").concat(m)]||d[m]||h[m]||r;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6318:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const r="data:image/png;base64,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",o="data:image/png;base64,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",l={slug:"intro-to-machine-learning",title:"Machine Learning Adventures: Craft Your Inaugural Model",authors:["aadil"],tags:["AI","ML","Machine Learning","Model","Guide","Modeltraining"],description:"Machine Learning Adventures: Craft Your Inaugural Model",keywords:["AI","ML","Machine Learning","Model","Guide","Modeltraining"]},s=void 0,c={permalink:"/blog/intro-to-machine-learning",source:"@site/blog/2023-10-14-Machine-Learning/index.mdx",title:"Machine Learning Adventures: Craft Your Inaugural Model",description:"Machine Learning Adventures: Craft Your Inaugural Model",date:"2023-10-14T00:00:00.000Z",formattedDate:"October 14, 2023",tags:[{label:"AI",permalink:"/blog/tags/ai"},{label:"ML",permalink:"/blog/tags/ml"},{label:"Machine Learning",permalink:"/blog/tags/machine-learning"},{label:"Model",permalink:"/blog/tags/model"},{label:"Guide",permalink:"/blog/tags/guide"},{label:"Modeltraining",permalink:"/blog/tags/modeltraining"}],readingTime:5.105,hasTruncateMarker:!0,authors:[{name:"Aadil Rayeen",title:"Docs Team Member | AI & ML Enthusiast | Web Developer",url:"https://github.com/AadilRayeen",imageURL:"https://github.com/AadilRayeen.png",key:"aadil"}],frontMatter:{slug:"intro-to-machine-learning",title:"Machine Learning Adventures: Craft Your Inaugural Model",authors:["aadil"],tags:["AI","ML","Machine Learning","Model","Guide","Modeltraining"],description:"Machine Learning Adventures: Craft Your Inaugural Model",keywords:["AI","ML","Machine Learning","Model","Guide","Modeltraining"]},nextItem:{title:"Quantum Computing: Beyond the Binary, Beyond Imagination",permalink:"/blog/quantum computing"}},u={authorsImageUrls:[void 0]},d=[{value:"Why Machine Learning?",id:"why-machine-learning",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Process of Crafting Your First Model",id:"process-of-crafting-your-first-model",level:2},{value:"Challenges",id:"challenges",level:2},{value:"Ethical Consideration",id:"ethical-consideration",level:2},{value:"Conclusion",id:"conclusion",level:2}],h={toc:d},m="wrapper";function g(e){let{components:t,...l}=e;return(0,i.kt)(m,(0,a.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Machine learning has become a revolutionary force in many industries due to its capacity to make sense of massive volumes of data and generate predictions or choices. However, for newcomers, going into machine learning might be intimidating. Not to worry! This blog article will walk you through the process of creating your first machine learning model. We'll go over the main stages, problems, and resources for creating models.")),(0,i.kt)("br",null),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"Machine Learning",src:n(9059).Z,width:"1000",height:"470"})))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("em",{parentName:"td"},"Machine Learning Model"))))),(0,i.kt)("h2",{id:"why-machine-learning"},"Why Machine Learning?"),(0,i.kt)("p",null,"Before we go into the nitty-gritty\xa0of coding, it's critical to understand why machine learning is such an intriguing field. Without being explicitly programmed, machine learning allows computers to study patterns and predict events. From recommendation systems and image identification to healthcare diagnostics and self-driving automobiles, this technology has a wide range of applications. Machine learning is a fascinating field that has the potential to alter industries, solve challenging issues, and create intelligent systems.\xa0Machine learning is a vital field due to its ability to harness data for insights, automation, and personalisation across industries. It enables businesses to make data-driven decisions, improve efficiency, and enhance customer experiences."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"To embark on this machine learning adventure, you'll need a few tools and libraries:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Python"),": You can get Python from the official Python website if you don't already have it installed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Coding Environment"),": Jupyter Notebook or VS Code - If you have installed them kindly install them."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Machine Learning Libraries"),": We'll rely on libraries like NumPy, pandas, and scikit-learn. You can install them using pip: pip install numpy pandas scikit-learn.")),(0,i.kt)("p",null,"Now that you've got your tools ready, let's get started on crafting your inaugural machine learning model."),(0,i.kt)("h2",{id:"process-of-crafting-your-first-model"},"Process of Crafting Your First Model"),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("b",null,"Step 1: Data Preparation")),(0,i.kt)("div",null,"Data is crucial to every machine learning research. Labeled data are required in order to train your model. Gather a large and varied collection of text from the internet. There may be books, papers, websites, and other items in this dataset. A wide range of themes and writing styles must be included in the data, which is crucial.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("b",null,"Step 2: Model Selection")),(0,i.kt)("div",null,"Next, you'll need to choose a machine learning algorithm. Model selection, an important part of machine learning, determines the optimum technique for deriving conclusions from your given dataset. Data variables such as type, dimensionality, and noise levels have a considerable impact on this decision. The algorithm you pick, whether you're working with structured or unstructured data, can have a big impact on the model's accuracy and effectiveness.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("b",null,"Step 3: Model Training")),(0,i.kt)("div",null,"Now, it's time to train your model on the data. A machine learning model learns patterns and relationships from training data, which enables it to categorize data or make predictions. This process is known as model training. During training, the model makes adjustments to its parameters to reduce the difference between its predictions and the actual target values. Gradient descent is one optimization approach that is frequently used to achieve this. The model continuously improves during the training phase by learning from its errors.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("b",null,"Step 4: Making Predictions")),(0,i.kt)("div",null,"The goal of machine learning is to make predictions as a result of model training. Based on the patterns found in the training set, a trained model may categorize or predict fresh, undiscovered data. Depending on the problem, several metrics are used to assess prediction accuracy . It is crucial to monitor the model's performance and make sure that its predictions correspond to the final outcomes. These forecasts have the power to improve decision-making, provide useful data, and streamline operations.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("b",null,"Step 5: Model Evaluation")),(0,i.kt)("div",null,"Model evaluation is a critical stage in the machine learning process in which the effectiveness and dependability of a trained model are examined. Depending on the problem type (classification or regression), this stage involves the use of several measures such as accuracy, precision, recall, F1-score, and mean squared error. Continuous monitoring and potential model fine-tuning guarantee that the model retains its predictive power.")),(0,i.kt)("figure",null,(0,i.kt)("center",null,(0,i.kt)("img",{src:r,style:{border:"4px solid gray"},width:"650"}))),(0,i.kt)("h2",{id:"challenges"},"Challenges"),(0,i.kt)("p",null,"While the world of machine learning is exciting, it does come with its fair share of challenges. Here are some common hurdles you might encounter on your machine learning adventure "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Data Quality Issues"),(0,i.kt)("li",{parentName:"ul"},"Overfitting"),(0,i.kt)("li",{parentName:"ul"},"Lack of Domain Knowledge"),(0,i.kt)("li",{parentName:"ul"},"Model Interpretability"),(0,i.kt)("li",{parentName:"ul"},"Hardware and Resource Constraints"),(0,i.kt)("li",{parentName:"ul"},"Staying Updated")),(0,i.kt)("p",null,"Specific solutions can be used to solve machine learning challenges such as data quality concerns, overfitting, and a lack of domain knowledge. To combat overfitting, use regularization and cross-validation, interact with domain experts to glean insights, and use interpretable models when transparency is critical. Furthermore, keeping up with emerging techniques, thinking about ethical implications, and working on a variety of projects for hands-on experience are all necessary for confronting the complicated and ever-changing subject of machine learning."),(0,i.kt)("figure",null,(0,i.kt)("center",null,(0,i.kt)("img",{src:o,style:{border:"4px solid gray"},width:"650"}))),(0,i.kt)("h2",{id:"ethical-consideration"},"Ethical Consideration"),(0,i.kt)("p",null,"Machine learning requires careful ethical management since models may unintentionally reinforce bias and unfairness. Fairness, accountability, and transparency must all be upheld. To reduce biases, data must be thoroughly gathered and cleansed, and model conclusions must be comprehensible. When working with personal data, it's extremely important to respect consent and privacy. Collaboration with subject matter specialists and adherence to moral standards are essential. To develop ethical and reliable AI systems, it is ultimately crucial to uphold an ethical commitment throughout the machine learning lifecycle."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"To summarize, machine learning is a transformational force with the capacity to disrupt businesses and solve complicated issues. Its ability to extract knowledge from data and make informed, data-driven decisions is a vital tool in healthcare, finance, autonomous systems, and numerous other disciplines. As we embark on this machine learning adventure, we must adhere to ethical values, encourage innovation, and continue to explore this ever-changing discipline."),(0,i.kt)("center",null,(0,i.kt)("b",null,"The future is brimming with possibilities, and machine learning is at the forefront of driving positive change and progress. !!!!")))}g.isMDXComponent=!0},9059:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/intro-da2f60b7530f7b3b79612b0b11a0b624.png"}}]);