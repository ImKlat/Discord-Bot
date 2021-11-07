const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    cooldown: 10,
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        let server = message.guild.name
        const embed = new MessageEmbed()
        .setTitle(server)
        .setDescription("Hello! These are my currents commands for this server.")
        .addFields(
            { name: "**📣 My current prefix**", value: "`!`" },
            { name: "**🤖 General Commands**", value: "`help`"},
            { name: "**🛡 Admin Commands**", value: "`embed` | `say`| `clear`"},
            { name: "**🎁 Other Commands**", value: "`avatar` | `ping`"},
        )
        message.channel.send(embed)
    }
}