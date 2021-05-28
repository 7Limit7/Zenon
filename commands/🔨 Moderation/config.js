const message = require("../../events/guild/message")

module.exports = {
    name:'config',
    description:'Configuration for your guild',
    async execute(message, args, cmd, client, Discord) {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed).setColor('PURPLE').setTitle(':x: ERROR INVALID PERMISSIONS').setDescription('You are missing the permission `ADMINISTRATOR` \n\n **EXMAPLES** \n\n `-config`')
    }
}
        const ConfigHelp = new Discord.MessageEmbed()
        .setColor('PURPLE')
        .setTitle('Config Directory')
        .setDescription('This is the Config Directory, Anything that can be customized will be shown below.')
        .setFields(
            {name:'**MODERATION**'},
            {name: 'Moderation Roles', value:'-config setmodrole `<rolename>` // `<roleID>`', inline: true},
            {name: 'Mute role', value:'-config setmuterole `<rolename>` // `<roleID>`', inline: true},
            {name: 'Welcome Channel', value:'-config setWelcomeChannel `<#Channel>` // `<ChannelID`', inline:true},

            {name:'SWITCHES'},
            {name:'Leveling', value:'-config Leveling `on` // `off`', inline: true},
            {name:'Anti-Swear', value:'-config Anti-Swear `on` // `off`', inline: true},
        )

  if (message.content.includes("config") 
  message.channel.send('')
  }

            
            

        )
        

    
