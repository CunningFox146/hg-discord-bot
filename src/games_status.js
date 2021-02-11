class GamesStatus{
	day = 1;
	isClosed = false;
	timeUntillClosed = 0;
	players = 0;
	alive = 0;

	constructor(data){
		this.day = data.day ?? 1;
		this.isClosed = data.isClosed ?? false;
		this.timeUntillClosed = data.timeUntillClosed ?? 0;
		this.players = data.players ?? 0;
		this.alive = data.alive ?? 0;
	}
	toString() {return `day: ${this.day}(${this.isClosed ? "closed" : "open"})${!this.isClosed ? `(closed in ${this.timeUntillClosed})` : ""}\n\tplayers(${this.alive}/${this.players}))`}
}

module.exports = GamesStatus