# Name Generator

Can't think of a character name, use this name generator to create a name:

<script src="https://embed.tonicdev.com" data-element-id="namegen"></script>

<div id="namegen">
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
</div>

[Back](/2-html-heading-character)
