# Character Name

Now that we have played around with some html elements lets start to create and publish your first web or html page.

We are going to build a web page for a super hero character, the first thing we need is a name by creating a name we will have a title for our page.

# Name Generator

Can't think of a character name, use this name generator to create a name:

<div id="namegen" class="tonic">
<pre><code>
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

</code></pre>
</div>

---

Now that we have a name, we need to start our first web page:

Lets create a webpage project using this template

> It will be important to take note of the name of the web page so the instructor can create a table of contents


[Index](README) | [Next](story)
