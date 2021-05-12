module.exports = {
    name: 'purge',
    category: 'moderation',
    description: "Removes messages from chat!",
    async execute(message, args, cmd, client, Discord) {

        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(new Discord.MessageEmbed().setTitle(':x: ERROR INVALID PERMISSIONS').setDescription('You are missing the permission `MANAGE_MESSAGES` \n\n **EXAMPLES** \n `-purge <amount>` \n `-purge 1` \n `-purge 100`'));
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send(new Discord.MessageEmbed().setTitle(':x: ERROR INVALID PERMISSIONS').setDescription('I am missing the permission `MANAGE_MESSAGES` \n\n **EXAMPLES** \n `-purge <amount>` \n `-purge 1` \n `-purge 100`'));

        if(!args[0]) return  message.channel.send(new Discord.MessageEmbed().setTitle(':x: ERROR INVALID ARGS').setDescription("You did not speciy the amount of messages to purge. \n\n **EXAMPLES** \n `-purge <amount>` \n `-purge 1` \n `-purge 100`").setColor('RED'));
        if(isNaN(args[0])) return message.channel.send(new Discord.MessageEmbed().setTitle(':x: ERROR INVALID ARGS') .setDescription("You didn't enter a real number. \n\n **EXAMPLES** \n `-purge <amount>` \n `-purge 1` \n `-purge 100`").setColor('RED'));
        if(args[0] > 100) return message.channel.send(new Discord.MessageEmbed().setTitle(':x: ERROR INVALID ARGS') .setDescription("You can't delete more than 100 messages. \n\n **EXAMPLES** \n `-purge <amount>` \n `-purge 1` \n `-purge 100`").setColor('RED'));
        if(args[0] < 1) return message.channel.send(new Discord.MessageEmbed().setTitle(':x: ERROR INVALID ARGS') .setDescription("The amount specified is less than 1. \n\n **EXAMPLES** \n `-purge <amount>` \n `-purge 1` \n `-purge 100`").setColor('RED'));
    
        await message.channel.messages.fetch({limit: args[0]}).then(messages => {
            message.channel.bulkDelete(messages);
        });
    }
}
