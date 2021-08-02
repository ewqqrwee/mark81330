input.onGesture(Gesture.Shake, function () {
    timer = 0
    basic.showIcon(IconNames.Surprised)
    soundExpression.sad.playUntilDone()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    timer = 0
    basic.showIcon(IconNames.Happy)
    soundExpression.giggle.playUntilDone()
})
let timer = 0
basic.showIcon(IconNames.Happy)
soundExpression.giggle.playUntilDone()
basic.forever(function () {
    basic.pause(500)
    timer += 1
    if (timer == 20) {
        basic.showIcon(IconNames.Sad)
        soundExpression.sad.playUntilDone()
    }
    if (timer == 30) {
        basic.showIcon(IconNames.Asleep)
        soundExpression.yawn.playUntilDone()
    }
    if (timer == 40) {
        basic.showIcon(IconNames.Skull)
        soundExpression.hello.playUntilDone()
        while (false) {
            basic.showIcon(IconNames.Ghost)
        }
    }
})
