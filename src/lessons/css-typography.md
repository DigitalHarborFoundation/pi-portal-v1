---
slug: '/css-typography'
title: 'CSS Typography'
---

## Objectives and Overview

This lesson goes a bit more in depth into common CSS properties relating to typography. Typography is a vast topic. This lesson introduces some of the basic CSS properties.

### Lesson Objectives

- Understand and explain what the following CSS properties do: `font-size`, `font-family`, and `font-weight`.

---

## Typography Properties

Typography is one of the most important skills in web design. Selecting a font is only one of the aspects related to typography. There are many other aspects to consider such as the size and weight (thickness of your text, such as bold), decorations such as underline, and line spacing among many other things.

The next sections introduce the basics and provide a solid foundation for you to build your typography skills!

### Font Family

When people think of styling text, the most common association is choosing a font. There are _so many fonts_ available that this can quickly become overwhelming! Let's start digging into this process.

As your web development interest and skill builds, you may find that you're curious about certain font decisions that designers make. It's a great idea to start building up a collection of references by taking screenshots and making note of what fonts you're seeing.

Here's a a great tool for identifying fonts: [WhatFont? Chrome Browser Extension](https://chrome.google.com/webstore/detail/whatfont/jabopobgcpjmedljpbcaablpmlmfcogm?hl=en). Note that you may not be able to install this font on Chrome on your device. Even if that's the case, it's a solid tool to keep in mind for the future.

A good way to use that tool is to open up a page that you like, take a screenshot, and then use WhatFont? to note the font-family.

### Font Size

Once you select your font, the next most common consideration is the actual size of your text. The CSS property that controls this is the `font-size` property.

Here's a quick example:

```css
p {
  font-size: 16px;
}
```

The above declaration sets the text size for _all paragraphs_ to 16px. This is a fairly common size. The browser has several default font sizes which you're able to override by creating specific declarations for the elements.

There are several suggestions and scales that you can follow if you're interested. It's a good idea to not have too many variations in your size, especially for related content.

For example, you wouldn't necessarily want some of your paragraphs to be 17px and some to be 16px unless this is a very intentional decision. For the most part, it's a good idea to remain consistent for similar elements.

Here is a thorough resource covering font sizes for web design: [Learn UI Design: The Responsive Website Font Size Guidelines](https://learnui.design/blog/mobile-desktop-website-font-size-guidelines.html). That article goes into detail and some of the content may be completely unfamiliar. That's ok! Remember, this is a _going further_ resource for you to bookmark and reference as your skill grows.

### Font Weight

The `font-weight` property sets the boldness of the font. Weight is another term for boldness. Different fonts have different weights that are available. Some fonts have as several weights available whereas others have very few. You'll often see fonts with multiple weights use numeric values instead of keywords like "bold."

When choosing a font for web and interface design you'll often want to do some research and select one with multiple weights so that you have options. This isn't something to worry about much now as this course is an introduction to CSS.

For a deeper dive, check out this MDN article: [MDN: font-weight](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight).

Here's an example of how to set a variety of weights:

```css
.main-content {
  font-weight: normal;
}

.sub-title {
  font-weight: bold;
}
```

The above example uses the _normal_ and _bold_ keywords. These are fairly safe to use. If you want to experiment further check out the resourced linked above.

## Activity: Style Some Text!

Let's practice styling some text on your existing pages.

### Steps:

1. Open your project and open your stylesheet -- this example assumes you named it _style.css_
2. Change some of the font size and weights on your existing pages.
3. Open the **live server** if you haven't already
4. As you change your CSS the live server preview updates!
