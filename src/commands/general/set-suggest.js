const { Client, Message, MessageEmbed } = require('discord.js');
const config = require('/Users/Tobias/Desktop/Discord-Bot/data.json')

module.exports = {
    name: 'set-suggest',
    cooldown: 10,
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You do not have permission to use this command!")
        let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
        if (!channel) return message.channel.send("Please specify a channel!")
        const fs = require('fs')
        fs.writeFile("/Users/Tobias/Desktop/Discord-Bot/data.json", JSON.stringify({
            channel: channel.id
        }), (err) =>{
            if (err) console.log(err)
        })
        message.channel.send(`Set the channel to ${channel}`)
    }
}