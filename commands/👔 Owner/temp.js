const { execute } = require("../🗒️ Help/oldhelp");

module.exports = {
    name: 'temp',
    description: 'temp',
    execute(message) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send ('you are not the owner')
    else return message.channel.send('temp command lol');
        
    }
}