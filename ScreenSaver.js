// Screen Saver creation progression
input.onButtonPressed(Button.A, function () {
    game.setScore(1)
})
input.onButtonPressed(Button.B, function () {
    game.setScore(0)
    basic.clearScreen()
})
basic.forever(function () {
    if (game.score() == 1) {
        led.setBrightness(255)
        led.plotBarGraph(
        Math.randomRange(0, 6),
        Math.randomRange(0, 6)
        )
        led.setBrightness(70)
    }
})
