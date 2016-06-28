# Calculator Demo

```
const add = (a,b) => b ? a + b : b => a + b
const subtract = (a,b) => b ? a - b : b => a - b

const multiply = (a,b) => b ? a * b : b => a * b
const divide = (a,b) => b ? a / b : b => a / b

const isNumber = v => typeof v === 'number' ? true : false
const isFunction = v => typeof v === 'function' ? true : false

// [ 10, '+'', 20, '-', 30] = 0
const calculate = function (...e) {
  function calc (acc, x) {
    if (x === '+' && isNumber(acc)) {
      return add(acc)
    }
    if (x === '-' && isNumber(acc)) {
      return subtract(acc)
    }
    if (x === '*' && isNumber(acc)) {
      return multiply(acc)
    }
    if (x === '/' && isNumber(acc)) {
      return divide(acc)
    }

    if (isFunction(acc)) {
      return acc(x)
    }

    return x
  }

  return e.reduce(calc, 0)
}

calculate(10, '+', 2, '-', 4, '*', 2)
```

[Back](/calculator)
