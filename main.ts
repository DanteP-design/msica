bluetooth.onBluetoothConnected(function () {
    pins.setAudioPin(AnalogPin.P0)
    for (let index = 0; index < 1; index++) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(330, music.beat(BeatFraction.Whole))
    }
})
bluetooth.onBluetoothDisconnected(function () {
    pins.setAudioPin(AnalogPin.P0)
    for (let index = 0; index < 1; index++) {
        music.playTone(330, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
input.onButtonPressed(Button.A, function () {
    bluetooth.startIOPinService()
    bluetooth.setTransmitPower(7)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    pins.setAudioPin(AnalogPin.P0)
    music.stopAllSounds()
})
input.onButtonPressed(Button.B, function () {
    bluetooth.startTemperatureService()
    bluetooth.startLEDService()
})
basic.showLeds(`
    . . . . .
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    `)
