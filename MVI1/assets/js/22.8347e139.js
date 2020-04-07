(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{273:function(e,t,a){"use strict";a.r(t);var n=a(28),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"pre-deployment-validation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pre-deployment-validation"}},[e._v("#")]),e._v(" Pre-deployment validation")]),e._v(" "),a("p",[e._v("You can validate configuration parameters via the "),a("code",[e._v("playbooks/pre-checks.yml")]),e._v(" playbook.\nThe playbook attempts to verify that the configuration parameters defined in the "),a("code",[e._v("group_vars/all/vars.yml")]),e._v(" and\n"),a("code",[e._v("group_vars/all/vault.yml")]),e._v(" files contain appropriate values. It validates access to the vCenter instance hosting the\nHPE SimpliVity cluster and verifies the requested "),a("code",[e._v("datacenter")]),e._v(" and "),a("code",[e._v("vm_portgroup")]),e._v(" exist. It checks that the\nconfigured DNS and NTP servers are valid. It also attempts to ensure the hostnames and IP addresses that will be used\nwhen creating the RKE admin cluster (defined in the "),a("code",[e._v("hosts.yml")]),e._v(" file) are not already being used\nelsewhere in the environment.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ cd ~/Rancher-on-SimpliVity\n$ ansible-playbook -i hosts playbooks/pre-checks.yml\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);