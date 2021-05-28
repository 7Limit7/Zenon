const { MessageEmbed } = require("discord.js");
module.exports = {
    name: 'connect',
    description: 'Connects Zenon Music to the Voice Channel',
    async execute(client, message) {
        const voiceChannel = message.member.voice.channel;
voiceChannel.join();
if (!voiceChannel) {   
    return message.reply('Please join a voice channel before using this command.');
}
            

        if (!channel.permissionsFor(message.client.user).has("CONNECT"))
            return error("I don't have permission to join the voice channel");

        if (!channel.permissionsFor(message.client.user).has("SPEAK"))
            return error("I don't have permission to speak in the voice channel");

        await channel.join();

        return message.channel.send(
            new MessageEmbed()
                .setDescription("**Joined the voice channel :white_check_mark: **")
                .setColor("BLUE")
        )
    }
}