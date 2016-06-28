# Demo Nested functions add / subtract combination

By combining functions we can easily write combination functions to perform nested actions and pass the results into other functions to bubble up into one final result.

For Example, using the functions we created in the previous chapter, we can perform some more complex calculations.

<script src="https://embed.tonicdev.com" data-element-id="my-element"></script>
<div id="my-element">
const { add, subtract } = require('notebook')('twilson63/mathfn/1.0.0')

// 10 + (20 - 10)

add(
  10,
  subtract(20, 10)
)

</div>

---

### Lets create this function together

<script src="https://embed.tonicdev.com" data-element-id="my-element2"></script>
<div id="my-element2">
const { add, subtract } = require('notebook')('twilson63/mathfn/1.0.0')

// 10 + (20 - 10)

</div>

[Back](/nested-functions)
