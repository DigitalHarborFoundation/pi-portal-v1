---
slug: '/renaming-your-pi'
title: 'Renaming Your Pi'
---

## Objectives and Overview

This lesson demonstrates how to change the default username, hostname, and password of your Raspberry Pi. Additionally, there's an activity for creating a new user and setting it to be a _super user_. These are useful skills to know. The lesson is a quick overview of each process and a series of activities where you'll actively practice the new commands.

### Lesson Objectives

-

---

## Raspberry Pi Username and Hostname

When you open the Pi terminal you’ve probably noticed that it displays as `pi@raspberrypi` in the prompt. This is your **username** and **hostname**.

The username is the name of the currently logged in user. The username appears before the @ symbol in the command prompt. The hostname is the name of the system. This is what appears after the @ symbol when you open up a command line prompt.

At a quick glance, this prompt tells you which user you’re logged in as and the name of the system. This may seem like it’s unnecessary but when you have 20 Pi all on the same network with the same hostname it becomes difficult to tell which one is which.

## Changing Your Password

The default username for your Pi is _pi_ with the password _portal_. It’s never a good idea to leave this default configuration for safe, and the first step towards making your Pi more secure is to create a new password. There is a single command to do this: `passwd`.

**Note**: The default password "portal" has been set for the Pi you are using in this program. When working with other out-of-the-box installations of the Raspberry Pi OS, the default password is "raspberry."

Normally, you’d want to at least change the default password for Pi. However, you’re going to go a step further and create a new user with its own password. You’d usually want to change the password for the “pi” user as well, but for this course, you’re going to leave the “pi” user in case you forget your new username and password.
