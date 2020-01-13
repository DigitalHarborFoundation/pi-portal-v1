---
slug: '/creating-page-structure-with-html'
title: 'Creating a Page Structure With HTML'
---

## Objectives and Overview

Once you have an understanding of the basic HTML tags and elements, the next area of focus is creating page structures with HTML. This lesson includes examples of basic HTML layouts, however you should use these as inspiration and always let content needs guide your layout and structure.

### Lesson Objectives

- Identify structural elements that can be contained in the `<body>` of an HTML document.
- Understand and explain the purpose of using semantic HTML elements.
- Recognize different semantic HTML structural elements.

---

## Layout: Readability and Semantic HTML

The proper use of HTML tags has a big impact on the readability and semantic "correctness" of your page. Understanding the best practices for using headings and content creation will help build a good foundation.

Beyond just improving the readability of your site, properly understanding how to use HTML tags is important for users who rely on screen readers. Taking these things into consideration from the beginning will increase the accessibility of your site.

## Page Structure Overview

The elements covered in this lesson are all contained within the page **body**. Let's take a look at some HTML as a starting point:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <title>Document Title (Appears in browser tab)</title>
  </head>
  <body>
    <h1>My Portfolio Site</h1>
    <p>This is a paragraph about my portfolio site!</p>
  </body>
</html>
```

The example is broken into two separate sections: the **head** and the **body**. The head contains important data about your site, and also includes links to stylesheets. The body contains the actual page content that is rendered and displayed to the user.

## Structural Elements

The elements covered in this section are used to provide page structure. There are general purpose structural elements that don't have an associated meaning and there are specific elements that have meaning. One isn't better than the other -- you'll use a mix of both while writing HTML. The important piece is to know **when** and **why** to use each element.

The main general purpose structural element is the `<div>`.

### Div Element

The **div element** is a _content division_ and is still widely used to group site content together. Before the introduction of HTML5 semantic elements, web developers utilized `<div>` elements for all layout. The introduction of more meaningful, specific elements has allowed for divs to be used as generic content containers. The elements grouped inside a `<div>` typically relate to each other, but the `<div>` itself doesn't convey any specific meaning.

## Semantic Structural HTML Elements

In addition to structuring the content, these elements are used to provide meaning about the content. This is known as _semantic HTML_. Prior to HTML5, web developers relied entirely on the `<div>` element and added classes to indicate meaning. For example, prior to the introduction of the `<header>` element, it was common to see code such as `<div class="header">` and `<div class="footer">` throughout the HTML. This worked, but the introduction of semantic elements meant that meaning and intention could be more clearly communicated _through the HTML elements themselves_ instead relying on adding classes to `<div>` elements.

HTML elements such as headings and paragraphs are semantic because they convey meaning. For example, consider this following snippet:

```html
<h1>All About Semantic HTML</h1>
<h2>Supporting Headline</h2>
<p>This is a paragraph about semantic HTML</p>
```

This basic example demonstrates the use of semantic HTML elements. Even by just reading the code, you know that the text wrapped in the `<h1> </h1>` tags is a first-level heading. Additionally, the content wrapped in the `<h2> </h2>` tags is a second-level heading. Then the content inside the `<p></p>` tags is part of a paragraph. Even without seeing the rendered page you're able to understand some of the meaning and intent in the HTML.

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

The additions of the `<main>` and `<article>` elements provide even more meaning. For example, when reading this snippet we realize that this consists of content that is the central topic of the page, and that related content has been grouped in the `<article>` element.

This lesson will cover some of the semantic structural elements and will provide a resource for further reading if you want to know more.

## Why Use Semantic HTML Elements?

A common question is "why should I take the time to use these elements?" There are many benefits to understanding and using semantic HTML elements. While your page will still load and work if you exclusively use `<div>` elements instead, there are other considerations.

### Readability and Accessibility

Two crucial considerations when creating HTML content are _readability_ and _accessibility_. There are many opinions and processes for ensuring readability and accessibility, but one guiding principle is if you focus on using appropriate semantic HTML elements you already have a massive head start for meeting readability and accessibility standards.

Semantic elements make your HTML code more readable at a glance. It's much easier to determine the content layout when using elements such as `<header>`, `<main>`, and `<footer>` as opposed to a series of `<div>` elements.

One way that semantic HTML relates to these topics is for assitive technologies such as screenreaders. Properly structuring your HTML will help the screenreader's user by limiting the amount of jumps in the content. The element names are announced as the screenreader moves through the page, so using elements that convey meaning will help guide their process.

### Header Element

The **header element** is used for introduction content. This often contains the first-level heading for the site's title and navigation. The header potentially includes site logos. The content of the header often remains consistent across different pages on your website, but this doesn't need to be the case.

The content of the header is enclosed within the opening `<header>` and closing `</header>` tags. The header can contain many elements, but these elements should be appropriately grouped as introductory content.

### Main Element

The **main element** is the core, or main, content of the document `<body>`. This content area should all relate to the main focus of the page. For example, if you're creating a blog post, the actual content of the post should be contained in the main element.

The content of the main section is enclosed within the opening `<main>` and closing `</main>` tags. The main element often contains multiple elements since it makes up the variety of the page content.

### Aside Element

The **aside element** is used for sections that are outside of the main section. For example, this is used with content that is supplementary to the main content. Sidebars commonly represented as an **aside** element.

The content of the aside section is enclosed within the opening `<aside>` and closing `</aside>` tags. These tags can contain whatever content you want as long as it is all indirectly related to the main content.

### Nav Element

The **nav element** is the page section containing navigation links. Most commonly this is represented as a navigation menu, or navbar. The nav section isn't necessary to use for all links. Instead, it should be reserved for the main navigation for the site.

The content of the nav section is enclosed within the opening `<nav>` and closing `</nav>` tags. This is often used with unordered lists to create a site's navigation menu.

### Article

the **article element** is for self-contained pieces in a document. Ideally, the content placed within the article tags should be able to stand its own outside of the page. Each page can contain multiple articles. This isn't always necessary to include but can convey additional meaning when used.

The content of the article section is enclosed within the opening `<article>` and closing `</article>` tags.

### Section

The **section element** represents a page section that doesn't have any other meaning associated with it. It's used to group content on a page. The content grouped within a section should all be related, but using the section element doesn't have any specific meaning. If you are splitting your page into multiple layout sections, you could use the section element to designate where each one starts and ends.

The content for a section is placed within the opening `<section>` and closing `</section>` tags and should contain other HTML elements.

### Footer Element

The **footer element** is used as a closing section for the page. This section typically includes contact and copyright information for the organization or author. The content of the footer often remains consistent across different pages on your website, but this doesn't need to be the case.

The content of the footer is enclosed within the opening `<footer>` and closing `</footer>` tags. The footer can contain many elements, including links to pages such as social media or email.

## Bringing Everything Together

Before moving on to the activity, let's take a look at an example.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Structured HTML Example</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header>
      <h1>Structured HTML Example</h1>
      <p>Site tagline!</p>
    </header>
    <main>
      <h2>Second Level Title</h2>
      <p>Some paragraph text</p>
    </main>
    <footer>
      <p>Made in Baltimore in 2019.</p>
    </footer>
  </body>
</html>
```

## Activity: Create a Structured HTML Page

Let's practice creating a page using these semantic structural elements. From this point on, new pages that you create should utilize these elements.

### Steps:

1. Create a new project folder and name it something like _practice-project-2_
2. Open VS Code and create a new _index.html_ file (File → New File) inside the project folder
3. Add the basic HTML page structure (refer back to the _HTML Basics_ lesson if you need)
4. Save the file as _index.html_ if you haven't already
5. Add in a _title_ in the _head_
6. Run the **live server** so you can actively preview your work

At this point, your HTML should be the same as what you've previously used in the lessons. Let's now extend it by adding structural elements into the _body_.

7. Let's use some semantic structural elements. Add the following:
   - `header`
   - `main`
   - `footer`

### Going Further

Extend the concepts by adding more elements. For example, try including site navigation using the `nav` element. This should contain links that are related to navigating _your site_. You wouldn't include external links in this section.
