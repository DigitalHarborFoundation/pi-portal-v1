---
slug: '/how-internet-works-part-2'
title: 'How the Internet Works: Part 2'
---

## Objectives and Overview

Once you have an understanding of the basic HTML tags and elements, the next area of focus is creating page structures with HTML. This lesson includes examples of basic HTML layouts, however you should use these as inspiration and always let content needs guide your layout and structure.

### Lesson Objectives

- Explain what a server is and how websites are accessed by users.
- Use the command line to install the Apache server software on your Raspberry Pi.

### CSTA Standards

- **2-NI-04** - Model the role of protocols in transmitting data across networks and the Internet.

---

## Understanding Servers

**A server**, or **web server**, is a program that serves web content to users. There often is a misconception that a server is a large piece of equipment with lots of blinking lights. While servers are often run on these pieces of hardware, the server itself is a program that serves content to users. In fact, these days many services provide servers on the cloud. This is outside of the scope of this course -- however, basic knowledge and understanding of server principles are important.

You've likely created web pages in other courses. Once the HTML, CSS, and JavaScript files are created they need to be transferred, interpreted, and shown to the people who visit your site. The server plays a central role in this process. The web content lives on the server, and the server handles the logic behind delivering and displaying the content.

Every single website that you've visited has a server that stores the actual webpage content. Each server also has a unique IP address that is used to access it. Remember in the previous lesson that when you're typing in the webpage domain name, the DNS translates this into the server's unique IP address. The request is then sent to the server, and a program handles the request and serves the content as a response.

If the server is unable to process the request, it'll respond with an error code. For example, if you've tried to access a page that doesn't exist, you've received the **404 error**. This error is the server's response to the bad request. You'll dive more into these errors and how to troubleshoot them in later lessons.

## Server Basics

In this course, you'll be setting up a server on your Raspberry Pi. Since the Pi's run on the Linux operating system, you'll be working with Linux server programs. Fortunately, many web servers are also run on Linux, so the skills you're learning while working on a Pi server transfer directly to configuring a server outside of the Pi.

There isn't a GUI for these programs so all of the configurations will be done on the command line with nano. Don't worry if this is difficult initially -- the more that you practice the more natural it'll become!

## Apache and Nginx Web Servers

There are two main open-source server programs in Linux: [Apache](https://httpd.apache.org/) and [Nginx](https://www.nginx.com/). Let's take a high-level overview of both.

### Apache Overview

**Apache** is the most popular open-source web server. Out of the box, Apache is able to serve HTML files over HTTP. This basic setup works fine for this course, but if you're setting up an Apache server for something more demanding such as WordPress or server-side JavaScript you'll need to do additional configuration.

Much of the Apache setup you'll be doing is done through *configuration files*. These files contain additional options or directions that control server behavior. Apache knows to run these configuration files before serving the content, but you'll need to be comfortable with setting up the files.

When Apache receives a request it runs through and analyzes the request, then applies any specific rules or directives that are included in the configuration before sending the response. If your request is successful, then you'll receive a **200 status code**, which indicates that the page is found as well as a **response header**. Inside this response, you'll have some information as well the actual requested data. Let's take a look at a sample response. The example and summary are taken from [An Introduction to Apache](https://code.tutsplus.com/tutorials/an-introduction-to-apache--net-25786)). Check it out for a deeper dive.

```apache
HTTP/1.1 200 OK
Date: Sun, 10 Jun 2012 19:19:21 GMT
Server: Apache
Expires: Wed, 11 Jan 1984 05:00:00 GMT
Cache-Control: no-cache, must-revalidate, max-age=0
Pragma: no-cache
Last-Modified: Sun, 10 Jun 2012 19:19:21 GMT
Vary: Accept-Encoding,User-Agent
Content-Type: text/html; charset=UTF-8
Content-Length: 7560
```

In this example, the first line indicates the 200 status code. This means that the request has been found! If it wasn't, you'd see a 404 status code instead.

While you may not directly interact with these headers, it's important to understand what's going on behind the scenes.

### Nginx Overview

Nginx (pronounced engine x) is another popular open-source server software. Most often you'd use Nginx as an HTTP server instead of Apache, but there are some instances where you'd use both together. It's useful to understand how to configure Nginx as well as Apache. Let's take a look at a basic overview.

This lesson won't go into much detail about Nginx since you'll be using Apache in this course. However, it's good to also be aware of Nginx, so here are some resources to read through if you're interested in learning more.

- Here's a link to a blog post from Nginx outlining the key differences between Nginx and Apache: [NGINX vs. Apache: Our View](https://www.nginx.com/blog/nginx-vs-apache-our-view/)

- For a more in-depth introduction, check out this article: [Nginx Guide: Introduction](https://code.tutsplus.com/articles/nginx-guide-introduction--cms-21877).

## Activity: Installing Apache Server Software

This activity demonstrates how to install Apache on your Raspbery Pi.

### Steps:

- Before installing your server, make sure to update your Pi:
  - `sudo apt-get update`
  - `sudo apt-get dist-upgrade -y`
    - Remember, the `-y` is an optional flag that automatically responds "yes" to any prompts about updating/installing during this process
- Install Apache onto the Pi:
  - `sudo apt-get install apache2`
- Check that Apache is installed:
  - Open a browser window on your Pi and navigate to your Pi's IP address
  - If you see the default Apache homepage you've successfully installed Apache on the Pi!

## Additional Activity Resources

Here is a link to a great resource if you need some more detailed instruction for installing Apache on a Raspberry Pi: [MagPi Article: Apache Web Server](https://www.raspberrypi.org/magpi/apache-web-server/)

Additionally, here are walkthroughs from the [Raspberry Pi Foundation](https://www.raspberrypi.org/):

- [Setting up Apache on the Raspberry Pi](https://www.raspberrypi.org/documentation/remote-access/web-server/apache.md)
- [Setting up Nginx on the Raspberry Pi](https://www.raspberrypi.org/documentation/remote-access/web-server/nginx.md)
  - Note that you won't use be installing Nginx in this course. This resource is for later use if you decide to use Nginx on another project.
