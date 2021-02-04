const Discord = require('discord.js');
const Commands = require('./commands')

class HgBot{
	bot = null;

	constructor(token){
		console.log("HgBot ctor called")
		const bot = new Discord.Client();
		bot.commands = new Discord.Collection();
		
		Commands.LoadCommands(bot);

		this.RegisterListeners(bot)

		bot.login(token);

		this.bot = bot;
	}

	RegisterListeners = (bot)=>
	{
		bot.on('ready', () => {
			console.log(`Logged in as ${bot.user.tag}!`);
		});
		
		bot.on('message', msg => {
			console.log(msg.content);

			const args = msg.content.split(/ +/);
			const emoji = args.shift(); // This is the first arg (emoji)
			if (emoji != global.HgConst.CommandStart) return;
			const command = args.shift().toLowerCase(); // Get and remove first element, assuming it's the command

			console.log(`Called command: ${command}`);

			if (!bot.commands.has(command)) return;

			try {
				bot.commands.get(command).execute(msg, args);
			} catch (error) {
				console.error(error);
				msg.reply('there was an error trying to execute that command!');
			}
		});
	}
}

module.exports = HgBot;
