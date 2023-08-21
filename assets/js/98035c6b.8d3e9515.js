"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[99281],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>h});var a=i(67294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function n(e,t){if(null==e)return{};var i,a,o=function(e,t){if(null==e)return{};var i,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)i=l[a],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)i=l[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var i=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=n(e,["components","mdxType","originalType","parentName"]),d=u(i),m=o,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return i?a.createElement(h,r(r({ref:t},c),{},{components:i})):a.createElement(h,r({ref:t},c))}));function h(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=i.length,r=new Array(l);r[0]=m;var n={};for(var s in t)hasOwnProperty.call(t,s)&&(n[s]=t[s]);n.originalType=e,n[d]="string"==typeof e?e:o,r[1]=n;for(var u=2;u<l;u++)r[u]=i[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}m.displayName="MDXCreateElement"},49786:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>n,toc:()=>u});var a=i(87462),o=(i(67294),i(3905));const l={description:"Bug Bounty Policy",sidebar_position:3},r="Obol Bug Bounty",n={unversionedId:"sec/bug-bounty",id:"version-v0.16.0/sec/bug-bounty",title:"Obol Bug Bounty",description:"Bug Bounty Policy",source:"@site/versioned_docs/version-v0.16.0/sec/bug-bounty.md",sourceDirName:"sec",slug:"/sec/bug-bounty",permalink:"/docs/v0.16.0/sec/bug-bounty",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.16.0/sec/bug-bounty.md",tags:[],version:"v0.16.0",sidebarPosition:3,frontMatter:{description:"Bug Bounty Policy",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Roadmap",permalink:"/docs/v0.16.0/sec/roadmap"},next:{title:"Contacts",permalink:"/docs/v0.16.0/sec/contact"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"Eligibility",id:"eligibility",level:2},{value:"Scope",id:"scope",level:2},{value:"Rules",id:"rules",level:2},{value:"Rewards",id:"rewards",level:2},{value:"Low: up to $500",id:"low-up-to-500",level:3},{value:"Medium: up to $1,000",id:"medium-up-to-1000",level:3},{value:"High: up to $2,500",id:"high-up-to-2500",level:3},{value:"Critical: up to $5,000",id:"critical-up-to-5000",level:3},{value:"Submission process",id:"submission-process",level:2},{value:"Disclosure Policy",id:"disclosure-policy",level:2},{value:"Legal Compliance",id:"legal-compliance",level:2},{value:"Non-Disclosure Agreement",id:"non-disclosure-agreement",level:2}],c={toc:u};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"obol-bug-bounty"},"Obol Bug Bounty"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Obol Labs is committed to ensuring the security of our distributed validator software and services. As part of our commitment to security, we have established a bug bounty program to encourage security researchers to report vulnerabilities in our software and services to us so that we can quickly address them. "),(0,o.kt)("h2",{id:"eligibility"},"Eligibility"),(0,o.kt)("p",null,"To participate in the Bug Bounty Program you must:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Not be a resident of any country that does not allow participation in these types of programs"),(0,o.kt)("li",{parentName:"ul"},"Be at least 14 years old and have legal capacity to agree to these terms and participate in the Bug Bounty Program"),(0,o.kt)("li",{parentName:"ul"},"Have permission from your employer to participate"),(0,o.kt)("li",{parentName:"ul"},"Not be (for the previous 12 months) an Obol Labs employee, immediate family member of an Obol employee, Obol contractor, or Obol service provider.")),(0,o.kt)("h2",{id:"scope"},"Scope"),(0,o.kt)("p",null,"The bug bounty program applies to software and services that are built by Obol. Only submissions under the following domains are eligible for rewards:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Charon DVT Middleware"),(0,o.kt)("li",{parentName:"ul"},"DV Launchpad"),(0,o.kt)("li",{parentName:"ul"},"Obol\u2019s Public API"),(0,o.kt)("li",{parentName:"ul"},"Obol\u2019s Smart Contracts and the contracts they depend on."),(0,o.kt)("li",{parentName:"ul"},"Obol\u2019s Public Relay")),(0,o.kt)("p",null,"Additionally, all vulnerabilities that require or are related to the following are out of scope:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Social engineering"),(0,o.kt)("li",{parentName:"ul"},"Rate Limiting (Non-critical issues)"),(0,o.kt)("li",{parentName:"ul"},"Physical security"),(0,o.kt)("li",{parentName:"ul"},"Non-security-impacting UX issues"),(0,o.kt)("li",{parentName:"ul"},"Vulnerabilities or weaknesses in third party applications that integrate with Obol"),(0,o.kt)("li",{parentName:"ul"},"The Obol website or the Obol infrastructure in general is NOT part of this bug bounty program.")),(0,o.kt)("h2",{id:"rules"},"Rules"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Bug has not been publicly disclosed"),(0,o.kt)("li",{parentName:"ul"},"Vulnerabilities that have been previously submitted by another contributor or already known by the Obol development team are not eligible for rewards"),(0,o.kt)("li",{parentName:"ul"},"The size of the bounty payout depends on the assessment of the severity of the exploit. Please refer to the rewards section below for additional details"),(0,o.kt)("li",{parentName:"ul"},"Bugs must be reproducible in order for us to verify the vulnerability. Submissions with a working proof of concept is necessary"),(0,o.kt)("li",{parentName:"ul"},"Rewards and the validity of bugs are determined by the Obol security team and any payouts are made at their sole discretion"),(0,o.kt)("li",{parentName:"ul"},"Terms and conditions of the Bug Bounty program can be changed at any time at the discretion of Obol"),(0,o.kt)("li",{parentName:"ul"},"Details of any valid bugs may be shared with complementary protocols utilised in the Obol ecosystem in order to promote ecosystem cohesion and safety.")),(0,o.kt)("h2",{id:"rewards"},"Rewards"),(0,o.kt)("p",null,"The rewards for participating in our bug bounty program will be based on the severity and impact of the vulnerability discovered. We will evaluate each submission on a case-by-case basis, and the rewards will be at Obol\u2019s sole discretion."),(0,o.kt)("h3",{id:"low-up-to-500"},"Low: up to $500"),(0,o.kt)("p",null,"A Low-level vulnerability is one that has a limited impact and can be easily fixed. Unlikely to have a meaningful impact on availability, integrity, and/or loss of funds."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Low impact, medium likelihood"),(0,o.kt)("li",{parentName:"ul"},"Medium impact, low likelihood\nExamples:"),(0,o.kt)("li",{parentName:"ul"},"Attacker can sometimes put a charon node in a state that causes it to drop one out of every one hundred attestations made by a validator")),(0,o.kt)("h3",{id:"medium-up-to-1000"},"Medium: up to $1,000"),(0,o.kt)("p",null,"A Medium-level vulnerability is one that has a moderate impact and requires a more significant effort to fix. Possible to have an impact on availability, integrity, and/or loss of funds."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"High impact, low likelihood"),(0,o.kt)("li",{parentName:"ul"},"Medium impact, medium likelihood"),(0,o.kt)("li",{parentName:"ul"},"Low impact, high likelihood\nExamples:"),(0,o.kt)("li",{parentName:"ul"},"Attacker can successfully conduct eclipse attacks on the cluster nodes with peer-ids with 4 leading zero bytes.")),(0,o.kt)("h3",{id:"high-up-to-2500"},"High: up to $2,500"),(0,o.kt)("p",null,"A High-level vulnerability is one that has a significant impact on the security of the system and requires a significant effort to fix. Likely to have impact on availability, integrity, and/or loss of funds."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"High impact, medium likelihood"),(0,o.kt)("li",{parentName:"ul"},"Medium impact, high likelihood\nExamples:"),(0,o.kt)("li",{parentName:"ul"},"Attacker can successfully partition the cluster and exceeding its threshold.")),(0,o.kt)("h3",{id:"critical-up-to-5000"},"Critical: up to $5,000"),(0,o.kt)("p",null,"A Critical-level vulnerability is one that has a severe impact on the security of the system and requires immediate attention to fix. Highly likely to have a material impact on availability, integrity, and/or loss of funds."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"High impact, high likelihood\nExamples:"),(0,o.kt)("li",{parentName:"ul"},"Attacker can successfully conduct remote code execution in charon client.")),(0,o.kt)("p",null,"We may offer rewards in the form of cash, merchandise, or recognition. We will only award one reward per vulnerability discovered, and we reserve the right to deny a reward if we determine that the researcher has violated the terms and conditions of this policy."),(0,o.kt)("h2",{id:"submission-process"},"Submission process"),(0,o.kt)("p",null,"Please email ",(0,o.kt)("a",{parentName:"p",href:"mailto:security@obol.tech"},"security@obol.tech")),(0,o.kt)("p",null,"Your report should include the following information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Description of the vulnerability and its potential impact"),(0,o.kt)("li",{parentName:"ul"},"Steps to reproduce the vulnerability"),(0,o.kt)("li",{parentName:"ul"},"Proof of concept code, screenshots, or other supporting documentation"),(0,o.kt)("li",{parentName:"ul"},"Your name, email address, and any contact information you would like to provide.\nReports that do not include sufficient detail will not be eligible for rewards.")),(0,o.kt)("h2",{id:"disclosure-policy"},"Disclosure Policy"),(0,o.kt)("p",null,"Obol Labs will disclose the details of the vulnerability and the researcher\u2019s identity (with their consent) only after we have remediated the vulnerability and issued a fix. Researchers must keep the details of the vulnerability confidential until Obol Labs has acknowledged and remediated the issue."),(0,o.kt)("h2",{id:"legal-compliance"},"Legal Compliance"),(0,o.kt)("p",null,"All participants in the bug bounty program must comply with all applicable laws, regulations, and policy terms and conditions. Obol will not be held liable for any unlawful or unauthorised activities performed by participants in the bug bounty program."),(0,o.kt)("p",null,"We will not take any legal action against security researchers who discover and report security vulnerabilities in accordance with this bug bounty policy. We do, however, reserve the right to take legal action against anyone who violates the terms and conditions of this policy."),(0,o.kt)("h2",{id:"non-disclosure-agreement"},"Non-Disclosure Agreement"),(0,o.kt)("p",null,"All participants in the bug bounty program will be required to sign a non-disclosure agreement (NDA) before they are given access to our software and services for testing purposes."))}d.isMDXComponent=!0}}]);