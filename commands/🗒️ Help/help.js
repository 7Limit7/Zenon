const fs = require("fs");
const { dirname } = require("path");
const { isNullOrUndefined } = require("util");
const prefix = '-'
module.exports = {
    name: 'help',
    description: 'help command that displays all commands',
    bot: 'zenon',

    async execute(message, args, cmd, client, Discord) {
        if (!args[0]) {
            let categories = [];

            fs.readdirSync('./commands/').forEach(dir => {
                const commands = fs.readdirSync(`./commands/${dir}/`).filter((file) => file.endsWith('.js'));

                const cmds = commands.map(command => {
                    let file = require(`../../commands/${dir}/${command}`);

                    if (!file.name) return ('');

                    let name = file.name.replace('.js', '');

                    return `\`${name}\``;
                });

                let data = new Object();

                data = {
                    name: dir, 
                    value: cmds.length === 0 ? 'In Progress' : cmds.join(' '),
                },

                    categories.push(data)
            });



            const helpEmbed = new Discord.MessageEmbed()
                .setTitle('Help Menu')
                .addFields(categories)
                .setDescription(`Use \`${prefix}<command name> to get information!`)
                .setFooter(client.user.username, client.user.displayAvatarURL())
                .setColor('#6000ff')
                .setTimestamp()

            message.channel.send(helpEmbed)
        } else {
            const command = client.commands.get(args[0].toLowerCase()) || client.commands.find(c = c.aliases && c.aliases.includes(args[0].toLowerCase()));

            if (!command) {
                const noCommandEmbed = new Discord.MessageEmbed()
                    .setTitle(':x: Command not found!')
                    .setColor('RED')
                    .setFooter(client.user.username, client.user.displayAvatarURL())
                    .setTimestamp()

                return message.channel.send(noCommandEmbed)
            }

            const helpmenuEmbed = new Discord.MessageEmbed()
                .setTitle('Command Information')
                .addField('Prefix', `\`${prefix}\``)
                .addField('Command', command.name ? `\`${command.name}\`` : 'No command name')
                .addField('Aliases', command.aliases ? `\`${command.aliases.join('` `')}\`` : 'No Aliases')
                .addField('Usage', command.usage ? `\`${prefix}${command.name} ${command.usage}\`` : `\` ${prefix}${command.name}\``)
                .addField('Description', command.description ? command.description : 'No Description.')
                .setFooter(client.user.username, client.user.displayAvatarURL())
                .setTimestamp()
                .setColor('RANDOM')

            return message.channel.send(helpmenuEmbed)
        }
    },
}