const HungryRole = global.Constants.HungryRole;
const ConnectLink = global.Constants.ConnectLink;

class Record{
	constructor(eng, rus){
		this.eng = eng;
		this.rus = rus;
	}

	Get(lang, data){
		if (data){
			return this[lang](data);
		}
		return this[lang];
	}
}

const Strings = {
	GamesStart: new Record(
		`<@&${HungryRole}> The games have begun! Type "HG" in the search bar to find the server or use the link (the game has to be closed)\n${ConnectLink}`,
		`<@&${HungryRole}> Игры начались! Введи "HG" в поиске чтоб найти сервер, либо используй ссылку (игра должны быть закрыта)\n${ConnectLink}`
	),

	/*
	GameStatus: new Record(
		function(data){
			let {day, isClosed, timeUntillClosed, players, alive} = data;
			return isClosed ?
			"Текущая игра уже **закрыта** для новых игроков. Увидимся на следующих играх!" :
			`*Статус игры:* День: **${day}** (игры будут закрыты для новых игроков через ${timeUntillClosed} дней). Игроков на сервере ${players} (из них живых: ${alive})`
		},
		function(data){
			let {day, isClosed, timeUntillClosed, players, alive} = data;
			return isClosed ?
			"The current game is **closed** for newcomers. See you on the next games!" :
			`*Game status:* Day: **${day}** (the game will be closed for newcomers in ${timeUntillClosed} days). Players on server: ${players} (alive: ${alive})`
		},
	),*/

	StatusTitle: new Record(
		"Game status",
		"Статус игры"
	),
	StatusNoGames: new Record(
		"No active games",
		"Нет активных игр"
	),
	StatusNoGamesDesc: new Record(
		"Type \"when hg\" to get current games schedule",
		"Напиши \"когда игры\" чтоб узнать текущее расписание"
	),
	StatusClosed: new Record(
		"The current game is closed for newcomers.",
		"Текущая игра уже закрыта для новых игроков."
	),
	StatusClosedDesc: new Record(
		"See you on the **next** games!",
		"Увидимся на **следующих** играх!"
	),
	StatusDay: new Record(
		"Day: ",
		"День: "
	),
	StatusCloses: new Record(
		"Closes for newcomers in:",
		"Закроется для новых игроков через:"
	),
	Days: new Record(
		"days",
		"дней"
	),
	StatusPlayers: new Record(
		"Players on server:",
		"Игроков на сервере:"
	),
	StatusAlive: new Record(
		"Aliver:",
		"Живых:"
	),

	CommandTitle: new Record(
		"Commands:",
		"Команды:"
	),
	Commands: {
		help: new Record(
			"Displays all avalible comamands",
			"Выводит все доступные команды"
		),
		ping: new Record(
			"Pong",
			"Понг"
		),
		status: new Record(
			"Displays status for the current game",
			"Показывает статус текущей игры"
		),
	},


}

module.exports = Strings