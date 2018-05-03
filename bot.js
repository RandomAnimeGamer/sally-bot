var Discord = require('discord.io');
var logger = require('winston');
//var auth = require('./auth.json');

var refresh = true;

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: process.env.BOT_TOKEN,
   autorun: true
});
bot.on('ready', function (evt) {
    refresh = true;
    logger.info('Connected');
    logger.info('Logged in as: ' + bot.username + ' - (' + bot.id + ')\n');
});

bot.on('disconnect', function(erMsg, code) {
    console.log('----- Bot disconnected from Discord with code', code, 'for reason:', erMsg, '-----');
    if(refresh) {
        console.log('Attempting to reconnect...\n');
        setTimeout(bot.connect.bind(bot), 1000);
    } else {
        console.log('No reconnect requested...\n');
    }
});

bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`

    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
        args = args.splice(1);

        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;
            case '1':
                bot.sendMessage({
                    to: channelID,
                    message: '',
                    embed: {
                        image: {
                            url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/1.png"
                        }
                    }
                });
            break;
            case '2':
                bot.sendMessage({
                    to: channelID,
                    message: '',
                    embed: {
                        image: {
                            url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/2.png"
                        }
                    }
                });
            break;

            // Just add any case commands if you want to..
         }
     }
});
