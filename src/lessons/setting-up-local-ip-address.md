---
slug: '/setting-up-local-ip-address'
title: 'Setting Up a Local IP Address'
---

## Objectives and Overview

This lesson briefly outlines the differences between _dynamic_ and _static_ local IP addresses. Additionally, you'll work through an activity to set a static IP address for your Raspberry Pi.

### Lesson Objectives

- Understand and explain the differences between a dynamic and static local IP address.
- Demonstrate the ability to set a static IP address for a Raspberry Pi.

### CSTA Standards

- **2-CS-02** - Design projects that combine hardware and software components to collect and exchange data.
- **2-NI-04** - Model the role of protocols in transmitting data across networks and the Internet

---

## Static vs. Dynamic Local IP Addresses

When you connect your Pi to the local network - such as the WiFi in your learning environment - your local IP address may be different each time. This is because the IP address is _dynamic_, which means that it changes. In order to have some consistency, you’re going to need to configure it to be static, which means unchanging. This will save you from needing to use `ifconfig` to determine your Pi’s local IP each time you connect to the network. The process is straightforward, so let’s jump in.

## Activity: Setting Up a Static IP Address

You’re going to use the nano editor to make some configuration changes. Remember, the nano command opens a file and allows you to
edit it. You’ll be working with an existing file, so this allows you to open the file and make some quick changes.

### Steps:

- Open the command prompt on your Pi
- Use the following command: `sudo nano /etc/dhcpcd.conf`
- You need admin access to edit this file, so you have to use `sudo`
- This opens the _dhcpcd.conf_ file in nano and allows you to edit it
- The _dhcpcd.conf_ file is the configuration file for the DHCP client — this configuration handles a lot of the resolution of IP address related tasks
- Follow the rest of the tutorial provided by the Raspberry Pi Foundation:
  - [Raspberry Pi Networking Lessons](https://www.raspberrypi.org/learning/networking-lessons/rpi-static-ip-address/)
    - Start at Step 2 _Setting Up a Static Local IP_
  - This tutorial contains great explanations and steps for configuring your static local IP address
- Make sure to test that your Pi works! Follow the _Testing_ steps in the above link
  - You can test yourself by typing the following command: `sudo reboot`
    - This reboots your Pi. Only do this **AFTER** you’ve saved the changes to the _dhcpcd.conf_ file!
- After the Pi reboots, type `ip a` and see if the IP you set shows up in the `wlan0` entry
- If not, follow the Troubleshooting steps outlined in the above Raspberry Pi tutorial
