# Magic Eight Ball

This demo will walk us through building a magic eight ball button.

When a visitor clicks on the button, we want to pick a random number, then using that random number to find a phase from a list of phrases, then present it to the user using the `alert` functionality.

So in order to put these pieces together, we need to learn how to build each piece.

We need to create the web page and add a button:

The button element uses the tag `button` and displays the text inside the tags as the description of the button.

<a class="jsbin-embed" href="https://jsbin.com/lokazab/1/embed?html,output">JS Bin on jsbin.com</a>

When the user clicks the button, lets provide a response using the alert function. The `alert` function is built into the browser, it presents a pop up window with whatever text we provide.

```
alert('Prediction will go here!')
```

Check it out:

<a class="jsbin-embed" href="https://jsbin.com/lokazab/2/embed?html,js,output">JS Bin on jsbin.com</a>

---

Now that we have the page and know how we are going to provide the response, we need to create a `function` to generate a random number.

To create a function, we can use `javascript`:

```
function random () {
  return 1
}
```

In this function we will always return 1.

<a class="jsbin-embed" href="https://jsbin.com/lokazab/3/embed?html,js,output">JS Bin on jsbin.com</a>

Lets hook the click of the button to the function. We can use an attribute on the button element called `onclick` then we can run the function from the button click:

```
<button onclick="alert(random())">Tell me the Future</button>
```

<a class="jsbin-embed" href="https://jsbin.com/lokazab/4/embed?html,js,output">JS Bin on jsbin.com</a>

---

Lets create a list of options:

* It is certain.
* It is decidedly so.
* Without a doubt.
* Yes, definitely.
* You may rely on it.
* As I see it, yes.
* Most likely.
* Outlook good.

<a class="jsbin-embed" href="https://jsbin.com/lokazab/5/embed?html,js,output">JS Bin on jsbin.com</a>
