module.exports = {
    name: "status",
    execute(msg, args) {
		const status = global.CurrentGameStatus;
		if (status === null)
		{
        	msg.reply("no active games");
			return;
		}
        // msg.reply(global.Strings.Rus.GameStatus(status));
        // msg.reply(global.Strings.Eng.GameStatus(status));

		msg.reply(global.Bot.GetString(msg, "GameStatus", status));
    },
};
