# Character Name

Now that we have played around with some HTML elements lets start to create and publish your first web or HTML page.

We are going to build a web page for a superhero character.
The first thing we need is a name.
By creating a name we will have a title for our page.

# Name Generator

Can't think of a character name? Use this name generator to create a name (hint this is an example of JavaScript that we'll be talking about a lot later on):

<div class="tonic">
<pre>

var codename = require("codename")()
var filters = ['random'],
    lists = ['adjectives', 'animals']

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

codename.generate(filters, lists)
  .map(w => w.toLowerCase().replace(' ', '-'))
  .join('-')
  .concat('-' + getRandomInt(0,100).toString())

</pre>
</div>

---

Now that we have a name, we need to start our first web page:

We will be using `code10k` a live code editor, it automatically publishes your
code to the internet.

## Code10k

Before we get started, you need a editor to code your web page:

<a href="http://www.code10k.com" target="\_blank">www.code10k.com</a>

Click on this link above and then choose to signup, you will use your character
name and the `@` and your groups name like `codekids23.school` or something. Here
is an example:

`happy-orange-63@codekids23.school`

then a password you won't forget, and click sign up.

## Create your project

In the code10k editor you should see a brief case icon in the top right, you should
click on it, and enter your username as the project name, based on the example above,
you would enter `happy-orange-63`, be sure to choose a unique name.

> It will be important to take note of the name of the web page so the instructor can create a table of contents

When you create your new project, you will see an index document in the viewer,
click on the document and it should open up in an editor.

In the index html page between the `<body>` and `</body>` tags add your characters
name using a heading1 or `h1` tag. Like below:

```
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>orange-63</title>
</head>
<body>
  <h1>Happy Orange</h1>
</body>
</html>
```

Then click the cloud button with an up arrow in the right corner.

> If you want to see your page online simply click the up arrow box next to the
web address and it will launch the new site in another tab.

# Congrats! You have created your first web site, click the next link to keep going!


[Index](.) | [Next](story)
