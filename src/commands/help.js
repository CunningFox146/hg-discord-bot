const Discord = global.Discord;

module.exports = {
    name: "help",
    execute(msg, args) {
		const reply = new Discord.MessageEmbed()
			.setColor(global.Constants.EmbedColor)
			.setTitle(global.Bot.GetString(msg, "CommandTitle"))
		
        Array.from(global.Bot.commands.values()).forEach(command => {
			const name = command.name;
			reply.addField(name, global.Strings.Commands[name].Get(global.Bot.GetLanguage(msg)))
		});
		
		msg.channel.send(reply);
    },
};
