input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # . . .
        . . . # .
        . . . . .
        # # # # #
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        . . . . .
        . # # # .
        # . . . #
        `)
})
input.onGesture(Gesture.LogoDown, function () {
    music.play(music.createSoundExpression(WaveShape.Sawtooth, 5000, 2345, 255, 255, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . . . .
        . # # # .
        . . . . .
        # # . # #
        . . . . .
        `)
})
serial.writeLine("I am connected and ready to be reprogrammed")
serial.writeLine("the link to reprogram me is: https://makecode.microbit.org/_cRq4vH1WPbLU")
serial.redirectToUSB()
basic.showString("I am " + control.deviceName())
let name = "your name"
music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
basic.showString("Hello " + name)
basic.forever(function () {
    if (input.logoIsPressed()) {
        music.play(music.createSoundExpression(WaveShape.Noise, 5000, 2180, 255, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            . # . # .
            . . . . .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
})
