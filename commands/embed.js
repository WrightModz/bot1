module.exports = {
    name: 'embed',
    description:'Embeds',
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
             .setColor('#1500fd')
             .setTitle('Rules')
             .setDescription('This is our rules')
             .addFields(
                 { name: 'Rule 1', value: 'Be Kind'},
                 { name: 'Rule 2', value: 'Swearing is allowed but not directed to other people'},
                 { name: 'Rule 3', value: 'No NSFW'}
             )
             .setImage('https://cdn.discordapp.com/attachments/796845655410737245/816338914586918959/cat.png')

            message.channel.send(newEmbed);
    
    
        }

}