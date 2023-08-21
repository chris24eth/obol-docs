"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[20655],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),u=o,y=d["".concat(c,".").concat(u)]||d[u]||m[u]||a;return r?n.createElement(y,i(i({ref:t},l),{},{components:r})):n.createElement(y,i({ref:t},l))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},88987:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:6,description:"Run Prysm VCs in a DV"},i="Run Prysm validators as part of a DV Cluster",s={unversionedId:"int/quickstart/advanced/prysm-vc",id:"version-v0.17.0/int/quickstart/advanced/prysm-vc",title:"Run Prysm validators as part of a DV Cluster",description:"Run Prysm VCs in a DV",source:"@site/versioned_docs/version-v0.17.0/int/quickstart/advanced/prysm-vc.md",sourceDirName:"int/quickstart/advanced",slug:"/int/quickstart/advanced/prysm-vc",permalink:"/docs/int/quickstart/advanced/prysm-vc",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.17.0/int/quickstart/advanced/prysm-vc.md",tags:[],version:"v0.17.0",sidebarPosition:6,frontMatter:{sidebar_position:6,description:"Run Prysm VCs in a DV"},sidebar:"tutorialSidebar",previous:{title:"Push Metrics to Obol Monitoring",permalink:"/docs/int/quickstart/advanced/push-metrics"},next:{title:"Self-Host a Relay",permalink:"/docs/int/quickstart/advanced/self-relay"}},c={},p=[],l={toc:p};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"run-prysm-validators-as-part-of-a-dv-cluster"},"Run Prysm validators as part of a DV Cluster"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Support for prysm validator clients is in an experimental phase as prysm doesn't provide ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/prysmaticlabs/prysm/issues/11580"},"complete support"),"\nfor running their validator client on a beacon node REST API yet. Stay up to date on the latest support information for all validator clients at ",(0,o.kt)("a",{parentName:"p",href:"https://dvt.obol.tech"},"dvt.obol.tech"),".")),(0,o.kt)("p",null,"We have provided experimental support of prysm validator client through ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ObolNetwork/charon-distributed-validator-cluster/blob/main/compose-prysm.yml"},"compose-prysm.yml"),"\nwhich needs a prysm beacon node to work alongside a REST based beacon node. Here are the steps to test prysm in a DV Cluster:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Run the following command:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cp docker-compose.override.yml.sample docker-compose.override.yml\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Disable")," the VCs in ",(0,o.kt)("inlineCode",{parentName:"li"},"docker-compose.override.yml")," that are to be replaced by corresponding prysm VCs by un-commenting the ",(0,o.kt)("inlineCode",{parentName:"li"},"profiles")," field\n(",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/profiles/"},"more details on profiles"),"). Also disable the prysm VCs that are not required in the cluster in ",(0,o.kt)("inlineCode",{parentName:"li"},"docker-compose.override.yml"),"."),(0,o.kt)("li",{parentName:"ol"},"Run the following command:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker compose -f docker-compose.yml -f compose-prysm.yml -f docker-compose.override.yml up --build\n")))))}d.isMDXComponent=!0}}]);