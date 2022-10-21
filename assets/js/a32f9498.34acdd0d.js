"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[2191],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=p(r),d=o,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||i;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9132:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var n=r(3117),o=r(102),i=(r(7294),r(3905)),a=["components"],c={description:"Connectivity between Charon instances"},s="P2P interface",p={unversionedId:"dv/p2p-interface",id:"version-v0.10.1/dv/p2p-interface",title:"P2P interface",description:"Connectivity between Charon instances",source:"@site/versioned_docs/version-v0.10.1/dv/07_p2p-interface.md",sourceDirName:"dv",slug:"/dv/p2p-interface",permalink:"/docs/v0.10.1/dv/p2p-interface",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.10.1/dv/07_p2p-interface.md",tags:[],version:"v0.10.1",sidebarPosition:7,frontMatter:{description:"Connectivity between Charon instances"},sidebar:"tutorialSidebar",previous:{title:"Peer discovery",permalink:"/docs/v0.10.1/dv/peer-discovery"},next:{title:"Cluster Configuration",permalink:"/docs/v0.10.1/dv/distributed-validator-cluster-manifest"}},l={},u=[],f={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"p2p-interface"},"P2P interface"),(0,i.kt)("p",null,"The Charon P2P interface loosely follows the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/phase0/p2p-interface.md"},"Eth2 beacon P2P interface"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Transport: TCP over IPv4/IPv6."),(0,i.kt)("li",{parentName:"ul"},"Identity: ",(0,i.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-778"},"Ethereum Node Records"),". "),(0,i.kt)("li",{parentName:"ul"},"Handshake: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/libp2p/specs/tree/master/noise"},"noise-libp2p")," with ",(0,i.kt)("inlineCode",{parentName:"li"},"secp256k1")," keys.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Each charon client must have their ENR public key authorized in a ",(0,i.kt)("a",{parentName:"li",href:"/docs/v0.10.1/dv/distributed-validator-cluster-manifest"},"cluster-lock.json")," file in order for the client handshake to succeed."))),(0,i.kt)("li",{parentName:"ul"},"Discovery: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ethereum/devp2p/blob/master/discv5/discv5.md"},"Discv5"),".")))}d.isMDXComponent=!0}}]);