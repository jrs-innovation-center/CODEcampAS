# Testing Values Using Conditionals

We frequently need to compare values.
In javascript this is accomplished using comparison operators.
Most commonly these operators are used with the `if` statement.

The `if` statement looks like this:

```
if (conditional) {
   statements
}
```

The conditional operators allow us to test for different situations

- Are two values equal? Use the `==` operator:

```
if ( a == b) {
}
```

- Are two values not equal? Use the `!=` operator:

```
if ( a != b) {
}
```

Here's the full list of operators:

- `==` - Equal to
- `!=` - Not equal to
- `>` - Greater than
- `>=` - Greater than or equal to
- `<` - Less than
- `<=` - Less than or equal to

Finally, we can put multiple tests together using the *and* (`&&`) and *or* (`||`) operators:

```
if ( a == b || a == c) {
}
```

---

## Example 1 ##

This example showns the use of several of the operators. Run the example to see how the comparisons work.

<a class="jsbin-embed" href="http://jsbin.com/sinapiy/4/embed?html,console">JS Bin on jsbin.com</a>

---

## Exercise 1 ##

In this exercise, create your own tests.

<a class="jsbin-embed" href="http://jsbin.com/fuwiji/2/embed?html,console">JS Bin on jsbin.com</a>

---

## Example 2 ##

The `if` statement can have an additional `else` portion that is only executed if the comparison is false.

```
if (conditional) {
   statements
} else {
   statements
}
```

Additionally, `if` statements can be stacked to form a chain of tests.

```
if (conditional) {
   statements
} else if (conditional) {
   statements
} else if (conditional) {
   statement
} else {
   statements
}
```


Take a look at the following example:

<a class="jsbin-embed" href="http://jsbin.com/hosoyib/3/embed?html,console">JS Bin on jsbin.com</a>

---

## Exercise 2 ##

Now create a stacked set of `if` statements testing a string for the values 'frodo', 'bilbo' and 'gandalf'.

<a class="jsbin-embed" href="http://jsbin.com/bosedek/4/embed?html,console">JS Bin on jsbin.com</a>

---

[Back](.) | [Next](forms)
