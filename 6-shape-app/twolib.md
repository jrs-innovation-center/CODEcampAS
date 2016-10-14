# Using the drawing library #

We will be using a library to help us draw the shapes.
The library is called `two.js`.
It's available at:

`https://cdnjs.cloudflare.com/ajax/libs/two.js/0.6.0/two.js`

and it's documentation is available [here](https://two.js.org/).

The library takes an area of the web page (usually a `div`) and turns it into a area that we can draw on.

---

# Example #

In this example we shown how the two library is used:

<a class="jsbin-embed" href="http://jsbin.com/xemijib/2/embed?html,output"> on jsbin.com</a>

We first create a copy (or instance) of the library that we can use. 
We then assocaite this instance with an area on the page.

Next we create a rectangle using the makeRectangle function.
The makeRectangle function takes four parameters:

1. The 'x' coordinate of the middle of the rectangle.
1. The 'y' coordinate of the middle of the rectangle.
1. The width of the rectangle
1. The height of the rectangle

---

## Exercise

Your turn!

Using the two.js library:

1. Create the instance of the library
1. Associate it with an area on the page
1. Make one or two rectangles in the area on the page.

<a class="jsbin-embed" href="http://jsbin.com/mecinib/3/embed?html,output">JS Bin on jsbin.com</a>

---

[Back](.)  | [Prev](forms) | [Next](refactoring)
