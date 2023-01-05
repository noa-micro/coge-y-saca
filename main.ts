input.onButtonPressed(Button.A, function () {
    coge = randint(1, 3)
    if (coge == 1) {
        basic.showIcon(IconNames.Rollerskate)
        music.playMelody("E D G F B A C5 B ", 120)
    } else if (coge == 2) {
        basic.showIcon(IconNames.Heart)
        music.playMelody("E B C5 A B G A F ", 120)
    } else if (coge == 3) {
        basic.showIcon(IconNames.EigthNote)
        music.playMelody("A F E C D G E F ", 120)
    }
    basic.showIcon(IconNames.Sword)
})
let coge = 0
basic.showIcon(IconNames.Sword)
basic.forever(function () {
	
})
