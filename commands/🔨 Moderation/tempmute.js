const ms = require('ms');
module.exports = {
    name: 'tempmute',
    permissions: ["MANAGE_MESSAGES", "MANAGE_GUILD"],
    description: "This mutes a member",
    execute(message, args, cmd, client, Discord) {
        const target = message.mentions.users.first();
        if (target) {

            let mainRole = message.guild.roles.cache.find(role => role.name === 'cutie');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

            let memberTarget = message.guild.members.cache.get(target.id);
            if (!args[1]) {
                
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                
                message.channel.send(new Discord.MessageEmbed().setTitle('**Mute Result:**').setDescription(`:no_entry: **Target:** <@${memberTarget.user.id}> \n :hammer_pick: **Moderator:** ${message.author} \n :notepad_spiral: **Reason:** ${reason} \n :clock1: **Duration:** ${ms(ms(args[1]))}`));
                
                return 
                

            }
            let reason = args.slice(2).join(' ');
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(new Discord.MessageEmbed().setTitle('**Mute Result:**').setDescription(`:no_entry: **Target:** <@${memberTarget.user.id}> \n :hammer_pick: **Moderator:** ${message.author} \n :notepad_spiral: **Reason:** ${reason} \n :clock1: **Duration:** ${ms(ms(args[1]))}`));

        
                setTimeout(function () {
                    memberTarget.roles.remove(muteRole.id);
                    memberTarget.roles.add(mainRole.id);
                    message.channel.send(`<@${memberTarget.user.id}> has been unmuted`);
                }, ms(args[1]));
            
            }
        }
    }