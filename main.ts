input.onButtonPressed(Button.A, function () {
    while (count == 0) {
        NUmber += 1
        basic.showNumber(NUmber)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    Number_2 = NUmber
    count += 1
})
input.onButtonPressed(Button.B, function () {
    while (count == 0) {
        NUmber += -1
        basic.showNumber(NUmber)
    }
})
input.onGesture(Gesture.Shake, function () {
    A = Number_2 + 9
    B = Number_2 - 9
    C = Number_2 * 2
    D = Number_2 / 2
    E = Number_2 ** 2
    F = Math.sqrt(Number_2)
    G = Number_2 / 2
    I = Number_2 / 2
})
let I = 0
let G = 0
let F = 0
let E = 0
let D = 0
let C = 0
let B = 0
let A = 0
let Number_2 = 0
let count = 0
let NUmber = 0
NUmber = 0
count = 0
basic.forever(function () {
	
})
