---
title: 'CSS and the capability to work on two sub-trees'
publishedAt: '2023-03-12'
summary: 'Showing the capability of :has() selector, the posibility to select an element based on a different sub-tree'
---

CSS is a crusial technology nowadays

CSS selectors are an specific section of the Document Object Model (DOM), or a list of elements which usually
are siblings between them - if they aren't syblings the complexity level increases dramatically but usually in some specific cases.

There is many articles which discuss about the `:has()` operator and its usage in CSS.
Some popular resources includes the Mozilla Developer Network (MDN) and CSS Tricks.

# Articles

The `:has()` selector, also known as the "subject selector," is a relatively new addition to CSS that allows for more advanced targeting of HTML elements based on their contents. This selector was introduced in the CSS Selectors Level 4 specification, which is still a working draft as of the time of this writing.

At its core, the `:has()` selector allows you to target an element based on whether or not it contains another specific element or set of elements. For example, consider the following HTML markup:

```html
<div class="container">
  <h1>Title</h1>
  <p>Some text.</p>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
</div>
```

Using the :has() selector, we could target the `<div>` element only if it contains a `<ul>` element:

```css
/* Select the .container element only if it contains a <ul> */
.container:has(ul) {
  background-color: yellow;
}
```

In this case, the background-color property would only be applied to the .container element if it contains a `<ul>` element. If the `<ul>` element were removed, the selector would no longer match and the background color would not be applied.

One of the most powerful features of the :has() selector is that it can be chained together with other selectors, allowing for more complex targeting. For example, consider the following markup:

```html
<div class="container">
  <h1>Title</h1>
  <p>Some text.</p>
  <ul>
    <li class="item">Item 1</li>
    <li class="item">Item 2</li>
  </ul>
</div>
```

Using the :has() selector, we could target the .container element only if it contains a `<ul>` element, and that `<ul>` element contains at least one element with the .item class:

```css
/* Select the .container element only if it contains a <ul> that contains an element with the .item class */
.container:has(ul:has(.item)) {
  background-color: yellow;
}
```

In this case, the background-color property would only be applied to the .container element if it contains a `<ul>` element that itself contains at least one element with the .item class. This kind of targeting would be impossible with traditional CSS selectors.

One thing to note is that the :has() selector is not currently supported by any major web browser, although it is expected to be added in the future. In the meantime, there are JavaScript-based workarounds that can achieve similar results.

In conclusion, the :has() selector is a powerful addition to CSS that allows for more advanced targeting of HTML elements based on their contents. While it is not yet widely supported, it is a promising feature that will likely become more important in the future.
