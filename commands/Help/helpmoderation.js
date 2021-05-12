module.exports = {
    name: 'helpmoderation',
    permissions: ["SEND_MESSAGES"],
    category: 'help',
    description: ("All of the moderation commands and there functions!"),
    execute(message, args, cmd, client, Discord) {
        const Moderationembed = new Discord.MessageEmbed()
            .setColor('PURPLE')
            .setTitle("All of the moderation commands!")
            .setDescription('`moderationhelp: -helpmoderation`')
            .addFields(
                { name: '-ban', value: '`Bans a user from the server`' },
                { name: '-mute', value: '`Mutes a user in the server`' },
                { name: '-kick', value: '`Kicks a user from the server`' },
                { name: '-purge', value: '`Will mass delete messages`' },
                { name: '-lock', value: '`Will set SEND_MESSAGES to false`' },
                { name: '-reload', value: '`Reloads a command`' },
                { name: '-unlock', value: '`Will set SEND_MESSAGES to true`' },
                { name: '-slowmode', value: '`Will set a message slowmode`' },
                { name: '-warn', value: '`Warns a player`' },
                { name: '-embed', value: '`A easy way to make a embed`' },
                { name: '-autorole', value: '`Gives user chosen role to any new members`' },
                { name: '-announce', value: '`Will make a announcement in #announcements` ' },
                { name: '-invite', value: '`Creates a permanent invite to the server`' },
                { name: '-prefix', value: '`changes prefix of Zenon`' },
                { name: '-restrictlog', value: '`Disables logging in a given channel` ' },
                { name: '-roles', value: '`Shows all current server roles`' },
                { name: '-setnick', value: '`Sets a player nickname`' },
                { name: 'temprole', value: '`Temporarily gives a user a role`' },
                { name: 'blacklist', value: '`Will delete any blacklisted words if sent by a user`' },
               
            )
            .setFooter("All of the current moderation commands by Zenon")
            message.channel.send(Moderationembed);
            
    }
    


    
}