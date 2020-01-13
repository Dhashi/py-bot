document.addEventListener('keydown', handleKeydown)

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