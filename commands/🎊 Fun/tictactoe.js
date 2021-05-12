const { tictactoe } = require('reconlx')

module.exports ={
    name: 'tictactoe',
    description: 'Play a original tictactoe game with a friend',

    async execute(message, args, cmd, client, Discord) {
        const member = message.mentions.members.first()
        if(!member) return message.channel.send(':x: Please mention a user!');

        new tictactoe({
            player_two: member, 
            message: message 
        })
    }
}