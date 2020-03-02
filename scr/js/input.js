document.addEventListener('keydown', handleKeydown)

var light = false
var record = false
var lock = false

// Input do Teclado
function handleKeydown(event) {

    const keyPressed = event.key

    if (keyPressed === 'ArrowUp') {
        PressArrowUp()
    }

    if (keyPressed === 'ArrowRight') {
        PressArrowRight()
    }

    if (keyPressed === 'ArrowDown') {
        PressArrowDown()
    }

    if (keyPressed === 'ArrowLeft') {
        PressArrowLeft()
    }

}


// Input Botão LUZES
function lightSwitch(params) {
    if (light === false) {
        return light = true, lightOn()
    } else {
        return light = false, console.log('Lights OFF')
    }
}

// Lockar Movimentação à Frente
function cruzeiroSwitch(params) {
    if (lock === false) {
        return lock = true, cruzeiro()
    } else {
        return lock = false, console.log('Controle Retomado')
    }
}

// Input Botão Foto
function takePicture(params) {
    return camera()
}

// Input Botão Gravação
function recordSwitch(params) {
    if (record === false) {
        return record = true, recordOn()
    } else {
        return record = false, console.log('Record OFF')
    }
}