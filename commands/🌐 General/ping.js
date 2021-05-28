module.exports = {
    name: "ping",
    description: "Show the bot's average ping",
    execute(message) {
      message.reply(`📈 Average ping to API: ${message.client.ws.ping} ms`).catch(console.error);
    }
  };