const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args, config) => {



     
    let embed = new Discord.MessageEmbed()
    .setTitle(`${client.user.tag} Store!`)
    .setDescription('**Use +buy <item> to buy!**')
    .addField(`Moderator`, '`700$`\nGives you the moderator role!')
    .addField(`Admin`, '`1800$`\nGives you the admin role!') // can add up to 25(I believe)
    .setColor("RANDOM") 

    message.channel.send(embed)



}
