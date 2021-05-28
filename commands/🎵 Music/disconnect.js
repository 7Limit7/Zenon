const { MessageEmbed } = require("discord.js");
module.exports = {
    name: 'disconnect',
    description: 'Disconnects Zenon Music from the Voice Channel',
    async execute(client, message) {
        const channel = message.member.voice.channel;
        if (!channel)
            return message.channel.send(
                "You must Join a voice channel before using this command!"
            );

        await channel.leave();

        return message.channel.send(
            new MessageEmbed()
                .setDescription("**Left the voice channel :white_check_mark: **")
                .setColor("BLUE")
        )
    }
}