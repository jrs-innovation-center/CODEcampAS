const spaceWidth = 400
const spaceHeight = 400

const smallestSize = 10
const largestSize = 50

var myShapes = []

var elem = document.getElementById('theShapes');
var two = new Two({ width: spaceWidth, height: spaceHeight }).appendTo(elem);

two.makeRectangle(spaceWidth/2, spaceHeight/2,spaceWidth, spaceHeight)
two.update()
two.bind("update", MoveStuff).play()

function AddShape(e) {
    e.preventDefault()
    
    form = e.target

    var x = randomLocation(spaceWidth)
    var y = randomLocation(spaceHeight)
    
    if (form.elements['shape'].value == 'circle') {
        var radius = ValidateLength(form.elements['radius'].value, 'radius')
        if (isNaN(radius)) {
            return
        }
        var newShape = two.makeCircle(x, y, radius)

    } else if (form.elements['shape'].value == 'square') {
        var sideLen = ValidateLength(form.elements['sqSideLen'].value, "side length")
        if (isNaN(sideLen)) {
            return
        }
        var newShape = two.makeRectangle(x, y, sideLen, sideLen)

    } else if (form.elements['shape'].value == 'rectangle') {
        var width = ValidateLength(form.elements['rectWidth'].value, "width")
        if (isNaN(width)) {
            return
        }
        var height = ValidateLength(form.elements['rectHeight'].value, "height")
        if (isNaN(height)) {
            return
        }
        var newShape = two.makeRectangle(x, y, width, height)

    } else {
        window.alert("Select a shape\nCircle, Square or Rectangle")
        return
    } 
    
    newShape.fill = form.elements['color'].value
    myShapes.push({ shape: newShape, 
                    direction : form.elements['direction'].value})

    HideParms()
    document.getElementById("theForm").reset()
    
}

function ValidateLength (val, name) {
    val = parseInt(val)
    if ( isNaN(val) || val < smallestSize || val > largestSize) {
        window.alert(`The ${name} must be  number between ${smallestSize} and ${largestSize}`)
        return NaN
    }
    return val
}

function SelectShape(s) {
    HideParms()
    
    if (s.value == 'circle') {
        document.getElementById('circleParms').hidden = false
    } else if (s.value == 'square') {
        document.getElementById('squareParms').hidden = false
    } else {
        document.getElementById('rectangleParms').hidden = false
    }
}

function MoveStuff() {
    myShapes.map((function (shapeObj) {
        var s = shapeObj.shape
        var d = shapeObj.direction
        
        if (d == 'u') {
            s.translation.y -= 1
        } else if (d == 'd') {
            s.translation.y += 1
        } else if (d == 'l') {
            s.translation.x -= 1
        } else if (d == 'r') {
            s.translation.x += 1
        }
        
        if (s.translation.x > spaceWidth) {
            s.translation.x = 1
        } else if (s.translation.x < 0) {
            s.translation.x = spaceWidth
        }
        
        if (s.translation.y > spaceHeight) {
            s.translation.y = 1
        } else if (s.translation.y < 0) {
            s.translation.y = spaceHeight
        }
    }))
}

function ClearShapes() {
    myShapes.map((function (s){ two.remove(s.shape); }))
    myShapes = []
    two.update()
}

function HideParms() {
    document.getElementById('circleParms').hidden = true
    document.getElementById('squareParms').hidden = true
    document.getElementById('rectangleParms').hidden = true
}

function ResetForm() {
}

function randomLocation(max) {
    return Math.floor(Math.random() * (max + 1))
}
