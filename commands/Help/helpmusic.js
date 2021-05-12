module.exports = {
    name: 'helpmusic',
    permissions: ["SEND_MESSAGES"],
    category: 'help',
    description: ("All of the music commands and there functions!"),
    execute(message, args, cmd, client, Discord) {
        const Musicembed = new Discord.MessageEmbed()
            .setColor('PURPLE')
            .setTitle("All of the music commands!")
            .setDescription('`helpmusic: -helpmusic`')
            .addFields(
                { name: '-Play', value: '`Plays a requested song`' },
                { name: '-Pause', value: '`Pauses the current song playing`' },
                { name: '-Skip', value: '`Skips the current song playing`' },
                { name: '-Queue', value: '`Shows the song queue`' },
                { name: '-Loop', value: '`Loops the current song playing`' },
                { name: '-Volume', value: '`Changes the volume of the music`' },
                { name: '-Shuffle', value: '`Shuffles queue`' },
                { name: '-Stop', value: '`Stops playing all music`' },
                { name: '-Resume', value: '`Resumes a paused song`' },
                { name: '-Remove', value: '`Removes a song from song queue`' },
                { name: '-NowPlaying', value: '`Shows the current song playing` ' },
                { name: '-lyrics', value: '`Shows the lyrics of the song playing`' },
                { name: '-bassboot', value: '`Will blast the current song playing`' },
             
               
            )
            .setFooter("All of the current music commands by Zenon")
            message.channel.send(Musicembed);
            
    }
    


    
}