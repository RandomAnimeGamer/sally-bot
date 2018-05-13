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
                    message: '```Storm:\n!gen\n!gen2\n!maskedgod\n!classic\n!rq\n!ACD\n!dissagree\n!amodesauce\n!coolstorybro\n!dab\n!trumeta\n!kuroshika\n!narumad\n!thatsenough\n!mmgg```'
                });
                bot.sendMessage({ to: channelID,
                    message: '```Naruto:\n!hanzoumad\n!mad\n!umff\n!sakuratilt\n!sauce\n!midtier\n!dashgud\n!thesepain\n!narutodab\n!madshirama```'
                });
                bot.sendMessage({ to: channelID,
                    message: '```Ibuse:\n!ibuse\n!ibuseback\n!ibusecheeks\n!ibusefull\n!ibuselel\n!ibusespit\n!ibuseu2\n!ibusewat```'
                });
                bot.sendMessage({ to: channelID,
                    message: '```Etc:\n!drugckles\n!itshappenin\n!tru\n!bbtag```'
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
                
                
            case 'amodesauce':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/amodesauce.png"
                               } }
                });
            break;
            case 'coolstorybro':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/coolstorybro.png"
                               } }
                });
            break;
            case 'dab':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/dab.png"
                               } }
                });
            break;
            case 'drugckles':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/drugckles.png"
                               } }
                });
            break;
            case 'gen2':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/gen2.png"
                               } }
                });
            break;
            case 'itshappenin':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/itshappening.png"
                               } }
                });
            break;
            case 'mad':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/mad.png"
                               } }
                });
            break;
            case 'trumeta':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/meta.png"
                               } }
                });
            break;
            case 'midtier':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/midtier.jpg"
                               } }
                });
            break;
            case 'kuroshika':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/minatokuroshika.png"
                               } }
                });
            break;
            case 'mmgg':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/mmgg.png"
                               } }
                });
            break;
            case 'narumad':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/narumad.png"
                               } }
                });
            break;
            case 'sakuratilt':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/sakuratilt.png"
                               } }
                });
            break;
            case 'sauce':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/sauce.jpg"
                               } }
                });
            break;
            case 'thatsenough':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/thatsenough.png"
                               } }
                });
            break;
            case 'tru':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/tru.jpg"
                               } }
                });
            break;
            case 'umff':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/umff.jpg"
                               } }
                });
            break;
            case 'dashgud':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/dashgud.png"
                               } }
                });
            break;
            case 'thesepain':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/thesepain.png"
                               } }
                });
            break;
            case 'narutodab':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/NarutoDab.png"
                               } }
                });
            break;
            case 'madshirama':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/madshirama.png"
                               } }
                });
            break;
            case 'bbtag':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/bbtag stick.png"
                               } }
                });
            break;
         }
     }
});
