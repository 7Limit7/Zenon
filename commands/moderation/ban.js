module.exports = {
    name: 'ban',
    permissions: ["BAN_MEMBERS"],
    description: "bans a user from the server",
    async execute(message, args, cmd, client, Discord) {
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(new Discord.MessageEmbed().setTitle(':x: ERROR INVALID PERMISSIONS').setDescription('You are missing the permission `BAN_MEMBERS`\n`-ban <@user> <reason>`'));
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(new Discord.MessageEmbed().setTitle(':x: ERROR INVALID PERMISSIONS').setDescription('I am missing the permission `BAN_MEMBERS`\n`-ban <@user> <reason>`'));

        let reason = args.slice(1).join(" ");
        const mentionedMember = message.mentions.members.first();

        if (!reason) reason = 'No reason given';
        if (!args[0]) return message.channel.send(new Discord.MessageEmbed().setTitle(':x: ERROR INVALID ARGS').setDescription('You did not state a member to ban!\n`-ban <@user> <reason>`'));
        if (!mentionedMember) return message.channel.send(new Discord.MessageEmbed().setTitle(':x: ERROR INVALID ARGS').setDescription('Mentioned member is not in the server!\n`-ban <@user> <reason>`'));
        if (!mentionedMember.bannable) return message.channel.send(new Discord.MessageEmbed().setTitle(':x: ERROR INVALID ARGS').setDescription('I cannot ban mentioned member!\n`-ban <@user> <reason>`'));

        const banEmbed = new Discord.MessageEmbed()
            .setTitle(`You have been banned from ${message.guild.me}`)
            .setDescription(`Reason: ${reason}`)
            .setColor("RED")
            .setTimestamp();

        await mentionedMember.send(banEmbed).catch(err => console.log(err));
        await mentionedMember.ban({
            days: 7,
            reason: reason
        }).catch(err => console.log(err)).then(() => message.channel.send(new Discord.MessageEmbed().setTitle('**Ban Result:**').setDescription(`:no_entry: **Target:** ${mentionedMember} \n :hammer_pick: **Moderator:** ${message.author} \n :notepad_spiral: **Reason:** ${reason}`)))
    }
}



