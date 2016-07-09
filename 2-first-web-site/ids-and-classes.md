# ids and classes

In every HTML Element you can add two attributes to help with element identification. The two attributes are `id` and `class`.  

## id

The id attribute allows you to provide a unique identifier for the html element, this identifier can only appear once per html page.

```
<section id="main-content">
</section>
```

** Try to be specific when using id's so that they will not have a chance of being repeated in the page.

## class

You can create a space separated list of classes using the `class` attribute and these can be repeated.

```
<section class="bgGreen animated fadeIn">
</section>
<section class="bgBlue animated fadeIn">
</section>

```

Unlike `id`s the class attribute keywords can be shared with other elements on the page.

## Why?

Using these identification elements enables you to refine style and functionality specifically to elements of these attributes. For example the `bgGreen` and `bgBlue`, I can style those elements using css.

style.css

```
.bgGreen {
  background-color: green   
}

.bgBlue {
  background-color: blue   
}
```

By putting a period in front of the class name in the css, I am able to instruct the browser to apply the defined style to any element that has `bgGreen` in its class attribute.

<a class="jsbin-embed" href="https://jsbin.com/helayo/1/embed?html,css,output">JS Bin on jsbin.com</a>

To specifically style `id` elements, you use the `#` sign in your css to select those elements.

```
#main-content {
  font-size: 5em;
  background-color: gray;
}
```

This would make the font-size in the `main-content` section 5 times larger than normal and the `background-color` gray.

Exercise:

> Add the following css to your website in the style.css file

```
.box {
  background-color: whitesmoke;
  margin: 20px;
  border: 1px solid rgba(0,0,0,.8)
}
```

Then take your origin story and add the `box` class to your origin story's html element.

Then play around with other elements on your page, spice up the title using class or id attributes and css. Or control the size of your avatar.


[Index](/first-web-site) | [Prev](/first-web-site/layout) | [Next](/first-web-site/animation)
