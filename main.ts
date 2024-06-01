input.onButtonPressed(Button.A, function () {
    前進()
    basic.pause(500)
    後退()
    basic.pause(500)
    後退()
    basic.pause(500)
    反時計回り()
    basic.pause(500)
})
function 後退 () {
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.analogWritePin(AnalogPin.P14, 25)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.analogWritePin(AnalogPin.P16, 25)
}
function 前進 () {
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.analogWritePin(AnalogPin.P14, 25)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.analogWritePin(AnalogPin.P16, 25)
}
function 時計回り () {
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.analogWritePin(AnalogPin.P14, 25)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.analogWritePin(AnalogPin.P16, 25)
}
function 反時計回り () {
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.analogWritePin(AnalogPin.P14, 25)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.analogWritePin(AnalogPin.P16, 25)
}
