# Character Name

Now that we have played around with some HTML elements lets start to create and publish your first web or HTML page.

We are going to build a web page for a superhero character, the first thing we need is a name. By creating a name we will have a title for our page.

# Name Generator

Can't think of a character name? Use this name generator to create a name:

<div class="tonic">
<pre>

var codename = require("codename")()
var filters = ['random'],
    lists = ['crayons', 'adjectives', 'animals']

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

Lets create a web page project using this template

<a href="https://hyperdev.com/#!/project/proud-myth" target="\_new">
  Hyperdev: proud-myth
</a>

If you don't want to use Hyperdev, you can select the advanced option and download to you local computer and run the exercise from there, then use a service like [now](https://zeit.co/now) to deploy to the cloud.

[local instructions](local-instructions)

> It will be important to take note of the name of the web page so the instructor can create a table of contents


[Index](.) | [Next](story)
