"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[68822],{36484:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var n=i(74848),s=i(28453);const r={sidebar_position:2,description:"Some of the key terms in the field of Distributed Validator Technology"},d="Key concepts",o={id:"int/key-concepts",title:"Key concepts",description:"Some of the key terms in the field of Distributed Validator Technology",source:"@site/versioned_docs/version-v1.0.0/int/key-concepts.md",sourceDirName:"int",slug:"/int/key-concepts",permalink:"/docs/v1.0.0/int/key-concepts",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v1.0.0/int/key-concepts.md",tags:[],version:"v1.0.0",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Some of the key terms in the field of Distributed Validator Technology"},sidebar:"tutorialSidebar",previous:{title:"Overview of Obol",permalink:"/docs/v1.0.0/int/Overview"},next:{title:"Quickstart Overview",permalink:"/docs/v1.0.0/start/quickstart_overview"}},l={},a=[{value:"Distributed validator",id:"distributed-validator",level:2},{value:"Distributed Validator Node",id:"distributed-validator-node",level:2},{value:"Execution Client",id:"execution-client",level:3},{value:"Consensus Client",id:"consensus-client",level:3},{value:"Distributed Validator Client",id:"distributed-validator-client",level:3},{value:"Validator Client",id:"validator-client",level:3},{value:"Distributed Validator Cluster",id:"distributed-validator-cluster",level:2},{value:"Distributed Validator Key",id:"distributed-validator-key",level:3},{value:"Distributed Validator Key Share",id:"distributed-validator-key-share",level:3},{value:"Distributed Validator Threshold",id:"distributed-validator-threshold",level:3},{value:"Distributed Validator Key Generation Ceremony",id:"distributed-validator-key-generation-ceremony",level:3}];function c(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"key-concepts",children:"Key concepts"})}),"\n",(0,n.jsx)(t.p,{children:"This page outlines a number of the key concepts behind the various technologies that Obol is developing."}),"\n",(0,n.jsx)(t.h2,{id:"distributed-validator",children:"Distributed validator"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"A Distributed Validator",src:i(717).A+"",width:"1200",height:"630"})}),"\n",(0,n.jsxs)(t.p,{children:["A distributed validator is an Ethereum proof-of-stake validator that runs on more than one node/machine. This functionality is possible with the use of ",(0,n.jsx)(t.strong,{children:"Distributed Validator Technology"})," (DVT)."]}),"\n",(0,n.jsx)(t.p,{children:"Distributed validator technology removes some of the single points of failure in validation. Should <33% of the participating nodes in a DV cluster go offline, the remaining active nodes can still come to consensus on what to sign and can produce valid signatures for their staking duties. This is known as Active/Active redundancy, a common pattern for minimizing downtime in mission critical systems.\n\u200b"}),"\n",(0,n.jsx)(t.h2,{id:"distributed-validator-node",children:"Distributed Validator Node"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"A Distributed Validator Node",src:i(73343).A+"",width:"1200",height:"630"})}),"\n",(0,n.jsxs)(t.p,{children:["A distributed validator node is the set of clients an operator needs to configure and run to fulfil the duties of a Distributed Validator Operator. An operator may also run redundant execution and consensus clients, an execution payload relayer like ",(0,n.jsx)(t.a,{href:"https://github.com/flashbots/mev-boost",children:"mev-boost"}),", or other monitoring or telemetry services on the same hardware to ensure optimal performance."]}),"\n",(0,n.jsx)(t.p,{children:"In the above example, the stack includes Geth, Lighthouse, Charon and Teku."}),"\n",(0,n.jsx)(t.h3,{id:"execution-client",children:"Execution Client"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"A Geth Client",src:i(89527).A+"",width:"1200",height:"630"})}),"\n",(0,n.jsx)(t.p,{children:"An execution client (formerly known as an Eth1 client) specializes in running the EVM and managing the transaction pool for the Ethereum network. These clients provide execution payloads to consensus clients for inclusion into blocks."}),"\n",(0,n.jsx)(t.p,{children:"Examples of execution clients include:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://geth.ethereum.org/",children:"Go-Ethereum"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.nethermind.io/",children:"Nethermind"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/ledgerwatch/erigon",children:"Erigon"})}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"consensus-client",children:"Consensus Client"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"A Geth Client",src:i(77778).A+"",width:"1200",height:"630"})}),"\n",(0,n.jsx)(t.p,{children:"A consensus client's duty is to run the proof of stake consensus layer of Ethereum, often referred to as the beacon chain."}),"\n",(0,n.jsx)(t.p,{children:"Examples of Consensus clients include:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.prylabs.network/docs/how-prysm-works/beacon-node",children:"Prysm"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.teku.consensys.net/en/stable/",children:"Teku"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://lighthouse-book.sigmaprime.io/api-bn.html",children:"Lighthouse"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://nimbus.guide/",children:"Nimbus"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/ChainSafe/lodestar",children:"Lodestar"})}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"distributed-validator-client",children:"Distributed Validator Client"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"A Charon Client",src:i(44831).A+"",width:"1200",height:"630"})}),"\n",(0,n.jsxs)(t.p,{children:["A distributed validator client intercepts the validator client \u2194 consensus client communication flow over the ",(0,n.jsx)(t.a,{href:"https://ethereum.github.io/beacon-APIs/#/ValidatorRequiredApi",children:"standardised REST API"}),", and focuses on two core duties:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Coming to consensus on a candidate duty for all validators to sign."}),"\n",(0,n.jsx)(t.li,{children:"Combining signatures from all validators into a distributed validator signature."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["The only example of a distributed validator client built with a non-custodial middleware architecture to date is ",(0,n.jsx)(t.a,{href:"../charon/intro",children:"Charon"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"validator-client",children:"Validator Client"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"A Lighthouse Client",src:i(73432).A+"",width:"1200",height:"630"})}),"\n",(0,n.jsx)(t.p,{children:"A validator client is a piece of code that operates one or more Ethereum validators."}),"\n",(0,n.jsx)(t.p,{children:"Examples of validator clients include:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.attestant.io/posts/introducing-vouch/",children:"Vouch"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.prylabs.network/docs/how-prysm-works/prysm-validator-client/",children:"Prysm"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.teku.consensys.net/en/stable/",children:"Teku"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://lighthouse-book.sigmaprime.io/api-vc.html",children:"Lighthouse"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"distributed-validator-cluster",children:"Distributed Validator Cluster"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"A Distributed Validator Cluster",src:i(56629).A+"",width:"1200",height:"630"})}),"\n",(0,n.jsx)(t.p,{children:"A distributed validator cluster is a collection of distributed validator nodes connected together to service a set of distributed validators generated during a DVK ceremony."}),"\n",(0,n.jsx)(t.h3,{id:"distributed-validator-key",children:"Distributed Validator Key"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"A Distributed Validator Key",src:i(87011).A+"",width:"1200",height:"630"})}),"\n",(0,n.jsx)(t.p,{children:"A distributed validator key is a group of BLS private keys, that together operate as a threshold key for participating in proof of stake consensus."}),"\n",(0,n.jsx)(t.h3,{id:"distributed-validator-key-share",children:"Distributed Validator Key Share"}),"\n",(0,n.jsx)(t.p,{children:"One piece of the distributed validator private key."}),"\n",(0,n.jsx)(t.h3,{id:"distributed-validator-threshold",children:"Distributed Validator Threshold"}),"\n",(0,n.jsx)(t.p,{children:"The number of nodes in a cluster that needs to be online and honest for their distributed validators to be online is outlined in the following table."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Cluster Size"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Threshold"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Note"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"4"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"3/4"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Minimum threshold"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"5"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"4/5"}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"6"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"4/6"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Minimum to tolerate two offline nodes"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"7"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"5/7"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Minimum to tolerate two ",(0,n.jsx)(t.strong,{children:"malicious"})," nodes"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"8"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"6/8"}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"9"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"6/9"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Minimum to tolerate three offline nodes"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"10"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"7/10"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Minimum to tolerate three ",(0,n.jsx)(t.strong,{children:"malicious"})," nodes"]})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"distributed-validator-key-generation-ceremony",children:"Distributed Validator Key Generation Ceremony"}),"\n",(0,n.jsx)(t.p,{children:"To achieve fault tolerance in a distributed validator, the individual private key shares need to be generated together. Rather than have a trusted dealer produce a private key, split it and distribute it, the preferred approach is to never construct the full private key at any point, by having each operator in the distributed validator cluster participate in what is known as a Distributed Key Generation ceremony."}),"\n",(0,n.jsxs)(t.p,{children:["A distributed validator key generation ceremony is a type of DKG ceremony. A ceremony produces signed validator deposit and exit data, along with all of the validator key shares and their associated metadata. Read more about these ceremonies ",(0,n.jsx)(t.a,{href:"../charon/dkg",children:"here"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},717:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/32Eth-cb753aaa3c05ea0dfd8f3931560e8dbc.png"},44831:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/CharonBrick-b3dd387a297ec185950d68f3926df674.png"},56629:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/DVCluster-d161355b3dfd1808a86148c8fe28271e.png"},73343:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/DVNode-198d4144347989babb813893bbd5e19d.png"},77778:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/POSClient-79b14193fccdf5ddecfa407e6d6da782.png"},89527:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/POWNodeV2-466e5d9b230f25737437ca8ca8ec1231.png"},87011:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/ThresholdSigning-c5c0f9d305f9438c8ff5dc7f3e7d0eab.png"},73432:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/ValidatorBrick-16d3ee183477cc43cc4c620178ed900d.png"},28453:(e,t,i)=>{i.d(t,{R:()=>d,x:()=>o});var n=i(96540);const s={},r=n.createContext(s);function d(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);