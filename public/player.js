export default function createPlayer(screen) {
    const state = {
        sprite: null,
        posX: 10,
        posY: 10,
        width: 37,
        height: 40,
        speed: 20,
        sc: screen
    }

    function movePlayer(command) {
        const acceptedMoves = {
            ArrowUp() {
                state.posY = Math.max (state.posY - state.speed, 0)
            },
            ArrowRight() {
                state.posX = Math.min (state.posX + state.speed, state.sc.width - state.width + state.speed)
            },
            ArrowDown() {
                state.posY = Math.min (state.posY + state.speed, state.sc.height - state.height + state.speed)
            },
            ArrowLeft() {
                state.posX = Math.max (state.posX - state.speed, 0)
            }
        }

        const keyPressed = command.pressedKeys

        keyPressed.forEach((key) => {
            const moveFunction = acceptedMoves[key]
            if (moveFunction) {
                moveFunction()
            }
        })
    }
    return {
        state,
        movePlayer
    }
}