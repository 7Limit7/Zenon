const weather = require('weather-js');
const discord = require('discord.js')




//TIME TO END STREAM
module.exports = {
  name: "weather",
  permissions: ["SEND_MESSAGES"],
  description: "Get the weather of anywhere",
  category: "fun",
  usage: "-weather <location>",
  execute: (message, args, cmd, client, Discord) => {


    if (!args.length) {
      return message.channel.send(new Discord.MessageEmbed().setTitle(':x: ERROR INVALID ARGS').setDescription('You did not mention a Location! \n\n **EXAMPLES** \n `-weather <location>`'));
    }

    weather.find({ search: args.join(" "), degreeType: 'F' }, function (err, result) {
      try {

        let embed = new discord.MessageEmbed()
          .setTitle(`Weather - ${result[0].location.name}`)
          .setColor("#ff2050")
          .setDescription("Temperature units can may be differ some time")
          .addField("Temperature", `${result[0].current.temperature} Fahrenheit`, true)
          .addField("Sky Text", result[0].current.skytext, true)
          .addField("Humidity", result[0].current.humidity, true)
          .addField("Wind Speed", result[0].current.windspeed, true)//What about image
          .addField("Observation Time", result[0].current.observationtime, true)
          .addField("Wind Display", result[0].current.winddisplay, true)
          .setThumbnail(result[0].current.imageUrl);
        message.channel.send(embed)
      } catch (err) {
        return message.channel.send(new Discord.MessageEmbed().setTitle(':x: ERROR INVALID ARGS').setDescription('Given location is invalid! \n\n **EXAMPLES** \n `-weather <location>`'));
      }
    }
    )
  }
}
