---
slug: '/linking-between-pages'
title: 'Linking Between Pages'
---

## Objectives and Overview

This lesson demonstrates how to create internal and external links. There's a brief review of the _anchor element_ and an overview of the difference between absolute and relative paths.

### Lesson Objectives

- Understand how to use the HTML anchor `<a>` tag to link to another webpage.
- Explain the structure of the HTML anchor tag and how it’s used to create hyperlinks.
- Understand the difference between absolute and relative paths, and explain when you'd use each type.
- Demonstrate the ability to add links to a webpage by linking to another page using the anchor tag.

---

## Linking Between Pages

You've now created a single HTML page and you may be wondering how to connect multiple pages together. This is the next step in the learning process: linking multiple pages. This need arises any time that you're working on a site that has more than one page, which is very likely to happen. In fact you'll be creating a three page site within this course! Let's review the linking process and practice this crucial skill.

## Review: The Anchor Element

Recall that hyperlinks are what connect web pages together. The anchor, or `<a>` tag, is used to define the links between pages. Anchors can connect to a particular part of a page, between different pages in a site, or connect to outside resources.

You've encountered these links since they're a crucial backbone of the internet. The anchor element is used to connect pages together and is a crucial HTML element.

Browsers typically render links as having blue text and an underline, but this isn't always the case because this appearance can be changed with CSS. Let's take a look at a hyperlink:

```html
<a href="https://digitalharbor.org">
  Link to the Digital Harbor Foundation Website
</a>
```

Let's now look at the structure of the HTML:

- **Element:** anchor element
- **Attribute:** href
- **Value:** https://digitalharbor.org
- **Tags:** `<a>` and `</a>`

"Link to the Digital Harbor Foundation Website" is displayed as the link text. When constructing a link, this text is placed between the opening and closing anchor tags. The user would click on this text and be taken to the page linked in the _href value_. In this case, the link would go to the [Digital Harbor Foundation Website](https://digitalharbor.org).

## Absolute and Relative Paths

It's necessary to add the _path value_ to the href in order for a link to work. Links can go to external websites, pages on the same server, and even links within the same page. There are two types of paths: **relative paths** and **absolute path**.

Understanding the difference between the two is important as there are different use cases -- one is not better than the other. You'll use both throughout your web development explorations.

Let's take a look at the differences between the path types and some examples of when you'd use each.

### Absolute Paths

**Absolute paths** are full paths. These are always used when linking to an external website.

Let's take a look at an example:

```html
<h2>Absolute Path Example</h2>
<p>
  This example links to an external webpage using an absolute path:
  <a href="https://digitalharbor.org/our-team">
    Link to the Digital Harbor Foundation Website's Team page.
  </a>
  Click on that link to go to the Digital Harbor Foundation's Team page!
</p>
```

You'll need to use absolute paths when linking to external sites. The above example wouldn't work if you were to only use "/our-team" as the href's value.

### Relative Paths

**Relative paths** don't use full file paths. Instead, they use the current page as a reference and link relative to the current page's file path. This may not seem immediately clear, but this is often the method for linking to internal pages in your site.

For example, if you have an _index.html_ and an _about.html_ in the same folder, you can use a relative link to omit the full file path. Here's an example:

```html
<h2>Relative Path Example</h2>
<p>
  Check out my About Page:
  <a href="/about.html">
    About Me
  </a>
  Click on that link to learn more about me.
</p>
```

In this example, the `href`value "/about.html" references an _about.html_ page that exists within the same folder. The use of the "/" indicates that the file is in the _same exact folder_ as the current page. This won't work if the file isn't contained in the same folder.

## Activity: Linking to Another Page

Before starting the activity, let's take a quick look at a side-by-side example of the code and the resulting page. This example extends the example used in the _Adding Images_ lesson.

![Side-by-side view of HTML code on the left and resulting page on the right](../images/link-example-side-by-side.jpg)

**Note:** As with all image examples, click on the image to open a higher resolution version in another browser tab.

### Steps:

1. Create another HTML file in _the same folder_
2. Name this something like _about.html_
   - The name doesn't matter as long as it's different than _index.html_ since it has to be a new file
3. Create a link to this new page using a **relative path**. Refer to the above HTML example if you need help remembering the syntax
4. Create a link to an external page using an **absolute path** link. Refer to the above HTML example if you need remembering the syntax.

If you're stuck, open up the example image in a new tab and look at the code. Remember, it's completely fine if you forget syntax and need to look it up. Focus on building comfort and familiarity with the concepts. It's alright if you need to look up specific syntax.

If you want to extend this activity, create some new pages and start linking back and forth between them! Make sure to add a way to navigate back to the home page (_index.html_) from any new pages you create.
