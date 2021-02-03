const UPDATE_INTERVAL = 3000;

class Scheduler
{
	channel = null;

	constructor(channel, schedule)
	{
		this.channel = channel;
		this.update = setInterval(() => this.DoUpdate(), UPDATE_INTERVAL);
	}

	DoUpdate()
	{
		Bot.channels.cache.get(this.channel.ru).send('Hello here!');
		Bot.channels.cache.get(this.channel.en).send('@Hunger Games');
	}
}

module.exports = Scheduler;
