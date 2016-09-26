// Node Modules

var TelegramBot = require('node-telegram-bot-api-latest');
var config = require('./config.json');

// Initaite Bot Polling
var tg = new TelegramBot(config.token, {
    polling: true
});

module.exports = tg;
