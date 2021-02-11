module.exports = {
    name: "status",
    description: "Displays the status of the current game.",
    execute(msg, args) {
		global.Bot.GetLanguage(msg);
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
