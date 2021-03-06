---
slug: '/html-basics'
title: 'HTML Basics'
---

## Objectives and Overview

This lesson introduces HTML, common HTML terms, and elements. By the end of the lesson, you'll have created your first HTML page!

### Lesson Objectives

- Be able to explain what HTML is and the role it plays in web development.
- Explain common HTML terminology.
- Understand and explain how HTML relates to web page structure.
- Demonstrate the ability to create a basic page layout with HTML.

---

## What is HTML?

**HTML** stands for Hyper Text Markup Language. HTML provides the structure for web content. In addition to structure, HTML provides the meaning of the page content. When working on websites, you'll come across the phrase "semantic HTML."

**Semantic HTML** is the use of HTML markup to convey and reinforce the meaning of a page. You'll understand this concept further as you dive into learning HTML. For now, just understand that HTML tags are used for page structure and conveying meaning about the content.

Throughout this course, you'll keep your HTML (structure) and your CSS (style) separated. HTML will always represent the structure and the content and CSS will always represent the appearance of that content.

## Common HTML Terms

When you start learning HTML there may be lots of terms and definitions that are unfamiliar and possibly intimidating. As you progress in learning and using HTML, the terminology and syntax will become more familiar. The three most common HTML terms you should start familiarizing yourself with are: **Elements**, **Tags** and **Attributes**.

Tags and Attributes will be covered in a later lesson. For now, let's examine HTML Elements.

### Elements

Throughout this course, you'll see the term element used regularly. An element is an individual component that can be combined to form the HTML document/webpage once the browser parses it into the Document Object Model (DOM). You're going to be working extensively with the DOM later in this course, but for now just know that the pages you look at are composed of individual HTML elements.

Let's explore some commonly used elements.

#### Text Elements

- Headings: `<h1>` through `<h6>`
- Paragraphs: `<p>`
- Unordered Lists: `<ul>`
- Ordered lists: `<ol>`
- List items: `<li>`
- Bold: `<strong>`
- Emphasis: `<em>`

#### Linking Elements

- Anchors (Links): `<a>`
- Images: `<img>`

#### Organizational Elements

- Main: `<main>`
- Aside: `<aside>`
- Navigation: `<nav>`
- Header: `<header>`
- Footer: `<footer>`
- Divider: `<div>`
- Span: `<span>`

## Page Structure

This course presents HTML, CSS, and JS as you would work through it in a real application. This means that you'll be working with a text editor and be responsible for file management. Many online learning platforms don't necessarily require an understanding of how to set up a full HTML document, so this section will review that concept.

There is lots to learn in regard to proper use of HTML semantics- the practice of giving the HTML you write proper meaning and structure. Additionally, there is a wealth of information about how to properly set up the underlying skeleton of your webpage.

All HTML documents have a required structure that includes the following declaration and elements: `<!DOCTYPE html>`, `<html>`, `<head>` and `<body>`.

The entire code goes inside the `<html>` element. Everything contained within the HTML will fit within this section. Next is the `<head>` element which identifies the top of the document, including any metadata (accompanying information about the page).

The content inside the `<head>` element is not displayed on the web page itself. Instead, it may include the document title (which is displayed on the title bar in the browser window), links to any external files or any other beneficial metadata.

All of the visible content within the web page will fall within the `<body>` element. Take a look at this code example:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Hello World</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>This is a web page.</p>
  </body>
</html>
```

This is the structure that you should practice using in all of your HTML files that you create. In this example, the body only contains a single header and paragraph. As you build out your page, you would include more elements in both the head and the body, as you'll see in later projects.

## Basic HTML Guidelines

Here are some basic guidelines to follow as you work on your page:

- Remember to close all tags that you open!
- Write all HTML tags lowercase.
- Practice properly nesting your tags.
  - For example, if you write: `<tag1> <tag2>` you’d want to close them in the reverse order by closing `</tag2>` and then `</tag1>`.
    - Open first, open second, close second, close first.
    - Here is an example: `<strong><em>`**_some text that would be bold and emphasized_**`</em></strong>`

## Using Heading Tags

The way that you use heading tags on your page is important and there is lots of conflicting information on the topic. Generally, you'll want to follow these best practices:

- Include **only one** `<h1>` tag for the page. This should be your main heading.
- Every content heading should use `<h2>` tags
- Sub-sections that support the main content headings would be `<h3>` tags, and so on

Avoid using the heading tags for styling purposes. Instead, use these to convey order and meaning. Get in the habit of thinking of the headings as creating the skeleton of your page. These act as the **document outline**.

## Other Considerations

It's a good idea to make sure that don't include too much information in each heading block. If your paragraphs are looking really big, see if you can split it up into sub-sections.
Alternatively, if you're using sub-headings you'll want to make sure that each one has at least 2 or more sentences. Both of these considerations will improve the readability of your site.

While these are best practice suggestions, the content (and layout) of the site should always be the main focus. The layout of an "About" page will be structured differently than a blog post. Being mindful of these things from the start will help you make **content driven decisions** when building your own site or working with a client.

## Activity: Building With HTML

Now that you have a basic understanding of HTML, let’s practice by creating a page.

You’ll start creating an About Me page. For now, you’ll be adding HTML and content only. As you add each of these elements, make sure that you’re adding things that fit the goal of the project. For example, instead of just listening out random items you should make a list of hobbies or interests.

More layout elements will be introduced in later lessons. For now, you'll focus on adding elements directly into the `<body>`.

### Steps:

1. Create a project folder if you haven't already
2. Open VS Code and create a new _index.html_ file (File → New File) **inside** the project folder
3. Add the HTML for the basic page structure shown in this lesson
4. Save the file as _index.html_
5. Add in a _title_ in the _head_

At this point, your HTML should look something like this:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>All About Me</title>
  </head>
  <body></body>
</html>
```

6. Run the **live server** in VS Code so that you can actively preview your work. To do this, select the **Go Live** button in the bottom right of VS Code. This opens your project in a Chromium browser window!
7. Next, let's add some elements to the _body_! Remember, the content you add should be between the opening `<body>` and closing `</body>` tag. Include the following HTML elements:

   - An `<h1>` heading
   - Sub-headings, such as `<h2>` and if necessary, `<h3>`
   - Some paragraph text inside a `<p>` element.
     - Use the `<strong>` and `<em>` tags to format some text

8. Once you finish, consider adding _ordered_ and _unordered_ lists inside the _body_. Here's how:

```html
<p>
  My first unordered list!
  <ul>
    <li>Unordered list item!</li>
  </ul>

  My first ordered list!
  <ol>
    <li>Ordered list item 1</li>
  </ol>
</p>
```

It’s alright if you don’t finish this all at once! Keep working toward it.

## HTML Comments

As you work through the projects in this course, you'll see lots of references to HTML comments,and commenting/commenting out your code. Any content wrapped within a comment will not be displayed on the web page. Comments help keep our files organized, allow us to set reminders and provide a way for us to more effectively manage our code. Comments become especially useful when there are multiple people working on the same files.

Additionally, comments allow you to effectively "turn off" a line, or lines, of code. You'll see this used throughout this course. HTML comments start with `<!--` and end with `-->`. Any code contained within those characters won't be interpreted/displayed by the page. Note that there are two "-" characters on each side even though it looks like there is only one.

Here is an example of commented HTML:

```html
<!-- I'm a multi-line HTML comment! 
Build good habits and practice commenting/uncommenting from the start! 
To comment in HTML you use <!-- [comment goes here] and end it with -->
```
