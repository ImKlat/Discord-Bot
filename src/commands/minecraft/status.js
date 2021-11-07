const { Client, Message, MessageEmbed } = require('discord.js');
const ping = require('mc-hermes');
  
module.exports = {
    name: 'status',
    cooldown: 10,
    /** 
    * @param {Client} client 
    * @param {Message} message 
    * @param {String[]} args 
    */
    run: async(client, message, args) => {
        ping({
            type: 'pc',
            server: '34.130.174.241'
        })

        .then((data)=>{
            const enable = new MessageEmbed()

            .setDescription("Voil | Status")
            .setDescription(
                "**IP:** voilpvp.net\n"+
                "**Web:** [Voil Web](https://voilpvp.net/)\n"+
                "**Status:** Online\n"+
                "**TeamSpeak:** ts.voilpvp.net\n"+
                "\n"+
                "**Players:** "+data.players.online
            )
            .setThumbnail("https://cdn.discordapp.com/attachments/859876586370760755/906697345993932820/Sin_titulo-1-1.png")
            .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic:true}))
            .setColor("RANDOM")

            message.channel.send(enable)
        })
        .catch(error =>{
            const disable = new MessageEmbed()

            .setDescription("Voil | Status")
            .setDescription(
                "**IP:** voilpvp.net\n"+
                "**Web:** [Voil Web](https://voilpvp.net/)\n"+
                "**Status:** Offline\n"+
                "**TeamSpeak:** ts.voilpvp.net\n"+
                "\n"+
                "**Players:** 0"
                
                )
            .setThumbnail("https://cdn.discordapp.com/attachments/859876586370760755/906697345993932820/Sin_titulo-1-1.png")
            .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic:true}))
            .setColor("RANDOM")

            message.channel.send(disable);
    })
    }
}