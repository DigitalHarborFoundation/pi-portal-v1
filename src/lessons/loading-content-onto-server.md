---
slug: '/loading-content-onto-server'
title: 'Loading Content Onto a Server'
---

## Objectives and Overview

This lesson provides a basic overview of the process of serving content from your Pi using Apache Web Server. By the end of the lesson you'll be serving a single page from your Raspberry Pi!

### Lesson Objectives

- Explain where the default Apache web page comes from.
- Identify and explain how the Apache directory relates to the content users see when they navigate to your Pi's IP address.
- Explain the importance of the _/var/www/html/_ folder, and how it relates to serving your website’s content.
- Create an _index.html_ file in the Apache Directory Root and serve it via your Raspberry Pi.

---

## Serving Your Web Content

It's now time to start setting up your Raspberry Pi to work as a web server. By the end of the course, you’ll have created (and served) a basic website. Before building out your final project let's practice serving content with Apache.

The most basic entry point you’ll need for this is creating an _index.html_ page and placing it in the correct location on your server. You’ll need to do some additional configuration afterward, but you’ll be even closer to serving your own website from the Pi.

## The index.html File

The _index.html_ file acts as the default page that viewers see when they go to your site. Essentially, the _index.html_ is the home route for your site. You can create as many other pages that you like (and create links to those pages, such as an _about.html_) but you must have a file named _index.html_ in your server directory. Apache looks for this file and serves it as the homepage when a user goes to the address.

Let's start by setting up the Apache server.

## Setting Up the Server

Your web content needs to be in a specific location in order for the server to know what content to respond with. If your content isn’t in the correct location the server won’t send the content in the response. Additionally, you need to make sure that your server configuration is correct and matches the content location. Much of the troubleshooting that you may need to do stems from these areas. Often a file isn’t placed in the correct location, or the configuration doesn’t match with the file locations. Sometimes, even a small typo can cause your server to have errors!

## Default Web Page

Apache has a default web page that is served once you set up the server software. Seeing this initial web page often provides great relief after you’ve been working to install and configure a server. Here’s an image of the Apache default web page:

![Apache2 Debian Default Page](../images/apache-default-page.jpg)

If you open up _http://localhost/_ on your Pi, or have someone navigate to your Pi’s IP address, they’ll see the Apache default page. Before moving forward, go ahead and test this out.

If you don't see the default page then you know that you may need to do some additional troubleshooting. The default page is a good visual checkpoint to make sure that your server is correctly serving content.

## Activity: Exploring the Apache Default Web Page Location

You may now be wondering where these default pages come from. Most commonly, they are HTML files stored in a specific location that the web server is configured to point to. The specific default page is an _index.html_ file located in the directory. Apache serves the default web page from the _/var/www/html/_ directory.

Let’s navigate to that directory.

### Steps:

1. Open a terminal and use `cd` to change directory to the proper location: `cd /var/www/html/`
2. Once in the _/var/www/html/_ folder, list out the files with `ls`.
3. You should see an _index.html_ file! This is the default web page.
4. Open this with VS Code by typing `code .`
   - You'll see the HTML for the Apache default page!

## Understanding File Location

Right now you’re working with the Apache default configuration. The _Directory Root_ is the location that Apache looks at for your content. Any new pages that you want to create for the remainder of this lesson (and course) needs to be placed in this directory. You can either include all of your HTML files inside this parent directory or you can create new folders.

Let's practice some of the core concepts.

## Activity: Pulling Everything Together

Now that you have an understanding of how to create content (and where to put it on your Pi!) it’s time to create your own test page. This should be separate from the Capstone Project. For now, focus on creating a basic _index.html_ file.

### Steps:

Once you get some basic content, add another page and link to it. Once you’ve done that, try adding content inside a folder! Remember, to make sure that your content is placed in the correct location on your Pi! When you finish, show off your site!

1. Navigate to the Apache Document Root directory: `cd /var/www/html/`
2. Remove the default file: `rm index.html`
3. Create a new HTML file: `sudo touch index.html`
4. Open the file in VS Code and start editing it
5. Add some basic content to this file
   - Remember, you’ll need to include all the basic HTML boilerplate that you included in your _index.html_ page you made in previous lessons
6. Once your page is created, create other pages and link to them. For example, an About page:
   - Create a link in your HTML: `<a href=”/about.html”>About</a>`

## Activity Extension: Experimenting With More Pages

Let’s walk through an example that creates a new “Blog” folder:

### Steps:

1. Navigate to your page’s parent directory: `cd /var/www/html/`
2. Create the new folder: `sudo mkdir blog`
   - Remember, the `mkdir` command is used to create folders!
3. Navigate to the new folder
4. Create files in the folder: `sudo touch blog-entry-1.html`
   - This can be named whatever you like — this is just an example
5. Open the file in VS Code and add content
6. Once created, link to the entry from your _index.html_:
7. Create a link in your HTML: `<a href=”/blog/blog-entry-1.html”>My First Blog Post</a>`
   - When you’re linking to a file within a folder you need to make sure that you include the folder in the href's value!
   - In the above example, if you tried to use “/blog-entry-1.html” as the link, it wouldn’t work. If you add pages to folders, your links need to match!

Once you get some basic content, add another page and link to it. Once you’ve done that, try adding content inside a folder!

Remember, to make sure that your content is placed in the correct location on your Pi. When you finish, check your progress by navigating to your Pi's IP address.

## Testing and Troubleshooting

Now that you have an understanding of how to create content (and where to put it on your Pi!) it’s time to create your page. For now, focus on creating a basic index.html file. Follow the steps outlined in the Writing Your Content activity in this lesson.

Once you’ve placed your content, you can navigate to the IP address of your Pi (or type http://localhost) in a web browser and you’ll see your page! For now, this works on any computer on the same network as your Pi.

If you don’t receive a response, Apache may have stopped running and need to be started again. You can do this with the following command: `sudo service apache2 start`

The above command will start the Apache server again. Give it a moment and navigate back to your page. You should now see your content being served!
