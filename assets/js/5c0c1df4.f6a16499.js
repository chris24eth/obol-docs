"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[80765],{77940:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=n(74848),i=n(28453);const r={sidebar_position:2,description:"Add monitoring credentials to help the Obol Team monitor the health of your cluster"},o="Monitoring your Node",a={id:"advanced/monitoring",title:"Monitoring your Node",description:"Add monitoring credentials to help the Obol Team monitor the health of your cluster",source:"@site/versioned_docs/version-v1.0.0/advanced/monitoring.md",sourceDirName:"advanced",slug:"/advanced/monitoring",permalink:"/docs/v1.0.0/advanced/monitoring",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v1.0.0/advanced/monitoring.md",tags:[],version:"v1.0.0",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Add monitoring credentials to help the Obol Team monitor the health of your cluster"},sidebar:"tutorialSidebar",previous:{title:"Enable MEV",permalink:"/docs/v1.0.0/advanced/quickstart-builder-api"},next:{title:"Push Metrics to Obol Monitoring",permalink:"/docs/v1.0.0/advanced/obol-monitoring"}},d={},c=[{value:"Setting Up a Contact Point",id:"setting-up-a-contact-point",level:2},{value:"Best Practices for Monitoring Charon Nodes &amp; Cluster",id:"best-practices-for-monitoring-charon-nodes--cluster",level:2},{value:"Third-Party Services for Uptime Testing",id:"third-party-services-for-uptime-testing",level:2},{value:"Key metrics to watch to verify node health based on jobs",id:"key-metrics-to-watch-to-verify-node-health-based-on-jobs",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"monitoring-your-node",children:"Monitoring your Node"})}),"\n",(0,s.jsxs)(t.p,{children:["This comprehensive guide will assist you in effectively monitoring your Charon clusters and setting up alerts by running your own Prometheus and Grafana server. If you want to use Obol\u2019s ",(0,s.jsx)(t.a,{href:"https://grafana.monitoring.gcp.obol.tech/d/d895e47a-3c2d-46b7-9b15-8f31202681af/clusters-aggregate-view?orgId=6",children:"public dashboard"})," instead of running your servers, refer to ",(0,s.jsx)(t.a,{href:"/docs/v1.0.0/advanced/obol-monitoring",children:"this section"})," in Obol docs that teaches you how to push Prometheus metrics to Obol."]}),"\n",(0,s.jsxs)(t.p,{children:["To explain quickly, Prometheus generates the metrics and Grafana visualizes them. To learn more about Prometheus and Grafana, visit ",(0,s.jsx)(t.a,{href:"https://grafana.com/docs/grafana/latest/getting-started/get-started-grafana-prometheus/",children:"here"}),". If you are using ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"https://github.com/ObolNetwork/charon-distributed-validator-node",children:"CDVN repository"})})," or ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"https://github.com/ObolNetwork/charon-distributed-validator-cluster",children:"CDVC repository"})}),", then Prometheus and Grafana are part of docker compose file and will be installed when you run ",(0,s.jsx)(t.code,{children:"docker compose up"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"The local Grafana server will have a few pre-built dashboards:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Charon Overview"}),"\n",(0,s.jsxs)(t.p,{children:["This is the main dashboard that provides all the relavant details about the Charon node, for example - peer connectivity, duty completion, health of beacon node and downstream validator, etc. To open, navigate to ",(0,s.jsx)(t.code,{children:"charon-distributed-validator-node"})," directory and open the following ",(0,s.jsx)(t.code,{children:"uri"}),"  in the browser ",(0,s.jsx)(t.code,{children:"http://localhost:3000/d/d6qujIJVk/"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Single Charon Node Dashboard (deprecated)"}),"\n",(0,s.jsx)(t.p,{children:"This is an older dashboard Charon node monitoring which is now deprecated. If you are still using it, we would highly recommend to move to Charon Overview for most up to date panels."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Charon Log Dashboard"}),"\n",(0,s.jsxs)(t.p,{children:["This dashboard can be used to query the logs emitted while running your Charon node. It utilises ",(0,s.jsx)(t.a,{href:"https://grafana.com/oss/loki/",children:"Grafana Loki"}),". This dashboard is not active by default and should only be used in debug mode. Refer to ",(0,s.jsx)(t.a,{href:"./adv-docker-configs",children:"advanced docker config"})," section on how to set up a debug mode."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Alert Name"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Troubleshoot"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ClusterBeaconNodeDown"}),(0,s.jsx)(t.td,{children:"This alert is activated when the beacon node in a the cluster is offline. The beacon node is crucial for validating transactions and producing new blocks. Its unavailability could disrupt the overall functionality of the cluster."}),(0,s.jsx)(t.td,{children:"Most likely data is corrupted. Wipe data from the point you know data was corrupted and restart beacon node so it can be synced again."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ClusterMissedAttestations"}),(0,s.jsx)(t.td,{children:"This alert indicates that there have been missed attestations in the cluster. Missed attestations may suggest that validators are not operating correctly, compromising the security and efficiency of the cluster."}),(0,s.jsxs)(t.td,{children:["This alert is triggered when 3 attestation are missed in 2 minutes. Check if the minimum threshold of peers are online. If correct, check for beacon node API errors and downstream validator errors using Loki. Lastly, debug from Docker using ",(0,s.jsx)(t.code,{children:"docker compose debug"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ClusterInUnknownStatus"}),(0,s.jsxs)(t.td,{children:["This alert is designed to activate when a node within the cluster is detected to be in an unknown state. The condition is evaluated by checking whether the maximum of the ",(0,s.jsx)(t.code,{children:"app_monitoring_readyz"})," metric is 0."]}),(0,s.jsxs)(t.td,{children:["This is most likely a bug in Charon. Report to us via ",(0,s.jsx)(t.a,{href:"https://discord.com/channels/849256203614945310/970759460693901362",children:"Discord"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ClusterInsufficientPeers"}),(0,s.jsxs)(t.td,{children:["This alert is set to activate when the number of peers for a node in the cluster is insufficient. The condition is evaluated by checking whether the maximum of the ",(0,s.jsx)(t.code,{children:"app_monitoring_readyz"})," equals 4."]}),(0,s.jsx)(t.td,{children:"If you are running group cluster, check with other peers to troubleshoot the issue. If you are running solo cluster, look into other machines running the DVs to find the problem."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ClusterFailureRate"}),(0,s.jsx)(t.td,{children:"This alert is activated when the failure rate of the cluster exceeds a certain threshold, more specifically - more than 5% failures in duties in the last 6 hours."}),(0,s.jsx)(t.td,{children:"Check the upstream and downstream dependencies, latency and hardware issues."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ClusterVCMissingValidators"}),(0,s.jsx)(t.td,{children:"This alert is activated if any validators in the cluster are missing. This happens when validator client cannot load validator keys in the past 10 minutes."}),(0,s.jsx)(t.td,{children:"Find if validator keys are missing and load them."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ClusterHighPctFailedSyncMsgDuty"}),(0,s.jsx)(t.td,{children:'This alert is activated if a high percentage of sync message duties failed in the cluster. The alert is activated if the sum of the increase in failed duties tagged with "sync_message" in the last hour divided by the sum of the increase in total duties tagged with "sync_message" in the last hour is greater than 10%.'}),(0,s.jsx)(t.td,{children:"This may be due to limitations in beacon node performance on nodes within the cluster. In charon, this duty is the most demanding, however, an increased failure rate does not impact rewards."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ClusterNumConnectedRelays"}),(0,s.jsx)(t.td,{children:"This alert is activated if the number of connected relays in the cluster falls to 0."}),(0,s.jsxs)(t.td,{children:["Make sure correct relay is configured. If you still get the error report to us via ",(0,s.jsx)(t.a,{href:"https://discord.com/channels/849256203614945310/970759460693901362",children:"Discord"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"PeerPingLatency"}),(0,s.jsx)(t.td,{children:"This alert is activated if the 90th percentile of the ping latency to the peers in a cluster exceeds 400ms within 2 minutes."}),(0,s.jsx)(t.td,{children:"Make sure to set up stable and high speed internet connection. If you have geographically distributed nodes, make sure latency does not go over 250 ms."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ClusterBeaconNodeZeroPeers"}),(0,s.jsx)(t.td,{children:"This alert is activated when beacon node cannot find peers."}),(0,s.jsx)(t.td,{children:"Go to docs of beacon node client to troubleshoot. Make sure there is no port overlap and p2p discovery is open."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"setting-up-a-contact-point",children:"Setting Up a Contact Point"}),"\n",(0,s.jsx)(t.p,{children:"When alerts are triggered, they are routed to contact points according notification policies. For this, contact points must be added. Grafana supports several kind of contact points like email, PagerDuty, Discord, Slack, Telegram etc. This document will teach how to add Discord channel as contact point."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["On left nav bar in Grafana console, under ",(0,s.jsx)(t.code,{children:"Alerts"}),"  section, click on contact points."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Click on ",(0,s.jsx)(t.code,{children:"+ Add contact point"}),". It will show following page. Choose Discord in the  ",(0,s.jsx)(t.code,{children:"Integration"})," drop down."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"AlertsContactPoint",src:n(16626).A+"",width:"2256",height:"1264"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Give a descriptive name to the alert. Create a channel in Discord and copy its ",(0,s.jsx)(t.code,{children:"webhook url"}),".  Once done, click ",(0,s.jsx)(t.code,{children:"Save contact point"})," to finish."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["When the alerts are fired, it will send without filling in the variables for cluster detail. For example, ",(0,s.jsx)(t.code,{children:"cluster_hash"})," variable is missing here ",(0,s.jsx)(t.code,{children:"cluster_hash = {{.cluster_hash}}"}),". This is done to save disk space. To find the details, use ",(0,s.jsx)(t.code,{children:"docker compose -f docker-compose.yml -f compose-debug.yml up"}),". More description ",(0,s.jsx)(t.a,{href:"https://docs.obol.tech/docs/advanced/adv-docker-configs",children:"here"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"best-practices-for-monitoring-charon-nodes--cluster",children:"Best Practices for Monitoring Charon Nodes & Cluster"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Establish Baselines"}),": Familiarize yourself with the normal operation metrics like CPU, memory, and network usage. This will help you detect anomalies."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Define Key Metrics"}),": Set up alerts for essential metrics, encompassing both system-level and Charon-specific ones."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Configure Alerts"}),": Based on these metrics, set up actionable alerts."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Monitor Network"}),": Regularly assess the connectivity between nodes and the network."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Perform Regular Health Checks"}),": Consistently evaluate the status of your nodes and clusters."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Monitor System Logs"}),": Keep an eye on logs for error messages or unusual activities."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Assess Resource Usage"}),": Ensure your nodes are neither over- nor under-utilized."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Automate Monitoring"}),": Use automation to ensure no issues go undetected."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Conduct Drills"}),": Regularly simulate failure scenarios to fine-tune your setup."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Update Regularly"}),": Keep your nodes and clusters updated with the latest software versions."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"third-party-services-for-uptime-testing",children:"Third-Party Services for Uptime Testing"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://updown.io/",children:"updown.io"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://grafana.com/grafana/plugins/grafana-synthetic-monitoring-app/",children:"Grafana synthetic Monitoring"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"key-metrics-to-watch-to-verify-node-health-based-on-jobs",children:"Key metrics to watch to verify node health based on jobs"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"CPU Usage"}),": High or spiking CPU usage can be a sign of a process demanding more resources than it should."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Memory Usage"}),": If a node is consistently running out of memory, it could be due to a memory leak or simply under-provisioning."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Disk I/O"}),": Slow disk operations can cause applications to hang or delay responses. High disk I/O can indicate storage performance issues or a sign of high load on the system."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Network Usage"}),": High network traffic or packet loss can signal network configuration issues, or that a service is being overwhelmed by requests."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Disk Space"}),": Running out of disk space can lead to application errors and data loss."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Uptime"}),": The amount of time a system has been up without any restarts. Frequent restarts can indicate instability in the system."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Error Rates"}),": The number of errors encountered by your application. This could be 4xx/5xx HTTP errors, exceptions, or any other kind of error your application may log."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Latency"}),": The delay before a transfer of data begins following an instruction for its transfer."]}),"\n",(0,s.jsx)(t.p,{children:"It is also important to check:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"NTP clock skew;"}),"\n",(0,s.jsxs)(t.li,{children:["Process restarts and failures (eg. through\xa0",(0,s.jsx)(t.code,{children:"node_systemd"}),");"]}),"\n",(0,s.jsx)(t.li,{children:"Alert on high error and panic log counts."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},16626:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/AlertsContactPoint-b505f7bd1bf40fe70c6be5c80fecffc7.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var s=n(96540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);