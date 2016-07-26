# Comparison Operators

In order to properly create conditional tests you need operators that will enable
you to provide a true or false outcome. These are called comparison operators:

* `===` - equals - tests if either side of the expression is equal in value to one
another
* `!==` - not equals - tests if either side of the expression is not equal in value

* `>, <, >=, <=` - Greater Than, Less than, Greater Than or Equal to, Less than or Equal to
are comparison operators that create an expression that can return true or false.

```
if (a < b) {
  console.log('a is less than b')
}
```

For more on comparison operators see mozilla developer network:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators

Often you want the application to only run a set of statements if all
conditional tests pass. And often you want the application to only run a set of
statements if either or any test pass. These are called comparison operators.

They use funny symbols in JavaScript:

* && is the `and` operator
* || is the `or` operator


```
if (ONE === 1 && HELLO === 'hello') {
  console.log('all conditional tests pass')
}
```

```
if (ONE === 1 || HELLO === 'hello') {
  console.log('any conditional test passes')
}
```
