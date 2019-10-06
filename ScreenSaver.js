let sprite: game.LedSprite = null
let sprite_2: game.LedSprite = null
let spriteThree: game.LedSprite = null
let spriteFour: game.LedSprite = null
let spriteFive: game.LedSprite = null
let spriteA: game.LedSprite = null
let spriteB: game.LedSprite = null
let spriteC: game.LedSprite = null
let spriteD: game.LedSprite = null
let spriteE: game.LedSprite = null
input.onButtonPressed(Button.A, function () {
    game.setScore(1)
})
input.onButtonPressed(Button.B, function () {
    game.setScore(0)
    for (let i = 0; i < 4; i++) {
        basic.clearScreen()
    }
})
input.onGesture(Gesture.Shake, function () {
    game.addScore(1)
})
basic.forever(function () {
    if (game.score() == 3) {
        led.setBrightness(255)
        led.plotBarGraph(
        Math.randomRange(0, 6),
        Math.randomRange(0, 6)
        )
        led.setBrightness(70)
    }
})
basic.forever(function () {
    if (game.score() == 6) {
        game.setScore(1)
    }
})
basic.forever(function () {
    if (game.score() == 4) {
        for (let i = 0; i < 4; i++) {
            led.setBrightness(Math.randomRange(100, 255))
        }
        sprite = game.createSprite(0, 0)
        sprite_2 = game.createSprite(0, 1)
        spriteThree = game.createSprite(0, 2)
        spriteFour = game.createSprite(0, 3)
        spriteFive = game.createSprite(0, 4)
        basic.pause(1000)
        for (let i = 0; i < 4; i++) {
            sprite.move(1)
            basic.pause(100)
            sprite_2.move(1)
            basic.pause(100)
            spriteThree.move(1)
            basic.pause(100)
            spriteFour.move(1)
            basic.pause(100)
            spriteFive.move(1)
        }
        sprite.delete()
        sprite_2.delete()
        spriteThree.delete()
        spriteFour.delete()
        spriteFive.delete()
    }
})
basic.forever(function () {
    if (game.score() == 2) {
        led.setBrightness(255)
        led.plot(Math.randomRange(0, 10), Math.randomRange(0, 10))
        led.plot(Math.randomRange(0, 10), Math.randomRange(0, 10))
        led.plot(Math.randomRange(0, 10), Math.randomRange(0, 10))
        led.setBrightness(150)
        led.plot(Math.randomRange(0, 10), Math.randomRange(0, 10))
        led.plot(Math.randomRange(0, 10), Math.randomRange(0, 10))
        basic.pause(100)
        control.waitMicros(4)
        basic.clearScreen()
    }
})
basic.forever(function () {
    if (game.score() == 0) {
        basic.showString(" On ")
    }
})
basic.forever(function () {
    if (game.score() == 5) {
        led.setBrightness(Math.randomRange(175, 255))
        spriteA = game.createSprite(0, 0)
        spriteA.change(LedSpriteProperty.Y, 1)
        spriteB = game.createSprite(1, 0)
        spriteB.change(LedSpriteProperty.Y, 1)
        spriteC = game.createSprite(2, 0)
        spriteC.change(LedSpriteProperty.Y, 1)
        spriteD = game.createSprite(3, 0)
        spriteD.change(LedSpriteProperty.Y, 1)
        spriteE = game.createSprite(4, 0)
        spriteE.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
        for (let i = 0; i < 4; i++) {
            spriteA.change(LedSpriteProperty.Y, 1)
            basic.pause(100)
            spriteB.change(LedSpriteProperty.Y, 1)
            basic.pause(100)
            spriteC.change(LedSpriteProperty.Y, 1)
            basic.pause(100)
            spriteD.change(LedSpriteProperty.Y, 1)
            basic.pause(100)
            spriteE.change(LedSpriteProperty.Y, 1)
        }
        basic.pause(500)
        spriteA.delete()
        spriteB.delete()
        spriteC.delete()
        spriteD.delete()
        spriteE.delete()
    }
})
basic.forever(function () {
    if (game.score() == 1) {
        led.setBrightness(Math.randomRange(125, 255))
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.pause(100)
        led.setBrightness(88)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
    }
})
