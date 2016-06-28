# DOM Document Object Model

The dom is how we programmatically interact with a html page, we can write html using javascript or we can listen to events form html elements using javascript.

The DOM is an API, or application program interface, and has many objects and functions that we can use to do all the heavy lifting.

For example, if we want to add an html element to the web page, we can do the following:

- createElement
- set the innerText property
- tell the document to append it to the body section

```
var p = document.createElement('p')
p.innerText = 'Here is my awesome paragraph'
document.body.appendChild(p)
```

We can also interact with the web page, by listening to events.

```
p.addEventListener('click', function () {
  alert('You Clicked my paragraph')
})
```

[Demo](/dom/demo)

## Exercises

- [Exercise 1](/dom/1)
- [Exercise 2](/dom/2)
- [Exercise 3](/dom/3)

[Home](/) | [Prev](/nested-functions) | [Next](/magic-eight-ball)
