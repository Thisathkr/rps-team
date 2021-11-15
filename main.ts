radio.onReceivedNumber(function (receivedNumber) {
    let list: number[] = []
    match = action == receivedNumber
    player_index = list.indexOf(radio.receivedPacket(RadioPacketProperty.SerialNumber))
    found = player_index >= 0
    if (match && !(found)) {
        players.push(radio.receivedPacket(RadioPacketProperty.SerialNumber))
    }
    if (match && !(player_index)) {
        temp = players.removeAt(player_index)
    }
})
input.onGesture(Gesture.Shake, function () {
    action = randint(0, 2)
})
let temp = 0
let found = false
let player_index = 0
let action = 0
let match = false
let players: number[] = []
players = [0]
radio.setGroup(10)
radio.setTransmitSerialNumber(true)
basic.forever(function () {
    radio.sendNumber(action)
    if (action == 0) {
        basic.showIcon(IconNames.Chessboard)
    } else if (action == 1) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
    basic.showNumber(players.length)
})
