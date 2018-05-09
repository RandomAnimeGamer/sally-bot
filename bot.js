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
            case 'list':
                bot.sendMessage({ to: channelID,
                    message: '```Sally:\n!sally\n!realsally\n!calmsally\n!madsally\n!rnrsally\n!delet\n!deletin```'
                                });
                bot.sendMessage({ to: channelID,
                    message: '```Storm:\n!gen\n!maskedgod\n!classic\n!rq\n!ACD\n!dissagree\n!hanzoumad```'
                });
                bot.sendMessage({ to: channelID,
                    message: '```Ibuse:\n!ibuse\n!ibuseback\n!ibusecheeks\n!ibusefull\n!ibuselel\n!ibusespit\n!ibuseu2\n!ibusewat```'
                });
            break;
            case 'sally':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/1.png" } }
                });
            break;
            case 'realsally':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/2.png" } }
                });
            break;
            case 'calmsally':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/3.png" } }
                });
            break;
            case 'madsally':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/4.png" } }
                });
            break;
            case 'rnrsally':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/5.png" } }
                });
            break;
            case 'delet':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/6.png" } }
                });
            break;
            case 'deletin':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/7.png" } }
                });
            break;
                
            case 'gen':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/Gen.jpg"
                                    } }
                });
            break;
            case 'maskedgod':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/MaskedGod.png"
                               } }
                });
            break;
            case 'classic':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/classic.gif"
                               } }
                });
            break;
            case 'ACD':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/ACD.gif"
                               } }
                });
            break;
            case 'dissagree':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/dissagree.png"
                               } }
                });
            break;
            case 'hanzoumad':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/hanzoumad.jpg"
                               } }
                });
            break;
            case 'ibuse':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/ibuse.png"
                               } }
                });
            break;
            case 'ibuseback':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/ibuseback.png"
                               } }
                });
            break;
            case 'ibusecheeks':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: {
                            url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/ibusecheeks.png"
                               } }
                });
            break;
            case 'ibusefull':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/ibusefull.png"
                               } }
                });
            break;
            case 'ibuselel':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/ibuselel.png"
                               } }
                });
            break;
            case 'ibusespit':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/ibusespit.png"
                               } }
                });
            break;
            case 'ibuseu2':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/ibuseu2.png"
                               } }
                });
            break;
            case 'ibusewat':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/ibusewat.png"
                               } }
                });
            break;
            case 'rq':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/rq.png"
                               } }
                });
            break;
         }
     }
});
