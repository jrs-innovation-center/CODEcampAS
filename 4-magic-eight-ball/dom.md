# Document Object Model (DOM)

The DOM is how we interact with an HTML page form JavaScript. We can create HTML using JavaScript or we can listen to events that occur on the web page.

The DOM is an application program interface, or API. It contains many objects and functions that we can use to do all sorts of interesting things to our web pages.

For example, if we want to add an HTML element to the web page, we can do the following:

- createElement
- set the innerText property
- tell the document to append it to the body section

```
var p = document.createElement('p')
p.innerText = 'Here is my awesome paragraph'
document.body.appendChild(p)
```

We can also interact with the web page by listening to events.

```
p.addEventListener('click', function () {
  alert('You Clicked my paragraph')
})
```

## Demonstration

In this demonstration, we will show how to create an element and write it to the web page using the DOM.
Then we will show how to listen to an event on the web page usimg a DOM element and, finally, respond to it.

```
var el = document.createElement('button')
el.innerText = 'Click Me'
document.body.appendChild(el)
```

```
var el = document.querySelector('button')
el.addEventListener('click', function (e) {
  alert('You Clicked a button')
})
```

## Exercises [TODO]

- [Exercise 1](dom-1)
- [Exercise 2](dom-2)
- [Exercise 3](dom-3)

[Back](.) | [Prev](nested-functions)
