module.exports = {
    name: 'temp',
    description: 'temp',
    execute(message) {
        if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send ('its temp')
    else return message.channel.send('temp command lol');
        
    }
}