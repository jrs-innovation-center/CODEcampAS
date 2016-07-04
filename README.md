# CODECampKids AfterSchool Course Documentation

This github repository uses [codecampkit](http://codecampkit-docs.cfapps.io/) to generate a course work website for the after school program.

Currently, the site is located on https://codecampkids.cfapps.io currently.

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
* Have students practice concept using exercises
* Walk through the exercises with students

## TonicDev

TonicDev is an embeddable nodejs console, that enables you to create exercises that have tests and empower students to learn concepts without having to install anything on any computer.

To embed a tonic dev code block use the pre tags

```
<pre class="tonic">
console.log('hello world')
</pre>
```

## JSBin

JSBin is an interactive environment that can be embedded into your project markdown files, any file that is not named `index.md`.

To embed the jsbin project file, simply use a hyperlink with a `jsbin-embed` class

You can grab the hyperlink information from the jsbin share feature and use the the snapshot option.

```
<a class="jsbin-embed foo" href="http://jsbin.com/iwovaj/74/embed?js,output">
    Simple Animation Tests</a>
```

## Hyperdev

Hyperdev is a free online development platform that is light weight and enables collaborative environments online, so you can let your students watch you code as an instructor and they can invite you to their project and let you review code, simply by sharing links. One requirement is a github account, if you do not want the kids to create their own github account, you can use the provided at the workshop.

** Ask a CodeCampAS Instructor

## License

[MIT](../blob/master/LICENSE.md)

## Code of Conduct

[code of conduct](../blob/master/CODE_OF_CONDUCT.md)
