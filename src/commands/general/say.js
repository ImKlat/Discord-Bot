const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'say',
    cooldown: 10,
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Que estas tratandod de hacer pamflin?")
        let text = args.join(" ")
        if(!text) return message.channel.send("Enter any message to say")
        message.channel.send(text)
    }
}