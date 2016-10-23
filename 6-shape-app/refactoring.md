# Simplifying your Program

As we're writing a program we frequently discover that we were better ways of doing it.
To improve and simplify our programs we do something called *refactoring*.

Refactoring takes a program the already works and makes a better program that does the same thing.

For example, in the follow code the constant 'frodo' is used repeatedly.

```
if ( name == 'frodo' ) {
   alert('Hi frodo');
}

a bunch of other stuff

if ( name != 'frodo' ) {
    alert('Hi somebody other than frodo');
}
```

We could take 'frodo' and make that value a constant:

```
const special_name = 'frodo'
```

then you can change the other code to be:

```
if ( name == special_name ) {
   alert('Hi frodo');
}

a bunch of other stuff

if ( name != special_name ) {
    alert('Hi somebody other than frodo');
}
```

Why would you want to do this? Well, if you ever needed to change 'frodo' to, say, 'bilbo' you'd only
need to change it in one place. This makes your program easier to expand and extend in the future.

---

## Example ##

Another common refactoring is to take some set of statements that are repeated and make them into a function.
In this example we see a piece of code thats used several times.

<a class="jsbin-embed" href="http://jsbin.com/giwipab/2/embed?html,console&height=33em">JS Bin on jsbin.com</a>

We can create a function to do the common operations:

<a class="jsbin-embed" href="http://jsbin.com/zupihip/3/embed?html,console&height=35em">JS Bin on jsbin.com</a>

---

## Exercise ##

Look at the following code. Create a function for the repeated operations.

<a class="jsbin-embed" href="http://jsbin.com/nugole/5/embed?html,console&height=40em">JS Bin on jsbin.com</a>

---

[Back](.) | [Prev](twolib)
