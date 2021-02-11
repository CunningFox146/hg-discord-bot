const Discord = require('discord.js');
const Commands = require('./commands')

class HgBot{
	bot = null;

	constructor(token){
		console.log("HgBot ctor called")
		const bot = new Discord.Client();
		bot.commands = new Discord.Collection();
		
		Commands.LoadCommands(bot);

		this.bot = bot;

		bot.login(token);
		this.RegisterListeners(bot)
	}

	SendMessage = (chat, msg)=>{
		this.bot.channels.fetch(chat)
			.then(channel => {
				if (channel)
					channel.send(msg);
				else
					console.warn(`Tried to send to invalid channel ${chat}`)
			});
	}

	RegisterListeners = ()=>{
		const bot = this.bot
		bot.on('ready', () => {
			console.log(`Logged in as ${bot.user.tag}!`);
		});
		
		bot.on('message', msg => {
			const args = msg.content.split(/ +/);
			const emoji = args.shift(); // This is the first arg (emoji)
			if (emoji != global.Constants.CommandStart) return;
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

		global.eventEmmiter.on('game_start', state => {
			this.OnGameStarted(state)
		})
	}

	OnGameStarted = (state) =>{
		console.log("Game started!")

		this.SendMessage(global.Constants.NotificationChannel.ru, global.Strings.Rus.GamesStart)
		this.SendMessage(global.Constants.NotificationChannel.en, global.Strings.Eng.GamesStart)
	}
}

module.exports = HgBot;
