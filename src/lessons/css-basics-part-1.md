---
slug: '/css-basics-part-1'
title: 'CSS Basics: Part 1'
---

## Objectives and Overview
This lesson provides an overview of some terminology and provides a basic foundation of CSS. This lesson, as well as the remaining lessons in this module, intend to scratch the surface and be an introduction to CSS.

### Lesson Objectives

- Be able to explain what CSS is and the role it plays in web development.
- Recognize, understand, and explain explain common CSS terminology such as selectors, rules, declarations, properties, and values.
- Create a CSS stylesheet and link to it from an HTML document.

---

## CSS Overview

**CSS** stands for Cascading Style Sheets and is used to style web content. CSS is a presentation language that affects the appearance of content. If you think of HTML as the body, then CSS can be viewed as the clothes. Fonts, colors, page layout, and certain animations can all be done with CSS as well as much more.

Occasionally you’ll see code where the CSS is mixed in with the HTML. This has its uses, but for this course you’ll be keeping your HTML and CSS in separate files.

For this course, you’ll be writing your CSS in an external style sheet. This means that you’ll be writing all of your CSS in a file such as style.css and then linking to that file in your HTML.

The focus of this course isn’t on making you a CSS guru. Rather you should aim to become knowledgeable and familiar enough with CSS use to be able to understand how to set and alter the style of your page. There are a wealth of resources available if you’re interested in leveling up your CSS skills.

## CSS Terms

Just like HTML, JavaScript, and any other language, CSS has its own terminology. It’s good to review and use this terminology as much as possible so that you’re able to correctly recognize and understand resources that you discover.

The most important terms that you’ll encounter are: selectors, rules, declarations, properties, and values. Let's look at each of these terms.

### Selectors

Selectors are what you use to select which HTML elements you want to style. You can use combinations of several qualifiers to target unique HTML elements, depending on how specific you want/need to be. For example, you may be content to style all paragraphs on the page the same way, or you may need to be more specific and style only the first paragraph.

This selects all paragraph ```<p>``` elements on the page:

```css
p {
  ...
}
```

In this example, the *p* is the selector. Note that when you're referencing HTML elements in CSS you omit the brackets. For example, you use *p* instead of ```<p>```.

### Rules

### Declarations

### Properties

Once an element or elements is selected, the styles that are applied are set as properties.

There are a large number of CSS properties that you can use, but here are some of the most common: background, color, font-size, height, and width. The following example sets the color and font-size properties to be applied to all paragraph ```<p>``` elements:

```css
p {
  color: palevioletred;
  font-size: 12px;
}
```

Notice that the property names are contained within brackets { } after a selector, and are separated from their *values* by a colon.

### Values


## Element and Type Selectors

## Class and Id Selectors

### Class Selector Example

### Id Selector Example


