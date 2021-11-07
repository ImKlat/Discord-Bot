const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'avatar',
    cooldown: 10,
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        let avatar = message.author.displayAvatarURL({dynamic: true})
        const embed = new MessageEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic:true}))
        .setTitle("**👤 Avatar**")
        .setImage(message.author.displayAvatarURL({size: 1024, dynamic:true}))
        .setColor("RANDOM")
        message.channel.send(embed)
    }
}