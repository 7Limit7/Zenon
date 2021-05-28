const Discord = require('discord.js');
const client = new Discord.Client()
require('dotenv').config();
const mongoose = require('mongoose');
const DisTube = require("distube")
const config = {
    token: process.env.TOKEN,
    prefix: process.env.PREFIX,
  };
  client.config = config;
  client.queue = new Map();
      

client.commands = new Discord.Collection();
client.events = new Discord.Collection();


['command_handler', 'distube-handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
    
});
mongoose
    .connect(process.env.MONGODB_SRV, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false

    }).then(() => {
        console.log('Connected to the database!');
    }).catch((err) => {
        console.log(err);

        
        
    

    }

    )


client.login(process.env.DISCORD_TOKEN);
//ZenonBot