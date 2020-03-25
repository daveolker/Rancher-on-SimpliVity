# Proxy configuration


The Reference Configuration for Rancher on HPE SimpliVity
supports deploying Rancher in environments that require the use of a proxy to access the internet.
Configuration variables for the playbooks must be specified, while the Ansible controller itself must also
be properly configured.



## Proxy configuration variables

All variables related to proxy configuration are described in the table below.

|Variable|File|Description|
|:-------|:---|:----------|
|`http_proxy`|group_vars/all/vars.yml|Hostname or IP address of the HTTP proxy server and the proxy port number separated by a colon. For example: "http://web-proxy.hpecloud.org:8080".<br><br>Mandatory if proxy support is required.|
|`https_proxy`|group_vars/all/vars.yml|Hostname or IP address of the HTTP proxy server and the proxy port number separated by a colon. Typically, this is identical to the `http_proxy` value.<br><br>Mandatory if proxy support is required.|
|`no_proxy`|group_vars/all/vars.yml|A comma-separated list of hostnames, IP addresses, or network ranges that should bypass the proxy server. The list should include: localhost, the configured domain name used to deploy the OCP cluster, the DHCP subnet CIDR, and the vCenter hostname. <br><br>Mandatory if proxy support is required.|


A sample proxy configuration is provided in the file `group_vars/all/vars.yml.sample`:

```
#
# Proxy Configuration
#
#http_proxy: "http://web-proxy.hpecloud.org:8080"
#https_proxy: "http://web-proxy.hpecloud.org:8080"
#no_proxy: "localhost,.am2.cloudra.local,.rancher-url.org"
```



## Configuring the Ansible controller

The Ansible controller should be configured to match the proxy requirements for your environment. The only **required** proxy configuration on the Ansible node is to ensure that the solution playbooks can install any necessary software packages, such as a local HTTP server. This can be done, for example, by adding a proxy entry to the `/etc/dnf/dnf.conf` file or by setting system-wide proxy settings in the `/etc/environment` file.

The following is an example of how to configure a proxy server in the `/etc/dnf/dnf.conf` file:

```
[main]
gpgcheck=1
installonly_limit=3
clean_requirements_on_remove=True
best=False
skip_if_unavailable=True
proxy=http://web-proxy.hpecloud.org:8080
```
