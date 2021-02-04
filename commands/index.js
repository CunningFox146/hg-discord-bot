const COMMANDS = {
	Ping: require('./ping'),
}

function LoadCommands(bot){
	Object.keys(COMMANDS).map(key => {
		bot.commands.set(COMMANDS[key].name, COMMANDS[key]);
	});
}

module.exports = {
	Commands: COMMANDS,
	LoadCommands: LoadCommands,
};
