# About Hyperlinks

What is a hyperlink?

A hyperlink is one of the most powerful features on the internet. With a hyperlink, you can link your web pages together or link to other sites, with a simple anchor element.

The `anchor` element uses the following tag syntax:

```
<a></a>
```

Using the `href` attribute, we can specify a location to link to, and inside the tags we can add a description of the link.

```
<a href="http://example.com">Example Site</a>
```

If we want to create a link to an existing page within our site, we can use an implicit reference:

```
<a href="/page2.html">Page 2</a>
```

If we want to link to a specific section on our current page, we can use the identifier from any other `id` attribute on the page as the href:

```
<a href="#sectionId">Section</a>
```

Lets practice creating hyperlinks to some of your favorite sites.

<a class="jsbin-embed" href="https://jsbin.com/haderu/1/embed?html,output">JS Bin on jsbin.com</a>

[Back](.)
