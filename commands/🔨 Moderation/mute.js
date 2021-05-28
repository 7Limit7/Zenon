module.exports = {
  name: "mute",
  description: "Mute anyone who break rules",
  category: "commands",
  usage: "mute <@mention> <reason>",
  execute: async (message, args, cmd, client, Discord) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(new Discord.MessageEmbed).setTitle(':x: ERROR INVALID PERMISSIONS').setDescription('You are missing the permision `MANAGE_ROLES` \n\n **EXAMPLES** \n `-mute <@user> <reaoson>` \n -mute @Limit test')
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send(new Discord.MessageEmbed).setTitle(':x: ERROR INVALID PERMISSIONS').setDescription('I am missing the permision `MANAGE_ROLES` \n\n **EXAMPLES** \n `-mute <@user> <reaoson>` \n -mute @Limit test')
    
    const user = message.mentions.members.first();
    
    if(!user) {
      return message.channel.send(new Discord.MessageEmbed).setTitle(':x: ERROR INVALID ARGS').setDescription('You did not mention a user! \n\n **EXAMPLES** \n `-mute <@user> <reason>` \n -mute @Limit test');
    }
    
    if(user.id === message.author.id) {
      return message.channel.send(new Discord.MessageEmbed).setTitle(':x: ERROR INVALID ARGS').setDescription('You cant mute yourself! \n\n **EXAMPLES** \n `-mute <@user> <reason>` \n -mute @Limit test');
    }
    
    
    let reason = args.slice(1).join(" ")
    
    
    if(!reason) {
      return message.channel.send(new Discord.MessageEmbed).setTitle(':x: ERROR INVALID ARGS').setDescription('No given reason to mute! \n\n **EXAMPLES** \n `-mute <@user> <reason>` \n -mute @Limit test');
    }
    
  //TIME TO LET MUTED ROLE
    
    let muterole = message.guild.roles.cache.find(x => x.name === "Muted")
    
    
      if(!muterole) {
        return message.channel.send(new Discord.MessageEmbed).setTitle(':x: ERROR INVALID ROLES').setDescription('No role called Muted! \n\n **EXAMPLES** \n `-mute <@user> <reason>` \n -mute @Limit test');
    }
    
    
   if(user.roles.cache.has(muterole)) {
    return message.channel.send(new Discord.MessageEmbed).setTitle(':x: ERROR INVALID ARGS').setDescription('mentioned user is already muted! \n\n **EXAMPLES** \n `-mute <@user> <reason>` \n -mute @Limit test');
    }
    
  
    
    
    user.roles.add(muterole)
    
await message.channel.send(new Discord.MessageEmbed).setTitle('Mute Result:').setDescription(`:no_entry: **Target:** <@${memberTarget.user.id}> \n :hammer_pick: **Moderator:** ${message.author} \n :notepad_spiral: **Reason:** ${reason}`);
    
    user.send(`You are muted in **${message.guild.name}** For \`${reason}\``)
    
    
//WE ARE DONE HERE 
    

  }
}