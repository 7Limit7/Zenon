const Discord = require('discord.js')

module.exports = {
    name: 'support',
    description: 'Gives Zenon Support Link',
    execute(message) {
        if(!message.member.hasPermission('SEND_MESSAGES')) return message.channel.send ('How do you not have SEND_MESSSAGES but can type what. are. you. a. wizard. WTF.')
    else return message.channel.send('https://discord.gg/jrYFnxjm6M');
    
        
    }
}