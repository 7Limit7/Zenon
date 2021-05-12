const { Channel } = require("discord.js");

module.exports = {
    name: 'lock',
    permissions: ["SEND_MESSAGES"],
    category: 'moderation',
    description: ("Disables everyones ability to talk in a channel!"),
    execute(message, args, cmd, client, Discord, profileData) {
        channels.roles.everyone.setPermissions(
            everyone.id,
            {
                'SEND_MESSAGES': false
            });
        }
    }