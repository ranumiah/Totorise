# What Are HTML & CSS

HTML, Hyper Text Markup Language, gives content structure and meaning by defining the content as, for example, headings, paragraphs, or images.

CSS, Cascading Style Sheets, is a presentation language created to style the appearance of content like fonts and colours.

The two languages are independent of one another and should remain that way.  CSS should not be written inside of an HTML document and vice versa.

As a rule, HTML will always represent content, and CSS will always represent the appearance of that Content.


 # Understading Common HTML Terms


## Elements

Elements are designators that define the structure and content of objects withing a page.  They are identified by the use of less-than and greater-than angle brackets, `< >`, surrounding the element name like `<h1>`

## Tags

The use of less-than and greater-than angle brackets surrounding an element creates what is known as a *tag*. Tags most commonly occur in pairs of opening and closing tags. *Opening Tag* `<div>`, *Closing Tag* `</div>`. The content that falls between the openining and closing tags is *the content* of that element.

## Attributes

Attributes are properties used to provide additional information about an element. The most common attributes include the id attribute, which identifies an element; the class attribute, which classifiies an element; the src attribute, which specifies a source for embeddable content; and the href attribute, which provides a hyperlink refrence to a linked resource.

Attributes are defined within th opening tag, after an element's name.  The format for these attributes consists of the attribute name followed by an equals sign and thena guoted attribute value like `<a href="`[https://www.google.co.uk/](https://www.google.co.uk/)`"> Go To Google </a>`


# Setting Up the HTML Document Structure

HTML documents are plain text documents saved with an .html file extension rather than a .txt file extension. 

All HTML documents have a required structure that includes the following declaration and elements: `<!DOCTYPE html>`, `<html>`, `<head>`, and `<body>`.

The document type declaration, or <!DOCTYPE html>, informs web browsers which version of HTML is being used and is placed at the very beginning of the HTML document. Because we’ll be using the latest version of HTML, our document type declaration is simply <!DOCTYPE html>. Following the document type declaration, the `<html>` element signifies the beginning of the document.

Inside the `<html>` element, the `<head>` element identifies the top of the document, including any metadata (accompanying information about the page). The content inside the `<head>` element is not displayed on the web page itself. Instead, it may include the document title (which is displayed on the title bar in the browser window), links to any external files, or any other beneficial metadata.

All of the visible content within the web page will fall within the `<body>` element. A breakdown of a typical HTML document structure looks like this:

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Hello World</title>
    <link rel="stylesheet" href="main.css">
  </head>
  <body>
    <h1>Hello World</h1>
    <p>This is a web page.</p>
  </body>
</html>
```

Some elements simply receive their content or behavior from attributes within a single tag. The **Self-Closing Elements** like `<meta charset="utf-8">` don't require a closing tag.  This element instruct which character encoding is used for the HTML document. There are others **Self-Closing Elements**:

- `<br>`
- `<embed>`
- `<hr>`
- `<img>`
- `<input>`
- `<link>`
- `<meta>`
- `<param>`
- `<source>`
- `<wbr>`

# Understanding Common CSS Terms

## Selectors

As elements are added to a web page, they may be styled using CSS. A selector designates exactly which element or elements within our HTML to target and apply styles (such as color, size, and position) to. Selectors may include a combination of different qualifiers to select unique elements, all depending on how specific we wish to be. For example, we may want to select every paragraph on a page, or we may want to select only one specific paragraph on a page.

Selectors generally target an attribute value, such as an id or class value, or target the type of element, such as `<h1>` or `<p>`.

Within CSS, selectors are followed with curly brackets, {}, which encompass the styles to be applied to the selected element. The selector here is targeting all `<p>` elements.

```CSS
p { ... }
```

## Properties

Once an element is selected, a property determines the styles that will be applied to that element. Property names fall after a selector, within the curly brackets, {}, and immediately preceding a colon, :. There are numerous properties we can use, such as background, color, font-size, height, and width, and new properties are often added. In the following code, we are defining the color and font-size properties to be applied to all `<p>` elements.

```CSS
p {
  color: ...;
  font-size: ...;
}
```

## Values

So far we’ve selected an element with a selector and determined what style we’d like to apply with a property. Now we can determine the behavior of that property with a value. Values can be identified as the text between the colon, :, and semicolon, ;. Here we are selecting all `<p>` elements and setting the value of the color property to be orange and the value of the font-size property to be 16 pixels.

```CSS
p {
  color: orange;
  font-size: 16px;
}
```

# HTML

## Semantics Overview

    Semantics within HTML is the practice of giving content on the page meaning and structure by using the proper element. Semantic code describes the value of content on a page, regardless of the style or appearance of that content. The element `<p>` is semantic value, which the content wrapped is understood as a paragraph.

    However, `<div>` and `<span>` are HTML elements that act as containers solely for styling purpose.  Therefore they do not hold any semantic value.

## Block vs Inline Elements

    **Block-level** elements begin on a new line, stacking one on top of the other, and occupy any available width. Block-level elements may be nested inside one another and may wrap inline-level elements. We’ll most commonly see block-level elements used for larger pieces of content, such as paragraphs.

    **Inline-level** elements do not begin on a new line. They fall into the normal flow of a document, lining up one after the other, and only maintain the width of their content. Inline-level elements may be nested inside one another; however, they cannot wrap block-level elements. We’ll usually see inline-level elements with smaller pieces of content, such as a few words.

## Comments withing HTML & CSS

- HTML comments start with `<!-- and end with -->`
- CSS comments start with `/* and end with */`

# Using Text-Based Elements

## Headings

Headings are block-level elements, and they come in six different rankings, `<h1>` through `<h6>`. Headings help to quickly break up content and establish hierarchy, and they are key identifiers for users reading a page. They also help search engines to index and determine the content on a page.

Headings should be used in an order that is relevant to the content of a page. Each heading level should be used where it is semantically valued, and should not be used to make text bold or big—there are other, better ways to do that.

## Paragraphs

Paragraphs are defined using the `<p>` block-level element. Paragraphs can appear one after the other, adding information to a page as desired.

## Bold Text with Strong

To make text bold and place a strong importance on it, we’ll use the `<strong>` inline-level element. There are two elements that will bold text for us: the `<strong>` and `<b>` elements. It is important to understand the semantic difference between the two.

The `<strong>` element is semantically used to give strong importance to text, and is thus the most popular option for bolding text. The `<b>` element, on the other hand, semantically means to stylistically offset text, which isn’t always the best choice for text deserving prominent attention. We have to gauge the significance of the text we wish to set as bold and to choose an element accordingly.

## Italicize Text with Emphasis

To italicize text, thereby placing emphasis on it, we’ll use the `<em>` inline-level element. As with the elements for bold text, there are two different elements that will italicize text, each with a slightly different semantic meaning.

The `<em>` element is used semantically to place a stressed emphasis on text; it is thus the most popular option for italicizing text. The other option, the `<i>` element, is used semantically to convey text in an alternative voice or tone, almost as if it were placed in quotation marks. Again, we will need to gauge the significance of the text we want to italicize and choose an element accordingly.

# Building Structure

HTML5 introduced new structurally based elements, including the `<header>`, `<nav>`, `<article>`, `<section>`, `<aside>`, and `<footer>` elements. All of these new elements are intended to give meaning to the organization of our pages and improve our structural semantics. They are all block-level elements and do not have any implied position or style. Additionally, all of these elements may be used multiple times per page, so long as each use reflects the proper semantic meaning.

## `<header>` vs `<head>` vs `<h1>` through `<h6>` Elements

It is easy to confuse the `<header>` element with the `<head>` element or the heading elements, `<h1>` through `<h6>`. They all have different semantic meanings and should be used according to their meanings. For reference…

The `<header>` element is a structural element that outlines the heading of a segment of a page. It falls within the `<body>` element.

The `<head>` element is not displayed on a page and is used to outline metadata, including the document title, and links to external files. It falls directly within the `<html>` element.

Heading elements, `<h1>` through `<h6>`, are used to designate multiple levels of text headings throughout a page.

## Navigation

The `<nav>` element identifies a section of major navigational links on a page. The `<nav>` element should be reserved for primary navigation sections only, such as global navigation, a table of contents, previous/next links, or other noteworthy groups of navigational links.

Most commonly, links included within the `<nav>` element will link to other pages within the same website or to parts of the same web page. Miscellaneous one-off links should not be wrapped within the `<nav>` element; they should use the anchor element, `<a>`, and the anchor element alone.

# Article

The `<article>` element is used to identify a section of independent, self-contained content that may be independently distributed or reused. We’ll often use the `<article>` element to mark up blog posts, newspaper articles, user-submitted content, and the like.

When deciding whether to use the `<article>` element, we must determine if the content within the element could be replicated elsewhere without any confusion. If the content within the `<article>` element were removed from the context of the page and placed, for example, within an email or printed work, that content should still make sense.

# Section

The `<section>` element is used to identify a thematic grouping of content, which generally, but not always, includes a heading. The grouping of content within the `<section>` element may be generic in nature, but it’s useful to identify all of the content as related.

The `<section>` element is commonly used to break up and provide hierarchy to a page.

# Deciding Between `<article>`, `<section>`, or `<div>` Elements

At times it becomes fairly difficult to decide which element—`<article>`, `<section>`, or `<div>`—is the best element for the job based on its semantic meaning. The trick here, as with every semantic decision, is to look at the content.

Both the `<article>` and `<section>` elements contribute to a document’s structure and help to outline a document. If the content is being grouped solely for styling purposes and doesn’t provide value to the outline of a document, use the `<div>` element.

If the content adds to the document outline and it can be independently redistributed or syndicated, use the `<article>` element.

If the content adds to the document outline and represents a thematic group of content, use the `<section>` element.

# Aside

The `<aside>` element holds content, such as sidebars, inserts, or brief explanations, that is tangentially related to the content surrounding it. When used within an `<article>` element, for example, the `<aside>` element may identify content related to the author of the article.

We may instinctively think of an `<aside>` element as an element that appears off to the left or right side of a page. We have to remember, though, that all of the structural elements, including the `<aside>` element, are block-level elements and as such will appear on a new line, occupying the full available width of the page or of the element they are nested within, also known as their parent element.

# Footer

The `<footer>` element identifies the closing or end of a page, article, section, or other segment of a page. Generally the `<footer>` element is found at the bottom of its parent. Content within the `<footer>` element should be relative information and should not diverge from the document or section it is included within.

# CSS

CSS is a complex language that packs quite a bit of power.

It allows us to add layout and design to our pages, and it allows us to share those styles from element to element and page to page. It’s crucial to know exactly how styles are rendered. Specifically, we’ll need to know how different types of selectors work and how the order of those selectors can affect how our styles are rendered. We’ll also want to understand a few common property values that continually appear within CSS, particularly those that deal with color and length.

# The Cascade

Within CSS, all styles cascade **from the top** of a style sheet **to the bottom**, allowing different styles to be added or overwritten as the style sheet progresses. For example, The below example will override all Paragraph to have green background NOT Red But the font size will be 24px.

```CSS
p {
  background: red;
  font-size: 24px;
}
p {
  background: green;
}
```

## Cascading Properties

The cascade also works with properties inside individual selectors.

```CSS
p {
  background: yellow;
  background: green;
}
```

# Calculating Specificity

All styles will cascade from the top of our style sheet to the bottom of our style sheet. There are, however, times where the cascade doesn’t play so nicely. Those times occur when different types of selectors are used and the specificity of those selectors breaks the cascade

Every selector in CSS has a specificity weight. A selector’s specificity weight, along with its placement in the cascade, identifies how its styles will be rendered.

- The **type** selector has the lowest specificity weight and holds a point value of 0-0-1.
- The **class** selector has a medium specificity weight and holds a point value of 0-1-0.
- The **ID** selector has a high specificity weight and holds a point value of 1-0-0.

As we can see, specificity points are calculated using three columns. The first column counts ID selectors, the second column counts class selectors, and the third column counts type selectors. What’s important to note here is that the ID selector has a higher specificity weight than the class selector, and the class selector has a higher specificity weight than the type selector.

### Specificity Points

    Specificity points are intentionally hyphenated, as their values are not computed from a base of 10. Class selectors do not hold a point value of 10, and ID selectors do not hold a point value of 100. Instead, these points should be read as 0-1-0 and 1-0-0 respectively. We’ll take a closer look at why these point values are hyphenated shortly, when we combine selectors.

The higher the specificity weight of a selector, the more superiority the selector is given when a styling conflict occurs. For example, if a paragraph element is selected using a type selector in one place and an ID selector in another, the ID selector will take precedence over the type selector regardless of where the ID selector appears in the cascade.

For Example

```HTML
<p id="food">...</p>
```
```CSS
#food {
  background: green;
}
p {
  background: yellow;
}
```

Even though *Type Selector* is the last override the *ID Selector* will take precedence becuase it has a higher *Specificity Weight*; Therefore the background will be green.

The specificity weights of different types of selectors are incredibly important to remember. At times styles may not appear on elements as intended, and chances are the specificity weights of our selectors are breaking the cascade, therefore our styles are not appearing properly.

### Combining Selectors

By combining selectors we can be more specific about which element or group of elements we’d like to select.

For example, say we want to select all paragraph elements that reside within an element with a class attribute value of hotdog and set their background color to brown. However, if one of those paragraphs happens to have the class attribute value of mustard, we want to set its background color to yellow. Our HTML and CSS may look like the following:

```HTML
<div class="hotdog">
  <p>...</p>
  <p>...</p>
  <p class="mustard">...</p>
</div>
```
```CSS
.hotdog p {
  background: brown;
}
.hotdog p.mustard {
  background: yellow;
}
```

When selectors are combined they should be read from right to left. The selector farthest to the right, directly before the opening curly bracket, is known as the key selector. The key selector identifies exactly which element the styles will be applied to. Any selector to the left of the key selector will serve as a prequalifier.

### Spaces Within Selectors

Within the previous combined selector, .hotdog p.mustard, there is a space between the hotdog class selector and the paragraph type selector but not between the paragraph type selector and the mustard class selector. The use, and omission, of spaces makes a large difference in selectors.

Since there isn’t a space between the paragraph type selector and the mustard class selector that means the selector will only select paragraph elements with the class of mustard. If the paragraph type selector was removed, and the mustard class selector had spaces on both sides of it, it would select any element with the class of mustard, not just paragraphs.

The best practice is to not prefix a class selector with a type selector. Generally we want to select any element with a given class, not just one type of element. And following this best practice, our new combined selector would be better as .hotdog .mustard.

