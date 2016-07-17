# Demo Nested functions add / subtract combination

By combining functions we can easily create combinations to perform nested actions and pass the results to other functions to bubble up into one final result.

For example, using the functions we created in the previous chapter, we can perform some more complex calculations.

<div class="tonic">
<pre>

const { add, subtract } = require('notebook')('twilson63/mathfn/1.0.0')

// 10 + (20 - 10)

add(
  10,
  subtract(20, 10)
)

</pre>
</div>

---

Lets create this function together:

<div class="tonic">
<pre>

const { add, subtract } = require('notebook')('twilson63/mathfn/1.0.0')

// 10 + (20 - 10)

</pre>
</div>

[Back](/4-magic-eight-ball/nested-functions)
