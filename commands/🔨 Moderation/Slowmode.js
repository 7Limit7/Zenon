const Discord = require('discord.js');
module.exports = {
    name: 'slowmode',
    aliases:['slowmo'],
    permissions: ["MANAGE_MESSAGES"],
    category: 'moderation',
    description: 'Sets SlowMode for a Channel',
    usage: '-slowmode 1 > 100 | -slowmode 1 < 100',
async execute(message, args){
    if (!message.member.hasPermission("BAN_MEMBERS")){
        messages.channel.send(new Discord.MessageEmbed() .setDescription('You Cannot do that, Missing Permissions') .setColor('RED'))
        return;
    }

    if (!args[0]) return message.channel.send(new Discord.MessageEmbed() .setDescription('Invalid Args: What do you want the slowmode to be set to?') .setColor('RED'));
    if(isNaN(args[0])) return message.channel.send(new Discord.MessageEmbed() .setDescription('Please type a real number!') .setColor('RED'));
    if (args[0] > 21600 || args[0] < 0) return message.channel.send(new Discord.MessageEmbed() .setDescription('Number must be between 0 - 21600') .setColor('RED'))

    const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[1]) || message.channel

        channel.setRateLimitPerUser(args[0])
        message.channel.send(new Discord.MessageEmbed() .setDescription(`:white_check_mark: Slow Mode set to ${args[0]}`) .setColor('GREEN'))
        return;



}
}
