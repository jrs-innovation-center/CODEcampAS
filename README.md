# CODEcamp After School Course Documentation

CODEcamp After School is a weekday code education program that allows middle school students to explore their creativity by learning the fundamentals of web development through project-based learning.

CODEcamp After School offers middle school kids a challenging, age appropriate, project-based experience that translates into real skill building while reinforcing the core STEM concepts they are learning in their other classes. The program will be offered as an after school program for 90 minutes, four days a week.

This GitHub repository uses [codecampkit](https://github.com/jrs-innovation-center/codecampkit) to generate a course work website for the after school program.



## Contributing

### How to contribute?

* install nodejs - nodejs.org
* clone the current repository
* `cd codecampkids`
* `npm install`
* `npm start`

* Open your browser on localhost:3000

### What do I need to know to contribute?

Documentation

* [Markdown](https://daringfireball.net/projects/markdown/)

Development Tools

* [TonicDev](https://tonicdev.com/docs)
* [JSBin](http://jsbin.com/?html,js,output)
* [Hyperdev](https://hyperdev.com)
* [code10k.com](http://www.code10k.com)

Pattern

The pattern is a very simple strategy:

* Introduce Concept
* Demonstrate Concept to Students
* Have students practice the Concept using exercises
* Walk through the exercises with students

## TonicDev

TonicDev is an embeddable nodejs console, that enables you to create exercises that have tests and empower students to learn concepts without having to install anything on any computer.

To embed a tonic dev code block use the pre tags

```
<div class="tonic">
<pre>
console.log('hello world')
console.log('good bye moon')

</pre>
</div>
```

## JSBin

JSBin is an interactive environment that can be embedded into your project markdown files, any file that is not named `index.md`.

To embed the JSbin project file, simply use a hyperlink with a `jsbin-embed` class

You can grab the hyperlink information from the JSbin share feature and use the snapshot option.

```
<a class="jsbin-embed foo" href="http://jsbin.com/iwovaj/74/embed?js,output">
    Simple Animation Tests</a>
```

## Hyperdev

Hyperdev is a free online development platform that is lightweight and enables collaborative environments online, so you can let your students watch you code as an instructor and they can invite you to their project and let you review code, simply by sharing links. One requirement is a GitHub account. If you do not want the kids to create their own GitHub account, you can use the one provided at the workshop.

** Ask a CodeCampAS Instructor

### How do I discuss content with the instructors?

* [Issues](../issues)
* [Slack](https://codecampas.slack.com)

## License

[MIT](../blob/master/LICENSE.md)

## Code of Conduct

[code of conduct](../blob/master/CODE_OF_CONDUCT.md)
