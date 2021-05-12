const { MessageEmbed } = require("discord.js")


module.exports = {
  name: "suggest",
  usage: "suggest <message>",
  permissions: ["SEND_MESSAGES"],
  description: "Send your Suggestion",
  category: 'moderation',
  execute: (message, args, cmd, client, Discord) => {

    if (!args.length) {
      return message.channel.send("Please Give the Suggestion")
    }

    let channel = message.guild.channels.cache.find((x) => (x.name === "suggestion" || x.name === "suggestions"))


    if (!channel) {
      return message.channel.send("there is no channel with name - suggestions")
    }


    let embed = new MessageEmbed()
      .setAuthor("SUGGESTION: " + message.author.tag, message.author.avatarURL())
      .setThumbnail(message.author.avatarURL())
      .setColor("#0080FF")
      .setDescription(args.join(" "))
      .setTimestamp()


    channel.send(embed).then(m => {
      m.react("✅")
      m.react("❌")
    })



    message.channel.send("Sended Your Suggestion to " + channel)

  }
}