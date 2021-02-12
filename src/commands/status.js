const Discord = global.Discord;

module.exports = {
    name: "status",
    execute(msg, args) {
		const status = global.CurrentGameStatus;
		const reply = new Discord.MessageEmbed()
				.setColor(global.Constants.EmbedColor)
				.setTitle(global.Bot.GetString(msg, "StatusTitle"))

		if (status === null){
			reply.addField(global.Bot.GetString(msg, "StatusNoGames"), global.Bot.GetString(msg, "StatusNoGamesDesc"))
		}
		else{
			if (status.isClosed){
				reply.addField(global.Bot.GetString(msg, "StatusClosed"), global.Bot.GetString(msg, "StatusClosedDesc"))
			}else{
				reply.addField(global.Bot.GetString(msg, "StatusDay"), status.day)
				reply.addField(global.Bot.GetString(msg, "StatusCloses"), `${status.timeUntillClosed} ${global.Bot.GetString(msg, "Days")}`)
				reply.addField(global.Bot.GetString(msg, "StatusPlayers"), status.players)
				reply.addField(global.Bot.GetString(msg, "StatusAlive"), status.alive)
			}
		}
		msg.channel.send(reply);
    },
};
