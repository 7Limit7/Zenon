const { MessageEmbed } = require("discord.js");
module.exports = {
    name: 'loop',
    descriptin: 'Loops the song thats currently playing.',
    async execute(client, message) {
        const queue = message.client.queue.get(message.guild.id);

        if (!queue)
            return message.channel.send(
                ":x: There are no songs playing in this server"
            );

        queue.loop = !queue.loop;
        message.channel.send(
            new MessageEmbed()
                .setAuthor(
                    "Master Loop Contrller",
                    "https://img.icons8.com/color/2x/refresh--v2.gif"
                )
                .setColor("BLUE")
                .setTimestamp()
                .setDescription(
                    "**Loop is" +
                    (queue.loop == true ? " Enabled " : " Disabled ") +
                    "for current song :white_check_mark: **"

                )
        )
    }
}