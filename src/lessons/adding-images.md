---
slug: '/adding-images'
title: 'Adding Images'
---

## Objectives and Overview

This lesson introduces the `<img>` element and how to it to include images on your website. Additionally, you'll learn the importance of the _alt_ attribute, and how to link to both local images on your computer and external images from another source.

### Lesson Objectives

- Understand how to use the HTML `<img>` element to add an image to a webpage.
- Demonstrate the ability to add images to a webpage by linking to local and external images.
- Understand and explain the role of the _alt_ attribute when adding images to a webpage.
- Be able to add an image with appropriate alt text to a webpage.

---

## Img Element

The `<img>` element is like anchors (`<a>`) in that it behaves differently from other tags in regard to opening/closing tags.

Take a look at the Thimble screenshot above. The opening tag is actually “<img “ which closes at the end with “>” Contained within the open img tag is the description and the image url. The description is defined by:

alt=”Image description”

This is included within the entirely of the img tag. The alt description shows up if the image is unable to be viewed. Make sure to get in the habit of including this in all images you place on your website.

The src stands for “source” and is the url link to the image. If the url is entered incorrectly or is a bad link, the image won’t properly display. The url must go in quotation marks. After the alt and src are included, the img tag should be closed with a “>” Note that you don’t need to do “/>” for images.

You may have noticed that your image is larger than you wanted. See if you can figure out a solution for this!

## Including Images

## Linking to Images

### Local and External Images

## Alt Attribute

The _alt attribute_ is for _alternate text_. This attribute has two purposes: it displays when an image doesn't load, and it's used by assistive screen reader technologies. Including alt text shouldn't be optional -- this is a mandatory field to include on all images in web content. If you don't include alt text on an image and someone is using a screenreader it's as if the image doesn't exist for them.

### Writing Alt Text

### Alt Text Example

```html
<img
  src="/youth-raspberry-pi.jpg"
  alt="A group of youth sitting at a table working with Raspberry Pi."
/>
```

The alt text should be a description of the photo. You don't need to include extra text such as "An image of..." or "A photo of..." because this isn't necessary. Screenreaders often automatically insert this at the start of the description.

This can be overwhelming at times, but just try to do the best that you can. This article from The A11Y Project is a great resource: [The A11Y Project: Quick tip: Using alt text properly](https://a11yproject.com/posts/alt-text/)

### Image Attribution
