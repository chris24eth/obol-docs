"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[326],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(r),m=a,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9500:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],s={description:"Documenting a Distributed Validator Cluster in a standardised file format"},l="Distributed Validator Cluster Manifest",d={unversionedId:"dv/distributed-validator-cluster-manifest",id:"dv/distributed-validator-cluster-manifest",isDocsHomePage:!1,title:"Distributed Validator Cluster Manifest",description:"Documenting a Distributed Validator Cluster in a standardised file format",source:"@site/docs/dv/08_distributed-validator-cluster-manifest.md",sourceDirName:"dv",slug:"/dv/distributed-validator-cluster-manifest",permalink:"/docs/dv/distributed-validator-cluster-manifest",editUrl:"https://github.com/obolnetwork/obol-docs/edit/main/website/docs/dv/08_distributed-validator-cluster-manifest.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{description:"Documenting a Distributed Validator Cluster in a standardised file format"},sidebar:"tutorialSidebar",previous:{title:"P2P interface",permalink:"/docs/dv/p2p-interface"},next:{title:"Charon CLI Reference",permalink:"/docs/dv/charon_cli_reference"}},c=[{value:"Example manifest",id:"example-manifest",children:[],level:2}],u={toc:c};function p(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"distributed-validator-cluster-manifest"},"Distributed Validator Cluster Manifest"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This manifest file is a work in progress, and intends to be standardised for operating distributed validators via the ",(0,i.kt)("a",{parentName:"p",href:"/docs/dvk/distributed-validator-keys#standardising-the-format-of-dvks"},"EIP process")," when appropriate."))),(0,i.kt)("p",null,"The manifest file captures the public, read-only info required to take part in a distributed validator cluster."),(0,i.kt)("p",null,"One manifest can contain a number of distributed validators being operated by the same group of nodes."),(0,i.kt)("p",null,"The manifest provides at least the following info."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ENRs for each participating operator",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"SECP256K1 public keys"),(0,i.kt)("li",{parentName:"ul"},"Used to identify a DVC client across the internet"),(0,i.kt)("li",{parentName:"ul"},"Forms the basis of identity between charon nodes"))),(0,i.kt)("li",{parentName:"ul"},"Signature(s) from each key share(s) authorising their respective operator ENRs as acting on their behalf",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Used to link validator key shares to DVC ENRs, includes a nonce to allow for ENR key rotation"))),(0,i.kt)("li",{parentName:"ul"},"An array of distributed validators operated by this cluster",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The BLS public key of the Distributed Validator"),(0,i.kt)("li",{parentName:"ul"},"The TSS verifiers for the group key, from which BLS public keys can be inferred")))),(0,i.kt)("h2",{id:"example-manifest"},"Example manifest"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json5",metastring:'title="manifest.yaml"',title:'"manifest.yaml"'},'{\n  "version": "obol/charon/manifest/0.0.1",\n  "description": "dv/2/threshold/3/peer/5",\n  "distributed_validators": [\n    {\n      "root_pubkey": "0xaf7e10e176ad2cd634009fed0e906e95866d47ec16808cc4df32b3bcfcaffbad9158f52531a086f6d9c54152dc4250da",\n      "threshold_verifiers": [\n        "r34Q4XatLNY0AJ/tDpBulYZtR+wWgIzE3zKzvPyv+62RWPUlMaCG9tnFQVLcQlDa",\n        "jRadEC0L5vp+sYPUvRgp9b4x/nzN1qGkiFA+lgpwNjq3BiJjhhikMKY8HQ1PJ0R2",\n        "uQHdtolDJjjXXwnQikhBx9T9Hp20fPXqOS4hP3nZORhtPlVCCvP8IggANkq9o7hF"\n      ]\n    },\n    {\n      "root_pubkey": "0x82313d1fc1b7e2e361935b977068434226a0bc1ec3680a35669b63378f0154e419b1daba3531b0068a7af3159e0f56d7",\n      "threshold_verifiers": [\n        "gjE9H8G34uNhk1uXcGhDQiagvB7DaAo1ZptjN48BVOQZsdq6NTGwBop68xWeD1bX",\n        "ud3X5IV2KqOkBMWRLGpWsuyRQkK0shUKp8pascNEQE3Vo2ujVfs0O+3dPPbi8CYm",\n        "hQl8KQo8usksZjaE04L6vJRPXrv2k7h542adcK8Ibwhvci1hWwppBc54VvKG9VfL"\n      ]\n    }\n  ],\n  "peers": [\n    "enr:-Ie4QFdd7auMcA6Sht4fD5alWeChra30HTW0eIOr6XkYQtivD2Ev1HNdkyhFnT5LcVKB-2aROv2wAW5EJW5NKLx_fUiAgmlkgnY0gmlwhH8AAAGJc2VjcDI1NmsxoQK1OEYKGHj2rkQflwpMENJhr9_AAVIMdgRjp-D7dPVUVIN0Y3ABg3VkcAI=",\n    "enr:-Ie4QP4mbZPiuYMGJxpbV1bb5KwYz69pONum1XLQWJNscrABMZMaR8-mco4vZRwHpJfLV-Xq-2MMmGPcWvKGurzoV8SAgmlkgnY0gmlwhH8AAAGJc2VjcDI1NmsxoQPXTrrbopT8F81z6nd9BP6OMaiXdU4hovsGz4alw74JkIN0Y3ADg3VkcAQ=",\n    "enr:-Ie4QCvui6MrHdcZmCmpenVBzfJ7kylTt2gHBvG-C5Hy7fZCXeM2Ct0NUBcuQZUQgKwiRpIza1qVUFUttaWO7RHwDx6AgmlkgnY0gmlwhH8AAAGJc2VjcDI1NmsxoQLmzL1T7YS3su4_059MUAQD3Dk8PM8Jh_1qq8jUzeaRWoN0Y3AFg3VkcAY=",\n    "enr:-Ie4QCok_dUP2L9mVUPpLdVl_VLcTwESD7Xd4WYRSbPq__srFVsJT4MPxsQOP68BPXw2IMWvThA6SfBs-PMne__srdSAgmlkgnY0gmlwhH8AAAGJc2VjcDI1NmsxoQLITI6sd1v-A1ArY0oBvIjGPsJWjc1XvbIxjWr1jvRSA4N0Y3AHg3VkcAg=",\n    "enr:-Ie4QAaRwPBsUloA1AlLmgjRx-zIHipzM06ioU2hH9Uv-mKRNUfScDInXlPGomDslz3QbAu0gxR-Jgq7d3SKHohjI7SAgmlkgnY0gmlwhH8AAAGJc2VjcDI1NmsxoQNfEIdLwYgnPux1pXBg5enZ8jlIsPzMtHAJH1tnRfeMiYN0Y3AJg3VkcAo="\n  ]\n}\n\n')))}p.isMDXComponent=!0}}]);