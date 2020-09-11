export default function renderScreen(screen, player, requestAnimationFrame) {
    const context = screen.getContext('2d')
    context.clearRect(0, 0, screen.width, screen.height);

    context.fillStyle = 'red'
    context.fillRect(player.state.posX, player.state.posY, player.state.width, player.state.height)

    requestAnimationFrame(() => {
        renderScreen(screen, player, requestAnimationFrame)
    })
}