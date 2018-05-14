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
                    message: '```Sally:\n!sally\n!realsally\n!calmsally\n!madsally\n!rnrsally\n!delet\n!deletin\n\nIbuse:\n!ibuse\n!ibuseback\n!ibusecheeks\n!ibusefull\n!ibuselel\n!ibusespit\n!ibuseu2\n!ibusewat```'
                                });
                bot.sendMessage({ to: channelID,
                    message: '```Naruto:\n!hanzoumad\n!mad\n!umff\n!sakuratilt\n!sauce\n!midtier\n!dashgud\n!thesepain\n!narutodab\n!madshirama\n\nStorm:\n!gen\n!gen2\n!maskedgod\n!classic\n!rq\n!ACD\n!fullACD\n!amodesauce\n!coolstorybro\n!dab\n!kuroshika\n!narumad\n!thatsenough\n!mmgg\n!s3\n\nCommunity:\n!dissagree\n!trumeta\n!jonah1\n!jonah2\nhimiko\n\nS4:\n!amode\n!bromance1\n!bromance2\n!calmkabuto\n!chidori\n!doubleamode\n!kakU2\n!jubi\n!khronoskutsus\n!lowtier\n!mad2\n!madbito1\n!madbito2\n!noobcrusher\n!nostalgiablind1\n!nostalgiablind2\n!nothingpersonell\n!playings4\n!madguy\n!rasengan\n!srssauce\n!talknojutsu\n!U3\n!yellowfucked```'
                });
                bot.sendMessage({ to: channelID,
                    message: '```Etc:\n!list2\n!drugckles\n!itshappenin\n!tru\n!bbtag\n!bestgirl```'
                });
                bot.sendMessage({ to: channelID,
                    message: '```srs:\n!youtube\n!cKunai\n!tier\n!MU\n!term```'
                });
            break;
            case 'youtube':
                bot.sendMessage({ to: channelID,
                    message: 'https://www.youtube.com/channel/UC1KwFgwFSygLQ6bP3Ga8pEg'
                });
            break;
            case 'cKunai':
                bot.sendMessage({ to: channelID,
                    message: 'https://docs.google.com/document/d/10zehzjK7o1-p5-ZYgubn-CpkBk3QAbTfxQpfDfEb7PE/edit'
                });
            break;
            case 'tier':
                bot.sendMessage({ to: channelID,
                    message: 'https://docs.google.com/drawings/d/1Qy83BggQ0N2RpYb3bwKcb0eEj2dqmLpe3DNuWG_JzL8/edit'
                });
            break;
            case 'MU':
                bot.sendMessage({ to: channelID,
                    message: 'https://docs.google.com/spreadsheets/d/1wzkzkGx0ws3F0VkRz9soOyE1bBsohN4Tjq9Nhrq4F6Y/edit#gid=0'
                });
            break;
            case 'term':
                bot.sendMessage({ to: channelID,
                    message: 'https://docs.google.com/document/d/1AgfeLN2lToy6D2KYoSAXz3FDlHXRE-Szx1kwJVqblPM/edit'
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
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/bbtag.png"
                               } }
                });
            break;
            case 's3':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/s3.png"
                               } }
                });
            break;
                
                
            case 'jonah1':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/jonah1.jpg"
                               } }
                });
            break;
            case 'jonah2':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/jonah2.png"
                               } }
                });
            break;
            case 'himiko':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/himiko.png"
                               } }
                });
            break;
            case 'fullACD':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/fullACD2.gif"
                               } }
                });
            break;
                
                
            case 'amode':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/amode.png"
                               } }
                });
            break;
            case 'bromance1':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/bromance1.png"
                               } }
                });
            break;
            case 'bromance2':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/bromance2.png"
                               } }
                });
            break;
            case 'calmkabuto':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/calmkabuto.png"
                               } }
                });
            break;
            case 'chidori':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/chidori.png"
                               } }
                });
            break;
            case 'doubleamode':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/doubleamode.png"
                               } }
                });
            break;
            case 'kakU2':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/kakU2.png"
                               } }
                });
            break;
            case 'jubi':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/jubi.png"
                               } }
                });
            break;
            case 'khronoskutsus':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/khronosandkutsus.png"
                               } }
                });
            break;
            case 'lowtier':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/lowtier.png"
                               } }
                });
            break;
            case 'mad2':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/mad2.png"
                               } }
                });
            break;
            case 'madbito1':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/madbito1.png"
                               } }
                });
            break;
            case 'madbito2':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/madbito2.png"
                               } }
                });
            break;
            case 'madteam7':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/madteam7.png"
                               } }
                });
            break;
            case 'noobcrusher':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/noobcrusher.png"
                               } }
                });
            break;
            case 'nostalgiablind1':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/nostalgiablind1.png"
                               } }
                });
            break;
            case 'nostalgiablind2':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/nostalgiablind2.png"
                               } }
                });
            break;
            case 'nothingpersonell':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/nothingpersonell.png"
                               } }
                });
            break;
            case 'playings4':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/playings4.png"
                               } }
                });
            break;
            case 'madguy':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/rage.png"
                               } }
                });
            break;
            case 'rasengan':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/rasengan.png"
                               } }
                });
            break;
            case 'srssauce':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/srssauce.png"
                               } }
                });
            break;
            case 'talknojutsu':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/talknojutsu.png"
                               } }
                });
            break;
            case 'U3':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/U3.png"
                               } }
                });
            break;
            case 'yellowfucked':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/yellowfucked.png"
                               } }
                });
            break;
            case 'bestgirl':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/shizuku_excited.png"
                               } }
                });
            break;
            case 'list2':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/list2.PNG"
                               } }
                });
            break;
         }
     }
});
