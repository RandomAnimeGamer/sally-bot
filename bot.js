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

        switch(cmd.toLowerCase()) {
            case 'list':
                bot.sendMessage({ to: channelID,
message: '```Sally:\n!sally\n!realsally\n!calmsally\n!madsally\n!rnrsally\n!rnrsally2\n!delet\n!deletin\n!ripinsally1\n!ripinsally2\n!sallygud\n!sallystance\n!sallyumad\n!ubsally\n!thirstysally\n!thirst\n\nIbuse:\n!ibuse\n!ibuseback\n!ibusecheeks\n!ibusefull\n!ibuselel\n!ibusespit\n!ibuseu2\n!ibusewat```'
                });
                bot.sendMessage({ to: channelID,
message: '```Naruto:\n!hanzoumad\n!mad\n!umff\n!sakuratilt\n!sauce\n!midtier\n!dashgud\n!thesepain\n!narutodab\n!madshirama\n!wat\n!madbito\n!madsauce\n!orop\n\nStorm:\n!gen\n!gen2\n!gen3\n!s4\n!maskedgod\n!classic\n!rq\n!ACD\n!fullACD\n!amodesauce\n!coolstorybro\n!dab\n!kuroshika\n!narumad\n!thatsenough\n!mmgg\n!s3\n!ottekoi\n!nocounter\n!noneutral\n!dc\n!legitking\n\nCommunity:\n!dissagree\n!trumeta\n!jonah1\n!jonah2\n!himiko\n!legit\n!loicksama\n!ninjaGBA\n!und3\n!council4\n!comments\n!justminatothings\n!tryhards\n!s2meta\n!funskill\n!crim\n!kalathegod\n!playco\n!s3scrubs\n!thoseshits\n!advancedmechanics\n!crimfection\n!drant1s\n!iguess\n!iguess2\n!legitburial\n!legithanzo\n!legitraze\n!nikus4\n!pussylmao\n!razebar\n!trilogy\n!crucify\n\nS4:\n!amode\n!bromance1\n!bromance2\n!calmkabuto\n!chidori\n!doubleamode\n!kakU2\n!jubi\n!khronoskutsus\n!lowtier\n!mad2\n!madbito1\n!madbito2\n!noobcrusher\n!nostalgiablind1\n!nostalgiablind2\n!nothingpersonell\n!playings4\n!madguy\n!rasengan\n!srssauce\n!talknojutsu\n!U3\n!mevsnewgens\n!yellowfucked```'
                });
                bot.sendMessage({ to: channelID,
message: '```AB:\n\n!hyperqr\n!hyperlum\n!(insert AB emote)\n!minatoidfa\n\nEtc:\n!list2\n!hyperthink\n!hyperthonk\n!drugckles\n!itshappenin\n!tru\n!same\n!bbtag\n!bbtag2\n!bbtag3\n!mood\n!10outta10\n!360A\n!dancingallnight\n!dancingallnight2\n!donkeyraped\n!falcodab\n!granddad\n!moviegames\n!mute\n!rufr\n!tomfucked\n!watermark\n!kek\n!kek2\n!kekatsuki\n!ashkekchem\n!lilkek\n!elkek\n!eyes\n!fuckingsame\n!keikaku\n!kekaku\n!mayurirf\n!discord\n!suzumebachi1-4\n!bestgirl```'
                });
                bot.sendMessage({ to: channelID,
message: '```srs:\n!youtube\n!twitch\n!cKunai\n!tiers\n!MUs\n!terms\n!quotes```'
                });
            break;
            case 'youtube':
                bot.sendMessage({ to: channelID,
                    message: 'https://www.youtube.com/channel/UC1KwFgwFSygLQ6bP3Ga8pEg'
                });
            break;
            case 'twitch':
                bot.sendMessage({ to: channelID,
                    message: 'https://www.twitch.tv/UNSGCommunity'
                });
            break;
            case 'twitch2':
                bot.sendMessage({ to: channelID,
                    message: 'https://www.twitch.tv/TehKutsuu'
                });
            break;
            case 'twitch3':
                bot.sendMessage({ to: channelID,
                    message: 'https://www.twitch.tv/Shizuku_Mizuki'
                });
            break;
            case 'ckunai':
                bot.sendMessage({ to: channelID,
                    message: 'https://docs.google.com/document/d/10zehzjK7o1-p5-ZYgubn-CpkBk3QAbTfxQpfDfEb7PE/edit'
                });
            break;
            case 'tier':
                bot.sendMessage({ to: channelID,
                    message: 'https://docs.google.com/drawings/d/1Qy83BggQ0N2RpYb3bwKcb0eEj2dqmLpe3DNuWG_JzL8/edit'
                });
            break;
            case 'tiers':
                bot.sendMessage({ to: channelID,
                    message: 'https://docs.google.com/drawings/d/1Qy83BggQ0N2RpYb3bwKcb0eEj2dqmLpe3DNuWG_JzL8/edit'
                });
            break;
            case 'mu':
                bot.sendMessage({ to: channelID,
                    message: 'https://docs.google.com/spreadsheets/d/1wzkzkGx0ws3F0VkRz9soOyE1bBsohN4Tjq9Nhrq4F6Y/edit#gid=0'
                });
            break;
            case 'mus':
                bot.sendMessage({ to: channelID,
                    message: 'https://docs.google.com/spreadsheets/d/1wzkzkGx0ws3F0VkRz9soOyE1bBsohN4Tjq9Nhrq4F6Y/edit#gid=0'
                });
            break;
            case 'term':
                bot.sendMessage({ to: channelID,
                    message: 'https://docs.google.com/document/d/1AgfeLN2lToy6D2KYoSAXz3FDlHXRE-Szx1kwJVqblPM/edit'
                });
            break;
            case 'terms':
                bot.sendMessage({ to: channelID,
                    message: 'https://docs.google.com/document/d/1AgfeLN2lToy6D2KYoSAXz3FDlHXRE-Szx1kwJVqblPM/edit'
                });
            break;
            case 'quote':
                bot.sendMessage({ to: channelID,
                    message: 'https://docs.google.com/document/d/1ps_a1qAlWjdBV91c99kLognj-zBhA3OXRcdGmP2BgA8/edit'
                });
            break;
            case 'quotes':
                bot.sendMessage({ to: channelID,
                    message: 'https://docs.google.com/document/d/1ps_a1qAlWjdBV91c99kLognj-zBhA3OXRcdGmP2BgA8/edit'
                });
            break;
                
                
                
            case 'crucify':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arcade-edition/crucify.png"
                    } }
                });
            break;
            case 'advancedmechanics':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arcade-edition/advancedmechanics.png"
                    } }
                });
            break;
            case 'crimfection':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arcade-edition/crimfection.png"
                    } }
                });
            break;
            case 'dc':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arcade-edition/dc.png"
                    } }
                });
            break;
            case 'drant1s':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arcade-edition/drant1s.png"
                    } }
                });
            break;
            case 'iguess':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arcade-edition/iguess.png"
                    } }
                });
            break;
            case 'iguess2':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arcade-edition/iguess2.png"
                    } }
                });
            break;
            case 'legitburial':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arcade-edition/legitburial.png"
                    } }
                });
            break;
            case 'legithanzo':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arcade-edition/legithanzo.png"
                    } }
                });
            break;
            case 'legitking':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arcade-edition/legitking.png"
                    } }
                });
            break;
            case 'legitraze':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arcade-edition/legitraze.png"
                    } }
                });
            break;
            case 'nikus4':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arcade-edition/nikus4.jpg"
                    } }
                });
            break;
            case 'pussylmao':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arcade-edition/pussylmao.png"
                    } }
                });
            break;
            case 'razebar':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arcade-edition/razebar.png"
                    } }
                });
            break;
            case 'suzumebachi1':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arcade-edition/suzumebachi1.png"
                    } }
                });
            break;
            case 'suzumebachi2':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arcade-edition/suzumebachi2.png"
                    } }
                });
            break;
            case 'suzumebachi3':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arcade-edition/suzumebachi3.png"
                    } }
                });
            break;
            case 'suzumebachi4':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arcade-edition/suzumebachi4.png"
                    } }
                });
            break;
            case 'trilogy':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arcade-edition/trilogy.png"
                    } }
                });
            break;
                
                
            case 'discord':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/discord.png"
                    } }
                });
            break;
            case 'kekaku':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/kekaku.png"
                    } }
                });
            break;
            case 'minatoidfa':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/minatoidfa.png"
                    } }
                });
            break;
            case 'ashkekchem':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/ashkekchem.png"
                    } }
                });
            break;
            case 'crim':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/crim.jpg"
                    } }
                });
            break;
            case 'elkek':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/elkek.png"
                    } }
                });
            break;
            case 'eyes':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/eyes.png"
                    } }
                });
            break;
            case 'fuckingsame':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/fuckingsame.png"
                    } }
                });
            break;
            case 'kalathegod':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/kalathegod.png"
                    } }
                });
            break;
            case 'keikaku':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/keikaku.jpg"
                    } }
                });
            break;
            case 'kek':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/kek3.png"
                    } }
                });
            break;
            case 'kek2':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/kek2.jpeg"
                    } }
                });
            break;
            case 'kekatsuki':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/kekatsuki.jpeg"
                    } }
                });
            break;
            case 'mayurirf':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/mayurirf.png"
                    } }
                });
            break;
            case 'lilkek':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/lilkek.png"
                    } }
                });
            break;
            case 'nocounter':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/nocounter.png"
                    } }
                });
            break;
            case 'noneutral':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/noneutral.png"
                    } }
                });
            break;
            case 'orop':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/orop.jpg"
                    } }
                });
            break;
            case 'playco.png':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/playco.png"
                    } }
                });
            break;
            case 's3scrubs':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/s3scrubs.png"
                    } }
                });
            break;
            case 'thoseshits':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/thoseshits.png"
                    } }
                });
            break;
                
                
            case '10outta10':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/10outta10.PNG"
                    } }
                });
            break;
            case '360a':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/360A.png"
                    } }
                });
            break;
            case 'dancingallnight2':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/dancingallnight2.gif"
                    } }
                });
            break;
            case 'dancingallnight':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/dancingallnight.gif"
                    } }
                });
            break;
            case 'donkeyraped':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/donkeyraped.png"
                    } }
                });
            break;
            case 'falcodab':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/falcodab.jpg"
                    } }
                });
            break;
            case 'funskill':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/funskill.png"
                    } }
                });
            break;
            case 'granddad':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/granddad.jpg"
                    } }
                });
            break;
            case 'madbito':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/madbito.png"
                    } }
                });
            break;
            case 'madsauce':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/madsauce.jpg"
                    } }
                });
            break;
            case 'moviegames':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/moviegames.jpg"
                    } }
                });
            break;
            case 'mute':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/mute.png"
                    } }
                });
            break;
            case 'rufr':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/rufr.png"
                    } }
                });
            break;
            case 's2meta':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/s2meta.png"
                    } }
                });
            break;
            case 'thirstysally':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/thirstysally.jpg"
                    } }
                });
            break;
            case 'thirst':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/thirstysally2.jpg"
                    } }
                });
            break;
            case 'tomfucked':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/tomfucked.gif"
                    } }
                });
            break;
            case 'tryhards':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/tryhards.jpg"
                    } }
                });
            break;
            case 'watermark':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/watermark.jpg"
                    } }
                });
            break;
                
                
            case 'bbtag3':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/latest/bbtag3.PNG"
                    } }
                });
            break;
            case 'gen3':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/latest/Gen3.png"
                    } }
                });
            break;
            case 'justminatothings':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/latest/justminatothings.PNG"
                    } }
                });
            break;
            case 'mood':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/latest/mood.gif"
                    } }
                });
            break;
            case 'ottekoi':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/latest/ottekoi.gif"
                    } }
                });
            break;
            case 'ubsally':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/latest/ubsally.png"
                    } }
                });
            break;
                
                
                
            case 'bbtag2':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/latest/bbtag2.png" } }
                });
            break;
            case 'comments':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/latest/comments.png" } }
                });
            break;
            case 'council4':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/latest/council4.png" } }
                });
            break;
            case 'hyperlum':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/latest/hyperlum.png" } }
                });
            break;
            case 'hyperqr':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/latest/hyperqr.png" } }
                });
            break;
            case 'hyperthink':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/latest/hyperthink.png" } }
                });
            break;
            case 'hyperthonk':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/latest/hyperthonk.png" } }
                });
            break;
            case 'legit':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/latest/legit.png" } }
                });
            break;
            case 'loicksama':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/latest/loicksama.png" } }
                });
            break;
            case 'ninjagba':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/latest/ninjaGBA" } }
                });
            break;
            case 'ripinsally1':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/latest/ripinsally1.png" } }
                });
            break;
            case 'ripinsally2':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/latest/ripinsally2.png" } }
                });
            break;
            case 'rnrsally2':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/latest/rnrsally2.png" } }
                });
            break;
            case 'sallymirror':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/latest/sallymirror.jpg" } }
                });
            break;
            case 's4':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/latest/s4.png" } }
                });
            break;
            case 'sallygud':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/latest/sallygud.png" } }
                });
            break;
            case 'sallystance':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/latest/sallystance.png" } }
                });
            break;
            case 'sallyumad':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/latest/sallyumad.png" } }
                });
            break;
            case 'same':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/latest/same.png" } }
                });
            break;
            case 'und3':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/latest/und3.png" } }
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
            case 'acd':
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
            case 'fullacd':
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
            case 'kaku2':
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
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/nothinpersonell.png"
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
            case 'u3':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/U3.png"
                               } }
                });
            break;
            case 'mevsnewgens':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/yellowfucked.png"
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
            case 'wat':
                bot.sendMessage({ to: channelID, message: '',
                    embed: {
                        image: { url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/wat.png"
                               } }
                });
            break;
                
                
                
                
            case ')':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/).png"
                    } }
                });
            break;
            case '@~@':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/@~@.png"
                    } }
                });
            break;
            case '=3=':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/=3=.png"
                    } }
                });
            break;
            case 'edsir':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/2sb093m.jpg.png"
                    } }
                });
            break;
            case '3':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/3.png"
                    } }
                });
            break;
            case 'facepalm':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/55ms9.gif"
                    } }
                });
            break;
            case 'coolguy':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/399940729.png"
                    } }
                });
            break;
            case 'annoyed':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/annoyed.png"
                    } }
                });
            break;
            case 'annoyed2':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/annoyed2.png"
                    } }
                });
            break;
            case 'annoyed3':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/annoyed3.png"
                    } }
                });
            break;
            case 'b':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/B.png"
                    } }
                });
            break;
            case 'backhand':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/backhand.jpg"
                    } }
                });
            break;
            case 'cry':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/bh-2.png"
                    } }
                });
            break;
            case 'blackguy':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/blackguy.png"
                    } }
                });
            break;
            case 'bomb':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/bomb.png"
                    } }
                });
            break;
            case 'brocknod':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/brocknod.gif"
                    } }
                });
            break;
            case 'bsnsguy':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/bsnsguy.png"
                    } }
                });
            break;
            case 'bsnsidfa':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/bsnsidfa - Copy.png"
                    } }
                });
            break;
            case 'c':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/C.png"
                    } }
                });
            break;
            case 'calmghost':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/calmghost.png"
                    } }
                });
            break;
            case 'calmkimi':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/calmkimi.png"
                    } }
                });
            break;
            case 'carltonplz':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/carltonplz.png"
                    } }
                });
            break;
            case 'chibi6tk':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/Chibi6TK.png"
                    } }
                });
            break;
            case 'clap':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/clap.gif"
                    } }
                });
            break;
            case 'cmonman':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/cmonman.png"
                    } }
                });
            break;
            case 'comeatme':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/comeatme.jpg"
                    } }
                });
            break;
            case 'cooldei':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/cooldei.png"
                    } }
                });
            break;
            case 'coolgal':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/coolgal.png"
                    } }
                });
            break;
            case 'coolidfa':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/coolidfa.png"
                    } }
                });
            break;
            case 'coolpalm':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/coolpalm.png"
                    } }
                });
            break;
            case 'coorguy':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/coorguy.jpg"
                    } }
                });
            break;
            case 'd':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/D.png"
                    } }
                });
            break;
            case 'danzoqr':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/danzoqr.png"
                    } }
                });
            break;
            case 'dd':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/DD.png"
                    } }
                });
            break;
            case 'ddd':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/DDD.png"
                    } }
                });
            break;
            case 'dead':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/dead.png"
                    } }
                });
            break;
            case 'deadchatcat':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/deadchatcat.gif"
                    } }
                });
            break;
            case 'deadchatcat2':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/deadchatcat2.gif"
                    } }
                });
            break;
            case 'deeznuts':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/deeznuts.jpg"
                    } }
                });
            break;
            case 'deisus':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/Deisus.png"
                    } }
                });
            break;
            case 'despeh':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/despeh.png"
                    } }
                });
            break;
            case 'devil':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/devil.png"
                    } }
                });
            break;
            case 'disdarui':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/disdarui.jpg"
                    } }
                });
            break;
            case 'dnl':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/dnl.png"
                    } }
                });
            break;
            case 'docqr':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/docqr.png"
                    } }
                });
            break;
            case 'drool':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/drool.png"
                    } }
                });
            break;
            case 'ecsalute':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/ecsalute.png"
                    } }
                });
            break;
            case 'ed2palm':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/ed2palm.png"
                    } }
                });
            break;
            case 'edpalm':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/edpalm.png"
                    } }
                });
            break;
            case 'edpipe':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/edpipe.png"
                    } }
                });
            break;
            case 'ec':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/eloquent contempt.png"
                    } }
                });
            break;
            case 'ed':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/eloquentdisdan.png"
                    } }
                });
            break;
            case 'ed2':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/eloquentdisdan3.png"
                    } }
                });
            break;
            case 'eskimoplz':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/eskimoplease.png"
                    } }
                });
            break;
            case 'fallenmoment':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/FallenMoment.png"
                    } }
                });
            break;
            case 'fallenmoment2':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/FallenMoment2.png"
                    } }
                });
            break;
            case 'fire':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/fire.png"
                    } }
                });
            break;
            case 'freezypop':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/FreezyPop.png"
                    } }
                });
            break;
            case 'full98':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/full98.png"
                    } }
                });
            break;
            case 'fuuma':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/fuuma.png"
                    } }
                });
            break;
            case 'gaynga':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/gaynga.png"
                    } }
                });
            break;
            case 'glados':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/GLaDOS.png"
                    } }
                });
            break;
            case 'grannyplz':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/grannyplz.png"
                    } }
                });
            break;
            case 'gun':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/GunWPEjr.png"
                    } }
                });
            break;
            case 'happyl':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/happyl.png"
                    } }
                });
            break;
            case 'heisenberg':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/heisenberg.png"
                    } }
                });
            break;
            case 'hyes':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/hyes.png"
                    } }
                });
            break;
            case 'icon_arrow':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/icon_arrow.gif"
                    } }
                });
            break;
            case 'icon_cool':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/icon_cool.gif"
                    } }
                });
            break;
            case 'icon_cry':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/icon_cry.gif"
                    } }
                });
            break;
            case 'icon_biggrin':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/icon_e_biggrin.gif"
                    } }
                });
            break;
            case 'icon_confused':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/icon_e_confused.gif"
                    } }
                });
            break;
            case 'icon_geek':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/icon_e_geek.gif"
                    } }
                });
            break;
            case 'icon_sad':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/icon_e_sad.gif"
                    } }
                });
            break;
            case 'icon_smile':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/icon_e_smile.gif"
                    } }
                });
            break;
            case 'icon_surprised':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/icon_e_surprised.gif"
                    } }
                });
            break;
            case 'icon_ugeek':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/icon_e_ugeek.gif"
                    } }
                });
            break;
            case 'icon_wink':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/icon_e_wink.gif"
                    } }
                });
            break;
            case 'icon_eek':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/icon_eek.gif"
                    } }
                });
            break;
            case 'icon_evil':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/icon_evil.gif"
                    } }
                });
            break;
            case 'icon_exclaim':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/icon_exclaim.gif"
                    } }
                });
            break;
            case 'icon_idea':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/icon_idea.gif"
                    } }
                });
            break;
            case 'icon_lol':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/icon_lol.gif"
                    } }
                });
            break;
            case 'icon_mad':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/icon_mad.gif"
                    } }
                });
            break;
            case 'icon_mrgreen':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/icon_mrgreen.gif"
                    } }
                });
            break;
            case 'icon_neutral':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/icon_neutral.gif"
                    } }
                });
            break;
            case 'icon_question':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/icon_question.gif"
                    } }
                });
            break;
            case 'icon_razz':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/icon_razz.gif"
                    } }
                });
            break;
            case 'icon_redface':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/icon_redface.gif"
                    } }
                });
            break;
            case 'icon_rolleyes':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/icon_rolleyes.gif"
                    } }
                });
            break;
            case 'icon_twisted':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/icon_twisted.gif"
                    } }
                });
            break;
            case 'idfa':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/idfa.png"
                    } }
                });
            break;
            case 'idk':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/idk.png"
                    } }
                });
            break;
            case 'itachifacepalm':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/itatchifp.png"
                    } }
                });
            break;
            case 'japqr':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/japqr.png"
                    } }
                });
            break;
            case 'jessebb':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/jessebb.png"
                    } }
                });
            break;
            case 'konandang':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/konandang.png"
                    } }
                });
            break;
            case 'konandfa':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/konandfa.png"
                    } }
                });
            break;
            case 'konanqr':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/Konanqr.png"
                    } }
                });
            break;
            case 'konanumad':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/Konanumad.png"
                    } }
                });
            break;
            case 'kyle':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/kyle.png"
                    } }
                });
            break;
            case 'lidfa':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/lidfa.png"
                    } }
                });
            break;
            case 'lightrf':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/lightrf.png"
                    } }
                });
            break;
            case 'love':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/love.png"
                    } }
                });
            break;
            case 'lutherumad':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/Lutherumad.png"
                    } }
                });
            break;
            case 'mad3':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/mad.png"
                    } }
                });
            break;
            case 'madghost':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/madghost.png"
                    } }
                });
            break;
            case 'madkuzu':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/madkuzu.jpg"
                    } }
                });
            break;
            case 'matsumad':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/matsumad.png"
                    } }
                });
            break;
            case 'matsurf':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/matsurf.png"
                    } }
                });
            break;
            case 'mkidfa':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/mkidfa.png"
                    } }
                });
            break;
            case 'music':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/music.png"
                    } }
                });
            break;
            case 'narahaha':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/Narahaha.png"
                    } }
                });
            break;
            case 'naruqr':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/naruqr.png"
                    } }
                });
            break;
            case 'naruramenchan':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/NaruRamenChan.png"
                    } }
                });
            break;
            case '98':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/ngawin.png"
                    } }
                });
            break;
            case 'ninja':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/ninja.png"
                    } }
                });
            break;
            case 'no':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/no.png"
                    } }
                });
            break;
            case 'nokashi':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/nokashi.png"
                    } }
                });
            break;
            case 'o':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/o.png"
                    } }
                });
            break;
            case 'obiorb':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/obiorb.png"
                    } }
                });
            break;
            case 'obitosrs':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/obitosrs.png"
                    } }
                });
            break;
            case 'oo':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/oo.png"
                    } }
                });
            break;
            case 'ooo':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/ooo.png"
                    } }
                });
            break;
            case 'oooo':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/oooo.png"
                    } }
                });
            break;
            case 'ouch':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/ouch.png"
                    } }
                });
            break;
            case 'pipeguy':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/pipeguy.png"
                    } }
                });
            break;
            case 'PissedVoid':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/PissedVoid.png"
                    } }
                });
            break;
            case 'plzguy':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/plzguy.png"
                    } }
                });
            break;
            case 'plzkarin':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/plzkarin.png"
                    } }
                });
            break;
            case 'qr':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/qr-1.png"
                    } }
                });
            break;
            case 'qrs':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/qrs.png"
                    } }
                });
            break;
            case 'rage':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/rage.png"
                    } }
                });
            break;
            case 'ragequit':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/ragequit.png"
                    } }
                });
            break;
            case 'ramenchan':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/RamenChan.png"
                    } }
                });
            break;
            case 'rapeapeab':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/rapeapeAB.png"
                    } }
                });
            break;
            case 'rapedsakura':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/RapedSakura.png"
                    } }
                });
            break;
            case 'reirf':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/reirf.png"
                    } }
                });
            break;
            case 'sadguy':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/sadguy.png"
                    } }
                });
            break;
            case 'scatman':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/scatman.png"
                    } }
                });
            break;
            case 'sekieiintensifies':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/sekieiintensifies.PNG"
                    } }
                });
            break;
            case 'seriousl':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/seriousl.png"
                    } }
                });
            break;
            case 'shy':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/shy.png"
                    } }
                });
            break;
            case 'sick':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/sick.png"
                    } }
                });
            break;
            case 'sleep':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/sleep.png"
                    } }
                });
            break;
            case 'slowbito':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/slowbito.png"
                    } }
                });
            break;
            case 'slowburn':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/SlowBurn.png"
                    } }
                });
            break;
            case 'slowguy':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/slowguy.png"
                    } }
                });
            break;
            case 'slowidfa':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/slowidfa.png"
                    } }
                });
            break;
            case 'slowsuji':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/SlowSuji2.png"
                    } }
                });
            break;
            case 'slowsuji2':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/SlowSujiNoEyes.png"
                    } }
                });
            break;
            case 'slowzo':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/slowzo.png"
                    } }
                });
            break;
            case 'smoke':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/smoke.png"
                    } }
                });
            break;
            case 'smugguy':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/smugguy.png"
                    } }
                });
            break;
            case 'smugloli':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/smugloli.png"
                    } }
                });
            break;
            case 'smugqueen':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/smugqueen.png"
                    } }
                });
            break;
            case 'snaking':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/snaking.png"
                    } }
                });
            break;
            case 'srsgal':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/srsgal.png"
                    } }
                });
            break;
            case 'srslars':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/srsLars.png"
                    } }
                });
            break;
            case 'srsnga':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/srsnga.png"
                    } }
                });
            break;
            case 'suffering':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/suffering.png"
                    } }
                });
            break;
            case 'swag':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/swagswagswagswagswag.png"
                    } }
                });
            break;
            case 't':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/t.png"
                    } }
                });
            break;
            case 'terriblefate':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/TerribleFate.png"
                    } }
                });
            break;
            case 'thatguy':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/thatguy.png"
                    } }
                });
            break;
            case 'thatpain':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/thatpain.png"
                    } }
                });
            break;
            case 'thisguy':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/thisguy.png"
                    } }
                });
            break;
            case 'thisidfa':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/thisidfa.png"
                    } }
                });
            break;
            case 'thisnga':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/thisnga.png"
                    } }
                });
            break;
            case 'thispain':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/thispain.png"
                    } }
                });
            break;
            case 'thispalm':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/thispalm.png"
                    } }
                });
            break;
            case 'thissage':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/thissage.png"
                    } }
                });
            break;
            case 'toptierkonan':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/toptierkonan.png"
                    } }
                });
            break;
            case 'toughnga':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/toughnga.png"
                    } }
                });
            break;
            case 'toughqueen':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/toughqueen.png"
                    } }
                });
            break;
            case 'trollnoki':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/trollnoki.png"
                    } }
                });
            break;
            case 'ultimatewiki':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/ultimatewikilogo.png"
                    } }
                });
            break;
            case 'victory':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/victory.png"
                    } }
                });
            break;
            case 'victorypalm':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/victorypalm.png"
                    } }
                });
            break;
            case 'virus':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/virus.png"
                    } }
                });
            break;
            case 'wdfa':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/wdfa.png"
                    } }
                });
            break;
            case 'wessanbus':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/wessanbus.png"
                    } }
                });
            break;
            case 'wessanbus2':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/wessanbus2.png"
                    } }
                });
            break;
            case 'wessanbus3':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/wessanbus3.png"
                    } }
                });
            break;
            case 'xd':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/XD.png"
                    } }
                });
            break;
            case 'yamato':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/yamato.png"
                    } }
                });
            break;
            case 'yugidfa':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/yugidfa.png"
                    } }
                });
            break;
            case 'yugieatshit':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/yugieatshit.png"
                    } }
                });
            break;
            case 'zombie':
                bot.sendMessage({ to: channelID, message: '',
                    embed: { image: {
                        url: "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/zombie.png"
                    } }
                });
            break;
         }
     }
});
