# Map, Reduce and Filter

Map, reduce and filter are core building blocks of programming that can be combined
to produce re-usable functional patterns to create building blocks for applications.


## Map

Map is a function that is called as a method on the `Array` data structure, it
will iterate over each item in the array and return a new array as the result.

In this example, we map over every item in this numbers array and double each
item with a function called double.

<div class="tonic">
<pre>
const double = function (v) {
  return v * 2
}

Array(1,2,3,4).map(double) // 2, 4, 6, 8
</pre>
</div>

For more information about map:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

## Reduce

Reduce takes a function and a seed and invokes the function taking the last returned
value and the value of the current item in the area with the purpose of returning
a single result in the end.

<div class="tonic">
<pre>
const sum = function (a, b) {
  return a + b
}

Array(1,2,3,4).reduce(sum, 0)
</pre>
</div>

For more information about reduce:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

## Filter

The filter function takes a predicate function and returns all items that have
a true result returned in the predicate function.

> A predicate function is a function that takes arguments and always returns a
true or false.
> https://en.wikipedia.org/wiki/Predicate_(mathematical_logic)

In this example, we will only return even numbers:

<div class="tonic">
<pre>
const even = function (v) {
  return (v % 2 === 0)
}

Array(1, 2, 3, 4, 5, 6).filter(even)
</pre>
</div>

[Index](.)
