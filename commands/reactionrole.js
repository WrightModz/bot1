module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '816301904954261504';
        const VerifiedRole = message.guild.roles.cache.find(role => role.name === "Verified");
 
        const VerifiedRoleEmoji = '✅';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Click the tick to verify!')
            .setDescription('Clicking the tick will give you access to the server!\n\n'
                + `${VerifiedRoleEmoji} To verify`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(VerifiedRoleEmoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === VerifiedRoleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(VerifiedRole);
                }
            } else {
                return;
            }
 
    })}}; 