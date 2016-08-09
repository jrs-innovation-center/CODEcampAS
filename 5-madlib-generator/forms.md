# HTML Forms

In HTML, there is a `form` element, this element can wrap a set of elements that
receive input and bundle them into one batch of data.

A form element looks like this:

```
<form>
  ...
</form>
```

The form can either push data to the server using the `method` and `action`
attributes, or it can send data to a javascript function using a `onsubmit`
handler.

We will be using the `onsubmit` handler.

```
<h1>Form Example</h1>
<form onsubmit="handleSubmit()">
  <label>Name</label>
  <input type="text" name="fullname">
  <input type="submit" value="Say Hello">
</form>
<script src="https://wzrd.in/standalone/form-serialize@latest"></script>
<script>
  function handleSubmit () {
    // get data
    // show 'Hello ' + data
  }
</script>
```

Using http://www.code10k.com in your character project directory, create a new
document called `form.html` in that document add the form above, in the body
element.

> Why you can copy and paste, it is great practice to type all of this out, to
help you get familiar with the commands.

Once you have confirmed that you have your form and it shows in the preview mode.
We want to use a library called `form-serialize`.

```
var data = formSerialize(this, {hash: true})
```

> formSerialize is a help library that will find all the nested input elements
of the form and build a bundle of data that can be used in your application.

> the `this` key word is used inside the submit handler, since the handler is
attached to the form element, the form object is returned to the handler

By adding the `formSerialize` function to our handleSubmit function, we should
now be getting the data from the form.

> Next we will learn about javascript template literals and how we can use the form data
to build a madlib story.

[Back](.)
