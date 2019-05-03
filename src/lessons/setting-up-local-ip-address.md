---
slug: '/setting-up-local-ip-address'
title: 'Setting Up a Local IP Address'
---

## Objectives and Overview

This lesson briefly outlines the differences between _dynamic_ and _static_ local IP addresses. Additionally, you'll work through an activity to set a static IP address for your Raspberry Pi.

### Lesson Objectives

- Understand and explain the differences between a dynamic and static local IP address.
- Demonstrate the ability to set a static IP address for a Raspberry Pi.

---

## Static vs. Dynamic Local IP Addresses

When you connect your Pi to the local network - such as the WiFi in your learning environment - your local IP address may be different each time. This is because the IP address is _dynamic_, which means that it changes. In order to have some consistency, you’re going to need to configure it to be static, which means unchanging. This will save you from needing to use `ifconfig` to determine your Pi’s local IP each time you connect to the network. The process is straightforward, so let’s jump in.

## Activity: Setting Up a Static IP Address

You’re going to use the nano editor to make some configuration changes. Using the `nano` command opens a file and allows you to quickly edit it. You’ll be working with an existing file, so this allows you to open the file and make some quick changes.

### Steps:

1.  Open the command prompt on your Pi
2.  Use the following command: `sudo nano /etc/dhcpcd.conf`
    - You need admin access to edit this file, so you have to prefix your command with `sudo`
3.  This opens the _dhcpcd.conf_ file in nano and allows you to edit it
    - The _dhcpcd.conf_ file is the configuration file for the DHCP client — this configuration handles a lot of the resolution of IP address related tasks

The next several steps come from the archived [Raspberry Pi Foundation Networking Lesson: Setting Up a Static Local IP](https://github.com/raspberrypilearning/networking-lessons/blob/master/rpi-static-ip-address.md)

4. Navigate to the end of the _dhcpcd.conf_ file and add the following code:

```
interface eth0

static ip_address=192.168.0.2/24
static routers=192.168.0.1
static domain_name_servers=192.168.0.1

interface wlan0

static ip_address=192.168.0.2/24
static routers=192.168.0.1
static domain_name_servers=192.168.0.1
```

5. Save the file by typing `ctrl + o` and exit nano with `ctrl + x`

Your Pi will now boot to 192.168.0.2.

### Notes About this Activity

The previous activity referenced the Raspberry Pi article. This tutorial contained great explanations and steps for configuring your static local IP address, but it's been archived.

## Wrapping Up

Before moving on to the next lesson, let's make sure to test that your Pi works and that the IP address remains static:

1. Reboot your Pi by typing `sudo reboot` into the terminal
   - This reboots your Pi. Only do this **AFTER** you’ve saved the changes to the _dhcpcd.conf_ file!
2. Open terminal again and enter the command: `ip a`

You should now see the IP address you set in the `eth0:` or `wlan0` entry.
