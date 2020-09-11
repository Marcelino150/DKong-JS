export default function createKeyboardListener(document) {
    const state = {
        observers: [],
        playerId: null,
        pressedKeys: [],
        interval: null
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)

    function subscribe(observerFunction) {
        state.observers.push(observerFunction)
    }

    function notifyAll(command) {
        for (const observerFunction of state.observers) {
            observerFunction(command)
        }
    }

    function handleKeyDown(event) {
        if(!state.pressedKeys.includes(event.key)) {
            state.pressedKeys.push(event.key)
        }

        state.interval = state.interval || setInterval(notifyMovement, 1000/30)
    }

    function handleKeyUp(event) {
        const index = state.pressedKeys.indexOf(event.key)
        state.pressedKeys.splice(index, 1)

        if (state.pressedKeys.length == 0) {
            clearInterval(state.interval)
            state.interval = null
        }
    }

    function notifyMovement() {    
        const pressedKeys = state.pressedKeys
        const command = {
            pressedKeys
        }

        notifyAll(command)
    }

    return {
        subscribe
    }
}