require('dotenv').config();

const Discord = require('discord.js');
global.Discord = Discord;

const EventEmitter = require('events');

global.Constants = {
	NotificationChannel: {
		ru: process.env.NOTIF_RU,
		en: process.env.NOTIF_ENG,
	},
	CommandStart: process.env.COMMAND_START,
	HungryRole: process.env.HUNGRY_ROLE_ID,
	ConnectLink: process.env.SERVER_CONNECT_LINK,
	EmbedColor: "#f2e340",
}
global.Strings = require("./strings")
global.eventEmmiter = new EventEmitter()

const HgBot = require("./bot")
global.Bot = new HgBot(process.env.TOKEN)

require("./app") // Load app AFTER our bot is initialized