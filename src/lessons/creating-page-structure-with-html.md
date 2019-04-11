---
slug: '/creating-page-structure-with-html'
title: 'Creating a Page Structure With HTML'
---

## Objectives and Overview
Once you have an understanding of the basic HTML tags and elements, the next area of focus is creating page structures with HTML. This lesson includes examples of basic HTML layouts, however you should use these as inspiration and always let content needs guide your layout and structure.

### Lesson Objectives

- Understand how to use the HTML anchor `<article>` tag to link to another webpage.
- Explain the structure of the HTML anchor tag and how it’s used to create hyperlinks.
- Demonstrate the ability to add links to a webpage by linking to another page using the anchor tag.

### CSTA Standards

- **2-AP-13** - Decompose problems and subproblems into parts to facilitate the design, implementation, and review of programs.
- **2-AP-16** - Incorporate existing code, media, and libraries into original programs, and give attribution.

---

## Page Structure Overview

The elements covered in this lesson are all contained within the page **body**. Let's take a look at some HTML as a starting point:

[html photo]

The photo is broken into two separate sections: the **head** and the **body**. The head contains important data about your site, and also includes links to stylesheets. The body contains the actual page content that is rendered and displayed to the user. 

## Head Section

## Body Section

## Structural Elements

The elements covered in this section are used to provide page structure. There are general purpose structural elements that don't have an associated meaning and there are specific elements that have meaning. One isn't better than the other -- you'll use a mix of both while writing HTML. The important piece is to know **when** and **why** to use each element.

The two general purpose structural elements are ```<div>``` and ```<span>```. 

### Div Element

### Span Element

## Semantic Structural HTML Elements

In addition to structuring the content, these elements are used to provide meaning about the content. This is known as *semantic HTML*. Prior to HTML5, web developers relied entirely on the ```<div>``` element and added classes to indicate meaning. For example, prior to the introduction of the ```<header>``` element, it was common to see code such as ```<div class="header">``` and ```<div class="footer">``` throughout the HTML. This worked, but the introduction of semantic elements meant that meaning and intention could be more clearly communicated *through the HTML elements themselves* instead relying on adding classes to ```<div>``` elements. 

HTML elements such as headings and paragraphs are semantic because they convey meaning. For example, consider this following snippet:

```html
  <h1>All About Semantic HTML</h1>
  <h2>Supporting Headline</h2>
  <p>This is a paragraph about semantic HTML</p>
``` 

This basic example demonstrates the use of semantic HTML elements. Even by just reading the code, you know that the text wrapped in the  ```<h1> </h1>``` tags is a first-level heading. Additionally, the content wrapped in the ```<h2> </h2>``` tags is a second-level heading. Then the content inside the ```<p></p>``` tags is part of a paragraph. Even without seeing the rendered page you're able to understand some of the meaning and intent in the HTML.

Let's add even more semantic HTML elements to our example:

```html
  <main>
    <h1>All About Semantic HTML</h1>
    <article>
      <h2>Supporting Headline</h2>
      <p>This is a paragraph about supporting headlines.</p>
    </article>
  </main>
``` 

The additions of the ```<main>``` and ```<article>``` elements provide even more meaning. For example, when reading this snippet we realize that this consists of content that is the central topic of the page, and that related content has been grouped in the ```<article>``` element.

This lesson will cover some of the semantic structural elements and will provide a resource for further reading if you want to know more.

A common question is "why should I take the time to use these elements?" There are many benefits to understanding and using semantic HTML elements. While your page will still load and work if you exclusively use ```<div>``` elements instead, there are other considerations.

### Readability and Accessibility

### Header Element

### Main Element

### Nav Element

### Aside Element

### Section

### Article

### Footer Element
