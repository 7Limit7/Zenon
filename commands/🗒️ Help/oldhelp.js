module.exports = {
    name: 'oldhelp',
    permissions: ["SEND_MESSAGES"],
    
    description: "Lists of the commands Zenon Brings!",
    execute(message, args, cmd, client, Discord) {
        const NewEmbed = new Discord.MessageEmbed()
            .setColor('#304281')
            .setTitle("Zenon's Commands")
            .setDescription('`-help[category] to show what each command does`')
            .addFields(
                { name: ':tools: Moderation [23]', value: '`Ban` `Mute` `Kick` `Purge` `Lock` `Unlock` `slowmode` `warn` `Embed Maker` `autorole` `announce` `reload` `invite` `prefix` `restrictlog` `role` `roles` `setnick` `temprole` `blacklist`', inline: true },
                { name: ':musical_note: Music [13]', value: '`Play` `Pause` `Skip` `Queue` `Loop` `Volume` `Shuffle` `Stop` `Resume` `Remove` `NowPlaying` `lyrics` `bassboost` ' , inline: true },
                { name: ':game_die: Fun [18]', value: '`Meme` `8ball` `Connect4` `catfacts` `dogfacts` `minecraftserver` `imagesearcher` `avater` `weather` `kiss` `slap` `dictionary` `flip` `cat` `dog` `avatar` `hug` `fact` ' , inline: true },     
                
                { name: ' :sparkles: EXP [5]', value: '`EXP` `leaderboardexp` `level` `positionexp` `exphelp`', inline: true  },
                { name: ':globe_with_meridians:  General [1]', value: '`bot-info` `user-info`', inline: true  },
                { name: ':tickets: Tickets [1]', value: '`ticket`', inline: true  },
                { name: 'Roles [Unknown]', value: '`Coming Soon!`', inline: true  },

            )
            .setFooter('All of the current commands Zenon has!');

        message.channel.send(NewEmbed);

    }

}