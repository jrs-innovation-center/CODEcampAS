# Data Structures

What is data?

Data is facts and statistics collected for reference and analysis. Data is often
in the form of text, but can also be in other forms as well. For this discussion,
we will reference data as the form of text. In order for our applications to make
sense of the data we need to provide some structure or common concept that can
be understood and shared between the functions in our program. These concepts
are called `Data Structures` - one of the most basic concepts is the `string` which
is a collection of characters or text that is enclosed by single quotes or double quotes.

```
console.log('A string of characters')
```

In this example, we are printing a string of characters to the console. This type
of data structure is called a string.

A more interesting data structure is a collection, this data structure enables us
to store specific items in a group or collection. In JavaScript, we call this
Data Structure an array.

```

Array(1,2,3,4,5) // array of numbers

Array('array', 'of', 'characters')

```

With collection data structures such as arrays we can perform actions on these
structures.

```
Array(1,2,3,4,5).reverse()
```

```
Array('array', 'of', 'characters').join('-')
```

## Getting data in and out of arrays.

To get a specific element of data out of an array you can reference the index
of the element. Indexes are 0 based, which means the first item in the array is
index 0, the next is 1 and so forth.

```
Array(1,2,3)[1] // will return 2
```

In this example, we are getting the second index of the array.

To change a value in the array we can set the value to the array reference index.

```
var numbers = Array(1,2,3)
numbers[1] = 4 // [1,4,3]
```

You can iterate through an array using a loop.

```
var numbers = Array(1,2,3)
for (var i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i] + 2
}
```


## Exercises

* Create an array of color names of the rainbow, and reverse and print.
* Create an array of numbers and add 2 to each item in the array.
