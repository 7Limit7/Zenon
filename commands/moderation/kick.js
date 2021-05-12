

module.exports = {
    name: 'kick',
    permissions: ["KICK_MEMBERS"],
    description: "Kicks a member from the server",
    async execute(message, args, cmd, client, Discord) {
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(new Discord.MessageEmbed().setTitle(':x: ERROR INVALID PERMISSIONS').setDescription('You are missing the permission `KICK_MEMBERS`\n`-kick <@user> <reason>`'));
        if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send(new Discord.MessageEmbed().setTitle(':x: ERROR INVALID PERMISSIONS').setDescription('I am missing the permission `KICK_MEMBERS`\n`-kick <@user> <reason>`'));
        const mentionedMember = message.mentions.members.first();
        let reason = args.slice(1).join(" ");
        if (!reason) reason = "No reason given!";
        const kickEmbed = new Discord.MessageEmbed()
            .setTitle("**Kick Result:**")
            .setDescription(`:notepad_spiral:**Reason:** ${reason} \n :hammer_pick:**Moderator:** ${message.author}`)
            .setColor("PURPLE")
            .setTimestamp()
            .setFooter(client.user.tag, client.user.displayAvatarURL());

        if (!args[0]) return message.channel.send(new Discord.MessageEmbed().setTitle(':x: ERROR INVALID ARGS').setDescription('No mentioned member to kick!\n`-kick <@user> <reason>`'));
        if (!mentionedMember) return message.channel.send(new Discord.MessageEmbed().setTitle(':x: ERROR INVALID ARGS').setDescription('Mentioned member is not in the server!\n`-kick <@user> <reason>`'));
        try {
            await mentionedMember.send(kickEmbed);

        } catch (err) {
            console.log(`I was unable to message the mentioned member!`);
        }

        try {
            await mentionedMember.kick(reason);
        } catch (err) {
            console.log(err);
            return message.channel.send(new Discord.MessageEmbed().setTitle(':x: ERROR INVALID ARGS').setDescription('I was unable to kick the mentioned member!\n`-kick <@user> <reason>`'));
        }
    }
}