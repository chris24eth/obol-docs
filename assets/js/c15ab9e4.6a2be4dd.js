"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[4547],{3905:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=r.createContext({}),s=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},l=function(t){var e=s(t.components);return r.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,u=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:e},l),{},{components:n})):r.createElement(m,a({ref:e},l))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c.mdxType="string"==typeof t?t:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8130:function(t,e,n){n.r(e),n.d(e,{assets:function(){return l},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=["components"],c={},u="Quickstart Guides",s={unversionedId:"int/quickstart/index",id:"version-v0.11.0/int/quickstart/index",title:"Quickstart Guides",description:"Charon is in an early alpha state and is not ready to be run on mainnet",source:"@site/versioned_docs/version-v0.11.0/int/quickstart/index.md",sourceDirName:"int/quickstart",slug:"/int/quickstart/",permalink:"/docs/int/quickstart/",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.11.0/int/quickstart/index.md",tags:[],version:"v0.11.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Key concepts",permalink:"/docs/int/key-concepts"},next:{title:"Launchpad",permalink:"/docs/int/quickstart/group/quickstart-group-launchpad"}},l={},p=[],d={toc:p};function f(t){var e=t.components,n=(0,o.Z)(t,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"quickstart-guides"},"Quickstart Guides"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Charon is in an early alpha state and is not ready to be run on mainnet")),(0,i.kt)("p",null,"There are two ways to test out a distributed validator; on your own, by running all of the required software as containers within docker, or you can run a distributed validator with a group of other node operators, where you each run only one validator client and charon client, and the charon clients communicate with one another over the public internet to operate the distributed validator. The second manner requires each operator to open a port on the internet for all charon nodes to communicate with one another optimally. "),(0,i.kt)("p",null,"The following are guides to getting started with our template repositories. The intention is to support every combination of beacon clients and validator clients with compose files. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/int/quickstart/quickstart-alone"},"Running the full cluster alone.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/int/quickstart/group/quickstart-group-launchpad"},"Running one node in a cluster with a group of other node operators."))))}f.isMDXComponent=!0}}]);