# What Are HTML & CSS

HTML, Hyper Text Markup Language, gives content structure and meaning by defining the content as, for example, headings, paragraphs, or images.

CSS, Cascading Style Sheets, is a presentation language created to style the appearance of content like fonts and colours.

The two languages are independent of one another and should remain that way.  CSS should not be written inside of an HTML document and vice versa.

As a rule, HTML will always represent content, and CSS will always represent the appearance of that Content.


# Understading Common HTML Terms

![](html-syntax-outline.png)

### Elements

Elements are designators that define the structure and content of objects withing a page.  They are identified by the use of less-than and greater-than angle brackets, `< >`, surrounding the element name like `<h1>`

### Tags

The use of less-than and greater-than angle brackets surrounding an element creates what is known as a *tag*. Tags most commonly occur in pairs of opening and closing tags. *Opening Tag* `<div>`, *Closing Tag* `</div>`. The content that falls between the openining and closing tags is *the content* of that element.

###Attributes

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

![](css-syntax-outline.png)

### Selectors

As elements are added to a web page, they may be styled using CSS. A selector designates exactly which element or elements within our HTML to target and apply styles (such as color, size, and position) to. Selectors may include a combination of different qualifiers to select unique elements, all depending on how specific we wish to be. For example, we may want to select every paragraph on a page, or we may want to select only one specific paragraph on a page.

Selectors generally target an attribute value, such as an id or class value, or target the type of element, such as `<h1>` or `<p>`.

Within CSS, selectors are followed with curly brackets, {}, which encompass the styles to be applied to the selected element. The selector here is targeting all `<p>` elements.

```CSS
p { ... }
```

### Properties

Once an element is selected, a property determines the styles that will be applied to that element. Property names fall after a selector, within the curly brackets, {}, and immediately preceding a colon, :. There are numerous properties we can use, such as background, color, font-size, height, and width, and new properties are often added. In the following code, we are defining the color and font-size properties to be applied to all `<p>` elements.

```CSS
p {
  color: ...;
  font-size: ...;
}
```

### Values

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

### Comments withing HTML & CSS

- HTML comments start with `<!-- and end with -->`
- CSS comments start with `/* and end with */`

### Encoding Special Characters

Each encoded character will *begin with an ampersand*, **&**, and *end with a semicolon*, **;**. What falls between the ampersand and semicolon is a character’s unique encoding, be it a name or numeric encoding. For example:
>`“resumé” as resum&eacute;`

# Using Text-Based Elements

### Headings

Headings are block-level elements, and they come in six different rankings, `<h1>` through `<h6>`. Headings help to quickly break up content and establish hierarchy, and they are key identifiers for users reading a page. They also help search engines to index and determine the content on a page.

Headings should be used in an order that is relevant to the content of a page. Each heading level should be used where it is semantically valued, and should not be used to make text bold or big—there are other, better ways to do that.

### Paragraphs

Paragraphs are defined using the `<p>` block-level element. Paragraphs can appear one after the other, adding information to a page as desired.

### Bold Text with Strong

To make text bold and place a strong importance on it, we’ll use the `<strong>` inline-level element. There are two elements that will bold text for us: the `<strong>` and `<b>` elements. It is important to understand the semantic difference between the two.

The `<strong>` element is semantically used to give strong importance to text, and is thus the most popular option for bolding text. The `<b>` element, on the other hand, semantically means to stylistically offset text, which isn’t always the best choice for text deserving prominent attention. We have to gauge the significance of the text we wish to set as bold and to choose an element accordingly.

### Italicize Text with Emphasis

To italicize text, thereby placing emphasis on it, we’ll use the `<em>` inline-level element. As with the elements for bold text, there are two different elements that will italicize text, each with a slightly different semantic meaning.

The `<em>` element is used semantically to place a stressed emphasis on text; it is thus the most popular option for italicizing text. The other option, the `<i>` element, is used semantically to convey text in an alternative voice or tone, almost as if it were placed in quotation marks. Again, we will need to gauge the significance of the text we want to italicize and choose an element accordingly.

# Building Structure

HTML5 introduced new structurally based elements, including the `<header>`, `<nav>`, `<article>`, `<section>`, `<aside>`, and `<footer>` elements. All of these new elements are intended to give meaning to the organization of our pages and improve our structural semantics. They are all block-level elements and do not have any implied position or style. Additionally, all of these elements may be used multiple times per page, so long as each use reflects the proper semantic meaning.

![](building-structure.png)

### `<header>` vs `<head>` vs `<h1>` through `<h6>` Elements

It is easy to confuse the `<header>` element with the `<head>` element or the heading elements, `<h1>` through `<h6>`. They all have different semantic meanings and should be used according to their meanings. For reference…

The `<header>` element is a structural element that outlines the heading of a segment of a page. It falls within the `<body>` element.

The `<head>` element is not displayed on a page and is used to outline metadata, including the document title, and links to external files. It falls directly within the `<html>` element.

Heading elements, `<h1>` through `<h6>`, are used to designate multiple levels of text headings throughout a page.

### Navigation

The `<nav>` element identifies a section of major navigational links on a page. The `<nav>` element should be reserved for primary navigation sections only, such as global navigation, a table of contents, previous/next links, or other noteworthy groups of navigational links.

Most commonly, links included within the `<nav>` element will link to other pages within the same website or to parts of the same web page. Miscellaneous one-off links should not be wrapped within the `<nav>` element; they should use the anchor element, `<a>`, and the anchor element alone.

### Article

The `<article>` element is used to identify a section of independent, self-contained content that may be independently distributed or reused. We’ll often use the `<article>` element to mark up blog posts, newspaper articles, user-submitted content, and the like.

When deciding whether to use the `<article>` element, we must determine if the content within the element could be replicated elsewhere without any confusion. If the content within the `<article>` element were removed from the context of the page and placed, for example, within an email or printed work, that content should still make sense.

### Section

The `<section>` element is used to identify a thematic grouping of content, which generally, but not always, includes a heading. The grouping of content within the `<section>` element may be generic in nature, but it’s useful to identify all of the content as related.

The `<section>` element is commonly used to break up and provide hierarchy to a page.

### Deciding Between `<article>`, `<section>`, or `<div>` Elements

At times it becomes fairly difficult to decide which element—`<article>`, `<section>`, or `<div>`—is the best element for the job based on its semantic meaning. The trick here, as with every semantic decision, is to look at the content.

Both the `<article>` and `<section>` elements contribute to a document’s structure and help to outline a document. If the content is being grouped solely for styling purposes and doesn’t provide value to the outline of a document, use the `<div>` element.

If the content adds to the document outline and it can be independently redistributed or syndicated, use the `<article>` element.

If the content adds to the document outline and represents a thematic group of content, use the `<section>` element.

### Aside

The `<aside>` element holds content, such as sidebars, inserts, or brief explanations, that is tangentially related to the content surrounding it. When used within an `<article>` element, for example, the `<aside>` element may identify content related to the author of the article.

We may instinctively think of an `<aside>` element as an element that appears off to the left or right side of a page. We have to remember, though, that all of the structural elements, including the `<aside>` element, are block-level elements and as such will appear on a new line, occupying the full available width of the page or of the element they are nested within, also known as their parent element.

### Footer

The `<footer>` element identifies the closing or end of a page, article, section, or other segment of a page. Generally the `<footer>` element is found at the bottom of its parent. Content within the `<footer>` element should be relative information and should not diverge from the document or section it is included within.

# CSS

CSS is a complex language that packs quite a bit of power.

It allows us to add layout and design to our pages, and it allows us to share those styles from element to element and page to page. It’s crucial to know exactly how styles are rendered. Specifically, we’ll need to know how different types of selectors work and how the order of those selectors can affect how our styles are rendered. We’ll also want to understand a few common property values that continually appear within CSS, particularly those that deal with color and length.

### The Cascade

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

### Cascading Properties

The cascade also works with properties inside individual selectors.

```CSS
p {
  background: yellow;
  background: green;
}
```

## Calculating Specificity

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

### Specificity Within Combined Selectors

When selectors are combined, so are the specificity weights of the individual selectors. These combined specificity weights can be calculated by counting each different type of selector within a combined selector.

Looking at our combined selectors from before, the first selector, .hotdog p, had both a class selector and a type selector. Knowing that the point value of a class selector is 0-1-0 and the point value of a type selector is 0-0-1, the total combined point value would be 0-1-1, found by adding up each kind of selector.

The second selector, .hotdog p.mustard, had two class selectors and one type selector. Combined, the selector has a specificity point value of 0-2-1. The 0 in the first column is for zero ID selectors, the 2 in the second column is for two class selectors, and the 1 in the last column is for one type selector.

Comparing the two selectors, the second selector, with its two classes, has a noticeably higher specificity weight and point value. As such it will take precedence within the cascade. If we were to flip the order of these selectors within our style sheet, placing the higher-weighted selector above the lower-weighted selector as shown here, the appearance of their styles would not be affected due to each selector’s specificity weight.

```CSS
.hotdog p.mustard {
  background: yellow;
}
.hotdog p {
  background: brown;
}
```

In general we want to always keep an eye on the specificity weights of our selectors. The higher our specificity weights rise, the more likely our cascade is to break.

### Layering Styles with Multiple Classes

One way to keep the specificity weights of our selectors low is to be as modular as possible, sharing similar styles from element to element. And one way to be as modular as possible is to layer on different styles by using multiple classes.

Elements within HTML can have more than one class attribute value so long as each value is space separated. With that, we can place certain styles on all elements of one sort while placing other styles only on specific elements of that sort.

We can tie styles we want to continually reuse to one class and layer on additional styles from another class.

Let’s take a look at buttons, for example. Say we want all of our buttons to have a font size of 16 pixels, but we want the background color of our buttons to vary depending on where the buttons are used. We can create a few classes and layer them on an element as necessary to apply the desired styles.

```HTML
<a class="btn btn-danger">...</a>
<a class="btn btn-success">...</a>
```
```CSS
.btn {
  font-size: 16px;
}
.btn-danger {
  background: red;
}
.btn-success {
  background: green;
}
```

Here you can see two anchor elements, both with multiple class attribute values. The first class, btn, is used to apply a font size of 16 pixels to each of the elements. Then, the first anchor element uses an additional class of btn-danger to apply a red background color while the second anchor element uses an additional class of btn-success to apply a green background color. Our styles here are clean and modular.

Using multiple classes, we can layer on as many styles as we wish, keeping our code lean and our specificity weights low. Much like understanding the cascade and calculating specificity, this is a practice that will take time to fully absorb, but we’ll get better with each lesson.

# Common CSS Property Values

### Colours

All color values within CSS are defined on an sRGB (or standard red, green, and blue) color space. Colors within this space are formed by mixing red, green, and blue color channels together, mirroring the way that televisions and monitors generate all the different colors they display. By mixing different levels of red, green, and blue, we can create millions of colors—and find nearly any color we’d like.

Currently there are four primary ways to represent sRGB colors within CSS:
- keywords
- hexadecimal notation
- RGB values
- HSL values

keyword color values are simple in nature, they provide limited options and thus are not the most popular color value choice.

Hexadecimal Colors consist of a pound followed by 3 to 6 character figure.  The figure can be 0 to 9 and letters a to f.  These values map to the red, green, and blue color channels. If the 6 character figure has the same value pairs then it can be shorthanded to 3 i.e. #ff6600 ==> #f60.

![](hexadecimal-syntax.png)

### RGB & RGBa Colors

RGB color values are stated using the rgb() function, which stands for red, green, and blue. The function accepts three comma-separated values, each of which is an integer from 0 to 255. A value of 0 would be pure black; a value of 255 would be pure white.

As we might expect, the first value within the rgb() function represents the red channel, the second value represents the green channel, and the third value represents the blue channel.

RGB color values may also include an alpha, or transparency, channel by using the rgba() function. The rgba() function requires a fourth value, which must be a number between 0 and 1, including decimals. A value of 0 creates a fully transparent color, meaning it would be invisible, and a value of 1 creates a fully opaque color. Any decimal value in between 0 and 1 would create a semi-transparent color.

If we wanted our shade of orange to appear 50% opaque, we would use an RGBa color value of rgba(255, 102, 0, .5).


```CSS
.task {
  background: rgba(128, 0, 0, .25);
}
.count {
  background: rgba(255, 255, 0, 1);
}
```
RGB color values are becoming more popular, especially due to the ability to create semi-transparent colors using RGBa.

### HSL & HSLa Colors

HSL color values are stated using the hsl() function, which stands for hue, saturation, and lightness. Within the parentheses, the function accepts three comma-separated values, much like rgb().

The first value, the hue, is a unitless number from 0 to 360. The numbers0through 360 represent the color wheel, and the value identifies the degree of a color on the color wheel.

The second and third values, the saturation and lightness, are percentage values from 0 to 100%. The saturation value identifies how saturated with color the hue is, with 0 being grayscale and 100% being fully saturated. The lightness identifies how dark or light the hue value is, with 0 being completely black and 100% being completely white.

Returning to our shade of orange, as an HSL color value it would be written as hsl(24, 100%, 50%).

HSL color values, like RGBa, may also include an alpha, or transparency, channel with the use of the hsla() function. The behavior of the alpha channel is just like that of the rgba() function. A fourth value between 0 and 1, including decimals, must be added to the function to identify the degree of opacity.

Our shade of orange as an HSLa color set to 50% opaque would be represented as hsla(24, 100%, 50%, .5).

The same 25% opaque maroon background color and 100% opaque yellow background color from before would look like the following as HSLa color values.

```CSS
task {
  background: hsl(0, 100%, 25%, .25);
}
.count {
  background: hsl(60, 100%, 50%, 1);
}
```

The HSL color value is the newest color value available within CSS. Due to its age and support within browsers, though, it isn’t as widely used as the other values.

### Lengths

Length values within CSS are similar to colors in that there are a handful of different types of values for length, all of which serve distinct purposes. Length values come in two different forms, absolute and relative, each of which uses different units of measurement.

### Absolute Lengths

Absolute length values are the simplest length values, as they are fixed to a physical measurement, such as inches, centimeters, or millimeters. The most popular absolute unit of measurement is known as the pixel and is represented by the px unit notation.

### Pixels

The pixel is equal to 1/96th of an inch; thus there are 96 pixels in an inch. The exact measurement of a pixel, however, may vary slightly between high-density and low-density viewing devices.

Pixels have been around for quite some time and are commonly used with a handful of different properties. The code here is using pixels to set the font size of all paragraphs to 14 pixels.

### Relative Lengths

In addition to absolute length values, there are also relative length values. Relative length values are a little more complicated, as they are not fixed units of measurement; they rely on the length of another measurement.

### Percentages

Percentages, represented by the % unit notation, are one of the most popular relative values. Percentage lengths are defined in relation to the length of another object. For example, to set the width of an element to 50%, we have to know the width of its parent element, the element it is nested within, and then identify 50% of the parent element’s width

### Em

The em unit is also a very popular relative value. The em unit is represented by the em unit notation, and its length is calculated based on an element’s font size.

A single em unit is equivalent to an element’s font size. So, for example, if an element has a font size of 14 pixels and a width set to 5em, the width would equal 70 pixels (14 pixels multiplied by 5).

```CSS
.banner {
  font-size: 14px;
  width: 5em;
}
```

When a font size is not explicitly stated for an element, the em unit will be relative to the font size of the closest parent element with a stated font size.

The em unit is often used for styling text, including font sizes, as well as spacing around text, including margins and paddings

# Opening the Box Model

### Display

Exactly how elements are displayed—as block-level elements, inline elements, or something else—is determined by the display property. Every element has a default display property value; however, as with all other property values, that value may be overwritten. There are quite a few values for the display property, but the most common are block, inline, inline-block, and none.

```CSS
p {
  display: none;
  display: block;
  display: inline;
  display: inline-block;
}
```
- A value of none will completely hide an element and render the page as if that element doesn’t exist.
- A value of block will make that element a block-level element.
- A value of inline will make that element an inline-level element.
- Things get interesting with the inline-block value. Using this value will allow an element to behave as a block-level element, accepting all box model properties (which we’ll cover soon). However, the element will be displayed in line with other elements, and it will not begin on a new line by default.

### Working with the Box Model

The Box Model Concept: **Every Element On A Page Is A Rectangular Box**, and may have *width*, *padding*, *borders*, and *margin*

![](box-model.png)

The box model broken down, including a base height and width plus paddings, borders, and margins
Using the formulas, we can find the total height and width of our example code.

- Width: 492px = 20px + 6px + 20px + 400px + 20px + 6px + 20px
- Height: 192px = 20px + 6px + 20px + 100px + 20px + 6px + 20px

The box model is without question one of the more confusing parts of HTML and CSS. We set a width property value of 400 pixels, but the actual width of our element is 492 pixels. By default the box model is additive; thus to determine the actual size of a box we need to take into account padding, borders, and margins for all four sides of the box. Our width not only includes the width property value, but also the size of the left and right padding, left and right borders, and left and right margins.

# Width & Height

Every element has default width and height. That width and height may be 0 pixels, but browsers, by default, will render every element with size. Depending on how an element is displayed, the default width and height may be adequate. If an element is key to the layout of a page, it may require specified width and height property values. In this case, the property values for non-inline elements may be specified.

The default width of an element depends on its display value. Block-level elements have a default width of 100%, consuming the entire horizontal space available. Inline and inline-block elements expand and contract horizontally to accommodate their content. Inline-level elements cannot have a fixed size, thus the width and height properties are only relevant to non-inline elements. 

The default height of an element is determined by its content. An element will expand and contract vertically as necessary to accommodate its content.

### Sizing Inline-Level Elements
>Please keep in mind that inline-level elements will not accept the width and height properties or any values tied to them. Block and inline-block elements will, however, accept the width and height properties and their corresponding values.

# Margin & Padding

Depending on the element, browsers may apply default margins and padding to an element to help with legibility and clarity. We will generally see this with text-based elements. The default margins and padding for these elements may differ from browser to browser and element to element.

The margin property allows us to set the amount of space that surrounds an element. Margins for an element fall outside of any border and are completely transparent in color. Margins can be used to help position elements in a particular place on a page or to provide breathing room, keeping all other elements a safe distance away.

One oddity with the margin property is that vertical margins, *top and bottom, are not accepted by inline-level elements*. These vertical margins are, however, accepted by block-level and inline-block elements.

The padding property is very similar to the margin property; however, it falls inside of an element’s border, should an element have a border. The padding property is used to provide spacing directly within an element.

The padding property, unlike the margin property, works vertically on inline-level elements. This vertical padding may blend into the line above or below the given element, but it will be displayed.

### Margin & Padding on Inline-Level Elements
>Inline-level elements are affected a bit differently than block and inline-block elements when it comes to margins and padding. Margins only work horizontally—left and right—on inline-level elements. Padding works on all four sides of inline-level elements; however, the vertical padding—the top and bottom—may bleed into the lines above and below an element.

>Margins and padding work like normal for block and inline-block elements.

### Margin & Padding Declarations

*To set unique values for all four sides of an element, specify those values in the order of top, right, bottom, and left, moving clockwise*

*Margin and Padding both have same properties*

```CSS
div {
  /* all 4 sides at 10px */
  margin: 10px
  /* top & bottom at 10px and left & right 20px */
  padding: 10px 20px;
  /* top, right, bottom, left */
  margin: 10px 20px 0 15px;
  /* Below remaining are all longhanded properties where as the above were shorthanded*/
  padding-top: 10px;
  margin-right: 20px;
  padding-bottom: 0px;
  margin-left: 15px;
}
```
### Margin & Padding Colors
>The margin and padding properties are completely transparent and do not accept any color values. Being transparent, though, they show the background colors of relative elements. For margins, we see the background color of the parent element, and for padding, we see the background color of the element the padding is applied to.

# Borders

Borders fall between the padding and margin, providing an outline around an element. The border property requires three values: width, style, and color. Shorthand values for the border property are stated in that order—width, style, color. In longhand, these three values can be broken up into the border-width, border-style, and border-color properties. These longhand properties are useful for changing, or overwriting, a single border value.

The most common style values are:
- solid
- double
- dashed
- dotted
- none

### Individual Border Sides

As with the margin and padding properties, borders can be placed on one side of an element at a time if we’d like. Doing so requires new properties: border-top, border-right, border-bottom, and border-left.

### Border Radius

While we’re looking at borders and their different properties, we need to examine the border-radius property, which enables us to round the corners of an element.

The border-radius property accepts length units, including percentages and pixels, that identify the radius by which the corners of an element are to be rounded. A single value will round all four corners of an element equally; two values will round the top-left/bottom-right and top-right/bottom-left corners in that order; four values will round the top-left, top-right, bottom-right, and bottom-left corners in that order.

When considering the order in which multiple values are applied to the border-radius property (as well as the margin and padding properties), remember that they move in a clockwise fashion starting at the top left of an element.

The border-radius property may also be broken out into longhand properties that allow us to change the radii of individual corners of an element. These longhand properties begin with border, continue with the corner’s vertical location (top or bottom) and the corner’s horizontal location (left or right), and then end with radius. For example, to change the top-right corner radius of a `<div>`, the border-top-right-radius property can be used.

# Box Sizing

Until now the box model has been an additive design. If you set the width of an element to 400 pixels and then add 20 pixels of padding and a border of 10 pixels on every side, the actual full width of the element becomes 460 pixels. Remember, we need to add the width, padding, and border property values together to get the actual, full width of an element.

The box model may, however, be changed to support different calculations. CSS3 introduced the box-sizing property, which allows us to change exactly how the box model works and how an element’s size is calculated. The property accepts three primary values—content-box, padding-box, and border-box—each of which has a slightly different impact on how the box size is calculated.

### Content Box

The content-box value is the default value, leaving the box model as an additive design. If we don’t use the box-sizing property, this will be the default value for all elements. The size of an element begins with the width and height properties, and then any padding, border, or margin property values are added on from there.

### Padding Box

The padding-box value alters the box model by including any padding property values within the width and height of an element. When using the padding-box value, if an element has a width of 400 pixels and a padding of 20 pixels around every side, the actual width will remain 400 pixels. As any padding values increase, the content size within an element shrinks proportionately.

If we add a border or margin, those values will be added to the width or height properties to calculate the full box size. For example, if we add a border of 10 pixels and a padding of 20 pixels around every side of the element with a width of 400 pixels, the actual full width will become 420 pixels.

### Border Box

Lastly, the border-box value alters the box model so that any border or padding property values are included within the width and height of an element. When using the border-box value, if an element has a width of 400 pixels, a padding of 20 pixels around every side, and a border of 10 pixels around every side, the actual width will remain 400 pixels.

If we add a margin, those values will need to be added to calculate the full box size. No matter which box-sizing property value is used, any margin values will need to be added to calculate the full size of the element.

## Vender Specific Prefixes

The box-sizing property was introduced in CSS3. The CSS3 properties are not all implemented by all browsers therefore sometime it is neccessary to add vender specific prefixes as shown below to make it broswer compatabile

```CSS
div {
  -webkit-box-sizing: content-box;
     -moz-box-sizing: content-box;
     -ms-box-sizing: content-box;
          box-sizing: content-box; /* Default */
          box-sizing: padding-box; /* Includes Padding*/
          box-sizing: border-box; /* Includes Margin & Padding */
}
```

![](box-sizing.png)

## Picking a Box Size

Generally speaking, the best box-sizing value to use is border-box. The border-box value makes our math much, much easier. If we want an element to be 400 pixels wide, it is, and it will remain 400 pixels wide no matter what padding or border values we add to it.

Additionally, we can easily mix length values. Say we want our box to be 40% wide. Adding a padding of 20 pixels and a border of 10 pixels around every side of an element isn’t difficult, and we can still guarantee that the actual width of our box will remain 40% despite using pixel values elsewhere.

The only drawback to using the box-sizing property is that as part of the CSS3 specification, it isn’t supported in every browser; it especially lacks support in older browsers. Fortunately this is becoming less and less relevant as new browsers are released. Chances are we’re safe to use the box-sizing property, but should we notice any issues, it’s worth looking into which browser those issues are occurring with.

![](developer-tools.png)

# The Universal Selector * (all elements)

- Applies style properties to all individual elements.
- Replaces inherited style properties, and default 'initial values'. Blocks inheritance.
- Other, more specific css selectors that match an element will replace the style properties applied by *.

In CSS the asterisk, *, is the universal selector, which selects every element. Rather than listing every single element imaginable, we can use the asterisk as a catch-all to select all elements for us.

The :before and :after pseudo-elements also mentioned in this step are elements that can be dynamically generated with CSS. We’re not going to be using these elements within our project; however, when using the universal selector it’s a good practice to also include these pseudo-elements in case they should ever appear

```CSS
*,
*:before,
*:after {
  -webkit-box-sizing: content-box;
     -moz-box-sizing: content-box;
     -ms-box-sizing: content-box;
}
```
The universal selector, *, along with universal pseudo-elements, *:before and *:after, to select every imaginable element and change the box-sizing to border-box.

# Positioning Content

## Positioning with Floats

One way to position elements on a page is with the float property. The float property is pretty versatile and can be used in a number of different ways.

Essentially, the float property allows us to take an element, remove it from the normal flow of a page, and position it to the left or right of its parent element. All other elements on the page will then flow around the floated element. An `<img>` element floated to the side of a few paragraphs of text, for example, will allow the paragraphs to wrap around the image as necessary.

When the float property is used on multiple elements at the same time, it provides the ability to create a layout by floating elements directly next to or opposite each other, as seen in multiple-column layouts.

### Floats May Change an Element’s Display Value

When floating an element, it is also important to recognize that an element is removed from the normal flow of a page, and that may change an element’s default display value. The float property relies on an element having a display value of block, and may alter an element’s default display value if it is not already displayed as a block-level element.

For example, an element with a display value of inline, such as the `<span>` inline-level element, ignores any height or width property values. However, should that inline-level element be floated, its display value will be changed to block, and it may then accept height or width property values.

As we float elements we must keep an eye on how their display property values are affected.

### Clearing & Containing Floats

The float property was originally designed to allow content to wrap around images. An image could be floated, and all of the content surrounding that image could then naturally flow around it. Although this works great for images, the float property was never actually intended to be used for layout and positioning purposes, and thus it comes with a few pitfalls.

One of those pitfalls is that occasionally the proper styles will not render on an element that it is sitting next to or is a parent element of a floated element. When an element is floated, it is taken out of the normal flow of the page, and, as a result, the styles of elements around that floated element can be negatively impacted.

Often margin and padding property values aren’t interpreted correctly, causing them to blend into the floated element; other properties can be affected, too.

Another pitfall is that sometimes unwanted content begins to wrap around a floated element. Removing an element from the flow of the document allows all the elements around the floated element to wrap and consume any available space around the floated element, which is often undesired.

To prevent content from wrapping around floated elements, we need to clear, or contain, those floats and return the page to its normal flow. We’ll proceed by looking at how to clear floats, and then we’ll take a look at how to contain floats.

**Clearing floats** is accomplished using the clear property, which accepts a few different values: the most commonly used values being left, right, and both.

Containing Floats

Another option is to **contain the floats**. The outcomes of containing floats versus those of clearing them are nearly the same; however, containing floats does help to ensure that all of our styles will be rendered properly.

To contain floats, the floated elements must reside within a parent element. The parent element will act as a container, leaving the flow of the document completely normal outside of it.

## Positioning with Inline-Block

In addition to using floats, another way we can position content is by using the display property in conjunction with the inline-block value. The inline-block method, as we’ll discuss, is primarily helpful for laying out pages or for placing elements next to one another within a line.

Recall that the inline-block value for the display property will display elements within a line while allowing them to accept all box model properties, including height, width, padding, border, and margin. Using inline-block elements allows us to take full advantage of the box model without having to worry about clearing any floats.

### Creating Reusable Layouts

use inline-block elements to create the grid—or layout—of a page and to then use floats when I want content to wrap around a given element (as floats were intended to do with images)

# Uniquely Positioning Elements

very now and then we’ll want to precisely position an element, but floats or inline-block elements won’t do the trick. Floats, which remove an element from the flow of a page, often produce unwanted results as surrounding elements flow around the floated element. Inline-block elements, unless we’re creating columns, can be fairly awkward to get into the proper position. For these situations we can use the position property in connection with box offset properties.

The position property identifies how an element is positioned on a page and whether or not it will appear within the normal flow of a document. This is used in conjunction with the box offset properties—top, right, bottom, and left—which identify exactly where an element will be positioned by moving elements in a number of different directions.

By default every element has a position value of static, which means that it exists in the normal flow of a document and it doesn’t accept any box offset properties. The static value is most commonly overwritten with a relative or absolute value, which we’ll examine next.

## Relative Positioning

The relative value for the position property allows elements to appear within the normal flow a page, leaving space for an element as intended while not allowing other elements to flow around it; however, it also allows an element’s display position to be modified with the box offset properties. For example, consider the following HTML and CSS:

```HTML
<div>...</div>
<div class="offset">...</div>
<div>...</div>
```
```CSS
div {
  height: 100px;
  width: 100px;
}
.offset {
  left: 20px;
  position: relative;
  top: 20px;
}
```
![](relative-positioning.png)

The element with the class of offset, has a position value of relative and two box offset properties, left and top. This preserves the original position of the element, and other elements are not allowed to move into this space. Additionally, the box offset properties reposition the element, pushing it 20 pixels from the left and 20 pixels from the top of its original location.

With relatively positioned elements, it’s important to know that the box offset properties identify where an element will be moved from given its original position. Thus, the left property with a value of 20 pixels will actually push the element towards the right, from the left, 20 pixels. The top property with a value of 20 pixels, then, will push an element towards the bottom, from the top, 20 pixels.

When we position the element using the box offset properties, the element overlaps the element below it rather than moving that element down as the margin or padding properties would.

## Absolute Positioning

The absolute value for the position property is different from the relative value in that an element with a position value of absolute will not appear within the normal flow of a document, and the original space and position of the absolutely positioned element will not be preserved.

Additionally, absolutely positioned elements are moved in relation to their closest relatively positioned parent element. Should a relatively positioned parent element not exist, the absolutely positioned element will be positioned in relation to the `<body>` element. That’s quite a bit of information; let’s take a look at how this works inside some code:

```HTML
<section>
  <div class="offset">...</div>
</section>
```
```CSS
section {
  position: relative;
}
div {
  position: absolute;
  right: 20px;
  top: 20px;
}
```
![](absoulte-positioning.png)

In this example the `<section>` element is relatively positioned but doesn’t include any box offset properties. Consequently its position doesn’t change. The `<div>` element with a class of offset includes a position value of absolute. Because the `<section>` element is the closest relatively positioned parent element to the `<div>` element, the `<div>` element will be positioned in relation to the `<section>` element.

With relatively positioned elements, the box offset properties identify in which direction an element would be moved in relation to itself. With absolutely positioned elements, the box offset properties identify in which direction an element will be moved in relation to its closest relatively positioned parent element.

As a result of the right and top box offset properties, the `<div>` element will appear 20 pixels from the right and 20 pixels from the top of the `<section>`.

Because the `<div>` element is absolutely positioned, it does not sit within the normal flow of the page and will overlap any surrounding elements. Additionally, the original position of the `<div>` is not preserved, and other elements are able to occupy that space.

Typically, most positioning can be handled without the use of the position property and box offset properties, but in certain cases they can be extremely helpful.