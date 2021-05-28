const { MessageEmbed } = require("discord.js");
module.exports = {
    name: 'stop',
    description: 'stops the song thats currently playing',
    async execute(client, message) {
        const channel = message.member.voice.channel;
        if (!channel)
            return message.channel.send(
                "You must Join a voice channel before using this command!"
            );
        let queue = message.client.queue.get(message.guild.id);
        if (!queue)
            return message.channel.send(
                new MessageEmbed()
                    .setDescription(":x: There are no songs playing in this server")
                    .setColor("RED")
            );
        queue.connection.dispatcher.end();
        queue.queue = [];
        return message.channel.send(
            new MessageEmbed()
                .setDescription("**Stopped the music :white_check_mark: **")
                .setColor("BLUE")
        )
    }
}