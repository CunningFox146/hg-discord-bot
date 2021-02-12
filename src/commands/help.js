module.exports = {
    name: "help",
    execute(msg, args) {
		let str = ""
		
        Array.from(global.Bot.commands.values()).forEach(command => {
			const name = command.name;
			str += `${global.Strings.Commands[name].Get(global.Bot.GetLanguage(msg))}\n`;
		});
		msg.reply(str);
		
    },
};
