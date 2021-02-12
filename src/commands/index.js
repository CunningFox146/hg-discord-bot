const COMMANDS = {
	Ping: require('./ping'),
	Status: require('./status'),
	Help: require('./help'),
}

function LoadCommands(map){
	Object.keys(COMMANDS).map(key => {
		map.set(COMMANDS[key].name, COMMANDS[key]);
	});
}

module.exports = {
	Commands: COMMANDS,
	LoadCommands: LoadCommands,
};
