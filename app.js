const express = require("express");
const GamesStatus = require("./games_status")

const app = express();
const jsonParser = express.json();

global.CurrentGameStatus = null;

function CommonJsonPost(path, fn){
	return app.post(path, jsonParser, function (request, response) {
		if(!request.body) return response.sendStatus(400);
		
		const val = fn(request, response);
		if (val === undefined)
		{
			response.sendStatus(200);
		}
	});
}

function OnGameStatus(status) {
	console.log("Got game update", status);
	let gameStatus = new GamesStatus(status);
	global.CurrentGameStatus = gameStatus
	global.eventEmmiter.emit("game_status_update", gameStatus)
	console.log(global.CurrentGameStatus.toString());
}

CommonJsonPost("/gamestart", function (request, response) {
	OnGameStatus(request.body);
	global.eventEmmiter.emit("game_start", global.CurrentGameStatus)
});

CommonJsonPost("/gamestatus", function (request, response) {
	OnGameStatus(request.body);
});

app.listen(3000);