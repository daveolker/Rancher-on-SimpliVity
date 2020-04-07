(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{258:function(e,a,n){"use strict";n.r(a);var o=n(28),t=Object(o.a)({},(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"load-balancer-configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#load-balancer-configuration"}},[e._v("#")]),e._v(" Load balancer configuration")]),e._v(" "),n("p",[e._v("The solution supports a number of load balancer configuration options:")]),e._v(" "),n("ul",[n("li",[e._v("Use the playbooks to configure two load balancers, for highly available, production deployments.")]),e._v(" "),n("li",[e._v("Use the playbooks to configure a single load balancer, useful for proof of concept deployments.")])]),e._v(" "),n("p",[e._v("When deploying two load balancers, a floating IP is deployed and managed by "),n("code",[e._v("keepalived")]),e._v(". Your settings\nfor "),n("code",[e._v("rancher.hostname")]),e._v(" and  "),n("code",[e._v("rancher.url")]),e._v(" variables should resolve to the address you chose for this floating IP.\nIf you configure a single load balancer, you don't need a floating IP and the "),n("code",[e._v("rancher.hostname")]),e._v(" should resolve\nto the IP of the standalone load balancer.")]),e._v(" "),n("h2",{attrs:{id:"deploying-two-load-balancers"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#deploying-two-load-balancers"}},[e._v("#")]),e._v(" Deploying two load balancers")]),e._v(" "),n("p",[e._v("With this option, two load balancers are deployed in an active-active configuration to provide highly-available access.\n")]),e._v(" "),n("p",[e._v("Two virtual machines are configured in the "),n("code",[e._v("hosts")]),e._v(" inventory file. You configure one of the VMs as the preferred VM\nfor hosting the internal VIP for the Rancher API, by adding "),n("code",[e._v("api_int_preferred=")]),e._v(" to the definition.")]),e._v(" "),n("p",[e._v("A sample configuration for deploying two load balancers is shown below. This extract from an Ansible "),n("code",[e._v("hosts")]),e._v("\ninventory file shows the entries defining the nodes used for the load balancers:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("[loadbalancer]\ngmcgr-lb1       ansible_host=10.15.163.96 api_int_preferred=true\ngmcgr-lb2       ansible_host=10.15.163.97\n")])])]),n("p",[e._v("This extract from the configuration file "),n("code",[e._v("group_vars/all/vars.yml")]),e._v(" shows the configuration required for\nthe two load balancer scenario:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("rancher_subnet: 10.15.163.0/24\n\nrancher:\n  url: https://rancher.gmcg-rancher.org\n  hostname: rancher.gmcg-rancher.org\n\nloadbalancers:\n  backend:\n    vip: 10.15.163.94/24\n    vrrp_router_id: 54\n    nginx_max_fails: 1\n    nginx_fail_timeout: 5s\n    nginx_proxy_timeout: 3s\n    nginx_proxy_connect_timeout: 2s\n")])])]),n("p",[e._v("The "),n("code",[e._v("vrrp_router_id")]),e._v(" is used to differentiate between multiple deployments\non the same networking infrastructure, for example, in proof of concepts. If you have multiple deployments, ensure that\neach deployment uses unique VRRP router IDs.")]),e._v(" "),n("p",[e._v("You must configure DNS to resolve the value of the "),n("code",[e._v("rancher.hostname")]),e._v(" (in this case "),n("code",[e._v("rancher.gmcg-rancher.org")]),e._v(")\nto the value of the "),n("code",[e._v("loadbalancers.backend.vip")]),e._v(" variable (in this case, "),n("code",[e._v("10.15.163.94")]),e._v("). Note that this VIP\naddress "),n("strong",[e._v("must")]),e._v(" be in the Rancher subnet and outside the DHCP range, like any other IP address in the hosts inventory.")]),e._v(" "),n("h2",{attrs:{id:"deploying-one-load-balancer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#deploying-one-load-balancer"}},[e._v("#")]),e._v(" Deploying one load balancer")]),e._v(" "),n("p",[e._v("If you do not require high availability, you can deploy a single load balancer to reduce complexity and resource\nrequirements. In this instance, you only specify a single entry in the "),n("code",[e._v("[loadbalancer]")]),e._v(" group in your "),n("code",[e._v("hosts")]),e._v(" file.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("[loadbalancer]\ngmcgr-lb1       ansible_host=10.15.163.96\n")])])]),n("p",[e._v("Simply comment out the "),n("code",[e._v("vip")]),e._v(" and "),n("code",[e._v("vrrp_router_id")]),e._v(" variables in\nthe "),n("code",[e._v("loadbalancers.backend")]),e._v(" structure. You must configure DNS to resolve the value of the "),n("code",[e._v("rancher.hostname")]),e._v("\n(in this case "),n("code",[e._v("rancher.gmcg-rancher.org")]),e._v(") to the value of the IP addess of the single load balancer VM (in this case\n"),n("code",[e._v("10.15.163.96")]),e._v(").")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("rancher_subnet: 10.15.163.0/24\n\nrancher:\n  url: https://rancher.gmcg-rancher.org\n  hostname: rancher.gmcg-rancher.org\n\nloadbalancers:\n  backend:\n#    vip: 10.15.163.94/24\n#    vrrp_router_id: 54\n    nginx_max_fails: 1\n    nginx_fail_timeout: 5s\n    nginx_proxy_timeout: 3s\n    nginx_proxy_connect_timeout: 2s\n")])])])])}),[],!1,null,null,null);a.default=t.exports}}]);