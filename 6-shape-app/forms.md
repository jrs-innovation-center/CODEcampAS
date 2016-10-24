# More work with Forms

We worked with forms in the [madlibs](/5-madlib-generator) project.
In this project we will change the form depending on what the user selects as they are working on the form.
We will also show how to work with the form without needing the extra form-serialize library.

---

## Example 1 ##

In the first example we will create a form with a dropdown list.
When the makes a choice from the list then hits `submit` we will display the choice.

<a class="jsbin-embed" href="http://jsbin.com/wasivih/3/embed?html,output&height=55em">JS Bin on jsbin.com</a>

> It's important to note that the value we are testing is what we specified in the `value` attribute
NOT the choice that was shown in the dropdown list!

> Make sure your `options` tags are all within the `select` tag. This is how the options are associated with the dropdown list.

---

## Exercise 1 ##

Let's try that ourselves.

First, make a form with a dropdown list and a submit button. Then add a little code to
display the value of the dropdown when submit is clicked.

<a class="jsbin-embed" href="http://jsbin.com/yuwipaq/3/embed?html,output&height=55em">JS Bin on jsbin.com</a>

---

## Example 2 ##

In the second example,
we will shown first how we can react to changes in the dropdown box and
second, we will show how we can turn elements on the page on and off.
In this example, picking a choice from the dropdown list will hide one paragraph and show another.

<a class="jsbin-embed" href="http://jsbin.com/yojuse/4/embed?html,output&height=55em">JS Bin on jsbin.com</a>

> Make sure the `onchange` attribute is part of the `select` tag. This is how we get the JavaScript function to be called whenever the value of the dropdown box changes.

> Be sure your setting of the hidden flags occurs *inside* of the `SelectChoice` function

---

## Exercise 2 ##

Ok, make a form with a dropdown list. The list should have two choices.
If the user selects the first choice, show the first paragraph and hide the second.
If the user selects the second choice, show the second paragraph and hide the first.

<a class="jsbin-embed" href="http://jsbin.com/fubota/2/embed?html,output&height=55em">JS Bin on jsbin.com</a>

---

[Back](.) | [Prev](conditionals) | [Next](twolib)
