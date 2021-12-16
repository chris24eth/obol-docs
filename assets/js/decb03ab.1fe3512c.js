"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[858],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=n.createContext({}),c=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(r),f=i,m=u["".concat(d,".").concat(f)]||u[f]||p[f]||a;return r?n.createElement(m,o(o({ref:t},l),{},{components:r})):n.createElement(m,o({ref:t},l))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},846:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],s={description:"Documenting a Distributed Validator Cluster in a standardised file format"},d="Distributed Validator Cluster Manifest",c={unversionedId:"dv/distributed-validator-cluster-manifest",id:"dv/distributed-validator-cluster-manifest",isDocsHomePage:!1,title:"Distributed Validator Cluster Manifest",description:"Documenting a Distributed Validator Cluster in a standardised file format",source:"@site/docs/dv/03_distributed-validator-cluster-manifest.md",sourceDirName:"dv",slug:"/dv/distributed-validator-cluster-manifest",permalink:"/docs/dv/distributed-validator-cluster-manifest",editUrl:"https://github.com/obolnetwork/obol-docs/edit/main/website/docs/dv/03_distributed-validator-cluster-manifest.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Documenting a Distributed Validator Cluster in a standardised file format"},sidebar:"tutorialSidebar",previous:{title:"Distributed Validator Creation",permalink:"/docs/dv/validator-creation"},next:{title:"Middleware Daemon",permalink:"/docs/dv/middleware-daemon"}},l=[{value:"JSON schema",id:"json-schema",children:[],level:3}],p={toc:l};function u(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"distributed-validator-cluster-manifest"},"Distributed Validator Cluster Manifest"),(0,a.kt)("p",null,"The manifest file captures the public and private info required to take part in a distributed validator cluster. Each operator has their own version of the cluster manifest containing their DV client secrets."),(0,a.kt)("p",null,"One manifest can contain a number of distributed validators being operated by the same group of nodes."),(0,a.kt)("p",null,"The manifest provides at least the following info."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The number of operators participating in this cluster.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"ENRs for each participating operator. (SECP256K1 public keys)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Signatures from each key shard authorising their respective operator ENRs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A collection of distributed validators operated by this cluster"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The BLS public key of the Distributed Validator")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The total number of shards and minimum threshold required for signing")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The BLS public keys for each shard of this validator")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Public commitments to the secret sharing polynomial."),(0,a.kt)("p",{parentName:"li"},"Used to verify partial signatures during signature aggregation."))))),(0,a.kt)("h3",{id:"json-schema"},"JSON schema"),(0,a.kt)("p",null,"The JSON schema of the DV manifest file is as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "type": "object",\n  "properties": {\n    "tss": {\n      "type": "array",\n      "description": "Public commitments to secret sharing polynomial",\n      "items": {\n        "type": "string",\n        "description": "Hex serialization of BLS12-381 G1 point in compressed form"\n      }\n    },\n    "members": {\n      "type": "array",\n      "description": "BLS12-381 pubkeys of QBFT members",\n      "items": {\n        "type": "string",\n        "description": "Hex serialization of BLS12-381 G1 point in compressed form"\n      }\n    },\n    "enrs": {\n      "type": "array",\n      "description": "Authorized ENRs",\n      "items": {\n        "type": "string",\n        "description": "Serialized ENR"\n      }\n    }\n  }\n}\n')),(0,a.kt)("p",null,"Example file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "tss": [\n        "87db49c4c40d89f2415cd10765a348df5233ce5cb5f6667cf023680517d494bece8289e047da2488c87bc84a22a3a229",\n        "8197ef68c97101e0c6f8f48c4883d2b6e948c79d6b23614220d7e6cb70b3b0473df64d20bd68539365c531e179ee9639",\n        "8d952cf7b27d4c8071eb8bdd3de39a279ceb801d3f6cc21b185535653f4c81d9546b0e3b5d010636abdb6291264c562b"\n    ],\n    "members": [\n        "b733fec0e82d482f44c9a3b1622b6f31343d37084825f7e338793ba253164e0f0c01af6bfb7ec8e3e93e5001fe0f6d4a",\n        "87bfd3fb2b1f3803b7879c3aefa19f74b659e4d54d4198503d94116110955beeef3ba3ba9b279b1155932286499fb91c",\n        "a675dd7fbf50e8d9d3c86e6895a18a2ef6f9d311d41afa965a0850688c06bffa0d5fa9495a49a26c1275ce16982796b7",\n        "914ca58d4e1d83659a8773d4c22e066fa965f992c11c957669d6ec7363281785b138723e139df4f86829252cd0c1a0b4"\n    ],\n    "enrs": [\n        "enr:-IS4QOFHbEmXaGJLA3SVlxzdIfl-GHj34whXBoZnjis8CB4xY0tmAOtrJLVe4DOTaovuPK-9w957RIAxI8DsXZM9k14BgmlkgnY0gmlwhLrX64GJc2VjcDI1NmsxoQI8CxcDw3mohnRxoOkL-nuxV-QdAk1Nm4Mw3klXkr4sSYN0Y3CCJpU=",\n        "enr:-IS4QIrcdKUzqmlKJDrxSdW4OJz2cW_cwrasXYc7bpEG4RouGmxOUj6R7K1RmtNyTPSR2v62nawk3b7QO8OwTJoD6w4BgmlkgnY0gmlwhMkEDBqJc2VjcDI1NmsxoQMmH-veW70QZOibI2-DUf5W4oqUTVIAnZugMX7vSwy7OoN0Y3CCJpU=",\n        "enr:-IS4QMCn5qdN7bodIX5rqJnKMblyf2qYqeQSCxXewLUkq7UfPKBi8bD8-ytGYF0GZGHWK8WQ3vTaqi610t-ofXw_4mwBgmlkgnY0gmlwhNCgZkWJc2VjcDI1NmsxoQPdLhVvXOOMFoqglBB9zDiJEiSwi7MIMHjyKB4o6Fdv_IN0Y3CCJpU=",\n        "enr:-IS4QKpNR_dnKMH28k46MHi5nXZBpSMWaBb_Bqy0sdOp72IKdXWdVxVND-ur-31qO1FhjalM5Uz2nkBE0968kKndse8BgmlkgnY0gmlwhEvZrWOJc2VjcDI1NmsxoQLiUs6XmW_0fVAhFYkQewDlLYvHrc3MOGCzy2tJQxBrBIN0Y3CCJpU="\n    ]\n}\n')),(0,a.kt)("p",null,"This manifest file is a work in progress, and intends to be standardised for operating distributed validators via the ",(0,a.kt)("a",{parentName:"p",href:"/docs/dvk/distributed-validator-keys#standardising-the-format-of-dvks"},"EIP process")," when appropriate."))}u.isMDXComponent=!0}}]);