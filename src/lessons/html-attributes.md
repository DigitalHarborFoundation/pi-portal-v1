---
slug: '/html-attributes'
title: 'HTML Attributes'
---

## Objectives and Overview

### Lesson Objectives

- Be able to explain what an HTML attribute is and describe common uses.

### CSTA Standards

- **1B-AP-11** - Decompose (break down) problems into smaller, manageable subproblems to facilitate the program development process.
- **1B-AP-15** - Test and debug (identify and fix errors) a program or algorithm to ensure it runs as intended.

---

## Introduction to HTML Attributes

Now that you're familiar with HTML basics it's time to dive a bit further in and start working with **Attributes**. Attributes are additional values that each HTML tag contain. These additional properties add additional configuration to the HTML elements or alter their behavior. Often, attributes are used to provide additional information about an element.

## Defining Attributes

Attributes are defined within the opening tag of an element. An attribute consists of a name and a value. The attribute name is followed by an equals sign (=), then opening quotes (“), then the attribute’s value, and finally closing quotes (“).

Look at the following example of an anchor `<a>` element:

```html
<a href="https://digitalharbor.org/"
  >Link to the Digital Harbor Foundation Website</a
>
```

- The **element** is the `<a>` tag
- The **name** is href, and is followed by an = sign
- The **value** is "https://digitalharbor.org"

The display text "Link to the Digital Harbor Foundation Website" is placed between the opening `<a>` and closing `</a>` anchor tags.

## Common Attributes

There are lots of HTML attributes, but there are some that are far more commonly used than others.

Here is a list of the most commonly used attributes and their purpose:

- **id** – Identifies an element.
- **class** – Classifies an element.
- **src** – Source of an embeddable content, typically an img
- **href** – Hyperlink reference to linked content.
- **alt** – Alternate text for an image.

## Classes and Ids

Now that you’ve reviewed some of the HTML basics, it’s time to jump into one of the key HTML concepts used in combination with CSS and JavaScript: ids and classes. Ids and classes are commonly used as CSS selectors, a review of which will be covered in the next section. However, since the ids and classes are declared in the HTML, the review is going to be included in the HTML.

### Setting These Attributes

The **class** of an element can be set in the following way:

```<div class="image-container"></div>`

The **id** of an element can be set in the following way:

```<div class="hidden-content></div>`

Id attributes are even more precise than class attributes, as they target only one unique element at a time. Regardless of which type of element they appear on, id attribute values can only be used **once per page**.

You'll want to reserve using id attributes for specific purposes, typically related to JavaScript interaction.

You’ll use the id and class attributes more when you get to the CSS lesson.
