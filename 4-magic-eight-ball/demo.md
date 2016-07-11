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

Using a collection type called an Array we can store a list of possible answers into a `variable` called `answers`.  We can reference the answer by using an index. The index is the position in the array, and the position is zero based. That means that zero is the first position in the array and 1 is the second, etc.

For example, if I wanted to reference 'Without a doubt', I would use answers[2].

Play around with the example above and see if you can get different answers to display.

---

Ok, we have everything we need to build our app, except to tell the computer to randomly pick a number between 0 and 7. For this, we need to create a new `function` this function will be responsible for randomly selecting a number.

```
function getRandomInt(min, max) {
  ...
}
```

With this function, we want to pass it a minimum number and a maximum number, and have the function return a number within that range. In our case, we would call the function, using `0` and `7`.

Inside the body of the function we will use a built in library called `Math` this library has two functions we want to use to help us pick the right random number.

* random
* floor

The `random` method will return a random floating point number between 0 and 1.
The `floor` function will floor function returns the largest integer less than or equal to a give number. By doing the following equation, we will create our random integer.

```
return Math.floor(
  Math.random() * (max - min)
) + min
```

So the final result will be the following:

<div class="tonic">
<pre>
function getRandomInt (min, max) {
  return Math.floor(
    Math.random() * (max - min)
  ) + min
}

getRandomInt(0, 7)
</pre>
</div>

Give it a try by pressing the run button.

---

Lets put everything together:

<a class="jsbin-embed" href="https://jsbin.com/lokazab/6/embed?html,js,output">JS Bin on jsbin.com</a>
