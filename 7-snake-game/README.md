# Snake Game

Snake is a game where the player maneuvers a line which grows in length, with the line itself being a primary obstacle. There is no standard version of the game. The concept originated in the 1976 arcade game Blockade, and its simplicity has led to many implementations (some of which have the word snake or worm in the title). After a variant was preloaded on Nokia mobile phones in 1998, there was a resurgence of interest in the Snake concept as it found a larger audience.

## Lessons

- [JS - Assignment](/assignment)
- [JS - Loops](/loops)

## Steps

- [Setup](/snake-game/setup)
- [Board](/snake-game/board)
- [Snake](/snake-game/snake)
- [Keyboard](/snake-game/keyboard)
- [Food](/snake-game/food)
- [Score](/snake-game/score)


```
<script>
var container = document.body
var canvas = document.createElement('canvas')
var w = 400
var h = 400
var size = 10

var snake = []
var food = {}

var direction = 'right'

// TODO: Step 3 - declare score varable
var score = 0

// set height and width
canvas.setAttribute('height', h)
canvas.setAttribute('width', w)

// add to the container
container.appendChild(canvas)

// set canvas to 2d
var ctx = canvas.getContext("2d")

function paint () {
    // paint board
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, w, h)
    ctx.strokeStyle = 'black'
    ctx.strokeRect(0, 0, w, h)

    var head = snake[0]

    // TODO: Step 1 - reset game if snake its border or itself
    if (
        head.x === -1 ||
        head.y === -1 ||
        head.x === w/size ||
        head.y === h/size
    ) {
        init()
        return
    }


    if (direction === 'right') head.x = head.x + 1
    else if (direction === 'left') head.x = head.x - 1
    else if (direction === 'up') head.y = head.y - 1
    else if (direction === 'down') head.y = head.y + 1

    // TODO: Step 2 - eat food
    if (head.x === food.x && head.y === food.y) {
        var tail = { x: head.x, y: head.y }
        // TODO 4 increment score when snake eats food
        food = createFood()
    } else {
        var tail = snake.pop()
        tail.x = head.x
        tail.y = head.y
    }

    snake.unshift(tail)


    snake.forEach(paintCell)

    paintCell(food)

    // TODO: Step 6 - paint score
    ctx.fillText('Score: ' + score, 5, h - 5)
    setTimeout(paint, 60)
}

function paintCell (c) {
    ctx.fillStyle = 'blue'
    ctx.fillRect(c.x * size, c.y * size, size, size)
    ctx.strokeStyle = 'white'
    ctx.strokeRect(c.x * size, c.y * size, size, size)
}

function createSnake () {
    return times(5, function (i) {
        return { x: i, y: 0 }
    })
}

function createFood () {
    return {
        x: random(size, w),
        y: random(size, h)
    }
}

keyEvent(function (code) {
  if (code === 37) direction = 'left'
  else if (code === 38) direction = 'up'
  else if (code === 39) direction = 'right'
  else if (code === 40) direction = 'down'
})

function keyEvent(fn) {
    document.addEventListener('keydown', function (e) {

     fn(e.keyCode)   
    })
}

function times(n, fn) {
    for (var i = 0; i < n; i++) {
        fn(i)
    }
}

function random(min, max) {
    return Math.round(Math.random() * (max - min)/min )
}

function init () {
  // TODO: Step 5 - reset score
  score = 0
  direction = 'right'
  snake = createSnake()
  food = createFood()
  paint()
}

init()

</script>
```


[Home](/) | [Prev](/6-journal) 
