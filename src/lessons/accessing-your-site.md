---
slug: '/accessing-your-site'
title: 'Accessing Your Site'
---

## Objectives and Overview

This lesson covers how to locally access your web content once it's being served by Apache. There is a review about how Apache looks for content, and an activity to make sure that you're able to access your content. Additionally, this lesson includes a section on creating folders for organizing your content in a larger site.

### Lesson Objectives

- Demonstrate the ability to serve and locally access your site's content.
- Explain the importance of the _/var/www/html/_ folder, and how it relates to serving your website's content.
- Understand and explain the process for creating folders within your Apache _DocumentRoot_.

---

## Accessing Your Site Locally

Before moving through this lesson, make sure that you've completed the following tasks:

- Configure a static local IP address for your Pi
- Install and configure the Apache web server
- Create some basic web content and place it in the correct location _/var/www/html/_ on your Pi

If you have completed the above steps you're ready to access your web content! Remember, at this stage, you'll only be able to access the content on the local DHF network. The second phase of this lesson walks through how to make your site accessible outside of the DHF network. First, let's make sure that you're able to access your site locally.

## Activity: Navigating to Your Site

This activity walks you through how to double check that your site is up and running! Once you make sure that the above steps are complete, begin following along with this activity.

### Steps:

- Open a web browser on your laptop
- Navigate to your static local IP address
  - Either option will work. Try both!
    - If you're accessing the content from your own Pi, you can use http://localhost -- however, you're using the Pi without the GUI so you won't be able to do this
    - If you're accessing the content from another computer/Pi, you need to use your Pi's local IP address
- You should see your web content being served!
- If not, begin troubleshooting the error codes and move from there
  - If you see the default Apache page and you've created your own content, check to make sure that your content is in the correct location on your Pi

## Organizating and Navigating Content

Your content needs to be placed inside the _/var/www/html/_ directory for Apache to serve it. This location can be configured in Apache's settings, but this is the default location. This location is Apache's _DocumentRoot_., which is where Apache looks for content to serve. Any new content that you add during this course should be inside this directory.

Apache needs to know about the content, so this is a good first troubleshooting step if you're having trouble. This is true for individual files as well as folders If you haven't changed the configuration, you'll need to make sure that your HTML content, especially your _index.html_ file, are included in this directory.

Your initial _index.html_ is a single HTML file located inside _/var/www/html/_. If you've created additional pages such as _about.html_ you'll need to make sure that it also is placed in this directory.

**Note:** If you don't have an _index.html_ file in this location, Apache won't serve content!

There are often times when you want tocreate new folders within Apache's _DocumentRoot_.. Let's take a look at that process!

## Creating New Folders

You may wonder why you'd want to create a new folder. This section touches on two practical reasons: content organization and separation of concerns. Let's look at a practical example: you plan on having a section of your site for _blog posts_ and another for a _portfolio_. Once you start having enough content inside each section, it may start to make sense to create additional folders for organizing it.

### Content Organization

Suppose that you already have 15 potential blog posts written in a Google document and 5 portfolio entries. You'd like each item to be its own HTML page so that you can have unique links for each piece. You could create all of these as individual files in the */var/www/html/* folder and link to them on your site, but this could quickly become disorganized. Instead, you could create two new folders in the directory: blog and portfolio. Note that these folders can be named anything you'd like, but if the goal is content organization then the names should be recognizable and clear.

Once these folders are created (remember, the `mkdir` command is used to do this), then you can navigate into the new folder (with the `cd` command) and make new files. For example, you'd navigate into your new blog folder and start creating each entry there. You could then even give each file a name that includes the date (optional) or just a title. Now you'll know that all of your blog content exists inside the blog folder!

### Separation of Concerns

**Separation of concerns** is the principle that you should have a program or a website, have different sections that handle specific functions. In a basic example, instead of writing all of your HTML, CSS, and JavaScript in a single HTML file, it's often better to separate them into individual HTML, CSS, and JavaScript files. Each of these files then fulfills its own purpose. You know if you look at a CSS file that it contains the information related to styles, and the JavaScript file (often) contains the interactivity code.

This is somewhat related to the previous point and it really only becomes a bigger issue when working with larger sites. In addition to organizing your content into folders, you also can organize *types of files*. For example, it's common for a website to have an assets or images folder that contains all uploaded images, a styles or css folder that contains stylesheets, and scripts or js folder that contains JavaScript files. This is an example of separating concerns.

You can extend this concept into your website folder structures to organize your files. Again, this is largely relevant for larger sites, but it's a good idea to understand the principle.

## Common Website Folder Structures

Websites will have different folder structures depending on the complexity and size of the site. However, there are some common structures and best practices that you should be familiar with.

## Single Page Sites

For a small, single page site, you can just have your files together in the root directory -- for Apache, this is /var/www/html/. If your site only has an index.html, styles.css, and app.js you can use this simple structure. This is often the structure for a single page site without images (or with external links to images instead of ones uploaded to the server). However, once you start including more files you'll want to start using a more involved folder structure.

## Multi Page Sites

As an additional activity in this course, you'll be creating a multi-page site. This is a great opportunity to experiment with folder structure. Make sure that all of your folders are inside Apache's DirectoryIndex or you'll encounter errors serving the content.

For more information about file structure and organization, navigate to this Mozilla Developer Network link: [Dealing With Files](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Dealing_with_files)
