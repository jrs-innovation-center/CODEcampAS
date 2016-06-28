# Demo of the DOM

In this demo we will show how to create an element and write it to the dom, then we will show how to listen to an event from a dom element and respond to it.

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
