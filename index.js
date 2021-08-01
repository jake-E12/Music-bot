const credentials = require('./credentials.json');

const Discord = require('discord.js');

const bot = new Discord.Client();

const Distube = require('distube');

const distube = new Distube(bot, { searchSongs: false, emitNewSongOnly: true });

bot.on('ready', () => {
    console.log("Bot is ready!");
});

bot.on('message', (message) => {
    if (!message.content.startsWith("!play") || (distube.isPlaying(message))) {
        console.log("Already playing a song");
    }
    if (message.content == "!stop") {
        distube.stop(message);
    }
    let msg = message.content.split(" ");
    msg.shift();
    if (message.content.includes("!play"));
    distube.play(message, msg.join(" "));
});


bot.login(credentials.discord_token);