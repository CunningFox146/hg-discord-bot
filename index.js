require('dotenv').config();

global.HgConst = {
	NotificationChannel: {
		ru: process.env.NOTIF_RU,
		en: process.env.NOTIF_ENG,
	},
	CommandStart: process.env.COMMAND_START,
}
global.Strings = require("./strings")

const HgBot = require("./bot")
global.Bot = new HgBot(process.env.TOKEN)
