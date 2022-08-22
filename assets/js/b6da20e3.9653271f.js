"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[2497],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),f=c(n),p=i,m=f["".concat(l,".").concat(p)]||f[p]||u[p]||o;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6624:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={description:"Documenting a Distributed Validator Cluster in a standardised file format"},l="Cluster Configuration",c={unversionedId:"dv/distributed-validator-cluster-manifest",id:"version-v0.6.1/dv/distributed-validator-cluster-manifest",title:"Cluster Configuration",description:"Documenting a Distributed Validator Cluster in a standardised file format",source:"@site/versioned_docs/version-v0.6.1/dv/08_distributed-validator-cluster-manifest.md",sourceDirName:"dv",slug:"/dv/distributed-validator-cluster-manifest",permalink:"/docs/v0.6.1/dv/distributed-validator-cluster-manifest",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.6.1/dv/08_distributed-validator-cluster-manifest.md",tags:[],version:"v0.6.1",sidebarPosition:8,frontMatter:{description:"Documenting a Distributed Validator Cluster in a standardised file format"},sidebar:"tutorialSidebar",previous:{title:"P2P interface",permalink:"/docs/v0.6.1/dv/p2p-interface"},next:{title:"Charon CLI reference",permalink:"/docs/v0.6.1/dv/charon_cli_reference"}},d={},u=[{value:"Cluster Configuration Files",id:"cluster-configuration-files",level:2}],f={toc:u};function p(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cluster-configuration"},"Cluster Configuration"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"These cluster definition and cluster lock files are a work in progress. The intention is for the files to be standardised for operating distributed validators via the ",(0,o.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/"},"EIP process")," when appropriate.")),(0,o.kt)("p",null,"This document describes the configuration options for running a charon client (or cluster) locally or in production."),(0,o.kt)("h2",{id:"cluster-configuration-files"},"Cluster Configuration Files"),(0,o.kt)("p",null,"A charon cluster is configured in two steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cluster-definition.json")," which defines the intended cluster configuration before keys have been created in a distributed key generation ceremony."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cluster-lock.json")," which includes and extends ",(0,o.kt)("inlineCode",{parentName:"li"},"cluster-definition.json")," with distributed validator BLS public key shares.")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"charon create dkg")," command is used to create ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster-definition.json")," file which is used as input to ",(0,o.kt)("inlineCode",{parentName:"p"},"charon dkg"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"charon create cluster")," command combines both steps into one and just outputs the final ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster-lock.json")," without a DKG step."),(0,o.kt)("p",null,"The schema of the ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster-definition.json")," is defined as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": "v1.0.0",                  // Schema version\n  "num_validators": 100,                // Number of validators to create in cluster.lock\n  "threshold": 3,                       // Optional threshold required for signature reconstruction\n  "uuid": "1234-abcdef-1234-abcdef",    // Random unique identifier\n  "name": "best cluster",               // Optional name field, cosmetic.\n  "fee_recipient_address":"0x123..abfc",// ETH1 fee_recipient address\n  "withdrawal_address": "0x123..abfc",  // ETH1 withdrawal address\n  "algorithm": "foo_dkg_v1" ,           // Optional DKG algorithm\n  "fork_version": "0x00112233",         // Fork version lock, enum of known values\n  "operators": [\n    {\n      "address": "0x123..abfc",         // ETH1 operator identify address\n      "enr": "enr://abcdef...12345",    // charon client ENR\n      "signature": "123456...abcdef",   // Signature of enr by ETH1 address priv key\n      "nonce": 1                        // Nonce of signature\n    }\n  ],\n  "definition_hash": "abcdef...abcedef",// Hash of above field (except free text)\n  "operator_signatures": [              // Operator signatures (seals) of definition hash\n    "123456...abcdef",\n    "123456...abcdef"\n  ]\n}\n')),(0,o.kt)("p",null,"The above ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster-definition.json")," is provided as input to the DKG which generates keys and the ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster-lock.json")," file."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster-lock.json")," has the following schema:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "cluster_definition": {...},                              // Cluster definiition json, identical schema to above,\n  "distributed_validators": [                               // Length equaled to num_validators.\n    {\n      "distributed_public_key":  "0x123..abfc",             // DV root pubkey\n      "threshold_verifiers": [ "oA8Z...2XyT", "g1q...icu"], // length of threshold\n      "fee_recipient": "0x123..abfc"                        // Defaults to withdrawal address if not set, can be edited manually\n    }\n  ],\n  "lock_hash": "abcdef...abcedef",                          // Config_hash plus distributed_validators\n  "signature_aggregate": "abcdef...abcedef"                 // BLS aggregate signature of the lock hash signed by each DV pubkey.\n}\n')))}p.isMDXComponent=!0}}]);