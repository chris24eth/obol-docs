"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[4352],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),h=n,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return a?r.createElement(m,o(o({ref:t},c),{},{components:a})):r.createElement(m,o({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1031:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var r=a(3117),n=a(102),i=(a(7294),a(3905)),o=["components"],l={sidebar_position:5,description:"Run one node in a multi-operator distributed validator cluster"},s="Run a cluster with others",p={unversionedId:"int/quickstart/quickstart-group",id:"version-v0.9.0/int/quickstart/quickstart-group",title:"Run a cluster with others",description:"Run one node in a multi-operator distributed validator cluster",source:"@site/versioned_docs/version-v0.9.0/int/quickstart/quickstart-group.md",sourceDirName:"int/quickstart",slug:"/int/quickstart/quickstart-group",permalink:"/docs/v0.9.0/int/quickstart/quickstart-group",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.9.0/int/quickstart/quickstart-group.md",tags:[],version:"v0.9.0",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"Run one node in a multi-operator distributed validator cluster"},sidebar:"tutorialSidebar",previous:{title:"Run a cluster alone",permalink:"/docs/v0.9.0/int/quickstart/quickstart-alone"},next:{title:"Working groups",permalink:"/docs/v0.9.0/int/working-groups"}},c={},d=[{value:"Getting started with Charon",id:"getting-started-with-charon",level:2},{value:"Performing a Distributed Validator Key Generation Ceremony",id:"performing-a-distributed-validator-key-generation-ceremony",level:2},{value:"Verifying cluster health",id:"verifying-cluster-health",level:2},{value:"Activating the distributed validator",id:"activating-the-distributed-validator",level:2}],u={toc:d};function h(e){var t=e.components,l=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"run-a-cluster-with-others"},"Run a cluster with others"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Charon is in an early alpha state and is not ready to be run on mainnet")),(0,i.kt)("p",null,"To create a distributed validator cluster with a group of other node operators requires five key steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Every operator prepares their software and gets their charon client's ",(0,i.kt)("a",{parentName:"li",href:"/docs/v0.9.0/int/faq#what-is-an-enr"},"ENR")),(0,i.kt)("li",{parentName:"ul"},"One operator prepares the terms of the distributed validator key generation ceremony",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"They select the network, the withdrawal address, the number of 32 ether distributed validators to create, and the ENRs of each operator taking part in the ceremony."),(0,i.kt)("li",{parentName:"ul"},"In future, the DV launchpad will facilitate this process more seamlessly, with consent on the terms provided by all operators that participate."))),(0,i.kt)("li",{parentName:"ul"},"Every operator participates in the DKG ceremony, and once successful, a number of cluster artifacts are created, including:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The private key shares for each distributed validator"),(0,i.kt)("li",{parentName:"ul"},"The deposit data file containing deposit details for each distributed validator"),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"cluster-lock.json")," file which contains the finalised terms of this cluster required by charon to operate."))),(0,i.kt)("li",{parentName:"ul"},"Every operator starts their node with ",(0,i.kt)("inlineCode",{parentName:"li"},"charon run"),", and uses their monitoring to determine the cluster health and connectivity"),(0,i.kt)("li",{parentName:"ul"},"Once the cluster is confirmed to be healthy, deposit data files created during this process are activated on the ",(0,i.kt)("a",{parentName:"li",href:"https://launchpad.ethereum.org/"},"staking launchpad"),".")),(0,i.kt)("h2",{id:"getting-started-with-charon"},"Getting started with Charon"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Clone the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ObolNetwork/charon-distributed-validator-node"},"charon-distributed-validator-node")," template repository from Github, and ",(0,i.kt)("inlineCode",{parentName:"p"},"cd")," into the directory."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"# Clone the repo\ngit clone https://github.com/ObolNetwork/charon-distributed-validator-node.git\n\n# Change directory\ncd charon-distributed-validator-node/\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Next create a private key for charon to use for its ENR"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'# Create an ENR private key\ndocker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v0.9.0 create enr\n')),(0,i.kt)("p",{parentName:"li"},"This command will print your charon client's ENR to the console. It should look something like:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"Created ENR private key: .charon/charon-enr-private-key\nenr:-JG4QAgAOXjGFcTIkXBO30aUMzg2YSo1CYV0OH8Sf2s7zA2kFjVC9ZQ_jZZItdE8gA-tUXW-rWGDqEcoQkeJ98Pw7GaGAYFI7eoegmlkgnY0gmlwhCKNyGGJc2VjcDI1NmsxoQI6SQlzw3WGZ_VxFHLhawQFhCK8Aw7Z0zq8IABksuJEJIN0Y3CCPoODdWRwgj6E\n")),(0,i.kt)("admonition",{parentName:"li",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The ability to replace a deleted or compromised private key is limited at this point. Please make a secure backup of this private key if this distributed validator is important to you.  ")),(0,i.kt)("p",{parentName:"li"},"This record identifies your charon client no matter where it communicates from across the internet. It is required for the following step of creating a set of distributed validator private key shares amongst the cluster operators."),(0,i.kt)("p",{parentName:"li"},"Please make sure to make a backup of the private key at .charon/charon-enr-private-key. Be careful not to commit it to git! If you lose this file you won't be able to take part in the DKG ceremony."),(0,i.kt)("p",{parentName:"li"},"If you are taking part in an organised Obol testnet, submit the created ENR public address (the console output starting with and including ",(0,i.kt)("inlineCode",{parentName:"p"},"enr:-"),", not the contents of the private key file) to the appropriate typeform."))),(0,i.kt)("h2",{id:"performing-a-distributed-validator-key-generation-ceremony"},"Performing a Distributed Validator Key Generation Ceremony"),(0,i.kt)("p",null,"To create the private keys for a distributed validator securely, a Distributed Key Generation (DKG) process must take place."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After gathering each operators ENR and setting them in the ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file, one operator should prepare the ceremony with ",(0,i.kt)("inlineCode",{parentName:"p"},"charon create dkg")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'\n# First set the ENRs of all the operators participating in DKG ceremony in .env file as CHARON_OPERATOR_ENRS\n\n# Create .charon/cluster-definition.json to participate in DKG ceremony\ndocker run --rm -v "$(pwd):/opt/charon" --env-file .env obolnetwork/charon:v0.9.0 create dkg\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The operator that ran this command should distribute the resulting ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster-definition.json")," file to each operator.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"At a pre-agreed time, all operators run the ceremony program with the ",(0,i.kt)("inlineCode",{parentName:"p"},"charon dkg")," command"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'# Copy the cluster-definition.json file to .charon\ncp cluster-definition.json .charon/\n\n# Participate in DKG ceremony, this will create .charon/cluster-lock.json, .charon/deposit-data.json and .charon/validator_keys/\ndocker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v0.9.0 dkg\n')))),(0,i.kt)("h2",{id:"verifying-cluster-health"},"Verifying cluster health"),(0,i.kt)("p",null,"Once the key generation ceremony has been completed, the charon nodes have the data they need to come together to form a cluster."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"First you must prepare the required environment variables, in particular you need to set the ",(0,i.kt)("inlineCode",{parentName:"p"},"CHARON_BEACON_NODE_ENDPOINT")," variable to point at either a local or remote beacon node API endpoint. "),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"# Copy the sample environment variables\ncp .env.sample .env\n")),(0,i.kt)("p",{parentName:"li"},"For simplicities sake, this repo is configured to work with a remote Beacon node such as one from ",(0,i.kt)("a",{parentName:"p",href:"https://infura.io/"},"Infura"),"."),(0,i.kt)("p",{parentName:"li"},"Create an Eth2 project and copy the ",(0,i.kt)("inlineCode",{parentName:"p"},"https")," URL for the network you want to use (this repo expects ",(0,i.kt)("inlineCode",{parentName:"p"},"prater"),"):"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Example Infura API Endpoint",src:a(2183).Z,width:"2084",height:"616"})),(0,i.kt)("p",{parentName:"li"},"Replace the placeholder value of ",(0,i.kt)("inlineCode",{parentName:"p"},"CHARON_BEACON_NODE_ENDPOINT")," in your newly created ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file with this URL.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Start your distributed validator node with docker-compose"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"# Run a charon client, a vc client, and prom+grafana clients as containers\ndocker-compose up\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Use the pre-prepared ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:3000/"},"grafana")," dashboard to verify the cluster health looks okay. You should see connections with all other operators in the cluster as healthy, and observed ping times under 1 second for all connections."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"# Open Grafana\nopen http://localhost:3000/d/singlenode\n")),(0,i.kt)("p",{parentName:"li"},"If Grafana doesn't load any data the first time you open it, check ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ObolNetwork/charon-distributed-validator-node#grafana-doesnt-load-any-data"},"this method")," for fixing the issue. "))),(0,i.kt)("h2",{id:"activating-the-distributed-validator"},"Activating the distributed validator"),(0,i.kt)("p",null,"Once the cluster is healthy and fully connected, it is time to deposit the required 32 (test) ether to activate the newly created Distributed Validator."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Activate the validator on the testnet using the original ",(0,i.kt)("a",{parentName:"li",href:"https://prater.launchpad.ethereum.org/en/overview"},"staking launchpad")," site with the deposit data created at ",(0,i.kt)("inlineCode",{parentName:"li"},".charon/deposit-data.json"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If you use Mac OS, ",(0,i.kt)("inlineCode",{parentName:"li"},".charon"),' the default output folder, does not show up on the launchpad\'s "Upload Deposit Data" file picker. Rectify this by pressing ',(0,i.kt)("inlineCode",{parentName:"li"},"Command + Shift + . ")," (full stop). This should display hidden folders, allowing you to select the deposit file."),(0,i.kt)("li",{parentName:"ul"},"A more distributed validator friendly deposit interface is in the works for an upcoming release."))),(0,i.kt)("li",{parentName:"ol"},"This process takes approximately 16 hours for the deposit to be registered on the beacon chain. Future upgrades to the protocol aims to reduce this time."),(0,i.kt)("li",{parentName:"ol"},"Once the validator deposit is recognised on the beacon chain, the validator is assigned an index, and the wait for activation begins."),(0,i.kt)("li",{parentName:"ol"},"Finally, once the validator is activated, it should be monitored for to ensure it is achieving an inclusion distance of near 0, to ensure optimal rewards. You should also tweet the link to your newly activated validator with the hashtag ",(0,i.kt)("a",{parentName:"li",href:"https://twitter.com/search?q=%2523RunDVT"},"#RunDVT")," \ud83d\ude43")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Don't forget to be a good testnet steward and exit your validator when you are finished testing with it.")))}h.isMDXComponent=!0},2183:function(e,t,a){t.Z=a.p+"assets/images/example-infura-details-4f1f2822efecb29117f6e929380cf9aa.png"}}]);