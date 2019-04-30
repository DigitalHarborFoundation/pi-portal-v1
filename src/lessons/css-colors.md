---
slug: '/css-colors'
title: 'CSS Colors'
---

## Objectives and Overview

This lesson goes a bit more in depth into common CSS properties relating to color and typography. After reading through this lesson and working with the examples you'll be able to start adding some visual excitement to your page's text elements.

### Lesson Objectives

-

---

## Color Properties

Using CSS to set the color of HTML elements is one of the most common -- and fun! -- parts of CSS. At the most basic level, CSS is used to style text color and the background color of elements. There are more involved aspects such as using gradients, but for now let's focus on the main applications: text and background color.

Changing color drastically alters the mood and feel of your content. There's a wealth of resources about color selection -- some helpful ones will be linked at the end of this lesson. The examples in these sections are most effective if you _actively practice_. Open up VS Code and start working on the CSS for your actual webpage!

### Color Values

There are several different options for setting color values. Since this applies to both text and background color, let's cover the three most common methods before moving on.

#### Using Color Name Keywords

For many common colors you can just set it via its name keyword.

Not all color names work! You may try one that you think is available and notice that nothing happens. This is because CSS ignores values that it doesn't recognize. If this happens, check two things:

- Check that you didn't typo.
- Check if you used an available color keyword.

Here's an example of a color value using a keyword:

```css
h2 {
  color: darkgray;
}
```

This declaration sets the color of all **h2** elements to dark gray since _darkgray_ is an available keyword.

MDN has a great list of the color name keywords that are acceptable. Check out the list here: [MDN: Available CSS Color Keywords](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#Color_keywords).

#### Using Hex Values

Another method is to use the _hex values_ of a color. This method allows for more control since you aren't restricted to available keywords. Here's what this method looks like:

```css
h2 {
  color: #2a2a2a;
}
```

This declaration sets the color of all **h2** elements to a dark gray using the hex value.

There's plenty of tools and reference material available for hex values. Here is a link to _HTML Color Codes_, a web tool for generating both hex and RGB values: [HTML Color Codes](https://htmlcolorcodes.com/).

#### Using RGB

RGB (Red, Green, Blue) is another common method for choosing colors. This also allows for more control. You're setting the red, green, and blue values of a color on an intensity scale of 0 (none) to 255 (full). The combination of these values allows for the creation of any color on the RGB spectrum.

Here's an example:

```css
h2 {
  color: rgb(255, 0, 100);
}
```

The above example produces a bright pink. The first value, red, is at full intensity. The blue is at 0, and the green is somewhere in the middle.

The resource linked in the previous section also contains RGB values. Go ahead and experiment!

### Text Color

You're able to change the color of any element's text by using the `color` property. The value is where you set the actual color using one of the three methods outlined.

Let's work through an example to change the text color of our heading and paragraph elements. For simplicity, this example uses color keywords but you're encouraged to try both the hex and RGB methods as well!

Let's begin by setting the color of all headings to a dark gray:

```css
h1,
h2,
h3,
h4,
h5,
h6 {
  color: darkslategrey;
}
```

This will set all of the headings to be a dark grey!

**Note**: You can use multiple selectors in a single declaration. It's a best practice to put each one on it's own line since that's easier to glance than if they were grouped on a single line.

Next, let's set the paragraph text and list elements to be a gray that's slightly lighter than the headings:

```css
p,
li {
  color: slategrey;
}
```

Once you get the hang of the syntax go ahead and make some changes to some of your text colors before moving on.

### Background Color

An element's background color can be set by using the `background` property. Let's set the background of the page's body to be slightly off white:

```css
body {
  background: snow;
}
```

**Note**: Using `body` as a selector sets the background of the entire body to a certain color. This is helpful if you want the entire page background to be a certain color.

Once you begin creating containers using elements such as `<div>`s you'll be able to get creative with background colors! For now, just focus on changing the `<body>` color to practice the syntax.

### Note About Contrast Ratios

While it's fun to experiment with color combinations, it's good to be mindful of the _color contrast ratio_ between your color choices. This ratio is a mathematic evaluation of the difference between foreground and background colors.

Maintaining an acceptable contrast ratio is important for two factors: readability of your content, and accessibility of the content to users with visual impairment. Content with low contrast ratios is harder to read and may even be unreadable to someone with a visual impairment. Designing with contrast ratios in mind improves your content for all users and can make the difference between someone being able to fully experience your site and not.

If you're interested in reading more about color contrast ratios and accessibility, check out this article from _The A11Y Project_: [The A11Y Project: What is color contrast?](https://a11yproject.com/posts/what-is-color-contrast/).

There are several online tools available for checking contrast ratios. Here's a link to a quick, reliable contrast checker: [Contrast Ratio Checker](https://contrast-ratio.com/).
