let score = 0
let high_score = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        score = 0
    }
    if (input.buttonIsPressed(Button.B)) {
        score += 1
        basic.pause(100)
    }
    if (input.isGesture(Gesture.Shake)) {
        basic.showNumber(score)
    }
    if (score > high_score) {
        high_score = score
    }
    if (input.buttonIsPressed(Button.AB)) {
        basic.showString("High score is")
        basic.showNumber(high_score)
    }
})
