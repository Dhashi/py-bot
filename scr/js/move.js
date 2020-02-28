//  Movimento
function PressArrowUp() {
    console.log("ArrowUp")
}

function PressArrowLeft() {
    console.log("ArrowLeft")
}

function PressArrowRight() {
    console.log("ArrowRight")
}

function PressArrowDown() {
    console.log("ArrowDown")
}

// Luzes
function lightOn(params) {
    do {
        setTimeout(function() { console.log("Lights ON"); }, 1000);
    } while (light === true);
}

// Velocidade de Cruzeiro
function cruzeiro(params) {
    setTimeout(function() { console.log("Moving Foward"); }, 1000);
}

// Camera
function camera(params) {
    console.log('Picture Taked')
}

// Gravação 
function recordOn(params) {
    setTimeout(function() { console.log("Recording..."); }, 1000);
}