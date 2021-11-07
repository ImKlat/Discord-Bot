const { Client, Message, MessageEmbed } = require('discord.js');
  
module.exports = {
    name: 'clear',
    cooldown: 10,
    /** 
    * @param {Client} client 
    * @param {Message} message 
    * @param {String[]} args 
    */
    run: async(client, message, args) => {
        let amount = args[0]
        if(!args[0]) return message.channel.send("Please enter a number")
        message.channel.bulkDelete(amount)
        message.channel.send(amount + " messages successfully deleted!")
    }
}