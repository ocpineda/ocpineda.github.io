(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{165:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return u}));var n=a(2),r=a(9),i=(a(0),a(181)),c=a(185),s={id:"udemy-comptia",title:"Udemy Notes"},l={id:"udemy-comptia",title:"Udemy Notes",description:"CompTIA Security+ SY0-501 lecture notes from Udemy",source:"@site/docs/sec-plus-udemy.md",permalink:"/docs/udemy-comptia",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/sec-plus-udemy.md",sidebar:"someSidebar",previous:{title:"Study Guide",permalink:"/docs/study-guide"},next:{title:"CISSP course from Linux Academy",permalink:"/docs/cissp-study-guide"}},o=[{value:"TODO",id:"todo",children:[]},{value:"Resources",id:"resources",children:[]},{value:"Section 1: Risk Management",id:"section-1-risk-management",children:[{value:"1. INTRODUCTION",id:"1-introduction",children:[]},{value:"2. CIA",id:"2-cia",children:[]},{value:"3. THREAT ACTORS",id:"3-threat-actors",children:[]},{value:"4. WHAT IS RISK?",id:"4-what-is-risk",children:[]},{value:"5. Managing Risk",id:"5-managing-risk",children:[]},{value:"7. Using Guides for Risk Assessment",id:"7-using-guides-for-risk-assessment",children:[]},{value:"7. Security Controls",id:"7-security-controls",children:[]},{value:"Best practice",id:"best-practice",children:[]},{value:"12. Frameworks",id:"12-frameworks",children:[]},{value:"13. Quantitative Risk Calculations",id:"13-quantitative-risk-calculations",children:[]},{value:"14. Business Impact Analysis (BIA)",id:"14-business-impact-analysis-bia",children:[]},{value:"15. Organizing Data",id:"15-organizing-data",children:[]},{value:"17. Third Party Agreements",id:"17-third-party-agreements",children:[]}]},{value:"Section 2: Cryptography",id:"section-2-cryptography",children:[{value:"29. PKI",id:"29-pki",children:[]}]}],b={rightToc:o};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"CompTIA Security+ SY0-501 lecture notes from Udemy"),Object(i.b)("p",null,"These are notes from Mike Meyer's ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.udemy.com/course/comptia-security-certification-sy0-501-the-total-course/"}),"Udemy course")),Object(i.b)("h2",{id:"todo"},"TODO"),Object(i.b)("ul",{className:"contains-task-list"},Object(i.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ",'Review examples in BIA example "Identify Resource Requirements" in Myers\' CompTIA cert book'),Object(i.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Review PKI"),Object(i.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Check out wrong answers in Linux Academy"),Object(i.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","CIS config guides")),Object(i.b)("h2",{id:"resources"},"Resources"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Source for original ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://gitlab.com/oscarneedscoffee/notes/-/tree/master/software/security"}),"MD notes")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/study-guide"}),"Study guide")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://gitlab.com/oscarneedscoffee/notes/-/blob/master/software/security/security-plus/udemy-course/CompTIA-Security-SY0-501.pdf"}),"CompTIA Sec+ Objectives"))),Object(i.b)("h2",{id:"section-1-risk-management"},"Section 1: Risk Management"),Object(i.b)("h3",{id:"1-introduction"},"1. INTRODUCTION"),Object(i.b)("p",null,"Curriculum ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"udemy-course/CompTIA-Security-SY0-501.pdf"}),"here")),Object(i.b)("h3",{id:"2-cia"},"2. CIA"),Object(i.b)("p",null,"Confidentiality, Integrity, and Availability.   "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Is your info private?"),Object(i.b)("li",{parentName:"ul"},"Can I trust this info? "),Object(i.b)("li",{parentName:"ul"},"Can I get my info when I need it?")),Object(i.b)("p",null,"These form the CIA triad. Meyers feels CIA isn't enough. He also addes ",Object(i.b)("em",{parentName:"p"},"auditing & accountability")," and ",Object(i.b)("em",{parentName:"p"},"non-repudiation")),Object(i.b)("img",{src:Object(c.a)("img/cia.jpg"),width:"300px"}),Object(i.b)("p",null,"Accounting & auditing helps you keep track of issues. Non-repudiation ensures the receiver cannot deny receiving the message."),Object(i.b)("h3",{id:"3-threat-actors"},"3. THREAT ACTORS"),Object(i.b)("p",null,"Threat actors have attributes such as"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"internal or external threats"),Object(i.b)("li",{parentName:"ul"},"Level of sophistication"),Object(i.b)("li",{parentName:"ul"},"Intent or motivation"),Object(i.b)("li",{parentName:"ul"},"Use of open source intelligence ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"../sec-definitions.md#open-source-intelligence"}),"(OSINT)"))),Object(i.b)("p",null,"The types of threat actors are:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Script kiddies"),Object(i.b)("li",{parentName:"ol"},"Hacktavists"),Object(i.b)("li",{parentName:"ol"},"Organized crime-- money motivated"),Object(i.b)("li",{parentName:"ol"},"Nation states.  "),Object(i.b)("li",{parentName:"ol"},"Insiders.  ")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Nation states")," are the biggest threat because of greater resources. This TA goes for ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../sec-definitions.md#advanced-persistent-threat"}),Object(i.b)("em",{parentName:"a"},"Advanced Persistent Threats (APT)")),". ",Object(i.b)("strong",{parentName:"p"},"Insiders")," are not only employees, but can be vendors, cleaning staff, contractors, etc... This is anyone who has access to your resources in any way."),Object(i.b)("h3",{id:"4-what-is-risk"},"4. WHAT IS RISK?"),Object(i.b)("p",null,"Risk is ",Object(i.b)("em",{parentName:"p"},"potential for harm"),". To understand risk, you need some key terms. "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Assets")," are the parts that you are worried about. They can be people, doors, paperwork, doors, or even intangibles such as reputation."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Vulnerabilities")," are weaknesses to your assets that may cause harm"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Threats")," are the negative events that exploit a vulnerability"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Likelihood")," is the level of certainty that something bad will happen"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Impact")," is the actual harm when threats and vulnerabilities are exploited.")),Object(i.b)("p",null,"A threat is enacted by a ",Object(i.b)("em",{parentName:"p"},"threat agent"),". This is usually a person, but can be an entity such as a hurricane, virus, act of God, etc...  The ",Object(i.b)("strong",{parentName:"p"},"impact")," of a risk can be evaluated quantitatively or qualitatively. Impact is usually considered on an annual bases e.g. ",Object(i.b)("em",{parentName:"p"},'"How many times a year will my network fail"'),".  "),Object(i.b)("p",null,"Risk is often considered by this formula:",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"threats --\x3e vulnerabilities = risk"),Object(i.b)("br",{parentName:"p"}),"\n","If you don't have threats and vulnerabilities, you have no risk. ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../sec-definitions.md#nist"}),"NIST")," has a list of threats in their publication ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://csrc.nist.gov/publications/detail/sp/800-30/rev-1/final"}),"SP 800-30")),Object(i.b)("h3",{id:"5-managing-risk"},"5. Managing Risk"),Object(i.b)("p",null,"Check out the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://cve.mitre.org"}),"Common Vulnerabilities and Exposures database")),Object(i.b)("h3",{id:"7-using-guides-for-risk-assessment"},"7. Using Guides for Risk Assessment"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"benchmark ")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"7-security-controls"},"7. Security Controls"),Object(i.b)("p",null,"A mechanism to protect our IT infrastructue, or to remediate problems we have. What separates security engineer from IT is a security engineer understands, applies, and implements security controls."),Object(i.b)("p",null,"Security controls don\u2019t say how to perform the steps needed to mitigate a threat, only that they must be performed"),Object(i.b)("p",null,"There are thousands of controls you have to implement. You do it with a RMF (Risk Management Framework)."),Object(i.b)("h4",{id:"types-of-security-controls"},"Types of Security Controls"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Administrative"),Object(i.b)("li",{parentName:"ol"},"Technical"),Object(i.b)("li",{parentName:"ol"},"Pysical")),Object(i.b)("h4",{id:"security-controls-functions"},"Security Controls Functions"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Deterrent"),Object(i.b)("li",{parentName:"ul"},"Preventive"),Object(i.b)("li",{parentName:"ul"},"Detective"),Object(i.b)("li",{parentName:"ul"},"Corrective"),Object(i.b)("li",{parentName:"ul"},"Compensating: Alternative or temporary fix when we can't do what we want.")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"For the exam, be comfortable applying type and function of a control")),Object(i.b)("h3",{id:"best-practice"},"Best practice"),Object(i.b)("p",null,"A standard is a ruleset voluntarily adopted by an industry to provide more uniform products and services"),Object(i.b)("p",null,"A ",Object(i.b)("strong",{parentName:"p"},"security policy")," is a document that organizations generate to declare what actions and attitudes they will take for certain critical aspects of their infrastructure. "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Acceptable use")),Object(i.b)("p",null,"enterprise information security architecture (EISA)"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The EISA analyzes security systems in place. "),Object(i.b)("li",{parentName:"ul"},"It encompasses industry-standard frameworks, such as the NIST RMF discussed previously. "),Object(i.b)("li",{parentName:"ul"},"The EISA accounts for regulatory and non-regulatory influences\u2014laws and standard operating procedures\u2014and how compliance manifests. That includes national and international laws and practices.")),Object(i.b)("p",null,"Activity Phase Controls\nThe phases are before, during, and after an attack. "),Object(i.b)("p",null,"Deterrent controls"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"You need to know five phase control types for both essential skills and the CompTIA Security+ exam: deterrent, preventative, detective, corrective, and compensating")),Object(i.b)("p",null,"Defective applied during an attack. IDS is an example. "),Object(i.b)("p",null,"Corrective is applied after an attack. "),Object(i.b)("p",null,"Compensating You use compensating controls to keep going until a better control is available or possible"),Object(i.b)("h4",{id:"standards"},"Standards"),Object(i.b)("p",null,"A standard is a ruleset voluntarily adopted by an industry to provide more uniform products and services  "),Object(i.b)("p",null,"PCI-DSS"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"12-frameworks"},"12. Frameworks"),Object(i.b)("p",null,"A framework is a description of a complex process, concentrating on major steps and the flows between the stops. In security, the framework used is a ",Object(i.b)("em",{parentName:"p"},"risk management framework (RMF)"),"  NIST is a popular RMF"),Object(i.b)("p",null,"A framework is a project idea and come from various sources:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Regulatory"),Object(i.b)("li",{parentName:"ul"},"Non-regulatory: ISACA IT infrastructure"),Object(i.b)("li",{parentName:"ul"},"National Standards"),Object(i.b)("li",{parentName:"ul"},"International Standards: ISO 2700"),Object(i.b)("li",{parentName:"ul"},"Industry specific")),Object(i.b)("p",null,"NIST SP800-37: Risk Management Framework"),Object(i.b)("img",{src:Object(c.a)("img/NIST-SP800-37.png")}),Object(i.b)("h4",{id:"laws"},"Laws"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"HIPAA ",Object(i.b)("em",{parentName:"li"},"Health Insurance Portability and Accountability Act")," privacy and security for medical information. Who has access to records, and how to store it."),Object(i.b)("li",{parentName:"ul"},"SOX Sarbanes-Oxley of 2002. Requires businesses to retain records for specific time periods.")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"13-quantitative-risk-calculations"},"13. Quantitative Risk Calculations"),Object(i.b)("p",null,"Single Loss Expectancy",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"SLE = AV (Asset Value) x EF (Exposure Factor)")),Object(i.b)("p",null,"ARO Annualized Rate of Occurrence: The number of times bad thing will occur  "),Object(i.b)("p",null,"ALE Annualized Loss Expectantcy:\n",Object(i.b)("inlineCode",{parentName:"p"},"ALE = SLE x ARO")),Object(i.b)("p",null,"Qualitative Risk Assessment: relies on descriptive elements  "),Object(i.b)("h4",{id:"risk-response-techniques"},"Risk Response Techniques:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Mitigate"),Object(i.b)("li",{parentName:"ol"},"Transfer aka Risk Sharing. ex: buying insurance"),Object(i.b)("li",{parentName:"ol"},"Accept: This is not ignoring the risk. You implemented controls and risk remains"),Object(i.b)("li",{parentName:"ol"},"Avoid the risk. Again, you are not ignoring risk ")),Object(i.b)("h3",{id:"14-business-impact-analysis-bia"},"14. Business Impact Analysis (BIA)"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"A business impact analysis is designed to mitigate the effects of an incident, not to prevent an incident.")),Object(i.b)("h4",{id:"nist-sp-800-34-revision-1-contingency-planning-guide-for-federal-information-systems"},"NIST SP 800-34 Revision 1 ",Object(i.b)("em",{parentName:"h4"},'"Contingency Planning Guide for Federal Information Systems"')),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Determine mission/business processes and recovery criticality."),Object(i.b)("li",{parentName:"ol"},"Identify resource requirements."),Object(i.b)("li",{parentName:"ol"},"Identify recovery priorities for system resources.")),Object(i.b)("p",null,"BIA is a subset of ",Object(i.b)("em",{parentName:"p"},"contingency planning (CP)")),Object(i.b)("h4",{id:"types-of-impact"},"Types of Impact"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Financial"),Object(i.b)("li",{parentName:"ul"},"Reputation"),Object(i.b)("li",{parentName:"ul"},"Property"),Object(i.b)("li",{parentName:"ul"},"Safety/life"),Object(i.b)("li",{parentName:"ul"},"privacy",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"privacy threshold assessment (PTA)"),Object(i.b)("li",{parentName:"ul"},"privacy impact assessment (PIA)")))),Object(i.b)("h4",{id:"calculating-impact"},"Calculating Impact"),Object(i.b)("p",null,"The Sec+ exam only touches on qualitative measurements.  MTBF, MTTF, and MTTR."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"MTBF Mean Time between Failures: usually for hardware. This means device will be repaired, not replaced."),Object(i.b)("li",{parentName:"ol"},"MTTF Mean Time to Failure: The length of time a device is expected to last in operation. Device will be replaced"),Object(i.b)("li",{parentName:"ol"},"MTTR Mean Time to Recovery: The amount of time for hardware to recover from failure.")),Object(i.b)("h4",{id:"calculating-downtime"},"Calculating Downtime"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"RTO ",Object(i.b)("em",{parentName:"li"},"Recovery Time Objective"),": The max time a resource may remain unavailable before an unacceptable impact on other resources."),Object(i.b)("li",{parentName:"ol"},"RPO ",Object(i.b)("em",{parentName:"li"},"Recovery Point Objective"),": The amount of time that will pass between an incident and recovery from backup. ex: if you backed up yesterday, the RPO is 24 hours")),Object(i.b)("h3",{id:"15-organizing-data"},"15. Organizing Data"),Object(i.b)("p",null,"in Myers book see ",Object(i.b)("em",{parentName:"p"},"MODULE 1-6: DATA SECURITY AND PRIVACY POLICIES")),Object(i.b)("p",null,"Types of Data:  "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Public "),Object(i.b)("li",{parentName:"ul"},"Confidential: Limited to authorized viewing as agreed by parties involved"),Object(i.b)("li",{parentName:"ul"},"Private: ")),Object(i.b)("h3",{id:"17-third-party-agreements"},"17. Third Party Agreements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"SLA: Legal document to specify what a third party will guarantee to the organization"),Object(i.b)("li",{parentName:"ul"},"BPA: When two businesses get together"),Object(i.b)("li",{parentName:"ul"},"ISA: Interconnection Security Agreement. Not a legal document, but technical. Usually used in telecom and between government agencies."),Object(i.b)("li",{parentName:"ul"},"MOA (Memorandum of Agreement): Legal document with terms and details of agreement")),Object(i.b)("h2",{id:"section-2-cryptography"},"Section 2: Cryptography"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/study-guide#cryptography"}),"See study guide")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Module 6 in CompTIA objectives")),Object(i.b)("h3",{id:"29-pki"},"29. PKI"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/study-guide#pki"}),"More in study guide")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"PKI uses symmetric and asymmetric algorithms, and hashing."),Object(i.b)("li",{parentName:"ul"},"Symmetric algorithms are fast, but don't scale well. Asymmetric isn't fast, and doesn't encrypt large amounts of data as well."),Object(i.b)("li",{parentName:"ul"},"Asymmetric systems use private and public key pairs. You don't send your private key.")),Object(i.b)("p",null,"To exchange messages between two parties, each party must have each other's public keys."),Object(i.b)("img",{src:Object(c.a)("img/asymm-keys.jpg")}))}u.isMDXComponent=!0},181:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),b=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s({},t,{},e)),a},u=function(e){var t=b(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),u=b(a),m=n,d=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return a?r.a.createElement(d,s({ref:t},o,{components:a})):r.a.createElement(d,s({ref:t},o))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var o=2;o<i;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},182:function(e,t,a){"use strict";var n=a(0),r=a(56);t.a=function(){return Object(n.useContext)(r.a)}},185:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a(188);var n=a(182);function r(e){var t=(Object(n.a)().siteConfig||{}).baseUrl,a=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?a+e.slice(1):a+e}},188:function(e,t,a){"use strict";var n=a(17),r=a(35),i=a(190),c="".startsWith;n(n.P+n.F*a(191)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),a=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return c?c.call(t,n,a):t.slice(a,a+n.length)===n}})},190:function(e,t,a){var n=a(72),r=a(27);e.exports=function(e,t,a){if(n(t))throw TypeError("String#"+a+" doesn't accept regex!");return String(r(e))}},191:function(e,t,a){var n=a(3)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(a){try{return t[n]=!1,!"/./"[e](t)}catch(r){}}return!0}}}]);