# Functions

This is the first lesson on javascript. Javascript is a programming language that runs on any computer and is very easy to learn.

The most important building block in JavaScript is the function.

First, commands are instructions to the computer to do something; for example. perform a calculation or display some text.

A function is a set of commands that are wrapped together to make another, higher level, command.
Using the function as a command (or `calling` the function) in your javascript program instructs the computer to run all the commands packaged together in the function.

A function takes one or more inputs, does some processing and returns some output.

In this example, we are invoking or calling a function that is common in most javascript runtimes.  It is the `log` function, and it is attached to the console `object`

<!-- anywhere else on your page -->
<div class="tonic">
console.log('hello world')  
</div>

---

## Structure of a function ##

The basic structure of a function is that it takes some input in the form of arguments, does some processing then returns output.

There are several ways to define a function, in this example we will be using the `function` keyword.

```
function [name] ([arguments]) {
[body]
}
```

The basic form of a function is the `function` keyword followed by your name for the function. After the name is the list of arguments separated by commas and enclosed in parenthesis.

The `body` of the function contains the commands to be executed when the function is run. The body following the arguments and is enclosed in curly brackets.

[Here](fn-demo) is a demonstration showning creation of a function.

## Exercises

- [Exercise 1](fn-1)
- [Exercise 2](fn-2)
- [Exercise 3](fn-3)

[Back](.) | [Next](nested-functions)
