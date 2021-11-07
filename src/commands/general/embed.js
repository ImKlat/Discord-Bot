const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'embed',
    cooldown: 10,
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Que estas tratandod de hacer pamflin?")
        let separator = args.join(" ")
        let embedargs = separator.split("%")
        if(!embedargs[0]) return message.channel.send("Ingresa el titulo filo da")
        if(!embedargs[1]) return message.channel.send("Ingresa la descripcion puta")
        const embed = new MessageEmbed()
        .setTitle(embedargs[0])
        .setDescription(embedargs[1])
        .setFooter(message.author.username, message.author.displayAvatarURL({dynamic:true}))
        .setColor("RANDOM")
        message.channel.send(embed)
        message.delete({timeout: 2000})
    }
}