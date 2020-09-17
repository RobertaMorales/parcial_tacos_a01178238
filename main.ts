input.onButtonPressed(Button.B, function () {
    basic.showNumber(cant_playeras_mujer)
    basic.showString("Mujer")
    basic.showNumber(cant_playeras_hombre)
    basic.showString("Hombre")
    basic.showString("Total")
    basic.showNumber(cant_playeras_mujer + cant_playeras_hombre)
})
let cant_playeras_hombre = 0
let cant_playeras_mujer = 0
basic.showString("Roberta Morales A01178238")
cant_playeras_mujer = randint(20, 200)
cant_playeras_hombre = randint(20, 200)
let precio_playeras_mujer = 250
let precio_playeras_hombre = 200
