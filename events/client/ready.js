
const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = () => {
    client.on('ready', () => {
        console.log('Zenon is online!');

        setInterval(() => {
            const statuses  = [
                `-help | ${client.guilds.cache.size} Servers`,
                `-help | ${client.users.cache.size} Users`,
                
                
            ]

            const status = statuses[Math.floor(Math.random() * statuses.length)]
            client.user.setActivity(status, { type: "PLAYING" })
        }, 7000)

                
            
        })
    
        client.login(process.env.DISCORD_TOKEN);
        

    }
