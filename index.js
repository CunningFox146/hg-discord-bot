require('dotenv').config();

const Discord = require('discord.js');
const Scheduler = require("./scheduler")
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const botCommands = require('./commands');

Object.keys(botCommands).map(key => {
	bot.commands.set(botCommands[key].name, botCommands[key]);
});

const TOKEN = process.env.TOKEN;
const NOTIFICATION_CHANNEL = {
	ru: process.env.NOTIF_RU,
	en: process.env.NOTIF_ENG,
}

bot.login(TOKEN);

global.Bot = bot;

bot.on('ready', () => {
	console.info(`Logged in as ${bot.user.tag}!`);
	new Scheduler(NOTIFICATION_CHANNEL);
});

bot.on('message', msg => {
	const args = msg.content.split(/ +/);
	const command = args.shift().toLowerCase();
	console.info(`Called command: ${command}`);

	if (!bot.commands.has(command)) return;

	try {
		bot.commands.get(command).execute(msg, args);
	} catch (error) {
		console.error(error);
		msg.reply('there was an error trying to execute that command!');
	}
});