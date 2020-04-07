(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{266:function(e,t,o){"use strict";o.r(t);var a=o(28),l=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"ansible-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ansible-configuration"}},[e._v("#")]),e._v(" Ansible configuration")]),e._v(" "),o("p",[e._v("On the Ansible node, retrieve the latest version of the playbooks using Git.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("$ cd ~\n\n$ git clone https://github.com/HewlettPackard/Rancher-on-SimpliVity.git\n")])])]),o("p",[e._v("Change to the directory that was created using the "),o("code",[e._v("git clone")]),e._v(" command:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("$ cd ~/Rancher-on-SimpliVity\n")])])]),o("p",[o("strong",[e._v("Note:")]),e._v(" All subsequent file names are relative to the Rancher-on-SimpliVity directory, except where explicitly stated. For example, the Ansible inventory file "),o("code",[e._v("hosts")]),e._v(" is located in the top-level "),o("code",[e._v("~/Rancher-on-SimpliVity")]),e._v(" while "),o("code",[e._v("group_vars/all/vars.yml")]),e._v(" corresponds to "),o("code",[e._v("~/Rancher-on-SimpliVity/group_vars/all/vars.yml")]),e._v(".")]),e._v(" "),o("p",[e._v("You now need to prepare the configuration to match your own environment, prior to deploying Rancher. To do so, you will need to create and populate a number of files including:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("hosts")]),e._v(" - the inventory file")]),e._v(" "),o("li",[o("code",[e._v("group_vars/all/vars.yml")]),e._v(" - the group variables file used by all playbooks and roles")]),e._v(" "),o("li",[o("code",[e._v("group_vars/all/vault.yml")]),e._v(" - the global vault file containing sensitive information that needs to be protected")])]),e._v(" "),o("p",[e._v("The following sections will guide you through the various configuration options. To get you started, corresponding sample files that you can use as a basis for your configuration are available at")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("hosts.sample")])]),e._v(" "),o("li",[o("code",[e._v("group_vars/all/vars.sample")])]),e._v(" "),o("li",[o("code",[e._v("group_vars/all/vault.sample")])])])])}),[],!1,null,null,null);t.default=l.exports}}]);