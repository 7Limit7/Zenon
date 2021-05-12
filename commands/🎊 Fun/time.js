module.exports = {
    name: 'time',
    category: "fun",
    description: "A simple a ping command",
    execute(message, args) {
        message.channel.send('Time for you to get a watch! :watch:');
    }
}