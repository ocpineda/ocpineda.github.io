(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),i=(n(0),n(132)),c=n(136),o={id:"udemy-comptia",title:"CompTia Security + Exam"},s={id:"udemy-comptia",title:"CompTia Security + Exam",description:"CompTIA Security+ SY0-501 from Udemy",source:"@site/docs/sec-plus-udemy.md",permalink:"/docs/udemy-comptia",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/sec-plus-udemy.md",sidebar:"someSidebar",next:{title:"Style Guide",permalink:"/docs/doc1"}},l=[{value:"Risk Management",id:"risk-management",children:[{value:"1. INTRODUCTION",id:"1-introduction",children:[]},{value:"2. CIA",id:"2-cia",children:[]},{value:"3. THREAT ACTORS",id:"3-threat-actors",children:[]},{value:"4. WHAT IS RISK?",id:"4-what-is-risk",children:[]},{value:"5. Managing Risk",id:"5-managing-risk",children:[]},{value:"7. Security Controls",id:"7-security-controls",children:[]},{value:"12. Frameworks",id:"12-frameworks",children:[]},{value:"13. Quantitative Risk Calculations",id:"13-quantitative-risk-calculations",children:[]}]}],b={rightToc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"comptia-security-sy0-501-from-udemy"},"CompTIA Security+ SY0-501 from Udemy"),Object(i.b)("p",null,"These are notes from Mike Meyer's ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.udemy.com/course/comptia-security-certification-sy0-501-the-total-course/"}),"Udemy course")),Object(i.b)("h2",{id:"risk-management"},"Risk Management"),Object(i.b)("h3",{id:"1-introduction"},"1. INTRODUCTION"),Object(i.b)("p",null,"Curriculum ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"udemy-course/CompTIA-Security-SY0-501.pdf"}),"here")),Object(i.b)("h3",{id:"2-cia"},"2. CIA"),Object(i.b)("p",null,"Confidentiality, Integrity, and Availability.   "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Is your info private?"),Object(i.b)("li",{parentName:"ul"},"Can I trust this info? "),Object(i.b)("li",{parentName:"ul"},"Can I get my info when I need it?")),Object(i.b)("p",null,"These form the CIA triad. Meyers feels CIA isn't enough. He also addes ",Object(i.b)("em",{parentName:"p"},"auditing & accountability")," and ",Object(i.b)("em",{parentName:"p"},"non-repudiation")),Object(i.b)("img",{src:Object(c.a)("img/cia.jpg"),width:"300px"}),Object(i.b)("p",null,"Accounting & auditing helps you keep track of issues. Non-repudiation ensures the receiver cannot deny receiving the message."),Object(i.b)("h3",{id:"3-threat-actors"},"3. THREAT ACTORS"),Object(i.b)("p",null,"Threat actors have attributes such as"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"internal or external threats"),Object(i.b)("li",{parentName:"ul"},"Level of sophistication"),Object(i.b)("li",{parentName:"ul"},"Intent or motivation"),Object(i.b)("li",{parentName:"ul"},"Use of open source intelligence ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"../sec-definitions.md#open-source-intelligence"}),"(OSINT)"))),Object(i.b)("p",null,"The types of threat actors are:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Script kiddies"),Object(i.b)("li",{parentName:"ol"},"Hacktavists"),Object(i.b)("li",{parentName:"ol"},"Organized crime-- money motivated"),Object(i.b)("li",{parentName:"ol"},"Nation states.  "),Object(i.b)("li",{parentName:"ol"},"Insiders.  ")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Nation states")," are the biggest threat because of greater resources. This TA goes for ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../sec-definitions.md#advanced-persistent-threat"}),Object(i.b)("em",{parentName:"a"},"Advanced Persistent Threats (APT)")),". ",Object(i.b)("strong",{parentName:"p"},"Insiders")," are not only employees, but can be vendors, cleaning staff, contractors, etc... This is anyone who has access to your resources in any way."),Object(i.b)("h3",{id:"4-what-is-risk"},"4. WHAT IS RISK?"),Object(i.b)("p",null,"Risk is ",Object(i.b)("em",{parentName:"p"},"potential for harm"),". To understand risk, you need some key terms. "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Assets")," are the parts that you are worried about. They can be people, doors, paperwork, doors, or even intangibles such as reputation."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Vulnerabilities")," are weaknesses to your assets that may cause harm"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Threats")," are the negative events that exploit a vulnerability"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Likelihood")," is the level of certainty that something bad will happen"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Impact")," is the actual harm when threats and vulnerabilities are exploited.")),Object(i.b)("p",null,"A threat is enacted by a ",Object(i.b)("em",{parentName:"p"},"threat agent"),". This is usually a person, but can be an entity such as a hurricane, virus, act of God, etc...  The ",Object(i.b)("strong",{parentName:"p"},"impact")," of a risk can be evaluated quantitatively or qualitatively. Impact is usually considered on an annual bases e.g. ",Object(i.b)("em",{parentName:"p"},'"How many times a year will my network fail"'),".  "),Object(i.b)("p",null,"Risk is often considered by this formula:",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"threats --\x3e vulnerabilities = risk"),Object(i.b)("br",{parentName:"p"}),"\n","If you don't have threats and vulnerabilities, you have no risk. ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../sec-definitions.md#nist"}),"NIST")," has a list of threats in their publication ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://csrc.nist.gov/publications/detail/sp/800-30/rev-1/final"}),"SP 800-30")),Object(i.b)("h3",{id:"5-managing-risk"},"5. Managing Risk"),Object(i.b)("p",null,"Check out the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://cve.mitre.org"}),"Common Vulnerabilities and Exposures database")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"7-security-controls"},"7. Security Controls"),Object(i.b)("p",null,"A mechanism to protect our IT infrastructue, or to remediate problems we have. What separates security engineer from IT is a security engineer understands, applies, and implements security controls."),Object(i.b)("h4",{id:"types-of-security-controls"},"Types of Security Controls"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Administrative"),Object(i.b)("li",{parentName:"ol"},"Technical"),Object(i.b)("li",{parentName:"ol"},"Pysical")),Object(i.b)("h4",{id:"security-controls-functions"},"Security Controls Functions"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Deterrent"),Object(i.b)("li",{parentName:"ul"},"Preventive"),Object(i.b)("li",{parentName:"ul"},"Detective"),Object(i.b)("li",{parentName:"ul"},"Corrective"),Object(i.b)("li",{parentName:"ul"},"Compensating: Alternative or temporary fix when we can't do what we want.")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"For the exam, be comfortable applying type and function of a control")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"12-frameworks"},"12. Frameworks"),Object(i.b)("p",null,"A framework is a project idea and come from various sources:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Regulartory"),Object(i.b)("li",{parentName:"ul"},"Non-regulatory: ISACA IT infrastructure"),Object(i.b)("li",{parentName:"ul"},"National Standards"),Object(i.b)("li",{parentName:"ul"},"International Standards: ISO 2700"),Object(i.b)("li",{parentName:"ul"},"Industry specific")),Object(i.b)("p",null,"NIST SP800-37: Risk Management Framework"),Object(i.b)("img",{src:Object(c.a)("img/NIST-SP800-37.png")}),Object(i.b)("p",null,"Auth is an important process when defining"),Object(i.b)("h3",{id:"13-quantitative-risk-calculations"},"13. Quantitative Risk Calculations"),Object(i.b)("p",null,"Single Loss Expectancy",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"SLE = AV (Asset Value) x EF (Exposure Factor)")),Object(i.b)("p",null,"ARO Annualized Rate of Occurrence: The number of times bad thing will occur  "),Object(i.b)("p",null,"ALE Annualized Loss Expectantcy:\n",Object(i.b)("inlineCode",{parentName:"p"},"ALE = SELE x ARO")),Object(i.b)("p",null,"Qualitative Risk Assessment: relies on descriptive elements  "),Object(i.b)("h4",{id:"risk-response-techniques"},"Risk Response Techniques:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Mitigate"),Object(i.b)("li",{parentName:"ol"},"Transfer aka Risk Sharing. ex: buying insurance"),Object(i.b)("li",{parentName:"ol"},"Accept: This is not ignoring the risk. You implemented controls and risk remains"),Object(i.b)("li",{parentName:"ol"},"Avoid the risk. Again, you are not ignoring risk ")))}u.isMDXComponent=!0},132:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},u=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=b(n),m=a,d=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return n?r.a.createElement(d,o({ref:t},l,{components:n})):r.a.createElement(d,o({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},133:function(e,t,n){"use strict";var a=n(0),r=n(36);t.a=function(){return Object(a.useContext)(r.a)}},136:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(133);function r(e){const{siteConfig:t}=Object(a.a)(),{baseUrl:n="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}}}]);