const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'suggestion',
    cooldown: 10,
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        let suggestion = args.join(" ");
        if (!suggestion)
          return message.channel
            .send(`Please provide a suggestion!`)
        const embed = new MessageEmbed()
        .setThumbnail(message.author.displayAvatarURL({dynamic:true}))
        .addFields(
            { name: "**Submitter**", value: message.author.tag },
            { name: "**Suggestion**", value: suggestion },
        )
        message.guild.channels.cache.get("870802856767262800").send(embed)
        .then(function (message){
			message.react("⏫")
			message.react("⏬")
		})
        message.channel.send("Suggestion sent successfully!").then(message => {message.delete({timeout: 4000})})
        message.delete({timeout: 2000})
    }
}